"use client";

import { AnimatePresence, HTMLMotionProps, m } from "framer-motion";
import { usePathname } from "next/navigation";

const ModalWrapper = AnimatePresence;

export default ModalWrapper;

export const Modal = ({
  href,
  ...props
}: HTMLMotionProps<"div"> & {
  href?: string;
}) => {
  const pathname = usePathname();

  return <m.div {...props} />;
};
