import "./globals.css";

export const metadata = {
  title: "3. Simple Todo App",
  description: "Simple Todo List app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <main className="flex items-center justify-center min-h-screen">
        {children}
      </main>
      </body>
    </html>
  );
}
