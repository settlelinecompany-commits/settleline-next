import { Hero } from "@/components/blocks/hero";
import { TrustedByTicker } from "@/components/blocks/trusted-by-ticker";
import { ServiceExplainerCard } from "@/components/blocks/service-explainer-card";
import { PlannerShowcase } from "@/components/blocks/planner-showcase";
import { TaxPrepCards } from "@/components/blocks/tax-prep-cards";
import { CustomerReviews } from "@/components/blocks/customer-reviews";
import { CustomerStories } from "@/components/blocks/customer-stories";
import { FeaturedBlogPosts } from "@/components/blocks/featured-blog-posts";
import { TrustStrip } from "@/components/blocks/trust-strip";
import { FooterCTA } from "@/components/blocks/footer-cta";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Grid } from "@/components/layout/grid";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { generateSEO } from "@/lib/seo";
import { getCaseStudies } from "@/lib/case-studies";

export const metadata = generateSEO({
  title: "Expert Tax & Financial Planning for US-India Cross-Border Professionals",
  description: "Navigate complex US-India tax laws with confidence. Get expert guidance on RNOR status, tax planning, and financial transition strategies.",
});

export default function Home() {
  const caseStudies = getCaseStudies();
  return (
    <>
      {/* Hero Section - TurboTax Style */}
      <Hero
        title="Expert Tax & Financial Planning for US-India Cross-Border Professionals"
        description="Get personalized guidance on RNOR status, tax planning, and financial transition strategies. Our experts help you make informed decisions for your return to India."
        ctaText="Start for Free"
        ctaHref="/tools/free-return-to-india-planner"
        secondaryCtaText="Get Expert Help"
        secondaryCtaHref="/book"
        variant="complex"
      />
      
      {/* Trusted By Ticker */}
      <TrustedByTicker />
      
      {/* Service Explainer Card */}
      <ServiceExplainerCard />
      
      {/* Planner Showcase */}
      <PlannerShowcase />
      
      {/* Tax Prep Cards */}
      <TaxPrepCards />
      
      {/* Customer Reviews */}
      <CustomerReviews />
      
      {/* Customer Stories */}
      <CustomerStories caseStudies={caseStudies} />
      
      {/* Featured Blog Posts */}
      <FeaturedBlogPosts />
      
      {/* Trust Strip - TurboTax Style */}
      <TrustStrip
        items={[
          "100% Accurate Tax Planning, Guaranteed",
          "Your Return to India, Backed for Life™",
          "Expert US-India Tax Specialists",
          "500+ Successful Transitions"
        ]}
      />
      {/* Footer CTA - TurboTax Style */}
      <FooterCTA
        title="Ready to Plan Your Return to India?"
        description="Get expert guidance tailored to your unique situation. Book a consultation with our specialists today."
        ctaText="Get Expert Help"
        ctaHref="/book"
        secondaryCtaText="Start for Free"
        secondaryCtaHref="/tools/free-return-to-india-planner"
      />
    </>
  );
}
