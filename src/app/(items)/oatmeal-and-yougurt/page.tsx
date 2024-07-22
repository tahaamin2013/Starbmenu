import CategoryPageComponent from "@/src/components/Category/CategoryPageComponent";
import React from "react";
import siteMetadata from "@/src/utils/siteMetaData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Oatmeal & Yogurt`,
  openGraph: {
    title: `${siteMetadata.title} - Oatmeal & Yogurt`,
    url: `${siteMetadata.siteUrl}oatmeal-and-yougurt`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}oatmeal-and-yougurt`,
  },
};

const OatmealAndYougurt = () => {
  return (
    <CategoryPageComponent
      name="Oatmeal & Yogurt"
      link="/oatmeal-and-yougurt"
    />
  );
};

export default OatmealAndYougurt;
