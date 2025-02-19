// src/components/Account-management/Features.js
import React from 'react';
import { TrendingUp, ShieldCheck, BarChart, Users } from 'lucide-react';

// Define the icon mapping directly with the imported components
const iconComponents = {
  TrendingUp: TrendingUp,
  ShieldCheck: ShieldCheck,
  BarChart: BarChart,
  Users: Users
};

const Features = ({ config }) => {
  const getIcon = (iconName) => {
    const IconComponent = iconComponents[iconName];
    return IconComponent ? (
      <div className="bg-orange-50 p-4 inline-block rounded-lg mb-6">
        <IconComponent className="text-orange-600" size={32} />
      </div>
    ) : null;
  };

  return (
    <section className="py-2 px-6">
      <div className="grid md:grid-cols-2 gap-8">
        {config.features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl border hover:shadow-lg transition-all duration-300"
          >
            {getIcon(feature.iconName)}
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              {feature.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;