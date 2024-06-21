import Page from "@/components/atoms/Page";
import cn from "@/utils/cn";
import { HTMLAttributes, PropsWithChildren } from "react";

interface IAppPageWrapperProps {
  id?: string;
  className?: string;
  slotProps?: HTMLAttributes<HTMLDivElement>;
  isExpanded?: boolean;
}

export default function AppPageWrapper(
  props: PropsWithChildren<IAppPageWrapperProps>
) {
  const isExpanded = props.isExpanded ? "flex-1" : "";

  return (
    <Page id={props.id} className={cn(isExpanded)}>
      <div
        {...props.slotProps}
        className={cn(
          "app-page-wrapper min-h-screen vertical w-full main",
          props.slotProps?.className,
          props.className
        )}
      >
        {props.children}
      </div>
    </Page>
  );
}
