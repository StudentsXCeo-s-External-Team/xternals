import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors',
  {
    variants: {
      variant: {
        open: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
        active: 'bg-sxc-blue/10 text-sxc-blue border border-sxc-blue/20',
        closed: 'bg-zinc-100 text-zinc-500 border border-zinc-200',
        draft: 'bg-amber-100 text-amber-700 border border-amber-200',
        accent: 'bg-sxc-yellow text-sxc-navy',
        outline: 'border border-sxc-navy/30 text-sxc-navy bg-transparent',
      },
    },
    defaultVariants: {
      variant: 'outline',
    },
  }
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants>) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
