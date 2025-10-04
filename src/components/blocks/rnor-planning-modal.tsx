"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const rnorServices = [
  {
    title: "RNOR Status Assessment & Planning",
    description: "Comprehensive evaluation and strategic planning for your RNOR status to maximize tax benefits during your transition to India.",
    details: [
      "Eligibility evaluation for RNOR status based on your specific situation",
      "Physical presence tracking and documentation requirements",
      "Tax residency determination and timeline planning",
      "Pre-return tax optimization strategies",
      "Transition timeline and milestone planning",
      "Documentation checklist and compliance requirements"
    ]
  },
  {
    title: "Cross-Border Tax Optimization",
    description: "Strategic tax planning to minimize your tax burden while maintaining full compliance across both US and Indian jurisdictions.",
    details: [
      "Foreign income exemption strategies and implementation",
      "Capital gains optimization for US and Indian assets",
      "Asset restructuring and transfer planning",
      "Tax treaty benefit maximization",
      "Investment portfolio optimization for dual residency",
      "Income timing and recognition strategies"
    ]
  },
  {
    title: "Compliance & Documentation Support",
    description: "Complete support for all filing requirements, documentation, and ongoing compliance in both US and Indian tax systems.",
    details: [
      "US tax filing requirements (FBAR, FATCA, Form 8938)",
      "Indian tax return preparation and filing",
      "Documentation and record keeping systems",
      "Ongoing compliance monitoring and alerts",
      "Audit support and representation",
      "Quarterly and annual compliance reviews"
    ]
  }
];

export function RNORPlanningModal() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedService(index);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  // Handle escape key
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <>
      {/* Service Subcategories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {rnorServices.map((service, index) => (
          <div
            key={index}
            className="bg-primary text-primary-foreground rounded-lg p-8 cursor-pointer hover:shadow-lg transition-shadow duration-300"
            onClick={() => openModal(index)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModal(index);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`Learn more about ${service.title}`}
          >
            <h3 className="text-xl font-semibold mb-4 leading-tight">
              {service.title}
            </h3>
            <p className="text-primary-foreground/90 mb-6 leading-relaxed">
              {service.description}
            </p>
            <div className="flex items-center text-primary-foreground hover:underline">
              <span className="text-sm font-medium">Find out more</span>
              <svg 
                className="ml-2 w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedService !== null && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
        >
          <div 
            className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 id="modal-title" className="text-2xl font-bold text-foreground">
                  {rnorServices[selectedService].title}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  How we can help you:
                </h4>
                <ul className="space-y-3">
                  {rnorServices[selectedService].details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-end gap-3">
                <Button variant="outline" onClick={closeModal}>
                  Close
                </Button>
                <Button asChild>
                  <Link href="/#services-grid">Book Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

