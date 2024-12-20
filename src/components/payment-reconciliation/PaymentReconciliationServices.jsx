import React from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, BarChart2, Clock, DollarSign } from 'lucide-react';

const PaymentReconciliationServices = () => {
  const services = [
    {
      platform: "Amazon",
      features: [
        "Automated settlement reconciliation for Amazon payments",
        "Real-time marketplace fee validation",
        "Return and refund tracking automation",
        "FBA inventory reconciliation",
        "Advanced Amazon fee structure analysis"
      ]
    },
    {
      platform: "Flipkart",
      features: [
        "Complete payment cycle monitoring",
        "Automated commission reconciliation",
        "Real-time order status tracking",
        "Returns and cancellation management",
        "Detailed settlement analysis"
      ]
    },
    {
      platform: "Meesho",
      features: [
        "End-to-end payment tracking",
        "Automated marketplace reconciliation",
        "Commission structure validation",
        "Return payment monitoring",
        "Real-time settlement updates"
      ]
    },
    {
      platform: "Myntra",
      features: [
        "Comprehensive payment reconciliation",
        "Automated fee structure analysis",
        "Return and exchange tracking",
        "Real-time payment monitoring",
        "Detailed financial reporting"
      ]
    },
    {
      platform: "Multi-Platform",
      features: [
        "Unified dashboard for all platforms",
        "Cross-platform payment reconciliation",
        "Consolidated reporting system",
        "Centralized dispute management",
        "Integrated analytics dashboard"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Platform-Specific E-commerce Payment Reconciliation Solutions
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive payment reconciliation services tailored for every major e-commerce platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.platform}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-6">
                {service.platform === "Multi-Platform" ? (
                  <BarChart2 className="w-8 h-8 text-orange-600" />
                ) : (
                  <Shield className="w-8 h-8 text-orange-600" />
                )}
                <h3 className="text-2xl font-bold text-gray-900">
                  {service.platform} Reconciliation
                </h3>
              </div>

              <ul className="space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <button className="w-full bg-orange-50 text-orange-600 py-3 rounded-lg font-semibold hover:bg-orange-100 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Looking for a custom payment reconciliation solution?
          </p>
          <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200">
            Contact Our Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default PaymentReconciliationServices;