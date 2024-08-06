import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs";
import { ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(
  "",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-b from-btn-primary-start to-btn-primary-end",
        secondary: "bg-gradient-to-b from-btn-secondary-start to-btn-secondary-end",
        outline: "border border-solid border-btn-primary-start",
        ghost: "opacity-80 bg-white",
        destructive: "bg-btn-destructive",
        "destructive-outline": "border border-solid border-btn-destructive-start",
        "destructive-ghost": "bg-white",
        accept: "bg-[linear-gradient(282deg,var(--tw-gradient-stops))] from-btn-accept-start from-[6.81%] to-btn-accept-end to-[93.19%]",
        "accept-outline": "border border-solid border-btn-accept-start",
        normal: "bg-white text-black",
      },
      size: {
        default: "",
      },
      icon: {
        true: "p-2",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      icon: false,
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, icon, asChild = false, ...props }, ref) => {
    const Comp = asChild ? "button" /* Slot */ : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, icon, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
