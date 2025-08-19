import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import LeadGenPopup from '@/src/components/LeadGenPopup';

export default function BlogLayout({ children, title, description }) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after 15 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://technovitasolution.com/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/og-image.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://technovitasolution.com/" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="/twitter-image.png" />
      </Head>

      {/* Main Content */}
      <main>
        {children}
         {/* Lead Generation Popup */}
         <LeadGenPopup
          isOpen={showPopup}
          onClose={() => setShowPopup(false)}
          title="🚀 Get Your Free Blinkit Seller Success Guide!"
          subtitle="Learn expert strategies to boost your sales and stand out on Blinkit"
          offerText="Plus: Get a FREE PDF guide on optimizing your Blinkit store for maximum profits"
          phoneNumber="+917042163504"
          guideUrl="https://drive.google.com/file/d/1Y4fW8YkgQA2Bpy4pbUpGTA4SzPJUYmb_/view?usp=sharing"
          guideTitle="Blinkit Seller Success Guide"
          timerDuration={60}
          successMessage="Thank you for your interest! Check your email for the free guide."
        />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-gray-600 text-sm">
            <p>&copy; {new Date().getFullYear()} Technovita Solution. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Global Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');

        :root {
          font-family: 'Inter', sans-serif;
        }

        body {
          @apply bg-gray-50;
        }

        .container {
          @apply max-w-7xl mx-auto px-4;
        }
      `}</style>
    </div>
  );
}
