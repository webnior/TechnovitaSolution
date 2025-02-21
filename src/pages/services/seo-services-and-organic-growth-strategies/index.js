import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  BarChart2,
  TrendingUp,
  Target,
  Settings,
  LineChart,
  Award,
  Zap,
  Star,
  Layout,
  FileText,
  Globe,
  MessageCircle,
  Phone,
  ChevronDown,
  ChevronUp,
  Check,
  ArrowUp,
  Layers,
  Maximize2,
  Share2,
  Database,
  Box,Clock,Users,Headphones,BarChart
} from 'lucide-react';
import Head from 'next/head';
import OrganicGrowthSeoServices from '@/src/components/organicSeo/OrganicGrowthSeoServices'
import Footer from '@/src/components/Footer';
import ProtectedContentWrapper from '@/src/components/ProtectedContentWrapper';
import Breadcrumb from '@/src/components/common/Breadcrumb';

const SeoHeroSection = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    phoneNumber: '',
    countryCode: '+91',
  });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'seoServices',
          ...formData
        }),
      });

      if (!response.ok) throw new Error('Failed to send email');
      
      setStatus('success');
      setFormData({ companyName: '', phoneNumber: '', countryCode: '+91' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(#FDBA74_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Boost Your E-commerce
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-800"> Organic Growth</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
              Expert SEO optimization for Amazon, Flipkart, Myntra, and other e-commerce platforms. 
              Drive organic traffic and increase visibility with data-driven strategies.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Globe, text: "Platform-Optimized SEO" },
                { icon: TrendingUp, text: "Organic Traffic Growth" },
                { icon: Search, text: "Keyword Optimization" },
                { icon: BarChart2, text: "Performance Analytics" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-700">
                  <item.icon className="w-5 h-5 text-orange-600" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-orange-200"
          >
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                🚀 Get Free SEO Audit
              </h2>
              <p className="text-gray-600">Worth ₹15,000 - Limited Time Offer</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Company Name</label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                  placeholder="Enter your company name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <div className="flex gap-2">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                    className="w-24 px-2 py-3 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                  </select>
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className="flex-1 px-4 py-3 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                    placeholder="Enter phone number"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-red-600 text-white py-2 sm:py-3 md:py-4 px-4 rounded-xl font-semibold hover:bg-red-700 transition-colors duration-300 text-base sm:text-lg md:text-xl shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <span className="flex items-center justify-center space-x-2">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span className="text-sm sm:text-base">Submitting...</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center space-x-2">
                    <span>Get Your Free SEO Audit Now!</span>
                    <span className="text-lg sm:text-xl">🎯</span>
                  </span>
                )}
              </button>

              {status === 'success' && (
                <div className="text-green-600 text-center font-medium">
                  Thank you! We'll be in touch soon.
                </div>
              )}
              {status === 'error' && (
                <div className="text-red-600 text-center font-medium">
                  Something went wrong. Please try again.
                </div>
              )}

              <p className="text-sm text-gray-500 text-center">
                *Limited time offer - Only 5 spots left this week
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};



