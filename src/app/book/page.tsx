import { Hero } from "@/components/blocks/hero";
import { Container } from "@/components/layout/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Book a Consultation",
  description: "Schedule a consultation with our tax and financial planning experts. Get personalized guidance for your US-India transition.",
});

export default function BookPage() {
  return (
    <>
      <Hero
        title="Book a Consultation"
        description="Schedule a consultation with our specialists to discuss your specific situation and create a personalized plan for your return to India."
        ctaText="Schedule Now"
        ctaHref="#consultation"
      />
      
      <Container className="py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Initial Consultation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  A comprehensive 60-minute consultation to understand your situation and provide initial guidance.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Assessment of your current tax situation</li>
                  <li>• RNOR status evaluation</li>
                  <li>• Initial recommendations</li>
                  <li>• Next steps planning</li>
                </ul>
                <Button className="w-full" asChild>
                  <a href="mailto:consultation@settleline.com?subject=Initial Consultation Request">
                    Book Initial Consultation
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Comprehensive Planning</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Full-service planning package including detailed analysis and ongoing support.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Detailed tax optimization strategy</li>
                  <li>• Investment restructuring plan</li>
                  <li>• Compliance roadmap</li>
                  <li>• 3 months of follow-up support</li>
                </ul>
                <Button className="w-full" asChild>
                  <a href="mailto:consultation@settleline.com?subject=Comprehensive Planning Request">
                    Book Comprehensive Planning
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-h3 mb-4">Ready to get started?</h3>
            <p className="text-muted-foreground mb-6">
              Contact us directly or use our free planner to get initial insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="mailto:hello@settleline.com">Email Us</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/tools/free-return-to-india-planner">Try Free Planner</a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
