import React from 'react';
import Head from 'next/head';
import SellerOnboardingHero from '@/src/components/selleronboarding/SellerOnboardingHero';
import SellerOnboardingProcess from '@/src/components/selleronboarding/SellerOnboardingProcess';
import OnboardingBenefits from '@/src/components/selleronboarding/OnboardingBenefits';
import SellerOnboardingFaq from '@/src/components/selleronboarding/SellerOnboardingFaq';
import SellerOnboardingCTA from '@/src/components/selleronboarding/SellerOnboardingCTA';
import ProtectedContentWrapper from '@components/ProtectedContentWrapper'


import Footer from '@components/Footer';

const SellerOnboardingPage = () => {
  return (
    <>
     <Head>
  <title>Seller Onboarding Services For Myntra, Ajio, Nykaa & More | Technovita</title>
  <meta 
    name="description" 
    content="Professional seller onboarding & account creation services for Myntra, Ajio, Nykaa, Aza Fashion & Meesho. Expert assistance with documentation, verification & store setup. Start selling online today!" 
  />
  <meta 
    name="keywords" 
    content="seller onboarding services, marketplace account creation, Myntra seller registration, Ajio seller onboarding, Nykaa seller account, Meesho seller setup, Aza Fashion seller services, ecommerce store setup, marketplace integration, seller verification assistance, online selling setup, multi-channel selling, ecommerce platform registration, seller account creation services, marketplace onboarding assistance" 
  />
  <meta name="robots" content="index, follow" />
  

  <meta property="og:title" content="Professional Seller Onboarding Services | Multi-Platform Account Creation" />
  <meta property="og:description" content="Expert seller onboarding & account creation for Myntra, Ajio, Nykaa & more. Get started with professional documentation support & verification assistance." />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="en_IN" />
  

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Seller Onboarding Services For Multiple Marketplaces" />
  <meta name="twitter:description" content="Professional seller account creation & onboarding services for major Indian marketplaces. Start selling online with expert assistance." />
  

  <meta name="geo.region" content="IN" />
  <meta name="geo.placename" content="India" />
  <link rel="canonical" href="https://www.technovitasolution.in/services/ecommerce-seller-onboarding" />
  
</Head>
        <ProtectedContentWrapper>
      <main>
        <SellerOnboardingHero />
        <SellerOnboardingProcess />
        <OnboardingBenefits />
        <SellerOnboardingCTA/>
        <SellerOnboardingFaq/>
      </main>
      <Footer />
        </ProtectedContentWrapper>
    </>
  );
};

export default SellerOnboardingPage;