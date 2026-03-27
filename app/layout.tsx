import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/Providers";
import { GridLines } from "@/components/ui/GridLines";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Climon — CLI Ecosystem Platform",
  description: "High-performance industrial tools for the modern engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed inset-0 dot-pattern pointer-events-none -z-10" />
          <div className="fixed inset-0 noise-texture opacity-[0.02] pointer-events-none z-50" />
          <div className="fixed inset-0 pointer-events-none -z-5">
            <div className="max-w-7xl mx-auto px-6 h-full relative">
              <GridLines
                vertical={[0, 20, 80, 100]}
                horizontal={[0, 25, 50, 75, 100]}
                intersections={[
                  { x: 20, y: 25 }, { x: 80, y: 25 },
                  { x: 20, y: 75 }, { x: 80, y: 75 }
                ]}
              />
            </div>
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
