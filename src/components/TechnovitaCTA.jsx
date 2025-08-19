import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const TechnovitaCTA = () => {
  const phoneNumber = '+917042163504';
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.pathname);
    }
  }, []);

  return (
    <>
      <div className="fixed bottom-4 left-4 z-[100]">
        <Suspense fallback={<div className="w-14 h-14 rounded-full bg-gray-200" />}>
          <button
            className="flex items-center justify-center w-14 h-14 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg transition-colors border-2 border-orange-500 hover:border-orange-600"
            onClick={() => window.location.href = `tel:${phoneNumber}`}
          >
            <Phone className="w-6 h-6" />
          </button>
        </Suspense>
      </div>

      <div className="fixed bottom-4 right-4 z-[100]">
        <Suspense fallback={<div className="w-12 h-12 rounded-full bg-gray-200" />}>
          <button
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg transition-colors text-sm border-2 border-green-500 hover:border-green-600"
            onClick={() => {
              const message = encodeURIComponent(`Hi, I checked this service on technovitasolution.in${currentUrl} and want to know more about it.`);
              window.location.href = `https://wa.me/${phoneNumber.replace('+', '')}?text=${message}`;
            }}
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </button>
        </Suspense>
      </div>
    </>
  );
};

export default TechnovitaCTA;