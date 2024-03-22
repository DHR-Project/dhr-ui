import { PropsWithChildren } from "react";

export default function NBGroupLayout(props: PropsWithChildren) {
  return (
    <>
      <nav>Nav - layout from NBGroupLayout</nav>
      {props.children}
      {/* Allow for more height on mobile devices */}
      <div className="h-4 lg:hidden" />
    </>
  );
}
