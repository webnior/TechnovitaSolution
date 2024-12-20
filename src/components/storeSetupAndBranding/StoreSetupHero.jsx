import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Store, 
  ShoppingBag,
  CheckCircle,
  Globe,
  ArrowRight,
  Check,
  Loader2,
  Sparkles
} from 'lucide-react';

const StoreSetupHero = () => {
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    phoneNumber: '',
    countryCode: '+91'
  });

  const platforms = [
    { name: 'Amazon', icon: Store },
    { name: 'Flipkart', icon: Store },
    { name: 'Meesho', icon: Store },
    { name: 'Myntra', icon: Store },
    { name: 'Nykaa', icon: Store },
    { name: 'AJIO', icon: Store },
    { name: 'Shopify', icon: Globe },
    { name: 'WooCommerce', icon: ShoppingBag },
    { name: 'AZA Fashion', icon: Store }
  ];

  const handlePlatformSelect = (platform) => {
    setSelectedPlatforms(prev => 
      prev.includes(platform)
        ? prev.filter(p => p !== platform)
        : [...prev, platform]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'storeSetup',
          ...formData,
          selectedPlatforms
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setShowSuccess(true);
      
      // Reset form
      setFormData({
        businessName: '',
        email: '',
        phoneNumber: '',
        countryCode: '+91'
      });
      setSelectedPlatforms([]);
    } catch (error) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-50">
        <div className="absolute inset-0 bg-[radial-gradient(#FED7AA_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Launch Your Dream
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
                E-commerce Store
              </span>
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed">
              Professional store setup and branding services across major e-commerce platforms. Transform your online presence with our expert solutions.
            </p>

            {/* Platform Selection */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Select Your Preferred Platforms
              </h3>
              <div className="flex flex-wrap gap-4">
                {platforms.map((platform) => (
                  <motion.button
                    key={platform.name}
                    onClick={() => handlePlatformSelect(platform.name)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      flex items-center space-x-2 px-4 py-2 rounded-full border-2 
                      transition-all duration-300
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
            className="bg-white rounded-2xl shadow-2xl p-8 border border-orange-100"
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Get Started Today
              </h2>
              <p className="text-gray-600">
                Transform your e-commerce presence
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Form fields */}
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Business Name"
                  className="w-full rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                  required
                  value={formData.businessName}
                  onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                />
                
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />

                <div className="flex gap-2">
                  <select
                    className="w-24 rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                    value={formData.countryCode}
                    onChange={(e) => setFormData({...formData, countryCode: e.target.value})}
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                  </select>
                  
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="flex-1 rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                    required
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                  />
                </div>
              </div>

              {error && (
                <div className="text-red-600 text-center text-sm">
                  {error}
                </div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-orange-600 to-amber-600 
                          text-white rounded-lg py-3 px-4 font-bold 
                          hover:from-orange-700 hover:to-amber-700 
                          flex items-center justify-center gap-2
                          disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>

            {/* Trust Indicators */}
            <div className="mt-6 text-center space-y-2">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <Sparkles className="w-4 h-4 text-orange-600" />
                <span>Free Store Setup Strategy Session Worth ₹5,000</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>100% Satisfaction Guaranteed</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Success Message Modal */}
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          >
            <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md mx-4">
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Thank You! 🎉
                </h3>
                <p className="text-gray-600 mb-4">
                  We've received your request. Our e-commerce experts will contact you within 24 hours to discuss your store setup needs.
                </p>
                <button
                  onClick={() => setShowSuccess(false)}
                  className="text-orange-600 font-semibold hover:text-orange-700"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default StoreSetupHero;