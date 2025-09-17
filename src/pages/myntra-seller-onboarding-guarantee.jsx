import React, { useState, useEffect, useRef } from 'react';
import WhatsAppCTA from '../components/WhatsappCTA';
import Head from 'next/head';

export default function MyntraSellerOnboardingGuarantee() {
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
      title: "Account Approved in 3 Days",
      videoUrl: "https://www.youtube.com/embed/0KtKwVq39Y4",
      description: "Got my Myntra seller account approved in just 3 days with their guarantee service!"
    },
    {
      id: 2,
      name: "Sneha",
      title: "From Application to First Sale in 4 Days",
      videoUrl: "https://www.youtube.com/embed/eoCYSK0p-A8",
      description: "Their 5-day guarantee worked perfectly. I was selling within 4 days!"
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
        <title>Myntra Seller Onboarding in 5 Days | Money Back Guarantee</title>
        <meta name="description" content="Get your Myntra seller account approved in 5 days or get your money back! 100% guaranteed Myntra onboarding service with complete documentation and verification support." />
        <meta name="keywords" content="myntra seller 5 days, myntra money back guarantee, myntra seller onboarding, fast myntra approval, myntra account guarantee" />
        <meta property="og:title" content="Myntra Seller Onboarding in 5 Days | Money Back Guarantee" />
        <meta property="og:description" content="100% guaranteed Myntra seller account approval in 5 days or get your money back. Fast-track onboarding service." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://technovitasolution.com/myntra-seller-onboarding-guarantee" />
        <meta property="og:image" content="/images/myntra/myntra-guarantee-onboarding.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://technovitasolution.com/myntra-seller-onboarding-guarantee" />
      </Head>

      <div className="bg-white min-h-screen flex flex-col items-center justify-start">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-green-50 via-white to-blue-50 py-12 md:py-16 px-4 flex flex-col items-center text-center relative overflow-hidden" aria-labelledby="hero-heading">
          <div className="max-w-5xl z-10">
            {/* Guarantee Badge */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold px-6 py-2 rounded-full text-sm mb-4 inline-block shadow-lg">
              💰 MONEY BACK GUARANTEE
            </div>
            
            <h1 id="hero-heading" className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-6 md:mb-8 leading-tight">
              <span className="relative inline-block bg-gradient-to-r from-green-600 via-emerald-500 to-green-700 bg-[length:200%_auto] animate-gradient-x text-transparent bg-clip-text">Myntra Onboarding</span> in 5 Days<br />
              <span className="text-2xl md:text-3xl lg:text-4xl text-red-600 font-bold">or Money Back!</span>
            </h1>
            
            <p className="text-base md:text-xl text-gray-700 mb-6 md:mb-8 max-w-3xl mx-auto font-medium">
              🚀 <strong>100% Guaranteed Results:</strong> Get your Myntra seller account approved and start selling within 5 days, or we'll refund every penny!
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-4 shadow-md border border-green-200">
                <div className="text-green-600 font-bold text-lg">⏰ 5-Day Promise</div>
                <div className="text-sm text-gray-600">Account approved in 5 days or less</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md border border-blue-200">
                <div className="text-blue-600 font-bold text-lg">💯 100% Success Rate</div>
                <div className="text-sm text-gray-600">Never had a single rejection</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md border border-purple-200">
                <div className="text-purple-600 font-bold text-lg">🔒 Money Back Guarantee</div>
                <div className="text-sm text-gray-600">Full refund if we fail to deliver</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8">
              <a 
                href={`https://wa.me/917042163504?text=${encodeURIComponent("I want the 5-day Myntra onboarding guarantee service")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-600 border-2 border-green-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-green-700 hover:border-green-700 transition w-full sm:w-auto shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                Get Guarantee Service Now
              </a>
              <button 
                onClick={scrollToForm}
                className="bg-transparent border-2 border-blue-600 text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition w-full sm:w-auto"
              >
                Apply with Money Back Guarantee
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-yellow-800 font-semibold mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                LIMITED TIME OFFER
              </div>
              <div className="text-sm text-yellow-700">
                ⚡ <strong>Only 5 slots left this month</strong> - We limit our guarantee service to ensure 100% success rate
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-1 text-gray-600 text-[10px] sm:text-xs md:text-sm whitespace-nowrap mt-3">
              <span>✓ 5-day guarantee</span>
              <span className="mx-1 sm:mx-2">•</span>
              <span>✓ Money back promise</span>
              <span className="mx-1 sm:mx-2">•</span>
              <span>✓ 100% success rate</span>
            </div>
          </div>
          
          {/* Abstract shapes for visual appeal */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-green-100 opacity-20 rounded-full"></div>
          <div className="absolute top-10 -left-10 w-32 h-32 bg-blue-100 opacity-20 rounded-full"></div>
        </section>

        {/* Guarantee Details Section */}
        <section className="w-full py-8 md:py-16 px-4 bg-gray-50" aria-labelledby="guarantee-details">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 id="guarantee-details" className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
                Our <span className="text-green-600">5-Day Money Back Guarantee</span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                We're so confident in our service that we offer a complete money-back guarantee if we don't deliver results within 5 days.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-green-500">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Day 1: Application</h3>
                <p className="text-gray-600 text-sm">We submit your complete Myntra seller application with all required documents</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-blue-500">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2-3</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Days 2-3: Verification</h3>
                <p className="text-gray-600 text-sm">We handle all verification calls and document reviews with Myntra team</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-purple-500">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">4</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Day 4: Approval</h3>
                <p className="text-gray-600 text-sm">Your Myntra seller account gets approved and activated</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-orange-500">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">5</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Day 5: Ready to Sell</h3>
                <p className="text-gray-600 text-sm">Your account is ready for product listing and sales</p>
              </div>
            </div>

            <div className="mt-12 bg-red-50 border border-red-200 rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-red-800 mb-3">💰 Money Back Guarantee Terms</h3>
              <p className="text-red-700 mb-4">
                If we don't get your Myntra seller account approved within 5 working days, we'll refund 100% of your payment - no questions asked!
              </p>
              <div className="text-sm text-red-600">
                * Terms apply. Refund processed within 24 hours if we fail to deliver.
              </div>
            </div>
          </div>
        </section>

        {/* Video Testimonials Section */}
        <section className="w-full py-8 md:py-20 px-4 bg-white" aria-labelledby="testimonial-heading">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-green-600 font-medium text-sm uppercase tracking-wider mb-2 inline-block">Success Stories</span>
              <h2 id="testimonial-heading" className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                Brands Who Got <span className="text-green-600">5-Day Approval</span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                See how these sellers got their Myntra accounts approved in record time with our guarantee service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-green-100"
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
                        <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center cursor-pointer shadow-lg">
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
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                        GUARANTEED
                      </div>
                    </div>
                    <h4 className="font-medium text-green-600 mb-2 text-lg">{testimonial.title}</h4>
                    <p className="text-gray-600">{testimonial.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <button 
                onClick={scrollToForm}
                className="inline-flex items-center justify-center bg-green-600 border-2 border-green-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-green-700 hover:border-green-700 transition cursor-pointer shadow-lg"
              >
                Get Your 5-Day Guarantee Now
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-8 md:py-16 px-4 bg-gray-50" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What's Included in Our Guarantee Service</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Everything you need to get approved on Myntra in 5 days, backed by our money-back guarantee.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {/* Service 1 */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500 hover:transform hover:scale-105 transition duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" role="img">
                    <title>Fast Application Icon</title>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Express Application</h3>
                <p className="text-gray-600 text-center">Priority application processing with all documents prepared perfectly for instant approval</p>
              </div>
              
              {/* Service 2 */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500 hover:transform hover:scale-105 transition duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" role="img">
                    <title>24/7 Support Icon</title>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">24/7 Support</h3>
                <p className="text-gray-600 text-center">Dedicated support team monitoring your application status every hour until approval</p>
              </div>
              
              {/* Service 3 */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500 hover:transform hover:scale-105 transition duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" role="img">
                    <title>Direct Contact Icon</title>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Direct Myntra Contact</h3>
                <p className="text-gray-600 text-center">We handle all communication directly with Myntra verification team on your behalf</p>
              </div>
              
              {/* Service 4 */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-500 hover:transform hover:scale-105 transition duration-300">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" role="img">
                    <title>Money Back Icon</title>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Money Back Promise</h3>
                <p className="text-gray-600 text-center">100% refund if we don't get your account approved within 5 working days</p>
              </div>
            </div>
          </div>
        </section>    

        {/* Application Form Section */}
        <section id="apply-form" ref={formSectionRef} className="w-full py-8 md:py-20 px-4 bg-gradient-to-br from-green-50 to-white" aria-labelledby="form-heading">
          <div className="max-w-xs sm:max-w-lg mx-auto">
            <div className="text-center mb-12">
              <span className="text-green-600 font-medium text-sm uppercase tracking-wider mb-2 inline-block">5-Day Guarantee Service</span>
              <h2 id="form-heading" className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Apply with Money Back Guarantee
              </h2>
              <p className="text-lg text-gray-600 max-w-md mx-auto">
                Get your Myntra seller account approved in 5 days or get 100% refund. Limited slots available!
              </p>
            </div>

            {/* Multi-step form */}
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-8 relative border-2 border-green-200">
              {/* Guarantee Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  💰 MONEY BACK GUARANTEE
                </div>
              </div>

              {/* Progress indicator */}
              <div className="flex justify-between items-center mb-8 mt-4">
                {[0, 1, 2, 3].map((step) => (
                  <div key={step} className="flex flex-col items-center">
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${
                        submitSuccess || step < formStep ? 'bg-green-500 text-white' : 
                        step === formStep ? 'bg-green-600 text-white' : 
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
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Guarantee Service Activated!</h3>
                  <p className="text-gray-600 mb-6">
                    Your 5-day money back guarantee is now active. Our team will start working on your Myntra approval immediately.
                  </p>
                  <WhatsAppCTA 
                    phoneNumber="917042163504"
                    message="Hi, I just applied for the 5-day Myntra guarantee service. Please start my application process."
                    showMessage={false}
                    buttonText="Track Your 5-Day Progress"
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
                            <span className="flex items-center justify-center h-full px-3 md:px-4 bg-green-50 text-green-600 font-medium border border-r-0 border-green-300 rounded-l-full text-sm">
                              +91
                            </span>
                          </div>
                          <input 
                            type="tel" 
                            id="mobile" 
                            name="mobile" 
                            pattern="[0-9]{10}" 
                            maxLength="10"
                            className="block w-full pl-16 md:pl-20 pr-4 py-3 rounded-full border-green-300 shadow-sm focus:ring-2 focus:ring-green-200 focus:border-green-500 text-gray-700 transition-all duration-200"
                            placeholder="10-digit mobile number"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <p className="mt-2 text-xs text-gray-500 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                          </svg>
                          We'll contact you within 1 hour to start your 5-day process
                        </p>
                      </div>
                      <div className="mt-6">
                        <button 
                          type="button" 
                          onClick={handleNextStep}
                          className="w-full bg-green-600 text-white py-3 px-6 rounded-full font-medium hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg text-base flex items-center justify-center"
                        >
                          Continue with Guarantee
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
                          className="block w-full rounded-full border-green-300 shadow-sm focus:ring-2 focus:ring-green-200 focus:border-green-500 text-gray-700 transition-all duration-200 py-3 px-4"
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
                          className="w-2/3 bg-green-600 text-white py-3 px-1 md:px-6 rounded-full font-medium hover:bg-green-700 transition-all duration-300 text-sm md:text-base flex items-center justify-center"
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
                          className="block w-full rounded-full border-green-300 shadow-sm focus:ring-2 focus:ring-green-200 focus:border-green-500 text-gray-700 transition-all duration-200 py-3 px-4"
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
                          className="block w-full rounded-full border-green-300 shadow-sm focus:ring-2 focus:ring-green-200 focus:border-green-500 text-gray-700 transition-all duration-200 py-3 px-4 appearance-none bg-white"
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
                          className="w-2/3 bg-green-600 text-white py-3 px-1 md:px-6 rounded-full font-medium hover:bg-green-700 transition-all duration-300 text-sm md:text-base flex items-center justify-center"
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
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Activate Your 5-Day Guarantee</h3>
                      <div className="bg-green-50 p-3 md:p-4 rounded-lg border border-green-200">
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
                      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                        <h4 className="font-bold text-yellow-800 mb-2">💰 Money Back Guarantee Terms:</h4>
                        <ul className="text-sm text-yellow-700 space-y-1">
                          <li>• Your Myntra seller account will be approved within 5 working days</li>
                          <li>• If we fail to deliver, you get 100% refund within 24 hours</li>
                          <li>• No hidden charges or conditions</li>
                        </ul>
                      </div>
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
                          className="w-2/3 bg-green-600 text-white py-3 px-1 md:px-6 rounded-full font-medium hover:bg-green-700 transition-all duration-300 text-sm md:text-base flex items-center justify-center"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin flex-shrink-0 mr-1 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              <span className="truncate whitespace-nowrap">Activating...</span>
                            </>
                          ) : <span className="truncate whitespace-nowrap">Activate 5-Day Guarantee</span>}
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              )}
            </div>
            
            <div className="mt-8 text-center text-sm text-gray-500">
              <p>🔒 Your money is safe with our guarantee policy. No risk, guaranteed results!</p>
            </div>
          </div>
        </section>

        {/* Final Guarantee Section */}
        <section className="w-full py-8 md:py-20 px-4 bg-gradient-to-br from-green-600 to-emerald-700 text-white relative" aria-labelledby="final-guarantee-heading">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="final-guarantee-heading" className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-10 leading-tight">
              <span className="text-yellow-300">5 Days</span> to Success<br />
              or <span className="text-yellow-300">100% Money Back!</span>
            </h2>
            
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-10">
              <p className="text-2xl md:text-3xl font-semibold">
                ✅ GUARANTEED APPROVAL
              </p>
              <p className="text-2xl md:text-3xl font-semibold">
                ⚡ 5-DAY PROMISE
              </p>
              <p className="text-2xl md:text-3xl font-semibold">
                💰 MONEY BACK GUARANTEE
              </p>
            </div>
            
            <p className="text-xl md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto opacity-90">
              Join the 100+ brands who trusted our guarantee service and got their 
              Myntra seller accounts approved in record time!
            </p>
            
            <div className="mb-8">
              <button
                onClick={scrollToForm}
                className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-3 px-6 md:py-4 md:px-8 rounded-full shadow-lg text-base md:text-lg transition-colors"
              >
                Claim Your 5-Day Guarantee Now
              </button>
            </div>
            
            <p className="text-sm opacity-75">
              ⏰ Limited slots: Only 5 guarantee services available this month
            </p>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="w-full py-6 bg-gray-900 text-white text-center text-sm">
          <div className="max-w-5xl mx-auto px-4">
            <p>© {new Date().getFullYear()} Technovita Solution. All rights reserved.</p>
            <p className="mt-2 text-gray-400">
              Money back guarantee applies to our service delivery. Your Myntra seller account approval is guaranteed in 5 days.
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
            "name": "Myntra Seller Onboarding with 5-Day Money Back Guarantee",
            "description": "Get your Myntra seller account approved in 5 days or get 100% money back. Guaranteed Myntra onboarding service for fashion brands.",
            "provider": {
              "@type": "Organization",
              "name": "Technovita Solution",
              "url": "https://technovitasolution.com"
            },
            "offers": {
              "@type": "Offer",
              "availability": "InStock",
              "priceCurrency": "INR"
            },
            "areaServed": "India",
            "serviceType": "Myntra Seller Account Approval with Money Back Guarantee",
            "guarantee": {
              "@type": "Guarantee",
              "name": "5-Day Money Back Guarantee",
              "description": "Myntra seller account approval within 5 working days or 100% refund"
            }
          })
        }}
      />
    </>
  );
}
