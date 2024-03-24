import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import "./globals.css";

const chakra_petch = Chakra_Petch({ 
  subsets: ["latin"],
  weight: "300", 
});

export const metadata: Metadata = {
  title: "Kitt's Blogs",
  description: "Kittichai personal blogs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={chakra_petch.className}>{children}</body>
    </html>
  );
}
