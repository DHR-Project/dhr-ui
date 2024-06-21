"use client";

import Button from "@/components/atoms/Button";
import cn from "@/utils/cn";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { HTMLAttributes, PropsWithChildren, ReactNode } from "react";

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

  function onBackPage() {
    router.back();
  }

  return (
    <div
      className={cn(
        "top-navbar",
        "px-6 py-4 items-center justify-between sticky top-0 inset-x-0 z-10",
        className
      )}
    >
      {hasBack || props.slots?.leading ? (
        <div className="leading horizontal gap-2">
          {hasBack && (
            <Button
              onClick={onBackPage}
              title="Back to previous page"
              type="button"
              isSymbol
              size="sm"
            >
              <ChevronLeftIcon width={22} height={22} />
              <span className="sr-only">Back to previous page</span>
            </Button>
          )}
          {props.slots?.leading}
        </div>
      ) : null}

      {props.title || props.children ? (
        <div className="horizontal gap-2 flex-1">
          {props.title && <h1 className="page-title">{props.title}</h1>}
          {props.children}
        </div>
      ) : null}

      {props.slots?.trailing && (
        <div className="trailing horizontal gap-2">{props.slots.trailing}</div>
      )}
    </div>
  );
}
