"use client";

import cn from "@/utils/cn";
import { Submit as RadixSubmit } from "@radix-ui/react-form";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

const Submit = forwardRef<
  ElementRef<typeof RadixSubmit>,
  ComponentPropsWithoutRef<typeof RadixSubmit>
>(({ className, ...props }, ref) => {
  return <RadixSubmit ref={ref} {...props} className={cn("", className)} />;
});

Submit.displayName = "Submit";

export default Submit;
