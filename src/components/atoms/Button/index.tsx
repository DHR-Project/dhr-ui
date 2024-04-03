import cn from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const buttonVariants = cva(
  "font-semibold text-black/50 text-[17px] leading-[17px] truncate inline-flex justify-center p-4 py-6 duration-500 ease-in-out transform active:scale-105 disabled:active:scale-100",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white hover:bg-primary/70 disabled:bg-primary/50",
        secondary:
          "bg-white/90 text-primary hover:bg-white disabled:bg-white/50",
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
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
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
