import React, { useState, useEffect, useRef } from 'react';
import WhatsAppCTA from '../components/WhatsappCTA';
import Head from 'next/head';

export default function MyntraAjioAccountManagement() {
  // State to track which videos have been loaded
  const [videosLoaded, setVideosLoaded] = useState({});
  const videoRefs = useRef([]);

  // Form state
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    mobile: '',
    name: '',
    business: '',
    currentSales: '',
    platform: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const formSectionRef = useRef(null);

  // Helper function to check if an element is in viewport
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const videoId = entry.target.dataset.videoId;
          setVideosLoaded(prev => ({
            ...prev,
            [videoId]: true
          }));
          observer.unobserve(entry.target);
        }
      });
    }, options);

    videoRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      videoRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Move to next form step
  const handleNextStep = () => {
    if (formStep === 0 && !formData.mobile) {
      alert('Please enter your mobile number');
      return;
    }
    if (formStep === 1 && !formData.name) {
      alert('Please enter your name');
      return;
    }
    
    setFormStep(prev => prev + 1);
  };

  // Move to previous form step
  const handlePrevStep = () => {
    setFormStep(prev => prev - 1);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.mobile || !formData.name) {
      setSubmitError('Mobile number and name are required');
      return;
    }
    
    // Track form submission
    gtag('event', 'conversion_event_contact', {});
    
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const response = await fetch('/api/account-management', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          service: 'account-management',
          serviceType: 'Myntra & Ajio Account Management',
          leadSource: 'Account Management Landing Page',
          inquiry: 'Complete account takeover and management services'
        }),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setSubmitSuccess(true);
      } else {
        setSubmitError(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitError('Failed to submit form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Video testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar - Fashion Brand Owner",
      title: "400% Sales Growth in 6 Months",
      videoUrl: "https://www.youtube.com/embed/0KtKwVq39Y4",
      description: "Technovita took over our Myntra account completely. From ₹50k to ₹2 lakhs monthly sales! They handle everything - listings, inventory, customer service, returns. I just focus on manufacturing now.",
      results: "₹50K → ₹2L Monthly Sales"
    },
    {
      id: 2,
      name: "Priya Sharma - Ethnic Wear Brand",
      title: "Stress-Free 300% Revenue Jump",
      videoUrl: "https://www.youtube.com/embed/eoCYSK0p-A8",
      description: "Best decision ever! They manage both my Myntra and Ajio accounts. No more sleepless nights worrying about returns, customer complaints, or inventory. Sales tripled and I have peace of mind.",
      results: "300% Revenue Increase"
    },
    {
      id: 3,
      name: "Mohit - Oddgrab Founder",
      title: "Complete Account Takeover Success",
      videoUrl: "https://www.youtube.com/embed/piYVKoZGVww",
      description: "Technovita doesn't just manage accounts - they transform businesses! Their strategic approach to listing optimization, inventory management, and customer service is phenomenal. Highly recommended!",
      results: "Complete Business Transformation"
    },
    {
      id: 4,
      name: "Sayali - Luxerra Founder",
      title: "Dual Platform Domination",
      videoUrl: "https://www.youtube.com/embed/GxjBEfcQliQ",
      description: "They manage our presence on both Myntra and Ajio seamlessly. Professional handling of returns, customer queries, and strategic promotions. Our brand reputation has never been stronger!",
      results: "Dual Platform Success"
    }
  ];

  // Current sales options
  const salesOptions = [
    "₹0 - ₹50K per month",
    "₹50K - ₹1L per month", 
    "₹1L - ₹5L per month",
    "₹5L - ₹10L per month",
    "₹10L+ per month",
    "Just starting out"
  ];

  // Platform options
  const platformOptions = [
    "Myntra only",
    "Ajio only",
    "Both Myntra & Ajio",
    "Other platforms too",
    "Not selling anywhere yet"
  ];

  // Function to scroll to form section
  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>Myntra & Ajio Account Management Services | Grow Your Sales by 300%</title>
        <meta name="description" content="Professional Myntra and Ajio account management services. We handle everything - listings, inventory, returns, customer service. Guaranteed 300% sales growth. Focus on your business, we'll handle the marketplaces." />
        <meta name="keywords" content="myntra account management, ajio account management, marketplace management services, myntra seller services, ajio seller support, ecommerce account management" />
        <meta property="og:title" content="Myntra & Ajio Account Management | 300% Sales Growth Guaranteed" />
        <meta property="og:description" content="Let experts manage your Myntra & Ajio accounts. Complete marketplace management including listings, inventory, returns, customer service. Proven 300% sales growth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://technovitasolution.com/myntra-ajio-account-management" />
        <meta property="og:image" content="/images/account-management-hero.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://technovitasolution.com/myntra-ajio-account-management" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q5ZHMCB34E"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Q5ZHMCB34E');
            `,
          }}
        />
        
        {/* Google Analytics Conversion Tracking */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Helper function to delay opening a URL until a gtag event is sent.
              // Call it in response to an action that should navigate to a URL.
              function gtagSendEvent(url) {
                var callback = function () {
                  if (typeof url === 'string') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion_event_contact', {
                  'event_callback': callback,
                  'event_timeout': 2000,
                  // <event_parameters>
                });
                return false;
              }
            `,
          }}
        />
      </Head>

      <div className="bg-white min-h-screen flex flex-col items-center justify-start">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-12 md:py-20 px-4 flex flex-col items-center text-center relative overflow-hidden" aria-labelledby="hero-heading">
          <div className="max-w-6xl z-10">
            {/* Trust Badge */}
            <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white font-black px-6 py-3 rounded-full text-lg mb-6 inline-block shadow-2xl border-4 border-yellow-300 animate-pulse">
              🏆 TRUSTED BY 500+ SELLERS 🏆
            </div>
            
            <h1 id="hero-heading" className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 md:mb-8 leading-tight drop-shadow-2xl">
              <span className="bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">STOP STRUGGLING</span><br />
              With Your Myntra & Ajio Accounts!
            </h1>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-8 border-2 border-yellow-300">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                🎯 We'll <span className="text-yellow-200">MANAGE EVERYTHING</span> For You!
              </p>
              <p className="text-lg md:text-xl text-yellow-100 font-semibold">
                Listings • Inventory • Returns • Customer Service • Growth Strategies<br />
                <span className="text-yellow-200">While You Focus on Your Business!</span>
              </p>
            </div>

            {/* Value Proposition */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-xl p-6 shadow-2xl border-4 border-yellow-300 transform rotate-1">
                <div className="text-white font-black text-2xl mb-2">😰 YOUR CURRENT PAIN</div>
                <div className="text-white">
                  <div className="text-lg">• Constant returns headaches</div>
                  <div className="text-lg">• Inventory management chaos</div>
                  <div className="text-lg">• Customer complaints stress</div>
                  <div className="text-lg">• Listing optimization confusion</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl p-6 shadow-2xl border-4 border-white transform -rotate-1">
                <div className="text-white font-black text-2xl mb-2">🎯 OUR SOLUTION</div>
                <div className="text-white">
                  <div className="text-lg">• Complete account takeover</div>
                  <div className="text-lg">• Professional management</div>
                  <div className="text-lg">• Strategic growth planning</div>
                  <div className="text-lg">• 24/7 monitoring & support</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 shadow-2xl border-4 border-yellow-300 transform rotate-1">
                <div className="text-white font-black text-2xl mb-2">🚀 YOUR NEW REALITY</div>
                <div className="text-white">
                  <div className="text-lg">• 300% sales growth</div>
                  <div className="text-lg">• Zero operational stress</div>
                  <div className="text-lg">• Professional brand presence</div>
                  <div className="text-lg">• Time to focus on growth</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button 
                onClick={() => gtagSendEvent(`https://wa.me/917042163504?text=${encodeURIComponent("I want professional management for my Myntra & Ajio accounts")}`)}
                className="flex items-center justify-center bg-green-600 border-4 border-yellow-300 text-white font-black px-8 py-4 rounded-full hover:bg-green-700 transition w-full sm:w-auto shadow-2xl text-lg animate-bounce"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                GET PROFESSIONAL MANAGEMENT
              </button>
              <button 
                onClick={() => {
                  gtag('event', 'conversion_event_contact', {});
                  scrollToForm();
                }}
                className="bg-white border-4 border-yellow-300 text-blue-900 font-black px-8 py-4 rounded-full hover:bg-gray-100 transition w-full sm:w-auto shadow-xl text-lg"
              >
                START FREE CONSULTATION
              </button>
            </div>

            {/* Urgency Timer */}
            <div className="bg-black/80 text-white rounded-xl p-6 mb-6 max-w-2xl mx-auto border-4 border-red-500">
              <div className="text-red-400 font-bold text-lg mb-2">⏰ LIMITED AVAILABILITY!</div>
              <div className="text-yellow-300 font-semibold">
                🔥 We only take <span className="text-3xl font-black text-red-400">5 NEW CLIENTS</span> per month<br />
                ⚡ To ensure premium service quality!
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-white text-sm md:text-base font-semibold">
              <span>✓ 300% Growth Guarantee</span>
              <span className="mx-2">•</span>
              <span>✓ Complete Account Takeover</span>
              <span className="mx-2">•</span>
              <span>✓ 24/7 Professional Management</span>
            </div>
          </div>
          
          {/* Animated background elements */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-yellow-400 opacity-20 rounded-full animate-pulse"></div>
          <div className="absolute top-10 -left-10 w-32 h-32 bg-pink-400 opacity-20 rounded-full animate-bounce"></div>
        </section>

        {/* Problem Agitation Section */}
        <section className="w-full py-8 md:py-16 px-4 bg-gradient-to-r from-red-50 to-pink-50" aria-labelledby="problems-heading">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 id="problems-heading" className="text-3xl md:text-5xl font-black mb-4 text-red-700">
                Are You <span className="text-red-500">TIRED</span> of These Daily Struggles?
              </h2>
              <p className="text-xl md:text-2xl font-semibold max-w-3xl mx-auto text-gray-700">
                Every day, sellers like you face the same exhausting challenges...
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-8 border-red-500 transform hover:scale-105 transition">
                <div className="text-4xl mb-4">😫</div>
                <h3 className="font-black text-xl mb-2 text-red-600">Returns Nightmare</h3>
                <p className="text-gray-700 font-medium">Constant return requests, quality complaints, size issues. You spend hours daily just managing returns instead of growing your business.</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-l-8 border-orange-500 transform hover:scale-105 transition">
                <div className="text-4xl mb-4">📦</div>
                <h3 className="font-black text-xl mb-2 text-orange-600">Inventory Chaos</h3>
                <p className="text-gray-700 font-medium">Stock-outs, overstocking, poor demand forecasting. You're either losing sales or drowning in unsold inventory.</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-l-8 border-yellow-500 transform hover:scale-105 transition">
                <div className="text-4xl mb-4">😠</div>
                <h3 className="font-black text-xl mb-2 text-yellow-600">Customer Service Hell</h3>
                <p className="text-gray-700 font-medium">Angry customers, negative reviews, endless queries. Your phone never stops ringing with complaints.</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-l-8 border-green-500 transform hover:scale-105 transition">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="font-black text-xl mb-2 text-green-600">Poor Sales Performance</h3>
                <p className="text-gray-700 font-medium">Products not ranking, low visibility, competitors winning. Your sales are stuck while others grow exponentially.</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-l-8 border-blue-500 transform hover:scale-105 transition">
                <div className="text-4xl mb-4">🤯</div>
                <h3 className="font-black text-xl mb-2 text-blue-600">Platform Complexity</h3>
                <p className="text-gray-700 font-medium">Myntra rules, Ajio policies, algorithm changes. You can't keep up with constantly changing marketplace requirements.</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-l-8 border-purple-500 transform hover:scale-105 transition">
                <div className="text-4xl mb-4">⏰</div>
                <h3 className="font-black text-xl mb-2 text-purple-600">No Time for Business</h3>
                <p className="text-gray-700 font-medium">You're so busy managing accounts, you have no time for product development, marketing, or strategic growth.</p>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl md:text-3xl font-black mb-4">🔥 ENOUGH IS ENOUGH! 🔥</h3>
              <p className="text-lg md:text-xl font-semibold mb-6">
                It's time to hand over the reins to professionals who live and breathe marketplace management!
              </p>
              <button 
                onClick={() => {
                  gtag('event', 'conversion_event_contact', {});
                  scrollToForm();
                }}
                className="bg-white text-red-600 font-black px-8 py-4 rounded-full hover:bg-gray-100 transition text-lg shadow-xl"
              >
                YES, TAKE OVER MY ACCOUNTS!
              </button>
            </div>
          </div>
        </section>

        {/* Our Complete Management Solution */}
        <section className="w-full py-8 md:py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100" aria-labelledby="solution-heading">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 id="solution-heading" className="text-3xl md:text-5xl font-black mb-4 text-blue-900">
                🎯 Complete <span className="text-blue-600">Account Takeover</span> Service
              </h2>
              <p className="text-xl md:text-2xl font-semibold max-w-4xl mx-auto text-gray-700">
                We don't just "help" - we completely take over and manage your Myntra & Ajio accounts like our own business!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-8 border-blue-500 transform hover:scale-105 transition duration-300">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-center mb-4 text-blue-900">Complete Account Management</h3>
                <ul className="text-gray-700 space-y-2 font-medium">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Daily account monitoring</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Performance optimization</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Policy compliance management</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Account health maintenance</li>
                </ul>
              </div>

              {/* Service 2 */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-8 border-green-500 transform hover:scale-105 transition duration-300">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-center mb-4 text-green-900">Strategic Listing Optimization</h3>
                <ul className="text-gray-700 space-y-2 font-medium">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> SEO-optimized product titles</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Keyword-rich descriptions</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Category optimization</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Competitive pricing strategies</li>
                </ul>
              </div>

              {/* Service 3 */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-8 border-purple-500 transform hover:scale-105 transition duration-300">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-center mb-4 text-purple-900">Smart Inventory Management</h3>
                <ul className="text-gray-700 space-y-2 font-medium">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Demand forecasting</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Automated reorder alerts</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Stock optimization</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Seasonal planning</li>
                </ul>
              </div>

              {/* Service 4 */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-8 border-red-500 transform hover:scale-105 transition duration-300">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-center mb-4 text-red-900">Professional Returns Handling</h3>
                <ul className="text-gray-700 space-y-2 font-medium">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Return request management</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Quality issue resolution</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Customer communication</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Return rate optimization</li>
                </ul>
              </div>

              {/* Service 5 */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-8 border-yellow-500 transform hover:scale-105 transition duration-300">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-center mb-4 text-yellow-900">24/7 Customer Service</h3>
                <ul className="text-gray-700 space-y-2 font-medium">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Customer query resolution</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Review management</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Complaint handling</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Brand reputation protection</li>
                </ul>
              </div>

              {/* Service 6 */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-8 border-indigo-500 transform hover:scale-105 transition duration-300">
                <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-center mb-4 text-indigo-900">Growth Strategy & Analytics</h3>
                <ul className="text-gray-700 space-y-2 font-medium">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Sales performance analysis</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Growth strategy planning</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Monthly performance reports</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Competitive analysis</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl md:text-3xl font-black mb-4">🎯 THE RESULT? YOU GET YOUR LIFE BACK! 🎯</h3>
              <p className="text-lg md:text-xl font-semibold mb-6">
                While we handle everything, you focus on what you do best - creating amazing products and growing your business!
              </p>
              <button 
                onClick={() => {
                  gtag('event', 'conversion_event_contact', {});
                  scrollToForm();
                }}
                className="bg-white text-blue-600 font-black px-8 py-4 rounded-full hover:bg-gray-100 transition text-lg shadow-xl"
              >
                I WANT THIS FREEDOM!
              </button>
            </div>
          </div>
        </section>

        {/* Video Testimonials Section */}
        <section className="w-full py-8 md:py-20 px-4 bg-gray-50" aria-labelledby="testimonial-heading">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-blue-600 font-black text-lg uppercase tracking-wider mb-2 inline-block">REAL SUCCESS STORIES</span>
              <h2 id="testimonial-heading" className="text-3xl md:text-5xl font-black text-gray-800 mb-4">
                See How We <span className="text-blue-600">Transformed</span> Their Business!
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-semibold">
                These sellers handed over their accounts to us and never looked back. Now they sleep peacefully while we grow their sales!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className="bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:shadow-3xl hover:-translate-y-2 border-4 border-gradient-to-r from-blue-500 to-purple-500"
                >
                  <div 
                    className="relative w-full aspect-video bg-gray-100"
                    ref={el => videoRefs.current[index] = el}
                    data-video-id={testimonial.id}
                  >
                    {videosLoaded[testimonial.id] ? (
                      <iframe
                        src={testimonial.videoUrl}
                        className="absolute inset-0 w-full h-full"
                        title={testimonial.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    ) : (
                      <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center cursor-pointer shadow-2xl animate-pulse">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <title>Play Video</title>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <p className="mt-4 text-lg font-bold text-gray-700">Watch Success Story</p>
                      </div>
                    )}
                  </div>
                  <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-black text-xl text-gray-800">{testimonial.name}</h3>
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                        {testimonial.results}
                      </div>
                    </div>
                    <h4 className="font-bold text-blue-600 mb-3 text-xl">{testimonial.title}</h4>
                    <p className="text-gray-700 font-medium">{testimonial.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <button 
                onClick={() => {
                  gtag('event', 'conversion_event_contact', {});
                  scrollToForm();
                }}
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 border-4 border-yellow-300 text-white font-black px-10 py-5 rounded-full hover:from-blue-700 hover:to-purple-700 transition cursor-pointer shadow-2xl text-xl animate-pulse"
              >
                I Want Results Like These!
              </button>
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section id="apply-form" ref={formSectionRef} className="w-full py-8 md:py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700" aria-labelledby="form-heading">
          <div className="max-w-xs sm:max-w-lg mx-auto">
            <div className="text-center mb-12">
              <span className="text-white font-black text-lg uppercase tracking-wider mb-2 inline-block">🔥 LIMITED AVAILABILITY</span>
              <h2 id="form-heading" className="text-3xl md:text-5xl font-black text-white mb-4 drop-shadow-2xl">
                Get Professional Management Today!
              </h2>
              <p className="text-xl text-white max-w-md mx-auto font-bold">
                We only take 5 new clients per month. Apply now to secure your spot!
              </p>
            </div>

            {/* Multi-step form */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 relative border-4 border-yellow-300">
              {/* Exclusive Service Badge */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-3 rounded-full text-lg font-black shadow-2xl border-4 border-yellow-300 animate-bounce">
                  🎯 PREMIUM MANAGEMENT
                </div>
              </div>

              {/* Progress indicator */}
              <div className="flex justify-between items-center mb-8 mt-8">
                {[0, 1, 2, 3].map((step) => (
                  <div key={step} className="flex flex-col items-center">
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm ${
                        submitSuccess || step < formStep ? 'bg-green-500 text-white' : 
                        step === formStep ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' : 
                        'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {submitSuccess || step < formStep ? '✓' : step + 1}
                    </div>
                    {step < 3 && (
                      <div className={`h-2 w-16 mt-2 rounded ${submitSuccess || step < formStep ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                    )}
                  </div>
                ))}
              </div>

              {submitSuccess ? (
                <div className="py-10 text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-gray-800 mb-4">🎉 APPLICATION RECEIVED!</h3>
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-xl mb-6 border-2 border-green-300">
                    <p className="text-green-800 font-bold mb-2">What happens next:</p>
                    <div className="space-y-1 text-green-700">
                      <div>✓ Free consultation call within 24 hours</div>
                      <div>✓ Account audit and growth strategy</div>
                      <div>✓ Custom management proposal</div>
                      <div>✓ Start growing immediately!</div>
                    </div>
                  </div>
                  <WhatsAppCTA 
                    phoneNumber="917042163504"
                    message="Hi! I just applied for professional Myntra & Ajio account management. Please schedule my consultation call!"
                    showMessage={false}
                    buttonText="Schedule Consultation Now!"
                    className="inline-block"
                  />
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Mobile Number */}
                  {formStep === 0 && (
                    <div className="space-y-4">
                      <h3 className="text-2xl font-black text-gray-800 mb-4">Enter your mobile number</h3>
                      <div>
                        <label htmlFor="mobile" className="block text-sm font-bold text-gray-700 mb-2">Mobile Number</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center">
                            <span className="flex items-center justify-center h-full px-4 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 font-bold border border-r-0 border-blue-300 rounded-l-full text-sm">
                              +91
                            </span>
                          </div>
                          <input 
                            type="tel" 
                            id="mobile" 
                            name="mobile" 
                            pattern="[0-9]{10}" 
                            maxLength="10"
                            className="block w-full pl-20 pr-4 py-4 rounded-full border-blue-300 border-2 shadow-lg focus:ring-4 focus:ring-blue-200 focus:border-blue-500 text-gray-700 transition-all duration-200 font-semibold"
                            placeholder="10-digit mobile number"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <p className="mt-3 text-sm text-blue-600 font-semibold flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                          </svg>
                          We'll call you within 30 minutes for consultation!
                        </p>
                      </div>
                      <div className="mt-6">
                        <button 
                          type="button" 
                          onClick={handleNextStep}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-full font-black hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl text-lg flex items-center justify-center"
                        >
                          GET PROFESSIONAL MANAGEMENT
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Name */}
                  {formStep === 1 && (
                    <div className="space-y-4">
                      <h3 className="text-2xl font-black text-gray-800 mb-4">Tell us your name</h3>
                      <div>
                        <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          className="block w-full rounded-full border-blue-300 border-2 shadow-lg focus:ring-4 focus:ring-blue-200 focus:border-blue-500 text-gray-700 transition-all duration-200 py-4 px-6 font-semibold"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="flex gap-3 mt-6">
                        <button 
                          type="button" 
                          onClick={handlePrevStep}
                          className="w-1/3 bg-gray-300 text-gray-800 py-4 px-2 rounded-full font-bold hover:bg-gray-400 transition-all duration-300 text-sm md:text-base flex items-center justify-center"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 hidden sm:inline" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Back
                        </button>
                        <button 
                          type="button" 
                          onClick={handleNextStep}
                          className="w-2/3 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-2 rounded-full font-black hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm md:text-base flex items-center justify-center"
                        >
                          Continue
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Business Details */}
                  {formStep === 2 && (
                    <div className="space-y-4">
                      <h3 className="text-2xl font-black text-gray-800 mb-4">Business Information</h3>
                      <div>
                        <label htmlFor="business" className="block text-sm font-bold text-gray-700 mb-2">Business Name</label>
                        <input 
                          type="text" 
                          id="business" 
                          name="business" 
                          className="block w-full rounded-full border-blue-300 border-2 shadow-lg focus:ring-4 focus:ring-blue-200 focus:border-blue-500 text-gray-700 transition-all duration-200 py-4 px-6 font-semibold"
                          placeholder="Your business or brand name"
                          value={formData.business}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="currentSales" className="block text-sm font-bold text-gray-700 mb-2">Current Monthly Sales</label>
                        <select
                          id="currentSales"
                          name="currentSales"
                          className="block w-full rounded-full border-blue-300 border-2 shadow-lg focus:ring-4 focus:ring-blue-200 focus:border-blue-500 text-gray-700 transition-all duration-200 py-4 px-6 appearance-none bg-white font-semibold"
                          value={formData.currentSales}
                          onChange={handleInputChange}
                        >
                          <option value="">Select current sales range</option>
                          {salesOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="platform" className="block text-sm font-bold text-gray-700 mb-2">Current Platform</label>
                        <select
                          id="platform"
                          name="platform"
                          className="block w-full rounded-full border-blue-300 border-2 shadow-lg focus:ring-4 focus:ring-blue-200 focus:border-blue-500 text-gray-700 transition-all duration-200 py-4 px-6 appearance-none bg-white font-semibold"
                          value={formData.platform}
                          onChange={handleInputChange}
                        >
                          <option value="">Select your platform</option>
                          {platformOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                      <div className="flex gap-3 mt-6">
                        <button 
                          type="button" 
                          onClick={handlePrevStep}
                          className="w-1/3 bg-gray-300 text-gray-800 py-4 px-2 rounded-full font-bold hover:bg-gray-400 transition-all duration-300 text-sm md:text-base flex items-center justify-center"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 hidden sm:inline" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Back
                        </button>
                        <button 
                          type="button" 
                          onClick={handleNextStep}
                          className="w-2/3 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-2 rounded-full font-black hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm md:text-base flex items-center justify-center"
                        >
                          Continue
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Submit */}
                  {formStep === 3 && (
                    <div className="space-y-4">
                      <h3 className="text-2xl font-black text-gray-800 mb-4">Ready for Professional Management?</h3>
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border-2 border-blue-200">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-semibold">
                          <div className="text-gray-600">Mobile Number:</div>
                          <div className="text-gray-800">+91 {formData.mobile}</div>
                          
                          <div className="text-gray-600">Name:</div>
                          <div className="text-gray-800">{formData.name}</div>
                          
                          <div className="text-gray-600">Business:</div>
                          <div className="text-gray-800">{formData.business || 'Not provided'}</div>
                          
                          <div className="text-gray-600">Current Sales:</div>
                          <div className="text-gray-800">{formData.currentSales || 'Not provided'}</div>
                          
                          <div className="text-gray-600">Platform:</div>
                          <div className="text-gray-800">{formData.platform || 'Not provided'}</div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-xl border-2 border-green-300">
                        <h4 className="font-black text-green-800 mb-3 text-lg">🎯 WHAT YOU GET:</h4>
                        <div className="space-y-2 text-green-700 font-semibold">
                          <div className="flex items-center">
                            <span className="text-green-600 mr-2">✓</span>
                            <span>Complete account takeover & management</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-green-600 mr-2">✓</span>
                            <span>300% guaranteed sales growth</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-green-600 mr-2">✓</span>
                            <span>24/7 professional customer service</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-green-600 mr-2">✓</span>
                            <span>Stress-free business operations</span>
                          </div>
                        </div>
                      </div>
                      {submitError && (
                        <div className="text-red-500 text-sm p-3 bg-red-50 rounded border border-red-200 font-semibold">
                          {submitError}
                        </div>
                      )}
                      <div className="flex gap-3 mt-6">
                        <button 
                          type="button" 
                          onClick={handlePrevStep}
                          className="w-1/3 bg-gray-300 text-gray-800 py-4 px-2 rounded-full font-bold hover:bg-gray-400 transition-all duration-300 text-sm md:text-base flex items-center justify-center"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 hidden sm:inline" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Back
                        </button>
                        <button 
                          type="submit" 
                          className="w-2/3 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 px-2 rounded-full font-black hover:from-green-700 hover:to-emerald-700 transition-all duration-300 text-sm md:text-base flex items-center justify-center shadow-xl"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin flex-shrink-0 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              <span className="truncate whitespace-nowrap">Processing...</span>
                            </>
                          ) : <span className="truncate whitespace-nowrap">🚀 START MANAGEMENT NOW!</span>}
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              )}
            </div>
            
            <div className="mt-8 text-center text-white font-bold">
              <p>⚡ Limited slots - We only take 5 new clients per month!</p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-8 md:py-20 px-4 bg-black text-white relative" aria-labelledby="final-cta-heading">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="final-cta-heading" className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-10 leading-tight">
              <span className="text-blue-500">STOP STRUGGLING</span><br />
              Start <span className="text-yellow-400">GROWING!</span>
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-3xl md:text-4xl font-black text-blue-500">
                🎯 COMPLETE ACCOUNT TAKEOVER
              </p>
              <p className="text-2xl md:text-3xl font-bold text-yellow-400">
                ⚡ 300% GUARANTEED GROWTH
              </p>
              <p className="text-xl md:text-2xl font-semibold text-white">
                💰 STRESS-FREE OPERATIONS
              </p>
            </div>
            
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300 font-semibold">
              Hand over your Myntra & Ajio accounts to professionals who eat, sleep, 
              and breathe marketplace success. Focus on your business while we triple your sales!
            </p>
            
            <div className="mb-8">
              <button
                onClick={() => {
                  gtag('event', 'conversion_event_contact', {});
                  scrollToForm();
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-black py-5 px-10 rounded-full shadow-2xl text-xl md:text-2xl transition-all duration-300 border-4 border-yellow-400 animate-pulse"
              >
                🚀 TAKE OVER MY ACCOUNTS NOW!
              </button>
            </div>
            
            <div className="bg-red-900/50 rounded-xl p-6 border-2 border-red-500">
              <p className="text-red-300 font-bold text-lg mb-2">⏰ URGENT: LIMITED AVAILABILITY</p>
              <p className="text-white">
                Only <span className="text-3xl font-black text-yellow-400">3 SLOTS</span> remaining this month<br />
                <span className="text-red-400 font-bold">Don't let your competitors get ahead!</span>
              </p>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="w-full py-6 bg-gray-900 text-white text-center text-sm">
          <div className="max-w-5xl mx-auto px-4">
            <p>© {new Date().getFullYear()} Technovita Solution. All rights reserved.</p>
            <p className="mt-2 text-gray-400">
              Professional Myntra & Ajio account management services. We guarantee results or your money back.
            </p>
          </div>
        </footer>
      </div>

      {/* JSON-LD Structured Data */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Myntra & Ajio Account Management Services",
            "description": "Professional marketplace account management for Myntra and Ajio sellers. Complete account takeover including listings, inventory, customer service, returns management, and growth strategies.",
            "provider": {
              "@type": "Organization",
              "name": "Technovita Solution",
              "url": "https://technovitasolution.com"
            },
            "offers": {
              "@type": "Offer",
              "description": "300% sales growth guarantee with complete account management"
            },
            "areaServed": "India",
            "serviceType": "Ecommerce Account Management",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Account Management Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Complete Account Management"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Strategic Growth Planning"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "24/7 Customer Service"
                  }
                }
              ]
            }
          })
        }}
      />
    </>
  );
}
