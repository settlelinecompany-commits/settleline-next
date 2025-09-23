import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/blocks/site-header";
import { SiteFooter } from "@/components/blocks/site-footer";
import { getEnvironmentBadge } from "@/lib/env";
import { generateSEO } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = generateSEO();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const badge = getEnvironmentBadge();
  
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {badge && (
          <div className={`fixed top-0 right-0 z-50 px-3 py-1 text-xs font-medium text-white ${badge.color}`}>
            {badge.text}
          </div>
        )}
        <SiteHeader />
        <main className="min-h-screen">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
