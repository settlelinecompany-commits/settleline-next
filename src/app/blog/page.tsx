import { Hero } from "@/components/blocks/hero";
import { Container } from "@/components/layout/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { generateSEO } from "@/lib/seo";
import { getBlogPosts } from "@/lib/content";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import Image from "next/image";

export const metadata = generateSEO({
  title: "Blog & Resources",
  description: "Expert insights on US-India tax planning, RNOR status, and financial transition strategies.",
});

export default function BlogPage() {
  const posts = getBlogPosts();
  
  return (
    <>
      <Hero
        title="Blog & Resources"
        description="Stay informed with the latest updates on US-India tax laws, RNOR planning strategies, and financial transition tips."
        ctaText="Book Consultation"
        ctaHref="/#services"
      />
      
      <Container className="py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.slug} className="h-full overflow-hidden">
              {/* Blog Image */}
              <div className="relative w-full h-48">
                <Image
                  src={post.cover || "/images/blog/401k-catchup.webp"}
                  alt={`${post.title} - Blog post cover`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge variant="outline">{post.tags[0]}</Badge>
                  <span className="text-caption">{post.readTime}</span>
                </div>
                <CardTitle className="text-h4">
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {post.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.description}</p>
                <div className="flex items-center justify-between text-caption text-muted-foreground">
                  <span>{post.author}</span>
                  <span>{formatDate(post.date)}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No blog posts available yet. Check back soon!</p>
          </div>
        )}
      </Container>
    </>
  );
}
