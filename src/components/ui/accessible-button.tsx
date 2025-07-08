import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface AccessibleButtonProps extends ButtonProps {
  ariaLabel?: string;
  focusRingColor?: 'blue' | 'indigo' | 'cyan' | 'emerald' | 'purple' | 'green';
}

const AccessibleButton = React.forwardRef<HTMLButtonElement, AccessibleButtonProps>(
  ({ className, ariaLabel, focusRingColor = 'blue', children, ...props }, ref) => {
    const focusRingClasses = {
      blue: 'focus:ring-blue-500 focus:ring-offset-blue-900',
      indigo: 'focus:ring-indigo-500 focus:ring-offset-indigo-900',
      cyan: 'focus:ring-cyan-500 focus:ring-offset-cyan-900',
      emerald: 'focus:ring-emerald-500 focus:ring-offset-emerald-900',
      purple: 'focus:ring-purple-500 focus:ring-offset-purple-900',
      green: 'focus:ring-green-500 focus:ring-offset-green-900',
    };

    return (
      <Button
        ref={ref}
        className={cn(
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          focusRingClasses[focusRingColor],
          className
        )}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

AccessibleButton.displayName = 'AccessibleButton';

export { AccessibleButton };