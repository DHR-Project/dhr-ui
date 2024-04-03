"use client";

import cn from "@/utils/cn";
import { Field } from "@radix-ui/react-form";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

export default forwardRef<
  ElementRef<typeof Field>,
  ComponentPropsWithoutRef<typeof Field>
>(({ className, ...props }, ref) => {
  return (
    <Field ref={ref} {...props} className={cn("grid gap-1.5", className)} />
  );
});
