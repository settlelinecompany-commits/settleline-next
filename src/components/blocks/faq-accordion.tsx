"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  title?: string;
  faqs: FAQItem[];
  className?: string;
}

export function FAQAccordion({ 
  title = "Frequently asked questions", 
  faqs, 
  className = "" 
}: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleItem(index);
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Title */}
      <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
        {title}
      </h2>

      {/* FAQ Items */}
      <div className="max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-border/20 last:border-b-0">
            <button
              className="w-full py-6 px-0 text-left flex items-center justify-between hover:bg-muted/5 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-inset"
              onClick={() => toggleItem(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              aria-expanded={openItems.includes(index)}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="text-lg font-medium text-foreground pr-4">
                {faq.question}
              </span>
              <svg
                className={`w-5 h-5 text-muted-foreground transition-transform duration-200 flex-shrink-0 ${
                  openItems.includes(index) ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            
            <div
              id={`faq-answer-${index}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openItems.includes(index) 
                  ? 'max-h-96 opacity-100 pb-6' 
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

