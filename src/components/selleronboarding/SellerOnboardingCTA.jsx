import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle, 
  Phone, 
  ArrowRight, 
  Sparkles,
  Rocket,
  Clock,
  Users
} from 'lucide-react';

const SellerOnboardingCTA = () => {
  const benefits = [
    {
      icon: <Rocket className="w-5 h-5 text-[#F5A841]" />,
      text: "Fast-Track Account Approval"
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#F5A841]" />,
      text: "100% Compliance Guarantee"
    },
    {
      icon: <Clock className="w-5 h-5 text-[#F5A841]" />,
      text: "Same-Day Document Verification"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#FDF2E4] to-white">
      {/* Animated background dots */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(#F5A841 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }} 
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#F5A841] to-orange-600 bg-clip-text text-transparent">
            Launch Your E-commerce Business in 24 Hours
          </h2>
          
          <p className="text-xl text-gray-700 mb-8">
            Join 1000+ successful sellers who trusted our expert seller onboarding services for Amazon, Flipkart, Meesho & more
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-4 rounded-xl shadow-lg flex items-center justify-center gap-3 hover:shadow-xl transition-shadow duration-300"
              >
                {benefit.icon}
                <span className="font-medium text-gray-800">{benefit.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Platform Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {['Amazon', 'Flipkart', 'Myntra', 'Meesho', 'Nykaa'].map((platform, index) => (
              <div key={platform} className="px-4 py-2 bg-white rounded-full shadow-md text-gray-700 font-medium flex items-center gap-2">
                <Users className="w-4 h-4 text-[#F5A841]" />
                {platform} Seller
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href="tel:+917451073504"
              className="inline-flex items-center justify-center gap-3 
                bg-gradient-to-r from-red-500 to-red-600 
                text-white text-xl font-bold
                px-8 py-4 rounded-xl
                shadow-lg shadow-red-500/30
                hover:shadow-xl hover:shadow-red-500/40
                transform hover:scale-105
                transition-all duration-300
                group"
            >
              <Phone className="w-6 h-6 animate-bounce" />
              <span>Start Your Seller Account Creation Now</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>

            <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-[#F5A841]" />
              Special Offer: Free GST Registration with Seller Account Setup
            </p>
          </motion.div>

          {/* SEO-Friendly Additional Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-gray-700 max-w-2xl mx-auto text-left bg-white p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Expert Seller Onboarding Services Across All Marketplaces
            </h3>
            <p className="mb-4">
              Looking to start selling online? Our comprehensive seller onboarding services streamline your journey from registration to your first sale. We handle everything from Amazon seller account creation to Flipkart seller onboarding, ensuring a hassle-free setup process across all major e-commerce platforms.
            </p>
            <p>
              With dedicated seller onboarding specialists and a proven onboarding process, we've helped thousands of sellers launch their e-commerce business. Whether you're interested in Meesho seller account creation, Myntra seller registration, or multi-platform presence, our team ensures quick activation with complete documentation support.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F5A841] via-orange-500 to-[#F5A841]" />
    </section>
  );
};

export default SellerOnboardingCTA;