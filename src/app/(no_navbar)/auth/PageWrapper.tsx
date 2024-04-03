import cn from "@/utils/cn";
import { Slot } from "@radix-ui/react-slot";
import { PropsWithChildren } from "react";

interface IPageWrapperProps {
  className?: string;
  asChild?: boolean;
}

export default function PageWrapper(
  props: PropsWithChildren<IPageWrapperProps>
) {
  const Comp = props.asChild ? Slot : "div";
  return (
    <Comp
      className={cn(
        "w-full h-full vertical justify-between p-12 relative flex-1",
        props.className
      )}
    >
      {props.children}
    </Comp>
  );
}
