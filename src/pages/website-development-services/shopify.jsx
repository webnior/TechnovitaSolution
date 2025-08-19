import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumb from '@/src/components/common/Breadcrumb';

const ShopifyDevelopment = () => {
  const breadcrumbItems = [
    { name: 'Web Development', href: '/website-development-services' },
    { name: 'Shopify Development', href: '/website-development-services/shopify' },
  ];

  const services = [
    {
      title: 'Custom Theme Development',
      description: 'Unique Shopify themes that reflect your brand identity',
      features: ['Custom Design', 'Responsive Layout', 'Brand Integration']
    },
    {
      title: 'Shopify App Development',
      description: 'Custom Shopify apps for enhanced functionality',
      features: ['Custom Features', 'API Integration', 'Performance Optimization']
    },
    {
      title: 'Store Setup & Migration',
      description: 'Complete store setup and migration services',
      features: ['Product Import', 'Data Migration', 'Payment Setup']
    },
    {
      title: 'Store Optimization',
      description: 'Performance and conversion optimization',
      features: ['Speed Optimization', 'SEO Setup', 'Conversion Optimization']
    }
  ];

  const features = [
    {
      title: 'Secure Platform',
      description: 'Built-in security features and PCI compliance'
    },
    {
      title: 'Scalable Solution',
      description: 'Handles growth from startup to enterprise'
    },
    {
      title: 'Mobile Commerce',
      description: 'Optimized for mobile shopping experiences'
    },
    {
      title: 'Marketing Tools',
      description: 'Built-in marketing and SEO capabilities'
    }
  ];

  return (
    <>
      <Head>
        <title>Shopify Development Services | Custom Themes & Apps</title>
        <meta name="description" content="Professional Shopify development services including custom themes, apps, and store optimization. Create a powerful e-commerce store with Shopify." />
        <meta name="keywords" content="Shopify development, Shopify themes, Shopify apps, e-commerce development, custom Shopify development" />
        <link rel="canonical" href="https://yourdomain.com/services/web-development/shopify" />
      </Head>

      <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
          <Breadcrumb items={breadcrumbItems} />
        </div>        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Shopify Development Services
          </h1>
          
          <p className="text-xl text-gray-700 mb-12">
            Launch and grow your e-commerce business with our professional Shopify development services. 
            We create custom, high-converting online stores that drive sales and provide excellent 
            shopping experiences.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">Why Choose Shopify?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Development Process</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Store Planning</h3>
                  <p className="text-gray-600">Analysis of requirements and planning store structure.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Design & Development</h3>
                  <p className="text-gray-600">Creating custom themes and functionality.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Store Setup</h3>
                  <p className="text-gray-600">Product setup, payment integration, and testing.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Launch & Support</h3>
                  <p className="text-gray-600">Store launch and ongoing maintenance.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a
              href={`https://wa.me/917042163504?text=Hi,%20I%20am%20interested%20in%20getting%20web%20development%20services`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                Get Started with Your Project
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopifyDevelopment;
