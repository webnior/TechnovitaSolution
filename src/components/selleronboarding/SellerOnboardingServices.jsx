// services
// Platform data moved to a separate constant to improve maintainability
import React from 'react';
import { 
  Check
} from 'lucide-react';
const SERVICES = [
    {
      id: 'amazon',
      name: "Amazon Seller Onboarding",
      description: "Complete seller registration and onboarding assistance for Amazon marketplace. We handle documentation, verification, and store setup to get you started quickly.",
    },
    {
      id: 'flipkart',
      name: "Flipkart Seller Onboarding",
      description: "End-to-end Flipkart seller registration support including documentation, verification, and initial catalog setup for a smooth launch.",
    },
    {
      id: 'meesho',
      name: "Meesho Seller Onboarding",
      description: "Hassle-free Meesho seller registration and store setup assistance to help you start selling on this fast-growing platform.",
    },
    {
      id: 'myntra',
      name: "Myntra Seller Onboarding",
      description: "Expert guidance for Myntra seller registration, brand verification, and catalog setup for fashion and lifestyle brands.",
    },
    {
      id: 'nykaa',
      name: "Nykaa Seller Onboarding",
      description: "Specialized onboarding support for beauty and wellness brands on Nykaa, including documentation and compliance assistance.",
    },
    {
      id: 'ajio',
      name: "AJIO Seller Onboarding",
      description: "Complete AJIO seller registration and brand onboarding support to establish your presence on this premium fashion platform.",
    },
    {
      id: 'tatacliq',
      name: "Tata Cliq Seller Onboarding",
      description: "Professional assistance with Tata Cliq seller registration, documentation, and initial store setup process.",
    },
    {
      id: 'firstcry',
      name: "FirstCry Seller Onboarding",
      description: "Specialized onboarding support for kids' product brands on FirstCry, including compliance and catalog setup.",
    },
    {
      id: 'aza',
      name: "AZA Fashion Seller Onboarding",
      description: "Premium onboarding assistance for luxury and designer brands looking to establish their presence on AZA Fashion.",
    },
    {
      id: 'zepto',
      name: "Zepto Seller Onboarding",
      description: "Specialized onboarding support for quick commerce brands on Zepto, including documentation and compliance assistance.",
    },
    {
      id: 'blinkit',
      name: "Blinkit Seller Onboarding",
      description: "Specialized onboarding assistance for local businesses and brands aiming to reach customers through Blinkit's quick commerce network.",
    }
  ];
  
  const FEATURES = [
    "Complete Documentation Support",
    "Brand Verification Assistance",
    "Catalog Setup Guidelines",
    "Compliance Check",
    "Store Profile Creation",
    "Training & Support"
  ];
  
  const ServiceCard = ({ service }) => {
    const handleClick = () => {
      window.location.href = `/services/ecommerce-seller-onboarding/${service.id}`;
    };
  
    return (
      <div 
        onClick={handleClick}
        className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer"
      >
        <div className="flex items-center space-x-4 mb-6">
          <div className="p-3 rounded-full bg-orange-100">
            <div className="w-8 h-8 bg-orange-600 rounded-full" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
        </div>
        
        <p className="text-gray-700 mb-6">{service.description}</p>
        
        <ul className="space-y-3 mb-6">
          {FEATURES.map((feature) => (
            <li key={feature} className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-orange-600" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
  
        <div className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-lg py-3 px-4 font-bold text-center">
          Start Onboarding
        </div>
      </div>
    );
  };
  
  const SellerOnboardingServices = () => {
    return (
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Professional Seller Onboarding Services
            </h2>
            <p className="text-xl text-gray-700">
              Start your e-commerce journey with our comprehensive seller registration and onboarding solutions.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    );
  };

export default SellerOnboardingServices;