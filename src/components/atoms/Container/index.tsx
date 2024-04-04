import cn from "@/utils/cn";
import { HTMLAttributes } from "react";

export default function Container(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn("px-12 py-5 w-full mx-auto", props.className)}
    />
  );
}
