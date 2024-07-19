import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import siteMetadata from "../utils/siteMetaData";
import { cx } from "../utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteMetadata.title,
    template: `%s - ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,    
  },
  twitter: {
    card:'summary_large_image',
  },
  icons: {
    icon: ["/favicon.ico"],
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0b7555" />
        <meta property="og:image" content="https://starbmenu.com/opengraph-image.png" />
      </head>
      <body className={cx("font-mr")}>{children}</body>
    </html>
  );
}
