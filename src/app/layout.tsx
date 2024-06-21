import cn from "@/utils/cn";
import "./globals.css";

import Provider from "@/components/templates/Provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { type ReactNode, type PropsWithChildren } from "react";
import { ViewTransitions } from "next-view-transitions";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "Food for everyone",
  description: "",
};

interface IRootLayoutProps {
  modal: ReactNode;
  // mobile?: ReactNode;
}

export default function RootLayout(props: PropsWithChildren<IRootLayoutProps>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            inter.className,
            "bg-material-chrome text-label-primary subpixel-antialiased bg-blend-hard-light"
          )}
        >
          <Provider>{props.children}</Provider>
        </body>
      </html>
    </ViewTransitions>
  );
}
