import { buttonVariants } from "@/components/atoms/Button";
import Page from "@/components/atoms/Page";
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
      <h1 className="text-3xl font-bold">404, Not Found!</h1>
      <p className="text-base font-light text-gray-500">
        Something wrong with this resource, please try again or contact with
        Administrator.
      </p>
      <div className="horizontal gap-5 mt-5">
        <Link
          href="/home"
          className={cn(
            buttonVariants({
              variant: "secondary",
              className:
                "px-3.5 py-2.5 rounded-lg horizontal gap-2 items-center",
            })
          )}
        >
          <ChevronLeftIcon />
          <span>Back</span>
        </Link>
        <Link
          href="/home"
          className={cn(
            buttonVariants({
              variant: "primary",
              className:
                "px-3.5 py-2.5 rounded-lg horizontal gap-2 items-center",
            })
          )}
        >
          <HomeIcon />
          <span>Home</span>
        </Link>
      </div>
    </Page>
  );
}
