import { buttonVariants } from "@/components/atoms/Button";
import Logo from "@/components/atoms/Logo";
import Page from "@/components/atoms/Page";
import cn from "@/utils/cn";
import { Link } from "next-view-transitions";

export default function GreetingPage() {
  return (
    <Page asChild id="greeting_page">
      <main className="w-screen h-[100dvh] bg-accent text-white vertical py-9 justify-between overflow-hidden relative">
        <div className="vertical px-12 gap-8">
          <Logo />
          <h1 className="text-6xl font-bold leading-[86.8%]">
            Food for Everyone
          </h1>
        </div>
        <div className="px-12">
          <Link
            href="/auth"
            className={cn(
              buttonVariants({
                variant: "filled",
                size: "lg",
                className: "w-full bg-white text-black",
              })
            )}
          >
            Get Started
          </Link>
        </div>
      </main>
    </Page>
  );
}
