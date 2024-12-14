import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 22,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let newSeconds = prev.seconds - 1;
        let newMinutes = prev.minutes;
        let newHours = prev.hours;
        let newDays = prev.days;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }
        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }
        if (newHours < 0) {
          newHours = 23;
          newDays -= 1;
        }

        return { days: newDays, hours: newHours, minutes: newMinutes, seconds: newSeconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const formSlideIn = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8, delay: 0.2 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full opacity-10"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Urgency Timer */}
        <motion.div 
          className="bg-red-50 border-2 border-red-300 rounded-lg p-4 mb-8 text-center max-w-xl mx-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex justify-center items-center space-x-4 text-red-600">
            <Clock className="w-6 h-6" />
            <span className="text-xl font-bold">Limited Time Offer Ends In:</span>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className="bg-white shadow-md rounded-lg p-3 w-16 h-16 flex items-center justify-center">
                  <span className="text-3xl font-bold text-red-600">{value}</span>
                </div>
                <span className="text-xs text-red-700 uppercase mt-2">{unit}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-red-700 font-medium">
            Exclusive Launch Discount - 50% Off First 3 Months!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content Section */}
          <motion.div 
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={fadeIn.transition}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Dominate E-commerce or Get Left Behind
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              In the cutthroat world of online selling, mediocrity is a death sentence. Our platform is your secret weapon to transform your online store from surviving to thriving – with zero technical headaches.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: TrendingUp, text: "Rocket Your Sales", color: "text-green-600" },
                { icon: ShieldCheck, text: "Bulletproof Analytics", color: "text-blue-600" },
                { icon: Zap, text: "Instant Optimization", color: "text-purple-600" }
              ].map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + (index * 0.2) }}
                  className={`flex items-center space-x-3 ${feature.color}`}
                >
                  <feature.icon className="w-6 h-6" />
                  <span className="font-semibold">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Form Section */}
          <motion.div
            initial={formSlideIn.initial}
            animate={formSlideIn.animate}
            transition={formSlideIn.transition}
            className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-blue-100"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Claim Your Competitive Edge
            </h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:border-blue-400"
                  placeholder="Your E-commerce Empire"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:border-blue-400"
                  placeholder="your-success@email.com"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-md py-3 px-4 font-bold hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform"
              >
                Secure My 50% Discount Now!
              </motion.button>
              <p className="text-xs text-gray-500 text-center mt-2">
                * No credit card required. Cancel anytime.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;