import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRouter } from 'next/router';
import { Store, ShoppingBag, Users, Shield, Settings, TrendingUp, Target, Shirt, Check } from 'lucide-react';


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

export default AccountManagementServices;