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
  Database
} from 'lucide-react';
import Head from 'next/head';

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
                className="w-full bg-red-600 text-white py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors duration-300 text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Submitting...' : 'Get Your Free SEO Audit Now! 🎯'}
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
      value: "6+",
      label: "E-commerce Platforms",
      description: "Specialized optimization"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8"
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
      <main>
        <SeoHeroSection />
        <StatsSection />
        <ServicesSection />
      </main>
    </>
  );
};

export default EcommerceSEOPage;