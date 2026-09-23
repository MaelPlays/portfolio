import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        filled: 'bg-text text-bg rounded-pill hover:opacity-85 active:translate-y-px',
        outline: 'border border-border text-text rounded-pill hover:border-muted hover:bg-surface',
        ghost: 'rounded-full border border-border text-muted hover:text-text hover:border-muted',
        link: 'text-accent font-bold hover:opacity-70',
      },
      size: {
        default: 'h-11 px-6 text-[15px]',
        sm: 'h-9 px-4 text-[13px]',
        icon: 'h-[34px] w-[34px]',
      },
    },
    defaultVariants: {
      variant: 'filled',
      size: 'default',
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  );
});
Button.displayName = 'Button';

export { Button, buttonVariants };
