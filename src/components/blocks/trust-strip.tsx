import { Container } from "@/components/layout/container"

interface TrustStripProps {
  items: string[]
  className?: string
}

export function TrustStrip({ items, className }: TrustStripProps) {
  return (
    <section className={`py-8 border-y bg-muted/30 ${className}`}>
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-8 text-center">
          {items.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-body-sm font-medium text-muted-foreground">
                {item}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
