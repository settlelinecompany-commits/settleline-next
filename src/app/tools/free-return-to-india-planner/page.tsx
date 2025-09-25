import { Hero } from "@/components/blocks/hero";
import { FAQ } from "@/components/blocks/faq";
import { FooterCTA } from "@/components/blocks/footer-cta";
import { generateSEO } from "@/lib/seo";
import { RNORCalculator } from "@/components/blocks/rnor-calculator";

export const metadata = generateSEO({
  title: "Free Return to India Planner",
  description: "Plan your return to India with our comprehensive RNOR calculator and expert guidance. Get personalized insights for your tax and financial transition.",
});

const rnorFAQ = [
  {
    question: "What is RNOR status?",
    answer: "RNOR (Resident but Not Ordinarily Resident) is a special tax status in India for individuals who are Indian citizens or persons of Indian origin returning to India after being non-resident for a certain period. This status provides significant tax benefits for a limited time."
  },
  {
    question: "How long does RNOR status last?",
    answer: "RNOR status typically lasts for 2 years from the date of return to India, provided you meet the conditions. After this period, you become a Resident and Ordinarily Resident (ROR) and are subject to full Indian tax obligations."
  },
  {
    question: "What are the tax benefits of RNOR status?",
    answer: "RNOR status offers several tax benefits including exemption from tax on foreign income (except income from a business controlled in India or a profession set up in India), and favorable treatment of capital gains from foreign assets."
  },
  {
    question: "What documents do I need for RNOR planning?",
    answer: "You'll need your US tax returns, Indian tax returns (if any), bank statements, investment statements, employment records, and documentation of your stay in India and abroad. Our calculator will help identify specific documents needed for your situation."
  },
  {
    question: "When should I start planning my return to India?",
    answer: "It's recommended to start planning at least 6-12 months before your intended return date. This allows time for tax optimization strategies, investment restructuring, and proper documentation to maximize your RNOR benefits."
  }
];

export default function PlannerPage() {
  return (
    <>
      <Hero
        title="Free Return to India Planner"
        description="Get personalized insights for your return to India. Our comprehensive planner helps you understand RNOR status, tax implications, and financial strategies."
        ctaText="Start Planning"
        ctaHref="#calculator"
        secondaryCtaText="Book Consultation"
        secondaryCtaHref="/book"
      />
      
      <RNORCalculator className="py-16" />
      
      <FAQ
        title="RNOR Planning FAQ"
        description="Common questions about planning your return to India"
        items={rnorFAQ}
        className="py-16"
      />
      
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
