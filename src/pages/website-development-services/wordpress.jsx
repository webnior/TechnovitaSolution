import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumb from '@/src/components/common/Breadcrumb';

const WordPressDevelopment = () => {
  const breadcrumbItems = [
    { name: 'Website Development Services', href: '/website-development-services' },
    { name: 'WordPress Development', href: '/website-development-services/wordpress' },
  ];

  const services = [
    {
      title: 'Custom Theme Development',
      description: 'Unique WordPress themes tailored to your brand',
      features: ['Responsive Design', 'Custom Layouts', 'Brand Integration']
    },
    {
      title: 'Plugin Development',
      description: 'Custom WordPress plugins for specific functionality',
      features: ['Custom Features', 'API Integration', 'Performance Optimization']
    },
    {
      title: 'E-commerce Solutions',
      description: 'WooCommerce development and customization',
      features: ['Product Management', 'Payment Integration', 'Shipping Solutions']
    },
    {
      title: 'Website Migration',
      description: 'Seamless WordPress migration services',
      features: ['Data Transfer', 'SEO Preservation', 'Zero Downtime']
    }
  ];

  return (
    <>
      <Head>
        <title>WordPress Development Services | Custom Themes & Plugins</title>
        <meta name="description" content="Professional WordPress development services including custom themes, plugins, and WooCommerce solutions. Create a powerful and flexible website with WordPress." />
        <meta name="keywords" content="WordPress development, WordPress themes, WordPress plugins, WooCommerce development, custom WordPress development" />
        <link rel="canonical" href="https://yourdomain.com/services/web-development/wordpress" />
      </Head>

      <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
          <Breadcrumb items={breadcrumbItems} />
        </div>        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            WordPress Development Services
          </h1>
          
          <p className="text-xl text-gray-700 mb-12">
            Create powerful, flexible, and user-friendly websites with our professional WordPress 
            development services. From custom themes to complex e-commerce solutions, we help you 
            leverage the full potential of WordPress.
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
            <h2 className="text-3xl font-bold mb-6">Why Choose WordPress?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">User-Friendly CMS</h3>
                <p className="text-gray-600">Easy content management and updates without technical knowledge.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Scalable Platform</h3>
                <p className="text-gray-600">Grows with your business needs through plugins and customizations.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">SEO-Friendly</h3>
                <p className="text-gray-600">Built-in SEO features and compatibility with popular SEO plugins.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Large Ecosystem</h3>
                <p className="text-gray-600">Access to thousands of themes, plugins, and integrations.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">Our WordPress Development Process</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Discovery & Planning</h3>
                  <p className="text-gray-600">Understanding your requirements and planning the website structure.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Design & Development</h3>
                  <p className="text-gray-600">Creating custom themes and functionality based on your needs.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Testing & Optimization</h3>
                  <p className="text-gray-600">Thorough testing and performance optimization.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Launch & Support</h3>
                  <p className="text-gray-600">Site launch and ongoing maintenance support.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href={`https://wa.me/917451073504?text=Hi,%20I%20am%20interested%20in%20getting%20web%20development%20services`}
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

export default WordPressDevelopment;
