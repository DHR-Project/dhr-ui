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

export default forwardRef<ElementRef<typeof Control>, ITextfieldProps>(
  ({ slots, className, title, ...props }, ref) => {
    return (
      <div
        data-disabled={props.disabled}
        {...slots?.wrapper}
        className={cn(
          "horizontal gap-2 w-full bg-white px-3.5 py-2.5 rounded-lg ring-1 ring-gray-300 drop-shadow-xs",
          "items-center",
          "[&:has(*[data-invalid=true])]:ring-red-300 [&:has(*[data-invalid=true]:focus)]:ring-red-500",
          "data-[disabled=true]:bg-gray-50 data-[disabled=true]:text-gray-500",
          "[&:has(*:focus)]:ring-2 [&:has(*:focus)]:ring-black/70",
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
            "placeholder:text-gray-500 text-base text-gray-900",
            "focus:outline-none",
            className
          )}
        />
        {slots?.trailing}
      </div>
    );
  }
);
