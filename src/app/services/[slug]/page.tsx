import { notFound } from 'next/navigation'
import { getService, getServices } from '@/lib/content'
import { generateSEO, generateServiceSchema, generateBreadcrumbSchema } from '@/lib/seo'
import { Container } from '@/components/layout/container'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

interface ServicePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const services = getServices()
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: ServicePageProps) {
  const service = getService(params.slug)
  
  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return generateSEO({
    title: service.title,
    description: service.description,
    type: 'service',
  })
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getService(params.slug)
  
  if (!service) {
    notFound()
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: service.title, url: `/services/${service.slug}` },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateServiceSchema({
            title: service.title,
            description: service.description,
            url: `/services/${service.slug}`,
            priceFrom: service.priceFrom,
          })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)),
        }}
      />
      
      <Container className="py-16">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.name} className="flex items-center">
                  {index > 0 && <span className="mx-2">/</span>}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-foreground">{crumb.name}</span>
                  ) : (
                    <Link href={crumb.url} className="hover:text-foreground transition-colors">
                      {crumb.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          {/* Service Header */}
          <header className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-h1">{service.title}</h1>
              {service.priceFrom && (
                <Badge variant="outline" className="text-lg px-4 py-2">
                  From {service.priceFrom}
                </Badge>
              )}
            </div>
            <p className="text-body-lg text-muted-foreground mb-6">{service.description}</p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href={service.ctaHref || '/book'}>{service.ctaText || 'Book Consultation'}</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/tools/free-return-to-india-planner">Try Free Planner</a>
              </Button>
            </div>
          </header>

          {/* Service Content */}
          <article className="prose prose-lg max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: service.content }} />
          </article>

          {/* Features List */}
          {service.bullets && service.bullets.length > 0 && (
            <section className="mb-12">
              <h2 className="text-h2 mb-6">What&apos;s Included</h2>
              <ul className="space-y-3">
                {service.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold mt-0.5">
                      ✓
                    </div>
                    <span className="text-body">{bullet}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* FAQ Section */}
          {service.faq && service.faq.length > 0 && (
            <section className="mb-12">
              <h2 className="text-h2 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {service.faq.map((faq, index) => (
                  <div key={index} className="border rounded-lg p-6">
                    <h3 className="text-h4 mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CTA Section */}
          <section className="bg-muted rounded-lg p-8 text-center">
            <h2 className="text-h2 mb-4">Ready to Get Started?</h2>
            <p className="text-body-lg text-muted-foreground mb-6">
              Contact us today to discuss your specific needs and create a personalized plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href={service.ctaHref || '/book'}>{service.ctaText || 'Book Consultation'}</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/about">Learn More About Us</a>
              </Button>
            </div>
          </section>
        </div>
      </Container>
    </>
  )
}
