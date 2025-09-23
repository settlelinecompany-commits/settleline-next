import { Hero } from "@/components/blocks/hero";
import { TrustedByTicker } from "@/components/blocks/trusted-by-ticker";
import { TrustStrip } from "@/components/blocks/trust-strip";
import { FooterCTA } from "@/components/blocks/footer-cta";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Grid } from "@/components/layout/grid";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Expert Tax & Financial Planning for US-India Cross-Border Professionals",
  description: "Navigate complex US-India tax laws with confidence. Get expert guidance on RNOR status, tax planning, and financial transition strategies.",
});

export default function Home() {
  return (
    <>
      {/* Hero Section - TurboTax Style */}
      <Hero
        title="Your New Headline Text Here"
        description="Get personalized guidance on RNOR status, tax planning, and financial transition strategies. Our experts help you make informed decisions for your return to India."
        ctaText="Start for Free"
        ctaHref="/tools/free-return-to-india-planner"
        secondaryCtaText="Get Expert Help"
        secondaryCtaHref="/book"
      />
      
      {/* Trusted By Ticker */}
      <TrustedByTicker />
      
      {/* Trust Strip - TurboTax Style */}
      <TrustStrip
        items={[
          "100% Accurate Tax Planning, Guaranteed",
          "Your Return to India, Backed for Life™",
          "Expert US-India Tax Specialists",
          "500+ Successful Transitions"
        ]}
      />
      
      {/* Service Tiers - TurboTax Style */}
      <Section className="py-16 bg-muted/30">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Choose Your Tax Planning Service
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From self-service tools to full expert guidance, we have the right solution for your US-India transition needs.
            </p>
          </div>
          
          <Grid cols={3} className="gap-8">
            {/* Self-Service Tier */}
            <Card className="p-8 text-center relative">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Do Your Own Planning</h3>
                <div className="text-3xl font-bold text-primary mb-2">Free</div>
                <p className="text-sm text-muted-foreground">Start with our free tools</p>
              </div>
              
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-sm">Free RNOR Calculator</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-sm">Tax Planning Guides</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-sm">Compliance Checklists</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-sm">Resource Library</span>
                </li>
              </ul>
              
              <Button className="w-full" variant="outline">
                Start for Free
              </Button>
            </Card>
            
            {/* Guided Tier */}
            <Card className="p-8 text-center relative border-primary">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                Most Popular
              </Badge>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Experts Help As You Plan</h3>
                <div className="text-3xl font-bold text-primary mb-2">$299</div>
                <p className="text-sm text-muted-foreground">Get guidance when you need it</p>
              </div>
              
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-sm">Everything in Free</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-sm">1-on-1 Consultation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-sm">Personalized Strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-sm">Email Support</span>
                </li>
              </ul>
              
              <Button className="w-full">
                Get Expert Help
              </Button>
            </Card>
            
            {/* Full Service Tier */}
            <Card className="p-8 text-center relative">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">An Expert Does Your Planning</h3>
                <div className="text-3xl font-bold text-primary mb-2">$899</div>
                <p className="text-sm text-muted-foreground">Full-service planning</p>
              </div>
              
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-sm">Everything in Guided</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-sm">Complete Tax Strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-sm">Document Preparation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-sm">Ongoing Support</span>
                </li>
              </ul>
              
              <Button className="w-full" variant="outline">
                Get Full Service
              </Button>
            </Card>
          </Grid>
        </Container>
      </Section>
      
      {/* Why Choose Settleline - TurboTax Style */}
      <Section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Choose Settleline?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We specialize in the unique challenges faced by US-India cross-border professionals
            </p>
          </div>
          
          <Grid cols={3} className="gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">RNOR Expertise</h3>
              <p className="text-muted-foreground text-sm">
                Deep understanding of Resident but Not Ordinarily Resident status and its implications for your tax planning.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Tax Optimization</h3>
              <p className="text-muted-foreground text-sm">
                Strategic planning to minimize tax burden while ensuring full compliance with both US and Indian tax laws.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Investment Advisory</h3>
              <p className="text-muted-foreground text-sm">
                Guidance on managing investments across both countries and optimizing your portfolio for the transition.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Compliance Support</h3>
              <p className="text-muted-foreground text-sm">
                Complete support for filing requirements, documentation, and ongoing compliance in both jurisdictions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Personalized Service</h3>
              <p className="text-muted-foreground text-sm">
                One-on-one consultations tailored to your specific situation, goals, and timeline.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Ongoing Support</h3>
              <p className="text-muted-foreground text-sm">
                Continued guidance as your situation evolves, ensuring you stay on track with your financial goals.
              </p>
            </div>
          </Grid>
        </Container>
      </Section>
      
      {/* Testimonials Section - TurboTax Style */}
      <Section className="py-16 bg-muted/30">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Join hundreds of successful US-India transitions
            </p>
          </div>
          
          <Grid cols={3} className="gap-8">
            <Card className="p-6">
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  ★★★★★
                </div>
                <p className="text-sm text-muted-foreground">
                  &ldquo;Settleline made my return to India seamless. Their RNOR expertise saved me thousands in taxes.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold">AS</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">Arjun Sharma</div>
                  <div className="text-xs text-muted-foreground">Software Engineer</div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  ★★★★★
                </div>
                <p className="text-sm text-muted-foreground">
                  &ldquo;The personalized guidance was exactly what I needed. Highly recommend their services.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold">PK</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">Priya Kumar</div>
                  <div className="text-xs text-muted-foreground">Product Manager</div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  ★★★★★
                </div>
                <p className="text-sm text-muted-foreground">
                  &ldquo;Professional, knowledgeable, and responsive. They handled all the complex tax planning for me.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold">RS</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">Rajesh Singh</div>
                  <div className="text-xs text-muted-foreground">Consultant</div>
                </div>
              </div>
            </Card>
          </Grid>
        </Container>
      </Section>
      
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
