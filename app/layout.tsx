import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { RouteScrollReset } from "@/components/route-scroll-reset";
import { ScrollProgress } from "@/components/scroll-progress";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const nunito = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Explorer & V.B.B. English Medium School",
  description:
    "Bright, balanced, and future-ready learning at Explorer & V.B.B. English Medium School in Sayan, Surat, Gujarat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${nunito.variable} ${fredoka.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--bg)] text-[var(--fg)]">
        <RouteScrollReset />
        <ScrollProgress />
        <div className="min-h-screen">
          <Navbar />
          <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </body>
    </html>
  );
}
