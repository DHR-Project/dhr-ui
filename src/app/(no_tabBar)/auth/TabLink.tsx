"use client";

import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";
import cn from "@/utils/cn";

const links = [
  { href: "login", title: "Login" },
  { href: "sign-up", title: "Signup" },
];

export default function TabLink() {
  const pathname = usePathname();

  return (
    <div className="horizontal gap-1 bg-fill-tertiary p-0.5 rounded-[9px]">
      {links.map(({ href, title }) => (
        <Link
          key={href}
          href={href}
          className={cn(
            "rounded-[7px] px-4 py-2",
            pathname === `/auth/${href}` &&
              "shadow-xs bg-bg-primary dark:bg-[#636366] dark:shadow-transparent [&>span]:font-semibold"
          )}
        >
          <span className={cn("text-label-primary")}>{title}</span>
        </Link>
      ))}
    </div>
  );
}
