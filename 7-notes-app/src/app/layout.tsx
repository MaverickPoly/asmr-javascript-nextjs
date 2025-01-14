import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "7.Markdown Based Notes app",
  description: "Simple notes app with Markdown support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout>
            {children}
        </Layout>
      </body>
    </html>
  );
}
