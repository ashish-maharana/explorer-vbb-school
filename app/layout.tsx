import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/scroll-progress";
import { ThemeProvider } from "@/components/theme-provider";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const grotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Explorer & V.B.B. English Medium School",
  description:
    "Futuristic, balanced, and future-ready learning at Explorer & V.B.B. English Medium School in Sayan, Surat, Gujarat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${jakarta.variable} ${grotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--bg)] text-[var(--fg)]">
        <ThemeProvider>
          <ScrollProgress />
          <div className="min-h-screen">
            <Navbar />
            <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
