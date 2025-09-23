import { Container } from "@/components/layout/container"
import { Grid } from "@/components/layout/grid"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Feature {
  title: string
  description: string
  icon?: string
}

interface FeatureListProps {
  title?: string
  description?: string
  features: Feature[]
  columns?: 1 | 2 | 3 | 4
  className?: string
}

export function FeatureList({
  title,
  description,
  features,
  columns = 3,
  className
}: FeatureListProps) {
  return (
    <section className={className}>
      <Container>
        {(title || description) && (
          <div className="text-center space-y-4 mb-12">
            {title && <h2 className="text-h2">{title}</h2>}
            {description && (
              <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}
        
        <Grid cols={columns}>
          {features.map((feature, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                {feature.icon && (
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                )}
                <CardTitle className="text-h4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Container>
    </section>
  )
}
