import React from 'react';
import { Badge, BadgeProps } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface AccessibleBadgeProps extends BadgeProps {
  ariaLabel?: string;
  icon?: React.ReactNode;
  colorScheme?: 'blue' | 'indigo' | 'cyan' | 'emerald' | 'purple' | 'green' | 'amber' | 'teal';
}

const AccessibleBadge = React.forwardRef<HTMLDivElement, AccessibleBadgeProps>(
  ({ className, ariaLabel, icon, colorScheme = 'blue', children, ...props }) => {
    const colorSchemes = {
      blue: 'bg-warm-terracotta-light text-text-primary hover:bg-warm-terracotta hover:text-white focus:ring-warm-terracotta',
      indigo: 'bg-warm-golden-light text-text-primary hover:bg-warm-golden hover:text-white focus:ring-warm-golden',
      cyan: 'bg-warm-sage-light text-text-primary hover:bg-warm-sage hover:text-white focus:ring-warm-sage',
      emerald: 'bg-warm-rust-light text-text-primary hover:bg-warm-rust hover:text-white focus:ring-warm-rust',
      purple: 'bg-warm-terracotta-light text-text-primary hover:bg-warm-terracotta hover:text-white focus:ring-warm-terracotta',
      green: 'bg-warm-sage-light text-text-primary hover:bg-warm-sage hover:text-white focus:ring-warm-sage',
      amber: 'bg-warm-golden-light text-text-primary hover:bg-warm-golden hover:text-white focus:ring-warm-golden',
      teal: 'bg-warm-rust-light text-text-primary hover:bg-warm-rust hover:text-white focus:ring-warm-rust',
    };

    return (
      <Badge
        className={cn(
          'border-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2',
          colorSchemes[colorScheme],
          'cursor-pointer',
          className
        )}
        tabIndex={0}
        role="button"
        aria-label={ariaLabel}
        {...props}
      >
        {icon && <span className="mr-1" aria-hidden="true">{icon}</span>}
        {children}
      </Badge>
    );
  }
);

AccessibleBadge.displayName = 'AccessibleBadge';

export { AccessibleBadge };