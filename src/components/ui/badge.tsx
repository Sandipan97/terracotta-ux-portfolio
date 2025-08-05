
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-warm-terracotta text-white hover:bg-warm-terracotta-hover",
        secondary:
          "border-transparent bg-warm-golden-light text-text-primary hover:bg-warm-golden hover:text-white",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "border-warm-terracotta text-warm-terracotta hover:bg-warm-terracotta-light",
        golden: "border-transparent bg-warm-golden-light text-text-primary hover:bg-warm-golden hover:text-white",
        rust: "border-transparent bg-warm-rust-light text-text-primary hover:bg-warm-rust hover:text-white",
        sage: "border-transparent bg-warm-sage-light text-text-primary hover:bg-warm-sage hover:text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
