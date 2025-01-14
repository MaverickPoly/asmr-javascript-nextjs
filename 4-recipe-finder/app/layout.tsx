import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "4. Recipe Finder",
  description: "Using API for the Search",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
