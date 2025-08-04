import type { Metadata } from "next";
import "./globals.css";
import { ThemeContextProvider } from "@/context/theme-context";
import ThemeSwitch from "@/components/theme-switch";
import Header from "@/components/header";
import { ActiveSectionContextProvider } from "@/context/active-section-context";
import { Nunito } from "next/font/google";
import { ResumeDownload } from "@/components/resume-download";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/next"


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Faizan Ahmad| Principal Software Engineer",
  description: "Principal Software engineer at Techlogix.",
};

const nunito = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${nunito.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            <ResumeDownload/>
            {children}
            <Analytics />
            <Toaster/>
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
