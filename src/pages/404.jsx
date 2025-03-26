import Layouts from "@/src/layouts/Layouts";
{/* <Layouts darkHeader noFooter> */}
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// Helper function to calculate the circle's circumference
const calculateCircumference = (radius) => 2 * Math.PI * radius;

const E404 = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(15);
  const [offset, setOffset] = useState(0);
  
  // Constants for our circular timer
  const RADIUS = 40;
  const CIRCUMFERENCE = calculateCircumference(RADIUS);
  const TOTAL_TIME = 10;

  useEffect(() => {
    // Redirect timer
    const redirectTimer = setTimeout(() => {
      router.push('https://technovitasolution.in');
    }, TOTAL_TIME * 1000);

    // Countdown timer
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 0) return 0;
        // Calculate new circle offset based on remaining time
        const newOffset = CIRCUMFERENCE - (CIRCUMFERENCE * (prev - 1)) / TOTAL_TIME;
        setOffset(newOffset);
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearTimeout(redirectTimer);
      clearInterval(countdownInterval);
    };
  }, [router]);

  return (
    <Layouts darkHeader noFooter>

   
    <div className="min-h-screen bg-gradient-to-br from-orange-400 to-orange-600 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute transform rotate-45 bg-white"
            style={{
              width: '100px',
              height: '100px',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.5,
            }}
          />
        ))}
      </div>

      {/* Circular Countdown Timer */}
      <div className="relative w-32 h-32 mb-12">
        <svg className="transform -rotate-90 w-32 h-32">
          {/* Background circle */}
          <circle
            cx="64"
            cy="64"
            r={RADIUS}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="8"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="64"
            cy="64"
            r={RADIUS}
            stroke="white"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
            className="transition-all duration-1000 ease-linear"
          />
        </svg>
        {/* Countdown number */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold text-white">{countdown}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative text-center z-10">
        {/* 404 Text with geometric decoration */}
        <div className="relative inline-block">
          <h1 className="text-9xl font-bold text-white mb-8 relative z-10">
            404
          </h1>
          <div className="absolute -top-8 -right-8 w-32 h-32 border-4 border-white opacity-20 transform rotate-12" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 border-4 border-white opacity-20 transform -rotate-12" />
        </div>
        
        {/* Error Message */}
        <h2 className="text-3xl font-bold text-white mb-6">Page Not Found</h2>
        <p className="text-white text-opacity-90 mb-8 max-w-md mx-auto text-lg">
          The page you're looking for doesn't exist or has been moved.
          Redirecting you back home shortly...
        </p>

        {/* Immediate Redirect Button */}
        <button 
          onClick={() => router.push('https://technovitasolution.in')}
          className="px-8 py-3 bg-white text-orange-500 rounded-lg 
                   hover:bg-opacity-90 transform hover:scale-105 
                   transition-all duration-300 shadow-lg hover:shadow-xl
                   font-semibold"
        >
          Return Home Now
        </button>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <div 
              className="w-16 h-16 border-4 border-white opacity-20 transform rotate-45"
              style={{
                animation: `spin ${3 + i}s linear infinite`,
              }}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
    </Layouts>
  );
};

export default E404;