import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TappedIn — Proof > Performance",
  description: "Get discovered for what you've built, not what you've posted.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
