"use client";

import cn from "@/utils/cn";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { ComponentProps, PropsWithChildren } from "react";

export default function LinkItem({
  className,
  children,
  ...props
}: PropsWithChildren<ComponentProps<typeof Link>>) {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      className={cn(
        "w-full px-3.5 py-2.5 rounded vertical justify-center items-center hover:bg-background/30 relative",
        pathname === props.href && "text-primary",
        className
      )}
    >
      <div className="z-10 vertical gap-0.5 items-center justify-center">
        {children}
      </div>
    </Link>
  );
}
