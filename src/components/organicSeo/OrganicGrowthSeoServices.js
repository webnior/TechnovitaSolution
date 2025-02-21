// Platform-specific Organic Growth & SEO Services
// Tailored SEO solutions for each e-commerce marketplace
import { 
    Check
  } from 'lucide-react';

const SERVICES = [
    {
      id: 'amazon',
      name: "Amazon SEO Services",
      description: "Comprehensive Amazon SEO optimization including A9 algorithm optimization, product listing enhancement, and keyword research for better organic rankings and visibility.",
    },
    {
      id: 'flipkart',
      name: "Flipkart SEO Solutions",
      description: "Strategic Flipkart SEO services focusing on product discoverability, category optimization, and search ranking improvements to drive organic traffic.",
    },
    {
      id: 'meesho',
      name: "Meesho SEO Strategy",
      description: "Specialized SEO services for Meesho including catalog optimization, search term research, and organic visibility enhancement across categories.",
    },
    {
      id: 'myntra',
      name: "Myntra SEO Services",
      description: "Fashion-focused SEO optimization for Myntra including product title optimization, category ranking improvement, and organic search visibility.",
    },
    {
      id: 'nykaa',
      name: "Nykaa SEO Solutions",
      description: "Beauty and wellness-focused SEO services for Nykaa including product page optimization, category ranking, and organic search performance.",
    },
    {
      id: 'ajio',
      name: "AJIO SEO Strategy",
      description: "Comprehensive AJIO SEO services focusing on product visibility, category optimization, and organic search rankings enhancement.",
    },
    {
      id: 'tatacliq',
      name: "Tata Cliq SEO Services",
      description: "Strategic SEO optimization for Tata Cliq including product listing enhancement, category ranking, and organic visibility improvement.",
    },
    {
      id: 'firstcry',
      name: "FirstCry SEO Solutions",
      description: "Specialized SEO services for kids' products on FirstCry, focusing on category optimization, search visibility, and organic ranking improvement.",
    },
    {
      id: 'aza',
      name: "AZA Fashion SEO Strategy",
      description: "Luxury fashion-focused SEO services for AZA including premium product optimization, category enhancement, and organic visibility improvement.",
    }
  ];
  
  const FEATURES = [
    "Platform-specific Keyword Research",
    "Product Listing Optimization",
    "Category Ranking Enhancement",
    "Search Term Analysis",
    "Organic Traffic Growth",
    "Performance Tracking"
  ];
  
  const ServiceCard = ({ service }) => {
    const handleClick = () => {
      window.location.href = `/services/seo-services-and-organic-growth-strategies/${service.id}`;
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
          Improve Rankings
        </div>
      </div>
    );
  };
  
  const OrganicGrowthSeoServices = () => {
    return (
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Platform-Specific SEO Services
            </h2>
            <p className="text-xl text-gray-700">
              Boost your organic visibility and rankings with our specialized marketplace SEO solutions.
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
  
export default OrganicGrowthSeoServices;