import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteName = "Yuki's Portfolio";
const description = "これまでの実績をまとめたポートフォリオサイトです。";
const url = "https://yukidevelop29.github.io/my-portfolio/";

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: description,
  openGraph: {
    title: siteName,
    description: description,
    url: url,
    siteName: siteName,
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: `${url}og-image.png`, // 絶対パスである必要があります
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image", // 画像を大きく表示する設定
    title: siteName,
    description: description,
    images: [`${url}og-image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
