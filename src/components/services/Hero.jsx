import React from 'react';
import WhatsAppCTA from '../WhatsappCTA';
export default function Hero({ config }) {
  const { badge, mainHeading, description, stats } = config;

  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-2 lg:py-5 relative">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-100 rounded-full text-orange-600 text-sm font-medium mb-6">
            <span>{badge.company}</span>
            <div className="w-1.5 h-1.5 rounded-full bg-orange-600"></div>
            <span>{badge.text}</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {mainHeading}
          </h1>

          {/* Description */}
          <div className="space-y-4 text-base sm:text-lg text-gray-700">
            {description.map((text, index) => (
              <p key={index} className={index > 0 ? 'hidden sm:block' : ''}>
                {text}
              </p>
            ))}
          </div>

          {/* Stats */}
          <div className="pt-6 flex flex-wrap gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center">
                <div className="w-2.5 h-2.5 bg-orange-600 rounded-full mr-2"></div>
                <span className="text-gray-900">{stat.value} {stat.label}</span>
              </div>
            ))}
          </div>
        </div>
           <WhatsAppCTA className="mt-5"/>
      </div>
    </section>
  );
}
