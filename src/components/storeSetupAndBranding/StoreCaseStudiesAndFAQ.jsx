import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Star } from 'lucide-react';

const CaseStudiesAndFAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const caseStudies = [
    {
      title: "Fashion Brand Multi-Platform Success",
      platform: "Amazon, Flipkart, Myntra",
      results: "300% growth in 6 months",
      description: "Helped a fashion brand establish presence across multiple platforms with consistent branding and optimized listings.",
      rating: 4.8
    },
    {
      title: "Beauty Store Digital Transformation",
      platform: "Nykaa, Amazon",
      results: "200% increase in conversion rate",
      description: "Transformed a traditional beauty retailer into a successful online seller with professional store setup and branding.",
      rating: 4.9
    },
    {
      title: "Lifestyle Brand Market Expansion",
      platform: "Meesho, Ajio",
      results: "5x revenue growth",
      description: "Enabled a lifestyle brand to expand their market reach through strategic platform integration and optimization.",
      rating: 4.7
    }
  ];
  const faqs = [
    {
      question: "What platforms are covered in your ecommerce store setup services?",
      answer: "We provide comprehensive store setup services across all major ecommerce platforms including: Amazon seller store setup, Flipkart seller store assistance, Nykaa seller store design, Myntra seller store setup, Ajio seller store creation, Aza Fashion seller store development, and Meesho seller store setup. Our expertise ensures a professional presence across any platform you choose.",
      category: "Platform Setup"
    },
    {
      question: "How do you approach professional ecommerce store development?",
      answer: "Our professional ecommerce store development process encompasses complete storefront design, brand identity creation, product catalog optimization, and platform-specific customization. We focus on creating distinctive storefronts that reflect your brand while maximizing conversion rates through user-friendly designs.",
      category: "Development"
    },
    {
      question: "What makes your multi-platform ecommerce store setup unique?",
      answer: "Our multi-platform approach ensures consistent branding across all marketplaces while optimizing for each platform's specific requirements. We handle complex integration challenges, maintain brand consistency, and implement platform-specific best practices for optimal performance.",
      category: "Integration"
    },
    {
      question: "What seller support services do you provide?",
      answer: "Our seller support services include ongoing store optimization, performance monitoring, platform compliance management, and technical assistance. We provide continuous support to ensure your store maintains peak performance and stays updated with platform changes.",
      category: "Support"
    },
    {
      question: "How do you handle ecommerce business branding strategies?",
      answer: "We develop comprehensive branding strategies that include visual identity creation, brand messaging, content strategy, and consistent brand implementation across all platforms. Our approach ensures your brand stands out while maintaining professionalism and market relevance.",
      category: "Branding"
    },
    {
      question: "What does your online store optimization service include?",
      answer: "Our optimization services cover search ranking improvement, conversion rate optimization, performance analysis, and continuous A/B testing. We focus on data-driven improvements to maximize your store's visibility and sales performance.",
      category: "Optimization"
    },
    {
      question: "What ecommerce seller consultancy services do you offer?",
      answer: "Our consultancy services provide strategic guidance on market analysis, platform selection, growth planning, and performance optimization. We help sellers make informed decisions about their ecommerce presence and future growth strategies.",
      category: "Consultancy"
    },
    {
      question: "How do you manage digital branding for online sellers?",
      answer: "We create comprehensive digital branding packages including logo design, brand guidelines, visual identity systems, product photography, and consistent messaging across all platforms. Our approach ensures your brand maintains a professional and cohesive presence online.",
      category: "Digital Branding"
    }
  ];

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.2
      }
    }
  };

  const faqVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="space-y-8 max-w-6xl mx-auto p-6"
      initial="hidden"
      animate="visible"
    >
      {/* Case Studies Section */}
      <section className="mb-12 text-center">
        <motion.h2 
          className="inline-block text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent"
          variants={titleVariants}
        >
          Success Stories
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div 
              key={index}
              custom={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
            >
              <motion.div 
                className="mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                <div className="flex items-center gap-1">
                  <motion.div
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                  <span className="text-sm">{study.rating}/5.0</span>
                </div>
              </motion.div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Platform: {study.platform}</p>
                <motion.p 
                  className="font-semibold text-green-600 mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  {study.results}
                </motion.p>
                <p className="text-sm">{study.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="text-center">
        <motion.h2 
          className="inline-block text-4xl font-bold mb-8 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent"
          variants={titleVariants}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div 
          className="space-y-6 text-left max-w-4xl mx-auto"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              custom={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
            >
              <motion.div 
                className="p-5 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="text-xs font-medium text-orange-500 mb-2 block">
                      {faq.category}
                    </span>
                    <h3 className="text-lg text-gray-800 leading-tight">
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-1"
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                animate={openFaq === index ? "visible" : "hidden"}
                variants={faqVariants}
              >
                <div className="px-5 pb-5 pt-0">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
};

export default CaseStudiesAndFAQ;