import { buttonVariants } from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";
import { Link } from "next-view-transitions";
import { PropsWithChildren } from "react";

export default function NoEntry(props: PropsWithChildren) {
  return (
    <div className="vertical flex-1">
      <div className="vertical flex-1 items-center justify-center text-center">
        {props.children}
        <Typography style="callout" color="secondary" className="mt-4">
          Hit the orange button down below to <strong>Create</strong> an order
        </Typography>
      </div>
      <Link href="/home" className={buttonVariants({ size: "lg" })}>
        Start Order
      </Link>
    </div>
  );
}
