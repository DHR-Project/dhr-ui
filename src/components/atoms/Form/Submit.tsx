"use client";

import cn from "@/utils/cn";
import { Submit } from "@radix-ui/react-form";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

export default forwardRef<
  ElementRef<typeof Submit>,
  ComponentPropsWithoutRef<typeof Submit>
>(({ className, ...props }, ref) => {
  return <Submit ref={ref} {...props} className={cn("", className)} />;
});
