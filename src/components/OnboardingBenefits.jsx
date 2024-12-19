import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  ShieldCheck, 
  Clock, 
  Globe,
  CheckCircle,
  Users,
  BarChart2,
  FileCheck
} from 'lucide-react';

const OnboardingBenefits = () => {
  const benefits = [
    {
      icon: Rocket,
      title: "Rapid Platform Integration",
      description: "Expert assistance in Amazon seller account creation, Flipkart seller account creation, and seamless onboarding across multiple e-commerce platforms.",
      features: [
        "Quick seller account setup",
        "Streamlined documentation process",
        "Multi-platform integration support"
      ]
    },
    {
      icon: ShieldCheck,
      title: "Secure & Compliant Process",
      description: "Complete seller onboarding service with secure verification for Myntra seller account creation, Meesho seller account creation, and more.",
      features: [
        "Verified account creation",
        "Compliance management",
        "Data security protocols"
      ]
    },
    {
      icon: Users,
      title: "Dedicated Support Team",
      description: "Professional seller onboarding specialists for Amazon seller onboarding, Flipkart seller onboarding, and other marketplace integrations.",
      features: [
        "24/7 expert assistance",
        "Platform-specific guidance",
        "Ongoing support services"
      ]
    },
    {
      icon: BarChart2,
      title: "Growth-Focused Setup",
      description: "Comprehensive seller account creation services optimized for business growth on Amazon, Flipkart, Myntra, and other leading platforms.",
      features: [
        "Performance optimization",
        "Business growth strategy",
        "Market expansion support"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-50">
        <div className="absolute inset-0 bg-[radial-gradient(#FED7AA_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Choose Our 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 ml-2">
              Seller Onboarding Services
            </span>
          </h2>
          <p className="text-xl text-gray-700">
            Comprehensive e-commerce seller account creation and onboarding solutions for maximum business growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="p-4 rounded-full bg-orange-100 inline-block mb-6">
                <benefit.icon className="w-12 h-12 text-orange-600" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-700 mb-6">{benefit.description}</p>
              
              <ul className="space-y-3">
                {benefit.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional SEO Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-gray-700 mb-6">
            From Amazon seller account creation documents to Flipkart seller account requirements, our expert team handles every aspect of your e-commerce journey. Get started with professional seller onboarding services today.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OnboardingBenefits;