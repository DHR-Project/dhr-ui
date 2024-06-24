import { buttonVariants } from "@/components/atoms/Button";
import Container from "@/components/atoms/Container";
import Typography from "@/components/atoms/Typography";
import SearchBar from "@/components/organisms/SearchBar";
import cn from "@/utils/cn";
import { AvatarIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Container className="flex-1 gap-6 vertical">
        <div className="horizontal justify-between items-center mb-4">
          <div className="vertical">
            <Typography style="subheadline">Hello, Son Pham</Typography>
            <Typography style="caption1" color="secondary">
              01 Chau Thi Vinh Te, Da Nang
            </Typography>
          </div>
          <div>
            <Link href="/auth" className={cn(buttonVariants({ size: "sm" }))}>
              <AvatarIcon width="24" height={24} />
              <span className="sr-only">Son Pham</span>
            </Link>
          </div>
        </div>

        <Typography asChild style="largeTitle" variant="emphasized">
          <h1>Delicious Food For You</h1>
        </Typography>

        <div className="search-bar">
          <SearchBar clickable />
        </div>

        <section className="vertical">
          <div className="horizontal items-center justify-between">
            <Typography>Categories</Typography>
            <Link href="categories" className={cn(buttonVariants())}>
              See All
            </Link>
          </div>
          <ul className="grid grid-flow-col gap-2 snap-x snap-mandatory overflow-x-auto py-4">
            <li className="bg-blue-700 p-2 w-[150px] h-[150px] rounded-md snap-center snap-always">
              <Typography style="subheadline" className="text-white">
                Foods & Coffee
              </Typography>
            </li>
            <li className="bg-amber-700 p-2 w-[150px] h-[150px] rounded-md snap-center snap-always">
              <Typography style="subheadline" className="text-white">
                Groceries
              </Typography>
            </li>
            <li className="bg-violet-700 p-2 w-[150px] h-[150px] rounded-md snap-center snap-always">
              <Typography style="subheadline" className="text-white">
                Supermarket
              </Typography>
            </li>
            <li className="bg-green-700 p-2 w-[150px] h-[150px] rounded-md snap-center snap-always">
              <Typography style="subheadline" className="text-white">
                Daily meal
              </Typography>
            </li>
            <li className="bg-yellow-700 p-2 w-[150px] h-[150px] rounded-md snap-center snap-always">
              <Typography style="subheadline" className="text-white">
                Bakery
              </Typography>
            </li>
          </ul>
        </section>

        <section>
          <div className="horizontal items-center justify-between">
            <Typography>Nearby Restaurants</Typography>
            <Link href="nearby-restaurants" className={cn(buttonVariants())}>
              See All
            </Link>
          </div>

          <ul className="grid grid-flow-col gap-2 snap-x snap-mandatory overflow-x-auto py-4">
            <li className="bg-yellow-500 p-2 w-[150px] h-[150px] rounded-md snap-center snap-always">
              <Typography style="subheadline" className="text-white">
                The Hot Coffee
              </Typography>
            </li>
            <li className="bg-pink-300 p-2 w-[150px] h-[150px] rounded-md snap-center snap-always">
              <Typography style="subheadline" className="text-white">
                Fast Long Coffee
              </Typography>
            </li>
            <li className="bg-violet-700 p-2 w-[150px] h-[150px] rounded-md snap-center snap-always">
              <Typography style="subheadline" className="text-white">
                FoBook
              </Typography>
            </li>
            <li className="bg-green-700 p-2 w-[150px] h-[150px] rounded-md snap-center snap-always">
              <Typography style="subheadline" className="text-white">
                KFT
              </Typography>
            </li>
            <li className="bg-yellow-700 p-2 w-[150px] h-[150px] rounded-md snap-center snap-always">
              <Typography style="subheadline" className="text-white">
                Loteriby
              </Typography>
            </li>
          </ul>
        </section>

        <section className="vertical gap-4">
          <ul className="vertical md:horizontal gap-6">
            <li className="vertical rounded-lg shadow-lg bg-bg-tertiary w-full justify-between">
              <div className="spacer h-32 bg-slate-300 rounded-t-lg" />
              <div className="p-4 vertical gap-1">
                <Typography
                  style="subheadline"
                  color="tertiary"
                  variant="emphasized"
                >
                  Foods & Coffee
                </Typography>
                <Typography style="title3" variant="emphasized">
                  This is very good Chiken
                </Typography>
                <Typography style="callout" color="tertiary">
                  You can find more in <strong>KFT</strong>.
                </Typography>
              </div>
            </li>
            <li className="vertical rounded-lg shadow-lg bg-bg-tertiary w-full justify-between">
              <div className="spacer h-32 bg-amber-900 rounded-t-lg" />
              <div className="vertical gap-1 p-4">
                <Typography
                  style="subheadline"
                  color="tertiary"
                  variant="emphasized"
                >
                  Foods & Coffee
                </Typography>
                <Typography style="title3" variant="emphasized">
                  Best coffee ever
                </Typography>
                <Typography style="callout" color="tertiary">
                  Drink and enjoy <strong>The Hot Coffee</strong> with Ca phe
                  sua da and best milk tea of the year.
                </Typography>
              </div>
            </li>

            <li className="vertical rounded-lg shadow-lg bg-bg-tertiary w-full justify-between">
              <div className="spacer h-32 bg-yellow-500 rounded-t-lg" />
              <div className="vertical gap-1 p-4">
                <Typography
                  style="subheadline"
                  color="tertiary"
                  variant="emphasized"
                >
                  Daily meal
                </Typography>
                <Typography style="title3" variant="emphasized">
                  The Bank mi
                </Typography>
                <Typography style="callout" color="tertiary">
                  The best Vietnamese street food you can find in the world.
                </Typography>
              </div>
            </li>
          </ul>
          <Link href="posts" className={cn(buttonVariants({ size: "md" }))}>
            See more
          </Link>
        </section>
      </Container>
    </>
  );
}
