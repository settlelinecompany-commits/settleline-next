import { Hero } from "@/components/blocks/hero";
import { FooterCTA } from "@/components/blocks/footer-cta";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { generateSEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";

export const metadata = generateSEO({
  title: "Our Services - Expert Tax & Financial Services for US-India Cross-Border Professionals",
  description: "Comprehensive tax planning, RNOR guidance, investment advisory, and compliance services. Strategic solutions for your US-India financial transition."
});
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
const serviceLinks = [
  {
    title: "Assurance",
    description: "Settleline's Assurance business leverages our professional accounting, controls and corporate reporting expertise to deliver assurance and related advisory services on both financial and non-financial information.",
    href: "/services/assurance"
  },
  {
    title: "Audit",
    description: "Our External Audits deliver insights that help our clients better understand how to address risks and enhance business management and financial processes and controls.",
    href: "/services/audit"
  },
  {
    title: "Business Process Solutions",
    description: "Customized solutions in operational finance, HR & payroll, and tax compliance operations. We leverage our experienced professionals, innovative technologies and global methodologies to resource our clients' needs.",
    href: "/services/business-process-solutions"
  },
  {
    title: "Customer",
    description: "We combine the discipline of Settleline with the power of creativity to connect people, ideas, technology, and innovative thinking. Together we are making progress towards finding new solutions to some of the world's biggest problems.",
    href: "/services/customer"
  },
  {
    title: "Cyber",
    description: "Settleline uniquely understands your business and cybersecurity challenges and opportunities. Our powerful solutions simplify complexity, accelerate innovation, and supercharge transformation.",
    href: "/services/cyber"
  },
  {
    title: "Settleline Private",
    description: "Settleline Private connects leaders of privately held businesses, family enterprises, and emerging growth companies with ideas, knowledge, and experience—curated specifically for your private enterprise's unique needs.",
    href: "/services/settleline-private"
  },
  {
    title: "Engineering, AI & Data",
    description: "Leverage engineering-led design, deep industry knowledge, and AI and data-driven insights to transform the technology platforms at the heart of your business.",
    href: "/services/engineering-ai-data"
  },
  {
    title: "Enterprise Technology & Performance",
    description: "Unlock outstanding value from your enterprise technology investments with Settleline's holistic and strategic approach to digital transformation.",
    href: "/services/enterprise-technology-performance"
  },
  {
    title: "Finance Transformation",
    description: "From strategy to technology to operations, and across workforce, risk, assurance, and tax, Settleline helps you drive value along your finance transformation journey.",
    href: "/services/finance-transformation"
  },
  {
    title: "Global Employer Services",
    description: "Our innovative, multidisciplinary approach to reward, compensation, mobility tax, and immigration solutions will help prepare you for whatever change the future brings.",
    href: "/services/global-employer-services"
  },
  {
    title: "Human Capital",
    description: "Unlocking human potential creates productive, adaptable organizations that are resilient to risk, fit for the future, and grounded in purpose.",
    href: "/services/human-capital"
  },
  {
    title: "Legal",
    description: "Combining business experience and legal excellence, we deliver comprehensive solutions designed to address the evolving needs of the Chief Legal Officer.",
    href: "/services/legal"
  },
  {
    title: "Risk, Regulatory & Forensic",
    description: "From guarding against financial crime to overseeing risk at every level, Settleline can help you protect your business's integrity, investments and innovation.",
    href: "/services/risk-regulatory-forensic"
  },
  {
    title: "Strategy & Transactions",
    description: "Whether your growth plans are organic or inorganic, or whether you are looking for support across infrastructure, sustainability, or turnaround projects, we assemble a team of cross-market professionals to deliver end-to-end support, tailored to your needs.",
    href: "/services/strategy-transactions"
  },
  {
    title: "Tax",
    description: "As global influences fundamentally shift how the tax function operates, tax leaders need to be able to respond strategically. We can share our experience, technology and innovative ideas to help your organization respond to challenges and progress.",
    href: "/services/tax"
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Our services"
        description="Vast services. Rich experience. Real results. At Settleline, we see every challenge as an opportunity for growth. Our people combine innovation and insight to solve your toughest problems. With world-class business knowledge and industry experience, our services can help your business drive progress and unlock real results."
      />
      
      {/* Service Cards Section */}
      <ServiceExplainerCard />
      
      {/* Services Grid Section - COMMENTED OUT */}
      {/* 
      <Section className="py-16 lg:py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Explore our services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Whether you&apos;re starting up or in the Fortune Global 500, tap into our broad range of services and solutions to help your business thrive. <strong>And together, we make progress.</strong>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceLinks.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white border border-border rounded-lg p-6 hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-lg group-hover:w-2 transition-all duration-300"></div>
                
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary group-hover:underline transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <a 
                    href={service.href}
                    className="inline-flex items-center text-sm font-medium text-primary group-hover:text-primary transition-all duration-300"
                  >
                    Find out more
                    <svg 
                      className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      */}
      
      <FooterCTA
        title="Ready to Get Started?"
        description="Book a consultation with our experts to discuss your specific needs and create a personalized plan for your US-India transition."
        ctaText="Book Consultation"
        ctaHref="/book"
        secondaryCtaText="Try Free Planner"
        secondaryCtaHref="/tools/free-return-to-india-planner"
      />
    </>
  );
}
