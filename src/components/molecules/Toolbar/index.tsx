"use client";

import Button from "@/components/atoms/Button";
import cn from "@/utils/cn";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { HTMLAttributes, PropsWithChildren, ReactNode, useRef } from "react";

interface IToolbarProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title?: string | ReactNode;
  slots?: Partial<{
    leading: string | ReactNode;
    trailing: string | ReactNode;
  }>;
  hasBack?: boolean;
}

export default function Toolbar({
  className,
  ...props
}: PropsWithChildren<IToolbarProps>) {
  const { hasBack = false } = props;

  const router = useRouter();

  const toolbarRef = useRef<HTMLDivElement>(null);

  function onBackPage() {
    router.back();
  }

  return (
    <div
      ref={toolbarRef}
      className={cn(
        "px-12 py-4 horizontal gap-2 items-center justify-between sticky top-0 inset-x-0 z-10 bg-whie/70 backdrop-blur",
        className
      )}
    >
      <div className="leading horizontal gap-2">
        {hasBack && (
          <Button
            variant="secondary"
            onClick={onBackPage}
            className="p-0 text-dark"
          >
            <ChevronLeftIcon width={26} height={26} />
          </Button>
        )}
        {props.slots?.leading}
      </div>
      <div className="horizontal gap-2">
        {props.title && (
          <h1 className="text-base font-semibold">{props.title}</h1>
        )}
        {props.children}
      </div>
      <div className="trailing horizontal gap-2">{props.slots?.trailing}</div>
    </div>
  );
}
