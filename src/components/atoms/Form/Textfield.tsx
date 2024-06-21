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
          "horizontal items-center gap-2 w-full bg-fill-quaternary px-2 py-2 rounded-[10px] ring-1 ring-transparent text-base text-label-primary shadow-xs",
          // Error
          "[&:has(*[data-invalid=true])]:ring-error [&:has(*[data-invalid=true]):has(*:focus)]:shadow-xs-focused-error",
          // Disable
          "data-[disabled=true]:opacity-50 data-[disabled=true]:bg-fill-tertiary",
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
            "bg-transparent w-full flex-1 text-label-primary",
            "placeholder:text-label-tertiary placeholder:leading-[22px] placeholder:text-base",
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
