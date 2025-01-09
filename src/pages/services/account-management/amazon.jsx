import React, { useState, useEffect } from "react";
import Link from 'next/link';

import {
  ArrowRight,
  Star,
  Phone,
  MessagesSquare,
  ChevronDown,
  ChevronUp,
  Check,
  Award,
  BarChart,
  Users,
  ShieldCheck,
  Search,
  Settings,
  Box,
  FileText,
  Truck,
  Shield,
  LineChart,
  MessageSquare,
  AlertTriangle,
  Activity,
  Target,
  TrendingUp,
  Repeat,
  MessageCircle,
} from "lucide-react";
import Head from "next/head";
import Faq from "@/src/components/Faq";
import WhatsAppCTA from "@/src/components/WhatsappCTA";
import ReviewSection from "@/src/components/ReviewSection";
const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 relative">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-orange-100 rounded-full text-orange-600 text-sm sm:text-base font-medium mb-6 sm:mb-8">
            <span>Technovita Solution</span>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-600"></div>
            <span>Amazon Management Experts since 2018</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
            Amazon Seller Account Management Services
          </h1>

          {/* Main content */}
          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
            <p>
              Running an Amazon business can feel overwhelming. At Technovita
              Solution, we take the complexity out of Amazon selling. Our
              complete account management service handles everything from
              day-to-day operations to long-term growth strategies, making your
              Amazon journey smooth and profitable.
            </p>

            <p className="hidden sm:block">
              Think of us as your dedicated Amazon team. We manage your Seller
              Central account, optimize product listings, handle inventory
              planning, and keep your prices competitive. Our certified Amazon
              experts stay on top of marketplace changes and use data-driven
              strategies to help your products rank higher and sell better.
            </p>

            <p className="hidden lg:block">
              Whether you're just starting out or already making millions on
              Amazon, our experienced account managers at Technovita Solutions
              know exactly what it takes to grow your business. We've helped
              hundreds of sellers across all categories increase their sales and
              build sustainable Amazon businesses.
            </p>

            {/* Stats */}
            <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 sm:gap-8 text-base sm:text-lg">
              <div className="flex items-center">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-orange-600 rounded-full mr-2 sm:mr-3"></div>
                <span>500+ Active Sellers</span>
              </div>
              <div className="flex items-center">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-orange-600 rounded-full mr-2 sm:mr-3"></div>
                <span>98% Retention Rate</span>
              </div>
              <div className="flex items-center">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-orange-600 rounded-full mr-2 sm:mr-3"></div>
                <span>₹50M+ Monthly Sales</span>
              </div>
            </div>
          </div>
        </div>

        <WhatsAppCTA showMessage={false} className="mt-8" />
      </div>
    </section>
  );
};

