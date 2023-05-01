import React, { useState } from 'react';
import FAQData from './FAQData';


const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const onTitleClick = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    const faqsLeft = FAQData.slice(0, Math.ceil(FAQData.length / 2));
    const faqsRight = FAQData.slice(Math.ceil(FAQData.length / 2));
  
    const renderFAQs = (faqs, startIndex) => {
      return faqs.map((faq, index) => {
        const uniqueIndex = startIndex + index;
        const active = uniqueIndex === activeIndex ? 'active' : '';
  
        return (
          <div
            className={`faq-card border border-gray-300 rounded-lg shadow-md p-4 mb-4 bg-white transition-all duration-300 ${
              active ? '' : 'overflow-hidden'
            }`}
            key={faq.id}
            onClick={() => onTitleClick(uniqueIndex)}
          >
            <div className="flex flex-col items-start justify-center h-full">
              <div className="font-semibold">{faq.question}</div>
              <div
                className={`mt-2 transition-all duration-300 ${
                  active ? 'max-h-[500px] overflow-hidden' : 'max-h-0 overflow-hidden'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          </div>

          
        );
      });
    };
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>{renderFAQs(faqsLeft, 0)}</div>
        <div>{renderFAQs(faqsRight, Math.ceil(FAQData.length / 2))}</div>
      </div>
    );
  };
  
  export default FAQ;
