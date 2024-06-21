import {
  HomeIcon,
  MagnifyingGlassIcon,
  CounterClockwiseClockIcon,
} from "@radix-ui/react-icons";
import LinkItem from "./LinkItem";

export default function TabBar() {
  return (
    <div className="tab-bar">
      <LinkItem href="/home">
        <HomeIcon width={24} height={24} />
        <span className="text-xs">Home</span>
      </LinkItem>
      <LinkItem href="/search">
        <MagnifyingGlassIcon width={24} height={24} />
        <span className="text-xs">search</span>
      </LinkItem>
      <LinkItem href="/history">
        <CounterClockwiseClockIcon width={24} height={24} />
        <span className="text-xs">History</span>
      </LinkItem>
    </div>
  );
}
