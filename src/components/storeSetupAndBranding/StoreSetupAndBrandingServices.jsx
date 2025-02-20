// services
// Platform data moved to a separate constant to improve maintainability
import React from 'react';
import { 
  Check
} from 'lucide-react';
const SERVICES = [
    {
      id: 'amazon',
      name: "Amazon Store Setup & Branding",
      description: "Complete store setup and branding assistance for Amazon marketplace. We handle design, customization, and brand setup to get you started quickly.",
    },
    {
      id: 'flipkart',
      name: "Flipkart Store Setup & Branding",
      description: "End-to-end Flipkart store setup support including design, branding, and initial catalog customization for a smooth launch.",
    },
    {
      id: 'meesho',
      name: "Meesho Store Setup & Branding",
      description: "Hassle-free Meesho store setup and branding assistance to help you create a distinctive presence on this fast-growing platform.",
    },
    {
      id: 'myntra',
      name: "Myntra Store Setup & Branding",
      description: "Expert guidance for Myntra store setup, brand development, and catalog customization for fashion and lifestyle brands.",
    },
    {
      id: 'nykaa',
      name: "Nykaa Store Setup & Branding",
      description: "Specialized store setup and branding support for beauty and wellness brands on Nykaa, including design and brand compliance assistance.",
    },
    {
      id: 'ajio',
      name: "AJIO Store Setup & Branding",
      description: "Complete AJIO store setup and brand development support to establish your presence on this premium fashion platform.",
    },
    {
      id: 'tatacliq',
      name: "Tata Cliq Store Setup & Branding",
      description: "Professional assistance with Tata Cliq store setup, branding, and initial store design process.",
    },
    {
      id: 'firstcry',
      name: "FirstCry Store Setup & Branding",
      description: "Specialized store setup and branding support for kids' product brands on FirstCry, including design and catalog customization.",
    },
    {
      id: 'aza',
      name: "AZA Fashion Store Setup & Branding",
      description: "Premium store setup and branding assistance for luxury and designer brands looking to establish their presence on AZA Fashion.",
    }
  ];
  
  const FEATURES = [
    "Complete Store Design Support",
    "Brand Development Assistance",
    "Catalog Design Guidelines",
    "Brand Compliance Check",
    "Store Profile Customization",
    "Training & Support"
  ];
  
  const ServiceCard = ({ service }) => {
    const handleClick = () => {
      window.location.href = `/services/store-setup-and-branding-services/${service.id}`;
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
          Get Started
        </div>
      </div>
    );
  };
  
  const StoreSetupAndBrandingServices = () => {
    return (
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Professional Store Setup & Branding Services
            </h2>
            <p className="text-xl text-gray-700">
              Transform your e-commerce presence with our comprehensive store setup and branding solutions.
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

export default StoreSetupAndBrandingServices;