import { cn } from '@/lib/utils';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export function SectionLabel({ children, className, light }: SectionLabelProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full',
        light
          ? 'bg-white/10 text-white backdrop-blur-sm'
          : 'bg-[#8B2FC9]/10 text-[#8B2FC9]',
        className
      )}
    >
      {children}
    </span>
  );
}
