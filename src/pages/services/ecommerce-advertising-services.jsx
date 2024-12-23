import React, { useState } from 'react';
import { motion,AnimatePresence } from 'framer-motion';
import {
  Target, Settings, LineChart, Check, DollarSign,
  PieChart, ShoppingBag, Users, Search, BarChart, BarChart2,
  TrendingUp, Award, Zap, Star,ShoppingCart,Gift,Package,Phone, MessageCircle, Layout, Headphones,ChevronDown, ChevronUp ,CreditCard,HelpCircle,ShieldCheck
} from 'lucide-react';

import Footer from '@/src/components/Footer';
// Hero Section Component with enhanced UI
const PlatformAdvertisingHero = () => {
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [formData, setFormData] = useState({
    companyName: '',
    phoneNumber: '',
    countryCode: '+91'
  });
  const [status, setStatus] = useState('idle');

  const platforms = [
    { name: 'Amazon Ads', icon: ShoppingCart },
    { name: 'Facebook Business Manager', icon: LineChart },
    { name: 'Flipkart Ads', icon: PieChart },
    { name: 'Google Ads', icon: Target },
    { name: 'Instagram Ads', icon: BarChart2 },
    { name: 'Meesho Ads', icon: TrendingUp },
    { name: 'Nykaa Ads', icon: Gift },
    { name: 'Myntra Ads', icon: ShoppingBag },
    { name: 'Ajio Ads', icon: Package }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'advertismentServices',
          businessName: formData.companyName,
          phoneNumber: formData.phoneNumber,
          countryCode: formData.countryCode,
          selectedPlatforms
        }),
      });

      if (!response.ok) throw new Error('Failed to send email');

      setStatus('success');
      setFormData({ companyName: '', phoneNumber: '', countryCode: '+91' });
      setSelectedPlatforms([]);
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

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6 lg:space-y-8 lg:sticky lg:top-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Dominate E-commerce with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-800">
                {" "}Strategic PPC
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Expert management of Amazon PPC, Facebook Business Manager, and multi-platform e-commerce advertising campaigns. Drive ROI with data-driven optimization across Amazon, Flipkart, Meesho, and more.
            </p>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Choose Your Growth Channels
              </h3>
              <div className="flex flex-wrap gap-3">
                {platforms.map((platform) => (
                  <motion.button
                    key={platform.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSelectedPlatforms(prev => 
                        prev.includes(platform.name)
                          ? prev.filter(name => name !== platform.name)
                          : [...prev, platform.name]
                      );
                    }}
                    className={`flex items-center space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border-2 bg-white text-sm sm:text-base
                      ${selectedPlatforms.includes(platform.name) 
                        ? 'border-orange-500 bg-orange-50 text-orange-700' 
                        : 'border-gray-300 text-gray-700 hover:border-orange-400'} 
                      transition-all duration-300`}
                  >
                    <platform.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{platform.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-orange-200"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">🚀 Unlock Your Growth Potential</h2>
            <p className="text-gray-600 mb-6">Get a free PPC audit worth ₹20,000</p>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Company Name</label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                  placeholder="Enter your company name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <div className="flex gap-2">
                  <select 
                    value={formData.countryCode}
                    onChange={(e) => setFormData({...formData, countryCode: e.target.value})}
                    className="w-20 sm:w-24 px-2 py-3 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                  </select>
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                    className="flex-1 px-4 py-3 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                    placeholder="Enter phone number"
                    required
                  />
                </div>
              </div>

              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-red-600 text-white py-3 sm:py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors duration-300 text-base sm:text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Submitting...' : 'Get Your Free PPC Audit Now! 🎯'}
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

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {[
            { 
              icon: TrendingUp, 
              value: "450%", 
              label: "Average ROAS on Amazon PPC",
              color: "text-orange-600"
            },
            { 
              icon: BarChart2, 
              value: "85%", 
              label: "Cost Reduction in Ad Spend",
              color: "text-orange-600"
            },
            { 
              icon: Target, 
              value: "6+", 
              label: "E-commerce Ad Platforms",
              color: "text-orange-600"
            }
          ].map((stat) => (
            <div 
              key={stat.label}
              className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className={`mb-4 ${stat.color}`}>
                <stat.icon className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};


// Services Section with enhanced UI and SEO optimization
const AdvertisingServices = () => {
    const services = [
      {
        title: "Amazon PPC Campaign Management",
        icon: ShoppingBag,
        description: "Expert Amazon advertising campaign management with automatic & manual campaign optimization for maximum ROI.",
        features: [
          "Amazon PPC Optimization & Bid Management",
          "Sponsored Products & Brand Campaigns",
          "Automatic Campaign Optimization",
          "Amazon Attribution Setup",
          "Daily Budget Management"
        ]
      },
      {
        title: "Facebook Business Manager & Instagram Ads",
        icon: Users,
        description: "Strategic Facebook ad campaign management and Instagram ads for e-commerce business growth.",
        features: [
          "Facebook Business Manager Setup",
          "E-commerce Facebook Ads Strategy",
          "Instagram Ads for E-commerce",
          "Custom Audience Optimization",
          "ROI-Focused Campaign Management"
        ]
      },
      {
        title: "Multi-Platform E-commerce Marketing",
        icon: Search,
        description: "Comprehensive e-commerce marketing across Google Ads, Flipkart, and Meesho platforms.",
        features: [
          "Google Ads Campaign Management",
          "Flipkart Ad Campaign Optimization",
          "Meesho Ad Campaign Setup",
          "Cross-Platform Performance Tracking",
          "E-commerce Ads Strategy Development"
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-800">
                {" "}PPC Management Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-700">
              Expert management of Amazon PPC, Facebook Business Manager, and multi-platform advertising campaigns
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
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
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
  
  // Enhanced Features Section with SEO content
  const AdvertisingFeatures = () => {
    const features = [
      {
        icon: Target,
        title: "Advanced PPC Campaign Optimization",
        description: "Expert optimization of Amazon PPC, Facebook ads, and Google Ads campaigns for maximum ROI."
      },
      {
        icon: LineChart,
        title: "E-commerce Campaign Management",
        description: "Comprehensive management of advertising campaigns across Amazon, Flipkart, and Meesho."
      },
      {
        icon: Settings,
        title: "Automated Bid Management",
        description: "Smart bid optimization for Amazon PPC, Google Ads, and Facebook Business Manager."
      },
      {
        icon: DollarSign,
        title: "Strategic Budget Allocation",
        description: "Efficient management of PPC daily budgets across all e-commerce platforms."
      },
      {
        icon: BarChart,
        title: "Cross-Platform Analytics",
        description: "Unified tracking and optimization of marketing campaigns across multiple channels."
      },
      {
        icon: PieChart,
        title: "Multi-Platform Integration",
        description: "Seamless integration of advertising campaigns across all major e-commerce platforms."
      }
    ];
  
    return (
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Advanced E-commerce 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-800">
                {" "}Advertising Features
              </span>
            </h2>
            <p className="text-xl text-gray-700">
              Leverage cutting-edge PPC optimization and campaign management tools
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-orange-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  // Enhanced Case Studies Section
  const CaseStudies = () => {
    const studies = [
      {
        client: "Leading Fashion Brand",
        platform: "Amazon PPC + Facebook Business Manager",
        results: {
          roas: "450%",
          growth: "200%",
          cpc: "-35%"
        },
        description: "Optimized Amazon PPC campaigns and Facebook ad strategy for maximum ROAS"
      },
      {
        client: "E-commerce Electronics Store",
        platform: "Google Ads + Flipkart Ads",
        results: {
          roas: "380%",
          growth: "150%",
          cpc: "-40%"
        },
        description: "Integrated Google Ads and Flipkart advertising campaigns for optimal performance"
      },
      {
        client: "Beauty Products Brand",
        platform: "Instagram Ads + Meesho",
        results: {
          roas: "520%",
          growth: "250%",
          cpc: "-45%"
        },
        description: "Strategic e-commerce advertising across Instagram and Meesho platforms"
      }
    ];
  
    return (
      <section className="py-24 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              E-commerce Success Stories
            </h2>
            <p className="text-xl text-gray-700">
              Real results from our PPC campaign optimization and management
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studies.map((study, index) => (
              <motion.div
                key={study.client}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{study.client}</h3>
                <p className="text-orange-600 font-medium mb-4">{study.platform}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{study.results.roas}</div>
                    <div className="text-sm text-gray-600">ROAS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{study.results.growth}</div>
                    <div className="text-sm text-gray-600">Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{study.results.cpc}</div>
                    <div className="text-sm text-gray-600">CPC</div>
                  </div>
                </div>
                
                <p className="text-gray-700">{study.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  const SEOContent = () => {
    return (
      <section className="py-24 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Complete E-commerce
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-800">
                {" "}Marketing Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-700">
              Comprehensive advertising solutions across all major e-commerce platforms
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Advanced PPC Management",
                icon: Target,
                content: `Our specialized team provides comprehensive e-commerce advertising solutions across multiple platforms:
                  • Amazon PPC campaigns optimization
                  • Facebook & Instagram ad management
                  • Google Ads for e-commerce
                  • Flipkart & Meesho advertising
                  • Nykaa, Myntra & Ajio campaign management`
              },
              {
                title: "Platform-Specific Strategies",
                icon: Settings,
                content: `Tailored advertising approaches for each platform:
                  • Nykaa: Beauty & wellness-focused campaigns
                  • Myntra: Fashion-centric advertising strategies
                  • Ajio: Lifestyle product promotion
                  • Platform-specific audience targeting
                  • Custom creative optimization`
              },
              {
                title: "Data-Driven Optimization",
                icon: LineChart,
                content: `Performance tracking and optimization across platforms:
                  • Cross-platform analytics integration
                  • Real-time bid management
                  • Audience behavior analysis
                  • ROI tracking & optimization
                  • A/B testing & creative optimization`
              },
              {
                title: "Industry Expertise",
                icon: Award,
                content: `Specialized knowledge across various e-commerce sectors:
                  • Fashion & apparel expertise
                  • Beauty & personal care
                  • Electronics & gadgets
                  • Home & lifestyle
                  • Multi-category optimization`
              }
            ].map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-orange-100 mr-4">
                    <section.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                </div>
                <p className="text-gray-700 whitespace-pre-line">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
//cta
const AdvertisingCTA = () => {
  const handleCallClick = () => {
    window.location.href = 'tel:+917451073504';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917451073504?text=Hi,%20I%20am%20interested%20in%20getting%20a%20free%20PPC%20audit', '_blank');
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Background pattern matching hero section */}
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
              Transform Your 
              <span className="relative">
                <span className="relative z-10"> E-commerce Growth</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-orange-200 -rotate-2"></span>
              </span>
            </h2>
            
            <p className="text-xl text-gray-700 mb-12">
              Join 500+ brands achieving exceptional results across 9+ e-commerce platforms
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Target,
                  value: "450%",
                  label: "Average ROAS",
                  description: "Return on Ad Spend"
                },
                {
                  icon: TrendingUp,
                  value: "85%",
                  label: "Cost Reduction",
                  description: "In Ad Spend"
                },
                {
                  icon: Users,
                  value: "3X",
                  label: "Growth",
                  description: "In Customer Base"
                }
              ].map((stat) => (
                <div 
                  key={stat.label}
                  className="relative group"
                >
                  <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                    <stat.icon className="w-10 h-10 text-orange-600 mb-4 mx-auto" />
                    <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
                    <div className="text-sm text-gray-600">{stat.description}</div>
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
                  <span>Chat on WhatsApp</span>
                </div>
              </motion.button>
              
              <p className="text-gray-600 text-sm">
                Limited Time Offer • Only 5 Spots Available This Week
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 items-center">
              <div className="flex items-center text-gray-700">
                <Award className="w-5 h-5 mr-2" />
                <span>Certified Experts</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Layout className="w-5 h-5 mr-2" />
                <span>9+ Platforms</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Headphones className="w-5 h-5 mr-2" />
                <span>24/7 Support</span>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-8 text-gray-700">
              <p>For urgent inquiries, contact us directly:</p>
              <a href="tel:+917451073504" className="text-gray-900 font-semibold hover:underline">
                +91 7451073504
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  // Helper function to assign icons to questions based on content
  const getIconForQuestion = (question) => {
    if (question.includes("optimization") || question.includes("performance"))
      return <TrendingUp className="w-6 h-6 text-[#F5A841]" />;
    if (question.includes("budget") || question.includes("results"))
      return <BarChart2 className="w-6 h-6 text-[#F5A841]" />;
    if (question.includes("tools") || question.includes("tracking"))
      return <ShieldCheck className="w-6 h-6 text-[#F5A841]" />;
    if (question.includes("services") || question.includes("management"))
      return <CreditCard className="w-6 h-6 text-[#F5A841]" />;
    return <HelpCircle className="w-6 h-6 text-[#F5A841]" />;
  };

  const faqs = [
    {
      question: "What comprehensive e-commerce advertising services do you offer?",
      answer: "We provide end-to-end e-commerce advertising solutions across multiple platforms including Amazon PPC, Facebook Business Manager, Google Ads, Flipkart, Meesho, Instagram, and more. Our services include campaign setup, optimization, bid management, keyword research, and performance tracking. We specialize in creating data-driven strategies that maximize ROAS across all major e-commerce platforms."
    },
    {
      question: "How do you optimize Amazon PPC campaigns for better performance?",
      answer: "Our Amazon PPC optimization process involves several key steps: analyzing search term reports, optimizing automatic and manual campaigns, implementing strategic bid management, conducting thorough keyword research, and maintaining optimal daily budgets. We focus on reducing ACoS while improving visibility and sales through sponsored products, sponsored brands, and display campaigns."
    },
    {
      question: "What strategies do you use for Facebook and Instagram ad campaigns?",
      answer: "We implement comprehensive Facebook Business Manager strategies including dynamic product ads, custom audience targeting, and conversion optimization. Our approach includes creating engaging creative assets, implementing proper tracking through Facebook Pixel, and utilizing advanced features like automated rules and budget optimization. We also integrate Instagram ads to create a cohesive social media advertising presence."
    },
    {
      question: "How do you manage and optimize Google Ads for e-commerce?",
      answer: "Our Google Ads management approach includes creating shopping campaigns, search campaigns, and dynamic remarketing ads. We focus on optimal bid management, negative keyword optimization, audience targeting, and campaign structure optimization. We also implement smart shopping campaigns and utilize automated bidding strategies when appropriate."
    },
    {
      question: "What tools and software do you use for campaign management?",
      answer: "We utilize advanced campaign management tools and software including automated bid management systems, performance tracking platforms, and campaign optimization tools. Our tech stack includes specialized tools for Amazon PPC optimization, Facebook ad management, and Google Ads bid management, along with custom reporting dashboards for comprehensive performance monitoring."
    },
    {
      question: "How do you handle budget allocation across different platforms?",
      answer: "We implement a data-driven approach to budget allocation, analyzing performance metrics across all platforms to identify the most effective channels. We regularly monitor and adjust daily budgets on Amazon PPC, Facebook ads, and Google Ads based on performance data and ROI. This includes managing sponsored product campaigns, automatic campaigns, and manual campaigns effectively."
    },
    {
      question: "What's your approach to Flipkart and Meesho ad campaigns?",
      answer: "For Flipkart and Meesho advertising, we create platform-specific strategies focusing on product visibility, competitive pricing, and targeted audience reach. Our approach includes optimizing product listings, implementing strategic bidding, and managing sponsored product placements while maintaining optimal budget allocation."
    },
    {
      question: "How do you measure and report campaign performance?",
      answer: "We provide comprehensive performance tracking using advanced campaign management software that monitors key metrics across all platforms. Our reports include ROAS, ACoS, CTR, conversion rates, and other relevant KPIs. We use marketing campaign tracking software to provide real-time insights and regular performance updates."
    },
    {
      question: "What sets your e-commerce marketing agency apart?",
      answer: "Our agency specializes exclusively in e-commerce advertising with certified experts for each platform. We offer data-driven optimization, transparent reporting, and proven ROI improvement strategies. Our team has extensive experience in Amazon PPC optimization, Facebook Business Manager, and multi-platform e-commerce advertising campaigns."
    },
    {
      question: "How do you handle automatic vs. manual campaigns on Amazon?",
      answer: "We implement a hybrid approach using both automatic and manual campaigns. Automatic campaigns are used for keyword discovery and data collection, while manual campaigns are optimized based on performance data. We regularly analyze search terms, adjust bids, and optimize targeting to maximize campaign effectiveness."
    },
    {
      question: "What strategies do you use for brand campaigns?",
      answer: "Our brand campaign strategies include Amazon sponsored brand campaigns, Facebook brand awareness campaigns, and Google brand campaigns. We focus on creating cohesive brand messaging across all platforms while optimizing for both visibility and conversion rates."
    },
    {
      question: "How do you optimize product targeting and keywords?",
      answer: "We conduct thorough keyword research and implement strategic product targeting across all platforms. This includes optimizing Amazon PPC keywords, Google Ads search terms, and Facebook audience targeting. We regularly analyze search term reports and adjust targeting based on performance data."
    },
    {
      question: "What's your approach to bid management?",
      answer: "We use advanced bid management software and strategies to optimize bids across all platforms. This includes automated bid adjustments based on performance data, dayparting, and competitive analysis. Our approach ensures optimal bid levels for maximum ROAS."
    },
    {
      question: "How do you handle attribution and tracking?",
      answer: "We implement comprehensive attribution tracking including Amazon Attribution, Facebook Pixel, and Google Analytics. This allows us to accurately measure campaign performance across all channels and make data-driven optimization decisions."
    },
    {
      question: "What kind of results can we expect?",
      answer: "While results vary by industry and competition, our clients typically see significant improvements in ROAS, reduced ACoS, and increased sales velocity. We focus on delivering measurable results through strategic campaign optimization and continuous performance monitoring."
    }
  ].map(faq => ({
    ...faq,
    icon: getIconForQuestion(faq.question)
  }));

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


  
  // Main Page Component
  const EcommerceAdvertisingPage = () => {
    return (
      <div className="bg-white">
        <PlatformAdvertisingHero />
        <AdvertisingServices />
        <AdvertisingFeatures />
        <CaseStudies />
        <SEOContent />
        <AdvertisingCTA />
        <FAQSection/>
        <Footer/>
      </div>
    );
  };
  
  export default EcommerceAdvertisingPage;