"use client";

import { useState } from "react";
import { motion } from 'framer-motion';

import {
  MessageCircle,
  CheckCircle,
  Plus,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Phone,
} from "lucide-react";

const ServiceReasons = [
    {
      icon: <CheckCircle strokeWidth={3} className="w-5 h-5" />,
      text: "Struggling with Complex E-commerce Platform Onboarding",
      problem: "Navigating intricate seller registration processes on Ajio, Myntra, Flipkart, and Amazon",
    },
    {
      icon: <CheckCircle strokeWidth={3} className="w-5 h-5" />,
      text: "Ineffective Product Listing Strategies",
      problem: "Difficulty in creating compelling product descriptions and optimized listings",
    },
    {
      icon: <CheckCircle strokeWidth={3} className="w-5 h-5" />,
      text: "Poor Product SEO Performance",
      problem: "Low visibility and search rankings affecting product discoverability",
    },
    {
      icon: <CheckCircle strokeWidth={3} className="w-5 h-5" />,
      text: "Inconsistent Sales and Revenue",
      problem: "Challenges in maintaining steady sales across multiple e-commerce platforms",
    },
    {
      icon: <CheckCircle strokeWidth={3} className="w-5 h-5" />,
      text: "Payment Reconciliation Nightmares",
      problem: "Complex and time-consuming financial tracking across different platforms",
    },
    {
      icon: <CheckCircle strokeWidth={3} className="w-5 h-5" />,
      text: "Limited Advertising Effectiveness",
      problem: "Inefficient product promotion and low return on advertising spend",
    }
  ];

const successStories = [
  {
    name: "Fashion Retail Store",
    achievement: "4x growth in 6 months",
    platform: "Multiple Marketplaces",
  },
  {
    name: "Electronics Seller",
    achievement: "₹1Cr+ monthly sales",
    platform: "Amazon & Flipkart",
  },
  {
    name: "Beauty Products Brand",
    achievement: "500+ products listed",
    platform: "Nykaa & Myntra",
  },
];

const faqs = [
  {
    question: "How can you help improve my marketplace sales?",
    answer:
      "We provide comprehensive solutions including optimized listings, competitive pricing strategies, PPC campaign management, and inventory optimization.",
  },
  {
    question: "What's included in your account management service?",
    answer:
      "Our service covers daily order processing, inventory management, catalog optimization, competitor price tracking, and performance analytics.",
  },
  {
    question: "How long does it take to set up and start selling?",
    answer:
      "Typically, we can complete account setup within 3-7 business days, including documentation, verification, and initial product listings.",
  },
];


