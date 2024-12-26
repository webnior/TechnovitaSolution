import React, { useState } from 'react';
import {
  TrendingUp,
  ShieldCheck,
  BarChart2,
  CreditCard,
  HelpCircle,
  ChevronDown,
  Globe,
  Settings,
  Search,
  ShoppingCart,
  Wrench,
  Users,
  Activity,
  Database,
  Target,
  Award
} from 'lucide-react';

export default function ConsultingFAQSection() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      icon: <Globe size={24} />,
      question: "What comprehensive e-commerce consulting services do you offer?",
      answer: "Our consulting services cover the entire e-commerce ecosystem including marketplace optimization (Amazon, Shopify, BigCommerce), strategic planning, platform selection, SEO optimization, PPC management, conversion rate optimization, and analytics implementation. We provide end-to-end solutions from initial platform setup to ongoing growth strategies."
    },
    {
      icon: <ShieldCheck size={24} />,
      question: "How do you help with Amazon Seller Central and Vendor Central management?",
      answer: "We offer specialized consulting for both Amazon Seller Central and Vendor Central accounts, including account setup, optimization, brand registry, A+ content creation, inventory management, and suspension prevention. Our Amazon-certified consultants provide tailored strategies for both 1P and 3P sellers to maximize visibility and sales."
    },
    {
      icon: <Search size={24} />,
      question: "What does your e-commerce SEO audit process involve?",
      answer: "Our comprehensive SEO audit examines your entire e-commerce presence across technical, on-page, and content aspects. We analyze site structure, metadata, product descriptions, internal linking, mobile optimization, and platform-specific ranking factors. The audit delivers actionable recommendations for improving search visibility and conversion rates."
    },
    {
      icon: <ShoppingCart size={24} />,
      question: "Can you help with multi-platform e-commerce strategy?",
      answer: "Yes, we specialize in creating cohesive multi-platform strategies across Amazon, Shopify, BigCommerce, WooCommerce, and Magento. Our approach ensures consistent brand presence while optimizing for each platform's unique requirements and audience behaviors."
    },
    {
      icon: <Wrench size={24} />,
      question: "What Shopify consulting services do you provide?",
      answer: "Our Shopify consulting includes store setup, theme customization, app integration, conversion optimization, and marketing strategy development. We're certified Shopify experts who can help with everything from basic store optimization to complex Shopify Plus implementations."
    },
    {
      icon: <Settings size={24} />,
      question: "How do you approach Salesforce Commerce Cloud implementations?",
      answer: "As certified Salesforce Commerce Cloud implementation partners, we handle the entire implementation process from initial planning and customization to integration with existing systems. We ensure proper data migration, custom feature development, and staff training."
    },
    {
      icon: <Users size={24} />,
      question: "What specialized B2B e-commerce consulting services do you offer?",
      answer: "Our B2B e-commerce consulting focuses on complex requirements including custom pricing, bulk ordering, account hierarchies, and integration with ERP systems. We have extensive experience with B2B platforms and can help optimize your digital commerce infrastructure."
    },
    {
      icon: <Activity size={24} />,
      question: "How do you optimize e-commerce conversion rates?",
      answer: "We use a data-driven approach to conversion optimization, including user behavior analysis, A/B testing, checkout optimization, and personalization strategies. Our team continuously monitors and adjusts these elements to maximize your conversion rates across all platforms."
    },
    {
      icon: <Database size={24} />,
      question: "What analytics and reporting services do you provide?",
      answer: "We offer comprehensive analytics setup and monitoring, including Google Analytics implementation, custom dashboard creation, and regular performance reporting. Our analytics consulting helps you understand customer behavior, track KPIs, and make data-driven decisions."
    },
    {
      icon: <BarChart2 size={24} />,
      question: "How do you handle PPC campaign management?",
      answer: "Our PPC consultants manage campaigns across multiple platforms including Amazon Advertising, Google Ads, and social media. We focus on optimizing ad spend, improving targeting, and maximizing ROAS through continuous testing and refinement."
    },
    {
      icon: <Target size={24} />,
      question: "What platform migration services do you offer?",
      answer: "We handle migrations between all major e-commerce platforms, ensuring seamless data transfer, URL structure preservation, and minimal business disruption. Our migration services include thorough testing and post-migration optimization."
    },
    {
      icon: <Award size={24} />,
      question: "How do you help with marketplace suspension issues?",
      answer: "Our marketplace suspension consultants specialize in account reinstatement, policy compliance, and prevention strategies. We help create action plans, prepare appeals, and implement processes to prevent future suspensions across all marketplace platforms."
    },
    {
      icon: <TrendingUp size={24} />,
      question: "What growth consulting services do you provide?",
      answer: "Our growth consulting focuses on scaling your e-commerce business through market expansion, channel diversification, and optimization of existing operations. We create customized growth strategies based on your business goals and market opportunities."
    },
    {
      icon: <HelpCircle size={24} />,
      question: "Do you provide ongoing support and maintenance services?",
      answer: "Yes, we offer continuous support packages that include regular platform updates, performance monitoring, security maintenance, and ongoing optimization. Our team provides proactive management to ensure your e-commerce operations run smoothly."
    },
    {
      icon: <CreditCard size={24} />,
      question: "What are your consulting fee structures?",
      answer: "We offer flexible consulting arrangements including project-based pricing, monthly retainers, and custom packages based on your specific needs. Our transparent pricing model ensures you understand exactly what services are included and their associated costs."
    }
  ];

  return (
    <section 
      className="container mx-auto px-4 py-16"
      style={{ fontFamily: 'Montserrat, sans-serif' }}
    >
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 uppercase tracking-wider">
        E-commerce Consulting FAQ
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`
              rounded-3xl overflow-hidden 
              transition-all duration-300 
              border-2 
              ${openFaq === index 
                ? "border-[#F5A841] bg-gradient-to-br from-[#FFF4E6] to-[white]" 
                : "border-[#F5A841]/30 bg-white"}
              relative
            `}
          >
            <button
              className={`
                w-full p-5 flex items-center justify-between text-left
                rounded-3xl
                transition-all duration-300
                outline-none focus:outline-none active:outline-none
                ${openFaq === index 
                  ? "bg-[#FFF4E6] text-[#F5A841]" 
                  : "hover:bg-[#FFF4E6]/50"}
              `}
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
              style={{
                WebkitTapHighlightColor: 'transparent',
                boxShadow: 'none',
              }}
            >
              <div className="flex items-center space-x-4">
                <span className={openFaq === index ? "text-[#F5A841]" : "text-gray-500"}>
                  {faq.icon}
                </span>
                <span className={`
                  font-semibold text-lg 
                  ${openFaq === index ? "text-[#F5A841]" : "text-gray-800"}
                `}>
                  {faq.question}
                </span>
              </div>
              <ChevronDown 
                size={24}
                className={`
                  transform transition-transform 
                  ${openFaq === index 
                    ? "rotate-180 text-[#F5A841]" 
                    : "text-gray-500"}
                `}
              />
            </button>

            {openFaq === index && (
              <div 
                className="p-5 bg-[#FFF4E6] border-t-2 border-[#F5A841]/20"
              >
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}