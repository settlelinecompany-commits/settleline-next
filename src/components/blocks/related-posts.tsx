import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

interface RelatedPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  cover: string;
  readTime: string;
}

interface RelatedPostsProps {
  posts: RelatedPost[];
  currentSlug: string;
}

export function RelatedPosts({ posts, currentSlug }: RelatedPostsProps) {
  const filteredPosts = posts.filter(post => post.slug !== currentSlug).slice(0, 3);

  if (filteredPosts.length === 0) return null;

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "tax planning":
        return "bg-blue-100 text-blue-800";
      case "compliance":
        return "bg-green-100 text-green-800";
      case "investment":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Section className="py-12 bg-muted/20">
      <Container>
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Related Articles
          </h2>
          <p className="text-muted-foreground">
            Continue learning with these related topics
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group block bg-white rounded-2xl overflow-hidden shadow-lg border border-border/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={post.cover}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                  {post.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
