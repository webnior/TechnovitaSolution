import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumb from '@/src/components/common/Breadcrumb';

const WixWebflowDevelopment = () => {
  const breadcrumbItems = [
    { name: 'Website Development Services', href: '/website-development-services' },
    { name: 'Wix & Webflow Development', href: '/website-development-services/wix-webflow' },
  ];

  const platforms = [
    {
      name: 'Wix',
      description: 'Create stunning websites with drag-and-drop simplicity',
      features: [
        'Custom Design',
        'E-commerce Integration',
        'Blog Management',
        'SEO Tools'
      ]
    },
    {
      name: 'Webflow',
      description: 'Professional-grade websites with advanced customization',
      features: [
        'Custom Animations',
        'CMS Integration',
        'Responsive Design',
        'Clean Code Export'
      ]
    }
  ];

  const services = [
    {
      title: 'Custom Design Implementation',
      description: 'Transform your vision into a stunning website design',
      platform: 'Both'
    },
    {
      title: 'E-commerce Setup',
      description: 'Set up your online store with product management and payment processing',
      platform: 'Both'
    },
    {
      title: 'CMS Development',
      description: 'Create dynamic content management systems for your website',
      platform: 'Webflow'
    },
    {
      title: 'Animation & Interactions',
      description: 'Add engaging animations and interactive elements',
      platform: 'Both'
    }
  ];

  return (
    <>
      <Head>
        <title>Wix & Webflow Development Services | Professional No-Code Solutions</title>
        <meta name="description" content="Expert Wix and Webflow development services for creating stunning, professional websites. No-code solutions with custom design and functionality." />
        <meta name="keywords" content="Wix development, Webflow development, no-code development, website design, custom website development" />
        <link rel="canonical" href="https://yourdomain.com/services/web-development/wix-webflow" />
      </Head>

      <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
          <Breadcrumb items={breadcrumbItems} />
        </div>        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Wix & Webflow Development
          </h1>
          
          <p className="text-xl text-gray-700 mb-12">
            Create stunning, professional websites without the complexity of traditional coding. 
            Our expert team leverages the power of Wix and Webflow to deliver beautiful, 
            functional websites that meet your business needs.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-semibold mb-3">{platform.name}</h3>
                <p className="text-gray-600 mb-4">{platform.description}</p>
                <div className="flex flex-wrap gap-2">
                  {platform.features.map((feature, featureIndex) => (
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
            <h2 className="text-3xl font-bold mb-6">Our Services</h2>
            <div className="grid gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full px-3 py-1 text-sm flex-shrink-0">
                    {service.platform}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">Development Process</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Discovery</h3>
                  <p className="text-gray-600">Understanding your requirements and choosing the right platform.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Design</h3>
                  <p className="text-gray-600">Creating the visual design and user experience.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Development</h3>
                  <p className="text-gray-600">Implementing the design and functionality.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Launch & Training</h3>
                  <p className="text-gray-600">Website launch and platform training.</p>
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

export default WixWebflowDevelopment;
