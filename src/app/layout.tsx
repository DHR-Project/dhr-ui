import cn from "@/utils/cn";
import "./globals.css";

import Provider from "@/components/templates/Provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren, ReactNode } from "react";
import { ViewTransitions } from "next-view-transitions";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "Food for everyone",
  description: "",
};

interface IRootLayoutProps {
  modal?: ReactNode;
  mobile?: ReactNode;
}

export default function RootLayout(props: PropsWithChildren<IRootLayoutProps>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={cn(
            inter.className,
            "bg-background text-foreground subpixel-antialiased"
          )}
        >
          <Provider>
            {props.children}
            <>{props.modal}</>
          </Provider>
        </body>
      </html>
    </ViewTransitions>
  );
}
