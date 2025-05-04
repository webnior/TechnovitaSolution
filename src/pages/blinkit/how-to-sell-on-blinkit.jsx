import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import LeadGenPopup from '@/src/components/LeadGenPopup';

export default function HowToSellOnBlinkit() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after 15 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // State to track scroll position for sticky behavior
  const [scrollPosition, setScrollPosition] = useState(0);

  // Handle scroll event to update position
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Blinkit service links
  const blinkitServices = [
    { title: "Warehouse Management System", href: "/services/warehouse-management" },
    { title: "Inventory Management Software", href: "/services/inventory-management" },
    { title: "Vendor Management System", href: "/services/vendor-management" },
    { title: "Order Management System", href: "/services/order-management" },
    { title: "Omnichannel Retail Software", href: "/services/omnichannel-retail" },
    { title: "E-commerce Returns Management", href: "/services/returns-management" },
    { title: "E-commerce Integrations", href: "/services/integrations" },
    { title: "Direct to Consumer (D2C)", href: "/services/d2c" },
  ];

  const faqs = [
    {
      question: "How long does the application review process take?",
      answer:
        "Once you submit your Seller Hub application, our team reviews and verifies your details. Occasionally, it may take longer due to high demand, but we work diligently to complete it as quickly as possible.",
    },
    {
      question: "Can I sell on Blinkit without GST?",
      answer:
        "No, your business needs to be GST-registered to sell on Blinkit. Once you have your GST number, you can start selling.",
    },
    {
      question: "Can I sell on Blinkit without CIN or UDYAM?",
      answer:
        "Currently, you need either a CIN or UDYAM registration for compliance to list your products on Blinkit. We are working to remove this requirement soon.",
    },
    {
      question: "Can I sell on Blinkit without a brand trademark?",
      answer:
        "To maintain quality, Blinkit only lists brands with a trademark certificate or an authorized reseller with a trademark application certificate.",
    },
    {
      question: "What are the steps to start selling on Blinkit?",
      answer:
        "Apply through the Seller Hub, list your products, add your APOB (Additional Place of Business), send your inventory to Blinkit's fulfillment centers, and track your sales.",
    },
    {
      question: "Is the onboarding process different for food product sellers?",
      answer:
        "Yes, food sellers must submit FSSAI licenses for their shipping locations, Blinkit selling locations (dark stores and warehouses), and the manufacturer FSSAI license for their products.",
    },
    {
      question: "Why do I need to share my shipping location in my application?",
      answer:
        "Sharing your stock origin helps Blinkit track product movement for accounting, compliance, and taxation purposes.",
    },
    {
      question: "Can brands and resellers sell on Blinkit?",
      answer:
        "Yes, both brands and resellers can sell on Blinkit. You’ll need to provide a brand trademark and an authorization letter to complete onboarding.",
    },
  ];

  const steps = [
    {
      title: "Visit the Blinkit Seller Portal.",
      description:
        "Go to the official Blinkit Seller Portal where you can start your registration journey. Look for clear call-to-action buttons like “Sell on Blinkit” or “Register Now.”",
      image: "/images/blinkit/seller-registration/step-1.webp",
      alt: "Blinkit Seller Portal",
    },
    {
      title: "Click on the “Sell on Blinkit” Button.",
      description:
        "Once on the Blinkit Seller Onboarding page, click the green-colored “Sell on Blinkit” button to start your seller registration. Refer to the screenshot below for clarity.",
      image: "/images/blinkit/seller-registration/step-2.webp",
      alt: "Sell on Blinkit Button",
    },
    {
      title: "Enter Email Address and Verify OTP.",
      description:
        "Enter your active email address for Blinkit Seller Sign-Up and click on “Send OTP.” Check your inbox and input the received OTP to continue registration.",
      image: "/images/blinkit/seller-registration/step-3.webp",
      alt: "Enter Email and OTP for Blinkit Seller",
    },
    {
      title: "Fill in Your Business Details.",
      description:
        "After verifying your email, fill out your business information. Select your selling category, online selling platforms (Instagram, YouTube, etc.), your name, designation, and mobile number. Enter the correct number as you will receive another OTP.",
      image: "/images/blinkit/seller-registration/step-4.webp",
      alt: "Fill Business Details for Blinkit",
    },
    {
      title: "Verify Mobile Number via OTP.",
      description:
        "Once your mobile number is added, an OTP will be sent to verify it. Enter the OTP and click “Save & Continue” to move forward in the Blinkit Seller Onboarding process.",
      image: "/images/blinkit/seller-registration/step-5.webp",
      alt: "Verify Mobile Number Blinkit",
    },
    {
      title: "Enter Your GST Details.",
      description:
        "Provide your 15-digit GSTIN (Goods and Services Tax Identification Number). If you don't have a GST certificate yet, you can apply for one easily online.",
      image: "/images/blinkit/seller-registration/step-6.webp",
      alt: "Enter GST Details Blinkit Seller",
    },
    {
      title: "Verify GST Information.",
      description:
        "After entering your GST number, Blinkit will automatically fetch your registered business information. Click “Verify” to confirm that the GST number belongs to you.",
      image: "/images/blinkit/seller-registration/step-7.webp",
      alt: "Verify GST Number Blinkit Seller",
    },
    {
      title: "Fill in Brand Details.",
      description:
        "Next, enter all the brand-related information including brand name, description, and any other details Blinkit asks. This helps Blinkit list your products properly on their platform.",
      image: "/images/blinkit/seller-registration/step-8.webp",
      alt: "Fill Brand Details Blinkit Seller",
    },
    {
      title: "Add Your Bank Account Information.",
      description:
        "Provide your business bank account details to receive payouts from Blinkit sales. Ensure all information is accurate to avoid future payment issues.",
      image: "/images/blinkit-bank-details.png",
      alt: "Enter Bank Details Blinkit Seller",
    },
    {
      title: "Set Your Shipping Locations.",
      description:
        "Although Blinkit doesn’t ask for a specific shipping hub, you should be ready to supply products from locations within Blinkit's service zones to enable faster deliveries.",
      image: "/images/blinkit-shipping-location.png",
      alt: "Shipping Location for Blinkit Seller",
    },
    {
      title: "Upload Your Digital Signature.",
      description:
        "Upload a digital signature to complete official documentation. If you don't have one, consult your Chartered Accountant (CA) to create a digital signature easily.",
      image: "/images/blinkit-digital-signature.png",
      alt: "Digital Signature Upload Blinkit Seller",
    },
    {
      title: "Final Verification and Submit Application.",
      description:
        "Finally, review all entered information carefully. After confirming everything is correct, submit your application for verification. Blinkit's team will review your onboarding request, and you'll receive a confirmation email shortly after approval!",
      image: "/images/blinkit-final-submit.png",
      alt: "Submit Application for Blinkit Seller",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Complete Guide to Sell on Blinkit | Step-by-Step Seller Hub Tutorial</title>
        <meta name="description" content="Learn how to sell on Blinkit with this step-by-step guide. Covers registration, commissions, and everything you need to start selling successfully on Blinkit." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph SEO */}
        <meta property="og:title" content="Guide to Sell on Blinkit" />
        <meta property="og:description" content="Step-by-step guide for sellers to start and grow their business on Blinkit." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://yourdomain.com/blinkit/how-to-sell-on-blinkit" />
        <meta property="og:image" content="https://yourdomain.com/images/blinkit-guide-featured.png" />
        <meta property="og:image:alt" content="Blinkit Seller Guide Featured Image" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {/* Twitter SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Guide to Sell on Blinkit" />
        <meta name="twitter:description" content="Step-by-step guide for sellers to start and grow their business on Blinkit." />
        <meta name="twitter:image" content="https://yourdomain.com/images/blinkit-guide-featured.png" />
        <meta name="twitter:image:alt" content="Blinkit Seller Guide Featured Image" />
        {/* Additional SEO metadata */}
        <meta name="keywords" content="Blinkit seller, Blinkit marketplace, sell on Blinkit, Blinkit registration, Blinkit commission, quick commerce" />
        <meta name="author" content="Your Brand Name" />
        <link rel="canonical" href="https://yourdomain.com/blinkit/how-to-sell-on-blinkit" />
        {/* Structured data for article */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Complete Guide to Sell on Blinkit",
              "description": "Learn how to sell on Blinkit with this step-by-step guide. Covers registration, commissions, and everything you need to start selling successfully on Blinkit.",
              "image": {
                "@type": "ImageObject",
                "url": "https://yourdomain.com/images/blinkit-guide-featured.png",
                "width": "1200",
                "height": "630"
              },
              "author": {
                "@type": "Organization",
                "name": "Your Brand Name"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Your Brand Name",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://yourdomain.com/logo.png",
                  "width": "112",
                  "height": "112"
                }
              },
              "datePublished": "2025-04-26",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://yourdomain.com/blinkit/how-to-sell-on-blinkit"
              }
            }
          `}
        </script>
      </Head>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="lg:flex lg:gap-8">
          {/* Main content column */}
          <main className="lg:flex-grow">
            {/* Title Section with Featured Image */}
            <section className="py-6 md:py-10">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                How to Sell on Blinkit in 2025: Complete Seller Guide (Registration, APOB, Listings, Ads & More)
              </h1>
              {/* Featured Image */}
              <div className="w-full overflow-hidden rounded-lg shadow-md mt-4">
                <Image
                  src="/images/blinkit/how-to-sell-on-blinkit.webp"
                  alt="Blinkit Seller Login Page"
                  width={1800}
                  height={600}
                  className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
              <p className="text-lg text-gray-600 mb-6">
                If you're exploring <strong>how to sell on Blinkit</strong> or even wondering <strong>how to become a seller on Blinkit</strong>, you’re in the right place.
                With the quick-commerce boom and Blinkit's dominance in 10-minute grocery delivery, the opportunity to scale your business is massive.
                But knowing <strong>how to sell products on Blinkit</strong> isn’t just about uploading a product—it requires a full understanding of Blinkit’s seller ecosystem.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                In this comprehensive Blinkit Seller guide, I’ll walk you through <strong>everything you need to know to start and succeed as a Blinkit seller</strong>.
                Whether you’re a D2C brand, local distributor, or wholesaler, this blog will serve as your go-to resource—
                <em>crafted from over a decade of industry expertise in e-commerce operations, seller onboarding, and performance marketing.</em>
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We’ll walk you through each part of the Blinkit journey, from the initial registration to advanced scaling strategies.
                If you’re curious about <strong>how to sell product on Blinkit</strong> or <strong>how to list your products on Blinkit</strong> to maximize visibility, we’ve got you covered.
                This resource is designed to help you streamline your operations, increase revenue, and dominate in your niche on Blinkit.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Here’s exactly what you’ll learn:
                <ul className="list-disc list-inside mt-2">
                  <li><strong>Blinkit Seller Registration:</strong> Step-by-step guide on <strong>how to sell on Blinkit</strong> with all required documents.</li>
                  <li><strong>Additional Place of Business (APOB):</strong> Setup process for selling in multiple Blinkit zones.</li>
                  <li><strong>Product Listings:</strong> Know <strong>how to list product on Blinkit</strong> or even avoid mistakes while learning <strong>how to list product on Blinkist</strong> (often confused).</li>
                  <li><strong>Blinkit Ads:</strong> Use platform-specific ads to boost visibility and sales.</li>
                  <li><strong>Commissions:</strong> Learn what Blinkit charges per product and plan your margins accordingly.</li>
                  <li><strong>Inventory Setup:</strong> Send your products to Blinkit warehouses accurately and efficiently.</li>
                  <li><strong>Payment Cycle:</strong> Understand how and when Blinkit pays you for completed orders.</li>
                  <li><strong>Growth Tactics:</strong> Pro-level strategies to scale and succeed faster on Blinkit.</li>
                  <li><strong>FAQs:</strong> Including key questions like <strong>how to sell products on Blinkit without GST?</strong></li>
                </ul>
              </p>
              <p className="text-lg text-gray-600 mb-6">
                This is not just a guide—it’s your blueprint for success.
                Whether you’re just starting and searching for <strong>how to sell in Blinkit</strong> or you’re aiming to refine your existing strategy,
                this post will help you sell smarter and grow faster. Let’s dive in and explore <strong>how to sell products on Blinkit</strong> from A to Z—no guesswork, no fluff.
              </p>

            </section>
            {/* Table of Contents - Now in the main content area */}
            <section className="mb-8 p-6 bg-gray-50 rounded-lg" id="table-of-contents">
              <h2 className="font-bold text-xl sm:text-2xl mb-4 text-gray-900">Table of Contents</h2>
              <div className="grid sm:grid-cols-2 gap-4 text-base sm:text-lg">
                <div className="flex flex-col space-y-3">
                  <a href="#registration" className="flex items-center text-gray-700 hover:text-teal-700 hover:underline">
                    <span className="bg-yellow-300 rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm mr-2">1</span>
                    Blinkit Seller Registration
                  </a>
                  <a href="#apob-setup" className="flex items-center text-gray-700 hover:text-teal-700 hover:underline">
                    <span className="bg-yellow-300 rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm mr-2">2</span>
                    Additional Place of Business (APOB) Setup
                  </a>
                  <a href="#product-listing-guide" className="flex items-center text-gray-700 hover:text-teal-700 hover:underline">
                    <span className="bg-yellow-300 rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm mr-2">3</span>
                    Blinkit Product Listing
                  </a>
                  <a href="#ads-guide" className="flex items-center text-gray-700 hover:text-teal-700 hover:underline">
                    <span className="bg-yellow-300 rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm mr-2">4</span>
                    Blinkit Ads Setup
                  </a>
                  <a href="#commission-structure" className="flex items-center text-gray-700 hover:text-teal-700 hover:underline">
                    <span className="bg-yellow-300 rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm mr-2">5</span>
                    Commission Calculation
                  </a>
                </div>
                <div className="flex flex-col space-y-3">
                  <a href="#inventory-dispatch" className="flex items-center text-gray-700 hover:text-teal-700 hover:underline">
                    <span className="bg-yellow-300 rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm mr-2">6</span>
                    Inventory Dispatch to Blinkit
                  </a>
                  <a href="#payment-cycle" className="flex items-center text-gray-700 hover:text-teal-700 hover:underline">
                    <span className="bg-yellow-300 rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm mr-2">7</span>
                    Blinkit Payment Cycle
                  </a>
                  <a href="#growth-strategy" className="flex items-center text-gray-700 hover:text-teal-700 hover:underline">
                    <span className="bg-yellow-300 rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm mr-2">8</span>
                    Growth Strategy for Blinkit Sellers
                  </a>
                  <a href="#faq" className="flex items-center text-gray-700 hover:text-teal-700 hover:underline">
                    <span className="bg-yellow-300 rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm mr-2">9</span>
                    FAQs on Selling on Blinkit
                  </a>
                </div>
              </div>
            </section>

            {/* Step 1 - Blinkit Seller Registration */}
            <section className="mb-10" id="registration">
              <header className="flex items-center gap-3 mb-4">
                <span className="bg-yellow-300 rounded-full w-9 h-9 flex items-center justify-center font-bold text-lg">1</span>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-800 leading-tight">Blinkit Seller Registration Guide</h1>
              </header>

              <p className="text-gray-700 mb-6">
                Planning to sell on Blinkit? This detailed guide covers everything you need to complete your Blinkit Seller Registration successfully — from required documents to step-by-step onboarding instructions.
              </p>

              {/* Documents Required for Blinkit Seller Registration */}
              <section className="mb-10">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">📄 Documents Required to Start Selling on Blinkit in 2025</h2>
                <p className="text-gray-600 mb-6">
                  Before you start the Blinkit seller registration process, gather the following essential documents. Each of these plays a vital role in verifying your identity, brand, and business operations for approval on Blinkit’s seller platform.
                </p>
                <ul className="list-disc list-inside space-y-5 text-gray-700">
                  <li>
                    <span className="font-semibold">Mobile Number and Email Address:</span> Used for OTP verification and communication during the onboarding process.
                  </li>
                  <li>
                    <span className="font-semibold">Udyam Registration or Company Incorporation (CIN):</span> Business identification proof required for verification.
                  </li>
                  <li>
                    <span className="font-semibold">GST Certificate:</span> Mandatory to sell products legally on Blinkit and comply with taxation laws.
                  </li>
                  <li>
                    <span className="font-semibold">Trademark Certificate or Application:</span> Required if you are selling branded products to verify brand ownership.
                  </li>
                  <li>
                    <span className="font-semibold">PAN Card:</span> Needed for tax compliance and identification of the business entity or individual.
                  </li>
                  <li>
                    <span className="font-semibold">Company Logo:</span> Brand logo to display with your products and improve brand recognition on Blinkit.
                  </li>
                  <li>
                    <span className="font-semibold">Brand Authorization Letter to Blinkit:</span> Required if you are an authorized reseller; use the Blinkit template for proper format.
                  </li>
                  <li>
                    <span className="font-semibold">Filled BAL (Brand Authorization Letter):</span> Blinkit's specific BAL document must be signed and submitted as part of brand verification.
                  </li>
                  <li>
                    <span className="font-semibold">Bank Details or Cancelled Cheque:</span> Bank account proof required for payments and payouts setup.
                  </li>
                  <li>
                    <span className="font-semibold">Signed Declaration on White Paper:</span> A self-declaration letter, signed and scanned, confirming authenticity of documents.
                  </li>
                  <li>
                    <span className="font-semibold">Social Media Handles, Website Links, Marketplace Product Links:</span> Provide URLs to establish your brand’s online presence.
                  </li>
                  <li>
                    <span className="font-semibold">Sales Figures (Online/Offline):</span> Details of your previous sales (if any) to help Blinkit assess your selling capacity.
                  </li>
                </ul>
              </section>

              {/* Step-by-Step Registration Process */}
              <section className="mb-16">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-10">
                  📝 Complete Guide to Blinkit Seller Registration Process
                </h2>

                <div className="space-y-12 max-w-4xl mx-auto">
                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                      1. Visit the Blinkit Seller Portal.
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Go to the official Blinkit Seller Portal where you can start your registration journey. Look for clear call-to-action buttons like "Sell on Blinkit" or "Register Now."
                    </p>
                    <div className="w-full overflow-hidden rounded-lg shadow-md mt-4">
                      <Image
                        src="/images/blinkit/seller-registration/step-1.webp"
                        alt="Blinkit Seller Portal"
                        width={1600}
                        height={600}
                        loading="lazy"
                        className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                      2. Click on the "Sell on Blinkit" Button.
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Once on the Blinkit Seller Onboarding page, click the green-colored "Sell on Blinkit" button to start your seller registration. Refer to the screenshot below for clarity.
                    </p>
                    <div className="w-full overflow-hidden rounded-lg shadow-md mt-4">
                      <Image
                        src="/images/blinkit/seller-registration/step-2.webp"
                        alt="Sell on Blinkit Button"
                        width={1600}
                        height={600}
                        loading="lazy"
                        className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                      3. Enter Email Address and Verify OTP.
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Enter your active email address for Blinkit Seller Sign-Up and click on "Send OTP." Check your inbox and input the received OTP to continue registration.
                    </p>
                    <div className="w-full overflow-hidden rounded-lg shadow-md mt-4">
                      <Image
                        src="/images/blinkit/seller-registration/step-3.webp"
                        alt="Enter Email and OTP for Blinkit Seller"
                        width={1600}
                        height={600}
                        loading="lazy"
                        className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                      4. Fill in Your Business Details.
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      After verifying your email, fill out your business information. Select your selling category, online selling platforms (Instagram, YouTube, etc.), your name, designation, and mobile number. Enter the correct number as you will receive another OTP.
                    </p>
                    <div className="w-full overflow-hidden rounded-lg shadow-md mt-4">
                      <Image
                        src="/images/blinkit/seller-registration/step-4.webp"
                        alt="Fill Business Details for Blinkit"
                        width={1600}
                        height={600}
                        loading="lazy"
                        className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                      5. Verify Mobile Number via OTP.
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Once your mobile number is added, an OTP will be sent to verify it. Enter the OTP and click "Save & Continue" to move forward in the Blinkit Seller Onboarding process.
                    </p>
                    <div className="w-full overflow-hidden rounded-lg shadow-md mt-4">
                      <Image
                        src="/images/blinkit/seller-registration/step-5.webp"
                        alt="Verify Mobile Number Blinkit"
                        width={1600}
                        height={600}
                        loading="lazy"
                        className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                      6. Enter Your GST Details.
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Provide your 15-digit GSTIN (Goods and Services Tax Identification Number). If you don't have a GST certificate yet, you can apply for one easily online.
                    </p>
                    <div className="w-full overflow-hidden rounded-lg shadow-md mt-4">
                      <Image
                        src="/images/blinkit/seller-registration/step-6.webp"
                        alt="Enter GST Details Blinkit Seller"
                        width={1600}
                        height={600}
                        loading="lazy"
                        className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                      7. Verify GST Information.
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      After entering your GST number, Blinkit will automatically fetch your registered business information. Click "Verify" to confirm that the GST number belongs to you.
                    </p>
                    <div className="w-full overflow-hidden rounded-lg shadow-md mt-4">
                      <Image
                        src="/images/blinkit/seller-registration/step-7.webp"
                        alt="Verify GST Number Blinkit Seller"
                        width={1600}
                        height={600}
                        loading="lazy"
                        className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                      8. Fill in Brand Details.
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Next, enter all the brand-related information including brand name, description, and any other details Blinkit asks. This helps Blinkit list your products properly on their platform.
                    </p>
                    <div className="w-full overflow-hidden rounded-lg shadow-md mt-4">
                      <Image
                        src="/images/blinkit/seller-registration/step-8.webp"
                        alt="Fill Brand Details Blinkit Seller"
                        width={1600}
                        height={600}
                        loading="lazy"
                        className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                      9. Add Your Bank Account Information.
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Provide your business bank account details to receive payouts from Blinkit sales. Ensure all information is accurate to avoid future payment issues.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                      10. Set Your Shipping Locations.
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Although Blinkit doesn't ask for a specific shipping hub, you should be ready to supply products from locations within Blinkit's service zones to enable faster deliveries.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                      11. Upload Your Digital Signature.
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Upload a digital signature to complete official documentation. If you don't have one, consult your Chartered Accountant (CA) to create a digital signature easily.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                      12. Final Verification and Submit Application.
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Finally, review all entered information carefully. After confirming everything is correct, submit your application for verification. Blinkit's team will review your onboarding request, and you'll receive a confirmation email shortly after approval!
                    </p>
                  </div>
                </div>
              </section>
            </section>

            {/* Step 2  applying for apob */}
            <section className="mb-16" id="apob-setup">
              {/* Heading */}
              <div className="flex items-center gap-3">
                <span className="bg-yellow-300 rounded-full w-9 h-9 flex items-center justify-center font-bold text-lg">2</span>
                <h2 className="m-0 text-xl font-semibold text-gray-800">
                  Step-by-Step Guide to Apply for APOB in GST & Link It on Blinkit Platform
                </h2>
              </div>
              <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                Dear sellers, before you can start selling on Blinkit, you need to add their warehouse as an Additional Place of Business (APOB) in your GST profile. This comprehensive guide will walk you through both the GST portal process and the Blinkit platform linking process with detailed steps and visual guidance. 🚀
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded-r">
                <h3 className="text-lg font-medium text-yellow-800">Important Note Before You Start</h3>
                <p className="text-yellow-700">
                  You must first apply for APOB on the GST portal to receive an ARN (Application Reference Number). This ARN is mandatory to proceed with the Blinkit application process. We'll guide you through both steps below.
                </p>
              </div>

              {/* Part 1: GST Portal Process */}
              <div className="space-y-4 max-w-4xl mx-auto mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 flex items-center">
                  <span className="bg-blue-500 text-white rounded-full w-7 h-7 flex items-center justify-center mr-2 text-sm">A</span>
                  Part 1: Apply for APOB on the GST Portal (To Get ARN)
                </h3>
              </div>

              {/* Step 1 */}
              <div className="space-y-4 max-w-4xl mx-auto mb-12">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  1. Login to GST Portal
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Visit <strong>https://www.gst.gov.in</strong> and log in using your Username and Password to access your GST dashboard.
                </p>
                <div className="w-full overflow-hidden rounded-lg shadow-md mt-4">
                  <Image
                    src="/images/blinkit/apob/step-1.webp"
                    alt="GST Portal Login Page"
                    width={1600}
                    height={600}
                    loading="lazy"
                    className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              </div>

              {/* Step 2 */}
              <div className="space-y-4 max-w-4xl mx-auto mb-12">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  2. Navigate to 'Amendment of Registration'
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Go to <strong>Services → Registration → Amendment of Registration (Core Fields)</strong>. This section allows you to update key information like business addresses.
                </p>
                <div className="w-full overflow-hidden rounded-lg shadow-md mt-4">
                  <Image
                    src="/images/blinkit/apob/step-2.webp"
                    alt="Navigate to Amendment of Registration"
                    width={1600}
                    height={600}
                    loading="lazy"
                    className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              </div>

              {/* Step 3 */}
              <div className="space-y-4 max-w-4xl mx-auto mb-12">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  3. Select 'Additional Place of Business'
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Click on the <strong>'Additional Place of Business'</strong> tab. You'll see your current list of places; click <strong>'Add New'</strong> to add the Blinkit warehouse.
                </p>
                <div className="w-full overflow-hidden rounded-lg shadow-md mt-4">
                  <Image
                    src="/images/blinkit/apob/step-3.webp"
                    alt="Select Additional Place of Business"
                    width={1600}
                    height={600}
                    loading="lazy"
                    className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              </div>

              {/* Step 4 */}
              <div className="space-y-4 max-w-4xl mx-auto mb-12">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  4. Search for Blinkit Warehouse Address
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Use the map or search bar to find your respective Blinkit warehouse. For example, search "Mumbai Blinkit" or "Delhi Blinkit" depending on your location. Select it and ensure all address fields auto-fill or are entered correctly: PIN code, State, District, City, Road/Street, etc.
                </p>
                <div className="w-full overflow-hidden rounded-lg shadow-md mt-4">
                  <Image
                    src="/images/blinkit/apob/step-4.webp"
                    alt="Search for Blinkit Warehouse Address"
                    width={1600}
                    height={600}
                    loading="lazy"
                    className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              </div>

              {/* Step 5 */}
              <div className="space-y-4 max-w-4xl mx-auto mb-12">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  5. Enter Contact Details & Select Nature of Possession
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Enter Blinkit warehouse's Phone number and Email ID (provided by Blinkit). Then choose <strong>'Rented'</strong> under the Nature of Possession of Premises.
                </p>
                <div className="w-full overflow-hidden rounded-lg shadow-md mt-4">
                  <Image
                    src="/images/blinkit/apob/step-5.webp"
                    alt="Enter Contact Details and Nature of Possession"
                    width={1600}
                    height={600}
                    loading="lazy"
                    className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              </div>

              {/* Step 6 */}
              <div className="space-y-4 max-w-4xl mx-auto mb-12">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  6. Upload Required Documents
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Upload a merged PDF file containing the Blinkit warehouse's Electricity Bill and Warehouse Agreement (both available from Blinkit portal). Make sure file size and format meet the GST portal's requirements.
                </p>
                <div className="w-full overflow-hidden rounded-lg shadow-md mt-4">
                  <Image
                    src="/images/blinkit/apob/step-6.webp"
                    alt="Upload Required Documents"
                    width={1600}
                    height={600}
                    loading="lazy"
                    className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              </div>

              {/* Step 7 */}
              <div className="space-y-4 max-w-4xl mx-auto mb-12">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  7. Choose Nature of Business Activity & Submit
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Select <strong>'Warehouse'</strong> as the business type for that location. In the remarks box, write: "I want to sell products on Blinkit, so I want to add APOB with GST." Click 'Save and Continue', tick the declaration box, and then click 'Submit with EVC'.
                </p>
                <div className="w-full overflow-hidden rounded-lg shadow-md mt-4">
                  <Image
                    src="/images/blinkit/apob/step-7.webp"
                    alt="Choose Nature of Business Activity and Submit"
                    width={1600}
                    height={600}
                    loading="lazy"
                    className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              </div>

              {/* Step 8 */}
              <div className="space-y-4 max-w-4xl mx-auto mb-12">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  8. Receive ARN (Application Reference Number)
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Within 30–60 minutes, you will receive an ARN on your registered email. This ARN proves that your APOB application is under review with the GST department. <strong>Important:</strong> Note down this ARN as you'll need it for the Blinkit portal in the next steps.
                </p>
                <div className="w-full overflow-hidden rounded-lg shadow-md mt-4">
                  <Image
                    src="/images/blinkit/apob/step-8.webp"
                    alt="Receive ARN Number"
                    width={1600}
                    height={600}
                    loading="lazy"
                    className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              </div>

              {/* Part 2: Blinkit Portal Process */}
              <div className="space-y-4 max-w-4xl mx-auto mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 flex items-center">
                  <span className="bg-green-500 text-white rounded-full w-7 h-7 flex items-center justify-center mr-2 text-sm">B</span>
                  Part 2: Link the ARN and Apply on Blinkit Seller Portal
                </h3>
              </div>

              {/* Step 9 */}
              <div className="space-y-4 max-w-4xl mx-auto mb-12">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  9. Login to Blinkit Seller Panel
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Go to the Blinkit seller portal and log into your seller account. Ensure you have already completed your basic seller registration before proceeding.
                </p>
                <div className="w-full overflow-hidden rounded-lg shadow-md mt-4">
                  <Image
                    src="/images/blinkit/apob/step-9.webp"
                    alt="Login to Blinkit Seller Panel"
                    width={1600}
                    height={600}
                    loading="lazy"
                    className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              </div>

              {/* Step 10 */}
              <div className="space-y-4 max-w-4xl mx-auto mb-12">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  10. Navigate to APOB Application Section
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Go to the <strong>'Apply for APOB'</strong> section in your dashboard. You'll be asked to enter the ARN Number you received from GST in the previous step.
                </p>
                <div className="w-full overflow-hidden rounded-lg shadow-md mt-4">
                  <Image
                    src="/images/blinkit/apob/step-10.webp"
                    alt="Navigate to APOB Application Section"
                    width={1600}
                    height={600}
                    loading="lazy"
                    className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              </div>

              {/* Step 11 */}
              <div className="space-y-4 max-w-4xl mx-auto mb-12">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  11. Download Required Documents
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Select the warehouse location you are applying for and download the relevant documents: Electricity Bill and Warehouse Agreement. These are the same documents you used during the GST APOB application process.
                </p>
                <div className="w-full overflow-hidden rounded-lg shadow-md mt-4">
                  <Image
                    src="/images/blinkit/apob/step-11.webp"
                    alt="Download Required Documents from Blinkit"
                    width={1600}
                    height={600}
                    loading="lazy"
                    className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              </div>

              {/* Step 12 */}
              <div className="space-y-4 max-w-4xl mx-auto mb-12">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  12. Upload Merged PDF in Blinkit Portal
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Merge the Electricity Bill and Agreement into a single PDF file if you haven't already. Upload this document in the APOB application section of the Blinkit portal.
                </p>
                <div className="w-full overflow-hidden rounded-lg shadow-md mt-4">
                  <Image
                    src="/images/blinkit/apob/step-12.webp"
                    alt="Upload Merged PDF in Blinkit Portal"
                    width={1600}
                    height={600}
                    loading="lazy"
                    className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              </div>

              {/* Step 13 */}
              <div className="space-y-4 max-w-4xl mx-auto">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  13. Submit and Wait for Approval
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Tick the box: "I confirm the ARN is valid for all premises." Accept the terms and click 'Submit'. Your APOB request will show as 'In Progress', and Blinkit will verify and approve the details within 24–48 hours. Once approved, your listing on Blinkit will go live, and you can start sending products to the Blinkit dark store (warehouse) for fulfillment.
                </p>
                <div className="w-full overflow-hidden rounded-lg shadow-md mt-4">
                  <Image
                    src="/images/blinkit/apob/step-13.webp"
                    alt="Submit and Wait for Approval"
                    width={1600}
                    height={600}
                    loading="lazy"
                    className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              </div>

              {/* Success Message */}
              <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-8 rounded-r">
                <h3 className="text-lg font-medium text-green-800">Congratulations!</h3>
                <p className="text-green-700">
                  You've successfully completed the APOB setup process. Once approved, you'll be ready to list your products on Blinkit and start selling!
                </p>
              </div>
            </section>

            {/* Step 3  Blinkit Product Listing*/}
            <section className="mb-16" id="product-listing-guide">

              {/* Heading */}
              <div className="flex items-center gap-3">
                <span className="bg-yellow-300 rounded-full w-9 h-9 flex items-center justify-center font-bold text-lg">
                  3
                </span>
                <h2 className="m-0 text-xl font-semibold text-gray-800">
                  Step-by-Step Guide to Listing Your Products on Blinkit
                </h2>
              </div>
              <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                Dear sellers, congratulations on successfully completing your Blinkit seller registration and APOB verification! 🚀
                Now, it’s time to learn how to list your products professionally on Blinkit to maximize your visibility and sales.
                Follow this detailed step-by-step guide along with real screenshots to ensure your listings are optimized, compliant, and conversion-friendly.
              </p>

              {/* Step 1 */}
              <div className="space-y-4 max-w-4xl mx-auto mb-12">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  1. Log in to Your Blinkit Seller Dashboard
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Visit <strong>seller.blinkit.com</strong> and log in using your registered email ID and password.
                  Make sure your KYC and seller profile are completed for full dashboard access.
                  <br /><br />
                  <strong>Pro Tip:</strong> Bookmark the dashboard page for faster access daily.
                </p>
                <div className="w-full overflow-hidden rounded-lg shadow-md mt-4">
                  <Image
                    src="/images/blinkit/product-listing/step-1.webp"
                    alt="Blinkit Seller Login Page"
                    width={1600}
                    height={600}
                    loading="lazy"
                    className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              </div>

              {/* Step 2 */}
              <div className="space-y-4 max-w-4xl mx-auto mb-12">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  2. Navigate to "How to Sell" Section
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  After logging in, locate the <strong>“How to Sell”</strong> tab on the left-hand side menu bar.
                  Here you will find useful guides and any listed products under your account.
                  <br /><br />
                  <strong>SEO Tip:</strong> Familiarize yourself with Blinkit’s policies early to avoid listing rejections.
                </p>
                <div className="w-full overflow-hidden rounded-lg shadow-md mt-4">
                  <Image
                    src="/images/blinkit/product-listing/step-2.webp"
                    alt="How to Sell Section on Blinkit Dashboard"
                    width={1600}
                    height={600}
                    loading="lazy"
                    className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              </div>

              {/* Step 3 */}
              <div className="space-y-4 max-w-4xl mx-auto mb-12">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  3. Click "Add a Product" Button
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  On the product listing page, click the green <strong>“Add a Product”</strong> button on the top-right corner.
                  <br /><br />
                  <strong>Pro Tip:</strong> Review your existing products before adding new ones for consistency.
                </p>
                <div className="w-full overflow-hidden rounded-lg shadow-md mt-4">
                  <Image
                    src="/images/blinkit/product-listing/step-3.webp"
                    alt="Add a Product on Blinkit"
                    width={1600}
                    height={600}
                    loading="lazy"
                    className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              </div>

              {/* Step 4 */}
              <div className="space-y-4 max-w-4xl mx-auto mb-12">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  4. Fill Basic Product Details
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Enter essential product information such as:
                </p>
                <ul className="list-disc ml-6 text-sm sm:text-base text-gray-700 space-y-1">
                  <li><strong>Brand Name</strong></li>
                  <li><strong>Product Name</strong></li>
                  <li><strong>UPC / GIN</strong> (Unique barcode-based product code)</li>
                  <li><strong>Unit Value and Unit Type</strong> (e.g., 500g, 1L)</li>
                  <li><strong>Type</strong> (Food/Non-food)</li>
                  <li><strong>Measurements</strong> (with and without packaging)</li>
                </ul>
                <div className="w-full overflow-hidden rounded-lg shadow-md mt-4">
                  <Image
                    src="/images/blinkit/product-listing/step-4.webp"
                    alt="Filling Product Basic Details on Blinkit"
                    width={1600}
                    height={600}
                    loading="lazy"
                    className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              </div>

              {/* Step 5 */}
              <div className="space-y-4 max-w-4xl mx-auto mb-12">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  5. Choose the Product Category
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Search and select the correct primary category that matches your product type.
                  Accurate categorization ensures better discoverability on Blinkit’s platform.
                  <br /><br />
                  <strong>SEO Tip:</strong> Always categorize as narrowly as possible for stronger keyword matching.
                </p>
                <div className="w-full overflow-hidden rounded-lg shadow-md mt-4">
                  <Image
                    src="/images/blinkit/product-listing/step-5.webp"
                    alt="Choosing Product Category on Blinkit"
                    width={1600}
                    height={600}
                    loading="lazy"
                    className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              </div>

              {/* Step 6 */}
              <div className="space-y-4 max-w-4xl mx-auto mb-12">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  6. Select the Business Category
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Select your business type from available options, such as FMCG, electronics, apparel, etc.
                  It helps in proper tax mapping and backend classification.
                </p>
                <div className="w-full overflow-hidden rounded-lg shadow-md mt-4">
                  <Image
                    src="/images/blinkit/product-listing/step-6.webp"
                    alt="Selecting Business Category on Blinkit"
                    width={1600}
                    height={600}
                    loading="lazy"
                    className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              </div>

              {/* Step 7 */}
              <div className="space-y-4 max-w-4xl mx-auto mb-12">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  7. Fill Category-Specific Attributes
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Enter specifications based on product type — such as battery life for electronics, shelf life for groceries, etc.
                  Filling attributes accurately improves product ranking on search pages.
                </p>
                <div className="w-full overflow-hidden rounded-lg shadow-md mt-4">
                  <Image
                    src="/images/blinkit/product-listing/step-7.webp"
                    alt="Filling Category Specific Attributes on Blinkit"
                    width={1600}
                    height={600}
                    loading="lazy"
                    className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              </div>

              {/* Step 8 */}
              <div className="space-y-4 max-w-4xl mx-auto mb-12">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  8. Add Pricing and Tax Details
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Fill in MRP, selling price, landing price, and taxation details such as HSN code and IGST.
                  Blinkit auto-calculates SGST and CGST based on IGST values you enter.
                </p>
                <div className="w-full overflow-hidden rounded-lg shadow-md mt-4">
                  <Image
                    src="/images/blinkit/product-listing/step-8.webp"
                    alt="Adding Pricing and Tax Information on Blinkit"
                    width={1600}
                    height={600}
                    loading="lazy"
                    className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              </div>

              {/* Step 9 */}
              <div className="space-y-4 max-w-4xl mx-auto mb-12">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  9. Upload Product Images and Videos
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Upload high-resolution product images (minimum 1000x1000px) and promotional videos if available.
                  Visual content greatly impacts conversion rates on Blinkit!
                </p>
                <div className="w-full overflow-hidden rounded-lg shadow-md mt-4">
                  <Image
                    src="/images/blinkit/product-listing/step-9.webp"
                    alt="Uploading Images and Videos on Blinkit"
                    width={1600}
                    height={600}
                    loading="lazy"
                    className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              </div>

              {/* Step 10 */}
              <div className="space-y-4 max-w-4xl mx-auto">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  10. Review and Submit
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Double-check all your product details, images, pricing, and compliance information.
                  Once verified, hit the <strong>Submit</strong> button to send your product live for Blinkit's quality checks.
                </p>
                <div className="w-full overflow-hidden rounded-lg shadow-md mt-4">
                  <Image
                    src="/images/blinkit/product-listing/step-10.webp"
                    alt="Final Review and Submit Product on Blinkit"
                    width={1600}
                    height={600}
                    loading="lazy"
                    className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              </div>
            </section>

            {/* Step 4 ads setup  */}
            <section className="mb-16" id="ads-guide">
              {/* Heading */}
              <div className="flex items-center gap-3">
                <span className="bg-yellow-300 rounded-full w-9 h-9 flex items-center justify-center font-bold text-lg">
                  4
                </span>
                <h2 className="m-0 text-xl font-semibold text-gray-800">
                  Blinkit Ads Setup
                </h2>
              </div>
              <div className="w-full overflow-hidden rounded-lg shadow-md mt-8">
                <Image
                  src="/images/blinkit/ads/how-to-setup-blinkit-ads.webp"
                  alt="Setting Up Ad Campaign on Blinkit"
                  width={1600}
                  height={600}
                  loading="lazy"
                  className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
              <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                Now that your products are listed, it's time to boost their visibility and sales! 🚀
                Dive into Blinkit's powerful advertising system to increase product rankings, reach more customers, and drive conversions.
                Let's explore the different ad formats available and how to set them up for maximum impact.
              </p>

              {/* Ad Type 1 */}
              <div className="space-y-4 max-w-4xl mx-auto mb-12">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  1. Product Booster Ads
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Product Booster Ads help you promote individual products to highly relevant customers.
                  Similar to Google Shopping ads, these appear within product categories and are designed to be
                  non-intrusive yet highly targeted.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4 rounded-r">
                  <p className="text-sm font-medium text-gray-700">
                    <strong>How they work:</strong> You can run these campaigns using either keyword-based or category-based targeting.
                    For example, if you're promoting "Masoor Dal," you can bid on related keywords like "Dal," "Masoor Dal," or target
                    the entire "Pulses" category.
                  </p>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <strong>Smart Feature:</strong> Blinkit's algorithm allows you to group products together. If your main product
                  goes out of stock, the system automatically showcases your backup product—ensuring continuous ad performance!
                </p>

              </div>

              {/* Ad Type 2 */}
              <div className="space-y-4 max-w-4xl mx-auto mb-12">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  2. Listing Spotlight Ads
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Listing Spotlight Ads are perfect for showcasing multiple products in a visually engaging carousel format.
                  These ads increase brand visibility and encourage product discovery throughout the customer's shopping journey.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded-r">
                  <p className="text-sm font-medium text-gray-700"><strong>Key Features:</strong></p>
                  <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1 mt-2">
                    <li>Display multiple products in a single creative carousel</li>
                    <li>Custom creatives with up to 30 characters of promotional text</li>
                    <li>Add your logo and even GIFs to grab attention</li>
                    <li>Option to promote across multiple product categories</li>
                    <li>Users can click "See All" to explore your full product range</li>
                  </ul>
                </div>
                <div className="space-y-2 mt-4">
                  <h4 className="text-base font-medium text-gray-800">Design Guidelines:</h4>
                  <ul className="list-disc ml-6 text-sm sm:text-base text-gray-700 space-y-1">
                    <li><strong>Creative Dimensions:</strong> 208 px (width) x 530 px (height)</li>
                    <li><strong>Safe Content Area:</strong> 160 px x 362 px</li>
                    <li>Use plain backgrounds or subtle textures</li>
                    <li>Minimum font size: 12 px for readability</li>
                    <li>Avoid dynamic elements like pricing or "T&C apply" disclaimers</li>
                  </ul>
                </div>

              </div>

              {/* Ad Type 3 */}
              <div className="space-y-4 max-w-4xl mx-auto mb-12">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  3. Sponsored Display Ads
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Sponsored Display Ads allow you to advertise products alongside related or affinity keywords.
                  For instance, if you're selling mustard oil, your product can appear when users search for terms like "mustard," "oil," or your brand name.
                </p>
                <div className="bg-green-50 border-l-4 border-green-400 p-4 my-4 rounded-r">
                  <p className="text-sm font-medium text-gray-700">
                    <strong>Execution:</strong> These ads are managed directly by Blinkit. Simply coordinate with Blinkit's
                    point of contact, or let them handle it completely on your behalf. This format works exceptionally well for
                    brands looking to cross-merchandise or expand reach within specific keyword groups.
                  </p>
                </div>

              </div>

              {/* Setting Up Your Ad Campaign */}
              <div className="space-y-4 max-w-4xl mx-auto">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  How to Set Up a Blinkit Promotional Ad in 3 Simple Steps
                </h3>

                {/* Step 1 */}
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 mb-6">
                  <h4 className="text-base font-medium text-gray-800 mb-3 flex items-center">
                    <span className="bg-green-200 rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm mr-3">1</span>
                    Choose the Right Ad Format
                  </h4>
                  <p className="text-sm text-gray-700 ml-9">
                    Identify the ad format that aligns with your business objectives—whether it's boosting awareness,
                    increasing sales, or driving traffic to a product range.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 mb-6">
                  <h4 className="text-base font-medium text-gray-800 mb-3 flex items-center">
                    <span className="bg-green-200 rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm mr-3">2</span>
                    Set Your Budget and Bid Value
                  </h4>
                  <p className="text-sm text-gray-700 ml-9">
                    Decide your campaign budget and bid amount. Blinkit will translate your budget into impressions
                    and potential reach, ensuring you get the best value for your advertising spend.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <h4 className="text-base font-medium text-gray-800 mb-3 flex items-center">
                    <span className="bg-green-200 rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm mr-3">3</span>
                    Track and Optimize Performance
                  </h4>
                  <p className="text-sm text-gray-700 ml-9">
                    Monitor your campaign in real time through the Blinkit seller dashboard. Analyze key metrics to understand
                    what's working, what's not, and optimize future campaigns for better results.
                  </p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-5 rounded-lg mt-8">
                  <p className="text-sm text-gray-700 italic">
                    <strong>Pro Tip:</strong> By understanding and leveraging Blinkit's ad ecosystem, you can create impactful
                    campaigns that drive real business outcomes—from visibility to conversions. Whether you're a new seller or
                    an established brand, choosing the right combination of ad formats can significantly elevate your presence
                    on Blinkit and connect you with the right audience.
                  </p>
                </div>
              </div>
            </section>

            {/* Step 5 commission structure */}
            <section className="mb-10" id="commission-structure">
              <div className="flex items-center gap-3">
                <span className="bg-yellow-300 rounded-full w-9 h-9 flex items-center justify-center font-bold text-lg">5</span>
                <h2 className="m-0 text-xl font-semibold">Commission Structure</h2>
              </div>

              <p className="mt-4 mb-2">
                Understanding Blinkit's seller commission structure is crucial if you want to price your products profitably. To make it easy, we've built a free
                <a href="https://sellerguide.technovitasolution.in/blinkit-seller-calculator" className="text-yellow-500 font-semibold underline ml-1" target="_blank" rel="noopener noreferrer">
                  Blinkit Commission Calculator
                </a>
                — instantly estimate all fees and plan your margins smarter!
              </p>

              <div className="w-full overflow-hidden rounded-lg shadow-md mt-8">
                <Image
                  src="/images/blinkit/commission/blinkit-seller-calculator-desktop.webp"
                  alt="Blinkit Seller Calculator Commission Structure"
                  width={1600}
                  height={600}
                  loading="lazy"
                  className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>

              <div className="mt-6 space-y-4 text-base leading-relaxed">
                <p><strong>Here’s a detailed breakdown of Blinkit's Seller Fees in 2025:</strong></p>

                <p><strong>🔹 Inwarding Fee:</strong> ₹7.50 per unit</p>
                <p>Every product you send to Blinkit's warehouse is charged an inwarding fee when it is received and processed. If you are a high-volume seller, optimizing shipment sizes can help reduce this cost.</p>

                <p><strong>🔹 Storage Fee:</strong> Tiered based on time</p>
                <ul className="list-disc pl-5">
                  <li>First 30 days: ₹1/unit/day OR ₹6/cubic ft/day (whichever is higher)</li>
                  <li>31-60 days: ₹1.25/unit/day OR ₹6.25/cubic ft/day</li>
                  <li>Beyond 60 days: ₹1.5/unit/day OR ₹6.55/cubic ft/day</li>
                </ul>
                <p className="mt-2">Calculate volume: <span className="italic">Length × Width × Height (cm) ÷ 28,316</span>. Reducing product dimensions can save storage costs.</p>

                <p><strong>🔹 Platform Commission:</strong> Category-based percentage</p>
                <p>The commission Blinkit charges depends on the selling price of your product:</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm mt-2 border">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-2 border">Selling Price Range</th>
                        <th className="p-2 border">Commission Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="p-2 border">Up to ₹500</td><td className="p-2 border">2%</td></tr>
                      <tr><td className="p-2 border">₹500 – ₹700</td><td className="p-2 border">6%</td></tr>
                      <tr><td className="p-2 border">₹700 – ₹900</td><td className="p-2 border">13%</td></tr>
                      <tr><td className="p-2 border">₹900 – ₹1200</td><td className="p-2 border">16%</td></tr>
                      <tr><td className="p-2 border">Above ₹1200</td><td className="p-2 border">18%</td></tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-2">Pro Tip: Slightly adjusting your product price can sometimes put you in a lower commission tier, maximizing your profits.</p>

                <p><strong>🔹 Fulfillment Fee:</strong> ₹25 per unit</p>
                <p>Every time Blinkit picks, packs, and delivers your product, a fixed fulfillment fee is charged — making fast, reliable delivery part of your service offering.</p>

                <p><strong>🔹 Additional Seller Fees:</strong></p>
                <ul className="list-disc pl-5">
                  <li><strong>Inventory Removal Fee:</strong> ₹5 per unit (when recalling stock)</li>
                  <li><strong>Customer Return Fee:</strong> ₹50 per unit (only if return is due to seller issue)</li>
                </ul>

                <p className="mt-4"><strong>Note:</strong> All Blinkit fees attract an additional 18% GST.</p>

                <p className="mt-4 font-semibold text-lg">Why Understanding Blinkit Fees Matters</p>
                <p>Quick commerce platforms like Blinkit are booming, but managing your margins smartly is key to long-term success. By carefully calculating all costs upfront — using our Blinkit Seller Calculator — you can:</p>
                <ul className="list-disc pl-5">
                  <li>Set profitable product pricing</li>
                  <li>Optimize your inventory and reduce storage costs</li>
                  <li>Minimize returns with better quality control</li>
                  <li>Maximize exposure with fast-moving products</li>
                </ul>

                <p className="mt-4 font-semibold">Start calculating your profits today with our <a href="https://sellerguide.technovitasolution.in/blinkit-seller-calculator" className="text-yellow-500 underline" target="_blank" rel="noopener noreferrer">free Blinkit Commission Calculator</a> and take control of your quick commerce success!</p>
              </div>
            </section>

            {/* Step 6 inventory dispatch*/}
            <section className="mb-16" id="inventory-dispatch">
              {/* Heading */}
              <div className="flex items-center gap-3">
                <span className="bg-yellow-300 rounded-full w-9 h-9 flex items-center justify-center font-bold text-lg">
                  6
                </span>
                <h2 className="m-0 text-xl font-semibold text-gray-800">
                  How to Ship Stock to Blinkit Warehouse? Step-by-Step Process Explained
                </h2>
              </div>
              <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                Learn how to dispatch inventory from your registered location to Blinkit’s verified warehouses using their online dashboard. Follow this guided workflow with screenshots to stay compliant and avoid dispatch issues.
              </p>

              {/* Step 1 */}
              <div className="space-y-4 max-w-4xl mx-auto mb-12">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  1. Open Blinkit Seller Dashboard & Go to Inventory
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Log in at <strong>seller.blinkit.com</strong> and click the <strong>“Inventory”</strong> tab on the left-side menu. This is where you initiate the shipping process.
                </p>
                <div className="w-full overflow-hidden rounded-lg shadow-md mt-4">
                  <Image
                    src="/images/blinkit/inventory/step-1.webp"
                    alt="Navigating to Inventory in Blinkit Seller Dashboard"
                    width={1600}
                    height={600}
                    loading="lazy"
                    className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              </div>

              {/* Step 2 */}
              <div className="space-y-4 max-w-4xl mx-auto mb-12">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  2. Click on “Ship to Blinkit”
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  On the inventory page, click the green <strong>“Ship to Blinkit”</strong> button on the top-right corner. You'll see a list of Blinkit warehouses verified on your account. Select the warehouse where you want to send the stock.
                  <br /><br />
                  <strong>Need Help?</strong> Contact our support team via the number listed on our website if you don’t see a verified warehouse.
                </p>
                <div className="w-full overflow-hidden rounded-lg shadow-md mt-4">
                  <Image
                    src="/images/blinkit/inventory/step-2.webp"
                    alt="Warehouse selection in Blinkit shipment flow"
                    width={1600}
                    height={600}
                    loading="lazy"
                    className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              </div>

              {/* Step 3 */}
              <div className="space-y-4 max-w-4xl mx-auto mb-12">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  3. Select Products for Dispatch
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Choose products listed in your store. Blinkit will auto-suggest minimum and maximum unit quantities allowed per product for the selected warehouse.
                </p>
                <div className="w-full overflow-hidden rounded-lg shadow-md mt-4">
                  <Image
                    src="/images/blinkit/inventory/step-3.webp"
                    alt="Selecting products and quantity recommendations in Blinkit"
                    width={1600}
                    height={600}
                    loading="lazy"
                    className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              </div>

              {/* Step 4 */}
              <div className="space-y-4 max-w-4xl mx-auto mb-12">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  4. Choose Dispatch Address
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Select your registered dispatch location — this is the source address from which you’ll send inventory to Blinkit’s warehouse. Then click <strong>“Save & Continue”</strong>.
                </p>
                <div className="w-full overflow-hidden rounded-lg shadow-md mt-4">
                  <Image
                    src="/images/blinkit/inventory/step-4.webp"
                    alt="Choosing dispatch origin warehouse address in Blinkit"
                    width={1600}
                    height={600}
                    loading="lazy"
                    className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              </div>

              {/* Step 5 */}
              <div className="space-y-4 max-w-4xl mx-auto mb-12">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  5. Select Delivery Slot
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Choose the available delivery date and time slot to dispatch the shipment. After selecting the slot, click <strong>“Save & Continue”</strong>.
                </p>
                <div className="w-full overflow-hidden rounded-lg shadow-md mt-4">
                  <Image
                    src="/images/blinkit/inventory/step-5.webp"
                    alt="Selecting delivery date and time slot in Blinkit dashboard"
                    width={1600}
                    height={600}
                    loading="lazy"
                    className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              </div>

              {/* Step 6 */}
              <div className="space-y-4 max-w-4xl mx-auto">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  6. Generate & Download STO (Stock Transfer Order)
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Once the delivery slot is saved, your <strong>STO (Stock Transfer Order)</strong> will be generated under the “Scheduled Inventory” tab. You can download the STO in PDF or Excel format — this will be required for packing and dispatch.
                </p>
                <div className="w-full overflow-hidden rounded-lg shadow-md mt-4">
                  <Image
                    src="/images/blinkit/inventory/step-6.webp"
                    alt="Downloading STO document for Blinkit dispatch"
                    width={1600}
                    height={600}
                    loading="lazy"
                    className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              </div>
            </section>

            {/* Step 7 payment cycle*/}
            <section className="mb-10" id="payment-cycle">
              <div className="flex items-center gap-3">
                <span className="bg-yellow-300 rounded-full w-9 h-9 flex items-center justify-center font-bold text-lg">7</span>
                <h2 className="m-0 text-xl font-semibold">Blinkit Payment Cycle</h2>
              </div>

              <p className="mt-4 mb-2">
                Stay informed about how and when you receive your payouts as a Blinkit seller. Understanding the payment cycle is crucial for effective cash flow management and strategic planning.
              </p>

              <ul className="list-disc pl-5 space-y-2 text-gray-700 mt-4">
                <li>
                  <strong>Bi-Monthly Payouts:</strong> Blinkit processes seller payments twice a month — on the <strong>15th</strong> and <strong>30th</strong>. This consistent payment schedule helps you plan your inventory restocking and business operations better.
                </li>
                <li>
                  <strong>Automatic Fee Deductions:</strong> All Blinkit seller fees, commissions, fulfillment charges, and return handling fees are automatically deducted from your sales revenue before your payouts are processed.
                </li>
                <li>
                  <strong>Transparent Payout Reports:</strong> You can view detailed breakdowns of your earnings, deductions, and net payouts directly in your seller dashboard.
                </li>
                <li>
                  <strong>Quick Access to Funds:</strong> Funds are credited directly to your registered bank account, ensuring seamless and hassle-free transactions.
                </li>
              </ul>

            </section>

            {/* Step 8  growth strategy*/}
            <section className="mb-16" id="growth-strategy">
              {/* Heading */}
              <div className="flex items-center gap-3">
                <span className="bg-yellow-300 rounded-full w-9 h-9 flex items-center justify-center font-bold text-lg">8</span>
                <h2 className="m-0 text-xl font-semibold">Growth Strategy</h2>
              </div>

              <p className="text-gray-600 max-w-3xl mx-auto mb-8">
                Get proven tips and tactics to grow faster on Blinkit and stand out among your competitors easily.
                Follow these expert-recommended strategies to scale your business and achieve sustainable growth on the platform.
              </p>

              {/* Strategy 1 */}
              <div className="mb-10 border-b border-gray-200 pb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">1. Optimize Product Listings for Visibility and Conversion</h3>
                <p className="text-gray-700 mb-4">
                  Ensure your product listings are clear, concise, and informative to increase visibility and conversion rates:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Titles:</strong> Use the format "Brand + Product + Size + Key Feature" to enhance searchability
                    (Example: "Fresh Harvest Organic Almonds 500g Premium California")
                  </li>
                  <li>
                    <strong>Descriptions:</strong> Highlight benefits, usage instructions, and unique selling points. Include important
                    details like ingredients, nutrition facts, and shelf life for food products.
                  </li>
                  <li>
                    <strong>Images:</strong> Upload high-quality images showing the product from multiple angles, including packaging details.
                    Use white backgrounds for main product images and lifestyle images for secondary shots.
                  </li>
                  <li>
                    <strong>Attributes:</strong> Fill all category-specific attributes accurately as they affect search rankings and
                    help customers filter products according to their preferences.
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Accurate and detailed listings improve customer trust and increase the likelihood of purchase. Top-performing Blinkit
                  sellers update their listings regularly based on customer feedback and search trends.
                </p>
              </div>

              {/* Strategy 2 */}
              <div className="mb-10 border-b border-gray-200 pb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">2. Maintain Optimal Inventory Levels</h3>
                <p className="text-gray-700 mb-4">
                  Regularly monitor your stock to prevent cancellations due to out-of-stock items:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Inventory Management:</strong> Use Blinkit's dashboard to track stock levels and set alerts for low inventory.
                    Implement a 48-hour replenishment cycle for fast-moving products.
                  </li>
                  <li>
                    <strong>Demand Forecasting:</strong> Analyze sales trends to anticipate demand, especially during festivals or seasonal peaks.
                    Most successful sellers maintain at least 15-20% extra inventory during promotional periods.
                  </li>
                  <li>
                    <strong>Stock Rotation:</strong> Follow FIFO (First In, First Out) principles, particularly for perishables, to maintain
                    product freshness and minimize write-offs.
                  </li>
                  <li>
                    <strong>Buffer Stock:</strong> Maintain a safety stock of minimum 10-15% above expected sales volume to handle unexpected
                    surges in demand.
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Consistent stock availability ensures customer satisfaction and repeat business. Unlike other platforms, Blinkit's rapid delivery
                  promise means stockouts can severely impact your store metrics and visibility.
                </p>
              </div>

              {/* Strategy 3 */}
              <div className="mb-10 border-b border-gray-200 pb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">3. Implement Competitive Pricing and Promotions</h3>
                <p className="text-gray-700 mb-4">
                  Attract and retain customers through strategic pricing:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Competitive Analysis:</strong> Regularly review competitor prices to position your products effectively.
                    Blinkit's pricing algorithms favor sellers who maintain competitive yet profitable pricing.
                  </li>
                  <li>
                    <strong>Promotions:</strong> Offer discounts, bundle deals, or free shipping on bulk orders to incentivize purchases.
                    Consider "Buy One Get One" offers for new product launches to drive initial sales.
                  </li>
                  <li>
                    <strong>Flash Sales:</strong> Participate in Blinkit's time-limited flash sales to increase visibility. Sellers report
                    up to 300% increase in visibility during these promotional periods.
                  </li>
                  <li>
                    <strong>Psychological Pricing:</strong> Use price points ending in 9 or 5 to create perception of better value
                    (₹99 instead of ₹100).
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Blinkit provides tools to manage promotional campaigns effectively. Top-performing sellers adjust pricing strategies
                  weekly based on competitive analysis and seasonality.
                </p>
              </div>

              {/* Strategy 4 */}
              <div className="mb-10 border-b border-gray-200 pb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">4. Ensure Efficient Order Fulfillment and Packaging</h3>
                <p className="text-gray-700 mb-4">
                  Timely and secure delivery enhances customer experience:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Order Processing:</strong> Promptly accept and prepare orders to meet Blinkit's delivery timelines.
                    Aim for order acceptance within 30 minutes of notification.
                  </li>
                  <li>
                    <strong>Packaging:</strong> Use appropriate, tamper-proof packaging, especially for perishables, to maintain product integrity.
                    Invest in thermal packaging for temperature-sensitive items.
                  </li>
                  <li>
                    <strong>Quality Check:</strong> Implement a pre-shipment quality control process to verify product condition, expiry dates,
                    and packaging integrity.
                  </li>
                  <li>
                    <strong>Batch Processing:</strong> Group similar orders to streamline packing and reduce fulfillment time by up to 40%.
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Efficient fulfillment processes reduce returns and increase customer trust. Data shows that sellers with fulfillment rates
                  above 95% receive significantly better placement in Blinkit's search results.
                </p>
              </div>

              {/* Strategy 5 */}
              <div className="mb-10 border-b border-gray-200 pb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">5. Leverage Blinkit's Promotional Tools and Analytics</h3>
                <p className="text-gray-700 mb-4">
                  Utilize Blinkit's platform features to boost visibility and sales:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Targeted Promotions:</strong> Participate in Blinkit's promotional campaigns to reach specific customer segments.
                    Featured products can see up to 5x more visibility than non-featured ones.
                  </li>
                  <li>
                    <strong>Analytics:</strong> Monitor sales performance, customer behavior, and inventory turnover to make informed decisions.
                    Pay special attention to peak ordering times and modify inventory accordingly.
                  </li>
                  <li>
                    <strong>A/B Testing:</strong> Test different product images, descriptions, and pricing strategies to identify what resonates
                    best with your target audience.
                  </li>
                  <li>
                    <strong>Performance Tracking:</strong> Use Blinkit's seller dashboard to monitor key metrics like conversion rate, average order value,
                    and customer return rate.
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Data-driven strategies help in optimizing product offerings and marketing efforts. Top sellers on Blinkit review their
                  analytics dashboard at least 3 times per week to identify growth opportunities.
                </p>
              </div>

              {/* Strategy 6 */}
              <div className="mb-10 border-b border-gray-200 pb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">6. Provide Excellent Customer Service</h3>
                <p className="text-gray-700 mb-4">
                  Positive customer interactions lead to repeat business:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Responsive Communication:</strong> Address customer inquiries and complaints promptly through Blinkit's communication channels.
                    Aim to respond within 2 hours during business hours.
                  </li>
                  <li>
                    <strong>Feedback Management:</strong> Encourage reviews and respond to feedback to demonstrate commitment to customer satisfaction.
                    Acknowledge negative reviews professionally and offer solutions.
                  </li>
                  <li>
                    <strong>Return Handling:</strong> Process returns quickly and without hassle to build trust. Analyze return reasons to identify
                    and address product or listing issues.
                  </li>
                  <li>
                    <strong>Personalization:</strong> Include personalized thank-you notes or small samples with orders to create a positive
                    impression and encourage repeat purchases.
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  High ratings improve your store's visibility and credibility on the platform. Stores with ratings above 4.5 stars typically
                  see 70% more sales than those with lower ratings.
                </p>
              </div>

              {/* Strategy 7 */}
              <div className="mb-10 border-b border-gray-200 pb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">7. Expand Product Range Based on Market Demand</h3>
                <p className="text-gray-700 mb-4">
                  Diversify your offerings to cater to a broader customer base:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Product Selection:</strong> Include high-demand categories like fresh produce, household essentials, and personal care items.
                    Analyze Blinkit's trending categories to identify growth opportunities.
                  </li>
                  <li>
                    <strong>Local Sourcing:</strong> Partner with local suppliers to ensure freshness and support community businesses.
                    Highlight locally-sourced products in your listings as they often command premium prices.
                  </li>
                  <li>
                    <strong>Complementary Products:</strong> Add items that complement your existing bestsellers. For example, if you sell coffee,
                    consider adding coffee filters, sugar, and creamers.
                  </li>
                  <li>
                    <strong>Seasonal Offerings:</strong> Introduce seasonal products and festival-specific items to capture seasonal demand spikes.
                    Plan inventory 45-60 days ahead of major festivals.
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Regularly updating your product catalog based on customer feedback and market trends can boost sales. Most successful Blinkit
                  sellers introduce at least 5-10 new products monthly to keep their inventory fresh and relevant.
                </p>
              </div>

              {/* Strategy 8 */}
              <div className="mb-10">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">8. Build a Strong Brand Identity</h3>
                <p className="text-gray-700 mb-4">
                  Establish a recognizable brand presence to stand out on Blinkit:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Consistent Branding:</strong> Use consistent packaging, color schemes, and logo placement across all products
                    to build brand recognition.
                  </li>
                  <li>
                    <strong>Quality Assurance:</strong> Maintain strict quality standards to build a reputation for reliability.
                    Many top sellers implement quality check protocols that exceed Blinkit's minimum requirements.
                  </li>
                  <li>
                    <strong>Unique Selling Proposition:</strong> Clearly communicate what makes your products different – whether it's organic ingredients,
                    sustainable packaging, or exclusive formulations.
                  </li>
                  <li>
                    <strong>Customer Loyalty:</strong> Consider including small branded inserts with orders that offer exclusive discounts
                    on future purchases to encourage repeat business.
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Brands with strong identity typically achieve 30-40% higher customer retention rates on Blinkit compared to generic sellers.
                  Investing in brand development pays dividends in the long run through increased customer loyalty and higher average order values.
                </p>
              </div>

              {/* Final Success Tips */}
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">Pro Tips for Accelerated Growth</h3>
                <ul className="list-disc pl-6 space-y-2 text-yellow-700">
                  <li>
                    <strong>First 30 Days Focus:</strong> During your first month, concentrate on perfect fulfillment rather than volume.
                    Blinkit's algorithm rewards new sellers with consistent performance.
                  </li>
                  <li>
                    <strong>Micro-Niches:</strong> Consider specializing in under-served categories where competition is low but demand is growing.
                  </li>
                  <li>
                    <strong>Cross-Selling:</strong> Analyze order patterns to identify complementary products that customers frequently buy together,
                    then optimize your listings to suggest these combinations.
                  </li>
                  <li>
                    <strong>Weekend Strategy:</strong> Blinkit sees 30-40% higher traffic on weekends. Plan inventory replenishment and special promotions
                    around Friday through Sunday for maximum impact.
                  </li>
                </ul>
                <p className="text-yellow-700 mt-4 font-medium">
                  Remember: Consistency is key on Blinkit. The most successful sellers maintain high performance metrics across all aspects of
                  their business rather than excelling in just one area.
                </p>
              </div>
            </section>

            {/* Step 9 faq*/}
            <section className="mb-10" id="faq">
              <div className="flex items-center gap-3">
                <span className="bg-yellow-300 rounded-full w-9 h-9 flex items-center justify-center font-bold text-lg">9</span>
                <h2 className="m-0 text-xl md:text-2xl font-semibold">FAQs</h2>
              </div>
              <p className="mt-4 mb-6 text-gray-700 text-sm md:text-base leading-relaxed">
                Get answers to the most common questions about selling on Blinkit, including "Can I sell without a GST number?" and more.
              </p>

              <div className="max-w-3xl mx-auto">
                {faqs.map((faq, index) => (
                  <div key={index} className="mb-3">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className={`w-full text-left p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors duration-300 ease-in-out focus:outline-none ${openIndex === index ? "shadow-md" : ""
                        }`}
                      aria-expanded={openIndex === index}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-gray-900 font-medium text-base md:text-lg">{faq.question}</span>
                        <span className="text-xl text-blue-500">{openIndex === index ? "−" : "+"}</span>
                      </div>
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                          }`}
                      >
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </section>

          </main>

          {/* Sidebar for desktop - hidden on mobile */}
          <aside className="hidden lg:block lg:w-80 lg:flex-shrink-0">
            {/* Services sidebar*/}
            <div
              className={`rounded-lg bg-gray-50 overflow-hidden ${scrollPosition > 250 ? "sticky top-6" : ""
                }`}
            >
              {/* Header */}
              <div className="bg-gray-50 p-6 border-b border-gray-200">
                <h3 className="font-semibold text-lg text-gray-800">Our E-commerce Solutions</h3>
              </div>

              {/* List of services */}
              <div>
                {blinkitServices.map((service, index) => (
                  <a
                    key={index}
                    href={service.href}
                    className="block px-6 py-3 text-gray-700 hover:bg-gray-100 border-b border-gray-200 last:border-0"
                  >
                    {service.title}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
      <LeadGenPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        title="🚀 Get Your Free Blinkit Seller Success Guide!"
        subtitle="Learn expert strategies to boost your sales and stand out on Blinkit"
        offerText="Plus: Get a FREE PDF guide on optimizing your Blinkit store for maximum profits"
      />
    </div>
  );
}