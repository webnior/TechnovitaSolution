import React from 'react';
import { motion } from 'framer-motion';
import { Clipboard, UserCheck, BarChart, ShoppingBag } from 'lucide-react';

const SellerOnboardingProcess = () => {
  const steps = [
    { icon: Clipboard, title: 'Register', description: 'Sign up and provide basic business information' },
    { icon: UserCheck, title: 'Verify', description: 'Complete the verification process for your seller account' },
    { icon: ShoppingBag, title: 'List Products', description: 'Add your products to the marketplace catalog' },
    { icon: BarChart, title: 'Start Selling', description: 'Manage orders and grow your online business' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Seller Onboarding Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-orange-50 rounded-lg p-6 text-center"
            >
              <step.icon className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SellerOnboardingProcess;

