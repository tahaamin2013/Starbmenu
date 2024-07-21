import CategoryPageComponent from "@/src/components/Category/CategoryPageComponent";
import React from "react";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Cold Coffees`,
  description: "Explore our refreshing selection of cold coffees and iced beverages.",
  openGraph: {
    title: `${siteMetadata.title} - Cold Coffees`,
    description: "Explore our refreshing selection of cold coffees and iced beverages.",
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
