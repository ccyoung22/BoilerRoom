import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boiler Room Cover Letter",
  description: "Junior Developer Role Application Cover Letter",
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
