import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "9.Gallery App",
  description: "Simple Gallery App: Next JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="max-w-5xl mx-auto bg-white p-1">
            {children}
        </main>
      </body>
    </html>
  );
}
