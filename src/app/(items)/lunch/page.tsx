import CategoryPageComponent from "@/src/components/Category/CategoryPageComponent";
import React from "react";
import siteMetadata from "@/src/utils/siteMetaData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Lunch`,
  openGraph: {
    title: `${siteMetadata.title} - Lunch`,
    url: `${siteMetadata.siteUrl}lunch`,
  },
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/logo.io?v=4"],
    shortcut: ["logo.io"],
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}lunch`,
  },
};

const Lunch = () => {
  return <CategoryPageComponent name="Lunch" link="/lunch" />;
};

export default Lunch;
