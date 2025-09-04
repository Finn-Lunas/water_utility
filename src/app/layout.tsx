import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Водоканал Карпатвіз",
  description:
    "Офіційний сайт комунального підприємства «Водоканал Карпатвіз».",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className={inter.className + " text-textPrimary bg-white"}>
        <div id="top" />
        {children}
      </body>
    </html>
  );
}
