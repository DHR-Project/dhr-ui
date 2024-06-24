import Typography from "@/components/atoms/Typography";
import NoEntry from "@/components/organisms/NoEntry";
import { ReaderIcon } from "@radix-ui/react-icons";

export default function NoHistory() {
  return (
    <NoEntry>
      <ReaderIcon width={122} height={122} className="text-gray-400" />
      <Typography style="largeTitle" variant="emphasized" asChild>
        <h2 className="mt-7">No History Yet</h2>
      </Typography>
    </NoEntry>
  );
}
