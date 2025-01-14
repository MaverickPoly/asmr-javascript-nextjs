import type { Metadata } from "next";
import "./globals.css";
import {CartProvider} from "@/context/CartContext";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "6. Ecommerce",
  description: "Simple Ecommerce Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
            <Header />
            {children}
        </CartProvider>
      </body>
    </html>
  );
}
