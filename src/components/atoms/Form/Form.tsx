"use client";

import cn from "@/utils/cn";
import { Root } from "@radix-ui/react-form";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

export default forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref) => {
  return <Root ref={ref} {...props} className={cn("", className)} />;
});
