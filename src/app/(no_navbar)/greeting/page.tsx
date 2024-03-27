import Button from "@/components/atoms/Button";
import Image from "next/image";

export default function GreetingPage() {
  return (
    <div className="w-screen h-[100svh] bg-[#FF470B] text-white vertical py-9 justify-between overflow-auto">
      <div className="vertical px-[50px] gap-8">
        <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center">
          <Image
            src="/assets/logo.png"
            width={50}
            height={50}
            alt="Food for Everyone"
          />
        </div>
        <h1 className="text-[65px] font-bold leading-[86.8%]">
          Food for Everyone
        </h1>
      </div>
      <div className="vertical items-center gap-5">
        <div className="relative h-[434px] w-full overflow-hidden">
          <Image
            src="/assets/ToyFaces_Tansparent_BG_29.png"
            width={225}
            height={298}
            alt="ToyFaces_Tansparent_BG_49.png"
            className="absolute rotate-[8.57deg] bottom-[40px] right-1/2 translate-x-[110%]"
          />
          <div className="w-[272px] h-[170px] absolute -bottom-20 right-1/2 translate-x-[110%] rotate-[8.57deg] bg-gradient-to-t from-[#FF470B] to-[rgba(255,71,11,8)] blur-[30px]" />
          <Image
            src="/assets/ToyFaces_Tansparent_BG_49.png"
            width={358}
            height={434}
            alt="ToyFaces_Tansparent_BG_49.png"
            className="absolute -rotate-3 left-1/2 -translate-x-[75%]"
          />
          <div className="w-[394px] h-[195px] absolute -bottom-20 left-1/2 -translate-x-[65%] -rotate-3 bg-gradient-to-t from-[#FF470B] to-[rgba(255,71,11,8)] blur-[30px]" />
        </div>
        <div className="z-10 px-[50px] w-full">
          <Button variant="secondary" className="w-full">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
