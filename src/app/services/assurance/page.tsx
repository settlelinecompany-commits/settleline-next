import { Hero } from "@/components/blocks/hero";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { generateSEO } from "@/lib/seo";
import { AssuranceModal } from "./assurance-modal";

export const metadata = generateSEO({
  title: "Assurance Services - Expert Tax & Financial Assurance for US-India Cross-Border Professionals",
  description: "Professional assurance services leveraging our expertise in US-India tax compliance, financial reporting, and cross-border regulations.",
});

const insights = [
  {
    title: "US-India Tax Compliance: A Strategic Approach",
    description: "How cross-border professionals can navigate complex tax regulations while maintaining compliance in both jurisdictions.",
    readTime: "6 minute read"
  },
  {
    title: "RNOR Status and Financial Reporting Requirements",
    description: "Understanding the reporting obligations for Resident but Not Ordinarily Resident individuals returning to India.",
    readTime: "4 minute read"
  },
  {
    title: "Cross-Border Investment Reporting Standards",
    description: "Key considerations for reporting foreign investments and maintaining compliance with both US and Indian regulations.",
    readTime: "5 minute read"
  }
];

export default function AssurancePage() {

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Assurance"
        description="Bringing together auditors and leading-edge technologies, Settleline helps advance assurance quality for US-India cross-border professionals."
        ctaText="Contact Us"
        ctaHref="/book"
        secondaryCtaText="Submit RFP"
        secondaryCtaHref="/book"
      />
      
      {/* Main Content Section */}
      <Section className="py-16 lg:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Experience innovation and impact with Assurance services
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Settleline&apos;s Assurance business leverages our professional accounting, controls and corporate reporting expertise to deliver assurance and related advisory services on both financial and non-financial information for US-India cross-border professionals.
            </p>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Our Assurance and related advisory services are focused on engagements related to Accounting & Reporting, Controls, and Sustainability & Emerging Assurance (including AI Assurance).
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We bring together the diverse skills and industry experience of our people across our global network, with our leading-edge technology, to deliver high-quality assurance reports and valuable advice and insights across the corporate reporting landscape.
            </p>
          </div>
        </Container>
      </Section>

      {/* Service Subcategories */}
      <Section className="py-16 lg:py-24 bg-muted">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Explore Assurance services
            </h2>
            
            <AssuranceModal />
          </div>
        </Container>
      </Section>

      {/* Our Thinking Section */}
      <Section className="py-16 lg:py-24">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Our thinking
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {insights.map((insight, index) => (
                <div key={index} className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {insight.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {insight.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{insight.readTime}</span>
                    <Button variant="outline" size="sm">
                      Read more
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Join Us Section */}
      <Section className="py-16 lg:py-24 bg-muted">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Join us
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Deciding the career for you is more than simply &ldquo;landing the job.&rdquo; It&apos;s finding a place where you know you make a difference each day, where you can be your most authentic self. It&apos;s choosing your impact.
            </p>
            <Button size="lg">
              Explore careers
            </Button>
          </div>
        </Container>
      </Section>

      {/* Get in Touch Section */}
      <Section className="py-16 lg:py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Get in touch
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ready to discuss your assurance needs? Our experts are here to help you navigate complex US-India cross-border requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Contact Us
              </Button>
              <Button variant="outline" size="lg">
                Submit RFP
              </Button>
            </div>
          </div>
        </Container>
      </Section>

    </>
  );
}
