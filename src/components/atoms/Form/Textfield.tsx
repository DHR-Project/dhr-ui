"use client";

import cn from "@/utils/cn";
import { Control } from "@radix-ui/react-form";
import {
  ComponentPropsWithoutRef,
  ElementRef,
  HTMLAttributes,
  ReactNode,
  forwardRef,
} from "react";

interface ITextfieldProps extends ComponentPropsWithoutRef<typeof Control> {
  slots?: Partial<{
    wrapper: HTMLAttributes<HTMLDivElement>;
    leading: ReactNode;
    trailing: ReactNode;
  }>;
}

const Textfield = forwardRef<ElementRef<typeof Control>, ITextfieldProps>(
  ({ slots, className, title, ...props }, ref) => {
    return (
      <div
        data-disabled={props.disabled}
        {...slots?.wrapper}
        className={cn(
          // Normal
          "horizontal items-center gap-2 w-full bg-input px-3.5 py-2.5 rounded-lg ring-1 shadow-xs",
          // Error
          "[&:has(*[data-invalid=true])]:ring-error [&:has(*[data-invalid=true]:focus)]:shadow-xs-focused-error",
          // Disable
          "data-[disabled=true]:bg-gray-50 data-[disabled=true]:text-gray-500",
          // Focus
          "[&:has(*:focus)]:shadow-xs-focused",
          // Custom
          slots?.wrapper?.className
        )}
      >
        {slots?.leading}
        <Control
          ref={ref}
          {...props}
          title={title ?? props.name}
          className={cn(
            "bg-transparent w-full flex-1",
            "placeholder:text-gray-500 text-base",
            "focus:outline-none",
            className
          )}
        />
        {slots?.trailing}
      </div>
    );
  }
);

Textfield.displayName = "Textfield";

export default Textfield;
