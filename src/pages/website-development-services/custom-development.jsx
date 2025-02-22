import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumb from '@/src/components/common/Breadcrumb';

const CustomWebDevelopment = () => {
  const breadcrumbItems = [
    { name: 'Web Development', href: '/website-development-services' },
    { name: 'Custom Development', href: '/website-development-services/custom-development' },
  ];

  const technologies = [
    {
      name: 'Java',
      description: 'Enterprise-grade backend development with Spring Boot',
      features: ['Microservices', 'REST APIs', 'Enterprise Applications']
    },
    {
      name: 'Next.js',
      description: 'Modern React framework for production-grade applications',
      features: ['Server-side Rendering', 'Static Site Generation', 'API Routes']
    },
    {
      name: 'Node.js',
      description: 'Scalable server-side JavaScript runtime',
      features: ['Real-time Applications', 'API Development', 'Microservices']
    }
  ];

  return (
    <>
      <Head>
        <title>Custom Web Development Services | Java, Next.js & Node.js Solutions</title>
        <meta name="description" content="Transform your business with our custom web development services using Java, Next.js, and Node.js. Build scalable, secure, and high-performance web applications." />
        <meta name="keywords" content="custom web development, Java development, Next.js development, Node.js development, web application development" />
        <link rel="canonical" href="https://technovitasolution.in/services/web-development/custom-development"/>
      </Head>

      <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
          <Breadcrumb items={breadcrumbItems} />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Custom Web Development
          </h1>
          
          <p className="text-xl text-gray-700 mb-12">
            Build powerful, scalable, and secure web applications with our custom development services.
            We leverage cutting-edge technologies to create solutions that drive your business forward.
          </p>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Our Technology Stack</h2>
            <div className="grid gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-2xl font-semibold mb-3">{tech.name}</h3>
                  <p className="text-gray-600 mb-4">{tech.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {tech.features.map((feature, featureIndex) => (
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
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">Development Process</h2>
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Requirements Analysis</h3>
                  <p className="text-gray-600">We thoroughly analyze your business needs and technical requirements.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Architecture Design</h3>
                  <p className="text-gray-600">Creating scalable and maintainable application architecture.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Development & Testing</h3>
                  <p className="text-gray-600">Agile development with continuous testing and quality assurance.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Deployment & Support</h3>
                  <p className="text-gray-600">Smooth deployment and ongoing maintenance support.</p>
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

export default CustomWebDevelopment;
