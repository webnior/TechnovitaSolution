import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette,
  ImagePlus,
  Sparkles,
  Target,
  MessageSquare,
  BarChart2,
  CheckCircle
} from 'lucide-react';

const BrandingServices = () => {
  const services = [
    {
      icon: Palette,
      title: "Visual Identity Design",
      description: "Custom brand identity design including logos, color schemes, and visual elements",
      features: ["Logo Design", "Color Palette", "Typography", "Brand Guidelines"]
    },
    {
      icon: ImagePlus,
      title: "Content Creation",
      description: "Professional product photography and content creation for your store",
      features: ["Product Photography", "Lifestyle Shots", "Banner Design", "Video Content"]
    },
    {
      icon: Target,
      title: "Brand Strategy",
      description: "Comprehensive brand strategy development for e-commerce success",
      features: ["Market Analysis", "Positioning", "Value Proposition", "Growth Strategy"]
    },
    {
      icon: MessageSquare,
      title: "Brand Voice & Messaging",
      description: "Develop a unique brand voice and messaging strategy",
      features: ["Tone of Voice", "Brand Story", "Product Descriptions", "Communication Strategy"]
    },
    {
      icon: BarChart2,
      title: "Performance Monitoring",
      description: "Track and optimize your brand performance across platforms",
      features: ["Analytics Setup", "Performance Tracking", "Optimization", "Regular Reports"]
    },
    {
      icon: Sparkles,
      title: "Brand Experience",
      description: "Create memorable brand experiences across all touchpoints",
      features: ["User Experience", "Customer Journey", "Brand Consistency", "Engagement Strategy"]
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#FED7AA_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Complete E-commerce
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 ml-2">
              Branding Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-700">
            Build a powerful brand identity that resonates with your target audience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="p-4 rounded-full bg-orange-100 inline-block mb-6">
                <service.icon className="w-8 h-8 text-orange-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-700 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
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

export default BrandingServices;