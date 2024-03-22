import "./globals.css";

import Provider from "@/components/templates/Provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "Distributed Human Resources",
  description: "",
};

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{props.children}</Provider>
      </body>
    </html>
  );
}
