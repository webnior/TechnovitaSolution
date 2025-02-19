// src/components/Account-management/ServicesSection.js
import React from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { icons } from '@/src/lib/icons';

const Services = ({ config }) => {
  // Function to get icon component dynamically
  const getIcon = (iconName) => {
    const IconComponent = icons[iconName];
    return IconComponent ? <IconComponent size={32} /> : null;
  };

  return (
    <section className="py-20 border-b px-10">
      <h2 className="text-3xl font-bold mb-12 text-gray-900">
        {config.title}
      </h2>
      <div className="space-y-16">
        {config.services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl border hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start gap-6">
              <div className="bg-orange-100 p-4 rounded-lg">
                <div className="text-orange-600">
                  {getIcon(service.iconName)}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                  {service.blogLink ? (
                    <Link
                      href={service.blogLink}
                      className="hover:text-orange-600 transition-colors duration-300"
                    >
                      {service.title}
                    </Link>
                  ) : (
                    service.title
                  )}
                </h3>
                <div className="prose prose-lg text-gray-700">
                  <p>{service.description}</p>
                  <div className="grid md:grid-cols-2 gap-8 mt-6">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex}>
                        <h4 className="font-medium mb-4">{feature.subtitle}</h4>
                        <ul className="space-y-3">
                          {feature.points.map((point, pIndex) => (
                            <li
                              key={pIndex}
                              className="flex items-center gap-3"
                            >
                              <Check
                                className="text-orange-600 flex-shrink-0"
                                size={20}
                              />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;