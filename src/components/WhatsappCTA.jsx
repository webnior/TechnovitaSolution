import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppCTA = ({
  phoneNumber = "917451073504",
  message,
  showMessage = true,
  buttonText = "Chat on WhatsApp",
  className = ""
}) => {
  return (
    <div className={`text-center ${className}`}>
      {showMessage && message && (
        <p className="text-lg text-gray-700 mb-6">
          {message}
        </p>
      )}
      <a 
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition-colors"
      >
        <MessageCircle className="w-5 h-5 mr-2" />
        {buttonText}
      </a>
    </div>
  );
};

export default WhatsAppCTA;


//Usage Guideline
//  With message
// <WhatsAppCTA 
//   message="Ready to transform your Amazon business with expert management?"
//   showMessage={true}
// />

//  Just the button without message
{/* <WhatsAppCTA 
  showMessage={false}
/> */}

// With custom button text
// <WhatsAppCTA 
//   showMessage={false}
//   buttonText="Contact Support"
// />

// Full customization
// <WhatsAppCTA 
//   phoneNumber="917451073504"
//   message="Have questions about our services?"
//   showMessage={true}
//   buttonText="Message Us"
//   className="my-8"
// />