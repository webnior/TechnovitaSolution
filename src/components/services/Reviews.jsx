// src/components/Account-management/ReviewSection.js
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Reviews = ({ config }) => {
  if (!config) return null;

  const { header, customerReviews, platformReviews } = config;

  const CustomerReviewCard = ({ review }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
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
  );

  const PlatformReviewCard = ({ platform }) => (
    <div className="text-center">
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
  );

  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Reviews Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 ${header.badge.className} rounded-full text-sm font-medium mb-6`}>
            <span>{header.badge.text[0]}</span>
            <div className="w-1.5 h-1.5 rounded-full bg-orange-600"></div>
            <span>{header.badge.text[1]}</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {header.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {header.description}
          </p>
        </div>

        {/* Customer Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {customerReviews.map((review, index) => (
            <CustomerReviewCard key={index} review={review} />
          ))}
        </div>

        {/* Platform Reviews */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Highly Rated Across All Platforms
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {platformReviews.map((platform, index) => (
              <PlatformReviewCard key={index} platform={platform} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;