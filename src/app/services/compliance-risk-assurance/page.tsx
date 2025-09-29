"use client";

import { useState } from "react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { FAQAccordion } from "@/components/blocks/faq-accordion";
import { FooterCTA } from "@/components/blocks/footer-cta";

// Services data
const complianceServices = [
  {
    title: "Internal Controls & Reporting",
    description: "Designing and testing financial reporting controls with ICFR frameworks and audit-ready documentation.",
    details: [
      "Designing and testing financial reporting controls",
      "ICFR frameworks for reliability",
      "Audit-ready documentation",
      "Fraud prevention systems"
    ]
  },
  {
    title: "Technology & Cyber Assurance",
    description: "Securing IT and automation systems with data privacy compliance and digital risk audits.",
    details: [
      "Securing IT and automation systems",
      "Data privacy and cyber compliance",
      "Cloud and ERP assurance frameworks",
      "Digital risk audits"
    ]
  },
  {
    title: "Black Money Act & Schedule FA",
    description: "Accurate foreign asset disclosures with penalty mitigation and audit defense strategies.",
    details: [
      "Accurate foreign asset disclosures",
      "Avoiding ₹10 lakh annual penalties",
      "Backfilling missed disclosures",
      "Audit defense and penalty mitigation"
    ]
  },
  {
    title: "Regulatory Risk & Penalty Defense",
    description: "Representation before tax authorities with compliance monitoring and mitigation strategies.",
    details: [
      "Representation before tax authorities",
      "Responses to compliance notices",
      "Mitigation strategies for late filings",
      "Ongoing compliance monitoring"
    ]
  }
];

// Services Included data
const servicesIncluded = [
  "Advisory for salaried individuals, freelancers, financial traders",
  "Get answers to your tax related queries",
  "Get a dedicated relationship manager during service fulfillment"
];

// How It's Done data
const processSteps = [
  { step: "01", title: "Purchase of Plan", description: "Select your consultation package and complete payment" },
  { step: "02", title: "Share your Requirements", description: "Provide your tax situation and specific questions" },
  { step: "03", title: "Session with Settleline Expert", description: "Our cross-border team will call within the next hour or so" },
  { step: "04", title: "Resolution of Query", description: "Get comprehensive answers and actionable advice. The documents required shall be communicated upon having an analysis of your queries." }
];

// FAQ data
const generalFAQs = [
  {
    question: "What happens if I miss reporting foreign assets?",
    answer: "Missing foreign asset reporting can result in penalties under the Black Money Act, including up to ₹10 lakh annual penalty. We help backfill missed disclosures and provide audit defense strategies."
  },
  {
    question: "How do I defend against Black Money Act penalties?",
    answer: "Defense strategies include demonstrating reasonable cause for non-disclosure, voluntary disclosure programs, and proper documentation. We provide comprehensive audit defense and penalty mitigation support."
  },
  {
    question: "What internal controls are required for reporting?",
    answer: "Internal controls should include documentation systems, review processes, and monitoring mechanisms to ensure accurate and timely reporting of foreign assets and income."
  },
  {
    question: "How do I secure digital compliance systems?",
    answer: "Digital security involves implementing proper access controls, data encryption, regular security audits, and compliance monitoring systems to protect sensitive financial information."
  }
];

