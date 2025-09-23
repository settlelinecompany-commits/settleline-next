import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { Card, CardContent, CardTitle } from "@/components/ui/card"

interface CalculatorMountProps {
  title?: string
  description?: string
  features?: string[]
  ctaText?: string
  ctaHref?: string
  className?: string
}

export function CalculatorMount({
  title = "RNOR Calculator",
  description = "Get personalized insights for your return to India planning",
  features = [
    "Calculate your RNOR status",
    "Understand tax implications",
    "Get personalized recommendations",
    "Plan your financial transition"
  ],
  ctaText = "Start Planning",
  ctaHref = "/book",
  className
}: CalculatorMountProps) {
  return (
    <section className={className}>
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-h2">{title}</h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-h3">What you&apos;ll get:</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold mt-0.5">
                      ✓
                    </div>
                    <span className="text-body">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" asChild>
                <a href={ctaHref}>{ctaText}</a>
              </Button>
            </div>
            
            <Card className="h-96 flex items-center justify-center">
              <CardContent className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🧮</span>
                </div>
                <CardTitle>Calculator Coming Soon</CardTitle>
                <p className="text-muted-foreground">
                  We&apos;re building a comprehensive RNOR calculator to help you plan your return to India.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  )
}
