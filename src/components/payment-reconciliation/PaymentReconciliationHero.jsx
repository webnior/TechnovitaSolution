import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const PaymentReconciliationHero = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    phone: '',
    platform: 'Amazon'
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const platforms = ['Amazon', 'Flipkart', 'Meesho', 'Myntra', 'Nykaa', 'AJIO', 'Other'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'paymentReconciliation',...formData
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setStatus('success');
      setFormData({
        companyName: '',
        email: '',
        phone: '',
        platform: 'Amazon'
      });

      // Reset success message after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#FED7AA_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
              Advanced E-commerce 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
                {' '}Payment Reconciliation{' '}
              </span>
              Services
            </h1>
            
            <p className="text-xl text-gray-700">
              Transform your e-commerce payment reconciliation process with our automated reconciliation solutions. Seamlessly track, match, and verify all marketplace transactions with 99.9% accuracy.
            </p>

            <div className="flex flex-wrap gap-4">
              {platforms.map((platform) => (
                <div key={platform} className="bg-white px-4 py-2 rounded-full shadow-md flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>{platform}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Start Your Free E-commerce Reconciliation Trial</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Company Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Business Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">E-commerce Platform</label>
                <select
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
                  value={formData.platform}
                  onChange={(e) => setFormData({...formData, platform: e.target.value})}
                  required
                >
                  {platforms.map(platform => (
                    <option key={platform} value={platform}>{platform}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-lg py-3 px-4 font-bold hover:from-orange-700 hover:to-amber-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  'Submitting...'
                ) : (
                  <>
                    Start Free Trial
                    <ArrowRight className="inline-block ml-2 w-5 h-5" />
                  </>
                )}
              </button>

              {/* Status messages */}
              {status === 'success' && (
                <div className="text-green-600 text-center font-medium">
                  Thank you! We'll be in touch soon.
                </div>
              )}
              {status === 'error' && (
                <div className="text-red-600 text-center font-medium">
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PaymentReconciliationHero;