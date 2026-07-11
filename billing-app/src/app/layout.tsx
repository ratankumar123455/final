import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UdhaarLog — Credit & Cash Tracker for Shops",
  description: "Track customer udhaar (credit) and daily sales, with WhatsApp payment reminders.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
