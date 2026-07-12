'use client';

import { ReactNode } from 'react';
import { cn } from '@/utils/cn';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  scrollable?: boolean;
}

export const Modal = ({ isOpen, onClose, title, children, size = 'md', scrollable = true }: ModalProps) => {
  if (!isOpen) return null;

  const sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      onKeyDown={handleKeyDown}
    >
      <div
        className={cn(
          'bg-white rounded-2xl shadow-2xl border border-accent/20 flex flex-col',
          'w-[90vw] h-[90vh] sm:w-auto sm:h-auto',
          scrollable ? 'max-h-[90vh]' : '',
          sizes[size]
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div className="flex justify-between items-center p-6 border-b border-accent/20 shrink-0">
            <h2 className="font-display text-2xl font-bold text-text">{title}</h2>
            <button
              onClick={onClose}
              className="text-text-secondary hover:text-text transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 rounded"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        )}
        <div className={cn(scrollable ? 'overflow-y-auto flex-1' : '', 'p-6')}>
          {children}
        </div>
      </div>
    </div>
  );
};
