"use client";

import cn from "@/utils/cn";
import { Field as RadixField } from "@radix-ui/react-form";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

const Field = forwardRef<
  ElementRef<typeof RadixField>,
  ComponentPropsWithoutRef<typeof RadixField>
>(({ className, ...props }, ref) => {
  return (
    <RadixField
      ref={ref}
      {...props}
      className={cn("grid gap-1.5", className)}
    />
  );
});

Field.displayName = "Field";

export default Field;
