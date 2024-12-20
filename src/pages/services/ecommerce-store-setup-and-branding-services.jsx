import React from 'react';
import Head from 'next/head';
import StoreSetupHero from '@/src/components/storeSetupAndBranding/StoreSetupHero';
import SotrePlatformServices from '@/src/components/storeSetupAndBranding/SotrePlatformServices';
import StoreBrandingServices from '@/src/components/storeSetupAndBranding/StoreBrandingServices';
import StoreSetupProcess from '@/src/components/storeSetupAndBranding/StoreSetupProcess';
import StoreCaseStudiesAndFAQ from '@/src/components/storeSetupAndBranding/StoreCaseStudiesAndFAQ';
import Footer from '@components/Footer';

const StoreSetupAndBrandingPage = () => {
  return (
    <>
   <Head>
  <title>E-commerce Store Setup & Branding Services | Multi-Platform Solutions</title>
  <meta 
    name="description" 
    content="Boost your e-commerce sales with professional store setup and branding services for Amazon, Flipkart, Nykaa, Myntra, Ajio, and more. Tailored solutions for sellers. Start now!" 
  />
  <meta 
    name="keywords" 
    content="ecommerce store setup services, online store creation for sellers, Amazon seller account setup, Flipkart seller onboarding assistance, Nykaa seller store design, Myntra seller branding services, Ajio seller account management, Aza Fashion seller support, Meesho seller store setup, professional ecommerce store development, seller branding and marketing solutions, ecommerce storefront customization" 
  />
</Head>


      {/* Main Content */}
      <StoreSetupHero />
      <SotrePlatformServices />
      <StoreBrandingServices />
      <StoreSetupProcess />
      <StoreCaseStudiesAndFAQ />
      <Footer />
      </>
  );
};

export default StoreSetupAndBrandingPage;