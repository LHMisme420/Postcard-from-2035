
// app/layout.tsx
import "./globals.css";

export const metadata = {
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
      <body className="min-h-screen bg-black text-white">{children}</body>
    </html>
  );
}
