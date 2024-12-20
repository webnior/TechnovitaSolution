import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const PaymentReconciliationFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is payment reconciliation in e-commerce?",
      answer: "Payment reconciliation in e-commerce is the process of matching incoming payments with corresponding orders and transactions across multiple platforms. Our automated payment reconciliation software ensures accurate tracking and verification of all financial transactions, reducing manual effort and errors."
    },
    {
      question: "How does automated payment reconciliation work?",
      answer: "Automated payment reconciliation software automatically matches transaction data from multiple sources, including your e-commerce platforms, payment gateways, and bank statements. It uses advanced algorithms to identify discrepancies and ensure accurate reconciliation of payments."
    },
    {
      question: "What are the benefits of using payment reconciliation software?",
      answer: "E-commerce payment reconciliation software offers numerous benefits including reduced manual effort, improved accuracy, real-time transaction monitoring, automated matching, detailed reporting, and better financial control. It helps prevent revenue leakage and ensures compliance."
    },
    {
      question: "Which e-commerce platforms do you support?",
      answer: "Our payment reconciliation services support all major e-commerce platforms including Amazon, Flipkart, Meesho, Myntra, Nykaa, and AJIO. We offer seamless integration with multiple platforms for comprehensive reconciliation solutions."
    },
    {
      question: "How accurate is your payment reconciliation process?",
      answer: "Our automated payment reconciliation software achieves 99.9% accuracy in matching and reconciling transactions. The system uses advanced algorithms to ensure precise matching of payments across all your e-commerce channels."
    },
    {
      question: "What is the difference between manual and automated reconciliation?",
      answer: "Manual reconciliation involves time-consuming spreadsheet work and is prone to errors. Automated reconciliation software streamlines the entire process, offering real-time tracking, automatic matching, and comprehensive reporting with minimal human intervention."
    },
    {
      question: "How does your software handle payment discrepancies?",
      answer: "Our e-commerce payment reconciliation software automatically flags discrepancies, generates detailed reports, and provides tools for investigating and resolving payment issues. It maintains a complete audit trail for all reconciliation activities."
    },
    {
      question: "Can I reconcile payments from multiple payment gateways?",
      answer: "Yes, our payment reconciliation services support multiple payment gateways and payment methods. The software consolidates data from all sources for comprehensive reconciliation of payments across your e-commerce operations."
    },
    {
      question: "How long does it take to implement your reconciliation software?",
      answer: "Implementation typically takes 1-2 weeks, depending on your e-commerce setup. Our team provides complete support during the integration process to ensure smooth implementation of the payment reconciliation software."
    },
    {
      question: "What reports does your reconciliation software generate?",
      answer: "Our software generates comprehensive reports including daily reconciliation summaries, discrepancy reports, platform-wise reconciliation status, payment aging analysis, and custom reports tailored to your business needs."
    },
    {
      question: "How secure is your payment reconciliation software?",
      answer: "Our payment reconciliation software implements bank-grade security measures, including encrypted data transmission, secure access controls, and regular security audits to protect your financial data."
    },
    {
      question: "Do you offer integration with accounting software?",
      answer: "Yes, our payment reconciliation software integrates with major accounting platforms, enabling seamless data flow and automated posting of reconciled transactions to your accounting system."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 technical support, dedicated account managers, and comprehensive training for your team. Our experts are always available to help with any reconciliation-related queries or issues."
    },
    {
      question: "Can I try your reconciliation software before purchasing?",
      answer: "Yes, we offer a free trial period for our payment reconciliation software. During this period, you can test all features and evaluate how our solution fits your e-commerce business needs."
    },
    {
      question: "What makes your payment reconciliation services unique?",
      answer: "Our payment reconciliation software stands out with its 99.9% accuracy, real-time processing, multi-platform support, and advanced analytics capabilities. We offer comprehensive e-commerce payment reconciliation solutions backed by expert support and continuous innovation."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Frequently Asked Questions About Payment Reconciliation
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to know about our e-commerce payment reconciliation services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={false}
              animate={{ backgroundColor: openIndex === index ? 'rgb(255, 255, 255)' : 'rgb(249, 250, 251)' }}
              className="rounded-lg shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white transition-colors duration-200 rounded-lg"
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </motion.div>
              </button>
              
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions about our payment reconciliation software?
          </p>
          <button className="mt-4 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-200">
            Contact Our Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default PaymentReconciliationFAQ;