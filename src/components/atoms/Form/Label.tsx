"use client";

import cn from "@/utils/cn";
import { Label } from "@radix-ui/react-form";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

export default forwardRef<
  ElementRef<typeof Label>,
  ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => {
  return (
    <Label
      ref={ref}
      {...props}
      className={cn("text-gray-500 text-sm font-semibold", className)}
    />
  );
});
