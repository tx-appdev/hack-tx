import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hack TX 2024",
  description: "Submission for Hack TX 2024",
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
