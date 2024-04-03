"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TabLink() {
  const pathname = usePathname();
  const isLoginPage = pathname === "/auth/login";
  const isSignUpPage = pathname === "/auth/sign-up";

  return (
    <div className="horizontal w-full px-6 justify-center gap-4">
      <Link href="login" className="font-semibold text-lg px-8 py-4 relative">
        Login
        {isLoginPage && (
          <motion.span
            layoutId="underline"
            className="absolute bottom-0 inset-x-0 border-b-2 border-primary"
          />
        )}
      </Link>
      <Link href="sign-up" className="font-semibold text-lg px-8 py-4 relative">
        Signup
        {isSignUpPage && (
          <motion.span
            layoutId="underline"
            className="absolute bottom-0 inset-x-0 border-b-2 border-primary"
          />
        )}
      </Link>
    </div>
  );
}
