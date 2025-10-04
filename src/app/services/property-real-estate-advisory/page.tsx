"use client";

import { useState } from "react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { FAQAccordion } from "@/components/blocks/faq-accordion";
import { FooterCTA } from "@/components/blocks/footer-cta";

// Services data
const propertyServices = [
  {
    title: "Property Sale & Taxation",
    description: "Structuring property sales for maximum tax efficiency with TDS management and repatriation support.",
    details: [
      "Structuring property sales for tax efficiency",
      "TDS management and exemptions (54/54F)",
      "Repatriation of proceeds abroad",
      "Documentation and buyer coordination"
    ]
  },
  {
    title: "Rental Income & Tenant Management",
    description: "Complete rental property management with compliant agreements and tax optimization.",
    details: [
      "Drafting compliant rental agreements",
      "Rent collection and dispute resolution",
      "ITR filing with DTAA relief",
      "Claiming deductions and refunds"
    ]
  },
  {
    title: "Property Protection & Maintenance",
    description: "Protect your Indian property from encroachment and ensure proper maintenance and compliance.",
    details: [
      "Preventing encroachment and misuse",
      "Regular compliance checks and municipal filings",
      "Setting up PoA for remote management",
      "Litigation/advisory support for disputes"
    ]
  },
  {
    title: "Repatriation of Sale Proceeds",
    description: "FEMA-compliant transfer of property sale proceeds with proper documentation and bank coordination.",
    details: [
      "FEMA-compliant transfers under $1M scheme",
      "Form 15CA/CB preparation and filing",
      "NRO/NRE account structuring",
      "Multi-year repatriation planning"
    ]
  }
];

// How It's Done data
const processSteps = [
  { step: "01", title: "Book Your Session", description: "Choose your consultation type and select preferred time slot" },
  { step: "02", title: "Connect with Expert", description: "Get matched with qualified CA/CPA/Property Lawyer via Zoom or phone call" },
  { step: "03", title: "Get Your Plan", description: "Receive comprehensive strategy and actionable roadmap" },
  { step: "04", title: "Follow-up Support", description: "Additional sessions as needed with ongoing guidance" }
];

// Benefits data
const benefits = [
  {
    title: "Instant Expert Access",
    description: "Connect instantly through Zoom calls or high-quality phone calls with qualified CA, CPA, and Property Lawyers"
  },
  {
    title: "No Travel Required",
    description: "Start an instant consultation with the expert of your choice - no travel, no waiting, no hassle"
  },
  {
    title: "100% Safe Consultations", 
    description: "Be assured that your online consultation will be fully private and secured with bank-level encryption"
  }
];

// FAQ data
const generalFAQs = [
  {
    question: "How long does a consultation take?",
    answer: "Start with our 30-minute risk-free intro call. During this call, we'll assess your property situation and determine exactly how many sessions you'll need for complete planning. We can only provide this guidance after understanding your specific circumstances."
  },
  {
    question: "How much can I save with proper property planning?",
    answer: "Our clients typically save ₹5-15L in taxes through proper property sale structuring, TDS optimization, and capital gains exemptions. The ROI on our consultation is usually 1000%+."
  },
  {
    question: "What if I need follow-up sessions?",
    answer: "You can book additional sessions anytime at $2/minute. We also offer ongoing advisory packages for year-round support, compliance monitoring, and strategy updates."
  },
  {
    question: "What if you can't help me?",
    answer: "We offer a 100% risk-free guarantee. If we can't help you with your specific situation, we'll provide a full refund for your 30-minute consultation. We're honest about our capabilities and will refer you to appropriate specialists if needed."
  }
];

// Service Categories for Interactive Section
const serviceCategories = [
  {
    id: 'property-sale',
    title: 'Property Sale & Taxation',
    content: {
      title: 'Strategic Property Sale Planning',
      description: 'We help you structure property sales for maximum tax efficiency and smooth repatriation.',
      features: [
        'Capital gains exemption planning (Section 54, 54F)',
        'TDS management and buyer coordination',
        'Property valuation and documentation',
        'Tax-efficient sale timing strategies',
        'Repatriation planning for proceeds'
      ]
    }
  },
  {
    id: 'rental-management',
    title: 'Rental Income & Tenant Management',
    content: {
      title: 'Complete Rental Property Management',
      description: 'Maximize your rental income while ensuring full compliance and tenant satisfaction.',
      features: [
        'Compliant rental agreement drafting',
        'Rent collection and dispute resolution',
        'ITR filing with DTAA relief',
        'Deduction optimization strategies',
        'Tenant screening and management'
      ]
    }
  },
  {
    id: 'property-protection',
    title: 'Property Protection & Maintenance',
    content: {
      title: 'Property Security and Compliance',
      description: 'Protect your Indian property from risks and ensure proper maintenance and compliance.',
      features: [
        'Encroachment prevention strategies',
        'Municipal compliance and filings',
        'Power of Attorney setup',
        'Regular property inspections',
        'Dispute resolution and litigation support'
      ]
    }
  },
  {
    id: 'repatriation',
    title: 'Repatriation of Sale Proceeds',
    content: {
      title: 'FEMA-Compliant Money Transfer',
      description: 'Transfer your property sale proceeds abroad legally and efficiently.',
      features: [
        'FEMA compliance under $1M scheme',
        'Form 15CA/CB preparation',
        'NRO/NRE account optimization',
        'Multi-year transfer planning',
        'Bank coordination and documentation'
      ]
    }
  }
];

export default function PropertyRealEstateAdvisoryPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeServiceCategory, setActiveServiceCategory] = useState('property-sale');
  const [selectedDuration, setSelectedDuration] = useState('60'); // Default to 1 hour

  return (
    <>
      {/* Hero Section */}
      <Section className="py-16 lg:py-20 bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Service Heading */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                We Protect Your Indian Property
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Buy, sell, or manage Indian property with full tax efficiency and compliance from qualified cross-border experts.
              </p>
              
              {/* Key Value Props */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-foreground">Save ₹5-15L in property taxes and capital gains</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-foreground">FEMA-compliant repatriation of sale proceeds</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-foreground">Complete property management and protection</span>
                </div>
              </div>

              {/* Expert Credentials */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">CA</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Property Lawyer</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">FEMA Expert</span>
              </div>

              {/* Social Proof */}
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
                <span className="text-sm text-muted-foreground">200+ property transactions</span>
              </div>
            </div>

            {/* Right Column - Pricing Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/20">
              <h3 className="text-2xl font-bold text-primary text-center mb-4">Risk-Free Assessment</h3>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-primary mb-2">$2</div>
                <div className="text-lg text-muted-foreground">per minute</div>
                <div className="text-sm text-muted-foreground mt-2">30-minute minimum</div>
              </div>
              <div className="text-center mb-6">
                <div className="text-sm text-green-600 font-medium">✓ If we can&apos;t help, we&apos;ll refund it</div>
              </div>
              
              <Button 
              size="lg" 
              className="w-full bg-primary hover:bg-primary/90"
              onClick={() => {
                document.getElementById('consultation-booking')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Book Risk-Free Assessment
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* What's Included Section - Interactive */}
      <Section className="py-16 lg:py-20 bg-muted/20">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">What&apos;s Included in Your Property Planning</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Your complete property management roadmap with expert guidance, tax optimization, and ongoing support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Categories */}
              <div className="space-y-2">
                {serviceCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveServiceCategory(category.id)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-200 flex items-center justify-between ${
                      activeServiceCategory === category.id
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'bg-white hover:bg-muted/50 text-foreground border border-border/20'
                    }`}
                  >
                    <span className="font-medium">{category.title}</span>
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeServiceCategory === category.id ? 'rotate-90' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ))}
              </div>

              {/* Right Column - Content */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-border/20">
                {(() => {
                  const activeCategory = serviceCategories.find(cat => cat.id === activeServiceCategory);
                  if (!activeCategory) return null;
                  
                  return (
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {activeCategory.content.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {activeCategory.content.description}
                      </p>
                      <ul className="space-y-2">
                        {activeCategory.content.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                  </div>
                  );
                })()}
                </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* How It Works & Consultation Booking Section */}
      <Section id="consultation-booking" className="py-16 lg:py-20 bg-background">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">How We Protect Your Property</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Simple 4-step process to get your complete property management and tax optimization roadmap.
              </p>
                </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Column - Process & Service Details */}
              <div className="space-y-6">
                {/* Process Steps */}
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">How It Works</h3>
                  <div className="space-y-5">
                    {processSteps.map((step, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                            {step.step}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-base font-semibold text-foreground mb-1">{step.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">2 Days Estimate</h3>
                  <p className="text-sm text-muted-foreground mb-5">
                    This plan is equipped with end-to-end online fulfillment via our expert. No hassle, 100% Digital.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">01</div>
                      <div className="flex-1">
                        <div className="text-base font-semibold text-foreground mb-1">Purchase of Plan</div>
                        <div className="text-sm text-muted-foreground leading-relaxed">Select your consultation package and complete payment</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">02</div>
                      <div className="flex-1">
                        <div className="text-base font-semibold text-foreground mb-1">Share your Requirements</div>
                        <div className="text-sm text-muted-foreground leading-relaxed">Provide your property situation and specific questions</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">03</div>
                      <div className="flex-1">
                        <div className="text-base font-semibold text-foreground mb-1">Session with Settleline Expert</div>
                        <div className="text-sm text-muted-foreground leading-relaxed">Our cross-border team will contact you within 4-6 working hours</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">04</div>
                      <div className="flex-1">
                        <div className="text-base font-semibold text-foreground mb-1">Resolution of Query</div>
                        <div className="text-sm text-muted-foreground leading-relaxed">Get comprehensive answers and actionable advice. The documents required shall be communicated upon having an analysis of your situation.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Consultation Booking */}
              <div className="bg-muted/20 rounded-lg p-8 border border-border/30 shadow-sm">
                <h3 className="text-2xl font-bold text-foreground mb-2">Book Your Risk-Free Consultation</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Start with 30 minutes. If we can&apos;t help you, we&apos;ll refund it.
                </p>
                
                {/* Service Type */}
                  <div className="mb-6">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-1">Service</div>
                    <div className="text-lg font-semibold text-foreground">Property & Real Estate Advisory</div>
                  </div>
                  </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-1">$2</div>
                    <div className="text-muted-foreground">per minute</div>
                  </div>
                  </div>

                {/* Duration Selection */}
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-4">
                      To consult our Cross-Border Experts, select your consultation duration
                    </p>
                  <div className="space-y-3">
                    <label className="flex items-center justify-between p-4 border border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                        <div>
                        <div className="font-medium text-foreground">30 minutes</div>
                        <div className="text-sm text-muted-foreground">Risk-free assessment & basic guidance</div>
                        <div className="text-xs text-green-600 font-medium mt-1">100% refund if we can&apos;t help</div>
                        </div>
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-bold text-foreground">$60</span>
                        <input type="radio" name="duration" value="30" onChange={(e) => setSelectedDuration(e.target.value)} className="w-4 h-4" />
                      </div>
                    </label>
                    
                    <label className="flex items-center justify-between p-4 border-2 border-primary rounded-lg cursor-pointer bg-primary/5 transition-colors">
                        <div>
                        <div className="font-medium text-foreground">1 hour</div>
                        <div className="text-sm text-muted-foreground">Comprehensive consultation & strategy overview</div>
                        <div className="text-xs text-orange-600 font-medium mt-1">Recommended</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-bold text-foreground">$120</span>
                        <input type="radio" name="duration" value="60" onChange={(e) => setSelectedDuration(e.target.value)} className="w-4 h-4" defaultChecked />
                      </div>
                    </label>
                  </div>
                </div>

                {/* Book Button */}
                <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg"
                onClick={() => {
                  const params = new URLSearchParams({
                    serviceType: 'property-real-estate-advisory',
                    duration: selectedDuration,
                    price: (parseInt(selectedDuration) * 2).toString()
                  });
                  window.location.href = `/book/consultation?${params.toString()}`;
                }}
              >
                Book Consultation
              </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Benefits of Online Consultation Section */}
      <Section className="py-8 lg:py-12 bg-background">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Benefits of Online Consultation</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Get expert guidance from anywhere in the world with our secure online consultation platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
            
            {/* Meeting Types */}
            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-6">Choose Your Preferred Meeting Type</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-border/20">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-sm font-medium">Video Meeting</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-border/20">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-sm font-medium">Phone Meeting</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-border/20">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-sm font-medium">WhatsApp Meeting</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-border/20">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-sm font-medium">Google Meet</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Settleline Advantage Section */}
      <Section className="py-16 lg:py-20 bg-muted/20">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Settleline Advantage</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Why choose us for your property management and tax optimization needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-border/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Talk to Multiple Experts
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Get perspectives from CA, CPA, and Property Lawyers - all via Settleline. Start with a 30-minute risk-free consultation.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-border/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Secure and Confidential
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Your property information is protected with bank-level security. All consultations are completely confidential.
                </p>
              </div>
            </div>
              </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="py-16 lg:py-20 bg-background">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Common questions about our property advisory services
              </p>
            </div>
            
            <FAQAccordion title="" faqs={generalFAQs} />
          </div>
        </Container>
      </Section>

      {/* Footer CTA */}
      <FooterCTA
        title="Ready to Protect Your Indian Property?"
        description="Start with a 30-minute risk-free consultation. If we can't help you, we'll refund it."
        ctaText="Book Risk-Free Consultation"
        ctaHref="/#services"
        secondaryCtaText="Try Free Planner"
        secondaryCtaHref="/tools/free-return-to-india-planner"
      />
    </>
  );
}