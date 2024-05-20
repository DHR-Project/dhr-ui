"use client";

import { usePathname } from "next/navigation";
import { m } from "framer-motion";
import { Link } from "next-view-transitions";

export default function TabLink() {
  const pathname = usePathname();
  const isLoginPage = pathname === "/auth/login";
  const isSignUpPage = pathname === "/auth/sign-up";

  return (
    <div className="horizontal gap-1 h-10 p-1 bg-gray-100 dark:bg-[rgba(26,26,26,1)] items-center justify-center rounded-lg shadow-xs-inset">
      <Link
        href="login"
        className="horizontal items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium relative focus:outline-secondary hover:bg-background rounded"
      >
        <span className="z-10">Login</span>
        {isLoginPage && (
          <m.span
            layoutId="background"
            className="absolute inset-0 bg-background/80 rounded shadow-xs"
          />
        )}
      </Link>
      <Link
        href="sign-up"
        className="horizontal items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium relative focus:outline-secondary hover:bg-background rounded"
      >
        <span className="z-10">Signup</span>
        {isSignUpPage && (
          <m.span
            layoutId="background"
            className="absolute inset-0 bg-background/80 rounded shadow-xs"
          />
        )}
      </Link>
    </div>
  );
}
