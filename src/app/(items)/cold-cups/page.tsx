import CategoryPageComponent from "@/src/components/Category/CategoryPageComponent";
import React from "react";
import siteMetadata from "@/src/utils/siteMetaData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Cold Cups`,
  openGraph: {
    title: `${siteMetadata.title} - Cold Cups`,
    url: `${siteMetadata.siteUrl}cold-cups`,
  },
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/logo.io?v=4"],
    shortcut: ["logo.io"],
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}cold-cups`,
  },
};

const ColdCups = () => {
  return <CategoryPageComponent name="Cold Cups" link="/cold-cups" />;
};

export default ColdCups;
