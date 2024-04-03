"use client";

import cn from "@/utils/cn";
import { Slot } from "@radix-ui/react-slot";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

interface IPageProp {
  id?: string;
  className?: string;
  asChild?: boolean;
}

function Page(props: PropsWithChildren<IPageProp>) {
  const pathname = usePathname();
  const Comp = props.asChild ? Slot : "main";

  return (
    <Comp
      id={props.id ?? "Page"}
      className={cn("", props.className)}
      key={pathname}
    >
      {props.children}
    </Comp>
  );
}

export default Page;
