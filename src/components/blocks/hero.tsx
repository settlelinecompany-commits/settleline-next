import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import Image from "next/image"
import heroAdvisorPhoto from "../../../public/images/hero-advisor-photo.webp"

interface HeroProps {
  title: string
  description?: string
  ctaText?: string
  ctaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  background?: "default" | "muted" | "primary"
}

export function Hero({
  title,
  description,
  ctaText = "Get Started",
  ctaHref = "/book",
  secondaryCtaText,
  secondaryCtaHref,
  background = "default"
}: HeroProps) {
  return (
    <section className={`py-8 lg:py-6 ${
      background === "primary" 
        ? "bg-primary text-primary-foreground" 
        : background === "muted" 
        ? "bg-muted" 
        : "bg-background"
    }`}>
      <Container size="lg">
        <div className="grid lg:grid-cols-2 gap-16 items-start min-h-[510px]">
          {/* Left Column - Headline + CTA + Image */}
          <div className="space-y-4 order-1 lg:order-1">
            {/* Headline */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                {title}
              </h1>
            </div>

            {/* Primary CTA Button */}
            <div>
              <Button size="lg" asChild className="text-lg px-8 py-4">
                <a href="/tools/free-return-to-india-planner">Free Return to India Planner Tool</a>
              </Button>
            </div>

                  {/* Advisor Image with Overlay Callout */}
                  <div className="relative w-full h-80 lg:h-96 bg-gradient-to-br from-muted to-muted/50 rounded-2xl overflow-hidden">
                    <Image 
                      src={heroAdvisorPhoto}
                      alt="Professional tax advisor helping NRIs with RNOR & cross-border planning"
                      fill
                      className="object-cover object-top rounded-2xl"
                      priority
                      placeholder="blur"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    
                    {/* Overlay Callout Box */}
                    <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3 max-w-[140px] border border-border/20">
                      <div className="text-xs font-semibold text-gray-600 mb-1">
                        Foreign Tax Credits
                      </div>
                      <div className="text-lg font-bold text-green-600">
                        $4,000
                      </div>
                    </div>
                  </div>
          </div>

          {/* Right Column - Two Supplementary Cards */}
          <div className="flex flex-col gap-10 order-2 lg:order-2">
            {/* Top Supplementary Card */}
            <div className="bg-muted/30 rounded-2xl p-8 border border-border/50">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  Expert Guidance Available
                </h3>
                <p className="text-muted-foreground">
                  Get personalized support from our US-India tax specialists. 
                  Book a consultation to discuss your specific situation.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button variant="outline" asChild>
                    <a href="/book">Book Consultation</a>
                  </Button>
                  <Button variant="ghost" asChild>
                    <a href="/tools/free-return-to-india-planner">Try Free Planner</a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Bottom Supplementary Card */}
            <div className="bg-muted/30 rounded-2xl p-8 border border-border/50">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  Expert Guidance Available
                </h3>
                <p className="text-muted-foreground">
                  Get personalized support from our US-India tax specialists. 
                  Book a consultation to discuss your specific situation.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button variant="outline" asChild>
                    <a href="/book">Book Consultation</a>
                  </Button>
                  <Button variant="ghost" asChild>
                    <a href="/tools/free-return-to-india-planner">Try Free Planner</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
