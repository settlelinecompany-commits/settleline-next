"use client";

import { useState } from "react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface CustomerStory {
  id: number;
  logo: string;
  logoAlt: string;
  statistic: string;
  statisticLabel: string;
  headline: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
}

interface CustomerStoriesProps {
  stories?: CustomerStory[];
}

const defaultStories: CustomerStory[] = [
  {
    id: 1,
    logo: "/images/logos/microsoft.webp",
    logoAlt: "Microsoft Corporation",
    statistic: "3YR",
    statisticLabel: "tax savings achieved",
    headline: "Microsoft engineer optimizes US-India transition",
    description: "With complex stock options and RSUs across both countries, our Microsoft client leveraged strategic RNOR planning to save over $180,000 in taxes while maintaining full compliance across jurisdictions.",
    ctaText: "See the full story →",
    ctaHref: "/case-studies/microsoft-engineer",
    image: "/images/customer-stories/microsoft-office.webp",
    imageAlt: "Microsoft office building with modern architecture"
  },
  {
    id: 2,
    logo: "/images/logos/amazon.webp",
    logoAlt: "Amazon Inc.",
    statistic: "2YR",
    statisticLabel: "ROI on tax planning",
    headline: "Amazon PM streamlines cross-border finances",
    description: "Our Amazon product manager client successfully navigated complex dual taxation scenarios, optimizing their investment portfolio and reducing tax burden by 40% through strategic planning.",
    ctaText: "See the full story →",
    ctaHref: "/case-studies/amazon-pm",
    image: "/images/customer-stories/amazon-spheres.webp",
    imageAlt: "Amazon Spheres building in Seattle with glass domes"
  },
  {
    id: 3,
    logo: "/images/logos/meta.webp",
    logoAlt: "Meta Platforms",
    statistic: "5YR",
    statisticLabel: "compliance maintained",
    headline: "Meta engineer achieves seamless transition",
    description: "Facing complex FBAR and FATCA requirements, our Meta client achieved a smooth return to India while maintaining full compliance and optimizing their tax position across both countries.",
    ctaText: "See the full story →",
    ctaHref: "/case-studies/meta-engineer",
    image: "/images/customer-stories/meta-campus.webp",
    imageAlt: "Meta campus building with modern glass architecture"
  }
];

export function CustomerStories({ stories = defaultStories }: CustomerStoriesProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      prevSlide();
    } else if (event.key === "ArrowRight") {
      nextSlide();
    }
  };

  const currentStory = stories[currentSlide];

  return (
    <Section className="py-16 lg:py-20 bg-primary">
      <Container>
        {/* Header Section */}
        <div className="text-center mb-12 relative">
          <div className="text-sm font-bold text-primary-foreground/80 uppercase tracking-wider mb-4">
            Customer Stories
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Industry leaders trust Settleline
          </h2>
          
          <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Our customers achieve significant tax savings, maintain compliance, and streamline their US-India transitions. See how you can too.
          </p>
          
          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4">
            <button
              onClick={prevSlide}
              onKeyDown={handleKeyDown}
              className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-primary"
              aria-label="Previous customer story"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              onKeyDown={handleKeyDown}
              className="w-12 h-12 bg-white hover:bg-white/90 rounded-full flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-primary"
              aria-label="Next customer story"
            >
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Story Content - 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="relative w-32 h-16">
                <Image
                  src={currentStory.logo}
                  alt={currentStory.logoAlt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 200px, 128px"
                />
              </div>
              <div className="bg-white/10 text-white/80 text-xs font-medium px-3 py-1 rounded-full">
                Customer Stories
              </div>
            </div>

            {/* Statistic */}
            <div className="flex items-baseline gap-3">
              <span className="text-4xl lg:text-5xl font-bold text-white">
                {currentStory.statistic}
              </span>
              <span className="text-lg text-white/80">
                {currentStory.statisticLabel}
              </span>
            </div>

            {/* Headline */}
            <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
              {currentStory.headline}
            </h3>

            {/* Description */}
            <p className="text-lg text-white/90 leading-relaxed">
              {currentStory.description}
            </p>

            {/* CTA */}
            <div className="pt-4">
              <a
                href={currentStory.ctaHref}
                className="inline-flex items-center text-white hover:text-white/80 underline text-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-primary rounded"
              >
                {currentStory.ctaText}
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden">
              <Image
                src={currentStory.image}
                alt={currentStory.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={currentSlide === 0}
              />
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-primary ${
                index === currentSlide 
                  ? "bg-white" 
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to customer story ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
