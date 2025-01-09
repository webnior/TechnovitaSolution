
// pages/services/account-management/[platform].js

import { useRouter } from 'next/router';
import Head from 'next/head';
import { accountManagementPages } from '@/src/data/ servicePages/ accountManagement';
import { Hero, WhyChooseUs ,Features,Services,Process,Reviews,FAQ} from '@/src/components/Account-management';
import ProtectedContentWrapper from '@/src/components/ProtectedContentWrapper';

export default function PlatformServicePage() {
  const router = useRouter();
  
  // Important: Add this console.log to debug
  console.log('Current router query:', router.query);
  
  // Handle the case when the page is still being generated
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { platform } = router.query;
  
  // Important: Add this console.log to debug
  console.log('Looking for platform:', platform);
  console.log('Available pages:', Object.keys(accountManagementPages));
  
  const pageData = platform ? accountManagementPages[platform.toLowerCase()] : null;

  // Handle case when pageData is not found
  if (!pageData) {
    return <div>Page not found</div>;
  }

  const canonicalUrl = `https://technovitasolution.in/services/account-management/${platform}`;

  return (
    <>
      <Head>
        <title>{pageData.metaTitle}</title>
        <meta name="description" content={pageData.metaDescription} />
        <meta name="keywords" content={pageData.metaKeywords} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageData.metaTitle} />
        <meta property="og:description" content={pageData.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
      </Head>
      <ProtectedContentWrapper>
      <div className="w-full bg-white">
        <Hero config={pageData.heroConfig} />
        <WhyChooseUs config={pageData.whyChooseUsConfig} />
        <Features config={pageData.featuresConfig} />
        <Services config={pageData.servicesConfig} />
        <Process config={pageData.processConfig} />
        <Reviews config={pageData.reviewConfig} />
        <FAQ config={pageData.faqConfig} />
      </div>
      </ProtectedContentWrapper>
    </>
  );
}

export async function getStaticPaths() {
  // Important: Add this console.log to debug
  console.log('Generating static paths...');
  
  const paths = Object.keys(accountManagementPages).map(platform => ({
    params: { platform }
  }));
  
  // Important: Add this console.log to debug
  console.log('Generated paths:', paths);

  return {
    paths,
    fallback: true // Keep this true for better development experience
  };
}

export async function getStaticProps({ params }) {
  // Important: Add this console.log to debug
  console.log('getStaticProps called with params:', params);
  
  const platform = params?.platform?.toLowerCase();
  
  if (!platform || !accountManagementPages[platform]) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      pageData: accountManagementPages[platform]
    },
    revalidate: 86400
  };
}