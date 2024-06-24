"use client";

import cn from "@/utils/cn";
import { Label } from "@radix-ui/react-form";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import Typography from "../Typography";

const FieldLabel = forwardRef<
  ElementRef<typeof Label>,
  ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => {
  return (
    <Typography
      asChild
      color="primary"
      variant="emphasized"
      style="subheadline"
    >
      <Label ref={ref} {...props} className={cn("ml-2", className)} />
    </Typography>
  );
});

FieldLabel.displayName = "FieldLabel";

export default FieldLabel;
