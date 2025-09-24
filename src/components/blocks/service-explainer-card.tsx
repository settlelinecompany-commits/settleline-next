import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

const services = [
  {
    title: "Indian Tax Filing",
    description: "Comprehensive compliance and advisory services for both international and Indian tax requirements.",
    tags: ["ITR Filing", "Double Taxation Relief (DTAA)", "Capital Gains Tax", "NRI Income Tax Returns"],
    ctaText: "File Your Indian Taxes →",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    )
  },
  {
    title: "Tax Consultancy Services",
    description: "Professional NRI-focused tax consultancy covering planning, compliance, and cross-border strategies.",
    tags: ["Cross-Border Tax", "Investment Advisory", "NRI Tax Strategy", "Double Taxation Relief"],
    ctaText: "Get Expert Tax Advice →",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14,2 14,8 20,8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    )
  },
  {
    title: "NRI Returning India Tax Plan",
    description: "Tailored tax planning for NRIs returning to India, helping you save on taxes and manage income.",
    tags: ["Tax Residency Advisory", "DTAA Guidance", "Wealth & Asset Structuring", "Repatriation Support"],
    ctaText: "Plan Your Return Taxes →",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
        <path d="M18 8l2 2-2 2"/>
      </svg>
    )
  },
  {
    title: "Repatriation of Funds",
    description: "Secure and legal transfer of funds from India to abroad with expert guidance on NRO, NRE accounts.",
    tags: ["NRO to NRE Transfers", "FCNR Guidance", "RBI Compliance", "FEMA Advisory"],
    ctaText: "Repatriate Funds Safely →",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
        <path d="M7 7l5 5 5-5"/>
      </svg>
    )
  },
  {
    title: "Business Incorporation Service",
    description: "Complete assistance in company registration, compliance, and bank account setup for NRIs.",
    tags: ["Company Registration", "PAN/TAN Setup", "Compliance Support", "Bank Account Opening"],
    ctaText: "Start Your Business →",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9,22 9,12 15,12 15,22"/>
      </svg>
    )
  },
  {
    title: "Notices Handling",
    description: "Expert handling of tax notice responses, documentation, and representation on your behalf.",
    tags: ["Income Tax Notices", "Representation Services", "Documentation Support", "Expert Assistance"],
    ctaText: "Resolve Your Tax Notice →",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <path d="M13 8H7"/>
        <path d="M17 12H7"/>
      </svg>
    )
  }
];

export function ServiceExplainerCard() {
  return (
    <Section className="py-16 bg-muted/20">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tax and financial services tailored for US-India cross-border professionals
          </p>
        </div>
        
        {/* 3x2 Grid - Mobile Responsive with Equal Heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-border/20 hover:shadow-xl transition-shadow duration-300 flex flex-col">
              {/* Icon Section */}
              <div className="flex items-start gap-4 mb-4">
                {/* Icon Container */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground leading-tight">
                  {service.title}
                </h3>
              </div>
              
              {/* Description */}
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm flex-grow">
                {service.description}
              </p>
              
              {/* Service Tags */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {service.tags.map((tag, tagIndex) => (
                  <div key={tagIndex} className="bg-blue-50 border border-border/50 rounded-lg w-full h-16 flex items-center justify-center">
                    <span className="text-xs font-medium text-foreground text-center leading-tight">{tag}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA Button */}
              <Button size="sm" className="w-full">
                {service.ctaText}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
