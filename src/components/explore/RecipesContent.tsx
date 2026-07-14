'use client';

import { useEffect, useState, useRef, useCallback, useReducer } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container } from '@/components/common/Container';
import { RecipeGrid } from '@/components/recipe/RecipeGrid';
import { SearchBar } from '@/components/explore/SearchBar';
import { FilterBar } from '@/components/explore/FilterBar';
import { SortDropdown } from '@/components/explore/SortDropdown';
import { recipeService, type Recipe } from '@/services/recipe.service';
import { SkeletonCard } from '@/components/ui/SkeletonCard';
import { ErrorState } from '@/components/ui/ErrorState';
import { Sparkles } from 'lucide-react';

interface Filters {
  search?: string;
  category?: string;
  difficulty?: string;
  cookingTime?: string;
  sort?: string;
}

type FilterAction =
  | { type: 'SET_SEARCH'; payload: string }
  | { type: 'SET_CATEGORY'; payload: string }
  | { type: 'SET_DIFFICULTY'; payload: string }
  | { type: 'SET_COOKING_TIME'; payload: string }
  | { type: 'SET_SORT'; payload: string }
  | { type: 'RESET' }
  | { type: 'SET_FILTERS'; payload: Filters };

function filterReducer(state: Filters, action: FilterAction): Filters {
  switch (action.type) {
    case 'SET_SEARCH':
      return { ...state, search: action.payload };
    case 'SET_CATEGORY':
      return { ...state, category: action.payload };
    case 'SET_DIFFICULTY':
      return { ...state, difficulty: action.payload };
    case 'SET_COOKING_TIME':
      return { ...state, cookingTime: action.payload };
    case 'SET_SORT':
      return { ...state, sort: action.payload };
    case 'RESET':
      return {
        search: '',
        category: '',
        difficulty: '',
        cookingTime: '',
        sort: 'newest',
      };
    case 'SET_FILTERS':
      return action.payload;
    default:
      return state;
  }
}

