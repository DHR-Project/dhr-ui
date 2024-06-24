import Typography from "@/components/atoms/Typography";
import NoEntry from "@/components/organisms/NoEntry";
import { ArchiveIcon } from "@radix-ui/react-icons";

export default function NoOrder() {
  return (
    <NoEntry>
      <ArchiveIcon width={122} height={122} className="text-gray-400" />

      <Typography style="largeTitle" variant="emphasized" asChild>
        <h2 className="mt-7">No Order Yet</h2>
      </Typography>
    </NoEntry>
  );
}
