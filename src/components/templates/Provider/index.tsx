"use client";

import { PropsWithChildren } from "react";
import { MotionConfig } from "framer-motion";

function Provider(props: PropsWithChildren) {
  return (
    <>
      {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
      <MotionConfig reducedMotion="user">{props.children}</MotionConfig>
      {/* </ThemeProvider> */}
    </>
  );
}

export default Provider;
