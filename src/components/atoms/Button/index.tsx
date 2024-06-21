/* eslint-disable react-refresh/only-export-components */
import cn from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(
  "horizontal justify-center items-center text-accent hover:scale-105 duration-150 active:scale-95",
  {
    variants: {
      variant: {
        borderless: [
          "bg-transparent",
          "disabled:text-label-tertiary",
          "hover:bg-fill-tertiary",
        ],
        bezeledGray: [
          "bg-fill-tertiary",
          "disabled:text-label-tertiary",
          "hover:bg-fill-tertiary",
        ],
        bezeled: [
          "bg-accent/15",
          "disabled:bg-fill-tertiary",
          "disabled:text-label-tertiary",
        ],
        filled: [
          "bg-accent",
          "text-white",
          "disabled:bg-fill-tertiary",
          "disabled:text-label-tertiary",
        ],
      },
      size: {
        sm: "gap-[3px] py-1 px-2.5 text-[15px] leading-[20px] rounded-xl",
        md: "gap-1 px-[14px] py-[7px] text-[15px] leading-[20px] rounded-xl",
        lg: "gap-1 px-[20px] py-[14px] text-[17px] leading-[22px] rounded-[12px]",
      },
    },
    defaultVariants: {
      variant: "borderless",
      size: "sm",
    },
  }
);

const SYMBOL_SIZE = {
  sm: "p-2",
  md: "p-3",
  lg: "p-5",
};

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  onMaterial?: boolean;
  isSymbol?: boolean;
  circle?: boolean;
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(function (
  {
    variant,
    size = "sm",
    onMaterial,
    isSymbol = false,
    circle = false,
    className,
    children,
    ...props
  },
  ref
) {
  return (
    <button
      ref={ref}
      className={cn(
        "",
        buttonVariants({ size, variant, className }),
        onMaterial && "",
        isSymbol && SYMBOL_SIZE[size || "sm"],
        circle && "rounded-full"
      )}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export { buttonVariants };

export default Button;
