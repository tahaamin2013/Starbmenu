import CategoryPageComponent from "@/src/components/Category/CategoryPageComponent";
import React from "react";
import siteMetadata from "@/src/utils/siteMetaData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Tumblers`,
  openGraph: {
    title: `${siteMetadata.title} - Tumblers`,
    url: `${siteMetadata.siteUrl}tumblers`,
  },
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/logo.io?v=4"],
    shortcut: ["logo.io"],
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}tumblers`,
  },
};

const Tumblers = () => {
  return (
    <CategoryPageComponent
      name="Tumblers"
      link="/tumblers"
    />
  );
};

export default Tumblers;
