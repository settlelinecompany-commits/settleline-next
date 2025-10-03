import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"

interface FooterCTAProps {
  title?: string
  description?: string
  ctaText?: string
  ctaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  background?: "default" | "primary" | "muted"
  className?: string
}

export function FooterCTA({
  title = "Ready to get started?",
  description = "Book a consultation with our experts to plan your return to India.",
  ctaText = "Book Consultation",
  ctaHref = "/book",
  secondaryCtaText,
  secondaryCtaHref,
  background = "primary",
  className
}: FooterCTAProps) {
  return (
    <section className={`py-16 ${
      background === "primary" 
        ? "bg-primary text-primary-foreground" 
        : background === "muted" 
        ? "bg-muted" 
        : "bg-background"
    } ${className}`}>
      <Container>
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-h2 text-primary-foreground">{title}</h2>
          <p className="text-body-lg text-primary-foreground/90">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant={background === "primary" ? "secondary" : "default"}
              asChild
            >
              <a href={ctaHref}>{ctaText}</a>
            </Button>
            {secondaryCtaText && secondaryCtaHref && (
              <Button 
                size="lg" 
                variant={background === "primary" ? "secondary" : "default"}
                asChild
              >
                <a href={secondaryCtaHref}>{secondaryCtaText}</a>
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
