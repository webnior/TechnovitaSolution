import React, { useState, useEffect, useRef } from 'react';
import WhatsAppCTA from '../components/WhatsappCTA';
import Head from 'next/head';

export default function MyntraAjioComboOffer() {
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
        body: JSON.stringify({
          ...formData,
          offer: 'myntra-ajio-combo'
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
      name: "Rajesh Kumar",
      title: "Selling on Both Myntra & Ajio",
      videoUrl: "https://www.youtube.com/embed/0KtKwVq39Y4",
      description: "Got both accounts approved and now selling on Myntra and Ajio simultaneously. Double the sales!"
    },
    {
      id: 2,
      name: "Priya Sharma",
      title: "2X Revenue with Combo Offer",
      videoUrl: "https://www.youtube.com/embed/eoCYSK0p-A8",
      description: "The combo offer helped me launch on both platforms. My revenue doubled in the first month!"
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
        <title>Myntra + Ajio Combo Offer | Get FREE Ajio Onboarding with Myntra</title>
        <meta name="description" content="EXPLOSIVE OFFER: Get Myntra seller onboarding + FREE Ajio seller account setup! Double your fashion business reach with our exclusive 2-for-1 marketplace combo deal." />
        <meta name="keywords" content="myntra ajio combo offer, free ajio onboarding, myntra seller package, double marketplace deal, fashion seller combo" />
        <meta property="og:title" content="Myntra + Ajio Combo Offer | Get FREE Ajio Onboarding" />
        <meta property="og:description" content="Limited time offer: Get Myntra onboarding + FREE Ajio seller account setup. Double your sales with our exclusive combo deal!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://technovitasolution.com/myntra-ajio-combo-offer" />
        <meta property="og:image" content="/images/myntra-ajio-combo-offer.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://technovitasolution.com/myntra-ajio-combo-offer" />
        
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
        <section className="w-full bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400 py-12 md:py-16 px-4 flex flex-col items-center text-center relative overflow-hidden" aria-labelledby="hero-heading">
          <div className="max-w-6xl z-10">
            {/* Flash Sale Badge */}
            <div className="bg-white text-red-600 font-black px-6 py-3 rounded-full text-lg mb-6 inline-block shadow-2xl border-4 border-yellow-300 animate-pulse">
              🔥 EXPLOSIVE COMBO OFFER 🔥
            </div>
            
            <h1 id="hero-heading" className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 md:mb-8 leading-tight drop-shadow-2xl">
              <span className="bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">MYNTRA</span> Onboarding<br />
              <span className="text-3xl md:text-4xl lg:text-5xl text-yellow-200">+</span><br />
              <span className="bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">FREE AJIO</span> Setup!
            </h1>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-8 border-2 border-yellow-300">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                🎯 <span className="text-yellow-200">2 MARKETPLACES</span> FOR THE PRICE OF 1!
              </p>
              <p className="text-lg md:text-xl text-yellow-100 font-semibold">
                Pay for Myntra onboarding, get Ajio seller setup absolutely FREE!<br />
                <span className="text-yellow-200">Double your reach, double your sales!</span>
              </p>
            </div>

            {/* Value Proposition */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-4xl mx-auto">
              <div className="bg-white/90 rounded-xl p-6 shadow-2xl border-l-8 border-red-500">
                <div className="text-red-600 font-black text-2xl mb-2">🏷️ REGULAR OFFER</div>
                <div className="text-gray-800">
                  <div className="line-through text-xl">Myntra Setup Only</div>
                  <div className="line-through text-xl">Ajio Setup Separate</div>
                  <div className="text-2xl font-bold border-t-2 border-gray-300 pt-2 mt-2">Two Different Services</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 shadow-2xl border-4 border-yellow-300 transform rotate-1">
                <div className="text-white font-black text-2xl mb-2">💥 COMBO OFFER</div>
                <div className="text-white">
                  <div className="text-xl">Myntra Setup: Full Service</div>
                  <div className="text-2xl font-bold text-yellow-200">Ajio Setup: FREE! 🎁</div>
                  <div className="text-3xl font-black border-t-4 border-white pt-2 mt-2">2-FOR-1 DEAL!</div>
                </div>
                <div className="bg-yellow-400 text-black font-black px-4 py-2 rounded-full text-sm mt-3 inline-block">
                  MASSIVE SAVINGS!
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button 
                onClick={() => gtagSendEvent(`https://wa.me/917042163504?text=${encodeURIComponent("I want the Myntra + FREE Ajio combo offer!")}`)}
                className="flex items-center justify-center bg-green-600 border-4 border-yellow-300 text-white font-black px-8 py-4 rounded-full hover:bg-green-700 transition w-full sm:w-auto shadow-2xl text-lg animate-bounce"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                CLAIM COMBO OFFER NOW!
              </button>
              <button 
                onClick={() => {
                  gtag('event', 'conversion_event_contact', {});
                  scrollToForm();
                }}
                className="bg-white border-4 border-red-500 text-red-600 font-black px-8 py-4 rounded-full hover:bg-red-50 transition w-full sm:w-auto shadow-xl text-lg"
              >
                GET INSTANT ACCESS
              </button>
            </div>

            {/* Urgency Timer */}
            <div className="bg-black/80 text-white rounded-xl p-6 mb-6 max-w-2xl mx-auto border-4 border-red-500">
              <div className="text-red-400 font-bold text-lg mb-2">⏰ LIMITED TIME OFFER ENDS SOON!</div>
              <div className="text-yellow-300 font-semibold">
                🔥 Only <span className="text-3xl font-black text-red-400">7 SLOTS</span> left for this combo offer<br />
                ⚡ Offer expires in 48 hours!
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-white text-sm md:text-base font-semibold">
              <span>✓ Both accounts in 7 days</span>
              <span className="mx-2">•</span>
              <span>✓ No extra charges</span>
              <span className="mx-2">•</span>
              <span>✓ Double your sales potential</span>
            </div>
          </div>
          
          {/* Animated background elements */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-yellow-400 opacity-20 rounded-full animate-pulse"></div>
          <div className="absolute top-10 -left-10 w-32 h-32 bg-red-400 opacity-20 rounded-full animate-bounce"></div>
        </section>

        {/* Why Combo Section */}
        <section className="w-full py-8 md:py-16 px-4 bg-gradient-to-r from-purple-600 to-indigo-700 text-white" aria-labelledby="why-combo">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 id="why-combo" className="text-3xl md:text-5xl font-black mb-4">
                Why <span className="text-yellow-300">MYNTRA + AJIO</span> Combo?
              </h2>
              <p className="text-xl md:text-2xl font-semibold max-w-3xl mx-auto">
                Don't put all your eggs in one basket! Dominate both major fashion marketplaces simultaneously!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border-2 border-yellow-300">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="font-black text-xl mb-2 text-yellow-300">2X REACH</h3>
                <p className="text-white/90">Access millions of customers on both Myntra and Ajio platforms</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border-2 border-green-300">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="font-black text-xl mb-2 text-green-300">2X REVENUE</h3>
                <p className="text-white/90">Double your sales potential with two major marketplace presence</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border-2 border-blue-300">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="font-black text-xl mb-2 text-blue-300">RISK PROTECTION</h3>
                <p className="text-white/90">Never depend on one platform - diversify your business risk</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border-2 border-pink-300">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="font-black text-xl mb-2 text-pink-300">MARKET DOMINATION</h3>
                <p className="text-white/90">Capture different customer segments on each platform</p>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-center text-black">
              <h3 className="text-2xl md:text-3xl font-black mb-4">🔥 EXCLUSIVE COMBO BENEFITS 🔥</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="space-y-2">
                  <div className="flex items-center"><span className="text-green-600 font-bold mr-2">✓</span> Myntra seller account setup</div>
                  <div className="flex items-center"><span className="text-green-600 font-bold mr-2">✓</span> Ajio seller account setup (FREE!)</div>
                  <div className="flex items-center"><span className="text-green-600 font-bold mr-2">✓</span> Product photography for both platforms</div>
                  <div className="flex items-center"><span className="text-green-600 font-bold mr-2">✓</span> Catalog creation for both marketplaces</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center"><span className="text-green-600 font-bold mr-2">✓</span> Dual marketplace strategy consultation</div>
                  <div className="flex items-center"><span className="text-green-600 font-bold mr-2">✓</span> Cross-platform inventory management</div>
                  <div className="flex items-center"><span className="text-green-600 font-bold mr-2">✓</span> Priority support for both accounts</div>
                  <div className="flex items-center"><span className="text-green-600 font-bold mr-2">✓</span> 30-day post-launch support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Testimonials Section */}
        <section className="w-full py-8 md:py-20 px-4 bg-gray-50" aria-labelledby="testimonial-heading">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-red-600 font-black text-lg uppercase tracking-wider mb-2 inline-block">COMBO SUCCESS STORIES</span>
              <h2 id="testimonial-heading" className="text-3xl md:text-5xl font-black text-gray-800 mb-4">
                Brands Crushing It on <span className="text-red-600">BOTH</span> Platforms!
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-semibold">
                See how smart sellers are maximizing their reach with our exclusive Myntra + Ajio combo offer
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className="bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:shadow-3xl hover:-translate-y-2 border-4 border-gradient-to-r from-red-500 to-orange-500"
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
                      <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-red-100 to-orange-100">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center cursor-pointer shadow-2xl animate-pulse">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <title>Play Video</title>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <p className="mt-4 text-lg font-bold text-gray-700">Watch Combo Success Story</p>
                      </div>
                    )}
                  </div>
                  <div className="p-6 bg-gradient-to-r from-red-50 to-orange-50">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-black text-2xl text-gray-800">{testimonial.name}</h3>
                      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                        COMBO USER
                      </div>
                    </div>
                    <h4 className="font-bold text-red-600 mb-3 text-xl">{testimonial.title}</h4>
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
                className="inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-orange-600 border-4 border-yellow-300 text-white font-black px-10 py-5 rounded-full hover:from-red-700 hover:to-orange-700 transition cursor-pointer shadow-2xl text-xl animate-pulse"
              >
                Join The Combo Success Club!
              </button>
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section id="apply-form" ref={formSectionRef} className="w-full py-8 md:py-20 px-4 bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400" aria-labelledby="form-heading">
          <div className="max-w-xs sm:max-w-lg mx-auto">
            <div className="text-center mb-12">
              <span className="text-white font-black text-lg uppercase tracking-wider mb-2 inline-block">🔥 EXPLOSIVE COMBO DEAL</span>
              <h2 id="form-heading" className="text-3xl md:text-5xl font-black text-white mb-4 drop-shadow-2xl">
                Claim Your FREE Ajio Setup!
              </h2>
              <p className="text-xl text-white max-w-md mx-auto font-bold">
                Apply now and get BOTH Myntra + Ajio onboarding for the price of one!
              </p>
            </div>

            {/* Multi-step form */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 relative border-4 border-yellow-300">
              {/* Combo Offer Badge */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-3 rounded-full text-lg font-black shadow-2xl border-4 border-yellow-300 animate-bounce">
                  🎁 2-FOR-1 COMBO OFFER
                </div>
              </div>

              {/* Progress indicator */}
              <div className="flex justify-between items-center mb-8 mt-8">
                {[0, 1, 2, 3].map((step) => (
                  <div key={step} className="flex flex-col items-center">
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm ${
                        submitSuccess || step < formStep ? 'bg-green-500 text-white' : 
                        step === formStep ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white' : 
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
                  <h3 className="text-2xl font-black text-gray-800 mb-4">🎉 COMBO OFFER CLAIMED!</h3>
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-xl mb-6 border-2 border-green-300">
                    <p className="text-green-800 font-bold mb-2">You're getting:</p>
                    <div className="space-y-1 text-green-700">
                      <div>✓ Myntra seller account setup</div>
                      <div>✓ <span className="font-bold text-red-600">FREE</span> Ajio seller account setup</div>
                      <div>✓ Product photography for both platforms</div>
                      <div>✓ Dual marketplace strategy</div>
                    </div>
                  </div>
                  <WhatsAppCTA 
                    phoneNumber="917042163504"
                    message="Hi! I just claimed the Myntra + FREE Ajio combo offer. Please start setting up both my seller accounts!"
                    showMessage={false}
                    buttonText="Start My Combo Setup Now!"
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
                            <span className="flex items-center justify-center h-full px-4 bg-gradient-to-r from-red-100 to-orange-100 text-red-600 font-bold border border-r-0 border-red-300 rounded-l-full text-sm">
                              +91
                            </span>
                          </div>
                          <input 
                            type="tel" 
                            id="mobile" 
                            name="mobile" 
                            pattern="[0-9]{10}" 
                            maxLength="10"
                            className="block w-full pl-20 pr-4 py-4 rounded-full border-red-300 border-2 shadow-lg focus:ring-4 focus:ring-red-200 focus:border-red-500 text-gray-700 transition-all duration-200 font-semibold"
                            placeholder="10-digit mobile number"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <p className="mt-3 text-sm text-red-600 font-semibold flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                          </svg>
                          We'll call you in 30 minutes to start both setups!
                        </p>
                      </div>
                      <div className="mt-6">
                        <button 
                          type="button" 
                          onClick={handleNextStep}
                          className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-4 px-6 rounded-full font-black hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-xl hover:shadow-2xl text-lg flex items-center justify-center"
                        >
                          CLAIM COMBO OFFER
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
                          className="block w-full rounded-full border-red-300 border-2 shadow-lg focus:ring-4 focus:ring-red-200 focus:border-red-500 text-gray-700 transition-all duration-200 py-4 px-6 font-semibold"
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
                          className="w-2/3 bg-gradient-to-r from-red-600 to-orange-600 text-white py-4 px-2 rounded-full font-black hover:from-red-700 hover:to-orange-700 transition-all duration-300 text-sm md:text-base flex items-center justify-center"
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
                          className="block w-full rounded-full border-red-300 border-2 shadow-lg focus:ring-4 focus:ring-red-200 focus:border-red-500 text-gray-700 transition-all duration-200 py-4 px-6 font-semibold"
                          placeholder="Your business or brand name"
                          value={formData.business}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="category" className="block text-sm font-bold text-gray-700 mb-2">Product Category</label>
                        <select
                          id="category"
                          name="category"
                          className="block w-full rounded-full border-red-300 border-2 shadow-lg focus:ring-4 focus:ring-red-200 focus:border-red-500 text-gray-700 transition-all duration-200 py-4 px-6 appearance-none bg-white font-semibold"
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
                          className="w-2/3 bg-gradient-to-r from-red-600 to-orange-600 text-white py-4 px-2 rounded-full font-black hover:from-red-700 hover:to-orange-700 transition-all duration-300 text-sm md:text-base flex items-center justify-center"
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
                      <h3 className="text-2xl font-black text-gray-800 mb-4">Claim Your Combo Offer!</h3>
                      <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-xl border-2 border-red-200">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-semibold">
                          <div className="text-gray-600">Mobile Number:</div>
                          <div className="text-gray-800">+91 {formData.mobile}</div>
                          
                          <div className="text-gray-600">Name:</div>
                          <div className="text-gray-800">{formData.name}</div>
                          
                          <div className="text-gray-600">Business:</div>
                          <div className="text-gray-800">{formData.business || 'Not provided'}</div>
                          
                          <div className="text-gray-600">Category:</div>
                          <div className="text-gray-800">{formData.category || 'Not provided'}</div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-xl border-2 border-green-300">
                        <h4 className="font-black text-green-800 mb-3 text-lg">🎁 YOUR COMBO PACKAGE INCLUDES:</h4>
                        <div className="space-y-2 text-green-700 font-semibold">
                          <div className="flex items-center">
                            <span className="text-green-600 mr-2">✓</span>
                            <span>Complete Myntra seller account setup</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-green-600 mr-2">✓</span>
                            <span><strong className="text-red-600">FREE</strong> Ajio seller account setup</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-green-600 mr-2">✓</span>
                            <span>Product photography for both platforms</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-green-600 mr-2">✓</span>
                            <span>Dual marketplace strategy consultation</span>
                          </div>
                        </div>
                        <div className="mt-3 text-center">
                          <span className="bg-yellow-400 text-black font-black px-4 py-2 rounded-full text-lg">
                            INCREDIBLE VALUE!
                          </span>
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
                          className="w-2/3 bg-gradient-to-r from-red-600 to-orange-600 text-white py-4 px-2 rounded-full font-black hover:from-red-700 hover:to-orange-700 transition-all duration-300 text-sm md:text-base flex items-center justify-center shadow-xl"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin flex-shrink-0 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              <span className="truncate whitespace-nowrap">Claiming...</span>
                            </>
                          ) : <span className="truncate whitespace-nowrap">🔥 CLAIM COMBO NOW!</span>}
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              )}
            </div>
            
            <div className="mt-8 text-center text-white font-bold">
              <p>⚡ Limited time offer - Only 7 combo packages available!</p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-8 md:py-20 px-4 bg-black text-white relative" aria-labelledby="final-cta-heading">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="final-cta-heading" className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-10 leading-tight">
              <span className="text-red-500">DON'T MISS</span><br />
              This <span className="text-yellow-400">EXPLOSIVE</span> Deal!
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-3xl md:text-4xl font-black text-red-500">
                🔥 MYNTRA + FREE AJIO = 2X SALES
              </p>
              <p className="text-2xl md:text-3xl font-bold text-yellow-400">
                ⚡ MASSIVE SAVINGS TODAY
              </p>
              <p className="text-xl md:text-2xl font-semibold text-white">
                💰 DOUBLE YOUR MARKET REACH
              </p>
            </div>
            
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300 font-semibold">
              This is your chance to dominate both major fashion marketplaces 
              with one investment. Don't let your competitors get ahead!
            </p>
            
            <div className="mb-8">
              <button
                onClick={() => {
                  gtag('event', 'conversion_event_contact', {});
                  scrollToForm();
                }}
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-black py-5 px-10 rounded-full shadow-2xl text-xl md:text-2xl transition-all duration-300 border-4 border-yellow-400 animate-pulse"
              >
                🚀 GRAB COMBO OFFER NOW!
              </button>
            </div>
            
            <div className="bg-red-900/50 rounded-xl p-6 border-2 border-red-500">
              <p className="text-red-300 font-bold text-lg mb-2">⏰ HURRY! OFFER EXPIRES SOON</p>
              <p className="text-white">
                Only <span className="text-3xl font-black text-yellow-400">7 SLOTS</span> remaining for this month<br />
                <span className="text-red-400 font-bold">Next applicants get priority processing!</span>
              </p>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="w-full py-6 bg-gray-900 text-white text-center text-sm">
          <div className="max-w-5xl mx-auto px-4">
            <p>© {new Date().getFullYear()} Technovita Solution. All rights reserved.</p>
            <p className="mt-2 text-gray-400">
              Combo offer valid for limited time. Ajio setup is complimentary with Myntra onboarding service.
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
            "@type": "Offer",
            "name": "Myntra + Free Ajio Seller Onboarding Combo",
            "description": "Get Myntra seller account setup plus FREE Ajio seller onboarding. Double your fashion business reach with our exclusive 2-for-1 marketplace combo deal.",
            "price": "0",
            "priceCurrency": "INR",
            "availability": "LimitedAvailability",
            "validThrough": "2025-12-31",
            "seller": {
              "@type": "Organization",
              "name": "Technovita Solution",
              "url": "https://technovitasolution.com"
            },
            "itemOffered": [
              {
                "@type": "Service",
                "name": "Myntra Seller Account Setup"
              },
              {
                "@type": "Service",
                "name": "Ajio Seller Account Setup",
                "price": "0",
                "description": "Free with Myntra onboarding"
              }
            ],
            "areaServed": "India"
          })
        }}
      />
    </>
  );
}
