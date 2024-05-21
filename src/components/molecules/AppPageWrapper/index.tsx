import Page from "@/components/atoms/Page";
import cn from "@/utils/cn";
import { HTMLAttributes, PropsWithChildren } from "react";

interface IAppPageWrapperProps {
  id?: string;
  className?: string;
  slotProps?: HTMLAttributes<HTMLDivElement>;
}

export default function AppPageWrapper(
  props: PropsWithChildren<IAppPageWrapperProps>
) {
  return (
    <Page id={props.id} className={props.className}>
      <div
        {...props.slotProps}
        className={cn(
          "app-page-wrapper min-h-screen vertical w-full main",
          props.slotProps?.className
        )}
      >
        {props.children}
      </div>
    </Page>
  );
}
