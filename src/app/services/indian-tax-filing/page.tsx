import { Hero } from "@/components/blocks/hero";
import { FooterCTA } from "@/components/blocks/footer-cta";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { generateSEO } from "@/lib/seo";
import { FAQAccordion } from "@/components/blocks/faq-accordion";
import { generalFAQs } from "@/lib/faq-data";
import { Card } from "@/components/ui/card";
import { RNORPlanningModal } from "@/components/blocks/rnor-planning-modal";

export const metadata = generateSEO({
  title: "Indian Tax Filing Services - Expert NRI Tax Compliance & ITR Preparation",
  description: "Professional Indian tax filing services for NRIs. Expert ITR preparation, DTAA guidance, capital gains tax optimization, and comprehensive NRI tax compliance support."
});

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

const processSteps = [
  {
    step: "01",
    title: "Initial Assessment",
    description: "We review your financial situation, income sources, and tax obligations to create a personalized filing strategy."
  },
  {
    step: "02", 
    title: "Document Collection",
    description: "We help you gather all necessary documents including Form 16, bank statements, investment proofs, and foreign income details."
  },
  {
    step: "03",
    title: "Tax Optimization",
    description: "We identify all eligible deductions, DTAA benefits, and tax-saving opportunities to minimize your tax liability."
  },
  {
    step: "04",
    title: "Return Preparation",
    description: "Our experts prepare your ITR with accurate calculations, proper disclosures, and compliance with all NRI tax regulations."
  },
  {
    step: "05",
    title: "Filing & Follow-up",
    description: "We file your return electronically and handle any queries or notices from the Income Tax Department on your behalf."
  }
];

export default function IndianTaxFilingPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Indian Tax Filing Services"
        description="Professional tax filing services for NRIs with expert guidance on ITR preparation, DTAA benefits, and comprehensive tax compliance."
      />
      
      {/* Service Overview */}
      <Section className="py-16 lg:py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Comprehensive Indian Tax Filing for NRIs
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our expert team specializes in Indian tax filing for Non-Resident Indians, ensuring maximum tax savings through proper DTAA application, 
              strategic planning, and complete compliance with Indian tax laws. We handle everything from ITR preparation to capital gains optimization.
            </p>
          </div>
          
          {/* Service Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {serviceFeatures.map((feature, index) => (
              <Card key={index} className="p-6 border border-border/20 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      
      {/* Process Section */}
      <Section className="py-16 lg:py-20 bg-muted/20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Our Tax Filing Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a systematic approach to ensure accurate, compliant, and optimized tax filing for all our NRI clients.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
      
      {/* RNOR Planning Services */}
      <RNORPlanningModal />
      
      {/* FAQ Section */}
      <Section className="py-16 lg:py-20 bg-background">
        <Container>
          <FAQAccordion faqs={generalFAQs} />
        </Container>
      </Section>
      
      {/* CTA Section */}
      <FooterCTA
        title="Ready to File Your Indian Taxes?"
        description="Let our experts handle your Indian tax filing with maximum savings and complete compliance. Get started today."
        ctaText="Start Tax Filing"
        ctaHref="/book"
        secondaryCtaText="Get Free Consultation"
        secondaryCtaHref="/book"
      />
    </>
  );
}
