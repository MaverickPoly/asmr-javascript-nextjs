import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";


export const metadata: Metadata = {
  title: "Simple blog app",
  description: "With static content and dynamic routing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Header />
        <main className="max-w-5xl mx-auto mt-10">
            {children}
        </main>
      </body>
    </html>
  );
}
