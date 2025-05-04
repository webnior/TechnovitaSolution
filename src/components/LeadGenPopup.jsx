import React, { useState, useEffect } from 'react';
import { X, Phone, MessageCircle, Download } from 'lucide-react';
import { toast } from 'sonner';

const formatTime = (seconds) => {
  return `${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, '0')}`;
};

const LeadGenPopup = ({ 
  isOpen, 
  onClose,
  title = 'E-commerce Growth Offer',
  subtitle = 'Get a FREE 10-minute consultation worth ₹3,000 to accelerate your e-commerce business!',
  phoneNumber = '+919876543210'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(50);

  useEffect(() => {
    if (!isSubmitted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      onClose();
    }
  }, [timeLeft, isSubmitted, onClose]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast.success('Thank you for your interest! Check your email for the free guide.');
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 bg-white text-gray-400 hover:text-gray-600 rounded-full p-1.5 transition-all duration-200 transform hover:scale-110 shadow-lg border border-gray-100 group"
          aria-label="Close popup"
        >
          <X className="w-5 h-5 transition-transform group-hover:rotate-90" />
        </button>

        <div className="p-6">
          {!isSubmitted ? (
            <>

              {/* Header */}
              <div className="text-center mb-3">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {title}
                </h2>
                <p className="text-gray-600 text-sm">
                  {subtitle}
                </p>
              </div>
              {!isSubmitted && timeLeft > 0 && (
                <p className="text-red-500 text-center mb-6 font-medium">
                  Offer expires in {formatTime(timeLeft)}
                </p>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-400 text-gray-900"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-400 text-gray-900"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email (Optional)"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-400 text-gray-900"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-11/12 mx-auto block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium text-lg py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/30 border border-indigo-400/30"
                >
                  {isSubmitting ? 'Just a moment...' : '🚀 Unlock Your Growth Strategy'}
                </button>


              </form>

              {/* Contact buttons */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <button
                  onClick={() => window.location.href = `tel:${phoneNumber}`}
                  className="flex items-center justify-center gap-2 border border-orange-500 text-orange-600 hover:bg-orange-50 font-medium py-3 px-4 rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Expert</span>
                </button>
                <button
                  onClick={() => {
                    const message = encodeURIComponent("Hi, I'm interested in the free consultation. Can you help me?");
                    window.location.href = `https://wa.me/${phoneNumber.replace('+', '')}?text=${message}`;
                  }}
                  className="flex items-center justify-center gap-2 border border-green-500 text-green-600 hover:bg-green-50 font-medium py-3 px-4 rounded-lg transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </>
          ) : (
            <div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-6">
                  Your free guide has been sent to your email. You can also download it directly below:
                </p>
                <a 
                  href="/path-to-your-guide.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-green-50 text-green-600 hover:bg-green-100 font-medium py-3 px-6 rounded-lg transition-colors mb-8"
                >
                  <Download className="w-5 h-5" />
                  Download Guide Now
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadGenPopup;
