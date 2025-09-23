"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const subServices = [
  {
    title: "Accounting & Reporting Assurance",
    description: "We help you stay ahead of corporate reporting requirements and trends, and support the development of your finance team's capabilities.",
    details: [
      "Accounting and reporting assurance services",
      "Accounting and reporting support for transactions, mergers and acquisitions",
      "Regulatory assurance",
      "Securitization services"
    ]
  },
  {
    title: "Controls Assurance",
    description: "Supporting internal controls over financial and non-financial corporate reporting.",
    details: [
      "Financial accounting and reporting internal control remediation and testing",
      "Risk assessment support",
      "Impact assessment and reporting",
      "Digital controls, relevant in supporting finance transformation projects",
      "Controls assessment solutions and guidance to first and second line for audit readiness",
      "Financial accounting, and financial reporting",
      "Sarbanes-Oxley Act (SOX) controls modernization and rationalization",
      "SOX uplift for new and emerging public companies"
    ]
  },
  {
    title: "Sustainability & Emerging Assurance",
    description: "Ensuring your business is ready for emerging technology and environmental regulatory standards.",
    details: [
      "The Corporate Sustainability Reporting Directive (CSRD)",
      "Sustainability reporting and disclosure standards issued by the International Sustainability Standards Board (ISSB)",
      "Greenhouse gas (GHG) protocols",
      "AI governance, oversight and controls",
      "Technical algorithmic validation support"
    ]
  }
];

export function AssuranceModal() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedService(index);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <>
      {/* Service Subcategories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {subServices.map((service, index) => (
          <div
            key={index}
            className="bg-primary text-primary-foreground rounded-lg p-8 cursor-pointer hover:shadow-lg transition-shadow duration-300"
            onClick={() => openModal(index)}
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
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-foreground">
                  {subServices[selectedService].title}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-muted-foreground hover:text-foreground transition-colors"
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
                  {subServices[selectedService].details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-end">
                <Button onClick={closeModal}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
