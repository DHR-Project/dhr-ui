import { buttonVariants } from "@/components/atoms/Button";
import Page from "@/components/atoms/Page";
import Typography from "@/components/atoms/Typography";
import cn from "@/utils/cn";
import {
  ChevronLeftIcon,
  HomeIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";
import { Link } from "next-view-transitions";

export default function NotFoundPage() {
  return (
    <Page className="h-screen w-sceen vertical items-center justify-center px-12 text-center gap-4">
      <InfoCircledIcon width={122} height={122} className="text-[#BABABA]" />
      <Typography asChild style="largeTitle" variant="emphasized">
        <h1>404, Not Found!</h1>
      </Typography>
      <Typography asChild style="subheadline" color="secondary">
        <p>
          Something wrong with this resource, please try again or contact with
          Administrator.
        </p>
      </Typography>
      <div className="horizontal gap-5 mt-5">
        <Link
          href="/home"
          className={cn(
            buttonVariants({
              variant: "borderless",
              size: "lg",
              className: "gap-2",
            })
          )}
        >
          <ChevronLeftIcon />
          <Typography className="text-accent">Back</Typography>
        </Link>
        <Link
          href="/home"
          className={cn(
            buttonVariants({
              variant: "filled",
              size: "lg",
              className: "gap-2",
            })
          )}
        >
          <HomeIcon />
          <Typography className="text-white">Home</Typography>
        </Link>
      </div>
    </Page>
  );
}
