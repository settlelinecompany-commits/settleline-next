import { Hero } from "@/components/blocks/hero";
import { FooterCTA } from "@/components/blocks/footer-cta";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Our Services - Expert Tax & Financial Services for US-India Cross-Border Professionals",
  description: "Comprehensive tax planning, RNOR guidance, investment advisory, and compliance services. Strategic solutions for your US-India financial transition."
});

const services = [
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
      
      {/* Services Grid Section */}
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
          
          {/* Services Grid - Deloitte Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white border border-border rounded-lg p-6 hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                {/* Left Accent Line */}
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
