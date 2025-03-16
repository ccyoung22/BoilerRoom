import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boiler Room Cover Letter",
  description: "Junior Developer Role Application Cover Letter",
  icons: {
    icon: "/favicon.ico", // Link to your favicon
  },
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
