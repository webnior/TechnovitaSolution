import React, { useState } from 'react';
import { CheckCircle, Loader2, ArrowRight, Sparkles } from 'lucide-react';

const SuccessMessage = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md mx-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-blue-500" />
      <div className="text-center">
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Amazing! 🎉</h3>
        <p className="text-gray-600 mb-4">
          Your journey to e-commerce success starts now! Our experts will contact you within 24 hours.
        </p>
        <div className="text-sm text-gray-500">
          <p>✓ Personalized Growth Strategy</p>
          <p>✓ Platform-Specific Optimization</p>
          <p>✓ Revenue Acceleration Plan</p>
        </div>
      </div>
    </div>
  </div>
);

export default function ContactForm() {
  const [formData, setFormData] = useState({
    businessName: '',
    businessEmail: '',
    phoneNumber: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        businessName: '',
        businessEmail: '',
        phoneNumber: ''
      });
    }, 5000);
  };

  return (
    <div className="p-8 rounded-xl shadow-lg bg-gradient-to-br from-[#FAD5A5] to-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Ready to Scale Your Business? 🚀
        </h2>
        <p className="text-gray-600">
          Join hundreds of successful sellers who transformed their e-commerce journey
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="group">
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="Business Name"
            className="w-full p-4 rounded-lg border-2 border-gray-300 
            focus:border-[#F5A841] focus:ring-2 focus:ring-[#F5A841]/20 
            transition-all duration-300"
            required
          />
        </div>

        <div>
          <input
            type="email"
            name="businessEmail"
            value={formData.businessEmail}
            onChange={handleChange}
            placeholder="Business Email"
            className="w-full p-4 rounded-lg border-2 border-gray-300 
            focus:border-[#F5A841] focus:ring-2 focus:ring-[#F5A841]/20 
            transition-all duration-300"
            required
          />
        </div>

        <div>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full p-4 rounded-lg border-2 border-gray-300 
            focus:border-[#F5A841] focus:ring-2 focus:ring-[#F5A841]/20 
            transition-all duration-300"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`
            w-full p-5 rounded-lg font-bold text-xl
            ${isSubmitting ? 'bg-gray-400' : 'bg-gradient-to-r from-[#F5A841] to-orange-500'}
            text-white shadow-lg 
            transition-all duration-300
            hover:shadow-xl hover:scale-[1.02]
            active:scale-[0.98]
            relative overflow-hidden
            flex items-center justify-center space-x-3
            disabled:cursor-not-allowed
          `}
        >
          {isSubmitting ? (
            <div className="flex items-center space-x-2">
              <Loader2 className="w-6 h-6 animate-spin" />
              <span>Processing...</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Sparkles className="w-6 h-6" />
              <span>LAUNCH YOUR SUCCESS STORY</span>
              <ArrowRight className="w-6 h-6 animate-bounce" />
            </div>
          )}
          
          {/* Animated gradient border */}
          <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 background-animate" />
        </button>

        {/* Trust indicators */}
        <div className="text-center text-sm text-gray-600 mt-4">
          <p className="flex items-center justify-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            100% Secure & Confidential
          </p>
          <p className="mt-1">Join 500+ Successful Sellers</p>
        </div>
      </form>

      {/* Success Modal */}
      {showSuccess && <SuccessMessage />}

      <style jsx>{`
        .background-animate {
          background-size: 200%;
          animation: gradient 3s ease infinite;
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}