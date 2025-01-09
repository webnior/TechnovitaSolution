// src/components/Account-management/ProcessSection.js
import React from 'react';
import { icons } from '@/src/lib/icons';

const Process = ({ config }) => {
  // Function to get icon component from local icons
  const getIcon = (iconName) => {
    const IconComponent = icons[iconName];
    return IconComponent ? <IconComponent size={24} className="text-orange-600" /> : null;
  };

  return (
    <section className="py-20 border-b bg-white px-10">
      <h2 className="text-4xl font-bold mb-16 text-gray-900 text-center">
        {config.title}
      </h2>
      <div className="relative">
        <div
          className="absolute left-6 top-[28px] bottom-0 w-0.5 bg-orange-200"
          style={{ height: "calc(100% - 56px)" }}
        ></div>
        <div className="space-y-24">
          {config.items.map((item, index) => (
            <div key={index} className="relative flex gap-8">
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 bg-white rounded-full border-2 border-orange-200 flex items-center justify-center relative z-10">
                  {getIcon(item.iconName)}
                </div>
              </div>
              <div className="flex-1 bg-white p-8 rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {item.description}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {item.details.map((detail, dIndex) => (
                    <div key={dIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;