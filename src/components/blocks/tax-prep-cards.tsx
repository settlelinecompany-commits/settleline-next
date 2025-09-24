import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export function TaxPrepCards() {
  return (
    <Section className="py-12 lg:py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            We can help you get ready for tax time
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Tax Refund Estimate */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/20 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-6">
              {/* Calculator Icon */}
              <div className="relative inline-block">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg 
                    width="32" 
                    height="32" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    className="text-primary"
                  >
                    <rect x="4" y="2" width="16" height="20" rx="2"/>
                    <path d="M8 6h8M8 10h8M8 14h4M8 18h4"/>
                  </svg>
                </div>
                {/* Dollar Sign Badge */}
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">$</span>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">
              Estimate Your Tax Refund
            </h3>
            <p className="text-muted-foreground mb-6 text-center leading-relaxed">
              Use our RNOR Calculator to preview your refund, or see what you&apos;ll owe when returning to India.
            </p>
            <div className="text-center">
              <Button asChild>
                <a href="/tools/free-return-to-india-planner">Estimate your taxes</a>
              </Button>
            </div>
          </div>

          {/* Card 2: Handy Checklist */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/20 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-6">
              {/* Checklist Icon */}
              <div className="relative inline-block">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg 
                    width="32" 
                    height="32" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    className="text-primary"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14,2 14,8 20,8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                  </svg>
                </div>
                {/* Checkmark Badge */}
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">
              Get Your Tax Checklist
            </h3>
            <p className="text-muted-foreground mb-6 text-center leading-relaxed">
              Keep track of which docs you&apos;ll need when it&apos;s time to file your US-India taxes.
            </p>
            <div className="text-center">
              <Button asChild>
                <a href="/blog">Get the checklist</a>
              </Button>
            </div>
          </div>

          {/* Card 3: Tax Tips, Guides, and Videos */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/20 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-6">
              {/* Laptop Icon */}
              <div className="relative inline-block">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg 
                    width="32" 
                    height="32" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    className="text-primary"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                {/* Checkmark Badge */}
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">
              Learn Tax Strategies
            </h3>
            <p className="text-muted-foreground mb-6 text-center leading-relaxed">
              Everything you need to know about US-India cross-border taxes that you didn&apos;t learn in school.
            </p>
            <div className="text-center">
              <Button asChild>
                <a href="/blog">Start learning</a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
