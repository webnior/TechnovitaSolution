import React from 'react';
import { motion } from 'framer-motion';
import { 
  Store, 
  ShoppingBag, 
  Globe, 
  CheckCircle,
  LayoutGrid,
  ImagePlus,
  Settings,
  TrendingUp,
  MessageSquare,
  Palette,
  BarChart2
} from 'lucide-react';

const SotrePlatformServices = () => {
  const platforms = [
    {
      name: "Amazon Store Setup",
      icon: Store,
      description: "Professional Amazon storefront creation with optimized listings and brand content",
      features: [
        "A+ Content Design",
        "Brand Store Setup",
        "Product Listing Optimization",
        "Category-specific SEO",
        "Brand Registry Assistance"
      ]
    },
    {
      name: "Flipkart Store Setup",
      icon: Store,
      description: "Complete Flipkart seller store setup with brand store customization",
      features: [
        "Brand Store Design",
        "Catalog Optimization",
        "Rich Media Integration",
        "Performance Setup",
        "Mobile Optimization"
      ]
    },
    {
      name: "Shopify Store Development",
      icon: Globe,
      description: "Custom Shopify store development with premium themes and features",
      features: [
        "Custom Theme Design",
        "Payment Integration",
        "Mobile Optimization",
        "SEO Setup",
        "Analytics Integration"
      ]
    },
    {
      name: "Meesho Store Setup",
      icon: ShoppingBag,
      description: "Optimized Meesho store setup for maximum visibility and sales",
      features: [
        "Catalog Management",
        "Price Optimization",
        "Performance Metrics",
        "Brand Guidelines",
        "Order Management"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#FED7AA_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Specialized E-commerce
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 ml-2">
              Store Setup Services
            </span>
          </h2>
          <p className="text-xl text-gray-700">
            Professional store setup and branding solutions across major e-commerce platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-full bg-orange-100">
                  <platform.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{platform.name}</h3>
              </div>
              
              <p className="text-gray-700 mb-6">{platform.description}</p>
              
              <ul className="space-y-3">
                {platform.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
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

export default SotrePlatformServices;