import React, { useState } from 'react';
import { 
  TrendingUp, ShieldCheck, BarChart2, CreditCard, 
  HelpCircle, Users, Settings, Globe, Clock,
  BookOpen, Target, ShoppingCart, DollarSign,
  PieChart, Briefcase, ChevronDown
} from 'lucide-react';

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      icon: <ShieldCheck />,
      question: "What does your Amazon account management service include?",
      answer: "Our comprehensive Amazon account management services cover everything from initial account setup to ongoing optimization. This includes product listing optimization, inventory management, pricing strategy, competitor analysis, advertising campaign management, and performance analytics. We provide dedicated account managers who ensure your Amazon business operates smoothly across all aspects of the platform.",
      keywords: ["amazon account management services", "account management amazon"]
    },
    {
      icon: <TrendingUp />,
      question: "How can your Amazon account management agency improve my sales performance?",
      answer: "As a specialized Amazon account management agency, we implement data-driven strategies to boost your sales performance. This includes optimizing product listings for better visibility, implementing strategic pricing, managing PPC campaigns, improving inventory turnover, and enhancing customer service metrics. Our team continuously monitors performance metrics and adjusts strategies to maximize your ROI.",
      keywords: ["amazon account management agency", "amazon seller account management"]
    },
    {
      icon: <Globe />,
      question: "Do you offer international Amazon marketplace management?",
      answer: "Yes, we provide complete Amazon account handling for multiple international marketplaces. Our global account managers are well-versed in managing accounts across Amazon.com, Amazon.co.uk, Amazon.in, and other regional platforms. We help with marketplace-specific compliance, localization, and strategic expansion to new markets.",
      keywords: ["amazon global account manager", "amazon marketplace account manager"]
    },
    {
      icon: <Settings />,
      question: "What makes your Amazon Seller Central account management unique?",
      answer: "Our Amazon Seller Central account management stands out through our comprehensive approach. We combine technical expertise in platform operations with strategic business insights. This includes automated inventory management, advanced analytics reporting, strategic pricing optimization, and proactive problem resolution. We maintain all crucial seller metrics to ensure account health and growth.",
      keywords: ["amazon seller central account management", "seller central account management"]
    },
    {
      icon: <DollarSign />,
      question: "How do you handle Amazon advertising and PPC campaigns?",
      answer: "Our Amazon ads account managers specialize in creating and optimizing advertising campaigns that maximize ROI. We handle keyword research, bid management, campaign structure optimization, and performance tracking. Our team regularly analyzes advertising metrics to refine targeting and improve ad spend efficiency.",
      keywords: ["amazon ads manager account", "amazon advertising", "amazon ads account manager"]
    },
    {
      icon: <Target />,
      question: "What strategic account management services do you provide?",
      answer: "As your strategic account manager for Amazon, we focus on long-term growth and market positioning. Our strategic account services include market analysis, competition monitoring, brand development, expansion planning, and performance optimization. We work closely with you to develop and implement strategies aligned with your business goals.",
      keywords: ["strategic account manager amazon", "amazon strategic account services"]
    },
    {
      icon: <Briefcase />,
      question: "How do you support Amazon Business accounts?",
      answer: "Our Amazon business account manager services are tailored for B2B sellers. We help optimize your Business Prime presence, manage bulk pricing strategies, handle corporate customer relationships, and ensure compliance with B2B-specific requirements. We also assist with catalog management and business-focused marketing strategies.",
      keywords: ["amazon business account manager", "manage amazon business account"]
    },
    {
      icon: <Users />,
      question: "What support can I expect from your account management team?",
      answer: "You'll be assigned a dedicated Amazon account manager who serves as your primary point of contact. They provide regular performance updates, handle day-to-day account operations, and coordinate with our specialist teams for advertising, catalog management, and technical support. We offer responsive communication and proactive problem-solving.",
      keywords: ["amazon account manager service", "account manager for amazon"]
    },
    {
      icon: <ShoppingCart />,
      question: "How do you handle FBA inventory management?",
      answer: "Our Amazon FBA account managers use advanced inventory management tools to optimize your FBA operations. We monitor stock levels, manage reorder points, analyze storage fees, and coordinate shipments. Our team ensures optimal inventory levels to avoid stockouts while minimizing storage costs.",
      keywords: ["amazon fba account manager", "amazon account handling"]
    },
    {
      icon: <BookOpen />,
      question: "What experience do you have with Vendor Central accounts?",
      answer: "Our Amazon vendor account manager team has extensive experience managing Vendor Central relationships. We handle purchase order management, retail analytics, marketing programs, and vendor negotiations. Our services help optimize your vendor operations and maintain strong relationships with Amazon's retail team.",
      keywords: ["amazon vendor account manager", "amazon account maintenance"]
    },
    {
      icon: <PieChart />,
      question: "How do you handle performance analytics and reporting?",
      answer: "We provide comprehensive Amazon online account management reporting including sales analytics, inventory performance, advertising metrics, and competitive analysis. Our customized dashboards offer real-time insights into your account's performance, and we deliver detailed monthly reports with actionable recommendations.",
      keywords: ["amazon online account management", "amazon account management companies"]
    },
    {
      icon: <Clock />,
      question: "What is your response time for account issues?",
      answer: "As your Amazon online account manager, we provide rapid response to account issues, typically within 2-4 business hours. Our team monitors account health metrics continuously and takes proactive measures to prevent potential problems. We handle case management, policy compliance, and issue resolution efficiently.",
      keywords: ["amazon online account manager", "amazon account maintenance"]
    },
    {
      icon: <Globe />,
      question: "Can you help with international marketplace expansion?",
      answer: "Yes, our global account management services help sellers expand into international Amazon marketplaces. We handle marketplace registration, listing translation, international compliance, and local market optimization. Our team guides you through the entire expansion process while managing your existing marketplace presence.",
      keywords: ["amazon marketplace account manager", "amazon global account manager"]
    },
    {
      icon: <Target />,
      question: "What specialized services do you offer for brand registered sellers?",
      answer: "For brand registered sellers, we provide enhanced content management, A+ content optimization, brand store development, and brand protection services. Our team leverages all available brand tools and features to strengthen your brand presence and drive customer engagement on Amazon.",
      keywords: ["amazon account management services", "amazon seller account management services"]
    },
    {
      icon: <CreditCard />,
      question: "What are your pricing models for account management services?",
      answer: "We offer flexible pricing models based on your business size and service needs. Options include percentage of sales, fixed monthly fees, or hybrid models. All our Amazon paid account management services are transparent with no hidden charges, and we provide custom quotes after a detailed assessment of your requirements.",
      keywords: ["amazon paid account management", "amazon account management services"]
    }
  ];

  return (
    <section 
      className="container mx-auto px-4 py-16"
      style={{ fontFamily: 'Montserrat, sans-serif' }}
    >
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 uppercase tracking-wider">
        Amazon Account Management FAQ
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
                {React.cloneElement(faq.icon, {
                  className: `w-6 h-6 ${openFaq === index ? "text-[#F5A841]" : "text-gray-500"}`
                })}
                <span className={`
                  font-semibold text-lg 
                  ${openFaq === index ? "text-[#F5A841]" : "text-gray-800"}
                `}>
                  {faq.question}
                </span>
              </div>
              <ChevronDown 
                className={`
                  w-6 h-6 
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
};

export default FAQSection;