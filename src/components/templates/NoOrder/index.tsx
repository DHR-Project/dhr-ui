import NoEntry from "@/components/organisms/NoEntry";
import { ArchiveIcon } from "@radix-ui/react-icons";

export default function NoOrder() {
  return (
    <NoEntry>
      <ArchiveIcon width={122} height={122} className="text-gray-400" />
      <h2 className="text-2xl font- mt-7">No Order Yet</h2>
    </NoEntry>
  );
}
