import Logo from "@/components/atoms/Logo";
import { PropsWithChildren } from "react";
import TabLink from "./TabLink";
import Page from "@/components/atoms/Page";

export default function AuthLayout(props: PropsWithChildren) {
  return (
    <Page className="w-screen min-h-dvh overflow-hidden vertical bg-white">
      <div className="vertical shadow-2xl items-center rounded-b-3xl gap-8">
        <Logo
          className="mt-32 w-[150px] h-[150px] relative"
          imageProps={{ fill: true }}
        />
        <TabLink />
      </div>
      {props.children}
    </Page>
  );
}
