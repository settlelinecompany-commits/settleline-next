import { Hero } from "@/components/blocks/hero";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";

export const metadata = generateSEO({
  title: "Thank You",
  description: "Thank you for contacting Settleline. We'll be in touch soon.",
});

export default function ThanksPage() {
  return (
    <>
      <Hero
        title="Thank You!"
        subtitle="We've received your message"
        description="Thank you for reaching out to us. We'll review your information and get back to you within 24 hours."
      />
      
      <Container className="py-16">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-h2 mb-4">What happens next?</h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold mt-0.5">
                  1
                </div>
                <p className="text-body">We&apos;ll review your information and prepare for our consultation</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold mt-0.5">
                  2
                </div>
                <p className="text-body">Our team will contact you within 24 hours to schedule your consultation</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold mt-0.5">
                  3
                </div>
                <p className="text-body">We&apos;ll provide personalized guidance for your US-India transition</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/tools/free-return-to-india-planner">Try Free Planner</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
                <Link href="/blog">Read Our Blog</Link>
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}
