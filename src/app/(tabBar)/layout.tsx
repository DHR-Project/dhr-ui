import Typography from "@/components/atoms/Typography";
import AppPageWrapper from "@/components/molecules/AppPageWrapper";
import TabBar from "@/components/organisms/TabBar";
import { PropsWithChildren } from "react";

export default function NBGroupLayout(props: PropsWithChildren) {
  return (
    <>
      <AppPageWrapper>
        {props.children}
        <section className="container px-6 py-4 w-full mx-auto flex-1 gap-1 vertical">
          <div className="border-t border-separate mb-2" />
          <Typography
            asChild
            style="footnote"
            color="secondary"
            className="text-right"
          >
            <p>Copyright 2024, Food Delivery.</p>
          </Typography>
        </section>
        <TabBar />
      </AppPageWrapper>
    </>
  );
}
