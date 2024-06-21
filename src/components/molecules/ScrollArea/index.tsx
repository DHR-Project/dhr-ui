"use client";

import cn from "@/utils/cn";
import * as RadixScrollArea from "@radix-ui/react-scroll-area";
import { PropsWithChildren } from "react";

interface IScrollAreaProps {
  className?: string;
}

export default function ScrollArea(props: PropsWithChildren<IScrollAreaProps>) {
  return (
    <RadixScrollArea.Root
      className={cn("w-full h-screen overflow-hidden", props.className)}
      type="scroll"
    >
      <RadixScrollArea.Viewport className="w-full h-full [&>div]:h-max">
        {props.children}
      </RadixScrollArea.Viewport>

      <RadixScrollArea.ScrollAreaScrollbar
        orientation="horizontal"
        className="flex select-none touch-none h-2 py-0.5 z-20"
      >
        <RadixScrollArea.Thumb className="flex-1 bg-black/70 dark:bg-white/70 rounded-full" />
      </RadixScrollArea.ScrollAreaScrollbar>
      <RadixScrollArea.ScrollAreaScrollbar
        orientation="vertical"
        className="flex select-none touch-none w-2 px-0.5 z-20"
      >
        <RadixScrollArea.Thumb className="flex-1 bg-black/70 dark:bg-white/70 rounded-full" />
      </RadixScrollArea.ScrollAreaScrollbar>
      <RadixScrollArea.ScrollAreaCorner />
    </RadixScrollArea.Root>
  );
}
