import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Container } from "@/components/layout/container"

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  title?: string
  description?: string
  items: FAQItem[]
  className?: string
}

export function FAQ({ 
  title = "Frequently Asked Questions", 
  description,
  items,
  className 
}: FAQProps) {
  return (
    <section className={className}>
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-h2">{title}</h2>
            {description && (
              <p className="text-body-lg text-muted-foreground">
                {description}
              </p>
            )}
          </div>
          
          <Accordion>
            {items.map((item, index) => (
              <AccordionItem key={index}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>
                  <div className="prose prose-sm max-w-none">
                    <p>{item.answer}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  )
}
