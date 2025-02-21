// Platform-specific Brand Documentation Services
// Complete documentation preparation for e-commerce marketplace registration
import { 
    Check
  } from 'lucide-react';

const SERVICES = [
    {
      id: 'amazon',
      name: "Amazon Brand Documentation",
      description: "Complete brand registration documentation for Amazon including trademark verification, brand registry application, and enhanced content eligibility documentation.",
    },
    {
      id: 'flipkart',
      name: "Flipkart Brand Documentation",
      description: "Comprehensive brand documentation for Flipkart including GST registration, trademark certificates, and brand authorization documents for seller verification.",
    },
    {
      id: 'meesho',
      name: "Meesho Brand Documentation",
      description: "Essential documentation preparation for Meesho including business registration, GST documentation, and brand ownership proof for seller verification.",
    },
    {
      id: 'myntra',
      name: "Myntra Brand Documentation",
      description: "Fashion brand documentation for Myntra including design registration, trademark certificates, and brand style guidelines compliance documents.",
    },
    {
      id: 'nykaa',
      name: "Nykaa Brand Documentation",
      description: "Beauty and wellness brand documentation including FDA certifications, product testing reports, and brand authorization letters for Nykaa.",
    },
    {
      id: 'ajio',
      name: "AJIO Brand Documentation",
      description: "Fashion brand documentation for AJIO including trademark verification, design patents, and brand quality certification documents.",
    },
    {
      id: 'tatacliq',
      name: "Tata Cliq Brand Documentation",
      description: "Premium brand documentation for Tata Cliq including brand authenticity certificates, quality assurance documents, and authorized distributor verification.",
    },
    {
      id: 'firstcry',
      name: "FirstCry Brand Documentation",
      description: "Kids' brand documentation including safety certifications, product quality reports, and brand authorization documents for FirstCry registration.",
    },
    {
      id: 'aza',
      name: "AZA Brand Documentation",
      description: "Luxury fashion brand documentation including authenticity certificates, designer brand authorizations, and premium category verification documents.",
    }
  ];
  
  const FEATURES = [
    "Brand Registry Support",
    "Trademark Documentation",
    "GST Registration Help",
    "Quality Certification",
    "Legal Compliance Check",
    "Document Verification"
  ];
  
  const ServiceCard = ({ service }) => {
    const handleClick = () => {
      window.location.href = `/services/brand-documentation/${service.id}`;
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
          Get Documentation
        </div>
      </div>
    );
  };
  
  const BrandDocumentationServices = () => {
    return (
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Platform-Specific Brand Documentation
            </h2>
            <p className="text-xl text-gray-700">
              Complete documentation preparation services for hassle-free brand registration on leading e-commerce platforms.
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
  
export default BrandDocumentationServices;