"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/black-and-white", label: "Black\u00a0&\u00a0White" },
  { href: "/color", label: "Color" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10">
      <div className="flex items-center justify-between px-6 h-12">
        <Link
          href="/"
          className="text-[11px] tracking-[0.18em] uppercase font-medium hover:opacity-50 transition-opacity"
        >
          Jack Schufreider
        </Link>
        <nav className="flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-[11px] tracking-[0.15em] uppercase transition-opacity hover:opacity-50 ${
                pathname === href ? "opacity-40" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
