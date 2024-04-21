import AppPageWrapper from "@/components/molecules/AppPageWrapper";
import Navbar from "@/components/organisms/Navbar";
import { PropsWithChildren } from "react";

export default function NBGroupLayout(props: PropsWithChildren) {
  return (
    <>
      <AppPageWrapper>
        {props.children}
        <Navbar />
      </AppPageWrapper>
    </>
  );
}
