import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import Image from "next/image"
import heroAdvisorPhoto from "../../../public/images/hero-advisor-photo.webp"
import businessTodayLogo from "../../../public/images/business-today-logo.webp"

interface HeroProps {
  title: string
  description?: string
  ctaText?: string
  ctaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  background?: "default" | "muted" | "primary"
  variant?: "simple" | "complex"
}

export function Hero({
  title,
  description,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  background = "default",
  variant = "simple"
}: HeroProps) {
  // Simple variant - text-based hero
  if (variant === "simple") {
    return (
      <section className={`py-4 lg:py-8 ${
        background === "primary" 
          ? "bg-primary text-primary-foreground" 
          : background === "muted" 
          ? "bg-muted" 
          : "bg-background"
      }`}>
        <Container size="lg">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {title}
            </h1>
            {description && (
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {description}
              </p>
            )}
            {(ctaText && ctaHref) && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href={ctaHref}>{ctaText}</a>
                </Button>
                {secondaryCtaText && secondaryCtaHref && (
                  <Button variant="outline" size="lg" asChild>
                    <a href={secondaryCtaHref}>{secondaryCtaText}</a>
                  </Button>
                )}
              </div>
            )}
          </div>
        </Container>
      </section>
    )
  }

  // Complex variant - two-column layout with image and cards
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
              <h1 className="text-3xl lg:text-4xl font-medium text-foreground leading-tight">
                {title}
              </h1>
            </div>

            {/* Primary CTA Button */}
            <div>
              <Button size="default" asChild className="text-base px-6 py-3">
                <a href="/tools/free-return-to-india-planner">Free Return to India Planner Tool</a>
              </Button>
            </div>

                  {/* Advisor Image with Overlay Callout */}
                  <div className="relative w-full h-80 lg:h-90 bg-gradient-to-br from-muted to-muted/50 rounded-2xl overflow-hidden">
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
          <div className="flex flex-col gap-4 order-2 lg:order-2">
            {/* Top Supplementary Card */}
            <div className="bg-blue-100/30 rounded-2xl p-8 border border-border/50">
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

            {/* Press Recognition Card - TurboTax Award Plaque Style */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/20 relative">
              <div className="text-center space-y-4">
              
                {/* Year - Large and Bold */}
                <div className="text-3xl font-bold text-foreground">
                  Recognized by
                </div>
                {/* Business Today Logo */}
                <div className="flex justify-center">
                  <div className="relative w-60 h-25">
                    <Image 
                      src={businessTodayLogo}
                      alt="Business Today Logo"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 400px, 400px"
                    />
                  </div>
                </div>
                
                {/* Subtitle */}
                <p className="text-sm font-medium text-muted-foreground">
                  Settleline&apos;s 2025 NRI 12-Step Checklist Goes Viral
                </p>
                
                {/* Optional Link */}
                <div className="pt-2">
                  <a 
                    href="https://www.businesstoday.in/nri/invest/story/moving-back-to-india-viral-post-outlines-12-step-checklist-for-nris-to-avoid-tax-shocks-491823-2025-08-31" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:text-primary/80 underline transition-colors duration-200"
                  >
                    Read article →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
