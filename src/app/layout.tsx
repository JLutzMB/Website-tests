import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "LUTZ — Photographer & Director",
  description:
    "João Lutz is a photographer and director working in São Paulo. Portraiture, fashion, and film.",
  keywords: [
    "João Lutz",
    "photographer",
    "director",
    "São Paulo",
    "fashion",
    "film",
    "portraiture",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="grain min-h-full flex flex-col bg-background text-foreground">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
