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
        <title>Seller Onboarding & Account Creation | Your E-commerce Platform</title>
        <meta name="description" content="Streamline your seller onboarding process across multiple e-commerce platforms. Quick setup, secure process, and 24/7 support for your online business." />
        <meta name="keywords" content="seller onboarding, account creation, e-commerce, Amazon, Flipkart, Myntra, Ajio, Nykaa, Meesho, JioMart, AZA Fashion" />
      </Head>
        <ProtectedContentWrapper>
      <main>
        <SellerOnboardingHero />
        <SellerOnboardingProcess />
        <OnboardingBenefits />
        <SellerOnboardingCTA/>
        <SellerOnboardingFaq/>
      <Footer />
      </main>
        </ProtectedContentWrapper>
    </>
  );
};

export default SellerOnboardingPage;