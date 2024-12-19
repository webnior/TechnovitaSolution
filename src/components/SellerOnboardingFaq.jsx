import React, { useState } from 'react';
import { 
  Store, Settings, TrendingUp, Globe, ShieldCheck, 
  BarChart2, Sparkles, ShoppingBag, ClipboardCheck,
  Briefcase, Users, Database, CheckCircle, Award,ChevronDown
} from 'lucide-react';

const SellerOnboardingFaq = () => {
  const [openFaq, setOpenFaq] = useState(null);
  
  const faqs = [
    {
      icon: Store,
      question: "What is the seller onboarding process for major e-commerce platforms like Amazon, Flipkart, and Myntra?",
      answer: "Our comprehensive seller onboarding services cover the complete process across major platforms. For Amazon seller onboarding, we handle documentation, account setup, and verification. The Flipkart seller onboarding process includes GST registration verification, bank account setup, and catalog creation. For Myntra seller onboarding, we manage brand approval, quality checks, and integration setup. Our seller onboarding specialists ensure a smooth transition onto each platform while following their specific requirements and guidelines."
    },
    {
      icon: Settings,
      question: "What documents are required for Amazon seller account creation and other marketplace registrations?",
      answer: "Amazon seller account creation documents required typically include: GSTIN, PAN card, bank account details, and business proof. Similar documentation is needed for Myntra seller account creation and Flipkart seller account requirements. Our seller onboarding services help compile and verify all necessary paperwork across platforms like Meesho, Nykaa, and Ajio, ensuring your seller account creation process is seamless and compliant."
    },
    {
      icon: TrendingUp,
      question: "How does your seller onboarding service assist with Meesho and Nykaa marketplace registration?",
      answer: "Our seller onboarding service facilitates Meesho seller account creation and Nykaa seller registration process. For Meesho seller account requirements, we handle the complete verification process, including business documentation and catalog setup. The Nykaa seller onboarding process involves brand authentication, product listing guidelines, and integration with their seller central system. We provide end-to-end support for both platforms."
    },
    {
      icon: Globe,
      question: "What is the process for Tata CLiQ and FirstCry seller account creation?",
      answer: "For Tata CLiQ seller account creation, we manage the entire onboarding workflow including brand approval, documentation, and system integration. FirstCry seller registration involves specific quality standards and category approval processes. Our seller onboarding specialists handle both Tata CLiQ seller registration process and FirstCry seller central setup, ensuring compliance with their unique requirements."
    },
    {
      icon: ShieldCheck,
      question: "How long does the Amazon and Flipkart seller onboarding process take?",
      answer: "The Amazon seller account creation process typically takes 3-5 business days with our expert assistance. Flipkart seller account creation can be completed in a similar timeframe. Our seller onboarding specialists expedite the process while ensuring all platform-specific requirements are met. We handle everything from initial seller onboarding form submission to final account activation."
    },
    {
      icon: BarChart2,
      question: "What support do you provide for Ajio and Aza Fashion seller registration?",
      answer: "Our services cover both Ajio seller account registration and Aza Fashion seller onboarding processes. For Ajio seller account creation, we handle documentation, catalog setup, and integration. Aza Fashion seller registration includes brand verification, product category approval, and platform-specific requirements. Our seller onboarding service ensures smooth integration with both marketplaces."
    },
    {
      icon: Sparkles,
      question: "Can you explain the Myntra seller onboarding process and requirements?",
      answer: "The Myntra seller onboarding service includes comprehensive support from registration to activation. We handle Myntra seller account creation requirements including brand approval, quality checks, and documentation. Our seller onboarding specialists work closely with Myntra's onboarding team to ensure compliance and quick activation. We also provide guidance on Myntra seller account customer care processes."
    },
    {
      icon: ShoppingBag,
      question: "What are the steps involved in Amazon seller central account creation?",
      answer: "Amazon seller central account creation involves multiple steps: business information verification, tax documentation, bank account linking, and marketplace selection. Our Amazon seller onboarding partner status enables us to streamline the process. We guide you through amazon seller account creation steps while ensuring compliance with their policies."
    },
    {
      icon: ClipboardCheck,
      question: "How do you handle Nykaa and FirstCry seller onboarding services?",
      answer: "Our Nykaa seller onboarding and FirstCry onboarding services provide complete support throughout the registration process. We manage Nykaa seller registration process requirements and FirstCry seller central setup. Our seller onboarding agency handles documentation, verification, and platform integration for both marketplaces."
    },
    {
      icon: Briefcase,
      question: "What makes your seller onboarding process unique for JioMart and eBay?",
      answer: "Our seller onboarding services excel in managing JioMart seller onboarding and eBay seller onboarding processes. We provide specialized support for seller onboarding JioMart com requirements and eBay's global marketplace standards. Our seller onboarding specialists ensure compliance with both domestic and international marketplace regulations."
    },
    {
      icon: Users,
      question: "How do you assist with vendor account creation in various marketplaces?",
      answer: "We facilitate vendor account creation across multiple platforms, including vendor account creation in SAP. Our merchant account creation services cover documentation, verification, and system integration. Whether it's Amazon seller account setup or other marketplace registrations, we ensure proper vendor documentation and compliance."
    },
    {
      icon: Database,
      question: "What special considerations exist for international marketplace seller account creation?",
      answer: "For international platforms like Amazon UK seller account creation, we provide specialized support handling cross-border requirements. Our seller onboarding process includes guidance on international taxation, shipping logistics, and compliance. We assist with Amazon individual seller account creation and other marketplace-specific requirements for global selling."
    },
    {
      icon: CheckCircle,
      question: "How do you support Meesho seller account requirements and registration?",
      answer: "Our Meesho seller onboarding process includes complete guidance on Meesho seller account requirements. We assist with Meesho seller account registration, documentation, and catalog setup. Our team provides insights on 'is selling on Meesho profitable' and handles all aspects of Meesho seller account open procedures."
    },
    {
      icon: Award,
      question: "What ongoing support do you provide after seller account creation?",
      answer: "Post-account creation, we offer continued support through our seller onboarding specialist team. We provide assistance with Flipkart seller account customer care, Myntra seller account customer care number, and other platform-specific support. Our seller onboarding services include regular account health checks and optimization recommendations."
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#FED7AA_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions About
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 ml-2">
              Seller Onboarding Services
            </span>
          </h2>
          <p className="text-xl text-gray-700">
            Everything you need to know about our e-commerce seller onboarding and account creation services
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`
                bg-white rounded-xl shadow-lg overflow-hidden
                transition-all duration-300
                ${openFaq === index ? 'ring-2 ring-orange-500' : 'hover:shadow-xl'}
              `}
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <div className="flex items-center space-x-4">
                  <faq.icon className={`w-6 h-6 ${openFaq === index ? 'text-orange-600' : 'text-gray-400'}`} />
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                </div>
                <ChevronDown 
                  className={`w-6 h-6 text-gray-400 transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                />
              </button>

              {openFaq === index && (
                <div className="px-6 py-4 bg-orange-50">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SellerOnboardingFaq;