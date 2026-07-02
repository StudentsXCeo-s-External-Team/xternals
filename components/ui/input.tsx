import * as React from 'react';
import { cn } from '@/lib/utils';

function Input({ className, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      className={cn(
        'w-full h-10 px-3 text-sm rounded-md border border-border bg-white text-sxc-navy placeholder:text-sxc-navy/40',
        'focus:outline-none focus:ring-2 focus:ring-sxc-skyblue/50 focus:border-sxc-skyblue',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'aria-invalid:border-red-400 aria-invalid:ring-red-200',
        'transition-shadow',
        className
      )}
      {...props}
    />
  );
}

export { Input };
