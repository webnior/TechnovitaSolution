import React from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardCheck, 
  ShieldCheck, 
  Store, 
  BarChart2,
  ArrowRight
} from 'lucide-react';

const SellerOnboardingProcess = () => {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "Quick Registration Process",
      description: "Start your e-commerce journey with our streamlined seller onboarding process. We handle Amazon seller account creation, Flipkart seller account creation, and more with minimal documentation.",
      platforms: ["Amazon", "Flipkart", "Myntra", "Meesho", "Tata CLiQ","FirstCry", "AZA Fashion", "JioMart","Nykaa", "AJIO"]
    },
    {
      icon: ShieldCheck,
      title: "Secure Verification",
      description: "Complete seller account verification across platforms including Myntra seller account creation, Nykaa seller account creation, and AJIO seller account creation with our secure process.",
      platforms: ["Amazon", "Flipkart", "Myntra", "Meesho", "Tata CLiQ","FirstCry", "AZA Fashion", "JioMart","Nykaa", "AJIO"]
    },
    {
      icon: Store,
      title: "Platform Integration",
      description: "Seamless seller onboarding service for all major marketplaces including Amazon seller onboarding, Meesho seller onboarding, and Myntra seller onboarding process.",
      platforms: ["Amazon", "Flipkart", "Myntra", "Meesho", "Tata CLiQ","FirstCry", "AZA Fashion", "JioMart","Nykaa", "AJIO"]
    },
    {
      icon: BarChart2,
      title: "Growth Ready Setup",
      description: "Expert assistance in seller account setup across platforms. From Amazon seller account creation process to Flipkart seller account requirements, we ensure compliance and readiness.",
      platforms: ["Amazon", "Flipkart", "Myntra", "Meesho", "Tata CLiQ","FirstCry", "AZA Fashion", "JioMart","Nykaa", "AJIO"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-orange-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#FED7AA_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Professional Seller 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 ml-2">
              Onboarding Process
            </span>
          </h2>
          <p className="text-xl text-gray-700">
            Streamlined seller account creation and onboarding services across all major e-commerce platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="p-4 rounded-full bg-orange-100 inline-block mb-6">
                <step.icon className="w-12 h-12 text-orange-600" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-700 mb-4">{step.description}</p>
              
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-600">Supported Platforms:</p>
                <div className="flex flex-wrap gap-2">
                  {step.platforms.map((platform) => (
                    <span
                      key={platform}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm"
                    >
                      <Store className="w-3 h-3 mr-1" />
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-lg font-semibold hover:from-orange-700 hover:to-amber-700 transition-all duration-300">
            Start Your Onboarding Process
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SellerOnboardingProcess;