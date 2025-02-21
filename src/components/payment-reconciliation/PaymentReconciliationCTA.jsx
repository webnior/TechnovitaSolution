import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, FileCheck, Users, BarChart } from 'lucide-react';

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
                Expert Payment Reconciliation Services
              </h2>
              
              <p className="text-xl text-gray-600">
                Let our experienced team handle your e-commerce payment reconciliation while you focus on growing your business.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: FileCheck, text: "Detailed manual verification of transactions" },
                  { icon: Users, text: "Dedicated reconciliation specialist" },
                  { icon: BarChart, text: "Comprehensive reporting and insights" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <feature.icon className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-6">
                <button className="group bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-orange-700 hover:to-amber-700 transition-all duration-300 flex items-center gap-2">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-orange-50 to-amber-50 p-12 flex items-center"
            >
              <div className="space-y-8 w-full">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Our Service Includes:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">✓</span>
                      <span>Thorough transaction verification</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">✓</span>
                      <span>Commission and fee reconciliation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">✓</span>
                      <span>Monthly detailed reports</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">✓</span>
                      <span>Discrepancy resolution support</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Why Choose Our Service?
                    </h3>
                    <ul className="text-left space-y-3">
                      <li className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">✓</span>
                        <span>Expert manual verification</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">✓</span>
                        <span>Platform-specific expertise</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">✓</span>
                        <span>Dedicated support team</span>
                      </li>
                    </ul>
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