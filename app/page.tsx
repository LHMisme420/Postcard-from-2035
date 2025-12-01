import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Postcard From 2035",
  description: "Write a letter today. We mail it in 2035.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-purple-900 via-black to-blue-900 text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
