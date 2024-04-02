import Button from "@/components/atoms/Button";
import Image from "next/image";

export default function GreetingPage() {
  return (
    <div className="w-screen h-[100svh] bg-[#FF470B] text-white vertical py-9 justify-between overflow-hidden relative">
      <div className="vertical px-[50px] gap-8">
        <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center">
          <Image
            src="/assets/logo.png"
            width={50}
            height={50}
            alt="Food for Everyone"
            className="w-auto h-auto aspect-square"
          />
        </div>
        <h1 className="text-[65px] font-bold leading-[86.8%]">
          Food for Everyone
        </h1>
      </div>
      <div className="px-[50px]">
        <Button variant="secondary" className="w-full">
          Get Started
        </Button>
      </div>
    </div>
  );
}
