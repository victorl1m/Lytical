import type { Metadata } from "next";
import { Inter, Kaisei_Decol } from "next/font/google";
import "./globals.css";

const kaisei = Kaisei_Decol({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lytical - Criptocurrency",
  description: "Analysis criptocurrency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kaisei.className}>{children}</body>
    </html>
  );
}
