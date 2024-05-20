/* eslint-disable react-refresh/only-export-components */
import cn from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(
  "font-semibold text-[17px] leading-[17px] truncate inline-flex justify-center p-4 py-6 duration-500 ease-in-out transform active:scale-105 disabled:active:scale-100",
  {
    variants: {
      variant: {
        primary: "bg-primary hover:bg-primary/70 disabled:opacity-70",
        secondary:
          "bg-white/90 dark:bg-black-900 text-primary hover:bg-white disabled:bg-white/50 dark:disabled:bg-black-900/50",
      },
      rounded: {
        md: "rounded-md",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      rounded: "full",
    },
  }
);

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(function (
  { variant, rounded, className, children, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, rounded, className }))}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export { buttonVariants };

export default Button;
