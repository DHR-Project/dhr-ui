import {
  HomeIcon,
  MagnifyingGlassIcon,
  CounterClockwiseClockIcon,
} from "@radix-ui/react-icons";
import LinkItem from "./LinkItem";

export default function Navbar() {
  return (
    <nav className="navbar sticky inset-x-0 bottom-0 horizontal items-center justify-around px-12 py-2 bg-background/70 backdrop-blur-md backdrop-saturate-200">
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
    </nav>
  );
}
