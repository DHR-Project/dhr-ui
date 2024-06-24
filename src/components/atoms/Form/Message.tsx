"use client";

import cn from "@/utils/cn";
import { Message as RadixMessage } from "@radix-ui/react-form";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import Typography from "../Typography";

const Message = forwardRef<
  ElementRef<typeof RadixMessage>,
  ComponentPropsWithoutRef<typeof RadixMessage>
>(({ className, ...props }, ref) => {
  return (
    <Typography asChild style="caption2">
      <RadixMessage
        ref={ref}
        {...props}
        className={cn("text-red-500", className)}
      />
    </Typography>
  );
});

Message.displayName = "Message";

export default Message;
