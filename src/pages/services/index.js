"use client";

import React,{ useState, useRef, } from "react";
import { motion ,AnimatePresence} from 'framer-motion';
import emailjs from '@emailjs/browser';
import Link from 'next/link';
import Footer from "@components/Footer";
import Head from 'next/head';
import {
  MessageCircle,
  CheckCircle,
  Plus,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Phone,
  Loader2, ArrowRight, Sparkles,
  Target, 
  TrendingUp, 
  ShoppingBag, 
  Zap,
  ChevronDown,
  ShieldCheck,
  BarChart2,
  CreditCard, 
  HelpCircle ,
  Settings,
  Upload,
  Store,
  Search,
  FileCheck,
  Headphones, 
} from "lucide-react";
import ProtectedContentWrapper from '@components/ProtectedContentWrapper'
import Breadcrumb from '@/src/components/common/Breadcrumb';

const ServiceReasons = [
    {
      icon: <CheckCircle strokeWidth={3} className="w-5 h-5" />,
      text: "Struggling with Complex Ecommerce Onboarding",
      problem: "Navigating intricate seller registration processes on Ajio, Myntra, Flipkart, and Amazon",
    },
    {
      icon: <CheckCircle strokeWidth={3} className="w-5 h-5" />,
      text: "Ineffective Product Listing Strategies",
      problem: "Difficulty in creating compelling product descriptions and optimized listings",
    },
    {
      icon: <CheckCircle strokeWidth={3} className="w-5 h-5" />,
      text: "Poor Product SEO Performance",
      problem: "Low visibility and search rankings affecting product discoverability",
    },
    {
      icon: <CheckCircle strokeWidth={3} className="w-5 h-5" />,
      text: "Inconsistent Sales and Revenue",
      problem: "Challenges in maintaining steady sales across multiple e-commerce platforms",
    },
    {
      icon: <CheckCircle strokeWidth={3} className="w-5 h-5" />,
      text: "Payment Reconciliation Nightmares",
      problem: "Complex and time-consuming financial tracking across different platforms",
    },
    {
      icon: <CheckCircle strokeWidth={3} className="w-5 h-5" />,
      text: "Limited Advertising Effectiveness",
      problem: "Inefficient product promotion and low return on advertising spend",
    }
];

const successStories = [
  {
    name: "Fashion Retail Store",
    achievement: "4x growth in 6 months",
    platform: "Multiple Marketplaces",
  },
  {
    name: "Electronics Seller",
    achievement: "₹1Cr+ monthly sales",
    platform: "Amazon & Flipkart",
  },
  {
    name: "Beauty Products Brand",
    achievement: "500+ products listed",
    platform: "Nykaa & Myntra",
  },
];

const faqs = [  {
    question: "How can you help improve my marketplace sales?",
    answer:
      "We provide comprehensive solutions including optimized listings, competitive pricing strategies, PPC campaign management, and inventory optimization.",
  },
  {
    question: "What's included in your account management service?",
    answer:
      "Our service covers daily order processing, inventory management, catalog optimization, competitor price tracking, and performance analytics.",
  },
  {
    question: "How long does it take to set up and start selling?",
    answer:
      "Typically, we can complete account setup within 3-7 business days, including documentation, verification, and initial product listings.",
  },
];



//serivce section 

