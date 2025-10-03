"use client";

import { useState } from "react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/content";

interface FeaturedBlogPostsProps {
  posts: BlogPost[];
}

export function FeaturedBlogPosts({ posts }: FeaturedBlogPostsProps) {
  const featuredPosts = posts;
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredPosts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      prevSlide();
    } else if (event.key === "ArrowRight") {
      nextSlide();
    }
  };

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
    <Section className="py-16 lg:py-20 bg-background">
      <Container>
        {/* Header Section */}
        <div className="text-center mb-12 relative">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Featured Tax Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Expert guidance and insights to help you navigate US-India cross-border tax planning with confidence.
          </p>
          
          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4">
            <button
              onClick={prevSlide}
              onKeyDown={handleKeyDown}
              className="w-12 h-12 bg-muted hover:bg-muted/80 rounded-full flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
              aria-label="Previous blog post"
            >
              <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              onKeyDown={handleKeyDown}
              className="w-12 h-12 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
              aria-label="Next blog post"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Blog Posts Carousel */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {featuredPosts.map((post, index) => (
              <div key={post.slug} className="w-full flex-shrink-0 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  {/* Left Column - Image */}
                  <div className="lg:col-span-1">
                    <div className="relative w-full h-64 lg:h-80 rounded-2xl overflow-hidden">
                      <Image
                        src={post.cover || "/images/blog/401k-catchup.webp"}
                        alt={`${post.title} - Featured blog post`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={index === 0}
                      />
                    </div>
                  </div>

                  {/* Right Column - Content */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Category Badge */}
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                        {post.category.toUpperCase()}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                      {post.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {post.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>

                    {/* CTA */}
                    <div className="pt-4">
                      <Button asChild>
                        <Link href={`/blog/${post.slug}`}>
                          Read full article
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {featuredPosts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 ${
                index === currentSlide 
                  ? "bg-primary" 
                  : "bg-muted hover:bg-muted/80"
              }`}
              aria-label={`Go to blog post ${index + 1}`}
            />
          ))}
        </div>

        {/* View All Posts CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <Link href="/blog">
              View All Posts
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
