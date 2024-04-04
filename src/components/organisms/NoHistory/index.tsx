import Button from "@/components/atoms/Button";
import { ReaderIcon } from "@radix-ui/react-icons";

export default function NoHistory() {
  return (
    <div className="vertical flex-1">
      <div className="vertical flex-1 items-center justify-center text-center">
        <ReaderIcon width={122} height={122} className="text-gray-400" />
        <h2 className="text-2xl font- mt-7">No History Yet</h2>
        <p className="font-light text-gray-500 mt-4">
          Hit the orange button down below to Create an order
        </p>
      </div>
      <Button>Start Order</Button>
    </div>
  );
}
