import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.08em]',
  {
    variants: {
      variant: {
        outline: 'rounded-pill border border-border px-2.5 py-1 text-muted',
        soft: 'text-ghost',
      },
    },
    defaultVariants: { variant: 'outline' },
  }
);

function Badge({ className, variant, ...props }) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />;
}

export { Badge, badgeVariants };