//why technovita
const WhyTechnovita = () => {
  return (
    <section className="relative  sm:py-2">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-100 rounded-full text-orange-600 text-sm font-medium">
            <span>Why Choose Us</span>
            <div className="w-1.5 h-1.5 rounded-full bg-orange-600"></div>
            <span>Trusted by 500+ Sellers</span>
          </div>
        </div>

        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Why TechnovitaSolution is Your Best Choice for Amazon Success
          </h2>
        </div>

        {/* Main content with enhanced layout */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center">
              In today's competitive e-commerce landscape, mastering Amazon's
              marketplace requires more than just basic selling skills. Our
              comprehensive account management services are designed to navigate
              the complexities of Amazon's ecosystem while driving sustainable
              growth for your business.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              {/* Feature 1 */}
              <div className="bg-orange-50/50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2.5 h-2.5 bg-orange-600 rounded-full"></div>
                  <h3 className="font-semibold text-gray-900">
                    Expert Management
                  </h3>
                </div>
                <p className="text-gray-700">
                  Dedicated account managers with proven track records in
                  optimizing Amazon seller performance and growth.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-orange-50/50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2.5 h-2.5 bg-orange-600 rounded-full"></div>
                  <h3 className="font-semibold text-gray-900">
                    Data-Driven Strategy
                  </h3>
                </div>
                <p className="text-gray-700">
                  Advanced analytics and market insights to make informed
                  decisions and stay ahead of competition.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-orange-50/50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2.5 h-2.5 bg-orange-600 rounded-full"></div>
                  <h3 className="font-semibold text-gray-900">
                    Complete Support
                  </h3>
                </div>
                <p className="text-gray-700">
                  End-to-end account management including listing optimization,
                  inventory planning, and brand protection.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-orange-50/50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2.5 h-2.5 bg-orange-600 rounded-full"></div>
                  <h3 className="font-semibold text-gray-900">
                    Proven Results
                  </h3>
                </div>
                <p className="text-gray-700">
                  98% client retention rate with consistent growth in sales and
                  marketplace performance.
                </p>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <WhatsAppCTA
            phoneNumber="917451073504"
            message="Have questions about our services?"
            showMessage={true}
            buttonText="Message Us"
            className="my-8"
          />
        </div>
      </div>
    </section>
  );
};


const ServicesSection = () => {
  const services = [
    {
      icon: <Search />,
      title: "Product Listing Optimization",
      blogLink: "/blog/The-Ultimate-Guide-to-Product-Listing-Optimization",
      description:
        "Transform your Amazon presence with our expert product listing optimization services. Our comprehensive approach ensures your products not only rank well but convert browsers into buyers, implementing data-driven strategies across all listing aspects:",
      features: [
        {
          subtitle: "Title Optimization",
          points: [
            "Strategic keyword placement for maximum visibility",
            "Compelling, clear product titles that drive clicks",
            "Character limit optimization for mobile and desktop",
          ],
        },
        {
          subtitle: "Product Description Enhancement",
          points: [
            "Benefit-focused bullet points that sell",
            "Keyword-rich descriptions for better indexing",
            "Competitor analysis and differentiation",
          ],
        },
      ],
    },
    {
      icon: <Settings />,
      title: "Seller Central Account Setup & Optimization",
      blogLink: "/blog/How-to-become-seller-on-amazon",
      description:
        "As your trusted amazon account management agency, we provide comprehensive account setup and optimization services that set the foundation for your success:",
      features: [
        {
          subtitle: "Account Setup Excellence",
          points: [
            "Professional Seller Central account configuration",
            "Custom shipping and fulfillment strategy development",
            "Integration of marketing and advertising services",
          ],
        },
        {
          subtitle: "Optimization Strategies",
          points: [
            "Performance metrics monitoring and optimization",
            "Account health maintenance and improvement",
            "Regular account audits and updates",
          ],
        },
      ],
    },
    {
      icon: <Star />,
      title: "Strategic Keyword Research",
      blogLink: "/blog/Strategic-Keyword-Research-Guide-2025",
      description:
        "Our amazon seller account management services include advanced keyword research that drives organic traffic and improves visibility:",
      features: [
        {
          subtitle: "Research Methodology",
          points: [
            "Data-driven keyword identification and analysis",
            "Category-specific search term optimization",
            "Competitor keyword gap analysis",
          ],
        },
        {
          subtitle: "Implementation Strategy",
          points: [
            "Strategic keyword placement across listings",
            "Search volume and conversion tracking",
            "Regular performance monitoring and adjustment",
          ],
        },
      ],
    },
    {
      icon: <FileText />,
      title: "A+ Content Creation & Amazon Copywriting",
      blogLink: "/blog/Content-Creation-Amazon-Copywriting-Guide",
      description:
        "Elevate your brand presence with our professional amazon account management services focused on creating compelling content:",
      features: [
        {
          subtitle: "A+ Content Development",
          points: [
            "Custom multimedia module design",
            "Brand story integration and storytelling",
            "Mobile-optimized content creation",
          ],
        },
        {
          subtitle: "Professional Copywriting",
          points: [
            "Conversion-focused product descriptions",
            "SEO-optimized content creation",
            "Brand voice consistency maintenance",
          ],
        },
      ],
    },
    {
      icon: <Truck />,
      title: "FBA Setup & Management",
      blogLink: "/blog/FBA-Setup-Management-The-complete-Guide",
      description:
        "Our comprehensive amazon seller account management includes expert FBA optimization and management:",
      features: [
        {
          subtitle: "FBA Operations",
          points: [
            "Strategic inventory placement and management",
            "Shipping plan optimization and monitoring",
            "Cost reduction and efficiency improvement",
          ],
        },
        {
          subtitle: "Performance Optimization",
          points: [
            "Regular fee structure analysis and optimization",
            "Delivery performance monitoring",
            "Inventory turnover optimization",
          ],
        },
      ],
    },
    {
      icon: <Shield />,
      title: "Brand Registry & Protection",
      blogLink: "/blog/Brand-Registry-Protection-on-Amazon",
      description:
        "Protect and enhance your brand with our professional amazon account managing services:",
      features: [
        {
          subtitle: "Brand Protection",
          points: [
            "Complete brand registry setup and management",
            "Intellectual property protection measures",
            "Unauthorized seller monitoring",
          ],
        },
        {
          subtitle: "Brand Growth",
          points: [
            "Access to exclusive brand tools and features",
            "Brand analytics utilization",
            "Enhanced content opportunities",
          ],
        },
      ],
    },
    {
      icon: <LineChart />,
      title: "Inventory Management & Tracking",
      blogLink: "/blog/Amazon-inventory-Management-Tracking",
      description:
        "Our amazon account management services near me include comprehensive inventory solutions:",
      features: [
        {
          subtitle: "Stock Management",
          points: [
            "Real-time inventory monitoring",
            "Restock timing optimization",
            "Storage fee management",
          ],
        },
        {
          subtitle: "Performance Analytics",
          points: [
            "Sales velocity tracking",
            "Inventory turnover analysis",
            "Seasonal demand planning",
          ],
        },
      ],
    },
    {
      icon: <MessageSquare />,
      title: "Review Management & Optimization",
      blogLink: "/blog/Amazon-Review-Management-Optimization",
      description:
        "Maintain a stellar reputation with our best amazon account management services focused on review optimization:",
      features: [
        {
          subtitle: "Review Monitoring",
          points: [
            "Proactive review solicitation strategies",
            "Negative feedback resolution",
            "Customer satisfaction improvement",
          ],
        },
        {
          subtitle: "Rating Enhancement",
          points: [
            "Review analysis and trend identification",
            "Customer feedback implementation",
            "Product improvement recommendations",
          ],
        },
      ],
    },
    {
      icon: <AlertTriangle />,
      title: "Account Reinstatement Services",
      blogLink: "/blog/Amazon-Account-Reinstatement",
      description:
        "Our expert amazon account management team specializes in account recovery and reinstatement:",
      features: [
        {
          subtitle: "Recovery Process",
          points: [
            "Comprehensive account audit",
            "Policy violation analysis",
            "Custom plan of action development",
          ],
        },
        {
          subtitle: "Prevention Strategy",
          points: [
            "Ongoing compliance monitoring",
            "Risk assessment and mitigation",
            "Policy update implementation",
          ],
        },
      ],
    },
    {
      icon: <Activity />,
      title: "Seller Flex Program Management",
      blogLink: "/blog/Amazon-Seller-Flex-Program",
      description:
        "Optimize your operations with our specialized amazon seller account management services for Seller Flex:",
      features: [
        {
          subtitle: "Program Implementation",
          points: [
            "Eligibility assessment and application",
            "Operational setup and optimization",
            "Delivery network integration",
          ],
        },
        {
          subtitle: "Performance Management",
          points: [
            "Delivery metrics monitoring",
            "Cost efficiency optimization",
            "Customer satisfaction tracking",
          ],
        },
      ],
    },
    {
      icon: <Target />,
      title: "Competitor Analysis & Strategy",
      blogLink: "/blog/Amazon-Competitor-Analysis-Strategy",
      description:
        "Stay ahead with our data-driven amazon account management analysis services:",
      features: [
        {
          subtitle: "Market Analysis",
          points: [
            "Comprehensive competitor research",
            "Price point optimization",
            "Market trend identification",
          ],
        },
        {
          subtitle: "Strategic Planning",
          points: [
            "Competitive advantage development",
            "Market positioning strategy",
            "Growth opportunity identification",
          ],
        },
      ],
    },
  ];
  
  return (
    <section className="py-20 border-b">
      <h2 className="text-3xl font-bold mb-12 text-gray-900">
        Best Amazon Account Management Services In India
      </h2>
      <div className="space-y-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl border hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start gap-6">
              <div className="bg-orange-100 p-4 rounded-lg">
                <div className="text-orange-600">
                  {React.cloneElement(service.icon, { size: 32 })}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                  {service.blogLink ? (
                    <Link
                      href={service.blogLink}
                      className="hover:text-orange-600 transition-colors duration-300"
                    >
                      {service.title}
                    </Link>
                  ) : (
                    service.title
                  )}
                </h3>
                <div className="prose prose-lg text-gray-700">
                  <p>{service.description}</p>
                  <div className="grid md:grid-cols-2 gap-8 mt-6">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex}>
                        <h4 className="font-medium mb-4">{feature.subtitle}</h4>
                        <ul className="space-y-3">
                          {feature.points.map((point, pIndex) => (
                            <li
                              key={pIndex}
                              className="flex items-center gap-3"
                            >
                              <Check
                                className="text-orange-600 flex-shrink-0"
                                size={20}
                              />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const AmazonAccountPage = () => {
  const timelineItems = [
    {
      icon: <Search className="text-orange-600" />,
      step: 1,
      title: "Initial Account Analysis & Strategy Development",
      description:
        "Our amazon account management process begins with a thorough analysis of your current Amazon presence. Our expert team conducts a comprehensive evaluation of your product listings, pricing strategies, advertising performance, and competitor positioning. We identify immediate opportunities for improvement and develop a customized strategy aligned with your business goals. This initial phase establishes clear benchmarks and sets the foundation for our amazon seller account management services.",
      details: [
        "Complete account health assessment",
        "Competitor landscape analysis",
        "Performance metrics evaluation",
        "Opportunity identification",
        "Custom strategy development",
      ],
    },
    {
      icon: <Settings className="text-orange-600" />,
      step: 2,
      title: "Account Optimization & Setup Enhancement",
      description:
        "As your trusted amazon account management agency, we implement necessary optimizations across your entire account structure. This phase focuses on strengthening your account foundation through systematic improvements to listings, backend settings, and operational workflows. Our team ensures every aspect of your amazon account managing process is optimized for maximum performance and compliance.",
      details: [
        "Listing optimization implementation",
        "Backend keyword enhancement",
        "Account settings refinement",
        "Category-specific optimization",
        "Compliance verification",
      ],
    },
    {
      icon: <TrendingUp className="text-orange-600" />,
      step: 3,
      title: "Growth Strategy Implementation",
      description:
        "With optimizations in place, we execute your customized growth strategy. Our best amazon account management services focus on expanding your market presence through strategic initiatives. We implement targeted campaigns, optimize inventory management, and enhance brand presence to drive sustainable growth on the platform.",
      details: [
        "Marketing campaign deployment",
        "Inventory strategy execution",
        "Brand registry optimization",
        "Sales acceleration tactics",
        "Market expansion planning",
      ],
    },
    {
      icon: <BarChart className="text-orange-600" />,
      step: 4,
      title: "Performance Monitoring & Optimization",
      description:
        "Our amazon seller account management services include continuous monitoring of key performance indicators. We track crucial metrics, analyze trends, and make data-driven adjustments to optimize your account's performance. This proactive approach ensures we maintain momentum and quickly address any challenges that arise.",
      details: [
        "Real-time metrics tracking",
        "Performance trend analysis",
        "Competitive positioning review",
        "ROI optimization",
        "Growth opportunity identification",
      ],
    },
    {
      icon: <Repeat className="text-orange-600" />,
      step: 5,
      title: "Continuous Improvement & Adaptation",
      description:
        "The amazon account management landscape constantly evolves, and so do our strategies. We continuously refine our approach based on performance data, market changes, and emerging opportunities. Our team stays updated with Amazon's latest features and requirements to ensure your account remains competitive and compliant.",
      details: [
        "Strategy refinement",
        "Market trend adaptation",
        "Policy compliance updates",
        "Performance optimization",
        "Growth strategy evolution",
      ],
    },
    {
      icon: <Shield className="text-orange-600" />,
      step: 6,
      title: "Long-term Success & Protection",
      description:
        "As your dedicated amazon account management partner, we focus on securing your long-term success. We implement protective measures to safeguard your account health while continuing to identify and capitalize on new growth opportunities. Our comprehensive approach ensures sustainable success on the Amazon marketplace.",
      details: [
        "Account health maintenance",
        "Brand protection measures",
        "Growth sustainability planning",
        "Risk mitigation strategies",
        "Long-term opportunity development",
      ],
    },
  ];

  const services = [
    {
      icon: <Search />,
      title: "Product Listing Optimization",
      description:
        "Transform your Amazon presence with our expert product listing optimization services. Our comprehensive approach ensures your products not only rank well but convert browsers into buyers, implementing data-driven strategies across all listing aspects:",
      features: [
        {
          subtitle: "Title Optimization",
          points: [
            "Strategic keyword placement for maximum visibility",
            "Compelling, clear product titles that drive clicks",
            "Character limit optimization for mobile and desktop",
          ],
        },
        {
          subtitle: "Product Description Enhancement",
          points: [
            "Benefit-focused bullet points that sell",
            "Keyword-rich descriptions for better indexing",
            "Competitor analysis and differentiation",
          ],
        },
      ],
    },
    {
      icon: <Settings />,
      title: "Seller Central Account Setup & Optimization",
      description:
        "As your trusted amazon account management agency, we provide comprehensive account setup and optimization services that set the foundation for your success:",
      features: [
        {
          subtitle: "Account Setup Excellence",
          points: [
            "Professional Seller Central account configuration",
            "Custom shipping and fulfillment strategy development",
            "Integration of marketing and advertising services",
          ],
        },
        {
          subtitle: "Optimization Strategies",
          points: [
            "Performance metrics monitoring and optimization",
            "Account health maintenance and improvement",
            "Regular account audits and updates",
          ],
        },
      ],
    },
    {
      icon: <Star />,
      title: "Strategic Keyword Research",
      description:
        "Our amazon seller account management services include advanced keyword research that drives organic traffic and improves visibility:",
      features: [
        {
          subtitle: "Research Methodology",
          points: [
            "Data-driven keyword identification and analysis",
            "Category-specific search term optimization",
            "Competitor keyword gap analysis",
          ],
        },
        {
          subtitle: "Implementation Strategy",
          points: [
            "Strategic keyword placement across listings",
            "Search volume and conversion tracking",
            "Regular performance monitoring and adjustment",
          ],
        },
      ],
    },
    {
      icon: <FileText />,
      title: "A+ Content Creation & Amazon Copywriting",
      description:
        "Elevate your brand presence with our professional amazon account management services focused on creating compelling content:",
      features: [
        {
          subtitle: "A+ Content Development",
          points: [
            "Custom multimedia module design",
            "Brand story integration and storytelling",
            "Mobile-optimized content creation",
          ],
        },
        {
          subtitle: "Professional Copywriting",
          points: [
            "Conversion-focused product descriptions",
            "SEO-optimized content creation",
            "Brand voice consistency maintenance",
          ],
        },
      ],
    },
    {
      icon: <Truck />,
      title: "FBA Setup & Management",
      description:
        "Our comprehensive amazon seller account management includes expert FBA optimization and management:",
      features: [
        {
          subtitle: "FBA Operations",
          points: [
            "Strategic inventory placement and management",
            "Shipping plan optimization and monitoring",
            "Cost reduction and efficiency improvement",
          ],
        },
        {
          subtitle: "Performance Optimization",
          points: [
            "Regular fee structure analysis and optimization",
            "Delivery performance monitoring",
            "Inventory turnover optimization",
          ],
        },
      ],
    },
    {
      icon: <Shield />,
      title: "Brand Registry & Protection",
      description:
        "Protect and enhance your brand with our professional amazon account managing services:",
      features: [
        {
          subtitle: "Brand Protection",
          points: [
            "Complete brand registry setup and management",
            "Intellectual property protection measures",
            "Unauthorized seller monitoring",
          ],
        },
        {
          subtitle: "Brand Growth",
          points: [
            "Access to exclusive brand tools and features",
            "Brand analytics utilization",
            "Enhanced content opportunities",
          ],
        },
      ],
    },
    {
      icon: <LineChart />,
      title: "Inventory Management & Tracking",
      description:
        "Our amazon account management services near me include comprehensive inventory solutions:",
      features: [
        {
          subtitle: "Stock Management",
          points: [
            "Real-time inventory monitoring",
            "Restock timing optimization",
            "Storage fee management",
          ],
        },
        {
          subtitle: "Performance Analytics",
          points: [
            "Sales velocity tracking",
            "Inventory turnover analysis",
            "Seasonal demand planning",
          ],
        },
      ],
    },
    {
      icon: <MessageSquare />,
      title: "Review Management & Optimization",
      description:
        "Maintain a stellar reputation with our best amazon account management services focused on review optimization:",
      features: [
        {
          subtitle: "Review Monitoring",
          points: [
            "Proactive review solicitation strategies",
            "Negative feedback resolution",
            "Customer satisfaction improvement",
          ],
        },
        {
          subtitle: "Rating Enhancement",
          points: [
            "Review analysis and trend identification",
            "Customer feedback implementation",
            "Product improvement recommendations",
          ],
        },
      ],
    },
    {
      icon: <AlertTriangle />,
      title: "Account Reinstatement Services",
      description:
        "Our expert amazon account management team specializes in account recovery and reinstatement:",
      features: [
        {
          subtitle: "Recovery Process",
          points: [
            "Comprehensive account audit",
            "Policy violation analysis",
            "Custom plan of action development",
          ],
        },
        {
          subtitle: "Prevention Strategy",
          points: [
            "Ongoing compliance monitoring",
            "Risk assessment and mitigation",
            "Policy update implementation",
          ],
        },
      ],
    },
    {
      icon: <Activity />,
      title: "Seller Flex Program Management",
      description:
        "Optimize your operations with our specialized amazon seller account management services for Seller Flex:",
      features: [
        {
          subtitle: "Program Implementation",
          points: [
            "Eligibility assessment and application",
            "Operational setup and optimization",
            "Delivery network integration",
          ],
        },
        {
          subtitle: "Performance Management",
          points: [
            "Delivery metrics monitoring",
            "Cost efficiency optimization",
            "Customer satisfaction tracking",
          ],
        },
      ],
    },
    {
      icon: <Target />,
      title: "Competitor Analysis & Strategy",
      description:
        "Stay ahead with our data-driven amazon account management analysis services:",
      features: [
        {
          subtitle: "Market Analysis",
          points: [
            "Comprehensive competitor research",
            "Price point optimization",
            "Market trend identification",
          ],
        },
        {
          subtitle: "Strategic Planning",
          points: [
            "Competitive advantage development",
            "Market positioning strategy",
            "Growth opportunity identification",
          ],
        },
      ],
    },
  ];

  const features = [
    {
      icon: <TrendingUp className="text-orange-600" size={32} />,
      title: "Strategic Growth Planning",
      description:
        "Our expert amazon account management services focus on developing comprehensive growth strategies tailored to your business goals. We analyze market trends, competitor positioning, and customer behavior to create a roadmap for sustainable success on the Amazon marketplace.",
    },
    {
      icon: <ShieldCheck className="text-orange-600" size={32} />,
      title: "Account Protection & Compliance",
      description:
        "As your dedicated amazon seller account management partner, we ensure your account stays healthy and compliant with Amazon's ever-changing policies. Our proactive approach to account management helps prevent issues before they arise.",
    },
    {
      icon: <BarChart className="text-orange-600" size={32} />,
      title: "Performance Analytics",
      description:
        "Our amazon account managing experts utilize advanced analytics tools to track your account's performance metrics. We provide detailed insights into sales trends, conversion rates, and marketing effectiveness to optimize your Amazon business strategy.",
    },
    {
      icon: <Users className="text-orange-600" size={32} />,
      title: "Dedicated Account Team",
      description:
        "When you choose our amazon account management services near me, you get a dedicated team of specialists who understand your business inside and out. We act as an extension of your team, managing every aspect of your Amazon presence.",
    },
  ];

  const StatsCounter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let startTime = null;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;

        if (progress < duration) {
          setCount(Math.min(Math.floor((progress / duration) * end), end));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(animate);
    }, [end, duration]);

    return <span>{count}</span>;
  };

  const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="border-b border-orange-100">
        <button
          className="w-full flex justify-between items-center py-6 px-4 hover:bg-orange-50 transition-colors duration-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="font-medium text-left text-lg text-gray-800">
            {question}
          </span>
          <div
            className={`transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          >
            <ChevronDown className="text-orange-600" />
          </div>
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}
        >
          <div className="px-4 pb-6 text-gray-700 leading-relaxed">
            {answer}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>
          Technovita Solutions | Expert Amazon Account Management Services
        </title>
        <meta
          name="description"
          content="Technovita Solutions provides expert Amazon seller account management services. Transform your Amazon business with our dedicated account managers and proven strategies."
        />
        <meta
          name="keywords"
          content="amazon account management services, amazon seller account management, amazon account manager, amazon seller central account manager, best amazon account management services"
        />
      </Head>

      <div className="w-full bg-white">
        <Hero />

        <div className="container max-w-7xl mx-auto px-6">
          <section className="py-2">
            <WhyTechnovita />

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl border hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-orange-50 p-4 inline-block rounded-lg mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/*services    */}
          <ServicesSection />
          <section className="py-20 border-b bg-white">
            <h2 className="text-4xl font-bold mb-16 text-gray-900 text-center">
              Our Proven Amazon Account Management Process
            </h2>
            <div className="relative">
              <div
                className="absolute left-6 top-[28px] bottom-0 w-0.5 bg-orange-200"
                style={{ height: "calc(100% - 56px)" }}
              ></div>
              <div className="space-y-24">
                {timelineItems.map((item, index) => (
                  <div key={index} className="relative flex gap-8">
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 bg-white rounded-full border-2 border-orange-200 flex items-center justify-center relative z-10">
                        {React.cloneElement(item.icon, {
                          size: 24,
                          className: "text-orange-600",
                        })}
                      </div>
                    </div>
                    <div className="flex-1 bg-white p-8 rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300">
                      <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {item.description}
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        {item.details.map((detail, dIndex) => (
                          <div key={dIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                            <span className="text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        <ReviewSection />
        <Faq />
      </div>
    </>
  );
};

export default AmazonAccountPage;
