import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  CheckCircle,
  Award,
  Shield,
  BookOpen,
  Clipboard,
  MessageCircle,
  Phone,
  Check,
  ChevronDown,
  Users,
  Clock,
  Settings,
  TrendingUp,
  Target,
  BarChart2,
  Globe,
  Star,
  ChevronUp,
  ArrowRight,
  Box,
  Layout,
  Zap,
  Building2,
  Package,Scale,AlertCircle,ClipboardCheck,Briefcase,ShieldCheck,HelpCircle
} from "lucide-react";
import Head from "next/head";
import Footer from "@/src/components/Footer";
import ProtectedContentWrapper from "@/src/components/ProtectedContentWrapper";
// Hero Section Component
const BrandHeroSection = () => {
    const [formData, setFormData] = useState({
      brandName: "",
      phoneNumber: "",
      countryCode: "+91",
    });
    const [status, setStatus] = useState("idle");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("submitting");
  
      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            formType: "brandDocumentation",
            ...formData,
          }),
        });
  
        if (!response.ok) throw new Error("Failed to send email");
  
        setStatus("success");
        setFormData({ brandName: "", phoneNumber: "", countryCode: "+91" });
        setTimeout(() => setStatus("idle"), 3000);
      } catch (error) {
        console.error("Error:", error);
        setStatus("error");
      }
    };
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 relative overflow-hidden">
        {/* Background pattern with responsive sizing */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(#FDBA74_1px,transparent_1px)] [background-size:16px_16px] sm:[background-size:20px_20px] opacity-30"></div>
        </div>
  
        {/* Main content container with responsive padding */}
        <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          {/* Responsive grid layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start lg:items-center">
            {/* Left column - Hero content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Responsive heading with adaptive text sizes */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Launch Your Brand
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700 block sm:inline">
                  {" "}Without the Paperwork
                </span>
              </h1>
  
              {/* Responsive paragraph text */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-2xl">
                Expert assistance with brand documentation, registry, and approval
                processes for Myntra, Ajio, Amazon, Flipkart, and more.
              </p>
  
              {/* Features grid with responsive columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Shield, text: "Brand Protection" },
                  { icon: CheckCircle, text: "Quick Approval" },
                  { icon: FileText, text: "Complete Documentation" },
                  { icon: Award, text: "Expert Support" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 text-gray-700 p-2 rounded-lg hover:bg-white/50 transition-colors"
                  >
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
  
            {/* Right column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 border border-orange-200 mt-8 lg:mt-0"
            >
              {/* Form header with responsive text */}
              <div className="mb-6 space-y-2">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  🚀 Get Free Brand Documentation Consultation
                </h2>
                <p className="text-sm sm:text-base text-gray-600">
                  Worth ₹5,000 - Limited Time Offer
                </p>
              </div>
  
              {/* Responsive form layout */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium text-sm sm:text-base">
                    Brand Name
                  </label>
                  <input
                    type="text"
                    value={formData.brandName}
                    onChange={(e) =>
                      setFormData({ ...formData, brandName: e.target.value })
                    }
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none text-sm sm:text-base"
                    placeholder="Enter your brand name"
                    required
                  />
                </div>
  
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium text-sm sm:text-base">
                    Phone Number
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={formData.countryCode}
                      onChange={(e) =>
                        setFormData({ ...formData, countryCode: e.target.value })
                      }
                      className="w-20 sm:w-24 px-2 py-2.5 sm:py-3 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none text-sm sm:text-base"
                    >
                      <option value="+91">+91</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                    </select>
                    <input
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) =>
                        setFormData({ ...formData, phoneNumber: e.target.value })
                      }
                      className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none text-sm sm:text-base"
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                </div>
  
                {/* Responsive button with adaptive sizing */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-orange-500 text-white py-3 sm:py-4 px-4 rounded-xl font-semibold hover:bg-orange-600 transition-colors duration-300 text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed mt-6"
                >
                  {status === "submitting" ? (
                    <span className="flex items-center justify-center space-x-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Submitting...</span>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center space-x-2">
                      <span>Get Free Consultation Now!</span>
                      <span className="text-xl">🎯</span>
                    </span>
                  )}
                </button>
  
                {/* Status messages with responsive text */}
                {status === "success" && (
                  <div className="text-green-600 text-center text-sm sm:text-base font-medium">
                    Thank you! We'll be in touch soon.
                  </div>
                )}
                {status === "error" && (
                  <div className="text-red-600 text-center text-sm sm:text-base font-medium">
                    Something went wrong. Please try again.
                  </div>
                )}
  
                <p className="text-xs sm:text-sm text-gray-500 text-center">
                  *Limited time offer - Only 5 spots left this week
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    );
  };
  

// Stats Section Component
const StatsSection = () => {
  const stats = [
    {
      icon: CheckCircle,
      value: "95%",
      label: "Success Rate",
      description: "Brand approvals across platforms",
    },
    {
      icon: Clock,
      value: "48hrs",
      label: "Quick Process",
      description: "Average documentation time",
    },
    {
      icon: Users,
      value: "1000+",
      label: "Brands Helped",
      description: "Across multiple platforms",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-300"
        >
          <div className="mb-4 text-orange-500">
            <stat.icon
              className="w-10 h-10 sm:w-12 sm:h-12 mx-auto"
              strokeWidth={1.5}
            />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            {stat.value}
          </h3>
          <p className="text-gray-600">{stat.label}</p>
          <p className="text-sm text-gray-500">{stat.description}</p>
        </div>
      ))}
    </motion.div>
  );
};

