"use client";

import { Hero } from "@/components/blocks/hero";
import { FooterCTA } from "@/components/blocks/footer-cta";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FAQAccordion } from "@/components/blocks/faq-accordion";
import { generalFAQs } from "@/lib/faq-data";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const serviceFeatures = [
  {
    title: "ITR Filing for NRIs",
    description: "Complete Income Tax Return preparation and filing for Non-Resident Indians with proper DTAA benefits and foreign income reporting.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14,2 14,8 20,8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    )
  },
  {
    title: "Double Taxation Relief (DTAA)",
    description: "Maximize tax savings through proper DTAA application, foreign tax credit optimization, and treaty benefit utilization.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    )
  },
  {
    title: "Capital Gains Tax Planning",
    description: "Strategic planning for capital gains on Indian investments, property sales, and equity transactions with tax optimization.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    )
  },
  {
    title: "NRI Income Tax Returns",
    description: "Comprehensive NRI tax return preparation covering all income sources, deductions, and compliance requirements.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    )
  }
];


// RNOR Services data (moved from modal component)
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
  },
  {
    title: "Investment Advisory & Portfolio Management",
    description: "Expert guidance on cross-border investment strategies, asset allocation, and tax-efficient portfolio management for US-India professionals.",
    details: [
      "Cross-border investment strategy development",
      "Tax-efficient asset allocation and rebalancing",
      "Foreign investment compliance and reporting",
      "Retirement planning across jurisdictions",
      "Estate planning and wealth transfer strategies",
      "Risk management and diversification strategies"
    ]
  }
];

// Services Included data
const servicesIncluded = [
  "Advisory for salaried individuals, freelancers, financial traders",
  "45 minutes call session with a Settleline expert",
  "Get answers to your tax related queries",
  "Plan excludes any GST or startup related queries",
  "Get a dedicated relationship manager during service fulfillment"
];

// Who Should Buy data
const targetAudience = [
  { name: "Salaried Individuals", icon: "📄" },
  { name: "Financial Traders", icon: "📊" },
  { name: "Freelancers", icon: "💼" },
  { name: "Business Owners", icon: "🏢" }
];

// How It's Done data
const processSteps = [
  { step: "01", title: "Purchase of Plan", description: "Select your consultation package and complete payment" },
  { step: "02", title: "Share your Requirements", description: "Provide your tax situation and specific questions" },
  { step: "03", title: "Session with Settleline Expert", description: "45-minute consultation with our tax specialist" },
  { step: "04", title: "Resolution of Query", description: "Get comprehensive answers and actionable advice" }
];

export default function IndianTaxFilingPage() {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<string>('30');

  const openModal = (index: number) => {
    setSelectedService(index);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
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
                Indian Tax Filing Services
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Professional tax filing services for NRIs with expert guidance on ITR preparation, DTAA benefits, and comprehensive tax compliance.
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
              <Button size="lg" className="w-full" asChild>
                <a href="https://rzp.io/l/settleline-consultation" target="_blank" rel="noopener noreferrer">
                  Buy now
                </a>
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
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">How It's Done</h2>
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
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/20">
                  {/* Service Type Selector */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service Type
                    </label>
                    <select className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="">Select service type</option>
                      <option value="rnor-assessment">RNOR Status Assessment & Planning</option>
                      <option value="cross-border-optimization">Cross-Border Tax Optimization</option>
                      <option value="compliance-support">Compliance & Documentation Support</option>
                      <option value="investment-advisory">Investment Advisory & Portfolio Management</option>
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
                    <a href="https://rzp.io/l/settleline-consultation" target="_blank" rel="noopener noreferrer">
                      Buy now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Documents Required Section */}
      <Section className="py-16 lg:py-20 bg-muted/20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">Documents Required</h2>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-muted-foreground">
                The documents required shall be communicated upon having an analysis of your queries.
              </p>
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
        title="Ready to File Your Indian Taxes?"
        description="Let our experts handle your Indian tax filing with maximum savings and complete compliance. Get started today."
        ctaText="Start Tax Filing"
        ctaHref="https://rzp.io/l/settleline-consultation"
        secondaryCtaText="Get Free Consultation"
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
                  <a href="https://rzp.io/l/settleline-consultation" target="_blank" rel="noopener noreferrer">
                    Book Consultation
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
