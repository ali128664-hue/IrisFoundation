'use client';
import { ReactNode, ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'donate' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  href?: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className,
  external,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer';

  const variants = {
    primary:
      'bg-[#8B2FC9] text-white hover:bg-[#7A28B0] focus:ring-[#8B2FC9] shadow-lg hover:shadow-xl hover:-translate-y-0.5',
    secondary:
      'bg-transparent border-2 border-[#8B2FC9] text-[#8B2FC9] hover:bg-[#8B2FC9] hover:text-white focus:ring-[#8B2FC9]',
    ghost:
      'bg-transparent text-white border border-white/30 hover:bg-white/10 focus:ring-white',
    outline:
      'bg-transparent text-gray-700 border border-gray-300 hover:bg-gray-50 hover:text-gray-900 focus:ring-gray-200',
    donate:
      'bg-gradient-to-r from-[#E91E8C] to-[#8B2FC9] text-white shadow-lg hover:shadow-[0_0_30px_rgba(233,30,140,0.4)] hover:-translate-y-0.5 focus:ring-[#E91E8C]',
    whatsapp:
      'bg-[#25D366] text-white hover:bg-[#20BA5A] focus:ring-[#25D366] shadow-lg hover:shadow-xl hover:-translate-y-0.5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
