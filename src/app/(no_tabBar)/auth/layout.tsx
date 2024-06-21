import { PropsWithChildren } from "react";
import TabLink from "./TabLink";
import Logo from "@/components/atoms/Logo";

export default function AuthLayout(props: PropsWithChildren) {
  return (
    <div className="vertical h-screen py-5 md:py-0 md:justify-center md:items-center">
      <header className="md:max-w-80 md:min-w-80">
        <div className="vertical items-center gap-5">
          <Logo />
          <TabLink />
        </div>
      </header>
      {props.children}
    </div>
  );
}
