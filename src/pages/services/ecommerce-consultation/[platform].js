// pages/services/ecommerce-consultation/[platform].js

import { useRouter } from 'next/router';
import Head from 'next/head';
import { consultationPages } from '@/src/data/servicePages/consultation';
import { Hero, WhyChooseUs, Features, Services, Process, Reviews, FAQ } from '@/src/components/services';
import ProtectedContentWrapper from '@/src/components/ProtectedContentWrapper';

export default function PlatformServicePage() {
  const router = useRouter();
  
  // Handle the case when the page is still being generated
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { platform } = router.query;
  
  const pageData = platform ? consultationPages[platform.toLowerCase()] : null;

  // Handle case when pageData is not found
  if (!pageData) {
    return <div>Page not found</div>;
  }

  const canonicalUrl = `https://technovitasolution.in/services/ecommerce-consultation/${platform}`;

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
  const paths = Object.keys(consultationPages).map(platform => ({
    params: { platform }
  }));

  return {
    paths,
    fallback: true // Keep this true for better development experience
  };
}

export async function getStaticProps({ params }) {
  const platform = params?.platform?.toLowerCase();
  
  if (!platform || !consultationPages[platform]) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      pageData: consultationPages[platform]
    },
    revalidate: 86400
  };
}