const services = [
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Account Management",
    description: "Comprehensive management of your e-commerce presence across Amazon, Flipkart, Myntra, Nykaa, Ajio, FirstCry, eBay, and Alibaba.",
    highlights: ["24/7 Account Monitoring", "Inventory Management", "Order Processing"],
    link: "/services/account-management"
  },
  {
    icon: <Upload className="w-8 h-8" />,
    title: "Platform Onboarding",
    description: "Streamlined onboarding process for new e-commerce platforms with expert guidance and support throughout the journey.",
    highlights: ["Documentation Support", "Quick Setup", "Compliance Handling"],
    link: "/services/ecommerce-seller-onboarding"
  },
  {
    icon: <Store className="w-8 h-8" />,
    title: "Store Setup & Branding",
    description: "Professional store design and branding that captures your unique identity across all marketplace platforms.",
    highlights: ["Brand Store Design", "Visual Merchandising", "Content Strategy"],
    link: "/services/store-setup-and-branding-services"
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Payment Reconciliation",
    description: "Accurate tracking and reconciliation of payments across multiple e-commerce platforms for streamlined financial management.",
    highlights: ["Payment Tracking", "Dispute Resolution", "Financial Reporting"],
    link: "/services/ecommerce-payment-reconciliation"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Platform Advertising",
    description: "Strategic advertising campaigns across all major e-commerce platforms to maximize visibility and sales.",
    highlights: ["PPC Management", "Campaign Optimization", "ROI Tracking"],
    link: "/services/ecommerce-advertising"
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "Organic Growth & SEO",
    description: "Comprehensive SEO and optimization strategies to improve your store's visibility and organic rankings.",
    highlights: ["Keyword Optimization", "Content Enhancement", "Search Rankings"],
    link: "/services/seo-services-and-organic-growth-strategies"
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: "Brand Documentation",
    description: "Expert assistance with brand documentation preparation and approval processes across platforms.",
    highlights: ["Document Preparation", "Brand Registry", "Approval Support"],
    link: "/services/brand-documentation"
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "E-commerce Consultation",
    description: "Professional consultation services for all aspects of e-commerce business growth and optimization.",
    highlights: ["Strategy Planning", "Growth Consulting", "Market Analysis"],
    link: "/services/ecommerce-consultation"
  }
];
const ServiceCard = ({ service, index }) => {
  return (
    <Link href={service.link}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#F5A841]/10 hover:border-[#F5A841] relative overflow-hidden"
    >
      {/* Decorative background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FDF2E4]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.8 }}
        className="w-20 h-20 rounded-2xl bg-[#FDF2E4] flex items-center justify-center mb-6 group-hover:bg-[#F5A841]/20 transition-colors duration-300"
      >
        <div className="text-[#F5A841] group-hover:text-[#F5A841] transition-colors duration-300">
          {service.icon}
        </div>
      </motion.div>
      
      <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-[#F5A841] transition-colors duration-300">
        {service.title}
      </h3>
      
      <p className="text-gray-600 mb-6 line-clamp-3">
        {service.description}
      </p>
      
      <ul className="space-y-3">
        {service.highlights.map((highlight, i) => (
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * i }}
            key={i}
            className="flex items-center text-sm text-gray-700 group-hover:text-gray-900"
          >
            <BarChart2 className="w-4 h-4 mr-3 text-[#F5A841]" />
            {highlight}
          </motion.li>
        ))}
      </ul>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 flex items-center text-[#F5A841] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        Learn More <ArrowRight className="ml-2 w-4 h-4" />
      </motion.div>
    </motion.div>
     </Link>
  );
};

const ServicesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#FDF2E4] via-white to-[#FDF2E4]/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="inline-block">
            <motion.span
              className="inline-block text-[#F5A841] text-lg font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Our Services
            </motion.span>
          </div>
          
          <h2 className="text-5xl font-bold mb-6 text-gray-800 leading-tight">
            Comprehensive E-commerce
            <span className="text-[#F5A841]"> Solutions</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From platform onboarding to growth optimization, we provide end-to-end solutions 
            for your e-commerce success across all major marketplaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
//contact form 
const SuccessMessage = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md mx-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-blue-500" />
      <div className="text-center">
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Amazing! 🎉</h3>
        <p className="text-gray-600 mb-4">
          Your journey to e-commerce success starts now! Our experts will contact you within 24 hours.
        </p>
        <div className="text-sm text-gray-500">
          <p>✓ Personalized Growth Strategy</p>
          <p>✓ Platform-Specific Optimization</p>
          <p>✓ Revenue Acceleration Plan</p>
        </div>
      </div>
    </div>
  </div>
);
const ContactForm = () => {
  const form = useRef(null);
  const [formData, setFormData] = useState({
    businessName: '',
    businessEmail: '',
    phoneNumber: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      if (!form.current) return;

      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        }
      );

      console.log('SUCCESS!', result.text);
      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
        setFormData({
          businessName: '',
          businessEmail: '',
          phoneNumber: ''
        });
      }, 5000);
    } catch (error) {
      console.error('FAILED...', error);
      setSubmitError('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto p-4 sm:p-5 mt-2 rounded-xl shadow-lg bg-gradient-to-br from-[#FAD5A5] to-white">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          Ready to Scale Your Business? 🚀
        </h2>
        <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto">
          Join hundreds of successful sellers who transformed their e-commerce journey
        </p>
      </div>

      <form ref={form} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div className="group">
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="Business Name"
            className="w-full p-3 sm:p-4 text-sm sm:text-base rounded-lg border-2 border-gray-300 
            focus:border-[#F5A841] focus:ring-2 focus:ring-[#F5A841]/20 
            transition-all duration-300"
            required
          />
        </div>

        <div>
          <input
            type="email"
            name="businessEmail"
            value={formData.businessEmail}
            onChange={handleChange}
            placeholder="Business Email"
            className="w-full p-3 sm:p-4 text-sm sm:text-base rounded-lg border-2 border-gray-300 
            focus:border-[#F5A841] focus:ring-2 focus:ring-[#F5A841]/20 
            transition-all duration-300"
            required
          />
        </div>

        <div>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full p-3 sm:p-4 text-sm sm:text-base rounded-lg border-2 border-gray-300 
            focus:border-[#F5A841] focus:ring-2 focus:ring-[#F5A841]/20 
            transition-all duration-300"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`
            w-full p-4 sm:p-5 rounded-lg font-bold text-lg sm:text-xl
            bg-gradient-to-r from-[#F5A841] to-orange-500 
            text-white shadow-lg 
            transition-all duration-300
            hover:shadow-xl hover:scale-[1.02]
            active:scale-[0.98]
            relative overflow-hidden
            flex items-center justify-center space-x-3
            disabled:cursor-not-allowed
            disabled:opacity-50
          `}
        >
          {isSubmitting ? (
            <div className="flex items-center space-x-2">
              <Loader2 className="w-5 h-5 sm:w-6 sm:h-6 animate-spin" />
              <span>Processing...</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-base">LAUNCH YOUR SUCCESS STORY</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
            </div>
          )}
          
          <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 background-animate" />
        </button>

        {submitError && (
          <div className="text-center text-red-500 mt-2 text-sm sm:text-base">
            {submitError}
          </div>
        )}

        <div className="text-center text-xs sm:text-sm text-gray-600 mt-4">
          <p className="flex items-center justify-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            100% Secure & Confidential
          </p>
          <p className="mt-1">Join 5000+ Successful Sellers</p>
        </div>
      </form>

      {showSuccess && <SuccessMessage />}

      <style jsx>{`
        .background-animate {
          background-size: 200%;
          animation: gradient 3s ease infinite;
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

const HeroSection = () => {
  const sellerBenefits = [
    {
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6 text-[#F5A841]" />,
      text: "Platform-Specific Optimization"
    },
    {
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#F5A841]" />,
      text: "Revenue Growth Strategies"
    },
    {
      icon: <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-[#F5A841]" />,
      text: "Multi-Marketplace Management"
    }
  ];

  return (
    <section className="min-h-screen w-full overflow-x-hidden bg-white">
      <div className="container mx-auto px-4 py-8 md:py-0">
        <div className="flex min-h-screen flex-col gap-8 md:grid md:grid-cols-2 md:items-center">
          {/* Left Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 px-2 md:px-4"
          >
            <div className="overflow-hidden">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Unlock Your <span className="text-[#F5A841]">E-commerce Potential</span>
                <br /> Across All Platforms
              </h1>
            </div>

            <div className="bg-[#FFF4E6] p-4 sm:p-6 rounded-xl shadow-lg">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Zap className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6 text-[#F5A841]" />
                Dominate Multiple Marketplaces
              </h2>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                From Flipkart to Amazon, Myntra to Ajio - we transform your online selling game with data-driven strategies and expert management.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {sellerBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-white p-2 sm:p-3 rounded-lg shadow-md"
                  >
                    {benefit.icon}
                    <span className="text-xs sm:text-sm font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = 'tel:+917451073504'}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white
                  px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-lg hover:shadow-xl 
                  transition-all duration-300 w-full sm:w-auto text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-semibold">Instant Call</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = 'https://wa.me/917451073504?text=hi%20i%20want%20to%20know%20more%20about%20ecommerce%20services'}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white
                  px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-lg hover:shadow-xl 
                  transition-all duration-300 w-full sm:w-auto text-sm sm:text-base"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-semibold">WhatsApp Connect</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center h-full px-2 md:px-4"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};


const ServiceSection = () => {
    const cardVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut"
        }
      },
      hover: {
        scale: 1.03,
        boxShadow: "0 10px 25px rgba(245, 168, 65, 0.3)",
        transition: {
          duration: 0.3
        }
      }
    };
  
    return (
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 uppercase text-gray-800">
          OUR SERVICES IS FOR YOU IF YOU
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {ServiceReasons.slice(0, 3).map((reason, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                variants={cardVariants}
                className="flex items-center space-x-4 p-5 rounded-xl 
                bg-white border border-[#F5A841]/10 
                transition-all duration-300 
                hover:border-[#F5A841]/30"
                style={{
                  boxShadow: "6px 6px 19px -2px rgba(245, 168, 65, .2)"
                }}
              >
                <div className="w-10 h-10 rounded-full bg-[#F5A841] 
                  flex items-center justify-center text-white 
                  shadow-md shadow-[#F5A841]/50">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">{reason.text}</h3>
                  <p className="text-sm text-gray-600 mt-1">{reason.problem}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="space-y-6">
            {ServiceReasons.slice(3).map((reason, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                variants={cardVariants}
                className="flex items-center space-x-4 p-5 rounded-xl 
                bg-white border border-[#F5A841]/10 
                transition-all duration-300 
                hover:border-[#F5A841]/30"
                style={{
                  boxShadow: "6px 6px 19px -2px rgba(245, 168, 65, .2)"
                }}
              >
                <div className="w-10 h-10 rounded-full bg-[#F5A841] 
                  flex items-center justify-center text-white 
                  shadow-md shadow-[#F5A841]/50">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">{reason.text}</h3>
                  <p className="text-sm text-gray-600 mt-1">{reason.problem}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
};

//cta

const CTASection = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-5 h-5 text-[#F5A841]" />,
      text: "Average 3x Revenue Growth"
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#F5A841]" />,
      text: "100% Account Safety"
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-[#F5A841]" />,
      text: "24/7 Expert Support"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#FDF2E4] to-white">
      {/* Animated background dots */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(#F5A841 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }} 
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#F5A841] to-orange-600 bg-clip-text text-transparent">
            Stop Struggling with Your E-commerce Business
          </h2>
          
          <p className="text-xl text-gray-700 mb-8">
            Join 5000+ sellers who transformed their business with our proven growth strategies
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-4 rounded-xl shadow-lg flex items-center justify-center gap-3"
              >
                {benefit.icon}
                <span className="font-medium text-gray-800">{benefit.text}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href="tel:+917451073504"
              className="inline-flex items-center justify-center gap-3 
                bg-gradient-to-r from-red-500 to-red-600 
                text-white text-xl font-bold
                px-8 py-4 rounded-xl
                shadow-lg shadow-red-500/30
                hover:shadow-xl hover:shadow-red-500/40
                transform hover:scale-105
                transition-all duration-300
                group"
            >
              <Phone className="w-6 h-6 animate-bounce" />
              <span>Get Free Business Analysis Call</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>

            <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-[#F5A841]" />
              Limited Time: Free 30-Min Strategy Session Worth ₹5,000
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F5A841] via-orange-500 to-[#F5A841] background-animate" />
    </section>
  );
};
//faq
const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      icon: <TrendingUp className="w-6 h-6 text-[#F5A841]" />,
      question: "How can you guarantee sales growth across multiple e-commerce platforms?",
      answer: "We use a data-driven approach combining platform-specific optimization, strategic product positioning, pricing analytics, and targeted advertising. Our team conducts in-depth market research, competitor analysis, and implements customized growth strategies tailored to your product category and target audience.",
      keywords: ["sales growth", "e-commerce optimization", "multi-platform strategy"]
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#F5A841]" />,
      question: "What platforms do you help sellers list and manage their products on?",
      answer: "We specialize in account management and product listing optimization for major Indian e-commerce platforms including Amazon, Flipkart, Myntra, Ajio, Nykaa, FirstCry, and other emerging marketplaces. Our comprehensive service ensures seamless onboarding, compliance, and performance across these channels.",
      keywords: ["e-commerce platforms", "product listing", "marketplace management"]
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-[#F5A841]" />,
      question: "How do you optimize product listings for better visibility?",
      answer: "Our SEO-focused approach includes keyword-rich titles, compelling product descriptions, high-quality images, competitive pricing strategies, and backend search term optimization. We conduct continuous A/B testing and use advanced analytics to improve product discoverability and conversion rates.",
      keywords: ["SEO optimization", "product listing", "e-commerce visibility"]
    },
    {
      icon: <CreditCard className="w-6 h-6 text-[#F5A841]" />,
      question: "What are your pricing and service packages?",
      answer: "We offer flexible, transparent pricing models tailored to your business size and requirements. Our packages range from basic listing and account management to comprehensive growth acceleration services. We provide custom quotes after understanding your specific business needs, with no hidden charges.",
      keywords: ["e-commerce service packages", "pricing", "seller services"]
    },
    {
      icon: <HelpCircle className="w-6 h-6 text-[#F5A841]" />,
      question: "How quickly can you help me start selling on new platforms?",
      answer: "Our streamlined onboarding process typically takes 10-15 business days. This includes account setup, documentation verification, initial product uploads, and preliminary optimization. We provide end-to-end support to ensure a smooth and rapid market entry.",
      keywords: ["e-commerce onboarding", "marketplace entry", "seller support"]
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#F5A841]" />,
      question: "Do you provide ongoing performance analytics and reporting?",
      answer: "Absolutely! We offer comprehensive monthly performance reports including sales trends, conversion rates, inventory insights, competitor benchmarking, and actionable recommendations. Our real-time dashboard gives you complete visibility into your e-commerce performance.",
      keywords: ["e-commerce analytics", "performance reporting", "sales insights"]
    }
  ];

  return (
    <section 
      className="container mx-auto px-4 py-16 "
      style={{ fontFamily: 'Montserrat, sans-serif' }}
    >
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 uppercase tracking-wider">
        Seller's FAQ
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`
              rounded-3xl overflow-hidden 
              transition-all duration-300 
              border-2 
              ${openFaq === index 
                ? "border-[#F5A841] bg-gradient-to-br from-[#FFF4E6] to-[white]" 
                : "border-[#F5A841]/30 bg-white"}
              relative
            `}
          >
             <button
              className={`
                w-full p-5 flex items-center justify-between text-left
                rounded-3xl  // Added rounded-3xl to match container
                transition-all duration-300
                outline-none focus:outline-none active:outline-none
                ${openFaq === index 
                  ? "bg-[#FFF4E6] text-[#F5A841]" 
                  : "hover:bg-[#FFF4E6]/50"}
              `}
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
              style={{
                WebkitTapHighlightColor: 'transparent', // Remove tap highlight on mobile
                boxShadow: 'none', // Remove any default box shadow
              }}
            >
              <div className="flex items-center space-x-4">
                {React.cloneElement(faq.icon, {
                  className: `w-6 h-6 ${openFaq === index ? "text-[#F5A841]" : "text-gray-500"}`
                })}
                <span className={`
                  font-semibold text-lg 
                  ${openFaq === index ? "text-[#F5A841]" : "text-gray-800"}
                `}>
                  {faq.question}
                </span>
              </div>
              <ChevronDown 
                className={`
                  w-6 h-6 
                  transform transition-transform 
                  ${openFaq === index 
                    ? "rotate-180 text-[#F5A841]" 
                    : "text-gray-500"}
                `}
              />
            </button>

            {openFaq === index && (
              <div 
                className="p-5 bg-[#FFF4E6] border-t-2 border-[#F5A841]/20"
              >
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const CTASection2 = () => (
  <section
    className="text-center py-16"
    style={{ backgroundColor: "#FDF2E4" }}
  >
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4 font-serif">
        Do the above lines resonate with YOU?
      </h1>
      <p className="mb-6 text-gray-700">
        From marketplace onboarding challenges to daily account management, 
        we're your trusted partner for navigating Myntra, AJIO, Nykaa, FirstCry, 
        and beyond. Let our experts handle the complexities while you focus on growing your brand.
      </p>
      <div className="flex justify-center">
      <motion.button
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  whileHover={{ 
    scale: 1.02,
    transition: { duration: 0.2 }
  }}
  whileTap={{ scale: 0.98 }}
  onClick={() => window.location.href = 'tel:+917451073504'}
  className={`
    px-12 py-5 rounded-lg font-bold text-xl
    bg-gradient-to-r from-[#F5A841] to-orange-500 
    text-white shadow-lg 
    transition-all duration-300
    hover:shadow-xl
    relative overflow-hidden
    flex items-center justify-center space-x-3
  `}
>
  <Sparkles className="w-6 h-6" />
  <span>START YOUR GROWTH JOURNEY</span>
  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
  
  {/* Animated gradient border */}
  <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 background-animate" />
</motion.button>
      </div>
    </div>
  </section>
);


//footer
<Footer/>




export default function TechnovitaSellerPage() {
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [openFaq, setOpenFaq] = useState(null);

  const handlePlatformToggle = (platform) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <>
   
     <Head>
  <title>Ecommerce Services: Account Creation, Account Management & Branding | Technovita Solution</title>
  <meta 
    name="description" 
    content="Expert ecommerce services: marketplace account management, store setup, payment reconciliation, onboarding assistance for Myntra/Ajio/Nykaa, branding & paid advertising. Transform your online business with Technovita Solutions." 
  />
  <meta 
    name="keywords" 
    content="ecommerce account management, payment reconciliation services, store setup assistance, marketplace onboarding, Myntra seller services, Ajio seller services, Nykaa seller services, paid advertising management, ecommerce branding solutions, marketplace integration, Technovita Solutions, ecommerce consulting, seller account setup, multichannel selling" 
  />
   <meta name="robots" content="index, follow" />
 

 <meta property="og:title" content="Ecommerce Services: Account Creation, Account Management & Branding | Technovita Solution" />
 <meta property="og:description" content="Expert ecommerce services: marketplace account management, store setup, payment reconciliation, onboarding assistance for Myntra/Ajio/Nykaa, branding & paid advertising. Transform your online business with Technovita Solutions" />
 <meta property="og:type" content="website" />
 <meta property="og:locale" content="en_IN" />
 

 <meta name="twitter:card" content="summary_large_image" />
 <meta name="twitter:title" content="Ecommerce Services: Account Creation, Account Management & Branding | Technovita Solution" />
 <meta name="twitter:description" content="Expert ecommerce services: marketplace account management, store setup, payment reconciliation, onboarding assistance for Myntra/Ajio/Nykaa, branding & paid advertising. Transform your online business with Technovita Solutions"/>
 
 
 <meta name="geo.region" content="IN" />
 <meta name="geo.placename" content="India" />
 <link rel="canonical" href="https://www.technovitasolution.in/services/technovita-ecommerce-seller-services" />
 

</Head>
 
          <ProtectedContentWrapper>
        <Breadcrumb
          items={[
            { name: 'Services', href: '/services' }
          ]}
        /><main className="bg-white">
    
    <HeroSection/>

{/* serivices section  */}
<ServicesSection/>
{/* Call to action  */}
<CTASection/>
      {/* Services Reasons Section */}
      <ServiceSection />

      {/* Call to Action Section */}
      <CTASection2/>

      {/* Success Stories Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Seller Success Stories
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg transition-all duration-300 
              hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-[#F5A841]">
                {story.name}
              </h3>
              <p className="text-gray-600">{story.achievement}</p>
              <p className="text-sm text-gray-500">{story.platform}</p>
            </div>
          ))}
        </div>
      </section>


      {/* No Bullshit Section */}
      <section
      className="text-center py-12 text-white relative overflow-hidden"
      style={{
        backgroundColor: "black",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      {/* Background Subtle Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#4EBCD5 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Bold Messaging */}
        <div className="text-[#ffffff] text-3xl md:text-4xl font-extrabold mb-10 space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="tracking-wider uppercase"
          >
            NO BULLSHIT
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="tracking-wider uppercase"
          >
            NO FAALTU GYAAN
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="tracking-wider uppercase"
          >
            NO TIME WASTE
          </motion.div>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white mb-8 text-lg max-w-2xl mx-auto"
        >
          We deliver real results, not empty promises. Straight talk, proven
          strategies, and tangible growth.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.a
          href="tel:+917451073504"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="block w-[60%] md:w-[65%] max-w-[800px] mx-auto 
            bg-red-500 text-white py-4 rounded-lg 
            hover:bg-red-600 transition-all duration-300 
            transform hover:scale-105 shadow-2xl 
            text-lg md:text-xl font-bold tracking-wider 
            flex items-center justify-center gap-4 
            group"
        >
          <Phone className="w-6 h-6 transition-transform group-hover:rotate-12" />
          UNLOCK YOUR E-COMMERCE POTENTIAL NOW!
        </motion.a>
      </div>

      {/* Subtle Animated Overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r 
          from-[#4EBCD5] via-red-500 to-[#4EBCD5] animate-pulse"
      />
    </section>

      {/* FAQ Section */}
     <FAQSection/>

      {/* Footer */}
    </main>
      <Footer/>
     </ProtectedContentWrapper>
     </>
  );
}
