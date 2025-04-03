"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Nav = () => {
  const pathname = usePathname(); // Get current path

  return (
    <ul className="flex gap-10">
      {[
        { href: "/page", label: "Home" },
        { href: "/iphone", label: "iPhone" },
        { href: "/ipad", label: "iPad" },
        { href: "/iwatch", label: "iWatch" },
        { href: "/support", label: "Support" },
      ].map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            className={`px-8 py-1 rounded-4xl ${
              pathname === href ? "text-[#c8dce5] bg-amber-50" : "text-amber-50"
            }`}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
