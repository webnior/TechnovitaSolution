// Platform-specific E-commerce Consultation Services
// Expert consultation for marketplace success and growth
import { 
    Check
  } from 'lucide-react';

const SERVICES = [
    {
      id: 'amazon',
      name: "Amazon Business Consultation",
      description: "Strategic consultation for Amazon sellers including business model optimization, category selection, pricing strategy, and growth planning with expert marketplace insights.",
    },
    {
      id: 'flipkart',
      name: "Flipkart Growth Consultation",
      description: "Expert guidance for Flipkart success including market analysis, competitive positioning, inventory planning, and business scaling strategies.",
    },
    {
      id: 'meesho',
      name: "Meesho Business Strategy",
      description: "Specialized consultation for Meesho sellers focusing on product selection, pricing optimization, reseller network development, and market expansion.",
    },
    {
      id: 'myntra',
      name: "Myntra Fashion Consultation",
      description: "Fashion-focused business consultation including trend analysis, collection planning, pricing strategy, and brand positioning on Myntra.",
    },
    {
      id: 'nykaa',
      name: "Nykaa Beauty Business",
      description: "Expert consultation for beauty and wellness brands on Nykaa including market positioning, product portfolio planning, and growth strategies.",
    },
    {
      id: 'ajio',
      name: "AJIO Business Strategy",
      description: "Strategic consultation for AJIO sellers including fashion market analysis, collection planning, pricing optimization, and brand growth.",
    },
    {
      id: 'tatacliq',
      name: "Tata Cliq Business Planning",
      description: "Premium marketplace consultation for Tata Cliq including brand positioning, premium pricing strategy, and luxury market insights.",
    },
    {
      id: 'firstcry',
      name: "FirstCry Business Growth",
      description: "Specialized consultation for kids' product businesses including market analysis, product selection, safety compliance, and growth planning.",
    },
    {
      id: 'aza',
      name: "AZA Luxury Consultation",
      description: "Expert consultation for luxury fashion brands including premium positioning, collection strategy, and high-end market penetration planning.",
    }
  ];
  
  const FEATURES = [
    "Market Analysis & Insights",
    "Business Model Planning",
    "Growth Strategy Development",
    "Competitive Analysis",
    "Pricing Optimization",
    "Performance Forecasting"
  ];
  
  const ServiceCard = ({ service }) => {
    const handleClick = () => {
      window.location.href = `/services/ecommerce-consultation/${service.id}`;
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
          Get Expert Guidance
        </div>
      </div>
    );
  };
  
  const ConsultationServices = () => {
    return (
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Platform-Specific Business Consultation
            </h2>
            <p className="text-xl text-gray-700">
              Expert guidance and strategic planning for successful e-commerce business across leading marketplaces.
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
  
export default ConsultationServices;