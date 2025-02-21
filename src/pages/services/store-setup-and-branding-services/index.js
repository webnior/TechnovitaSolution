import React from 'react';
import Head from 'next/head';
import StoreSetupHero from '@/src/components/storeSetupAndBranding/StoreSetupHero';
import SotrePlatformServices from '@/src/components/storeSetupAndBranding/SotrePlatformServices';
import StoreBrandingServices from '@/src/components/storeSetupAndBranding/StoreBrandingServices';
import StoreSetupProcess from '@/src/components/storeSetupAndBranding/StoreSetupProcess';
import StoreCaseStudiesAndFAQ from '@/src/components/storeSetupAndBranding/StoreCaseStudiesAndFAQ';
import Footer from '@components/Footer';
import ProtectedContentWrapper from '@components/ProtectedContentWrapper'
import Breadcrumb from '@/src/components/common/Breadcrumb';
import StoreSetupAndBrandingServices from '@/src/components/storeSetupAndBranding/StoreSetupAndBrandingServices';
const StoreSetupAndBrandingPage = () => {
  return (
    <>
  <Head>
 <title>Professional Ecommerce Store Setup & Branding | Multi-Platform Services | Technovita</title>
 <meta 
   name="description" 
   content="Complete ecommerce store setup and branding services for Amazon, Flipkart, Myntra & more. Expert storefront design, listing optimization & brand building solutions. Get started today!" 
 />
 <meta 
   name="keywords" 
   content="ecommerce store setup, marketplace branding services, Amazon storefront design, Flipkart store optimization, Myntra seller services, Ajio store setup, Nykaa seller solutions, professional store design, ecommerce branding, multi-platform setup, seller storefront customization, marketplace brand building, ecommerce launch services, store optimization services, seller branding solutions" 
 />
 <meta name="robots" content="index, follow" />
 

 <meta property="og:title" content="Complete Ecommerce Store Setup & Branding Solutions" />
 <meta property="og:description" content="Transform your online presence with professional store setup and branding across major marketplaces. Expert solutions for sellers ready to scale." />
 <meta property="og:type" content="website" />
 <meta property="og:locale" content="en_IN" />
 

 <meta name="twitter:card" content="summary_large_image" />
 <meta name="twitter:title" content="Professional Ecommerce Store Setup & Branding" />
 <meta name="twitter:description" content="Launch your ecommerce business with expert store setup and branding services. Multi-platform solutions for growing sellers." />
 
 
 <meta name="geo.region" content="IN" />
 <meta name="geo.placename" content="India" />
 <link rel="canonical" href="https://www.technovitasolution.in/services/ecommerce-store-setup-and-branding-services" />
 

</Head>

      <ProtectedContentWrapper>
        <Breadcrumb
          items={[
            { name: 'Services', href: '/services' },
            { name: 'Store Setup And Branding Services', href: '/services/store-setup-and-branding-services' },
            
          ]}
        /><main>
      {/* Main Content */}
      <StoreSetupHero />
      <StoreSetupAndBrandingServices/>
      <SotrePlatformServices />
      <StoreBrandingServices />
      <StoreSetupProcess />
      <StoreCaseStudiesAndFAQ />
      </main>
      <Footer />
      </ProtectedContentWrapper>
      
      </>
  );
};

export default StoreSetupAndBrandingPage;