import Page from "@/components/atoms/Page";
import ScrollArea from "../ScrollArea";
import { PropsWithChildren } from "react";

export default function AppPageWrapper(props: PropsWithChildren) {
  return (
    <Page>
      <ScrollArea className="h-screen">
        <div className="min-h-screen vertical w-full">{props.children}</div>
      </ScrollArea>
    </Page>
  );
}
