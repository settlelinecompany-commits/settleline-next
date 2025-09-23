import { Hero } from "@/components/blocks/hero";
import { FeatureList } from "@/components/blocks/feature-list";
import { FooterCTA } from "@/components/blocks/footer-cta";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Tax & Financial Services",
  description: "Comprehensive tax planning, RNOR guidance, and investment advisory services for US-India cross-border professionals.",
});

const services = [
  {
    title: "RNOR Tax Planning",
    description: "Strategic planning to maximize your RNOR status benefits and minimize tax burden during your transition to India.",
    icon: "📊"
  },
  {
    title: "Cross-Border Tax Compliance",
    description: "Complete support for filing requirements in both US and India, ensuring full compliance with all regulations.",
    icon: "📋"
  },
  {
    title: "Investment Advisory",
    description: "Guidance on managing investments across both countries and optimizing your portfolio for the transition.",
    icon: "📈"
  },
  {
    title: "Financial Transition Planning",
    description: "Comprehensive planning for your financial transition, including banking, insurance, and estate planning.",
    icon: "🔄"
  },
  {
    title: "Tax Optimization Strategies",
    description: "Advanced strategies to minimize tax burden while maintaining compliance with both US and Indian tax laws.",
    icon: "💰"
  },
  {
    title: "Ongoing Support",
    description: "Continued guidance as your situation evolves, ensuring you stay on track with your financial goals.",
    icon: "🤝"
  }
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Tax & Financial Services"
        description="Comprehensive services designed specifically for cross-border professionals. From RNOR planning to ongoing compliance support."
        ctaText="Book Consultation"
        ctaHref="/book"
        secondaryCtaText="View All Services"
        secondaryCtaHref="#services"
      />
      
      <FeatureList
        title="Our Services"
        description="Specialized services for US-India cross-border professionals"
        features={services}
        columns={3}
        className="py-16"
      />
      
      <FooterCTA
        title="Ready to Get Started?"
        description="Book a consultation with our experts to discuss your specific needs and create a personalized plan."
        ctaText="Book Consultation"
        ctaHref="/book"
        secondaryCtaText="Try Free Planner"
        secondaryCtaHref="/tools/free-return-to-india-planner"
      />
    </>
  );
}
