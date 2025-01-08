import React from 'react';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const ReviewSection = () => {
  const customerReviews = [
    {
      name: "Rajesh Kumar",
      company: "RK Electronics India",
      rating: 5,
      review: "Technovita Solutions transformed our Amazon business completely. Their strategic approach helped us increase our sales by 300% in just 6 months. The dedicated account manager is always available and proactive in handling issues.",
      position: "Business Owner",
      location: "Delhi"
    },
    {
      name: "Priya Sharma",
      company: "Wellness India Pvt Ltd",
      rating: 5,
      review: "We were struggling with Amazon compliance issues before partnering with Technovita. Their team not only resolved all our account problems but also helped us expand our product line successfully. Best Amazon account management service in India!",
      position: "E-commerce Director",
      location: "Mumbai"
    },
    {
      name: "Vikram Patel",
      company: "VR Lifestyle",
      rating: 5,
      review: "The ROI with Technovita has been exceptional. Their deep understanding of Amazon's algorithm and market trends helped us achieve Best Seller status in our category. Highly recommended for serious Amazon sellers.",
      position: "Founder",
      location: "Bangalore"
    }
  ];

  const platformReviews = [
    {
      platform: "Trustpilot",
      rating: 4.8,
      totalReviews: 487,
      className: "bg-[#00b67a]"
    },
    {
      platform: "Google",
      rating: 4.9,
      totalReviews: 892,
      className: "bg-[#4285f4]"
    },
    {
      platform: "Facebook",
      rating: 4.7,
      totalReviews: 356,
      className: "bg-[#1877f2]"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Reviews Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-100 rounded-full text-orange-600 text-sm font-medium mb-6">
            <span>Customer Stories</span>
            <div className="w-1.5 h-1.5 rounded-full bg-orange-600"></div>
            <span>500+ Happy Clients</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Trusted by Leading Amazon Sellers Across India
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See why hundreds of Amazon sellers choose Technovita Solutions for their account management needs
          </p>
        </div>

        {/* Customer Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {customerReviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="fill-orange-400 text-orange-400" size={20} />
                ))}
              </div>
              <Quote className="text-orange-400 mb-4" size={32} />
              <p className="text-gray-700 mb-6 italic">{review.review}</p>
              <div className="border-t pt-6">
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-orange-600 font-medium">{review.company}</p>
                <p className="text-gray-500 text-sm">{review.position} • {review.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Platform Reviews */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Highly Rated Across All Platforms
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {platformReviews.map((platform, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 rounded-full ${platform.className} text-white flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl font-bold">{platform.rating}</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {platform.platform}
                </h4>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={i < Math.floor(platform.rating) ? "fill-orange-400 text-orange-400" : "text-gray-300"} 
                      size={16} 
                    />
                  ))}
                </div>
                <p className="text-gray-600">
                  {platform.totalReviews.toLocaleString()} reviews
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;