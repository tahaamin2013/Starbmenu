import CategoryPageComponent from "@/src/components/Category/CategoryPageComponent";
import React from "react";
import siteMetadata from "@/src/utils/siteMetaData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Hot Teas`,
  openGraph: {
    title: `${siteMetadata.title} - Hot Teas`,
    url: `${siteMetadata.siteUrl}hot-teas`,
  },
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/logo.io?v=4"],
    shortcut: ["logo.io"],
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}hot-teas`,
  },
};

const HotTeas = () => {
  return <CategoryPageComponent name="Hot Teas" link="/hot-teas" />;
};

export default HotTeas;
