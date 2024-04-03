"use client";

import cn from "@/utils/cn";
import { Control } from "@radix-ui/react-form";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

export default forwardRef<
  ElementRef<typeof Control>,
  ComponentPropsWithoutRef<typeof Control>
>(({ className, title, ...props }, ref) => {
  return (
    <Control
      ref={ref}
      {...props}
      title={title ?? props.name}
      className={cn(
        "horizontal gap-4 w-full bg-white py-3.5 px-2.5 rounded-lg drop-shadow-xs ring-1 ring-gray-300",
        "placeholder:text-gray-500 text-base text-gray-900",
        "focus:outline-none focus:ring-black/80",
        "disabled:bg-gray-50 disabled:text-gray-500",
        "data-[invalid=true]:ring-red-300 data-[invalid=true]:focus:ring-red-500",
        className
      )}
    />
  );
});
