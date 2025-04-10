import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function BlogLayout({ children, title, description }) {
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
