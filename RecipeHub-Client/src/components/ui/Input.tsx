import { cn } from '@/utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = ({ label, error, className, id, ...props }: InputProps) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-text mb-2">
          {label}
        </label>
      )}
      <input
        {...props}
        id={id}
        className={cn(
          'w-full px-4 py-3 border-2 border-accent/30 rounded-xl bg-white text-text placeholder-text-secondary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-body',
          error && 'border-red-500 focus:ring-red-200',
          className
        )}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
