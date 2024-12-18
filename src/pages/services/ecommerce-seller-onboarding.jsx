import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Store, 
  TrendingUp, 
  ArrowRight, 
  Check, 
  Target,
  Globe,
  ChevronDown,
  Loader2,
  ShieldCheck,
  Users,
  Settings
} from 'lucide-react';
import Footer from "@components/Footer";

const SellerOnboardingHero = () => {
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [formData, setFormData] = useState({
    businessName: '',
    phoneNumber: '',
    email: '',
    category: ''
  });

  const platforms = [
    { name: 'Amazon', logo: '/amazon-logo.svg' },
    { name: 'Flipkart', logo: '/flipkart-logo.svg' },
    { name: 'Myntra', logo: '/myntra-logo.svg' },
    { name: 'Nykaa', logo: '/nykaa-logo.svg' },
    { name: 'Meesho', logo: '/meesho-logo.svg' },
    { name: 'AJIO', logo: '/ajio-logo.svg' },
    { name: 'AZA Fashion', logo: '/aza-fashion-logo.svg' },
    { name: 'FirstCry', logo: '/firstcry-logo.svg' },
    { name: 'Tata Cliq', logo: '/tata-cliq-logo.svg' }
  ];

  const togglePlatform = (platformName) => {
    setSelectedPlatforms(prev => 
      prev.includes(platformName)
        ? prev.filter(p => p !== platformName)
        : [...prev, platformName]
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submission logic
    console.log('Form submitted', { ...formData, platforms: selectedPlatforms });
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-50 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#FED7AA_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Simplify Your 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 ml-2">
                Seller Onboarding
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 leading-relaxed">
              Streamline your seller account creation across multiple e-commerce platforms. Our expert onboarding services ensure a smooth, hassle-free process for your business.
            </p>

            {/* Platform Selection */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Select Platforms for Onboarding
              </h3>
              <div className="flex flex-wrap gap-4">
                {platforms.map((platform) => (
                  <motion.button
                    key={platform.name}
                    type="button"
                    onClick={() => togglePlatform(platform.name)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      flex items-center space-x-2 px-4 py-2 rounded-full border-2 transition-all duration-300
                      ${selectedPlatforms.includes(platform.name) 
                        ? 'bg-orange-600 text-white border-orange-600' 
                        : 'bg-white text-gray-700 border-gray-300 hover:border-orange-400'}
                    `}
                  >
                    <span>{platform.name}</span>
                    {selectedPlatforms.includes(platform.name) && (
                      <Check className="w-4 h-4" />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl shadow-2xl p-8 border border-orange-100 relative overflow-hidden"
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Start Your Seller Journey
              </h2>
              <p className="text-gray-600">Complete your seller account onboarding</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300 ease-in-out"
                  placeholder="Your Business Name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300 ease-in-out"
                  placeholder="Phone Number"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300 ease-in-out"
                  placeholder="Your Business Email"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Product Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300 ease-in-out"
                  required
                >
                  <option value="">Select Product Category</option>
                  <option value="fashion">Fashion</option>
                  <option value="electronics">Electronics</option>
                  <option value="beauty">Beauty & Personal Care</option>
                  <option value="home">Home & Kitchen</option>
                  <option value="toys">Toys & Baby Products</option>
                </select>
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-lg py-3 px-4 font-bold hover:from-orange-700 hover:to-amber-700 flex items-center justify-center transition-all duration-300"
              >
                Start Seller Onboarding <ArrowRight className="ml-2" />
              </motion.button>
            </form>

            <div className="mt-4 text-center text-xs text-gray-500">
              * Comprehensive onboarding for selected marketplaces
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SellerOnboardingHero;