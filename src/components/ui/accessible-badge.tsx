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
      blue: 'bg-white text-blue-900 hover:bg-blue-50 focus:ring-blue-500 focus:ring-offset-blue-900',
      indigo: 'bg-white text-indigo-900 hover:bg-indigo-50 focus:ring-indigo-500 focus:ring-offset-indigo-900',
      cyan: 'bg-white text-cyan-900 hover:bg-cyan-50 focus:ring-cyan-500 focus:ring-offset-cyan-900',
      emerald: 'bg-white text-emerald-900 hover:bg-emerald-50 focus:ring-emerald-500 focus:ring-offset-emerald-900',
      purple: 'bg-white text-purple-900 hover:bg-purple-50 focus:ring-purple-500 focus:ring-offset-purple-900',
      green: 'bg-white text-green-900 hover:bg-green-50 focus:ring-green-500 focus:ring-offset-green-900',
      amber: 'bg-white text-amber-900 hover:bg-amber-50 focus:ring-amber-500 focus:ring-offset-amber-900',
      teal: 'bg-white text-teal-900 hover:bg-teal-50 focus:ring-teal-500 focus:ring-offset-teal-900',
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