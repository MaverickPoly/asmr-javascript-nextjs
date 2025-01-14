import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "10. UI Tests with Aceternity",
  description: "Some cool aceternity UI components tested in action.",
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
