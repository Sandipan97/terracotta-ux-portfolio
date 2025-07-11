
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-sm hover:shadow-md",
  {
    variants: {
      variant: {
        default: "bg-red-pantone text-white hover:bg-red-pantone/90 shadow-lg hover:shadow-xl dark:bg-red-pantone dark:hover:bg-red-pantone/90 transition-all duration-300 focus:ring-2 focus:ring-red-pantone/20 focus:ring-offset-2",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg hover:shadow-xl",
        outline:
          "border-2 border-red-pantone text-red-pantone bg-background hover:bg-red-pantone hover:text-white shadow-md hover:shadow-lg dark:border-red-pantone dark:text-red-pantone dark:hover:bg-red-pantone dark:hover:text-white transition-all duration-300 focus:ring-2 focus:ring-red-pantone/20 focus:ring-offset-2",
        secondary:
          "bg-cerulean text-white hover:bg-cerulean/90 shadow-md hover:shadow-lg dark:bg-cerulean dark:text-white dark:hover:bg-cerulean/90 transition-all duration-300 focus:ring-2 focus:ring-cerulean/20 focus:ring-offset-2",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:shadow-sm",
        link: "text-red-pantone underline-offset-4 hover:underline dark:text-red-pantone transition-all duration-300 focus:ring-2 focus:ring-red-pantone/20 focus:ring-offset-2",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 rounded-md px-4 py-2",
        lg: "h-12 rounded-lg px-8 py-3 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Generate editable ID from button text if available
    const editableId = typeof children === 'string' 
      ? `button-${children.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`
      : undefined;
    
    return (
      <motion.div
        whileHover={{ 
          scale: 1.02,
          y: -1,
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ 
          type: "spring",
          stiffness: 400,
          damping: 10
        }}
        className="inline-block"
      >
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          data-lovable-editable={editableId}
          {...props}
        >
          {children}
        </Comp>
      </motion.div>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
