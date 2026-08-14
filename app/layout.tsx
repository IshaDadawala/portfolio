import type { Metadata } from "next";
import { Fraunces, Work_Sans, Space_Mono, Caveat } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/data";
import MotionProvider from "@/components/MotionProvider";
import CursorGlow from "@/components/CursorGlow";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${site.name}  Portfolio`,
  description: site.tagline,
};

const themeInit = `
(function() {
  try {
    var saved = localStorage.getItem('theme');
    if (saved === 'blueprint') {
      document.documentElement.setAttribute('data-theme', 'blueprint');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body
        className={`${fraunces.variable} ${workSans.variable} ${spaceMono.variable} ${caveat.variable} antialiased`}
      >
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <CursorGlow />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
