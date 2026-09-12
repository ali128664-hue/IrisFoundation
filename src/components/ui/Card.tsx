import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  glass?: boolean;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export function Card({
  children,
  className,
  glass = false,
  hover = true,
  padding = 'md',
}: CardProps) {
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={cn(
        'rounded-2xl transition-all duration-300',
        glass
          ? 'bg-white/5 backdrop-blur-md border border-white/10'
          : 'bg-white border border-gray-100 shadow-sm',
        hover && 'hover:shadow-xl hover:-translate-y-1',
        paddings[padding],
        className
      )}
    >
      {children}
    </div>
  );
}
