import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Shield, Clock, Globe } from 'lucide-react';

const OnboardingBenefits = () => {
  const benefits = [
    { icon: Rocket, title: 'Quick Setup', description: 'Get your seller account up and running in no time' },
    { icon: Shield, title: 'Secure Process', description: 'Your business information is safe and protected' },
    { icon: Clock, title: '24/7 Support', description: 'Round-the-clock assistance for all your queries' },
    { icon: Globe, title: 'Multi-Platform Integration', description: 'Seamlessly onboard to multiple e-commerce platforms' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Onboarding Service?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <benefit.icon className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnboardingBenefits;