const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "300%",
      label: "Average Organic Growth",
      description: "Increase in organic traffic"
    },
    {
      icon: BarChart2,
      value: "85%",
      label: "Ranking Improvement",
      description: "Better search positions"
    },
    {
      icon: Target,
      value: "9+",
      label: "E-commerce Platforms",
      description: "Specialized optimization"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-5"
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-300"
        >
          <div className="mb-4 text-orange-600">
            <stat.icon className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" strokeWidth={1.5} />
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

const ServicesSection = () => {
  const services = [
    {
      title: "Platform-Specific SEO",
      icon: Globe,
      description: "Tailored SEO strategies for Amazon, Flipkart, Myntra, and other e-commerce platforms",
      features: [
        "Platform-specific keyword optimization",
        "Product listing optimization",
        "Category page optimization",
        "Search ranking improvement",
        "Content enhancement strategies"
      ]
    },
    {
      title: "Technical SEO",
      icon: Settings,
      description: "Comprehensive technical optimization for e-commerce success",
      features: [
        "Site structure optimization",
        "Schema markup implementation",
        "Mobile optimization",
        "Page speed optimization",
        "Technical audit & fixes"
      ]
    },
    {
      title: "Content Optimization",
      icon: FileText,
      description: "Strategic content enhancement for better visibility and conversions",
      features: [
        "Product description optimization",
        "Category content enhancement",
        "Image optimization",
        "A+ content creation",
        "Brand story optimization"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-orange-50 to-orange-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#FED7AA_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Complete E-commerce
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-800"> SEO Solutions</span>
          </h2>
          <p className="text-xl text-gray-700">
            Comprehensive SEO strategies to boost your e-commerce presence and organic growth
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
                <service.icon className="w-8 h-8 text-orange-600" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-6">{service.description}</p>

              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-orange-600" />
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

//cta
const SeoServicesCTA = () => {
  const handleCallClick = () => {
    window.location.href = "tel:+917451073504";
  };

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/917451073504?text=Hi,%20I%20am%20interested%20in%20getting%20a%20free%20SEO%20audit",
      "_blank"
    );
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(#FDBA74_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
              Boost Your
              <span className="relative">
                <span className="relative z-10"> Organic Rankings</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-orange-200 -rotate-2"></span>
              </span>
            </h2>

            <p className="text-xl text-gray-700 mb-12">
              Join 500+ e-commerce brands achieving exceptional organic growth across Amazon, Flipkart, Myntra & more
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Target,
                  value: "385%",
                  label: "Organic Traffic",
                  description: "Average Growth",
                },
                {
                  icon: TrendingUp,
                  value: "92%",
                  label: "Visibility Boost",
                  description: "In Search Rankings",
                },
                {
                  icon: Users,
                  value: "4X",
                  label: "Conversion",
                  description: "Rate Improvement",
                },
              ].map((stat) => (
                <div key={stat.label} className="relative group">
                  <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                    <stat.icon className="w-10 h-10 text-orange-600 mb-4 mx-auto" />
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-lg font-semibold text-gray-700 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="space-y-6">
              {/* Call Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCallClick}
                className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-auto mx-2"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Call Now: +91 7451073504</span>
                </div>
              </motion.button>

              {/* WhatsApp Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsAppClick}
                className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-auto mx-2"
              >
                <div className="flex items-center justify-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>Get Free SEO Audit</span>
                </div>
              </motion.button>

              <p className="text-gray-600 text-sm">
                Limited Time Offer • Free SEO Audit Worth ₹15,000 • Only 5 Spots Available
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 items-center">
              <div className="flex items-center text-gray-700">
                <Award className="w-5 h-5 mr-2" />
                <span>SEO Experts</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Layout className="w-5 h-5 mr-2" />
                <span>All E-commerce Platforms</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Headphones className="w-5 h-5 mr-2" />
                <span>24/7 Support</span>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-8 text-gray-700">
              <p>For immediate SEO consultation, contact us:</p>
              <a
                href="tel:+917451073504"
                className="text-gray-900 font-semibold hover:underline"
              >
                +91 7451073504
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

//seo content section
const SEOContentSection = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#BBF7D0_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-10 relative overflow-hidden">
          {/* Subtle Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 opacity-20 -z-10"></div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Strategic E-commerce SEO & Organic Growth Solutions
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { 
                icon: Search, 
                title: "E-commerce SEO",
                color: "text-orange-300"
              },
              { 
                icon: TrendingUp, 
                title: "Organic Growth",
                color: "text-orange-300"
              },
              { 
                icon: BarChart, 
                title: "Performance Tracking",
                color: "text-orange-300"
              }
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className={`mx-auto mb-4 p-4 rounded-full bg-orange-50 inline-block ${item.color}`}>
                  <item.icon className="w-12 h-12" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-gray-800 text-xl">{item.title}</h3>
              </div>
            ))}
          </div>
          
          <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
            <p>
              Transform your e-commerce presence with our comprehensive SEO services designed for major platforms including Amazon, Flipkart, Myntra, Nykaa, and Ajio. Our specialized e-commerce SEO strategies focus on driving organic growth and improving store rankings across all major marketplaces.
            </p>
            
            <p>
              We deliver platform-specific optimization techniques tailored to each marketplace's unique requirements. From Amazon Store SEO optimization to Flipkart Store SEO techniques, our solutions encompass every aspect of e-commerce search engine optimization to enhance your digital storefront's visibility.
            </p>
            
            <p>
              Our technical SEO expertise extends to product page optimization, category structure enhancement, and implementation of advanced schema markup. We conduct thorough e-commerce SEO audits and implement data-driven strategies to boost your organic rankings and drive sustainable growth.
            </p>
            
            <p>
              Partner with our e-commerce SEO agency to leverage proven organic growth strategies that deliver measurable results. Whether you're looking to optimize your product listings or improve your overall marketplace presence, our comprehensive SEO solutions are designed to drive long-term success.
            </p>
          </div>
    
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <div className="bg-orange-50 p-5 rounded-lg">
              <LineChart className="w-10 h-10 text-orange-300 mb-3" />
              <h4 className="font-semibold text-xl mb-2">Platform Optimization</h4>
              <p>Specialized SEO strategies for Amazon, Flipkart, Myntra, Nykaa, and Ajio stores</p>
            </div>
            <div className="bg-orange-50 p-5 rounded-lg">
              <Globe className="w-10 h-10 text-orange-300 mb-3" />
              <h4 className="font-semibold text-xl mb-2">Comprehensive Solutions</h4>
              <p>End-to-end e-commerce SEO services from technical optimization to content strategy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

//faq
const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      icon: <Globe />,
      question: "What makes your E-commerce SEO Services different from other agencies?",
      answer: "Our E-commerce SEO Services stand out through our comprehensive approach to search engine optimization. We combine technical SEO expertise with platform-specific knowledge for Amazon, Flipkart, Myntra, Nykaa, and Ajio stores. Our team specializes in both organic growth strategies and technical optimizations, ensuring your e-commerce store ranks higher across all relevant platforms."
    },
    {
      icon: <Star />,
      question: "How do you approach Amazon Store SEO Optimization?",
      answer: "Our Amazon Store SEO optimization process involves multiple layers: keyword research specific to Amazon's A9 algorithm, product page optimization, backend search terms optimization, and category optimization. We focus on both organic growth and technical aspects to improve visibility, including optimizing titles, bullet points, descriptions, and backend keywords while maintaining Amazon's best practices."
    },
    {
      icon: <TrendingUp />,
      question: "Can you explain your Organic Growth Strategies for e-commerce?",
      answer: "Our organic growth strategies combine multiple approaches: comprehensive keyword research for online stores, content optimization, technical SEO implementation, and platform-specific optimizations. We focus on sustainable organic growth in business through proper category page optimization, product page optimization, and overall site structure improvement."
    },
    {
      icon: <Target />,
      question: "What are your Flipkart Store SEO Techniques?",
      answer: "Our Flipkart Store SEO techniques include optimizing product titles, descriptions, and attributes specifically for Flipkart's search algorithm. We implement proven e-commerce SEO management strategies, focusing on category optimization, search term optimization, and technical aspects unique to Flipkart's platform."
    },
    {
      icon: <Settings />,
      question: "How do you handle Technical SEO for E-commerce sites?",
      answer: "Our technical SEO approach for e-commerce includes implementing proper schema SEO, optimizing site structure, improving page load speeds, ensuring mobile responsiveness, and fixing crawlability issues. We conduct regular SEO audits for e-commerce sites to maintain optimal performance and identify improvement areas."
    },
    {
      icon: <Search />,
      question: "What's included in your E-commerce SEO Audit?",
      answer: "Our comprehensive e-commerce SEO audit covers technical analysis, content evaluation, competitor research, keyword opportunities, and platform-specific assessments. We examine everything from site architecture to product page optimization, providing actionable insights for improved organic rankings."
    },
    {
      icon: <BarChart2 />,
      question: "How do you approach Myntra Store SEO Best Practices?",
      answer: "For Myntra stores, we follow platform-specific best practices while implementing proven e-commerce SEO solutions. This includes optimizing product titles, descriptions, and attributes for Myntra's search algorithm, along with implementing proper category structure and search term optimization."
    },
    {
      icon: <Box />,
      question: "What Product Page Optimization strategies do you use?",
      answer: "Our product page optimization strategy covers all crucial elements: keyword-rich titles, detailed descriptions, high-quality images, proper schema markup, and relevant cross-linking. We ensure each product page is optimized for both platform-specific algorithms and general search engines."
    },
    {
      icon: <Award />,
      question: "How do you handle E-commerce Store Ranking improvements?",
      answer: "We improve e-commerce store rankings through a combination of technical SEO, content optimization, and platform-specific strategies. This includes implementing proper schema SEO for e-commerce, optimizing site structure, improving user experience, and ensuring proper keyword targeting across all pages."
    },
    {
      icon: <Database />,
      question: "What's your approach to Keyword Research for Online Stores?",
      answer: "Our keyword research process combines platform-specific analysis (Amazon, Flipkart, Myntra, etc.) with general SEO keywords. We identify high-intent purchase keywords, long-tail opportunities, and competitor gaps to create a comprehensive keyword strategy for your e-commerce business."
    },
    {
      icon: <Settings />,
      question: "How do you implement Schema SEO for E-commerce?",
      answer: "We implement detailed schema markup for products, categories, reviews, prices, and availability. This helps search engines better understand your content and can lead to enhanced search results with rich snippets, improving click-through rates and visibility."
    },
    {
      icon: <Clock />,
      question: "What strategies do you use for Category Page Optimization?",
      answer: "Our category page optimization focuses on proper hierarchy, relevant keywords, optimized meta data, and internal linking structure. We ensure category pages serve both user intent and search engine requirements while maintaining platform-specific best practices."
    },
    {
      icon: <Users />,
      question: "How do your E-commerce SEO Packages differ?",
      answer: "Our e-commerce SEO packages are tailored to different business sizes and needs. Each package includes a mix of technical SEO, content optimization, regular audits, and platform-specific optimizations. We offer solutions ranging from basic optimization to comprehensive e-commerce SEO management."
    },
    {
      icon: <Zap />,
      question: "What's your approach to Nykaa Store SEO Solutions?",
      answer: "Our Nykaa Store SEO solutions combine platform-specific optimization techniques with broader e-commerce SEO strategies. We focus on product page optimization, category structure, search term optimization, and technical aspects specific to Nykaa's platform."
    },
    {
      icon: <LineChart />,
      question: "How do you measure the success of your SEO efforts?",
      answer: "We track multiple metrics including organic traffic growth, keyword rankings, conversion rates, and platform-specific metrics for Amazon, Flipkart, and other marketplaces. Our regular reporting includes visibility scores, organic revenue growth, and ROI measurements across all your e-commerce channels."
    }
  ];

  return (
    <section 
      className="container mx-auto px-4 py-16"
      style={{ fontFamily: 'Montserrat, sans-serif' }}
    >
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 uppercase tracking-wider">
        Frequently Asked Questions
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



const EcommerceSEOPage = () => {
  return (
    <>
      <Head>
        <title>E-commerce SEO Services | Organic Growth Strategies | Technovita</title>
        <meta 
          name="description" 
          content="Expert e-commerce SEO services for Amazon, Flipkart, Myntra & other marketplaces. Drive organic growth with platform-specific optimization & content strategies."
        />
        <meta 
          name="keywords" 
          content="E-commerce SEO Services, Organic Growth Strategies, Amazon Store SEO, Flipkart Store SEO, Myntra Store SEO, Nykaa Store SEO, Product Page Optimization, E-commerce Store Ranking, Technical SEO for E-commerce"
        />
      </Head>
            <ProtectedContentWrapper>
        <Breadcrumb
          items={[
            { name: 'Services', href: '/services' },
            { name: 'Seo Services And Organic Growth Strategies', href: '/services/seo-services-and-organic-growth-strategies' },
            
          ]}
        /><main>
        <SeoHeroSection />
        <OrganicGrowthSeoServices/>
        <StatsSection />
        <ServicesSection />
        <SeoServicesCTA/>
        <SEOContentSection/>
        <FaqSection/>
      </main>
        <Footer/>
      </ProtectedContentWrapper>
    </>
  );
};

export default EcommerceSEOPage;