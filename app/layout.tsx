import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VITAMINH Lagree Body Lab - Thao Dien, Ho Chi Minh City",
  description:
    "Reformer Pilates I Yoga I Bootcamp - HERSPACE is a 400sqm brand new premium studio in the city centre of Munich, designed exclusively by women for women.",
  openGraph: {
    title: "VITAMINH Lagree Body Lab - Thao Dien, Ho Chi Minh City",
    description:
      "Reformer Pilates I Yoga I Bootcamp - HERSPACE is a 400sqm brand new premium studio in the city centre of Munich, designed exclusively by women for women.",
    url: "https://herspace.studio/",
    siteName: "HERSPACE Studio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "REFORMER PILATES I YOGA I BOOTCAMP - Herspace Studio",
    description:
      "Reformer Pilates I Yoga I Bootcamp - HERSPACE is a 400sqm brand new premium studio in the city centre of Munich, designed exclusively by women for women.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
