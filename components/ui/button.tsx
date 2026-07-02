import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-bold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-sxc-skyblue/50 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          'bg-sxc-navy text-white shadow-btn hover:bg-sxc-navy/90 active:bg-sxc-navy/95',
        secondary:
          'border-2 border-sxc-navy text-sxc-navy bg-transparent hover:bg-sxc-navy/5 active:bg-sxc-navy/10',
        accent:
          'bg-sxc-yellow text-sxc-navy hover:bg-sxc-yellow/90 active:bg-sxc-yellow/80',
        gradient:
          'text-white bg-[image:var(--gradient-sxc-4)] hover:opacity-90 shadow-btn',
        ghost:
          'text-sxc-navy/70 bg-transparent hover:bg-sxc-navy/5 hover:text-sxc-navy',
        destructive:
          'bg-red-400 text-white hover:bg-red-400/90',
        link: 'text-sxc-blue underline-offset-4 hover:underline font-semibold',
      },
      size: {
        sm: 'h-8 px-3 text-xs rounded-md',
        md: 'h-10 px-5 text-sm rounded-md',
        lg: 'h-12 px-7 text-base rounded-lg',
        icon: 'h-10 w-10 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
