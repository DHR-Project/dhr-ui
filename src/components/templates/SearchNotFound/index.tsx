import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function SearchNotFound() {
  return (
    <div className="vertical items-center justify-center">
      <MagnifyingGlassIcon width={122} height={122} className="text-gray-400" />
      <h2 className="text-2xl font- mt-7">Item not found</h2>
      <p className="font-light text-gray-500 mt-4 text-center">
        Try searching the item with a different keyword.
      </p>
    </div>
  );
}
