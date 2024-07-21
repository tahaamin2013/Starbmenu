import CategoryPageComponent from "@/src/components/Category/CategoryPageComponent";
import siteMetadata from "@/src/utils/siteMetaData";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Bottled Beverages`,
  openGraph: {
    title: `${siteMetadata.title} - Bottled Beverages`,
    url: `${siteMetadata.siteUrl}bottled-beverages`,
  },
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/logo.io?v=4"],
    shortcut: ["logo.io"],
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}bottled-beverages`,
  },
};

const BottleBeverages = () => {
  return (
    <CategoryPageComponent name="Bottled Beverages" link="/bottled-beverages" />
  );
};

export default BottleBeverages;
