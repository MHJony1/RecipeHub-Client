'use client';

import { ProtectedRoute } from '@/components/common/ProtectedRoute';
import { useAuth } from '@/providers/AuthContext';
import { Container } from '@/components/common/Container';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';
import { ROUTES } from '@/constants';
import { Button } from '@/components/ui/Button';

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <Container className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Recipes</h3>
            <p className="text-4xl font-bold text-orange-500">0</p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Views</h3>
            <p className="text-4xl font-bold text-orange-500">0</p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Avg Rating</h3>
            <p className="text-4xl font-bold text-orange-500">0</p>
          </Card>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="flex gap-4">
            <Button>
              <Link href={ROUTES.ADD_RECIPE}>Add Recipe</Link>
            </Button>
            <Button variant="secondary">
              <Link href={ROUTES.MANAGE_RECIPES}>Manage Recipes</Link>
            </Button>
          </div>
        </div>
      </Container>
    </ProtectedRoute>
  );
}