//   {/* Services Reasons Section */} component
const ServiceSection = () => {
    const cardVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut"
        }
      },
      hover: {
        scale: 1.03,
        boxShadow: "0 10px 25px rgba(78, 188, 213, 0.3)",
        transition: {
          duration: 0.3
        }
      }
    };
  
    return (
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 uppercase text-gray-800">
          OUR SERVICES IS FOR YOU IF YOU
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {ServiceReasons.slice(0, 3).map((reason, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                variants={cardVariants}
                className="flex items-center space-x-4 p-5 rounded-xl 
                bg-white border border-[#4EBCD5]/10 
                transition-all duration-300 
                hover:border-[#4EBCD5]/30"
                style={{
                  boxShadow: "6px 6px 19px -2px rgba(0, 188, 213, .2)"
                }}
              >
                <div className="w-10 h-10 rounded-full bg-[#4EBCD5] 
                  flex items-center justify-center text-white 
                  shadow-md shadow-[#4EBCD5]/50">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">{reason.text}</h3>
                  <p className="text-sm text-gray-600 mt-1">{reason.problem}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="space-y-6">
            {ServiceReasons.slice(3).map((reason, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                variants={cardVariants}
                className="flex items-center space-x-4 p-5 rounded-xl 
                bg-white border border-[#4EBCD5]/10 
                transition-all duration-300 
                hover:border-[#4EBCD5]/30"
                style={{
                  boxShadow: "6px 6px 19px -2px rgba(0, 188, 213, .2)"
                }}
              >
                <div className="w-10 h-10 rounded-full bg-[#4EBCD5] 
                  flex items-center justify-center text-white 
                  shadow-md shadow-[#4EBCD5]/50">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">{reason.text}</h3>
                  <p className="text-sm text-gray-600 mt-1">{reason.problem}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  

export default function TechnovitaLandingPage() {
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [openFaq, setOpenFaq] = useState(null);

  const handlePlatformToggle = (platform) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <main className="bg-white">
      {/* First Section - Brand Logo */}
      <section
        className="h-15 flex items-center justify-center"
        style={{ backgroundColor: "#4EBCD5" }}
      >
        <h1 className="text-white text-2xl  tracking-wider">
          TechnovitaSolution
        </h1>
      </section>

      {/* Second Section - Hero with Form */}
      <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-5xl font-bold">
            Winning Formula to <br />
            Success as a <br />
            Online <span className="text-[#4EBCD5]">Seller in 2025</span>
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700">
            Transform Your E-commerce Potential
          </h2>
          <p className="text-gray-600">
            Comprehensive marketplace management and growth strategies tailored
            to boost your online selling success.
          </p>
          <div className="flex space-x-4">
            <button
              className="bg-red-500 text-white px-6 py-3 rounded-lg 
              hover:bg-red-600 transition-all duration-300 
              transform hover:-translate-y-1 hover:scale-105 
              flex items-center gap-2"
            >
              <Phone className="w-5 h-5" /> Call Now
            </button>
            <button
              className="bg-green-500 text-white px-6 py-3 rounded-lg 
              hover:bg-green-600 transition-all duration-300 
              transform hover:-translate-y-1 hover:scale-105 
              flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp
            </button>
          </div>
        </div>

        {/* Right Form */}
        <div
          className="p-8 rounded-lg shadow-lg"
          style={{ backgroundColor: "#B2E5EE" }}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            Ready to Skyrocket Your Sales?
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Business Name"
              className="w-full p-3 rounded-lg border-2 border-gray-300 focus:border-[#4EBCD5]"
              required
            />
            <input
              type="email"
              placeholder="Business Email"
              className="w-full p-3 rounded-lg border-2 border-gray-300 focus:border-[#4EBCD5]"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 rounded-lg border-2 border-gray-300 focus:border-[#4EBCD5]"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#4EBCD5] text-white p-3 rounded-lg 
              hover:bg-opacity-90 transition-all duration-300"
            >
              Get Started
            </button>
          </form>
        </div>
      </section>

      {/* Services Reasons Section */}
      <ServiceSection />

      {/* Call to Action Section */}
      <section
        className="text-center py-16"
        style={{ backgroundColor: "#E3F6FA" }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">
            Do the above lines resonate with YOU?
          </h2>
          <p className="mb-6 text-gray-700">
            Our services are designed specifically to address your unique
            e-commerce challenges
          </p>
          <button
            className="bg-red-500 text-white px-12 py-4 rounded-lg 
            hover:bg-red-600 transition-all duration-300 
            transform hover:-translate-y-1 hover:scale-105"
          >
            Call Now
          </button>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Seller Success Stories
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg transition-all duration-300 
              hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-[#4EBCD5]">
                {story.name}
              </h3>
              <p className="text-gray-600">{story.achievement}</p>
              <p className="text-sm text-gray-500">{story.platform}</p>
            </div>
          ))}
        </div>
      </section>

      {/* No Bullshit Section */}
      <section
      className="text-center py-12 text-white relative overflow-hidden"
      style={{
        backgroundColor: "black",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      {/* Background Subtle Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#4EBCD5 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Bold Messaging */}
        <div className="text-[#4EBCD5] text-3xl md:text-4xl font-extrabold mb-10 space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="tracking-wider uppercase"
          >
            NO BULLSHIT
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="tracking-wider uppercase"
          >
            NO FAALTU GYAAN
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="tracking-wider uppercase"
          >
            NO TIME WASTE
          </motion.div>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white mb-8 text-lg max-w-2xl mx-auto"
        >
          We deliver real results, not empty promises. Straight talk, proven
          strategies, and tangible growth.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.a
          href="tel:+917451073504"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="block w-[60%] md:w-[65%] max-w-[800px] mx-auto 
            bg-red-500 text-white py-4 rounded-lg 
            hover:bg-red-600 transition-all duration-300 
            transform hover:scale-105 shadow-2xl 
            text-lg md:text-xl font-bold tracking-wider 
            flex items-center justify-center gap-4 
            group"
        >
          <Phone className="w-6 h-6 transition-transform group-hover:rotate-12" />
          UNLOCK YOUR E-COMMERCE POTENTIAL NOW!
        </motion.a>
      </div>

      {/* Subtle Animated Overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r 
          from-[#4EBCD5] via-red-500 to-[#4EBCD5] animate-pulse"
      />
    </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden transition-all duration-300 
              ${openFaq === index ? "bg-[#4EBCD5] text-white" : "bg-white"}`}
            >
              <button
                className="w-full p-4 flex justify-between items-center"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="text-left font-semibold">{faq.question}</span>
                <Plus
                  className={`w-6 h-6 transform transition-transform 
                  ${openFaq === index ? "rotate-45" : ""}`}
                />
              </button>
              {openFaq === index && (
                <div className="p-4 border-t">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        className="text-center py-8 text-white"
        style={{ backgroundColor: "black" }}
      >
        <div className="flex justify-center space-x-6 mb-4">
          <Instagram className="w-6 h-6 text-white hover:text-[#4EBCD5]" />
          <Facebook className="w-6 h-6 text-white hover:text-[#4EBCD5]" />
          <Twitter className="w-6 h-6 text-white hover:text-[#4EBCD5]" />
          <Youtube className="w-6 h-6 text-white hover:text-[#4EBCD5]" />
        </div>
        <p>Copyright 2019-2024 @Technovita Solutions</p>
      </footer>
    </main>
  );
}
