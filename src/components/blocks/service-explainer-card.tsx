import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { RNORPlanningModal } from "./rnor-planning-modal";
import Link from "next/link";

const services = [
  {
    title: "We plan your return to India",
    description: "Get a complete roadmap for your financial transition with tax optimization and retirement planning.",
    ctaText: "Start Your Planning",
    ctaHref: "/services/return-to-india-financial-planning/",
    image: "/images/services/return-planning.webp",
    overlay: "Free assessment"
  },
  {
    title: "We protect your Indian property",
    description: "Buy, sell, or manage Indian property with full tax efficiency and compliance.",
    ctaText: "Secure Your Assets",
    ctaHref: "/services/property-real-estate-advisory/",
    image: "/images/services/property-management.webp",
    overlay: "Tax optimized"
  },
  {
    title: "We move your money safely",
    description: "Repatriate funds across borders legally and efficiently with expert guidance.",
    ctaText: "Get Transfer Help",
    ctaHref: "/services/repatriation-money-movement/",
    image: "/images/services/money-movement.webp",
    overlay: "100% compliant"
  },
  {
    title: "We set up your business and hire",
    description: "Establish your business in India and set up compliant offshore hiring structures to work with global talent.",
    ctaText: "Start Your Business",
    ctaHref: "/services/business-hiring-structures/",
    image: "/images/services/business-setup.webp",
    overlay: "Full support"
  }
];

export function ServiceExplainerCard() {
  return (
    <Section id="services-grid" className="py-16 bg-muted/20">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tax and financial services tailored for cross-border professionals
          </p>
        </div>
        
        {/* 2x2 Grid - Clean TurboTax Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-border/20 hover:shadow-xl transition-shadow duration-300 flex flex-col">
              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-4 leading-tight">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                {service.description}
              </p>
              
              {/* CTA Button */}
              <Button size="lg" className="w-full mb-4" asChild>
                <Link href={service.ctaHref}>
                  {service.ctaText}
                </Link>
              </Button>
              
              {/* Learn More Link */}
              <Link 
                href={service.ctaHref}
                className="text-sm text-primary hover:underline text-center"
              >
                See how {service.title.toLowerCase()} works
              </Link>
              
              {/* Large Image with Overlay */}
              <div className="mt-6 relative">
                <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                      </svg>
                    </div>
                    <p className="text-sm text-muted-foreground">Service Image</p>
                  </div>
                </div>
                {/* Overlay Badge */}
                {index === 0 ? (
                  <Link href="/tools/free-return-to-india-planner" className="absolute bottom-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
                    {service.overlay}
                  </Link>
                ) : (
                  <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {service.overlay}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* RNOR Planning Modal for first service */}
        {/* <RNORPlanningModal /> */}
      </Container>
    </Section>
  );
}
