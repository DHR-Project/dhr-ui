"use client";

import { PropsWithChildren } from "react";
import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "next-themes";

function Provider(props: PropsWithChildren) {
  return (
    <ThemeProvider enableSystem attribute="class" defaultTheme="system">
      <MotionConfig reducedMotion="user">{props.children}</MotionConfig>
    </ThemeProvider>
  );
}

export default Provider;
