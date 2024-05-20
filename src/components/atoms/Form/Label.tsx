"use client";

import cn from "@/utils/cn";
import { Label as RadixLabel } from "@radix-ui/react-form";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

const Label = forwardRef<
  ElementRef<typeof RadixLabel>,
  ComponentPropsWithoutRef<typeof RadixLabel>
>(({ className, ...props }, ref) => {
  return (
    <RadixLabel
      ref={ref}
      {...props}
      className={cn("text-gray-500 text-sm font-semibold", className)}
    />
  );
});

Label.displayName = "Label";

export default Label;
