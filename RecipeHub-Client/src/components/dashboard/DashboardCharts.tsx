'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { type Recipe } from '@/services/recipe.service';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DashboardChartsProps {
  recipes: Recipe[];
}

export const DashboardCharts = ({ recipes }: DashboardChartsProps) => {
  // Prepare category distribution data
  const categoryData: Record<string, number> = {};
  recipes.forEach((recipe) => {
    categoryData[recipe.category] = (categoryData[recipe.category] || 0) + 1;
  });

  const chartData = Object.entries(categoryData).map(([category, count]) => ({
    name: category,
    count,
  }));

  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      {/* Category Distribution */}
      <Card className="p-6">
        <h3 className="font-display text-lg font-bold text-text mb-6">Recipes by Category</h3>
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#d4a574" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#6b2737" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p className="font-body text-text-secondary text-center py-8">No data available</p>
        )}
      </Card>

      {/* Quick Info */}
      <Card className="p-6">
        <h3 className="font-display text-lg font-bold text-text mb-6">Recipe Summary</h3>
        <div className="space-y-4">
          {chartData.length > 0 ? (
            chartData.map((item) => (
              <div key={item.name} className="flex justify-between items-center pb-4 border-b border-accent/20 last:border-b-0">
                <span className="font-body text-text">{item.name}</span>
                <span className="font-display font-bold text-primary text-lg">{item.count}</span>
              </div>
            ))
          ) : (
            <p className="font-body text-text-secondary">No recipes yet</p>
          )}
        </div>
      </Card>
    </motion.div>
  );
};
