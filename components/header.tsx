"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";
import { menuItems } from "@/lib/content";
export function Header() {
  const pathname = usePathname();
  const [active, setActive] = useState("");
  useEffect(() => {
    if (pathname !== "/" || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: "-15% 0px -60% 0px", threshold: 0 });
    document.querySelectorAll("main > .wrap > section[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);
  return <header className="site-header"><div className="wrap header-inner">
    <Link className="wordmark" href="/">{site.name}<span aria-hidden="true">.</span></Link>
    <nav aria-label="Main navigation">{menuItems.map((item) => <Link key={item.href} href={item.href} aria-current={item.href === pathname ? "page" : pathname === "/" && item.href === `/#${active}` ? "location" : undefined}>{item.label}</Link>)}</nav>
  </div></header>;
}
