import {
  HomeIcon,
  MagnifyingGlassIcon,
  CounterClockwiseClockIcon,
} from "@radix-ui/react-icons";
import LinkItem from "./LinkItem";
import Typography from "@/components/atoms/Typography";

export default function TabBar() {
  return (
    <div className="tab-bar">
      <LinkItem href="/home">
        <HomeIcon width={24} height={24} />
        <Typography style="caption1" variant="emphasized">
          Home
        </Typography>
      </LinkItem>
      <LinkItem href="/search">
        <MagnifyingGlassIcon width={24} height={24} />
        <Typography style="caption1" variant="emphasized">
          Search
        </Typography>
      </LinkItem>
      <LinkItem href="/history">
        <CounterClockwiseClockIcon width={24} height={24} />
        <Typography style="caption1" variant="emphasized">
          History
        </Typography>
      </LinkItem>
    </div>
  );
}
