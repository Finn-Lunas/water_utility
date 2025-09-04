"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const nav = [
  { href: "/#news", label: "Новини" },
  { href: "/#subscriber", label: "Для абонента" },
  { href: "/#about", label: "Про нас" },
  { href: "/#jobs", label: "Вакансії" },
  { href: "/#contacts", label: "Контакти" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur bg-white/70 ${
        scrolled ? "shadow-soft border-b border-line" : ""
      }`}
      style={{ height: "var(--header-h)" }}
    >
      <div className="container h-full flex items-center justify-between">
        <Link href="/#top" className="flex items-center gap-2">
          <Image
            src="/logo-vodokanal-karpatviz.jpg"
            alt="Водоканал Карпатвіз"
            width={0}
            height={0}
            sizes="36px"
            style={{ width: 36, height: "auto" }}
            className="rounded-xl object-cover"
            priority
          />
          <span className="font-semibold">Водоканал Карпатвіз</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="text-sm text-textSecondary hover:text-textPrimary transition"
            >
              {i.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/login"
          className="inline-flex items-center rounded-xl bg-primary hover:bg-primary-600 text-white px-4 py-2 text-sm transition"
        >
          Вхід в особистий кабінет
        </Link>
      </div>
    </header>
  );
}
