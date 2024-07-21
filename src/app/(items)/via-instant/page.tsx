import CategoryPageComponent from "@/src/components/Category/CategoryPageComponent";
import React from "react";
import siteMetadata from "@/src/utils/siteMetaData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - VIA Instant`,
  openGraph: {
    title: `${siteMetadata.title} - VIA Instant`,
    url: `${siteMetadata.siteUrl}via-instant`,
  },
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/logo.io?v=4"],
    shortcut: ["logo.io"],
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}via-instant`,
  },
};

const ViaInstant = () => {
  return <CategoryPageComponent name="VIA® Instant" link="/via-instant" />;
};

export default ViaInstant;
