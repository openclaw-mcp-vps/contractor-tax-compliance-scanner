import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contractor Tax Compliance Scanner",
  description: "Scan contractor agreements for IRS misclassification risks before audits hit."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c0b4d0c2-1ac1-4698-a4d4-76728a59056e"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
