import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import Image from "next/image"
import heroAdvisorPhoto from "../../../public/images/hero-advisor-photo.webp"

interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  ctaText?: string
  ctaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  background?: "default" | "muted" | "primary"
}

export function Hero({
  title,
  subtitle,
  description,
  ctaText = "Get Started",
  ctaHref = "/book",
  secondaryCtaText,
  secondaryCtaHref,
  background = "default"
}: HeroProps) {
  return (
    <section className={`py-12 lg:py-16 ${
      background === "primary" 
        ? "bg-primary text-primary-foreground" 
        : background === "muted" 
        ? "bg-muted" 
        : "bg-background"
    }`}>
      <Container size="lg">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {title}
              </h1>
              {description && (
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {description}
                </p>
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-lg px-8 py-4">
                <a href={ctaHref}>{ctaText}</a>
              </Button>
              {secondaryCtaText && secondaryCtaHref && (
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-4">
                  <a href={secondaryCtaHref}>{secondaryCtaText}</a>
                </Button>
              )}
            </div>
          </div>

          {/* Right Column - Hero Image with Overlaid Callouts */}
          <div className="relative">
            {/* Main Hero Image Area */}
            <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-muted to-muted/50 rounded-2xl overflow-hidden">
              {/* Advisor Image */}
              <div className="absolute inset-0">
                <Image 
                  src={heroAdvisorPhoto}
                  alt="Professional tax advisor helping NRIs with RNOR & cross-border planning"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Overlaid Callout Cards */}
              {/* Top Right - Tax Savings Callout */}
              <div className="absolute top-6 right-6 bg-white border border-border rounded-xl p-4 shadow-lg max-w-48">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    Great savings!
                  </span>
                </div>
                <div className="text-2xl font-bold text-green-600 mb-1">
                  $15,000+
                </div>
                <div className="text-xs text-muted-foreground">
                  Average Tax Savings
                </div>
              </div>

              {/* Bottom Left - Free Assessment Callout */}
              <div className="absolute bottom-6 left-6 bg-blue-50 border border-blue-200 rounded-xl p-4 shadow-lg max-w-52">
                <div className="text-sm font-semibold text-foreground mb-1">
                  Free RNOR Assessment
                </div>
                <div className="text-xs text-muted-foreground mb-2">
                  Get your personalized analysis
                </div>
                <div className="text-lg font-bold text-blue-600">
                  FREE
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
