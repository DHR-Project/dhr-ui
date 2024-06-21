import NoEntry from "@/components/organisms/NoEntry";
import { ReaderIcon } from "@radix-ui/react-icons";

export default function NoHistory() {
  return (
    <NoEntry>
      <ReaderIcon width={122} height={122} className="text-gray-400" />
      <h2 className="text-2xl font- mt-7">No History Yet</h2>
    </NoEntry>
  );
}
