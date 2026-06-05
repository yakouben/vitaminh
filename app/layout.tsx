import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VITAMINH Lagree Body Lab - Thao Dien, Ho Chi Minh City",
  description:
    "Lagree Fitness I Pilates I Strength - VITAMINH is a premium boutique fitness studio in Thao Dien, Ho Chi Minh City.",
  openGraph: {
    title: "VITAMINH Lagree Body Lab - Thao Dien, Ho Chi Minh City",
    description:
      "Lagree Fitness I Pilates I Strength - VITAMINH is a premium boutique fitness studio in Thao Dien, Ho Chi Minh City.",
    url: "https://vitaminh.com/",
    siteName: "VITAMINH Lagree Body Lab",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "LAGREE FITNESS I PILATES I STRENGTH - VITAMINH Lagree Body Lab",
    description:
      "Lagree Fitness I Pilates I Strength - VITAMINH is a premium boutique fitness studio in Thao Dien, Ho Chi Minh City.",
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
