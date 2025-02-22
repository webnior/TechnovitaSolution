import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumb from '@/src/components/common/Breadcrumb';

const StudioServices = () => {
  const breadcrumbItems = [
    { name: 'Technovita Studio Services', href: '/technovita-studio-services' },
  ];

  const photographyServices = [
    {
      title: 'Product Photography',
      description: 'Professional product photography that makes your items stand out',
      features: [
        'High-resolution images',
        '360-degree product views',
        'White background shots',
        'Lifestyle product photography',
        'Package photography',
        'Detail shots'
      ],
      icon: '📸'
    },
    {
      title: 'Model Photography',
      description: 'Professional model photography for fashion and commercial use',
      features: [
        'Fashion photography',
        'Commercial portraits',
        'Lookbook shoots',
        'E-commerce model shots',
        'Brand campaign photography',
        'Editorial photography'
      ],
      icon: '👤'
    }
  ];

  const studioFeatures = [
    {
      title: 'Professional Equipment',
      description: 'State-of-the-art cameras, lighting, and studio equipment',
      icon: '🎥'
    },
    {
      title: 'Expert Team',
      description: 'Experienced photographers and creative directors',
      icon: '👥'
    },
    {
      title: 'Quick Turnaround',
      description: '24-48 hour delivery for standard shoots',
      icon: '⚡'
    },
    {
      title: 'Post-Processing',
      description: 'Professional retouching and color correction',
      icon: '🎨'
    }
  ];

  return (
    <>
      <Head>
        <title>Professional Photography Studio Services | Product & Model Photography</title>
        <meta 
          name="description" 
          content="Premium photography services for products and models. Professional studio setup with expert photographers for e-commerce, fashion, and commercial photography."
        />
        <meta 
          name="keywords" 
          content="product photography, model photography, studio photography, commercial photography, fashion photography, e-commerce photography"
        />
        <link rel="canonical" href="https://technovitasolution.in/technovita-studio-services"/>
      </Head>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Breadcrumb items={breadcrumbItems} />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Studio Services
          </h1>
            
          <p className="text-xl text-gray-700 mb-12">
            Transform your products and brand with our professional photography services. 
            We specialize in high-quality product and model photography that helps your 
            business stand out in the digital marketplace.
          </p>

          {/* Main Services */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {photographyServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <span className="mr-2">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Studio Features */}
          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-bold mb-8">Why Choose Our Studio</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {studioFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Our Photography Process</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Consultation</h3>
                  <p className="text-gray-600">We discuss your requirements, style preferences, and intended use of the photos.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Shoot Planning</h3>
                  <p className="text-gray-600">We plan the shoot details including styling, lighting, and shot list.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Photography Session</h3>
                  <p className="text-gray-600">Professional photography session in our fully-equipped studio.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Post-Processing</h3>
                  <p className="text-gray-600">Professional editing, retouching, and color correction.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <a
              href={`https://wa.me/917451073504?text=Hi,%20I%20am%20interested%20in%20getting%20photoshoot%20services`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
              Book a Photography Session
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudioServices;
