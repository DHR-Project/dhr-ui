import { PropsWithChildren } from "react";
import TabLink from "./TabLink";
import Page from "@/components/atoms/Page";
import Logo from "@/components/atoms/Logo";

export default function AuthLayout(props: PropsWithChildren) {
  return (
    <Page className="w-screen min-h-dvh overflow-hidden vertical bg-background">
      <div className="vertical items-center gap-5">
        <Logo />
        <TabLink />
      </div>
      {props.children}
    </Page>
  );
}
