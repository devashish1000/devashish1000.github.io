import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Dev Neupane — Applied AI & Data Analyst",
    template: "%s — Dev Neupane",
  },
  description:
    "Applied AI and analytics professional building reliable AI-enabled workflows, data products, and decision-ready systems.",
  metadataBase: new URL("https://devashish1000.github.io"),
  openGraph: {
    title: "Dev Neupane — Applied AI & Data Analyst",
    description: "AI product delivery, analytics engineering, and business translation.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
