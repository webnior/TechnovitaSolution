// E-commerce Product Advertising Services
// Platform-specific advertising solutions for maximum ROI
import { 
    Check
  } from 'lucide-react';
const SERVICES = [
    {
      id: 'amazon',
      name: "Amazon PPC Advertising",
      description: "Strategic Amazon sponsored ads management including Sponsored Products, Sponsored Brands, and Sponsored Display campaigns to maximize product visibility and sales.",
    },
    {
      id: 'flipkart',
      name: "Flipkart Advertising Solutions",
      description: "Data-driven Flipkart advertising campaigns including Product Listing Ads (PLA), Brand Ads, and Collection Ads to boost product discoverability and conversions.",
    },
    {
      id: 'meesho',
      name: "Meesho Product Promotion",
      description: "Targeted advertising strategies for Meesho marketplace including product boost campaigns and promotional listings to increase reach and sales velocity.",
    },
    {
      id: 'myntra',
      name: "Myntra Fashion Advertising",
      description: "Specialized fashion product advertising on Myntra including premium display ads, sponsored products, and brand store optimization.",
    },
    {
      id: 'nykaa',
      name: "Nykaa Product Marketing",
      description: "Custom advertising solutions for beauty and wellness products on Nykaa, including featured listings and sponsored product placements.",
    },
    {
      id: 'ajio',
      name: "AJIO Product Advertising",
      description: "Performance-driven advertising campaigns on AJIO platform with focus on product visibility, brand awareness, and sales optimization.",
    },
    {
      id: 'tatacliq',
      name: "Tata Cliq Product Promotion",
      description: "Premium advertising solutions for Tata Cliq including sponsored listings, banner ads, and brand store enhancement.",
    },
    {
      id: 'firstcry',
      name: "FirstCry Product Marketing",
      description: "Targeted advertising campaigns for kids' products on FirstCry, including category-specific promotions and seasonal campaigns.",
    },
    {
      id: 'aza',
      name: "AZA Luxury Product Advertising",
      description: "Exclusive advertising strategies for luxury fashion products on AZA, including premium placements and curated collection promotions.",
    },
    {
      id:'blinkit',
      name:"Blinkit Product Promotion",
      description:"Targeted advertising campaigns for Blinkit marketplace including product boost campaigns and promotional listings to increase reach and sales velocity."
    }
  ];
  
  const FEATURES = [
    "AI-Powered Keyword Optimization",
    "Dynamic Bid Management",
    "Competitor Ad Analysis",
    "ROI Tracking & Analytics",
    "A/B Testing Campaigns",
    "Performance Optimization"
  ];
  
  const ServiceCard = ({ service }) => {
    const handleClick = () => {
      window.location.href = `/services/ecommerce-advertising/${service.id}`;
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
          Boost Your Sales
        </div>
      </div>
    );
  };
  
  const ProductAdvertisingServices = () => {
    return (
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              E-commerce Product Advertising Solutions
            </h2>
            <p className="text-xl text-gray-700">
              Drive product visibility, increase sales, and maximize ROI with our data-driven e-commerce advertising strategies.
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
  
export default ProductAdvertisingServices;