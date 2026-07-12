'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { recipeSchema, type RecipeFormData } from '@/lib/recipe-validations';
import { recipeService, type Recipe } from '@/services/recipe.service';
import { ProtectedRoute } from '@/components/common/ProtectedRoute';
import { Container } from '@/components/common/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { EmptyState } from '@/components/ui/EmptyState';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { RECIPE_CATEGORIES } from '@/constants';
import { Pencil, Trash2, Eye, X } from 'lucide-react';

const difficultyLevels = [
  { label: 'Easy', value: 'Easy' },
  { label: 'Medium', value: 'Medium' },
  { label: 'Hard', value: 'Hard' },
];

export default function ManageRecipesPage() {
  const router = useRouter();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ingredients, setIngredients] = useState<string[]>(['']);
  const [instructions, setInstructions] = useState<string[]>(['']);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RecipeFormData>({
    resolver: zodResolver(recipeSchema),
    defaultValues: {
      ingredients: [''],
      instructions: [''],
    },
  });

  const loadRecipes = async () => {
    try {
      const response = await recipeService.getUserRecipes();
      setRecipes(response.data);
    } catch {
      toast.error('Failed to load recipes');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadRecipes();
  }, []);

  const openUpdateModal = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setIngredients(recipe.ingredients.length > 0 ? recipe.ingredients : ['']);
    setInstructions(recipe.instructions.length > 0 ? recipe.instructions : ['']);
    reset({
      title: recipe.title,
      shortDescription: recipe.shortDescription,
      description: recipe.description,
      category: recipe.category as RecipeFormData['category'],
      difficulty: recipe.difficulty as RecipeFormData['difficulty'],
      cookingTime: recipe.cookingTime,
      image: recipe.image,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
    });
    setUpdateModalOpen(true);
  };

  const handleUpdate = async (data: RecipeFormData) => {
    if (!selectedRecipe) return;

    setIsSubmitting(true);
    try {
      const updatedRecipe = await recipeService.updateRecipe(selectedRecipe._id, {
        ...data,
        ingredients: ingredients.filter(Boolean),
        instructions: instructions.filter(Boolean),
      });

      setRecipes(recipes.map((r) => (r._id === selectedRecipe._id ? updatedRecipe : r)));
      toast.success('Recipe updated successfully!');
      setUpdateModalOpen(false);
      setSelectedRecipe(null);
    } catch {
      toast.error('Failed to update recipe');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!selectedRecipe) return;

    try {
      await recipeService.deleteRecipe(selectedRecipe._id);
      toast.success('Recipe deleted');
      setRecipes(recipes.filter((r) => r._id !== selectedRecipe._id));
      setDeleteModalOpen(false);
      setSelectedRecipe(null);
    } catch {
      toast.error('Failed to delete recipe');
    }
  };

  if (isLoading) return <LoadingSpinner />;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background py-16">
        <Container>
          <div className="mb-12">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-text mb-3">Manage Recipes</h1>
            <p className="font-body text-lg text-text-secondary">Edit, delete, or view your culinary creations</p>
          </div>

          {recipes.length === 0 ? (
            <EmptyState
              title="No recipes yet"
              description="Start by creating your first recipe to get started"
            />
          ) : (
            <motion.div
              className="grid gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {recipes.map((recipe) => (
                <motion.div key={recipe._id} variants={itemVariants}>
                  <Card className="overflow-hidden hover:shadow-xl transition-all">
                    <div className="flex flex-col md:flex-row gap-6 p-6">
                      {/* Recipe Image */}
                      {recipe.image && (
                        <div className="md:w-40 md:h-40 flex-shrink-0">
                          <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="w-full h-40 md:h-40 object-cover rounded-lg border border-accent/20"
                          />
                        </div>
                      )}

                      <div className="flex-1 flex flex-col justify-between">
                        {/* Title and Description */}
                        <div className="mb-4">
                          <h3 className="font-display text-2xl font-bold text-text mb-2">
                            {recipe.title}
                          </h3>
                          <p className="font-body text-text-secondary line-clamp-2">
                            {recipe.shortDescription}
                          </p>
                        </div>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge className="bg-primary/10 text-primary border-primary/30">
                            {recipe.category}
                          </Badge>
                          <Badge className="bg-secondary/10 text-secondary border-secondary/30">
                            {recipe.difficulty}
                          </Badge>
                          <Badge className="bg-accent/10 text-text border-accent/30">
                            {recipe.cookingTime} min
                          </Badge>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-2">
                          <button
                            onClick={() => router.push(`/recipes/${recipe.slug}`)}
                            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-primary border-2 border-primary rounded-lg hover:bg-primary/5 transition-all"
                            title="View recipe"
                          >
                            <Eye size={16} />
                            View
                          </button>
                          <button
                            onClick={() => openUpdateModal(recipe)}
                            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-secondary border-2 border-secondary rounded-lg hover:bg-secondary/5 transition-all"
                            title="Edit recipe"
                          >
                            <Pencil size={16} />
                            Edit
                          </button>
                          <button
                            onClick={() => {
                              setSelectedRecipe(recipe);
                              setDeleteModalOpen(true);
                            }}
                            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-danger border-2 border-danger rounded-lg hover:bg-red-50 transition-all"
                            title="Delete recipe"
                          >
                            <Trash2 size={16} />
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Delete Confirmation Modal */}
          <Modal isOpen={deleteModalOpen} onClose={() => setDeleteModalOpen(false)} title="Delete Recipe">
            <div className="space-y-6">
              <p className="font-body text-text-secondary">
                Are you sure you want to delete this recipe? This action cannot be undone.
              </p>
              <div className="flex gap-3">
                <Button
                  variant="danger"
                  onClick={handleDelete}
                  className="flex-1"
                >
                  Delete
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => setDeleteModalOpen(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </Modal>

          {/* Update Recipe Modal */}
          <Modal
            isOpen={updateModalOpen}
            onClose={() => setUpdateModalOpen(false)}
            title="Update Recipe"
            size="3xl"
            scrollable={true}
          >
            <form onSubmit={handleSubmit(handleUpdate)} className="space-y-8">
              {/* Basic Info Section */}
              <div>
                <h3 className="font-display text-xl font-bold text-text mb-4">Basic Information</h3>
                <div className="space-y-4">
                  <Input
                    label="Recipe Title"
                    error={errors.title?.message}
                    {...register('title')}
                  />
                  <Input
                    label="Short Description"
                    error={errors.shortDescription?.message}
                    {...register('shortDescription')}
                  />
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-accent/20" />

              {/* Recipe Details Section */}
              <div>
                <h3 className="font-display text-xl font-bold text-text mb-4">Recipe Details</h3>
                <div className="space-y-4">
                  <Textarea
                    label="Full Description"
                    error={errors.description?.message}
                    {...register('description')}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Select
                      label="Category"
                      options={RECIPE_CATEGORIES.map((cat) => ({ label: cat, value: cat }))}
                      error={errors.category?.message}
                      {...register('category')}
                    />

                    <Select
                      label="Difficulty"
                      options={[
                        { label: 'Easy', value: 'Easy' },
                        { label: 'Medium', value: 'Medium' },
                        { label: 'Hard', value: 'Hard' },
                      ]}
                      error={errors.difficulty?.message}
                      {...register('difficulty')}
                    />

                    <Input
                      label="Cooking Time (min)"
                      type="number"
                      error={errors.cookingTime?.message}
                      {...register('cookingTime', { valueAsNumber: true })}
                    />
                  </div>

                  <Input
                    label="Image URL"
                    error={errors.image?.message}
                    {...register('image')}
                  />
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-accent/20" />

              {/* Ingredients Section */}
              <div>
                <h3 className="font-display text-xl font-bold text-text mb-4">Ingredients</h3>
                <div className="space-y-3 mb-4">
                  {ingredients.map((ingredient, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                        {index + 1}
                      </div>
                      <input
                        type="text"
                        value={ingredient}
                        onChange={(e) => {
                          const newIngredients = [...ingredients];
                          newIngredients[index] = e.target.value;
                          setIngredients(newIngredients);
                        }}
                        placeholder="e.g., 2 cups flour"
                        className="flex-1 px-4 py-3 border-2 border-accent/30 rounded-lg bg-white text-text placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 transition font-body"
                      />
                      {ingredients.length > 1 && (
                        <button
                          type="button"
                          onClick={() => setIngredients(ingredients.filter((_, i) => i !== index))}
                          className="p-2 text-danger hover:bg-red-50 rounded-lg transition flex-shrink-0"
                          title="Remove ingredient"
                        >
                          <X size={20} />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setIngredients([...ingredients, ''])}
                  className="w-full font-body"
                >
                  + Add Ingredient
                </Button>
              </div>

              {/* Divider */}
              <div className="border-t border-accent/20" />

              {/* Instructions Section */}
              <div>
                <h3 className="font-display text-xl font-bold text-text mb-4">Cooking Instructions</h3>
                <div className="space-y-3 mb-4">
                  {instructions.map((instruction, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 text-sm font-display font-bold">
                        {index + 1}
                      </div>
                      <textarea
                        value={instruction}
                        onChange={(e) => {
                          const newInstructions = [...instructions];
                          newInstructions[index] = e.target.value;
                          setInstructions(newInstructions);
                        }}
                        placeholder="Describe this step in detail"
                        className="flex-1 px-4 py-3 border-2 border-accent/30 rounded-lg bg-white text-text placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 transition font-body resize-none min-h-24"
                      />
                      {instructions.length > 1 && (
                        <button
                          type="button"
                          onClick={() => setInstructions(instructions.filter((_, i) => i !== index))}
                          className="p-2 text-danger hover:bg-red-50 rounded-lg transition flex-shrink-0"
                          title="Remove instruction"
                        >
                          <X size={20} />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setInstructions([...instructions, ''])}
                  className="w-full font-body"
                >
                  + Add Instruction
                </Button>
              </div>

              {/* Divider */}
              <div className="border-t border-accent/20" />

              {/* Submit Buttons */}
              <div className="flex gap-3">
                <Button
                  type="submit"
                  isLoading={isSubmitting}
                  className="flex-1 font-display font-semibold text-lg py-4"
                >
                  Update Recipe
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setUpdateModalOpen(false)}
                  className="flex-1 font-display font-semibold text-lg py-4"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </Modal>
        </Container>
      </div>
    </ProtectedRoute>
  );
}
