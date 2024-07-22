import Feetured from "@/src/components/Featured";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const Featured = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Featured Starbucks Menu Items",
    "description": "Explore our featured Starbucks menu items including seasonal specials and customer favorites.",
    "url": "https://starbmenu.com/featured",
    "isPartOf": {
      "@type": "WebSite",
      "name": "StarbMenu",
      "url": "https://starbmenu.com/"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "New Summer-Berry Starbucks Refreshers® Beverages",
          "description": "A mix of berry flavors over bursting raspberry flavored pearls, enjoyed alone or with lemonade or coconutmilk."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "White Chocolate Macadamia Cream Cold Brew",
          "description": "Smooth and lush, our White Chocolate Macadamia Cream Cold Brew is topped with toasted cookie crumbles."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Caramel Ribbon Crunch Frappuccino® Blended Beverage",
          "description": "Caramel syrup blended with coffee, milk and ice, topped with a dark caramel drizzle."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "New Orange Cream Cake Pop",
          "description": "A mix of orange cream cake and buttercream, dipped in white-chocolaty icing with an orange slice design."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "New Pineapple Cloud Cake",
          "description": "An airy cake layered with lightweight pineapple cream and pineapple spread with whole fruit pieces."
        }
      ]
    }
  };

  return (
    <>
       <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </Head>
    <div>
      <h1 className="font-bold text-4xl md:text-6xl text-center mt-4">
        We&lsquo;re on summertime
      </h1>

      <Feetured
        borderButton="#ececec"
        color="#ececec"
        direction="Left"
        imageSrc="/Starbucks New Summer Berry Starbucks Refreshers Beverages.jpg"
        title="New Summer-Berry Starbucks Refreshers® Beverages"
        description="Introducing the official drink of summer—a mix of berry 
            flavors over bursting raspberry flavored pearls, enjoyed alon
           or with lemonade or coconutmilk."
        bg="#0021db"
      />
      <Feetured
        borderButton="#1e3932"
        color="#1e3932"
        direction="Right"
        imageSrc="/Starbucks White Chocolate Macadamia Cream Cold Brew.webp"
        title="White Chocolate Macadamia Cream Cold Brew"
        description="Smooth and lush, our White Chocolate Macadamia Cream Cold Brew is topped with toasted cookie crumbles."
        bg="#d6e342"
      />
      <Feetured
        borderButton="#1e3932"
        color="#1e3932"
        direction="Left"
        imageSrc="/Starbucks Caramel Ribbon Crunch Frappuccino Blended Beverage.webp"
        title="Caramel Ribbon Crunch Frappuccino® Blended Beverage"
        description="Caramel syrup blended with coffee, milk and ice, topped with a dark caramel drizzle."
        bg="#f8cdd1"
      />
      <Feetured
        borderButton="#ececec"
        color="#ececec"
        direction="Right"
        imageSrc="/Starbucks New Orange Cream Cake Pop.jpg"
        title="New Orange Cream Cake Pop"
        description="A mix of orange cream cake and buttercream, dipped in white-chocolaty icing with an orange slice design."
        bg="#0021db"
      />
      <Feetured
        borderButton="#1e3932"
        color="#1e3932"
        direction="Left"
        imageSrc="/Starbucks New Pineapple Cloud Cake.webp"
        title="New Pineapple Cloud Cake"
        description="An airy cake layered with lightweight pineapple cream and pineapple spread with whole fruit pieces."
        bg="#fad4aa"
      />
      <div className="mb-9"></div>
    </div>
    </>
  );
};

export default Featured;
