import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Store } from 'lucide-react';

const SellerOnboardingHero = () => {
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [formData, setFormData] = useState({
    businessName: '',
    phoneNumber: '',
    email: '',
    category: ''
  });

  const platforms = [
    { name: 'Amazon', icon: Store },
    { name: 'Flipkart', icon: Store },
    { name: 'Myntra', icon: Store },
    { name: 'Ajio', icon: Store },
    { name: 'Nykaa', icon: Store },
    { name: 'Meesho', icon: Store },
    { name: 'JioMart', icon: Store },
    { name: 'AZA Fashion', icon: Store },
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
    console.log('Form submitted', { ...formData, platforms: selectedPlatforms });
    // Add submission logic here
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Streamline Your 
              <span className="text-orange-600"> Seller Onboarding</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Simplify your journey to becoming a top seller across multiple e-commerce platforms. Our expert onboarding services ensure a smooth, hassle-free process for your business.
            </p>
            <div>
              <h3 className="text-lg font-semibold mb-4">Select Your Platforms</h3>
              <div className="flex flex-wrap gap-3">
                {platforms.map((platform) => (
                  <button
                    key={platform.name}
                    onClick={() => togglePlatform(platform.name)}
                    className={`px-4 py-2 rounded-full border-2 transition-all ${
                      selectedPlatforms.includes(platform.name)
                        ? 'bg-orange-600 text-white border-orange-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-orange-400'
                    }`}
                  >
                    <span className="flex items-center">
                      <platform.icon className="w-4 h-4 mr-2" />
                      {platform.name}
                      {selectedPlatforms.includes(platform.name) && (
                        <Check className="w-4 h-4 ml-2" />
                      )}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Start Your Seller Journey</h2>
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="fashion">Fashion</option>
                  <option value="electronics">Electronics</option>
                  <option value="home">Home & Living</option>
                  <option value="beauty">Beauty & Personal Care</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors flex items-center justify-center"
              >
                Start Onboarding <ArrowRight className="ml-2" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SellerOnboardingHero;
