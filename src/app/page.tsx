import { Hero } from "@/components/blocks/hero";
import { TrustStrip } from "@/components/blocks/trust-strip";
import { FeatureList } from "@/components/blocks/feature-list";
import { FooterCTA } from "@/components/blocks/footer-cta";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Expert Tax & Financial Planning for US-India Cross-Border Professionals",
  description: "Navigate complex US-India tax laws with confidence. Get expert guidance on RNOR status, tax planning, and financial transition strategies.",
});

export default function Home() {
  return (
    <>
      <Hero
        title="Expert Tax & Financial Planning for US-India Cross-Border Professionals"
        subtitle="Navigate complex tax laws with confidence"
        description="Get personalized guidance on RNOR status, tax planning, and financial transition strategies. Our experts help you make informed decisions for your return to India."
        ctaText="Start Planning"
        ctaHref="/tools/free-return-to-india-planner"
        secondaryCtaText="Book Consultation"
        secondaryCtaHref="/book"
      />
      
      <TrustStrip
        items={[
          "500+ Successful Transitions",
          "Expert Tax Advisors",
          "Personalized Guidance",
          "US-India Specialists"
        ]}
      />
      
      <FeatureList
        title="Why Choose Settleline?"
        description="We specialize in the unique challenges faced by US-India cross-border professionals"
        features={[
          {
            title: "RNOR Expertise",
            description: "Deep understanding of Resident but Not Ordinarily Resident status and its implications for your tax planning.",
            icon: "📊"
          },
          {
            title: "Tax Optimization",
            description: "Strategic planning to minimize tax burden while ensuring full compliance with both US and Indian tax laws.",
            icon: "💰"
          },
          {
            title: "Investment Advisory",
            description: "Guidance on managing investments across both countries and optimizing your portfolio for the transition.",
            icon: "📈"
          },
          {
            title: "Compliance Support",
            description: "Complete support for filing requirements, documentation, and ongoing compliance in both jurisdictions.",
            icon: "📋"
          },
          {
            title: "Personalized Service",
            description: "One-on-one consultations tailored to your specific situation, goals, and timeline.",
            icon: "👥"
          },
          {
            title: "Ongoing Support",
            description: "Continued guidance as your situation evolves, ensuring you stay on track with your financial goals.",
            icon: "🔄"
          }
        ]}
        columns={3}
      />
      
      <FooterCTA
        title="Ready to Plan Your Return to India?"
        description="Get expert guidance tailored to your unique situation. Book a consultation with our specialists today."
        ctaText="Book Consultation"
        ctaHref="/book"
        secondaryCtaText="Try Free Planner"
        secondaryCtaHref="/tools/free-return-to-india-planner"
      />
    </>
  );
}