export default function ComplianceRiskAssurancePage() {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<string>('30');

  const openModal = (index: number) => {
    setSelectedService(index);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  const handleDurationChange = (duration: string) => {
    setSelectedDuration(duration);
  };

  return (
    <>
      {/* Two Column Cover Section */}
      <Section className="py-16 lg:py-20 bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Service Heading */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Compliance & Risk Assurance
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Stay audit-ready and penalty-free with robust controls and global compliance.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-bold text-foreground">4.9</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <a href="/experts" className="text-sm text-primary hover:text-primary/80 underline">
                  Meet our experts
                </a>
              </div>
            </div>

            {/* Right Column - Pricing Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/20">
              <h3 className="text-2xl font-bold text-primary text-center mb-4">Ask Our Cross-Border Expert</h3>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-primary mb-2">$2</div>
                <div className="text-lg text-muted-foreground">per minute</div>
              </div>
              <Button size="lg" className="w-full" onClick={() => {
                document.getElementById('payment-widget')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Buy now
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Centered Service Cards Section */}
      <Section className="py-16 lg:py-20 bg-muted/20">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {complianceServices.map((service, index) => (
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
          </div>
        </Container>
      </Section>

      {/* Services Included + Payment Flow Section */}
      <Section className="py-16 lg:py-20 bg-background">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Services Included + How It's Done */}
              <div className="space-y-12">
                {/* Services Included */}
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">Services Included</h2>
                  <ul className="space-y-4">
                    {servicesIncluded.map((service, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-muted-foreground">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* How It's Done */}
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">How It&apos;s Done</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    This plan is equipped with end-to-end online fulfillment via our expert. No hassle, 100% Digital.
                  </p>
                  <div className="text-2xl font-bold text-foreground mb-8">2 Days Estimate</div>
                  
                  <div className="space-y-6">
                    {processSteps.map((step, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm ${
                            index === 3 ? 'bg-green-500 text-white' : 'bg-primary text-primary-foreground'
                          }`}>
                            {step.step}
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-lg font-semibold text-foreground mb-2">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed text-sm">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Payment/Booking Flow */}
              <div>
                <div id="payment-widget" className="bg-white rounded-2xl p-10 shadow-lg border border-border/20">
                  {/* Service Type Selector */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service Type
                    </label>
                    <select className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="">Select service type</option>
                      <option value="internal-controls-reporting">Internal Controls & Reporting</option>
                      <option value="technology-cyber-assurance">Technology & Cyber Assurance</option>
                      <option value="black-money-schedule-fa">Black Money Act & Schedule FA</option>
                      <option value="regulatory-risk-defense">Regulatory Risk & Penalty Defense</option>
                    </select>
                  </div>

                  {/* Base Price Display */}
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-foreground mb-2">$2</div>
                    <div className="text-lg text-muted-foreground">per minute</div>
                  </div>

                  {/* Instructional Text */}
                  <div className="text-center mb-8">
                    <p className="text-foreground">
                      To consult our Cross-Border Experts, select your consultation duration
                    </p>
                  </div>

                  {/* Time Estimate Options */}
                  <div className="grid grid-cols-1 gap-4 mb-6">
                    <div 
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                        selectedDuration === '15' 
                          ? 'border-primary bg-primary/5' 
                          : 'border-border hover:border-primary'
                      }`}
                      onClick={() => handleDurationChange('15')}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-foreground">15 minutes</div>
                          <div className="text-2xl font-bold text-primary">$30</div>
                        </div>
                        <input 
                          type="radio" 
                          name="duration" 
                          value="15" 
                          checked={selectedDuration === '15'}
                          onChange={() => handleDurationChange('15')}
                          className="w-4 h-4 text-primary" 
                        />
                      </div>
                    </div>
                    
                    <div 
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                        selectedDuration === '30' 
                          ? 'border-primary bg-primary/5' 
                          : 'border-border hover:border-primary'
                      }`}
                      onClick={() => handleDurationChange('30')}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-foreground">30 minutes</div>
                          <div className="text-2xl font-bold text-primary">$60</div>
                          <div className="text-xs text-orange-600 font-medium">Recommended</div>
                        </div>
                        <input 
                          type="radio" 
                          name="duration" 
                          value="30" 
                          checked={selectedDuration === '30'}
                          onChange={() => handleDurationChange('30')}
                          className="w-4 h-4 text-primary" 
                        />
                      </div>
                    </div>
                    
                    <div 
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                        selectedDuration === '60' 
                          ? 'border-primary bg-primary/5' 
                          : 'border-border hover:border-primary'
                      }`}
                      onClick={() => handleDurationChange('60')}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-foreground">1 hour</div>
                          <div className="text-2xl font-bold text-primary">$120</div>
                        </div>
                        <input 
                          type="radio" 
                          name="duration" 
                          value="60" 
                          checked={selectedDuration === '60'}
                          onChange={() => handleDurationChange('60')}
                          className="w-4 h-4 text-primary" 
                        />
                      </div>
                    </div>
                  </div>

                  {/* Buy Now Button */}
                  <Button size="lg" className="w-full" asChild>
                    <a href="/book/consultation">
                      Book Consultation
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="py-16 lg:py-20 bg-background">
        <Container>
          <FAQAccordion faqs={generalFAQs} />
        </Container>
      </Section>

      {/* Reviews Section */}
      <Section className="py-16 lg:py-20 bg-muted/20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">Reviews</h2>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-3xl font-bold text-foreground">4.17</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">Average Rating</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-border/20">
                <div className="flex items-center gap-1 mb-4">
                  <span className="font-semibold text-foreground">Prabhu Pareek</span>
                  <div className="flex">
                    {[...Array(4)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  My wife and I wanted to start a business. We had the business plan but had no idea how to go about it. We bought the Settleline Ask an Expert Plan and an expert solved all our queries related to mandatory registration requirements...
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-border/20">
                <div className="flex items-center gap-1 mb-4">
                  <span className="font-semibold text-foreground">Seema Vimlan</span>
                  <div className="flex">
                    {[...Array(4)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  I am self-employed and had entered into a few trade transactions in the share market. I had losses which I skipped reporting in my tax report. Later I got a notice from the department and had a panic attack. I desperately needed an...
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <Button variant="outline" asChild>
                <a href="https://rzp.io/l/settleline-consultation" target="_blank" rel="noopener noreferrer">
                  Write a review
                </a>
              </Button>
              <div className="flex gap-2">
                <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <FooterCTA
        title="Ready to simplify your cross-border finances?"
        description="In just 30 minutes, we'll map the fastest, compliant path for your taxes, property, and wealth."
        ctaText="Talk to an Expert"
        ctaHref="https://rzp.io/l/settleline-consultation"
        secondaryCtaText="Book a 30-min Consult"
        secondaryCtaHref="https://rzp.io/l/settleline-consultation"
      />

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
                  {complianceServices[selectedService].title}
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
                  {complianceServices[selectedService].details.map((detail, index) => (
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
                <Button onClick={() => {
                  closeModal();
                  document.getElementById('payment-widget')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
