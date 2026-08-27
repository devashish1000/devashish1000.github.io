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
    description: "Applied AI, decision intelligence, workflow automation, and analytics product delivery.",
    type: "website",
    url: "https://devashish1000.github.io/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Dev Neupane — Applied AI & Data Analyst" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Neupane — Applied AI & Data Analyst",
    description: "Applied AI, decision intelligence, workflow automation, and analytics product delivery.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
