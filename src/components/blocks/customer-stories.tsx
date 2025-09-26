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

interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  company: string;
  cover?: string;
}

interface CustomerStoriesProps {
  stories?: CustomerStory[];
  caseStudies?: CaseStudy[];
}

// Map case studies to customer stories format
const getDefaultStories = (caseStudies: CaseStudy[]): CustomerStory[] => {
  const companyLogos: Record<string, { logo: string; logoAlt: string }> = {
    "Microsoft Corporation": {
      logo: "/images/logos/microsoft.webp",
      logoAlt: "Microsoft Corporation"
    },
    "Amazon Inc.": {
      logo: "/images/logos/amazon.webp", 
      logoAlt: "Amazon Inc."
    },
    "Meta Platforms": {
      logo: "/images/logos/meta.webp",
      logoAlt: "Meta Platforms"
    }
  };


  const companyStats: Record<string, { statistic: string; statisticLabel: string }> = {
    "Microsoft Corporation": {
      statistic: "₹30L+",
      statisticLabel: "tax savings achieved"
    },
    "Amazon Inc.": {
      statistic: "40%",
      statisticLabel: "tax burden reduction"
    },
    "Meta Platforms": {
      statistic: "100%",
      statisticLabel: "compliance maintained"
    }
  };

  return caseStudies.slice(0, 3).map((caseStudy, index) => {
    const companyInfo = companyLogos[caseStudy.company] || {
      logo: "/images/logos/default.webp",
      logoAlt: caseStudy.company || "Company Logo"
    };
    
    const imageInfo = {
      image: caseStudy.cover || "/images/case-studies/default.webp",
      imageAlt: `${caseStudy.company || "Company"} case study`
    };
    
    const statsInfo = companyStats[caseStudy.company] || {
      statistic: "Significant",
      statisticLabel: "results achieved"
    };

    return {
      id: index + 1,
      logo: companyInfo.logo,
      logoAlt: companyInfo.logoAlt || "Company Logo",
      statistic: statsInfo.statistic,
      statisticLabel: statsInfo.statisticLabel,
      headline: caseStudy.title || "Case Study",
      description: caseStudy.description || "Learn more about this case study.",
      ctaText: "See the full story →",
      ctaHref: `/case-studies/${caseStudy.slug}`,
      image: imageInfo.image,
      imageAlt: imageInfo.imageAlt || "Case study image"
    };
  });
};

export function CustomerStories({ stories, caseStudies }: CustomerStoriesProps) {
  // Use provided stories or generate from case studies
  const defaultStories = caseStudies ? getDefaultStories(caseStudies) : [];
  const finalStories = stories || defaultStories;
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % finalStories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + finalStories.length) % finalStories.length);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      prevSlide();
    } else if (event.key === "ArrowRight") {
      nextSlide();
    }
  };

  const currentStory = finalStories[currentSlide];

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
                  alt={currentStory.logoAlt || "Company Logo"}
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
                alt={currentStory.imageAlt || "Case study image"}
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
          {finalStories.map((_, index) => (
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
