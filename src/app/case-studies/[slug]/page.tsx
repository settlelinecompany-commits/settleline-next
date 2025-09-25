import { notFound } from 'next/navigation'
import { getCaseStudy, getCaseStudies } from '@/lib/case-studies'
import { generateSEO, generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo'
import { Container } from '@/components/layout/container'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { formatDate } from '@/lib/utils'
import { KeyTakeaways } from '@/components/blocks/key-takeaways'
import { ReadingProgress } from '@/components/blocks/reading-progress'
import { TableOfContents } from '@/components/blocks/table-of-contents'
import { RelatedPosts } from '@/components/blocks/related-posts'
import { MarkdownRenderer } from '@/components/blocks/markdown-renderer'
import { FAQAccordion } from '@/components/blocks/faq-accordion'
import Link from 'next/link'
import Image from 'next/image'

interface CaseStudyPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const caseStudies = getCaseStudies()
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }))
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const caseStudy = getCaseStudy(slug)
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    }
  }

  return generateSEO({
    title: caseStudy.title,
    description: caseStudy.description,
    type: 'article',
    publishedTime: caseStudy.date,
    modifiedTime: caseStudy.updated,
    author: caseStudy.author,
    tags: caseStudy.tags,
  })
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const caseStudy = getCaseStudy(slug)
  
  if (!caseStudy) {
    notFound()
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: caseStudy.title, url: `/case-studies/${caseStudy.slug}` },
  ]

  // Get related case studies (same category, excluding current case study)
  const allCaseStudies = getCaseStudies()
  const relatedCaseStudies = allCaseStudies
    .filter(cs => cs.slug !== caseStudy.slug && cs.category === caseStudy.category && cs.cover)
    .slice(0, 3)
    .map(cs => ({
      slug: cs.slug,
      title: cs.title,
      description: cs.description,
      category: cs.category,
      cover: cs.cover!,
      readTime: cs.readTime
    }))

  // Generate key takeaways based on case study data
  const keyTakeaways = [
    `${caseStudy.company} ${caseStudy.clientRole} achieved ${caseStudy.savings} through strategic planning`,
    `Project timeline: ${caseStudy.timeline} with comprehensive approach`,
    `Key challenges addressed: ${caseStudy.challenges.slice(0, 2).join(', ')}`,
    `Professional guidance essential for complex cross-border tax situations`,
    `Early planning and expert coordination maximize tax optimization results`
  ]

  return (
    <>
      <ReadingProgress />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateArticleSchema({
            title: caseStudy.title,
            description: caseStudy.description,
            author: caseStudy.author,
            publishedTime: caseStudy.date,
            modifiedTime: caseStudy.updated,
            url: `/case-studies/${caseStudy.slug}`,
            image: caseStudy.cover,
          })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)),
        }}
      />
      {caseStudy.faq && caseStudy.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": caseStudy.faq.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            }),
          }}
        />
      )}
      
      <Container className="py-16">
        <div className="max-w-6xl mx-auto">
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

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Case Study Header */}
              <header className="mb-12">
                <div className="flex items-center space-x-2 mb-4">
                  <Badge variant="outline" className="bg-green-100 text-green-800">
                    {caseStudy.category}
                  </Badge>
                  <Badge variant="outline" className="bg-blue-100 text-blue-800">
                    {caseStudy.company}
                  </Badge>
                  {caseStudy.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                  {caseStudy.title}
                </h1>
                
                {/* Author Info - TurboTax Style */}
                <div className="text-left mb-6">
                  <p className="text-sm text-muted-foreground">
                    Written by <Link href="/experts" className="text-primary font-medium hover:text-primary/80 transition-colors">Settleline Expert</Link>
                    {caseStudy.reviewedBy && (
                      <span> • Reviewed by <Link href="/experts" className="text-primary font-medium hover:text-primary/80 transition-colors">Settleline CA</Link></span>
                    )}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Updated for Tax Year 2024 • {formatDate(caseStudy.date)} {caseStudy.readTime}
                  </p>
                </div>
                
                <p className="mb-4 leading-relaxed">
                  {caseStudy.description}
                </p>

                {/* Key Takeaways - Right above hero image */}
                <div className="mb-8">
                  <KeyTakeaways takeaways={keyTakeaways} />
                </div>
                
                {/* Hero Image */}
                <div className="relative w-full h-64 lg:h-80 rounded-2xl overflow-hidden mb-8 bg-muted/30">
                  {caseStudy.cover ? (
                        <Image
                          src={caseStudy.cover}
                          alt={`${caseStudy.company} case study: ${caseStudy.title}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 75vw"
                          priority
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                        </div>
                      )}
                </div>

                {/* Image Caption */}
                <p className="text-sm text-muted-foreground text-center italic mb-6">
                  {caseStudy.company} case study: {caseStudy.title}
                </p>
              </header>

              {/* Table of Contents - Right above article content */}
              <div className="mb-8">
                <TableOfContents containerId="article-content" />
              </div>

              {/* Case Study Content */}
              <article className="mb-16">
                <div id="article-content">
                  <MarkdownRenderer content={caseStudy.content} />
                </div>
              </article>

              {/* FAQ Section */}
              {caseStudy.faq && caseStudy.faq.length > 0 && (
                <section className="mb-16">
                  <FAQAccordion faqs={caseStudy.faq} />
                </section>
              )}

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* CTA Section - Desktop: Top of sidebar, Mobile: Sticky bottom */}
                <div className="hidden lg:block bg-primary/5 border border-primary/20 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Ready to Create Your Own Success Story?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get personalized guidance from our expert team to achieve similar results for your situation.
                  </p>
                  <div className="flex flex-col gap-3">
                    <Button asChild size="sm">
                      <Link href="/book">Book a Consultation</Link>
                    </Button>
                    <Button variant="outline" asChild size="sm">
                      <Link href="/tools/free-return-to-india-planner">Start Free Assessment</Link>
                    </Button>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Related Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <RelatedPosts posts={relatedCaseStudies} currentSlug={caseStudy.slug} />
      )}

      {/* Mobile Sticky CTA - Only visible on mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border p-4 shadow-lg z-50">
        <div className="flex gap-3">
          <Button asChild className="flex-1">
            <Link href="/book">Book a Consultation</Link>
          </Button>
          <Button variant="outline" asChild className="flex-1">
            <Link href="/tools/free-return-to-india-planner">Start Free Assessment</Link>
          </Button>
        </div>
      </div>
    </>
  )
}
