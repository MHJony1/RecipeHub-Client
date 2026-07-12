'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ROUTES } from '@/constants';

export const QuickActions = () => {
  return (
    <div className="flex gap-4 flex-col sm:flex-row justify-center">
      <Button size="lg" className="font-display font-semibold text-lg">
        <Link href={ROUTES.ADD_RECIPE}>Add Recipe</Link>
      </Button>
      <Button size="lg" variant="secondary" className="font-display font-semibold text-lg">
        <Link href={ROUTES.MANAGE_RECIPES}>Manage Recipes</Link>
      </Button>
      <Button size="lg" variant="secondary" className="font-display font-semibold text-lg">
        <Link href={ROUTES.RECIPES}>Explore</Link>
      </Button>
    </div>
  );
};
