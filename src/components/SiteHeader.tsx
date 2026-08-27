"use client";

import Link from "next/link";
import Image from "next/image";
import { List, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const links = [
  ["Work", "/#work"],
  ["About", "/#about"],
  ["Skills", "/#skills"],
  ["Contact", "/#contact"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Work");

  useEffect(() => {
    if (window.location.pathname !== "/") return;
    const handleScroll = () => {
      if (window.scrollY < 320) setActive("Work");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    const targets = links
      .map(([label, href]) => ({ label, element: document.querySelector(href.replace("/", "")) }))
      .filter((item) => item.element) as { label: string; element: Element }[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const match = targets.find((item) => item.element === visible.target);
          if (match) setActive(match.label);
        }
      },
      { rootMargin: "-30% 0px -55%", threshold: [0.05, 0.25] },
    );
    targets.forEach((item) => observer.observe(item.element));
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            <Image src="/dev-neupane-monogram.png" width={48} height={48} alt="" priority />
          </span>
          <span><strong>Dev Neupane</strong><small>Applied AI &amp; Data Analyst</small></span>
        </Link>
        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close navigation" : "Open navigation"}</span>
          {open ? <X size={24} /> : <List size={24} />}
        </button>
        <nav id="site-nav" aria-label="Main navigation" className={open ? "nav-links open" : "nav-links"}>
          {links.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className={active === label ? "active" : ""}
              aria-current={active === label ? "page" : undefined}
              onClick={() => { setOpen(false); setActive(label); }}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
