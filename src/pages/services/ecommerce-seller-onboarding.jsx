import React from 'react';
import Head from 'next/head';
import SellerOnboardingHero from '@components/SellerOnboardingHero';
import SellerOnboardingProcess from '@components/SellerOnboardingProcess';
import OnboardingBenefits from '@components/OnboardingBenefits';
import Footer from '@components/Footer';

const SellerOnboardingPage = () => {
  return (
    <>
      <Head>
        <title>Seller Onboarding & Account Creation | Your E-commerce Platform</title>
        <meta name="description" content="Streamline your seller onboarding process across multiple e-commerce platforms. Quick setup, secure process, and 24/7 support for your online business." />
        <meta name="keywords" content="seller onboarding, account creation, e-commerce, Amazon, Flipkart, Myntra, Ajio, Nykaa, Meesho, JioMart, AZA Fashion" />
      </Head>
      <main>
        <SellerOnboardingHero />
        <SellerOnboardingProcess />
        <OnboardingBenefits />
        {/* Add more sections as needed */}
      </main>
      <Footer />
    </>
  );
};

export default SellerOnboardingPage;