export const RecipesContent = () => {
  const searchParams = useSearchParams();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const lastUrlRef = useRef<string>('/recipes');
  const abortControllerRef = useRef<AbortController | null>(null);

  // ✅ useReducer
  const [filters, dispatch] = useReducer(filterReducer, {
    search: searchParams.get('search') || '',
    category: searchParams.get('category') || '',
    difficulty: searchParams.get('difficulty') || '',
    cookingTime: searchParams.get('cookingTime') || '',
    sort: searchParams.get('sort') || 'newest',
  });

  const fetchRecipes = useCallback(async () => {
    // Cancel any in-flight request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const controller = new AbortController();
    abortControllerRef.current = controller;

    try {
      setIsLoading(true);
      setError(null);

      const params: Record<string, string | number> = {};

      if (filters.search) params.search = filters.search;
      if (filters.category) params.category = filters.category;
      if (filters.difficulty) params.difficulty = filters.difficulty;
      if (filters.cookingTime) params.cookingTime = filters.cookingTime;
      if (filters.sort) params.sort = filters.sort;

      const response = await recipeService.getRecipes(params, controller.signal);

      if (!controller.signal.aborted) {
        setRecipes(response.data || []);
      }
    } catch (err: any) {
      if (err?.code === 'ERR_CANCELED' || err?.name === 'AbortError' || err?.name === 'CanceledError') {
        return;
      }
      console.error('Failed to fetch recipes:', err);
      setError('Failed to load recipes. Please try again.');
      setRecipes([]);
    } finally {
      if (!controller.signal.aborted) {
        setIsLoading(false);
      }
    }
  }, [filters.search, filters.category, filters.difficulty, filters.cookingTime, filters.sort]);

  // ✅ Fetch effect - fetches when filters change
  useEffect(() => {
    fetchRecipes();
  }, [filters.search, filters.category, filters.difficulty, filters.cookingTime, filters.sort, fetchRecipes]);

  // ✅ URL sync effect
  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.search) params.set('search', filters.search);
    if (filters.category) params.set('category', filters.category);
    if (filters.difficulty) params.set('difficulty', filters.difficulty);
    if (filters.cookingTime) params.set('cookingTime', filters.cookingTime);
    if (filters.sort && filters.sort !== 'newest') params.set('sort', filters.sort);

    const query = params.toString();
    const url = query ? `/recipes?${query}` : '/recipes';

    if (url !== lastUrlRef.current) {
      lastUrlRef.current = url;
      window.history.replaceState(null, '', url);
    }
  }, [filters.search, filters.category, filters.difficulty, filters.cookingTime, filters.sort]);

  // ✅ Handlers
  const handleSearch = (query: string) => {
    dispatch({ type: 'SET_SEARCH', payload: query });
  };

  const handleFilterChange = (newFilters: Partial<Filters>) => {
    const updated: Filters = { ...filters };
    if (newFilters.category !== undefined) updated.category = newFilters.category;
    if (newFilters.difficulty !== undefined) updated.difficulty = newFilters.difficulty;
    if (newFilters.cookingTime !== undefined) updated.cookingTime = newFilters.cookingTime;
    dispatch({ type: 'SET_FILTERS', payload: updated });
  };

  const handleSortChange = (sort: string) => {
    dispatch({ type: 'SET_SORT', payload: sort });
  };

  const handleRetry = () => {
    fetchRecipes();
  };

  const handleResetFilters = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <div className="min-h-screen bg-[#FFFBF7] py-8 sm:py-12 md:py-16 pt-24">
      <Container>
        <div className="mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-[#E07A2F]" />
            <span className="text-[#E07A2F] text-xs font-medium tracking-[0.2em] uppercase">
              Discover
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D1B0E]">
            Explore <span className="text-[#E07A2F]">Recipes</span>
          </h1>
          <p className="text-[#7A6B5A] text-base sm:text-lg mt-1">
            Discover delicious recipes from our community
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="lg:col-span-1">
            <FilterBar
              filters={filters}
              onFilterChange={handleFilterChange}
              onReset={handleResetFilters}
            />
          </div>

          <div className="lg:col-span-3">
            <div className="mb-6 space-y-4">
              <SearchBar value={filters.search || ''} onChange={handleSearch} />
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <p className="text-[#7A6B5A] text-sm">
                  {recipes.length > 0 ? (
                    <>
                      <span className="font-medium text-[#2D1B0E]">
                        {recipes.length}
                      </span>{' '}
                      recipes found
                    </>
                  ) : (
                    'No recipes found'
                  )}
                </p>
                <SortDropdown
                  value={filters.sort || 'newest'}
                  onChange={handleSortChange}
                />
              </div>
            </div>

            {error && (
              <ErrorState
                title="Error Loading Recipes"
                description={error}
                onRetry={handleRetry}
              />
            )}

            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {[...Array(9)].map((_, i) => (
                  <SkeletonCard key={i} />
                ))}
              </div>
            ) : recipes.length === 0 ? (
              <div className="bg-white border border-[#F4A261]/10 rounded-3xl p-12 text-center shadow-xl shadow-[#F4A261]/5">
                <div className="w-20 h-20 rounded-full bg-[#F4A261]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🍽️</span>
                </div>
                <h3 className="font-display text-xl font-bold text-[#2D1B0E] mb-2">
                  No Recipes Found
                </h3>
                <p className="text-[#7A6B5A] text-sm mb-6">
                  Try adjusting your filters or search terms.
                </p>
                {(filters.search ||
                  filters.category ||
                  filters.difficulty ||
                  filters.cookingTime) && (
                  <button
                    onClick={handleResetFilters}
                    className="px-6 py-2.5 bg-gradient-to-r from-[#E07A2F] to-[#E9C46A] text-white font-medium rounded-xl hover:shadow-lg hover:shadow-[#E07A2F]/25 transition-all duration-300"
                  >
                    Reset Filters
                  </button>
                )}
              </div>
            ) : (
              <RecipeGrid recipes={recipes} />
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};












