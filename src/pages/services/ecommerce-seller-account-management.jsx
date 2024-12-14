import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Store, 
  TrendingUp, 
  BarChart2, 
  ArrowRight, 
  Check, 
  Target 
} from 'lucide-react';

const MarketplaceMasterHero = () => {
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);

  const platforms = [
    { name: 'Flipkart', logo: '/flipkart-logo.svg', icon: Store },
    { name: 'Amazon', logo: '/amazon-logo.svg', icon: Store },
    { name: 'Myntra', logo: '/myntra-logo.svg', icon: Store },
    { name: 'Nykaa', logo: '/nykaa-logo.svg', icon: Store },
    { name: 'AJIO', logo: '/ajio-logo.svg', icon: Store },
    { name: 'FirstCry', logo: '/firstcry-logo.svg', icon: Store }
  ];

  const togglePlatform = (platformName) => {
    setSelectedPlatforms(prev => 
      prev.includes(platformName)
        ? prev.filter(p => p !== platformName)
        : [...prev, platformName]
    );
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Dotted Orange Gradient Background */}
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
              Elevate Your Marketplace <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
                Seller Performance
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 leading-relaxed">
              We transform your marketplace presence across top platforms. From strategic listing optimization to advanced sales growth hacks, we're your dedicated e-commerce success partner.
            </p>

            {/* Platform Selection */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Select Platforms for Free Audit
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
                    <platform.icon className="w-5 h-5" />
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
            {/* Subtle Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-20 -z-10"></div>
            
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Unlock Marketplace Potential
              </h2>
              <p className="text-gray-600">Get a comprehensive performance audit</p>
            </div>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300 ease-in-out"
                  placeholder="Your Marketplace Brand"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Number
                </label>
                <div className="flex">
                  <select className="w-24 mr-2 rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500">
                    <option>+91</option>
                    <option>+1</option>
                    <option>+44</option>
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300 ease-in-out"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-lg py-3 px-4 font-bold hover:from-orange-700 hover:to-amber-700 flex items-center justify-center transition-all duration-300"
              >
                Request Free Audit <ArrowRight className="ml-2" />
              </motion.button>
            </form>

            <div className="mt-4 text-center text-xs text-gray-500">
              * Comprehensive audit for selected marketplaces
            </div>
          </motion.div>
        </div>

        {/* Performance Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { 
              icon: TrendingUp, 
              value: "40%", 
              label: "Average Sales Growth",
              color: "text-green-600"
            },
            { 
              icon: BarChart2, 
              value: "95%", 
              label: "Client Satisfaction Rate",
              color: "text-blue-600"
            },
            { 
              icon: Target, 
              value: "6+", 
              label: "Top Marketplace Platforms",
              color: "text-orange-600"
            }
          ].map((stat) => (
            <div 
              key={stat.label}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className={`mb-4 ${stat.color}`}>
                <stat.icon className="w-12 h-12 mx-auto" strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MarketplaceMasterHero;