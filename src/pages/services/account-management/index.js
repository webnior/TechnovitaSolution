
import React, { useState, useEffect ,useRef} from 'react';
import emailjs from '@emailjs/browser';
import Head from 'next/head';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRouter } from 'next/router';
import { 
  Store, 
  TrendingUp, 
  BarChart2, 
  ArrowRight, 
  Check, 
  Target,
  ShoppingBag,
  Settings,
  Users,
  Shield,
  Shirt,
  ShieldCheck,
  CheckCircle,
  Phone,
  Sparkles,
  Globe,
  ChevronDown,
  Loader2,
  Copy,
  Calendar
} from 'lucide-react';
import Footer from "@components/Footer";
import ProtectedContentWrapper from '@components/ProtectedContentWrapper'

// Helper function to detect client-side environment
const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return isMounted;
};

// Helper function to detect mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return isMobile;
};

// Single consultation button
const ConsultationButton = () => {
  const [copied, setCopied] = useState(false);
  const isMounted = useIsMounted();
  const isMobile = useIsMobile();
  const phoneNumber = '+917451073504';

  const handleClick = async () => {
    if (!isMounted) return;

    if (isMobile) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      try {
        await window.navigator.clipboard.writeText(phoneNumber);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  if (!isMounted) {
    return null; // Return null on server-side
  }

  return (
    <div className="flex justify-center items-center w-full mt-8">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className="bg-white text-orange-600 rounded-lg py-4 px-8 font-bold 
                   hover:bg-gray-100 transition-all duration-300
                   flex items-center justify-center gap-2
                   shadow-lg hover:shadow-xl"
      >
        {copied ? (
          <>
            <Check className="w-5 h-5" />
            Number Copied!
          </>
        ) : (
          <>
            {isMobile ? (
              <Phone className="w-5 h-5" />
            ) : (
              <Copy className="w-5 h-5" />
            )}
            Get Your Free E-commerce Consultation
          </>
        )}
      </motion.button>
    </div>
  );
};

// Multiple consultation buttons
const ConsultationButtons = () => {
  const [copiedWhite, setCopiedWhite] = useState(false);
  const [copiedGradient, setCopiedGradient] = useState(false);
  const isMounted = useIsMounted();
  const isMobile = useIsMobile();
  const phoneNumber = '+917451073504';

  const handleClick = async (buttonType) => {
    if (!isMounted) return;

    if (isMobile) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      try {
        await window.navigator.clipboard.writeText(phoneNumber);
        if (buttonType === 'white') {
          setCopiedWhite(true);
          setTimeout(() => setCopiedWhite(false), 2000);
        } else {
          setCopiedGradient(true);
          setTimeout(() => setCopiedGradient(false), 2000);
        }
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  if (!isMounted) {
    return null; // Return null on server-side
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-center items-center w-full">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleClick('gradient')}
          className={`
            bg-gradient-to-r from-orange-600 to-amber-600 
            text-white rounded-lg py-4 px-8 font-bold 
            hover:from-orange-700 hover:to-amber-700 
            transition-all duration-300
            flex items-center justify-center gap-2
          `}
        >
          {copiedGradient ? (
            <>
              <Check className="w-5 h-5" />
              <span>Number Copied!</span>
            </>
          ) : (
            <>
              {isMobile ? (
                <>
                  <Phone className="w-5 h-5" />
                  <span>Schedule a Consultation</span>
                </>
              ) : (
                <>
                  <Calendar className="w-5 h-5" />
                  <span>Schedule a Consultation</span>
                </>
              )}
            </>
          )}
        </motion.button>
      </div>
    </div>
  );
};


const SuccessMessage = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
  >
     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md mx-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-blue-500" />
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Amazing! 🎉</h3>
            <p className="text-gray-600 mb-4">
              Your journey to e-commerce account Management  starts now! Our experts will contact you within 24 hours.
            </p>
            <div className="text-sm text-gray-500">
              <p>✓ Personalized Account Manager</p>
              <p>✓ Platform-Specific Optimization</p>
              <p>✓ Revenue Acceleration Plan</p>
            </div>
          </div>
        </div>
      </div>
  </motion.div>
);

const MarketplaceMasterHero = () => {
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const form = useRef(null);
  const [formData, setFormData] = useState({
    companyName: '',
    phoneNumber: '',
    countryCode: '+91'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const platforms = [
    { name: 'Flipkart', logo: '/flipkart-logo.svg', icon: Store },
    { name: 'Amazon', logo: '/amazon-logo.svg', icon: Store },
    { name: 'Meesho', logo: '/meesho-logo.svg', icon: Store },
    { name: 'Myntra', logo: '/myntra-logo.svg', icon: Store },
    { name: 'Nykaa', logo: '/nykaa-logo.svg', icon: Store },
    { name: 'AJIO', logo: '/ajio-logo.svg', icon: Store },
    { name: 'Tata Cliq', logo: '/tata-cliq-logo.svg', icon: Store },
    { name: 'FirstCry', logo: '/firstcry-logo.svg', icon: Store },
    { name: 'AZA Fashion', logo: '/aza-fashion-logo.svg', icon: Store }
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.companyName || !formData.phoneNumber) return;
    
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const templateParams = {
        businessName: formData.companyName,
        phoneNumber: `${formData.countryCode} ${formData.phoneNumber}`,
        selected_platforms: selectedPlatforms.join(', ') || 'None selected'
      };

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      console.log('SUCCESS!', result.text);
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        companyName: '',
        phoneNumber: '',
        countryCode: '+91'
      });
      setSelectedPlatforms([]);

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('FAILED...', error);
      setSubmitError('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
            
            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300 ease-in-out"
                  placeholder="Your Marketplace Brand"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Number
                </label>
                <div className="flex">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="w-24 mr-2 rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                  </select>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300 ease-in-out"
                    placeholder="Phone Number"
                    required
                  />
                </div>
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-lg py-3 px-4 font-bold hover:from-orange-700 hover:to-amber-700 flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Processing...</span>
                  </div>
                ) : (
                  <>
                    Request Free Audit <ArrowRight className="ml-2" />
                  </>
                )}
              </motion.button>

              {submitError && (
                <div className="text-center text-red-500 mt-2">
                  {submitError}
                </div>
              )}
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
              value: "9+", 
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

      {/* Success Message Modal */}
      {showSuccess && <SuccessMessage />}
    </div>
  );
};


//how technovita is valuable company to provide the the managment services
const TechnoVitaValueProposition = () => {
  const valuePoints = [
    {
      icon: TrendingUp,
      title: "High-Performance Product Listing Optimization",
      description: "Elevate your seller account management with our comprehensive product listing strategy. We meticulously craft high-quality product descriptions, optimize keywords, and enhance image quality to drive organic growth and maximize your e-commerce seller account potential.",
      keywords: [
        "seller account management",
        "e-commerce seller account management services",
        "seller account optimization"
      ]
    },
    {
      icon: Settings,
      title: "Seamless Inventory & Order Management",
      description: "Transform your e-commerce account management with our advanced inventory updation and order processing solutions. Our seller account management experts ensure real-time inventory tracking, efficient order fulfillment, and streamlined seller central management to boost your operational efficiency.",
      keywords: [
        "seller central manage inventory",
        "seller central manage orders",
        "ecommerce account management services"
      ]
    },
    {
      icon: Target,
      title: "Data-Driven Sales Growth Strategies",
      description: "Unlock unprecedented sales potential through our intelligent, data-driven growth strategies. Our seller account management approach leverages advanced analytics to identify market opportunities, optimize pricing, and accelerate your e-commerce revenue with precision-targeted insights.",
      keywords: [
        "ecommerce account management",
        "commerce account management services",
        "seller account management services"
      ]
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-50 z-0"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.5, 0.6, 0.5],
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear"
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(#FED7AA_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Comprehensive E-commerce 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 ml-2">
              Seller Account Management
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-700 leading-relaxed"
          >
            Empower your e-commerce journey with our expert seller account management services. We provide end-to-end solutions that transform your online selling experience and drive sustainable growth across multiple platforms.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valuePoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2 
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-4 rounded-full bg-orange-100 inline-block mb-6">
                <point.icon className="w-12 h-12 text-orange-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{point.title}</h3>
              <p className="text-gray-700">{point.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl p-12 shadow-2xl"
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Maximize Your E-commerce Potential
          </h3>
          <p className="text-white text-xl mb-8">
            Our dedicated seller account management services are designed to optimize your online business, providing comprehensive solutions that drive growth, efficiency, and profitability across e-commerce platforms.
          </p>
        <ConsultationButton/>
        </motion.div>
      </div>
    </motion.section>
  );
};

//cta
const AccountManagementCTA = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-5 h-5 text-[#F5A841]" />,
      text: "Guaranteed Seller Account Growth"
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#F5A841]" />,
      text: "Complete Account Protection"
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-[#F5A841]" />,
      text: "24/7 E-commerce Support"
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
            Supercharge Your E-commerce Seller Account Management
          </h2>
          
          <p className="text-xl text-gray-700 mb-8">
            Discover why 500+ sellers trust our e-commerce account management services to skyrocket their online business performance
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
              <span>Get Free Seller Account Management Consultation</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>

            <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-[#F5A841]" />
              Limited Time: Free 30-Min E-commerce Account Strategy Session Worth ₹5,000
            </p>
          </motion.div>

          {/* SEO-Friendly Additional Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-gray-700 max-w-2xl mx-auto text-left bg-white p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Why Choose Our E-commerce Account Management Services?
            </h3>
            <p className="mb-4">
              Are you struggling with seller account management across multiple e-commerce platforms? Our comprehensive e-commerce account management services in India are designed to transform your online selling experience. From Amazon seller central management to inventory optimization, we cover every aspect of your digital marketplace success.
            </p>
            <p>
              Whether you're looking for seller account management services in Delhi, Mumbai, or anywhere in India, we provide expert support to help you navigate the complex world of online selling. Our specialized team ensures your seller central management is seamless, efficient, and focused on driving growth.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F5A841] via-orange-500 to-[#F5A841] background-animate" />
    </section>
  );
};

//content 
const AccountManagementContentSection = () => {
  return (
  <section className="py-20 bg-gray-50 relative overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 bg-[radial-gradient(#FED7AA_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
    >
      <div className="bg-white rounded-2xl shadow-xl p-10 relative overflow-hidden">
        {/* Subtle Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-20 -z-10"></div>
        
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Comprehensive Seller Account Management Services
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { 
              icon: Store, 
              title: "Seller Central Management",
              color: "text-orange-600"
            },
            { 
              icon: TrendingUp, 
              title: "Account Performance",
              color: "text-green-600"
            },
            { 
              icon: Settings, 
              title: "Operational Optimization",
              color: "text-blue-600"
            }
          ].map((item) => (
            <div key={item.title} className="text-center">
              <div className={`mx-auto mb-4 p-4 rounded-full bg-orange-100 inline-block ${item.color}`}>
                <item.icon className="w-12 h-12" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-gray-800 text-xl">{item.title}</h3>
            </div>
          ))}
        </div>
        
        <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
          <p>
            Our premier seller account management services are designed to revolutionize your e-commerce success across multiple platforms. As specialized seller account managers, we offer comprehensive e-commerce account management services that cater to businesses in Delhi, Mumbai, and across India.
          </p>
          
          <p>
            Whether you're an Amazon seller looking for dedicated account management or need support across multiple marketplaces, our services cover every aspect of seller central management. We excel in helping you manage inventory, process orders, and handle global permissions with unparalleled expertise.
          </p>
          
          <p>
            Our Amazon seller account management services go beyond basic support. We provide strategic insights for seller central manage inventory techniques, optimize order processing, and implement advanced account protection strategies. From small businesses to large enterprises, we offer tailored e-commerce account management solutions that drive growth and efficiency.
          </p>
          
          <p>
            Located in key cities like Delhi and Mumbai, our e-commerce account management company specializes in transforming your online selling experience. We're not just service providers – we're your strategic partners in navigating the complex world of online marketplaces.
          </p>
        </div>
  
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <div className="bg-orange-50 p-5 rounded-lg">
            <ShieldCheck className="w-10 h-10 text-orange-600 mb-3" />
            <h4 className="font-semibold text-xl mb-2">Comprehensive Coverage</h4>
            <p>Specialized services for Amazon, Flipkart, and other major e-commerce platforms</p>
          </div>
          <div className="bg-orange-50 p-5 rounded-lg">
            <Globe className="w-10 h-10 text-orange-600 mb-3" />
            <h4 className="font-semibold text-xl mb-2">Pan-India Support</h4>
            <p>E-commerce account management services across India, from startups to established brands</p>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
  );
  };

  //faq
  const FAQSection = () => {
    const [openFaq, setOpenFaq] = useState(null);
  
    const faqs = [
      {
        icon: Store,
        question: "What does your seller account management service include?",
        answer: "Our comprehensive seller account management services cover everything from daily account operations to strategic growth planning. We provide end-to-end solutions including seller central management, inventory optimization, order processing, and global permissions handling across platforms like Amazon, Flipkart, and other major marketplaces. Our expert seller account managers ensure seamless operation while focusing on growth and profitability."
      },
      {
        icon: Settings,
        question: "How do you handle seller central inventory management across multiple platforms?",
        answer: "We implement advanced seller central manage inventory systems that synchronize your stock across all platforms. Our team handles real-time inventory updates, stock level monitoring, and automated reorder processes. We use specialized tools for seller central management to prevent overselling and stockouts while maintaining optimal inventory levels across Amazon, Flipkart, and other marketplaces."
      },
      {
        icon: TrendingUp,
        question: "What makes your e-commerce account management services unique?",
        answer: "Our e-commerce account management services stand out through our data-driven approach and comprehensive platform coverage. We offer specialized solutions for seller central manage orders, performance analytics, and growth optimization. With dedicated teams in Delhi, Mumbai, and across India, we provide personalized support while implementing proven strategies for marketplace success."
      },
      {
        icon: Globe,
        question: "Do you provide e-commerce account management services across India?",
        answer: "Yes, we offer e-commerce account management services throughout India, with specialized teams in Delhi, Mumbai, and other major cities. Our e-commerce account management company provides remote and on-site support, ensuring sellers across the country receive expert assistance in managing their online marketplace presence."
      },
      {
        icon: ShieldCheck,
        question: "How do you manage Amazon seller central accounts specifically?",
        answer: "Our Amazon seller account management services include dedicated account managers who specialize in Amazon seller central management. We handle everything from daily operations to strategic optimization, including listing management, inventory control, order fulfillment, and performance metrics monitoring. Our Amazon seller account managers ensure compliance while maximizing sales potential."
      },
      {
        icon: BarChart2,
        question: "What training do your e-commerce account managers receive?",
        answer: "Our team undergoes comprehensive e-commerce account management courses and continuous training. They're certified in seller central management across multiple platforms and stay updated with the latest marketplace trends and policies. This ensures expert handling of your seller account management needs with current best practices."
      },
      {
        icon: Sparkles,
        question: "How do you handle seller central manage global permissions and security?",
        answer: "We implement robust security protocols for seller central manage global permissions, ensuring safe access management across your marketplace accounts. Our team follows strict security guidelines while managing multiple user access levels, maintaining account safety while enabling efficient operations across all your e-commerce platforms."
      }
    ];
  
    return (
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#FED7AA_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 ml-2">
                Seller Account Management
              </span>
            </h2>
            <p className="text-xl text-gray-700">
              Get answers to common questions about our e-commerce account management services
            </p>
          </div>
  
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`
                  bg-white rounded-xl shadow-lg overflow-hidden
                  transition-all duration-300
                  ${openFaq === index ? 'ring-2 ring-orange-500' : 'hover:shadow-xl'}
                `}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <div className="flex items-center space-x-4">
                    <faq.icon className={`w-6 h-6 ${openFaq === index ? 'text-orange-600' : 'text-gray-400'}`} />
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                  </div>
                  <ChevronDown 
                    className={`w-6 h-6 text-gray-400 transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
  
                {openFaq === index && (
                  <div className="px-6 py-4 bg-orange-50">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

// serivces
// Platform data moved to a separate constant to improve maintainability
const PLATFORMS_DATA = [
  {
    id: 'amazon',
    name: "Amazon Account Management",
    icon: Store,
    description: "Expert seller account management services for Amazon marketplace growth. Our dedicated account managers optimize listings, handle inventory, and boost sales performance.",
    slug: "amazon"
  },
  {
    id: 'flipkart',
    name: "Flipkart Account Management",
    icon: Store,
    description: "Comprehensive Flipkart seller account management with focus on catalog optimization, order fulfillment, and performance metrics improvement.",
    slug: "flipkart"
  },
  {
    id: 'meesho',
    name: "Meesho Account Management",
    icon: ShoppingBag,
    description: "Strategic Meesho seller account management to help businesses expand their online presence and increase sales across diverse product categories.",
    slug: "meesho"
  },
  {
    id: 'myntra',
    name: "Myntra Account Management",
    icon: Users,
    description: "Professional Myntra seller account management services to enhance your fashion brand's presence and drive sustainable growth.",
    slug: "myntra"
  },
  {
    id: 'nykaa',
    name: "Nykaa Account Management",
    icon: Shield,
    description: "Specialized Nykaa seller account management services for beauty and wellness brands, ensuring optimal marketplace performance.",
    slug: "nykaa"
  },
  {
    id: 'ajio',
    name: "AJIO Account Management",
    icon: Settings,
    description: "Strategic AJIO seller account management focusing on brand building, inventory optimization, and sales acceleration.",
    slug: "ajio"
  },
  {
    id: 'tata-cliq',
    name: "Tata Cliq Account Management",
    icon: TrendingUp,
    description: "Comprehensive Tata Cliq seller account management to elevate your brand's visibility and performance in the competitive online marketplace.",
    slug: "tata-cliq"
  },
  {
    id: 'firstcry',
    name: "FirstCry Account Management",
    icon: Target,
    description: "Dedicated FirstCry seller account management to help kids' brands maximize their marketplace potential and reach.",
    slug: "firstcry"
  },
  {
    id: 'aza-fashion',
    name: "AZA Fashion Account Management",
    icon: Shirt,
    description: "Specialized account management for AZA Fashion, focusing on luxury and designer brand representation and growth strategies.",
    slug: "aza-fashion"
  }
];

// Separate ServiceCard component with proper navigation handling
const ServiceCard = ({ platform, isVisible }) => {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);
  
  // Common features across all services
  const features = [
    "24/7 Account Monitoring",
    "Inventory Management",
    "Order Processing",
    "Performance Analytics",
    "Competitor Analysis",
    "Growth Strategy"
  ];

  // Enhanced navigation handler with loading state and error handling
  const handleGetStarted = async () => {
    if (isNavigating) return; // Prevent multiple clicks

    try {
      setIsNavigating(true);
      const path = `/services/account-management/${platform.slug}`;
      await router.push(path);
    } catch (error) {
      console.error('Navigation error:', error);
      // You could add error handling UI here if needed
    } finally {
      setIsNavigating(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
    >
      <div className="flex items-center space-x-4 mb-6">
        <div className="p-3 rounded-full bg-orange-100">
          <platform.icon className="w-8 h-8 text-orange-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{platform.name}</h3>
      </div>
      
      <p className="text-gray-700 mb-6">{platform.description}</p>
      
      <ul className="space-y-3 mb-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-center space-x-2">
            <Check className="w-5 h-5 text-orange-600" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-lg py-3 px-4 font-bold 
          hover:from-orange-700 hover:to-amber-700 transition-all duration-300 
          ${isNavigating ? 'opacity-75 cursor-not-allowed' : ''}`}
        onClick={handleGetStarted}
        disabled={isNavigating}
      >
        {isNavigating ? 'Loading...' : 'Get Started'}
      </motion.button>
    </motion.div>
  );
};

// Main component with enhanced intersection observer handling
const AccountManagementServices = () => {
  const [visibleServices, setVisibleServices] = useState(new Set());
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [0, 1]);

  useEffect(() => {
    // Enhanced intersection observer with better error handling
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleServices(prev => new Set([...prev, entry.target.dataset.platform]));
        }
      });
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '50px'
    };

    let observer;
    try {
      observer = new IntersectionObserver(observerCallback, observerOptions);
      
      document.querySelectorAll('[data-platform]').forEach((el) => {
        if (el) observer.observe(el);
      });
    } catch (error) {
      console.error('Intersection Observer error:', error);
      // Fallback: show all services if intersection observer fails
      setVisibleServices(new Set(PLATFORMS_DATA.map(p => p.id)));
    }
    
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <motion.section style={{ opacity }} className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#FED7AA_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Professional Seller Account Management Services
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Optimize your e-commerce presence with our comprehensive seller account management solutions. Our expert account managers ensure peak performance across all major marketplaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PLATFORMS_DATA.map((platform) => (
            <div key={platform.id} data-platform={platform.id}>
              <ServiceCard 
                platform={platform}
                isVisible={visibleServices.has(platform.id)}
              />
            </div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Scale Your Marketplace Business?
          </h3>
          <p className="text-gray-700 mb-8">
            Join thousands of successful sellers who trust our account management services
          </p>
          <ConsultationButtons />
        </motion.div>
      </div>
    </motion.section>
  );
};



const EcommerceSellerManagementPage = () => {
  return (<>
  <Head>
 <title>Seller Account Management Services | Ecommerce Experts | Technovita</title>
 <meta 
   name="description" 
   content="Professional  seller account management services in India. Expert inventory management, order processing, permissions handling & Seller Central optimization. Get dedicated account managers for your ecommerce business." 
 />
 <meta 
   name="keywords" 
   content="amazon seller account management, seller central management, ecommerce account management services, amazon account manager, seller central inventory management, amazon order management, seller permissions management, ecommerce account management india, amazon seller services delhi, seller central optimization, professional account management, amazon seller support, ecommerce account experts, amazon business management, seller central consulting" 
 />
 <meta name="robots" content="index, follow" />
 <meta property="og:title" content=" Seller Account Management Services | Ecommerce Account Management" />
 <meta property="og:description" content="Professional  seller account management services. Expert inventory & order management, Seller Central optimization, and dedicated account managers for your ecommerce business." />
 <meta property="og:type" content="website" />
 <link rel="canonical" href="https://www.technovitasolution.in/services/ecommerce-seller-account-management" />
</Head>

    <ProtectedContentWrapper>
    <main>
    <div className="min-h-screen bg-white">
      <MarketplaceMasterHero />
      <AccountManagementServices />
      <TechnoVitaValueProposition />
      <AccountManagementCTA/>
      <AccountManagementContentSection/>
      <FAQSection/>
    </div>
    </main>
      <Footer/>
    </ProtectedContentWrapper>
    </>
  );
};

export default EcommerceSellerManagementPage;