import Button from "@/components/atoms/Button";
import Image from "next/image";

export default function GreetingPage() {
  return (
    <div className="w-screen min-h-screen bg-[#FF4B3A] text-white vertical px-[50px] py-9 justify-between overflow-auto">
      <div className="vertical">
        <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center">
          <Image
            src="/assets/logo.png"
            width={50}
            height={50}
            alt="Food for Everyone"
          />
        </div>
        <h1 className="text-[65px] font-bold">Food for Everyone</h1>
      </div>
      <div className="vertical items-center">
        <div className="relative h-[434px] w-[352px]">
          <Image
            src="/assets/ToyFaces_Tansparent_BG_29.png"
            width={225}
            height={298}
            alt="ToyFaces_Tansparent_BG_49.png"
            className="absolute rotate-[8.57deg] bottom-[40px] -right-[80px]"
          />
          <div className="w-[394px] h-[195px] absolute -bottom-20 -right-[150px] rotate-[8.57deg] bg-gradient-to-t from-[#FF470B] to-[rgba(255,71,11,8)] blur-[30px]" />
          <Image
            src="/assets/ToyFaces_Tansparent_BG_49.png"
            width={358}
            height={434}
            alt="ToyFaces_Tansparent_BG_49.png"
            className="absolute -rotate-3 -left-[75px]"
          />
          <div className="w-[394px] h-[195px] absolute -bottom-20 -left-[75px] -rotate-3 bg-gradient-to-t from-[#FF470B] to-[rgba(255,71,11,8)] blur-[30px]" />
        </div>
        <Button variant="secondary" className="z-10 w-full">
          Get Started
        </Button>
      </div>
    </div>
  );
}
