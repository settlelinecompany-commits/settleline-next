import { notFound } from 'next/navigation'
import { getBlogPost, getBlogPosts } from '@/lib/content'
import { generateSEO, generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo'
import { Container } from '@/components/layout/container'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { formatDate } from '@/lib/utils'
import { extractKeyTakeaways } from '@/lib/markdown'
import { TableOfContents } from '@/components/blocks/table-of-contents'
import { ExpertTip } from '@/components/blocks/expert-tip'
import { KeyTakeaways } from '@/components/blocks/key-takeaways'
import { ReadingProgress } from '@/components/blocks/reading-progress'
import { RelatedPosts } from '@/components/blocks/related-posts'
import { MarkdownRenderer } from '@/components/blocks/markdown-renderer'
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

  // Extract key takeaways from content
  const keyTakeaways = extractKeyTakeaways(post.content)

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
                
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                  {post.title}
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {post.description}
                </p>
                
                {/* Hero Image */}
                <div className="relative w-full h-64 lg:h-80 rounded-2xl overflow-hidden mb-8 bg-muted/30">
                  {post.cover ? (
                    <Image
                      src={post.cover}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 75vw"
                      priority
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <p className="text-muted-foreground">Article Image</p>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground border-b border-border pb-6">
                  <div className="flex items-center space-x-4">
                    <span>By <strong className="text-foreground">{post.author}</strong></span>
                    {post.reviewedBy && (
                      <span>Reviewed by <strong className="text-foreground">{post.reviewedBy}</strong></span>
                    )}
                  </div>
                  <div className="flex items-center space-x-4">
                    <span>{formatDate(post.date)}</span>
                    {post.updated && <span>Updated {formatDate(post.updated)}</span>}
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </header>

              {/* Key Takeaways */}
              <div className="mb-12">
                <KeyTakeaways takeaways={keyTakeaways} />
              </div>

              {/* Article Content */}
              <article className="mb-16">
                <MarkdownRenderer content={post.content} />
              </article>

              {/* FAQ Section */}
              {post.faq && post.faq.length > 0 && (
                <section className="mb-16">
                  <h2 className="text-3xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {post.faq.map((faq, index) => (
                      <div key={index} className="bg-white border border-border rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-foreground mb-3">{faq.question}</h3>
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* CTA Section */}
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center mb-16">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Optimize Your US-India Tax Planning?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Get personalized guidance from our expert team to maximize your RNOR benefits and ensure compliance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <Link href="/book">Book a Consultation</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/tools/free-return-to-india-planner">Start Free Assessment</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                <TableOfContents />
                
                {/* Author Info */}
                <div className="bg-white border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">About the Author</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="font-medium text-foreground">{post.author}</div>
                      <div className="text-sm text-muted-foreground">{post.authorRole}</div>
                    </div>
                    {post.reviewedBy && (
                      <div>
                        <div className="font-medium text-foreground">Reviewed by</div>
                        <div className="text-sm text-muted-foreground">{post.reviewedBy}</div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="bg-white border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Share this article</h3>
                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://settleline.com/blog/${post.slug}`)}`} target="_blank" rel="noopener noreferrer">
                        Twitter
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://settleline.com/blog/${post.slug}`)}`} target="_blank" rel="noopener noreferrer">
                        LinkedIn
                      </a>
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
    </>
  )
}