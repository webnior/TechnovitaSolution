import React, { useState } from 'react';
import { icons } from '@/src/lib/icons';

const FAQ = ({ config }) => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="container mx-auto px-4 py-16" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 uppercase tracking-wider">
        {config.title}
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {config.faqs.map((faq, index) => {
          const IconComponent = icons[faq.iconName];

          return (
            <div
              key={index}
              className={`
                rounded-3xl overflow-hidden 
                transition-all duration-300 
                border-2 
                ${openFaq === index 
                  ? "border-[#F5A841] bg-gradient-to-br from-[#FFF4E6] to-[white]" 
                  : "border-[#F5A841]/30 bg-white"}
                relative
              `}
            >
              <button
                className={`
                  w-full p-5 flex items-center justify-between text-left
                  rounded-3xl
                  transition-all duration-300
                  outline-none focus:outline-none active:outline-none
                  ${openFaq === index 
                    ? "bg-[#FFF4E6] text-[#F5A841]" 
                    : "hover:bg-[#FFF4E6]/50"}
                `}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <div className="flex items-center space-x-4">
                  {IconComponent && (
                    <IconComponent 
                      className={`w-6 h-6 ${openFaq === index ? "text-[#F5A841]" : "text-gray-500"}`}
                    />
                  )}
                  <span className={`
                    font-semibold text-lg 
                    ${openFaq === index ? "text-[#F5A841]" : "text-gray-800"}
                  `}>
                    {faq.question}
                  </span>
                </div>
                <icons.ChevronDown 
                  className={`
                    w-6 h-6 
                    transform transition-transform 
                    ${openFaq === index 
                      ? "rotate-180 text-[#F5A841]" 
                      : "text-gray-500"}
                  `}
                />
              </button>

              {openFaq === index && (
                <div className="p-5 bg-[#FFF4E6] border-t-2 border-[#F5A841]/20">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;