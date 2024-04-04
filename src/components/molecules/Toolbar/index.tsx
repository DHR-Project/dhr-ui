"use client";

import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { PropsWithChildren, ReactNode, useRef } from "react";

interface IToolbarProps {
  title?: string;
  slots?: Partial<{
    leading: ReactNode;
    trailing: ReactNode;
  }>;
}

export default function Toolbar(props: PropsWithChildren<IToolbarProps>) {
  const toolbarRef = useRef<HTMLDivElement>(null);
  console.log("toolbarRef", toolbarRef.current);
  return (
    <div
      ref={toolbarRef}
      className="px-12 py-4 horizontal gap-2 items-center justify-between sticky top-0 inset-x-0 z-10 bg-whie/70 backdrop-blur"
    >
      <div className="horizontal gap-2">
        <Link href="/">
          <ChevronLeftIcon />
        </Link>
        {props.slots?.leading}
      </div>
      <div className="horizontal gap-2">
        {props.title && (
          <h1 className="text-base font-semibold">{props.title}</h1>
        )}
        {props.children}
      </div>
      <div className="horizontal gap-2">{props.slots?.trailing}</div>
    </div>
  );
}
