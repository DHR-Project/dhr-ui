import cn from "@/utils/cn";
import Image from "next/image";
import { ComponentProps } from "react";

interface ILogoProps {
  className?: string;
  imageProps?: Omit<ComponentProps<typeof Image>, "src" | "alt">;
}

export default function Logo(props: ILogoProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-full w-20 h-20 flex items-center justify-center",
        props.className
      )}
    >
      <Image
        src="/assets/logo.png"
        width={!props.imageProps?.fill ? 50 : undefined}
        height={!props.imageProps?.fill ? 50 : undefined}
        alt="Food for Everyone"
        {...props.imageProps}
        className={cn(
          "w-auto h-auto aspect-square",
          props.imageProps?.className
        )}
      />
    </div>
  );
}
