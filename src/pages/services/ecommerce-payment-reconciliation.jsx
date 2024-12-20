import React from 'react';
import Head from 'next/head';
import PaymentReconciliationHero from '@/src/components/payment-reconciliation/PaymentReconciliationHero';
import PaymentReconciliationServices from '@/src/components/payment-reconciliation/PaymentReconciliationServices';
import ReconciliationBenefits from '@/src/components/payment-reconciliation/ReconciliationBenefits';
import PaymentReconciliationCTA from '@/src/components/payment-reconciliation/PaymentReconciliationCTA';
import PaymentReconciliationFAQ from '@/src/components/payment-reconciliation/PaymentReconciliationFAQ';
import Footer from '@components/Footer';

const PaymentReconciliationPage = () => {
  return (
    <>
    <Head>
      <title>E-commerce Payment Reconciliation Software & Services | Automated Solution</title>
      <meta 
        name="description" 
        content="Transform your e-commerce payment reconciliation process with our automated software. 99.9% accuracy, multi-platform support, and real-time analytics. Start free trial!" 
      />
      <meta 
        name="keywords" 
        content="payment reconciliation services, payment reconciliation, reconciliation of payments, payment reconciliation software, e-commerce payment reconciliation, commerce reconciliation software, automated payment reconciliation" 
      />
    </Head>

      {/* Main Content */}
      <PaymentReconciliationHero />
      <PaymentReconciliationServices />
      <ReconciliationBenefits />
      <PaymentReconciliationCTA />
      <PaymentReconciliationFAQ />
      <Footer />
      </>
  );
};

export default PaymentReconciliationPage;