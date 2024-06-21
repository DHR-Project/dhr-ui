"use client";

import cn from "@/utils/cn";
import { Message as RadixMessage } from "@radix-ui/react-form";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

const Message = forwardRef<
  ElementRef<typeof RadixMessage>,
  ComponentPropsWithoutRef<typeof RadixMessage>
>(({ className, ...props }, ref) => {
  return (
    <RadixMessage
      ref={ref}
      {...props}
      className={cn("text-red-500 text-sm", className)}
    />
  );
});

Message.displayName = "Message";

export default Message;
