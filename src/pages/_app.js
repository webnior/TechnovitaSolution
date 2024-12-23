import React from "react";
import Head from "next/head";
import appData from "@data/app.json";
import { SpeedInsights } from '@vercel/speed-insights/next';
import "../styles/scss/style.scss";
import "../styles/globals.css";

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* seo begin */}
        <title>{appData.settings.siteName}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="author" content="Mukesh Kumar Bagaria" />
        <meta
          name="description"
          content="Grow your online business with Teachnovita Solutions. We specialize in seller account management, platform onboarding (Myntra, Ajio, Nykaa, Aza Fashion), and sales optimization through store optimization and digital marketing. Boost your e-commerce success with our expert services!"
        />

        <meta
          name="keywords"
          content="e-commerce services, seller account management, platform onboarding, Myntra, Ajio, Nykaa, Aza Fashion, store optimization, digital marketing, sales boost, Teachnovita Solutions, e-commerce growth Services"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="og:title"
          content="Teachnovita Solutions | Expert E-Commerce Services for Sellers"
        />
        <meta
          name="og:description"
          content="Specialized e-commerce services including seller account management, platform onboarding, and sales optimization. Partner with Teachnovita Solutions for success!"
        />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://www.teachnovita.in" />
        <meta
          name="og:image"
          content="https://technovitasolution.com/Images/img5.jpg"
        />
        <meta name="og:image:alt" content="Teachnovita Solutions - Expert E-Commerce Services for Sellers" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Teachnovita Solutions | Expert E-Commerce Services for Sellers"
        />
        <meta
          name="twitter:description"
          content="Grow your online business with expert e-commerce services from Teachnovita Solutions. Optimize your sales today!"
        />
        <meta
          name="twitter:image"
          content="https://technovitasolution.com/Images/img5.jpg"
        />
        <meta name="theme-color" content="#F5A841" />
        <meta name="language" content="en" />
        <meta name="distribution" content="global" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        {/* seo end */}
      </Head>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}

export default MyApp;
