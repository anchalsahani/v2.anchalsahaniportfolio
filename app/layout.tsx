import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Anchal Sahani — Portfolio",
  description:
    "Frontend Developer & UI Engineer specializing in modern web applications with React, Next.js, TypeScript, and TailwindCSS.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  metadataBase: new URL("https://anchalsahani.com"), // update when domain is live
  openGraph: {
    title: "Anchal Sahani — Portfolio",
    description:
      "A showcase of web development projects, UI/UX engineering, and technical creativity by Anchal Sahani.",
    url: "https://anchalsahani.com",
    siteName: "Anchal Sahani Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anchal Sahani Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anchal Sahani — Portfolio",
    description:
      "Frontend Developer & UI Engineer with experience in scalable modern web applications.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Smooth scrolling + theme support ready */}
      <body className="antialiased bg-[var(--background)] text-[var(--foreground)]">
        <Navbar />

        {/* Space for navbar */}
        <main className="pt-20">{children}</main>

        {/* Optional aurora effect */}
        <div className="aurora">
          <span></span>
        </div>
      </body>
    </html>
  );
}
