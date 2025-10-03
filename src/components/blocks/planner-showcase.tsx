import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import Image from "next/image";

export function PlannerShowcase() {
  return (
    <Section className="py-16 lg:py-24 bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Custom Image */}
          <div className="order-2 lg:order-1">
            <div className="relative max-w-sm mx-auto">
              <Image
                src="/images/planner-mockup.webp"
                alt="Return to India Planner App"
                width={300}
                height={450}
                className="w-full h-auto rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <div className="max-w-lg">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
                Moving back to India? You could be losing lakhs.
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Most people don't realize that timing your return to India can save or cost you lakhs in taxes. Our free Return to India Planner shows you exactly what you're missing and how to fix it.
              </p>
              <Button size="lg" className="text-lg px-8 py-4" asChild>
                <a href="/tools/free-return-to-india-planner">Start Free Assessment</a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
