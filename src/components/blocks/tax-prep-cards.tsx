import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import Link from "next/link";
import Image from "next/image";

export function TaxPrepCards() {
  return (
    <Section className="py-12 lg:py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Plan your return to India the right way
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Tax Refund Estimate */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/20 hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div className="text-center mb-6">
              {/* Planner Mockup Image */}
              <div className="relative inline-block">
                <div className="w-24 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                  <Image
                    src="/images/planner-mockup.webp"
                    alt="Return to India Planner"
                    width={96}
                    height={64}
                    className="w-full h-full object-cover object-top rounded-lg"
                  />
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">
              Check Your Tax Benefits
            </h3>
            <p className="text-muted-foreground mb-6 text-center leading-relaxed flex-grow">
              Discover how much you can save with proper timing. Our Return to India Planner shows your potential tax benefits.
            </p>
            <div className="text-center mt-auto">
              <Button asChild>
                <a href="/tools/free-return-to-india-planner">Start Free Assessment</a>
              </Button>
            </div>
          </div>

          {/* Card 2: Handy Checklist */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/20 hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div className="text-center mb-6">
              {/* Checklist Blog Image */}
              <div className="relative inline-block">
                <div className="w-24 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                  <Image
                    src="/images/blog/return-to-india-checklist-2025.webp"
                    alt="Return to India Checklist"
                    width={96}
                    height={64}
                    className="w-full h-full object-cover object-top rounded-lg"
                  />
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">
              Get Your Moving Checklist
            </h3>
            <p className="text-muted-foreground mb-6 text-center leading-relaxed flex-grow">
              Everything you need to prepare before moving back to India. From documents to financial planning.
            </p>
            <div className="text-center mt-auto">
              <Button asChild>
                <Link href="/blog/return-to-india-financial-checklist-2025">Get the checklist</Link>
              </Button>
            </div>
          </div>

          {/* Card 3: Tax Tips, Guides, and Videos */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/20 hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div className="text-center mb-6">
              {/* Microsoft Case Study Image */}
              <div className="relative inline-block">
                <div className="w-24 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                  <Image
                    src="/images/case-studies/microsoft-manager-save-lakhs.webp"
                    alt="Microsoft Case Study"
                    width={96}
                    height={64}
                    className="w-full h-full object-cover object-top rounded-lg"
                  />
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">
              Learn Return Strategies
            </h3>
            <p className="text-muted-foreground mb-6 text-center leading-relaxed flex-grow">
              Expert guides on timing your return, managing assets, and maximizing your financial benefits when moving back to India.
            </p>
            <div className="text-center mt-auto">
              <Button asChild>
                <Link href="/blog">Start learning</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
