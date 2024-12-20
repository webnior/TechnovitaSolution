import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Shield, Clock, DollarSign } from 'lucide-react';

const PaymentReconciliationCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-600 to-amber-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-12 space-y-6"
            >
              <div className="inline-block p-3 bg-orange-100 rounded-2xl">
                <Sparkles className="w-8 h-8 text-orange-600" />
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900">
                Limited Time Offer: 3 Months Free Trial
              </h2>
              
              <p className="text-xl text-gray-600">
                Experience the power of automated payment reconciliation with our extended free trial. No credit card required.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: Shield, text: "Process unlimited transactions" },
                  { icon: Clock, text: "24/7 priority support included" },
                  { icon: DollarSign, text: "No setup or hidden fees" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <feature.icon className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-6">
                <button className="group bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-orange-700 hover:to-amber-700 transition-all duration-300 flex items-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-orange-50 to-amber-50 p-12 flex items-center"
            >
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    What's Included:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">✓</span>
                      <span>Automated payment reconciliation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">✓</span>
                      <span>Real-time transaction monitoring</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">✓</span>
                      <span>Advanced analytics dashboard</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">✓</span>
                      <span>Multi-platform integration</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-sm text-gray-500">Regular Price</div>
                    <div className="text-3xl font-bold text-gray-900 line-through">$299/month</div>
                    <div className="text-sm text-gray-500 mt-4">Special Offer</div>
                    <div className="text-4xl font-bold text-orange-600">FREE</div>
                    <div className="text-sm text-gray-500">for 3 months</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentReconciliationCTA;