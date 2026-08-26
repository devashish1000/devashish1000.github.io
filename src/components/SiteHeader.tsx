"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  ["Work", "/#work"],
  ["Experience", "/#experience"],
  ["Approach", "/#approach"],
  ["Resume", "/Dev_Neupane_Resume.pdf"],
  ["Contact", "/#contact"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          Dev Neupane
        </Link>
        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav id="site-nav" aria-label="Main navigation" className={open ? "nav-links open" : "nav-links"}>
          {links.map(([label, href]) => (
            <Link key={label} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
