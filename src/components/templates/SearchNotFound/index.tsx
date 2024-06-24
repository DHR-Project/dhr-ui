import Typography from "@/components/atoms/Typography";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function SearchNotFound() {
  return (
    <div className="vertical items-center justify-center">
      <MagnifyingGlassIcon width={122} height={122} className="text-gray-400" />
      <Typography asChild variant="emphasized" style="headline">
        <h2>Item not found</h2>
      </Typography>
      <Typography asChild style="subheadline" color="secondary">
        <p className="mt-4 text-center">
          Try searching the item with a different keyword.
        </p>
      </Typography>
    </div>
  );
}