// Services Section Component
const ServicesSection = () => {
  const services = [
    {
      title: "Brand Documentation",
      icon: FileText,
      description:
        "Complete documentation preparation for all major e-commerce platforms",
      features: [
        "Brand registry documentation",
        "Legal compliance documents",
        "Platform-specific requirements",
        "Brand ownership proof",
        "Quality certifications",
      ],
    },
    {
      title: "Platform Registration",
      icon: Shield,
      description:
        "Seamless registration process across multiple e-commerce platforms",
      features: [
        "Amazon Brand Registry",
        "Flipkart Brand Protection",
        "Myntra brand approval",
        "Ajio seller verification",
        "Nykaa brand setup",
      ],
    },
    {
      title: "Approval Support",
      icon: Award,
      description: "End-to-end support for brand approval and verification",
      features: [
        "Application processing",
        "Document verification",
        "Follow-up handling",
        "Query resolution",
        "Approval tracking",
      ],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-orange-50 to-orange-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#FDBA74_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Comprehensive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
              {" "}
              Documentation Services
            </span>
          </h2>
          <p className="text-xl text-gray-700">
            End-to-end support for brand documentation and approval across all
            major e-commerce platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-4 rounded-full bg-orange-100 inline-block mb-6">
                <service.icon className="w-8 h-8 text-orange-500" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-6">{service.description}</p>

              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section Component with improved mobile responsiveness
const BrandDocumentationCTA = () => {
    const handleCallClick = () => {
      window.location.href = "tel:+917451073504";
    };
  
    const handleWhatsAppClick = () => {
      window.open(
        "https://wa.me/917451073504?text=Hi,%20I%20need%20help%20with%20brand%20documentation",
        "_blank"
      );
    };
  
    return (
      <section className="py-12 md:py-24 bg-gradient-to-br from-orange-50 to-orange-100 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(#FFEDD5_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
        </div>
  
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Start Selling on
                <span className="relative inline-block px-2">
                  E-commerce
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-orange-200 -rotate-2 -z-10"></span>
                </span>
                <span className="block mt-2">Platforms</span>
              </h2>
  
              <p className="text-lg md:text-xl text-gray-700 mb-12 px-4">
                Join 1000+ brands successfully selling across Amazon, Flipkart,
                Myntra, Ajio & more
              </p>
  
              {/* Stats Grid - Improved responsive layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-12">
                {[
                  {
                    icon: Shield,
                    value: "100%",
                    label: "Guaranteed Approval",
                    description: "Or Money Back",
                  },
                  {
                    icon: Clock,
                    value: "48hrs",
                    label: "Quick Process",
                    description: "Fast Documentation",
                  },
                  {
                    icon: Users,
                    value: "1000+",
                    label: "Brands",
                    description: "Successfully Registered",
                  },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -5 }}
                    className="relative group"
                  >
                    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 h-full">
                      <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-orange-600 mb-4 mx-auto" />
                      <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        {stat.value}
                      </div>
                      <div className="text-base md:text-lg font-semibold text-gray-700 mb-1">
                        {stat.label}
                      </div>
                      <div className="text-sm text-gray-600">
                        {stat.description}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
  
              {/* CTA Buttons - Improved mobile layout */}
              <div className="space-y-4 md:space-y-6 px-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCallClick}
                  className="bg-orange-600 text-white px-6 md:px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-auto mx-2 hover:bg-orange-700"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span className="text-base md:text-lg">Call: +91 7451073504</span>
                  </div>
                </motion.button>
  
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleWhatsAppClick}
                  className="bg-green-500 text-white px-6 md:px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-auto mx-2 hover:bg-green-600"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-base md:text-lg">Get Free Consultation</span>
                  </div>
                </motion.button>
  
                <p className="text-gray-600 text-xs md:text-sm mt-4">
                  Limited Time Offer • Free Consultation Worth ₹5,000 • Only 5
                  Spots Available
                </p>
              </div>
  
              {/* Trust Indicators - Improved mobile layout */}
              <div className="mt-8 md:mt-12 flex flex-col md:flex-row justify-center gap-4 md:gap-6 items-center px-4">
                {[
                  { icon: Award, text: "Documentation Experts" },
                  { icon: Shield, text: "100% Approval Rate" },
                  { icon: Clock, text: "48hr Processing" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-gray-700 bg-white px-4 py-2 rounded-lg shadow-sm">
                    <item.icon className="w-4 h-4 md:w-5 md:h-5 mr-2 text-orange-600" />
                    <span className="text-sm md:text-base">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  };
  
  // Documentation Process Section with improved responsiveness

  const DocumentationProcessSection = () => {
    // Define our process steps with all necessary information
    const steps = [
      {
        title: "Initial Consultation",
        description: "We understand your brand and requirements across different platforms",
        icon: MessageCircle,
        bgColor: "bg-orange-50",
        iconColor: "text-orange-600",
      },
      {
        title: "Document Collection",
        description: "Guide you through required documentation for each marketplace",
        icon: FileText,
        bgColor: "bg-orange-100",
        iconColor: "text-orange-700",
      },
      {
        title: "Documentation Preparation",
        description: "Prepare and organize all necessary brand documentation",
        icon: Clipboard,
        bgColor: "bg-orange-50",
        iconColor: "text-orange-600",
      },
      {
        title: "Platform Submission",
        description: "Submit documentation across selected e-commerce platforms",
        icon: ArrowRight,
        bgColor: "bg-orange-100",
        iconColor: "text-orange-700",
      },
      {
        title: "Approval Tracking",
        description: "Monitor approval process and handle any requirements",
        icon: Target,
        bgColor: "bg-orange-50",
        iconColor: "text-orange-600",
      },
    ];
  
    return (
      <section className="py-16 md:py-24 bg-white">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Our Documentation
              <span className="relative inline-block px-2">
                Process
                <div className="absolute bottom-1 left-0 w-full h-3 bg-orange-200 -z-10 -rotate-2"></div>
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-lg"
            >
              A simple yet comprehensive approach to get your brand documentation ready
            </motion.p>
          </div>
  
          {/* Process Steps Container */}
          <div className="relative">
            {/* Desktop Connection Line */}
            <div className="hidden md:block absolute top-24 left-0 w-full h-1 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200"></div>
  
            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Step Number - Desktop */}
                  <div className="hidden md:flex absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-orange-500 text-orange-500 font-bold text-xl items-center justify-center shadow-lg z-10">
                    {index + 1}
                  </div>
  
                  {/* Card Container */}
                  <div className={`relative rounded-2xl p-6 ${step.bgColor} border border-orange-100 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl`}>
                    {/* Step Number - Mobile */}
                    <div className="md:hidden absolute -top-4 -left-4 w-8 h-8 rounded-full bg-orange-500 text-white font-bold text-sm flex items-center justify-center shadow-md">
                      {index + 1}
                    </div>
  
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-full ${step.iconColor} bg-white shadow-md flex items-center justify-center mb-4 mx-auto`}>
                      <step.icon className="w-6 h-6" />
                    </div>
  
                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-center text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
  
                  {/* Mobile Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden absolute left-4 -bottom-8 h-8 w-px bg-orange-300 z-0"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
  
          {/* Bottom Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-16"
          >
            <p className="text-gray-500 text-sm">
              Average completion time: 24-48 hours • 100% Success Rate • Expert Support
            </p>
          </motion.div>
        </div>
      </section>
    );
  };
  
  const FAQSection = () => {
    const [openFaq, setOpenFaq] = useState(null);
  
    const faqs = [
      {
        icon: <FileText className="w-6 h-6 text-[#F5A841]" />,
        question: "What does your brand documentation service include for e-commerce platforms?",
        answer: "Our comprehensive brand documentation services cover all major e-commerce platforms including Amazon, Flipkart, Myntra, Ajio, Nykaa, and Meesho. We handle everything from initial document preparation to final submission, including brand authorization letters, trademark certificates, legal entity proof, and platform-specific requirements. Our service ensures proper formatting of all documents according to each platform's guidelines, significantly increasing first-time approval rates.",
        keywords: ["brand documentation services", "e-commerce platform documentation assistance"]
      },
      {
        icon: <Building2 className="w-6 h-6 text-[#F5A841]" />,
        question: "How do you assist with brand registry and approval processes across different platforms?",
        answer: "We provide end-to-end assistance for brand registry and approval across platforms. For Amazon Brand Registry, we handle trademark verification, brand representation rights, and product documentation. For Myntra and Ajio seller registration, we manage brand authorization documentation, product catalogs, and quality compliance certificates. Our process includes document verification, submission tracking, and follow-up support until final approval for platforms like Flipkart, Nykaa, and Aza Fashion.",
        keywords: ["brand registry assistance", "brand approval support", "seller registration services"]
      },
      {
        icon: <Award className="w-6 h-6 text-[#F5A841]" />,
        question: "What specific documentation is required for Myntra and Ajio brand registration?",
        answer: "For Myntra and Ajio brand registration, you'll need several key documents which we help prepare: brand authorization letters in the platform-specific format, trademark registration certificates, company incorporation documents, GST registration, product catalog with high-quality images, and quality compliance certificates. We ensure all documents meet the latest platform guidelines and format requirements to expedite the approval process.",
        keywords: ["Myntra brand documentation", "Ajio seller registration services"]
      },
      {
        icon: <Package className="w-6 h-6 text-[#F5A841]" />,
        question: "How do you handle Flipkart and Nykaa seller documentation?",
        answer: "Our Flipkart and Nykaa seller documentation service includes preparation of brand authorization letters, business registration verification, GST documentation, and product listing compliance checks. We provide specialized assistance for each platform's unique requirements, including Flipkart's Strict Quality Guidelines and Nykaa's Beauty Brand Compliance Standards. Our team ensures all documentation meets the latest platform specifications.",
        keywords: ["Flipkart brand approval guide", "Nykaa seller documentation help"]
      },
      {
        icon: <BookOpen className="w-6 h-6 text-[#F5A841]" />,
        question: "What's involved in your brand identity documentation service?",
        answer: "Our brand identity documentation service creates comprehensive brand guidelines including logo usage specifications, color palettes, typography rules, and brand voice guidelines. We prepare these materials in both digital and print-ready formats, ensuring consistency across all e-commerce platforms. This includes creating brand style guides, visual identity manuals, and corporate design templates that meet platform-specific requirements.",
        keywords: ["brand identity style guide", "corporate design manual template"]
      },
      {
        icon: <Settings className="w-6 h-6 text-[#F5A841]" />,
        question: "How do you handle brand authorization letter preparation?",
        answer: "We create platform-specific brand authorization letters following each marketplace's required format. This includes preparing letters in both digital and print formats, ensuring proper letterhead design, including all necessary legal declarations, and maintaining consistency with brand identity. We also provide templates in Word format for future use and maintain digital copies for record-keeping.",
        keywords: ["brand authorization letter format", "letter head format download in word"]
      },
      {
        icon: <Scale className="w-6 h-6 text-[#F5A841]" />,
        question: "What's your process for conducting brand audits?",
        answer: "Our brand audit process involves a comprehensive review of your current brand presence across all e-commerce platforms. We use detailed checklists to evaluate brand consistency, documentation compliance, and platform-specific requirements. This includes reviewing all brand assets, analyzing competitor positioning, and providing recommendations for improvement. We deliver a detailed brand audit report with actionable insights.",
        keywords: ["brand audit checklist", "brand audit report template"]
      },
      {
        icon: <AlertCircle className="w-6 h-6 text-[#F5A841]" />,
        question: "What support do you provide for new business name registration?",
        answer: "We assist with complete business name registration services, including availability checks, trademark searches, and registration documentation. Our team helps prepare all necessary paperwork for company registration, ensures compliance with legal requirements, and coordinates with relevant authorities. We also assist in securing business name certificates and updating this information across all e-commerce platforms.",
        keywords: ["new name for company registration", "business name certificate of registration"]
      },
      {
        icon: <CheckCircle className="w-6 h-6 text-[#F5A841]" />,
        question: "How do you ensure brand compliance across multiple e-commerce platforms?",
        answer: "We maintain updated knowledge of compliance requirements for all major platforms including Amazon, Myntra, Ajio, Flipkart, and Nykaa. Our team verifies documentation against current platform guidelines, ensures proper formatting of brand authorization letters, and validates legal documentation. We also provide brand audit checklists and maintain compliance records for future reference.",
        keywords: ["e-commerce brand compliance", "brand audit checklist"]
      },
      {
        icon: <ClipboardCheck className="w-6 h-6 text-[#F5A841]" />,
        question: "What's your step-by-step process for Amazon brand registry?",
        answer: "Our Amazon brand registry process starts with trademark verification and documentation preparation. We then assist with brand representation rights documentation, product catalog preparation, and compliance verification. We handle the entire submission process, track approval status, and provide regular updates. Our team also helps with any additional information requests from Amazon during the review process.",
        keywords: ["Amazon brand registry assistance", "step-by-step brand documentation"]
      },
      {
        icon: <Briefcase className="w-6 h-6 text-[#F5A841]" />,
        question: "How do you assist with e-commerce business startup documentation?",
        answer: "For e-commerce startups, we provide comprehensive documentation support including business registration, GST registration, brand identity development, and platform-specific setup assistance. We help prepare all necessary documentation for multiple platforms, guide you through brand approval processes, and ensure proper setup of seller accounts with required brand documentation.",
        keywords: ["e-commerce business startup documentation", "seller account setup assistance"]
      },
      {
        icon: <ShieldCheck className="w-6 h-6 text-[#F5A841]" />,
        question: "What branding project proposals do you offer?",
        answer: "Our branding project proposals cover comprehensive brand development, including visual identity creation, documentation preparation, and platform registration strategies. Each proposal includes detailed timelines, deliverables, and cost breakdowns. We customize proposals based on your specific e-commerce platform requirements and business goals.",
        keywords: ["branding project proposal template", "brand development proposal"]
      },
      {
        icon: <TrendingUp className="w-6 h-6 text-[#F5A841]" />,
        question: "How do you handle white label documentation services?",
        answer: "Our white label documentation services include customized brand identity guides, authorization letters, and compliance documentation that can be rebranded for your clients. We maintain strict confidentiality and provide all documents in editable formats. This service is particularly useful for agencies and consultants managing multiple brand registrations across e-commerce platforms.",
        keywords: ["white label file sharing", "brand identity guide"]
      },
      {
        icon: <HelpCircle className="w-6 h-6 text-[#F5A841]" />,
        question: "What are the typical timelines for different documentation services?",
        answer: "Our service timelines vary by platform and requirement: Amazon brand registry typically takes 2-3 weeks, Myntra and Ajio documentation 10-15 business days, and Flipkart and Nykaa seller documentation 1-2 weeks. Brand identity development and comprehensive documentation packages usually require 3-4 weeks. We expedite processes by ensuring all documents are properly prepared from the start.",
        keywords: ["brand documentation timeline", "approval process"]
      },
      {
        icon: <FileText className="w-6 h-6 text-[#F5A841]" />,
        question: "Do you provide ongoing brand documentation management services?",
        answer: "Yes, we offer continuous brand documentation management services including regular compliance updates, document renewals, and platform requirement monitoring. We maintain digital archives of all brand documentation, track expiration dates, and proactively handle updates. This service ensures your brand documentation remains current across all e-commerce platforms and complies with evolving requirements.",
        keywords: ["brand documentation services", "e-commerce platform documentation assistance"]
      }
    ];
  
    return (
      <section 
        className="container mx-auto px-4 py-16"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 uppercase tracking-wider">
          Brand Documentation FAQ
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
                  rounded-3xl
                  transition-all duration-300
                  outline-none focus:outline-none active:outline-none
                  ${openFaq === index 
                    ? "bg-[#FFF4E6] text-[#F5A841]" 
                    : "hover:bg-[#FFF4E6]/50"}
                `}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                style={{
                  WebkitTapHighlightColor: 'transparent',
                  boxShadow: 'none',
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
  

// Main Page Component
export default function BrandDocumentationPage() {
  return (
    <>
      <Head>
        <title>
          Brand Documentation Services for Amazon, Myntra, Ajio & More | Expert
          Assistance
        </title>
        <meta
          name="description"
          content="Get expert help with brand documentation preparation, registry, and approval processes for Myntra, Ajio, Amazon, Flipkart, Nykaa, and more. Streamline your e-commerce business today!"
        />
        <meta
          name="keywords"
          content="Brand Documentation Services, E-commerce Brand Registry, Brand Approval Support, Myntra Brand Documentation, Ajio Seller Registration, Flipkart Brand Approval, Nykaa Seller Documentation"
        />
      </Head>
      <ProtectedContentWrapper>

      <main>
        <BrandHeroSection />
        <StatsSection />
        <ServicesSection />
        <BrandDocumentationCTA />
        <DocumentationProcessSection />
        <FAQSection />        
      </main>
      <Footer />

      </ProtectedContentWrapper>
    </>
  );
}
