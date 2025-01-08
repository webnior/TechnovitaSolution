import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Target,
  Settings,
  LineChart,
  Check,
  DollarSign,
  Users,
  TrendingUp,
  ShoppingCart,
  MessageCircle,
  BarChart2,
  ShieldCheck,
  BookOpen,
  Store,
  TrendingDown,
  ArrowUpRight,
  CreditCard,
  HelpCircle,
  ChevronDown,
  Globe,
  Search,
  Tools,
  Activity,
  Database,
  Award
} from "lucide-react";
import Head from "next/head";
import Footer from "@/src/components/Footer";
import ProtectedContentWrapper from '@/src/components/ProtectedContentWrapper';
import ConsultingFAQSection from '@/src/components/consulation/ConsultingFAQSection'
// Hero Section Component with Updated Form
const ConsultationHero = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    phoneNumber: "",
    platform: "select",
    businessStage: "select"
  });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "consultationRequest",
          ...formData
        }),
      });

      if (!response.ok) throw new Error("Failed to send email");

      setStatus("success");
      setFormData({
        businessName: "",
        email: "",
        phoneNumber: "",
        platform: "select",
        businessStage: "select"
      });
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(#FDBA74_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6 lg:space-y-8 lg:sticky lg:top-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Expert Ecommerce
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
                {" "}
                Growth Consultation
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Unlock your ecommerce potential with our strategic consultation services. From marketplace onboarding to sales optimization, we guide you through every step of your growth journey.
            </p>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "AJIO", icon: ShoppingCart },
                  { name: "Myntra", icon: Store },
                  { name: "Nykaa", icon: ShoppingCart },
                  { name: "Amazon", icon: ShoppingCart }
                ].map((platform) => (
                  <div
                    key={platform.name}
                    className="flex items-center space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border-2 bg-white border-orange-300 text-gray-700"
                  >
                    <platform.icon className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                    <span>{platform.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-orange-200"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              🎯 Transform Your Business Today
            </h2>
            <p className="text-gray-600 mb-6">
              Book your FREE 30-minute strategy session (Worth ₹5,000)
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) =>
                    setFormData({ ...formData, businessName: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                  placeholder="Enter your business name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNumber: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Preferred Platform
                </label>
                <select
                  value={formData.platform}
                  onChange={(e) =>
                    setFormData({ ...formData, platform: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                  required
                >
                  <option value="select">Select Platform</option>
                  <option value="myntra">Myntra</option>
                  <option value="ajio">AJIO</option>
                  <option value="nykaa">Nykaa</option>
                  <option value="amazon">Amazon</option>
                  <option value="multiple">Multiple Platforms</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Business Stage
                </label>
                <select
                  value={formData.businessStage}
                  onChange={(e) =>
                    setFormData({ ...formData, businessStage: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                  required
                >
                  <option value="select">Select Stage</option>
                  <option value="planning">Planning to Start</option>
                  <option value="onboarding">Ready for Onboarding</option>
                  <option value="active">Already Selling</option>
                  <option value="scaling">Looking to Scale</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-orange-600 text-white py-3 sm:py-4 rounded-xl font-semibold hover:bg-orange-700 transition-colors duration-300 text-base sm:text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting"
                  ? "Submitting..."
                  : "Claim Your Free Strategy Session 🚀"}
              </button>

              {status === "success" && (
                <div className="text-green-600 text-center font-medium">
                  Thank you! We'll contact you within 24 hours to schedule your session.
                </div>
              )}
              {status === "error" && (
                <div className="text-red-600 text-center font-medium">
                  Something went wrong. Please try again.
                </div>
              )}

              <p className="text-sm text-gray-500 text-center">
                *Limited availability - Only 3 free sessions available this week
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Updated Services Section Component
const ConsultationServices = () => {
  const services = [
    {
      title: "Ecommerce Strategy & Planning",
      icon: Target,
      description: "Comprehensive strategy development for your ecommerce success",
      features: [
        "Tailored ecommerce strategy based on business goals",
        "Detailed competitor analysis and market research",
        "Pricing strategy optimization for maximum profitability",
        "Revenue growth planning and projections",
        "Risk assessment and mitigation strategies"
      ],
    },
    {
      title: "Sales Growth Consultation",
      icon: TrendingUp,
      description: "Expert guidance to boost your marketplace performance",
      features: [
        "Sales performance analysis and optimization",
        "Inventory management strategies",
        "Marketing and promotion planning",
        "Customer engagement optimization",
        "Performance metrics tracking and improvement"
      ],
    },
    {
      title: "Marketplace Onboarding",
      icon: Store,
      description: "Seamless onboarding support for major marketplaces",
      features: [
        "Platform-specific registration guidance",
        "Documentation and compliance support",
        "Catalog setup and optimization",
        "Integration with existing systems",
        "Standard operating procedures development"
      ],
    },
    {
      title: "Brand Development Strategy",
      icon: BookOpen,
      description: "Build and grow your brand presence across marketplaces",
      features: [
        "Brand identity development",
        "Content strategy creation",
        "Visual merchandising guidelines",
        "Brand protection strategies",
        "Customer experience optimization"
      ],
    },
    {
      title: "Performance Analytics",
      icon: BarChart2,
      description: "Data-driven insights for informed decision making",
      features: [
        "KPI tracking and analysis",
        "Performance benchmarking",
        "Conversion optimization",
        "Customer behavior analysis",
        "ROI measurement and optimization"
      ],
    },
    {
      title: "Technical Implementation",
      icon: Settings,
      description: "Technical support for marketplace success",
      features: [
        "Platform integration support",
        "API implementation guidance",
        "Automation setup assistance",
        "Technical troubleshooting",
        "System optimization recommendations"
      ],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-orange-50 to-orange-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#FDBA74_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Specialized
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
              {" "}
              Consulting Services
            </span>
          </h2>
          <p className="text-xl text-gray-700">
            Comprehensive consultation services tailored to elevate your ecommerce presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-4 rounded-full bg-orange-100 inline-block mb-6">
                <service.icon className="w-8 h-8 text-orange-600" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-6">{service.description}</p>

              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-orange-600" />
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

// Updated Features Section with orange theme
const ConsultationFeatures = () => {
  const features = [
    {
      icon: Target,
      title: "Platform Selection Strategy",
      description: "Expert guidance on choosing the right marketplaces based on your product category and business goals.",
    },
    {
      icon: LineChart,
      title: "Growth Optimization",
      description: "Data-driven strategies to optimize your presence and boost sales across all chosen platforms.",
    },
    {
      icon: Users,
      title: "Customer Experience Design",
      description: "Strategic consultation on creating seamless customer experiences that drive repeat purchases.",
    },
    {
      icon: ShieldCheck,
      title: "Compliance & Documentation",
      description: "Comprehensive guidance on marketplace compliance and documentation requirements.",
    },
    {
      icon: BarChart2,
      title: "Performance Analytics",
      description: "Advanced analytics setup and insights for data-driven business decisions.",
    },
    {
      icon: MessageCircle,
      title: "Ongoing Support",
      description: "Regular check-ins and support to ensure consistent growth and problem resolution.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Accelerate Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
              {" "}
              Ecommerce Growth
            </span>
          </h2>
          <p className="text-xl text-gray-700">
            Leverage our expertise and proven methodologies to scale your online business effectively
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-orange-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <feature.icon className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Stats Section Component (New Addition)
const ConsultationStats = () => {
  const stats = [
    { value: "500+", label: "Sellers Consulted" },
    { value: "₹100Cr+", label: "Revenue Generated" },
    { value: "6+", label: "Years Experience" },
    { value: "95%", label: "Success Rate" },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-orange-600 to-orange-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-orange-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Call To Action Section (New Addition)
const ConsultationCTA = () => {
  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
                {" "}
                Ecommerce Business?
              </span>
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Book your free consultation session today and get personalized insights worth ₹5,000
            </p>
            <button className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 transition-colors duration-300 text-lg shadow-lg hover:shadow-xl">
              Schedule Your Free Session Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};



// Updated Main Component
const EcommerceConsultationPage = () => {
  return (
    <>
      <Head>
        <title>Expert Ecommerce Consulting Services | AJIO, MYNTRA, AMAZON Consultation</title>
        <meta
          name="description"
          content="Transform your online business with expert ecommerce consulting services. Specialized in Amazon, Flipkart, Myntra, Nykaa, AJIO seller consulting and marketplace growth strategies."
        />
        <meta
          name="keywords"
          content="ecommerce consultant, amazon seller consulting services, myntra seller consulting services, Ajio seller consulting services, Nykaa seller consulting services, Flipkart consulting, ecommerce business consultant, marketplace consultants, ecommerce consulting companies, ecommerce strategy consultants"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Complete Ecommerce Consulting Solutions | Expert Marketplace Guidance"
        />
        <meta
          property="og:description"
          content="Professional ecommerce consulting services for Amazon, Myntra, Ajio, Meesho, Nykaa, Flipkart & more. Expert guidance for marketplace success and business growth."
        />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href="https://www.technovitasolution.in/services/ecommerce-consultation"
        />
      </Head>
      <ProtectedContentWrapper>
        <main>
          <div className="bg-white">
            <ConsultationHero />
            <ConsultationStats />
            <ConsultationServices />
            <ConsultationFeatures />
            <ConsultationCTA />
            <ConsultingFAQSection/>
          </div>
        </main>
        <Footer />
      </ProtectedContentWrapper>
    </>
  );
};

export default EcommerceConsultationPage;