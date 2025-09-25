import { notFound } from 'next/navigation'
import { getBlogPost, getBlogPosts } from '@/lib/content'
import { generateSEO, generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo'
import { Container } from '@/components/layout/container'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { formatDate } from '@/lib/utils'
import { extractKeyTakeaways } from '@/lib/markdown'
import { ExpertTip } from '@/components/blocks/expert-tip'
import { KeyTakeaways } from '@/components/blocks/key-takeaways'
import { ReadingProgress } from '@/components/blocks/reading-progress'
import { TableOfContents } from '@/components/blocks/table-of-contents'
import { RelatedPosts } from '@/components/blocks/related-posts'
import { MarkdownRenderer } from '@/components/blocks/markdown-renderer'
import { FAQAccordion } from '@/components/blocks/faq-accordion'
import Link from 'next/link'
import Image from 'next/image'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return generateSEO({
    title: post.title,
    description: post.description,
    type: 'article',
    publishedTime: post.date,
    modifiedTime: post.updated,
    author: post.author,
    tags: post.tags,
  })
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)
  
  if (!post) {
    notFound()
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` },
  ]

  // Get related posts (same category, excluding current post)
  const allPosts = getBlogPosts()
  const relatedPosts = allPosts
    .filter(p => p.slug !== post.slug && p.category === post.category && p.cover)
    .slice(0, 3)
    .map(p => ({
      slug: p.slug,
      title: p.title,
      description: p.description,
      category: p.category,
      cover: p.cover!,
      readTime: p.readTime
    }))

  // Hardcoded key takeaways for this specific blog post
  const keyTakeaways = [
    "RNOR status provides a 2-year tax optimization window for US-India cross-border professionals",
    "Foreign income is generally exempt from Indian taxation during RNOR period", 
    "Strategic planning is crucial to maximize benefits and maintain compliance",
    "Physical presence tracking is essential to maintain RNOR eligibility",
    "Early planning (6-12 months before return) maximizes tax savings opportunities"
  ]

  return (
    <>
      <ReadingProgress />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateArticleSchema({
            title: post.title,
            description: post.description,
            author: post.author,
            publishedTime: post.date,
            modifiedTime: post.updated,
            url: `/blog/${post.slug}`,
            image: post.cover,
          })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)),
        }}
      />
      {post.faq && post.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": post.faq.map(faq => ({
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
              {/* Article Header */}
              <header className="mb-12">
                <div className="flex items-center space-x-2 mb-4">
                  <Badge variant="outline" className="bg-blue-100 text-blue-800">
                    {post.category}
                  </Badge>
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                  {post.title}
                </h1>
                
                {/* Author Info - TurboTax Style */}
                <div className="text-left mb-6">
                  <p className="text-sm text-muted-foreground">
                    Written by <Link href="/experts" className="text-primary font-medium hover:text-primary/80 transition-colors">Settleline Expert</Link>
                    {post.reviewedBy && (
                      <span> • Reviewed by <Link href="/experts" className="text-primary font-medium hover:text-primary/80 transition-colors">Settleline CA</Link></span>
                    )}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Updated for Tax Year 2024 • {formatDate(post.date)} {post.readTime}
                  </p>
                </div>
                
                <p className="mb-4 leading-relaxed">
                  {post.description}
                </p>

                {/* Key Takeaways - Right above hero image */}
                <div className="mb-8">
                  <KeyTakeaways takeaways={keyTakeaways} />
                </div>
                
                {/* Hero Image */}
                <div className="relative w-full h-64 lg:h-80 rounded-2xl overflow-hidden mb-8 bg-muted/30">
                  {post.cover ? (
                        <Image
                          src={post.cover}
                          alt="RNOR Status Guide: Complete tax planning guide for US-India cross-border professionals returning to India"
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
                  RNOR Status Guide: Complete tax planning guide for US-India cross-border professionals returning to India
                </p>
              </header>

              {/* Table of Contents - Right above article content */}
              <div className="mb-8">
                <TableOfContents containerId="article-content" />
              </div>

              {/* Article Content */}
              <article className="mb-16">
                <div id="article-content">
                  <MarkdownRenderer content={post.content} />
                </div>
              </article>

              {/* FAQ Section */}
              {post.faq && post.faq.length > 0 && (
                <section className="mb-16">
                  <FAQAccordion faqs={post.faq} />
                </section>
              )}

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* CTA Section - Desktop: Top of sidebar, Mobile: Sticky bottom */}
                <div className="hidden lg:block bg-primary/5 border border-primary/20 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Ready to Optimize Your US-India Tax Planning?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get personalized guidance from our expert team to maximize your RNOR benefits and ensure compliance.
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

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <RelatedPosts posts={relatedPosts} currentSlug={post.slug} />
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