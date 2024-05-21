import cn from "@/utils/cn";
import { HTMLAttributes } from "react";

export default function Container(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn("container px-6 py-4 w-full mx-auto", props.className)}
    />
  );
}
