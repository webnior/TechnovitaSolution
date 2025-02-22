import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumb from '@/src/components/common/Breadcrumb';

const WebDevelopmentServices = () => {
  const breadcrumbItems = [
    { name: 'Website Development Services', href: '/website-development-services' },
  ];

  const services = [
    {
      title: 'Custom Web Development',
      description: 'Modern web applications built with Java, Next.js, and Node.js',
      link: '/website-development-services/custom-development',
      technologies: ['Java', 'Next.js', 'Node.js', 'React', 'TypeScript'],
      icon: '💻'
    },
    {
      title: 'WordPress Development',
      description: 'Professional WordPress websites with custom themes and plugins',
      link: '/website-development-services/wordpress',
      technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript'],
      icon: '🎨'
    },
    {
      title: 'Shopify Development',
      description: 'Custom Shopify stores with unique themes and functionalities',
      link: '/website-development-services/shopify',
      technologies: ['Shopify', 'Liquid', 'JavaScript', 'Ruby'],
      icon: '🛍️'
    },
    {
      title: 'Wix & Webflow Development',
      description: 'Professional websites using modern no-code platforms',
      link: '/website-development-services/wix-webflow',
      technologies: ['Wix', 'Webflow', 'CMS', 'Designer'],
      icon: '🌐'
    }
  ];

  return (
    <>
      <Head>
        <title>Professional Website Development Services | Custom Web Solutions</title>
        <meta name="description" content="Transform your business with our professional web development services. Expert developers for custom websites, e-commerce, CMS platforms like WordPress, Shopify, Wix & Webflow." />
        <meta name="keywords" content="web development services, website development, custom web development, WordPress development, Shopify development, Wix development, Webflow development" />
        <link rel="canonical" href="https://technovitasolution.in/website-development-services" />
      </Head>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Breadcrumb items={breadcrumbItems} />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Web Development Services
          </h1>
            
          <p className="text-xl text-gray-700 mb-12">
            Transform your digital presence with our comprehensive web development solutions. 
            From custom web applications to e-commerce platforms, we deliver scalable and 
            high-performance websites that drive results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Link href={service.link} key={index}>
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">Why Choose Our Web Development Services?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Expert Development Team</h3>
                <p className="text-gray-600">Our developers are skilled in the latest technologies and best practices.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Customized Solutions</h3>
                <p className="text-gray-600">Tailored web development solutions that match your specific requirements.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">SEO-Optimized</h3>
                <p className="text-gray-600">Built with search engines in mind to improve your online visibility.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
                <p className="text-gray-600">Mobile-first approach ensuring perfect display across all devices.</p>
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

export default WebDevelopmentServices;
