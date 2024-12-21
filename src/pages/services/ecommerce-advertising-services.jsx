import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Target, Settings, LineChart, Check, ChevronDown, DollarSign,
  PieChart, ShoppingBag, Users, Search, BarChart, BarChart2,
  TrendingUp, Award, Zap, Star
} from 'lucide-react';

// Hero Section Component with enhanced UI
const PlatformAdvertisingHero = () => {
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [formData, setFormData] = useState({
    companyName: '',
    phoneNumber: '',
    countryCode: '+91'
  });

  const platforms = [
    { name: 'Amazon Ads', icon: BarChart },
    { name: 'Facebook Business Manager', icon: LineChart },
    { name: 'Flipkart Ads', icon: PieChart },
    { name: 'Google Ads', icon: Target },
    { name: 'Instagram Ads', icon: BarChart2 },
    { name: 'Meesho Ads', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(#FDBA74_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Dominate E-commerce with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-800">
                {" "}Strategic PPC
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 leading-relaxed">
              Expert management of Amazon PPC, Facebook Business Manager, and multi-platform e-commerce advertising campaigns. Drive ROI with data-driven optimization across Amazon, Flipkart, Meesho, and more.
            </p>

            {/* Platform Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Choose Your Growth Channels
              </h3>
              <div className="flex flex-wrap gap-4">
                {platforms.map((platform) => (
                  <motion.button
                    key={platform.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const isSelected = selectedPlatforms.includes(platform.name);
                      setSelectedPlatforms(
                        isSelected
                          ? selectedPlatforms.filter(name => name !== platform.name)
                          : [...selectedPlatforms, platform.name]
                      );
                    }}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full border-2 bg-white 
                      ${selectedPlatforms.includes(platform.name) 
                        ? 'border-orange-500 bg-orange-50 text-orange-700' 
                        : 'border-gray-300 text-gray-700 hover:border-orange-400'} 
                      transition-all duration-300`}
                  >
                    <platform.icon className="w-5 h-5" />
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
            className="bg-white rounded-3xl shadow-2xl p-8 border border-orange-200"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">🚀 Unlock Your Growth Potential</h2>
            <p className="text-gray-600 mb-6">Get a free PPC audit worth ₹20,000</p>
            
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Company Name</label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                  placeholder="Enter your company name"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <div className="flex gap-2">
                  <select 
                    value={formData.countryCode}
                    onChange={(e) => setFormData({...formData, countryCode: e.target.value})}
                    className="px-4 py-3 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
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
                  />
                </div>
              </div>

              <button 
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  console.log('Form submitted:', { ...formData, platforms: selectedPlatforms });
                }}
                className="w-full bg-red-600 text-white py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors duration-300 text-lg shadow-lg hover:shadow-xl"
              >
                Get Your Free PPC Audit Now! 🎯
              </button>
              
              <p className="text-sm text-gray-500 text-center">
                *Limited time offer - Only 5 spots left this week
              </p>
            </form>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
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
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300"
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
  
  // New SEO Content Section
  const SEOContent = () => {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Comprehensive E-commerce Advertising Solutions
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert E-commerce PPC Management Services</h3>
                <p className="text-gray-700">
                  Our specialized team provides comprehensive e-commerce advertising solutions across Amazon PPC campaigns, 
                  Facebook Business Manager, Google Ads, Flipkart advertising, and Meesho ad campaigns. We focus on 
                  delivering optimal ROAS through strategic campaign management and continuous optimization.
                </p>
              </div>
  
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Multi-Platform Advertising Strategy</h3>
                <p className="text-gray-700">
                  We excel in managing advertising campaigns across multiple e-commerce platforms, including Amazon 
                  advertising campaigns, Facebook ad campaign management, and Google Ads for e-commerce. Our approach 
                  combines automatic campaign optimization with manual fine-tuning for maximum performance.
                </p>
              </div>
  
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced PPC Optimization Solutions</h3>
                <p className="text-gray-700">
                  Our PPC optimization services include Amazon PPC optimization, bid management, keyword optimization, 
                  and campaign budget management. We use advanced ad campaign management tools to track and optimize 
                  performance across all platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  // Enhanced CTA Section with orange theme
  const AdvertisingCTA = () => {
    return (
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Scale Your E-commerce Business?
              </h2>
              <p className="text-xl text-orange-100 mb-8">
                Get a free PPC campaign audit and discover untapped growth opportunities
              </p>
  
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  { value: "450%", label: "Average ROAS" },
                  { value: "85%", label: "Cost Reduction" },
                  { value: "3X", label: "Traffic Growth" }
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-orange-100">{stat.label}</div>
                  </div>
                ))}
              </div>
  
              <button className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Claim Your Free PPC Audit Worth ₹20,000 🚀
              </button>
            </motion.div>
          </div>
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
      </div>
    );
  };
  
  export default EcommerceAdvertisingPage;