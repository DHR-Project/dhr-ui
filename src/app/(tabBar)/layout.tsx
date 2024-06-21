import AppPageWrapper from "@/components/molecules/AppPageWrapper";
import TabBar from "@/components/organisms/TabBar";
import { PropsWithChildren } from "react";

export default function NBGroupLayout(props: PropsWithChildren) {
  return (
    <>
      <AppPageWrapper>
        {props.children}
        <TabBar />
      </AppPageWrapper>
    </>
  );
}
