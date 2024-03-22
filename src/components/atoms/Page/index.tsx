import cn from "@/utils/cn";
import { PropsWithChildren } from "react";

interface IPageProp {
  id?: string;
  className?: string;
}

function Page(props: PropsWithChildren<IPageProp>) {
  return (
    <main id={props.id ?? "Page"} className={cn("", props.className)}>
      {props.children}
    </main>
  );
}

export default Page;
