import React from 'react';
import Head from 'next/head';
import PaymentReconciliationHero from '@/src/components/payment-reconciliation/PaymentReconciliationHero';
import PaymentReconciliationServices from '@/src/components/payment-reconciliation/PaymentReconciliationServices';
import ReconciliationBenefits from '@/src/components/payment-reconciliation/ReconciliationBenefits';
import PaymentReconciliationCTA from '@/src/components/payment-reconciliation/PaymentReconciliationCTA';
import PaymentReconciliationFAQ from '@/src/components/payment-reconciliation/PaymentReconciliationFAQ';
import Footer from '@components/Footer';
import ProtectedContentWrapper from '@/src/components/ProtectedContentWrapper';

const PaymentReconciliationPage = () => {
  return (
    <>
    <Head>
 <title>Ecommerce Payment Reconciliation Services | Automated Reconciliation | Technovita</title>
 <meta 
   name="description" 
   content="Professional payment reconciliation services for ecommerce businesses. Automated reconciliation solutions, payment tracking, report generation & banking integration. Streamline your marketplace payments today." 
 />
 <meta 
   name="keywords" 
   content="payment reconciliation services, ecommerce payment reconciliation, automated payment reconciliation, payment reconciliation software, online payment reconciliation, payment tracking, reconciliation process, marketplace payment reconciliation, ecommerce payment tracking, bank reconciliation services, payment report generation, payment processing reconciliation, automated reconciliation tools, payment settlement services, ecommerce financial services" 
 />
 <meta name="robots" content="index, follow" />
 <meta property="og:title" content="Payment Reconciliation Services for Ecommerce | Automated Solutions" />
 <meta property="og:description" content="Professional payment reconciliation services for ecommerce sellers. Automated solutions for tracking, reconciling & reporting marketplace payments. Streamline your payment processes." />
 <meta property="og:type" content="website" />
 <link rel="canonical" href="https://www.technovitasolution.in/services/ecommerce-payment-reconciliation" />
 <meta name="geo.region" content="IN" />
</Head>
    <ProtectedContentWrapper>
      {/* Main Content */}
      <main>
      <PaymentReconciliationHero />
      <PaymentReconciliationServices />
      <ReconciliationBenefits />
      <PaymentReconciliationCTA />
      <PaymentReconciliationFAQ />
      </main>
      <Footer />
      </ProtectedContentWrapper>
      </>
  );
};

export default PaymentReconciliationPage;