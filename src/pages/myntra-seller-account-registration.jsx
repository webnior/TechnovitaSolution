import React, { useState, useEffect, useRef } from 'react';
import WhatsAppCTA from '../components/WhatsappCTA';
import Head from 'next/head';

export default function MyntraSellerLanding() {
  // State to track which videos have been loaded
  const [videosLoaded, setVideosLoaded] = useState({});
  const videoRefs = useRef([]);

  // Form state
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    mobile: '',
    name: '',
    business: '',
    category: ''
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
      const response = await fetch('/api/myntra-seller', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
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
      name: "Yagvendra",
      title: "Increased Sales by 300%",
      videoUrl: "https://www.youtube.com/embed/0KtKwVq39Y4",
      description: "After onboarding with their help, our orders tripled in just 2 months!"
    },
    {
      id: 2,
      name: "Sneha",
      title: "From Zero to 200 Orders/Day",
      videoUrl: "https://www.youtube.com/embed/eoCYSK0p-A8",
      description: "Their product photography and listing services made all the difference."
    },
    {
      id: 3,
      name: "Mohit - Founder of Oddgrab",
      title: "Successfully Onboarded on Myntra",
      videoUrl: "https://www.youtube.com/embed/piYVKoZGVww",
      description: "Technovita's Myntra onboarding service was exceptional! They handled everything from product photography to listing optimization perfectly. Our brand presence on Myntra has never been stronger."
    },
    {
      id: 4,
      name: "Sayali - Founder of Luxerra",
      title: "Successfully Onboarded on Myntra & Ajio",
      videoUrl: "https://www.youtube.com/embed/GxjBEfcQliQ",
      description: "Outstanding service! Technovita helped us launch Luxerra on both Myntra and Ajio with incredible attention to detail. Their product listing services and catalog management expertise made the entire process smooth and successful."
    }
  ];

  // Product categories for the form
  const productCategories = [
    "Women's Western Wear",
    "Women's Ethnic Wear",
    "Men's Western Wear",
    "Men's Ethnic Wear",
    "Kids' Wear",
    "Footwear",
    "Accessories",
    "Beauty & Personal Care",
    "Home & Living",
    "Other"
  ];

  // Function to scroll to form section
  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>Myntra Seller Registration | Launch Your Brand on Myntra in 14 Days</title>
        <meta name="description" content="Get expert assistance for Myntra seller account registration. Complete onboarding service including documentation, verification, product photography, listing and sales strategy." />
        <meta name="keywords" content="myntra seller registration, myntra seller account, sell on myntra, myntra onboarding, myntra product listing" />
        <meta property="og:title" content="Myntra Seller Registration | Launch Your Brand on Myntra" />
        <meta property="og:description" content="Complete Myntra seller onboarding service to help fashion brands launch on Myntra marketplace with hassle-free verification." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://technovitasolution.com/myntra-seller-account-registration" />
        <meta property="og:image" content="/images/myntra/myntra-seller-registration.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://technovitasolution.com/myntra-seller-account-registration" />
        
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
        <section className="w-full bg-white py-12 md:py-16 px-4 flex flex-col items-center text-center relative overflow-hidden" aria-labelledby="hero-heading">
          <div className="max-w-5xl z-10">
            <span className="bg-pink-600 text-white font-semibold px-4 py-1 rounded-full text-sm mb-4 inline-block">MYNTRA SELLER EXPERTS</span>
            <h1 id="hero-heading" className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-6 md:mb-8 leading-tight">
              Launch Your Brand on <span className="relative inline-block bg-gradient-to-r from-purple-500 via-pink-400 to-pink-600 bg-[length:200%_auto] animate-gradient-x text-transparent bg-clip-text">Myntra</span> Today!
            </h1>
            <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
              From account setup to your first sale, our end-to-end service makes selling on Myntra simple, profitable, and hassle-free.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8">
              <button 
                onClick={() => gtagSendEvent(`https://wa.me/917042163504?text=${encodeURIComponent("I want to launch my brand on myntra")}`)}
                className="flex items-center justify-center bg-green-600 border-2 border-green-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-green-700 hover:border-green-700 transition w-full sm:w-auto"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                Chat With Myntra Expert
              </button>
              <button 
                onClick={() => {
                  gtag('event', 'conversion_event_contact', {});
                  scrollToForm();
                }}
                className="bg-transparent border-2 border-pink-600 text-pink-600 font-bold px-8 py-4 rounded-lg hover:bg-pink-50 transition w-full sm:w-auto"
              >
                Apply for Seller Verification
              </button>
            </div>
            <div className="flex items-center justify-center gap-1 text-gray-600 text-[10px] sm:text-xs md:text-sm whitespace-nowrap mt-3">
              <span>✓ No hidden fees</span>
              <span className="mx-1 sm:mx-2">•</span>
              <span>✓ 15-day support</span>
              <span className="mx-1 sm:mx-2">•</span>
              <span>✓ 100+ brands launched</span>
            </div>
          </div>
          
          {/* Abstract shapes for visual appeal */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-pink-100 opacity-20 rounded-full"></div>
          <div className="absolute top-10 -left-10 w-32 h-32 bg-purple-100 opacity-20 rounded-full"></div>
        </section>

        {/* Video Testimonials Section */}
        <section className="w-full py-8 md:py-20 px-4 bg-white" aria-labelledby="testimonial-heading">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-pink-600 font-medium text-sm uppercase tracking-wider mb-2 inline-block">Real Seller Success Stories</span>
              <h2 id="testimonial-heading" className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                Trusted by <span className="text-pink-600">100+</span> Brands on Myntra
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it. See how these sellers transformed their businesses with our expert Myntra onboarding services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
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
                      <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-gray-100">
                        {/* Placeholder with play button */}
                        <div className="w-16 h-16 rounded-full bg-pink-600 flex items-center justify-center cursor-pointer shadow-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <title>Play Video</title>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <p className="mt-3 text-sm text-gray-500">Watch Success Story</p>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-bold text-xl text-gray-800">{testimonial.name}</h3>
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <h4 className="font-medium text-pink-600 mb-2 text-lg">{testimonial.title}</h4>
                    <p className="text-gray-600">{testimonial.description}</p>
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
                className="inline-flex items-center justify-center bg-pink-600 border-2 border-pink-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-pink-700 hover:border-pink-700 transition cursor-pointer"
              >
                Become Our Next Success Story
              </button>
            </div>
          </div>
        </section>

        {/* Services Section (Previously Benefits Section) */}
        <section className="w-full py-8 md:py-16 px-4" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Your Complete Myntra Launch Solution</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">We handle every aspect of your Myntra seller journey, from application to your first sale.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {/* Service 1 */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-pink-500 hover:transform hover:scale-105 transition duration-300">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" role="img">
                    <title>Myntra Onboarding Icon</title>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Myntra Onboarding</h3>
                <p className="text-gray-600 text-center">We handle application, documentation, verification, and account setup for your Myntra seller account.</p>
              </div>
              
              {/* Service 2 */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-pink-500 hover:transform hover:scale-105 transition duration-300">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" role="img">
                    <title>Product Photography Icon</title>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Professional Photo Shoots</h3>
                <p className="text-gray-600 text-center">Get Myntra-compliant product photography that meets all marketplace requirements and boosts conversions.</p>
              </div>
              
              {/* Service 3 */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-pink-500 hover:transform hover:scale-105 transition duration-300">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" role="img">
                    <title>Product Listing Icon</title>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Product Listing</h3>
                <p className="text-gray-600 text-center">Expert catalog creation with SEO optimized titles, descriptions, and perfect categorization for maximum visibility.</p>
              </div>
              
              {/* Service 4 */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-pink-500 hover:transform hover:scale-105 transition duration-300">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" role="img">
                    <title>Sales Strategy Icon</title>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">First Sales Strategy</h3>
                <p className="text-gray-600 text-center">Strategic pricing, promotions, and inventory planning to help you achieve your first sales quickly.</p>
              </div>
            </div>
          </div>
        </section>    

        {/* Application Form Section */}
        <section id="apply-form" ref={formSectionRef} className="w-full py-8 md:py-20 px-4 bg-gradient-to-br from-pink-50 to-white" aria-labelledby="form-heading">
          <div className="max-w-xs sm:max-w-lg mx-auto">
            <div className="text-center mb-12">
              <span className="text-pink-600 font-medium text-sm uppercase tracking-wider mb-2 inline-block">Start Selling Today</span>
              <h2 id="form-heading" className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Apply for Myntra Seller Verification
              </h2>
              <p className="text-lg text-gray-600 max-w-md mx-auto">
                Fill out this quick form and our experts will guide you through the entire Myntra onboarding process.
              </p>
            </div>

            {/* Multi-step form */}
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-8 relative">
              {/* Progress indicator */}
              <div className="flex justify-between items-center mb-8">
                {[0, 1, 2, 3].map((step) => (
                  <div key={step} className="flex flex-col items-center">
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${
                        submitSuccess || step < formStep ? 'bg-green-500 text-white' : 
                        step === formStep ? 'bg-pink-600 text-white' : 
                        'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {submitSuccess || step < formStep ? '✓' : step + 1}
                    </div>
                    {step < 3 && (
                      <div className={`h-1 w-16 mt-2 ${submitSuccess || step < formStep ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                    )}
                  </div>
                ))}
              </div>

              {submitSuccess ? (
                <div className="py-10 text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Application Submitted!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for your interest in selling on Myntra. Our team will contact you shortly to guide you through the next steps.
                  </p>
                  <WhatsAppCTA 
                    phoneNumber="917042163504"
                    message="Hi, I just submitted my Myntra seller application and would like to know the next steps."
                    showMessage={false}
                    buttonText="Contact Us on WhatsApp"
                    className="inline-block"
                  />
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Mobile Number */}
                  {formStep === 0 && (
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Enter your mobile number</h3>
                      <div>
                        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center">
                            <span className="flex items-center justify-center h-full px-3 md:px-4 bg-pink-50 text-pink-600 font-medium border border-r-0 border-pink-300 rounded-l-full text-sm">
                              +91
                            </span>
                          </div>
                          <input 
                            type="tel" 
                            id="mobile" 
                            name="mobile" 
                            pattern="[0-9]{10}" 
                            maxLength="10"
                            className="block w-full pl-16 md:pl-20 pr-4 py-3 rounded-full border-pink-300 shadow-sm focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-gray-700 transition-all duration-200"
                            placeholder="10-digit mobile number"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <p className="mt-2 text-xs text-gray-500 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1 text-pink-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                          </svg>
                          We'll send you a verification code on this number
                        </p>
                      </div>
                      <div className="mt-6">
                        <button 
                          type="button" 
                          onClick={handleNextStep}
                          className="w-full bg-pink-600 text-white py-3 px-6 rounded-full font-medium hover:bg-pink-700 transition-all duration-300 shadow-md hover:shadow-lg text-base flex items-center justify-center"
                        >
                          Continue
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Name */}
                  {formStep === 1 && (
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Tell us your name</h3>
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          className="block w-full rounded-full border-pink-300 shadow-sm focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-gray-700 transition-all duration-200 py-3 px-4"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="flex gap-2 mt-6">
                        <button 
                          type="button" 
                          onClick={handlePrevStep}
                          className="w-1/3 bg-gray-200 text-gray-800 py-3 px-1 md:px-4 rounded-full font-medium hover:bg-gray-300 transition-all duration-300 text-sm md:text-base flex items-center justify-center"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 hidden sm:inline" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Back
                        </button>
                        <button 
                          type="button" 
                          onClick={handleNextStep}
                          className="w-2/3 bg-pink-600 text-white py-3 px-1 md:px-6 rounded-full font-medium hover:bg-pink-700 transition-all duration-300 text-sm md:text-base flex items-center justify-center"
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
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Business Information</h3>
                      <div>
                        <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                        <input 
                          type="text" 
                          id="business" 
                          name="business" 
                          className="block w-full rounded-full border-pink-300 shadow-sm focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-gray-700 transition-all duration-200 py-3 px-4"
                          placeholder="Your business or brand name"
                          value={formData.business}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Product Category</label>
                        <select
                          id="category"
                          name="category"
                          className="block w-full rounded-full border-pink-300 shadow-sm focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-gray-700 transition-all duration-200 py-3 px-4 appearance-none bg-white"
                          value={formData.category}
                          onChange={handleInputChange}
                          style={{ textOverflow: 'ellipsis' }}
                        >
                          <option value="">Select a category</option>
                          {productCategories.map(category => (
                            <option key={category} value={category}>{category}</option>
                          ))}
                        </select>
                      </div>
                      <div className="flex gap-2 mt-6">
                        <button 
                          type="button" 
                          onClick={handlePrevStep}
                          className="w-1/3 bg-gray-200 text-gray-800 py-3 px-1 md:px-4 rounded-full font-medium hover:bg-gray-300 transition-all duration-300 text-sm md:text-base flex items-center justify-center"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 hidden sm:inline" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Back
                        </button>
                        <button 
                          type="button" 
                          onClick={handleNextStep}
                          className="w-2/3 bg-pink-600 text-white py-3 px-1 md:px-6 rounded-full font-medium hover:bg-pink-700 transition-all duration-300 text-sm md:text-base flex items-center justify-center"
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
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Confirm your details</h3>
                      <div className="bg-gray-50 p-3 md:p-4 rounded-lg border border-gray-200">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                          <div className="font-medium text-gray-500">Mobile Number:</div>
                          <div>+91 {formData.mobile}</div>
                          
                          <div className="font-medium text-gray-500">Name:</div>
                          <div>{formData.name}</div>
                          
                          <div className="font-medium text-gray-500">Business:</div>
                          <div>{formData.business || 'Not provided'}</div>
                          
                          <div className="font-medium text-gray-500">Category:</div>
                          <div>{formData.category || 'Not provided'}</div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        By submitting this form, you agree to be contacted by our Myntra seller experts regarding your onboarding process.
                      </p>
                      {submitError && (
                        <div className="text-red-500 text-sm p-2 bg-red-50 rounded">
                          {submitError}
                        </div>
                      )}
                      <div className="flex gap-2 mt-6">
                        <button 
                          type="button" 
                          onClick={handlePrevStep}
                          className="w-1/3 bg-gray-200 text-gray-800 py-3 px-1 md:px-4 rounded-full font-medium hover:bg-gray-300 transition-all duration-300 text-sm md:text-base flex items-center justify-center"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 hidden sm:inline" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Back
                        </button>
                        <button 
                          type="submit" 
                          className="w-2/3 bg-pink-600 text-white py-3 px-1 md:px-6 rounded-full font-medium hover:bg-pink-700 transition-all duration-300 text-sm md:text-base flex items-center justify-center"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin flex-shrink-0 mr-1 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              <span className="truncate whitespace-nowrap">Processing...</span>
                            </>
                          ) : <span className="truncate whitespace-nowrap">Apply to Sell on Myntra</span>}
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              )}
            </div>
            
            <div className="mt-8 text-center text-sm text-gray-500">
              <p>Enter correct details to get your Myntra seller account verified.</p>
            </div>
          </div>
        </section>

        {/* Final Guarantee Section */}
        <section className="w-full py-8 md:py-20 px-4 bg-white text-gray-800 relative" aria-labelledby="guarantee-heading" style={{ 
          backgroundImage: "radial-gradient(circle, #e5e5e5 1px, transparent 1px)", 
          backgroundSize: "20px 20px" 
        }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="guarantee-heading" className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-10 leading-tight">
              Launch Your Brand on Myntra in Just <span className="text-pink-600">14 Days</span>
            </h2>
            
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-10">
              <p className="text-2xl md:text-3xl font-semibold text-blue-600">
                NO COMPLICATED PAPERWORK
              </p>
              <p className="text-2xl md:text-3xl font-semibold text-cyan-600">
                NO HIDDEN REQUIREMENTS
              </p>
              <p className="text-2xl md:text-3xl font-semibold text-purple-600">
                NO ENDLESS APPROVALS
              </p>
            </div>
            
            <p className="text-xl md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-700">
              Get guaranteed Myntra seller account approval with our end-to-end 
              onboarding service that handles everything from documentation to 
              your first product listing!
            </p>
            
            <div className="mb-8">
              <button
                onClick={() => {
                  gtag('event', 'conversion_event_contact', {});
                  scrollToForm();
                }}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-full shadow-lg text-base md:text-lg transition-colors"
              >
                Apply for Seller Verification Now
              </button>
            </div>
            
            <p className="text-sm text-gray-600">
              Limited slots available. We only work with 10 brands per month to ensure quality service.
            </p>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="w-full py-6 bg-gray-900 text-white text-center text-sm">
          <div className="max-w-5xl mx-auto px-4">
            <p>© {new Date().getFullYear()} Technovita Solution. All rights reserved.</p>
            <p className="mt-2 text-gray-400">
              Your Myntra seller account is in safe hands. We provide seller onboarding services as independent consultants.
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
            "name": "Myntra Seller Account Registration Service",
            "description": "Complete Myntra seller onboarding service for fashion brands, including account verification, product photography, catalog listing, and sales strategy.",
            "provider": {
              "@type": "Organization",
              "name": "Technovita Solution",
              "url": "https://technovitasolution.com"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR"
            },
            "areaServed": "India",
            "serviceType": "Myntra Seller Onboarding",
            "termsOfService": "By submitting the form, you agree to be contacted by our Myntra seller experts."
          })
        }}
      />
    </>
  );
} 