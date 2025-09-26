import { Hero } from "@/components/blocks/hero";
import { FooterCTA } from "@/components/blocks/footer-cta";
import { generateSEO } from "@/lib/seo";
import { RNORCalculator } from "@/components/blocks/rnor-calculator";

export const metadata = generateSEO({
  title: "Free Return to India Planner",
  description: "Plan your return to India with our comprehensive RNOR calculator and expert guidance. Get personalized insights for your tax and financial transition.",
});


export default function PlannerPage() {
  return (
    <>
      <Hero
        title="Free Return to India Planner"
        description="Get personalized insights for your return to India. Our comprehensive planner helps you understand RNOR status, tax implications, and financial strategies."
      />
      
      <RNORCalculator className="py-0" />
      
      <FooterCTA
        title="Need Personalized Guidance?"
        description="Our experts can help you create a comprehensive plan for your return to India. Book a consultation to get started."
        ctaText="Book Consultation"
        ctaHref="/book"
        secondaryCtaText="Learn More"
        secondaryCtaHref="/services"
      />
    </>
  );
}
