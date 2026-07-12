'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/providers/AuthContext';
import { ROUTES } from '@/constants';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { LayoutDashboard, PlusCircle, BookOpen, Compass, LogOut } from 'lucide-react';

export const DashboardSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useAuth();

  const menuItems = [
    { label: 'Dashboard', href: ROUTES.DASHBOARD, icon: LayoutDashboard },
    { label: 'Add Recipe', href: ROUTES.ADD_RECIPE, icon: PlusCircle },
    { label: 'Manage Recipes', href: ROUTES.MANAGE_RECIPES, icon: BookOpen },
    { label: 'Explore', href: ROUTES.RECIPES, icon: Compass },
  ];

  const handleLogout = async () => {
    await logout();
    router.push(ROUTES.HOME);
  };

  return (
    <Card className="p-0 overflow-hidden sticky top-24">
      <nav className="space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link key={item.href} href={item.href}>
              <div
                className={`flex items-center gap-3 px-6 py-4 transition-colors font-body ${
                  isActive
                    ? 'bg-primary text-white border-l-4 border-primary/50'
                    : 'text-text hover:bg-accent/10 border-l-4 border-transparent'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-accent/20 p-4">
        <Button
          variant="danger"
          size="sm"
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2"
        >
          <LogOut size={16} />
          Logout
        </Button>
      </div>
    </Card>
  );
};
