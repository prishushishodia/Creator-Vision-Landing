import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Creator Vision — Pay Creators for Actual Brand Visibility",
  description:
    "AI-powered campaign analysis that measures exact brand exposure time in creator content. Stop paying flat fees — pay for real visibility with automated, fair payouts.",
  keywords: [
    "influencer marketing",
    "creator payouts",
    "brand visibility",
    "computer vision",
    "sponsored content analytics",
    "ROI tracking",
  ],
  openGraph: {
    title: "Creator Vision — Pay Creators for Actual Brand Visibility",
    description:
      "AI-powered campaign analysis that measures exact brand exposure time in creator content.",
    type: "website",
    siteName: "Creator Vision",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creator Vision — Pay Creators for Actual Brand Visibility",
    description:
      "AI-powered campaign analysis that measures exact brand exposure time in creator content.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
