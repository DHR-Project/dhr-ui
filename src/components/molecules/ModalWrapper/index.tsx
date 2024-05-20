"use client";

import cn from "@/utils/cn";
import { AnimatePresence, type HTMLMotionProps, m } from "framer-motion";

const ModalWrapper = AnimatePresence;

export default ModalWrapper;

export const Modal = ({
  // href,
  className,
  ...props
}: HTMLMotionProps<"div"> & {
  href?: string;
}) => {
  return (
    <>
      <m.div {...props} className={cn("", className)} />
    </>
  );
};
