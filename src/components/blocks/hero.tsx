import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"

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
    <section className={`py-16 lg:py-24 ${
      background === "primary" 
        ? "bg-primary text-primary-foreground" 
        : background === "muted" 
        ? "bg-muted" 
        : "bg-background"
    }`}>
      <Container size="lg">
        <div className="text-center space-y-6">
          {subtitle && (
            <p className="text-body-lg text-muted-foreground">
              {subtitle}
            </p>
          )}
          <h1 className="text-display">
            {title}
          </h1>
          {description && (
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              {description}
            </p>
          )}
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
        </div>
      </Container>
    </section>
  )
}
