import Page from "@/components/atoms/Page";
import { PropsWithChildren } from "react";

export default function AppPageWrapper(props: PropsWithChildren) {
  return (
    <Page>
      <div className="min-h-screen vertical w-full main">{props.children}</div>
    </Page>
  );
}
