"use client";

import cn from "@/utils/cn";
import { Message } from "@radix-ui/react-form";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

export default forwardRef<
  ElementRef<typeof Message>,
  ComponentPropsWithoutRef<typeof Message>
>(({ className, ...props }, ref) => {
  return (
    <Message
      ref={ref}
      {...props}
      className={cn("text-red-500 text-sm", className)}
    />
  );
});
