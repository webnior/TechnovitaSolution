import React from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardCheck,
  Paintbrush,
  LayoutGrid,
  Rocket,
  ArrowRight
} from 'lucide-react';

const StoreSetupProcess = () => {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "Requirements Analysis",
      description: "We analyze your business needs and target audience to create the perfect store strategy"
    },
    {
      icon: Paintbrush,
      title: "Store Design & Branding",
      description: "Custom design and branding implementation across your chosen platforms"
    },
    {
      icon: LayoutGrid,
      title: "Content & Catalog Setup",
      description: "Professional product listings, descriptions, and rich media integration"
    },
    {
      icon: Rocket,
      title: "Launch & Optimization",
      description: "Store launch with complete testing and performance optimization"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-50">
        <div className="absolute inset-0 bg-[radial-gradient(#FED7AA_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Store Setup
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 ml-2">
              Process
            </span>
          </h2>
          <p className="text-xl text-gray-700">
            A streamlined approach to launching your perfect e-commerce store
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 h-full hover:shadow-xl transition-all duration-300">
                <div className="p-4 rounded-full bg-orange-100 inline-block mb-6">
                  <step.icon className="w-8 h-8 text-orange-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-orange-600" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-orange-600 to-amber-600 
                      text-white rounded-lg py-4 px-8 font-bold 
                      hover:from-orange-700 hover:to-amber-700 
                      inline-flex items-center space-x-2"
          >
            <span>Start Your Store Setup</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default StoreSetupProcess;