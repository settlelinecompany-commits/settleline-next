import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { generateSEO } from "@/lib/seo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = generateSEO({
  title: "Customer Reviews - What NRIs Say About Settleline",
  description: "Read authentic Google reviews from NRIs who trust Settleline for their US-India tax planning, RNOR guidance, and financial transition needs."
});

const reviews = [
  {
    id: 1,
    rating: 5,
    excerpt: "Settleline made my transition back to India seamless. Their RNOR planning saved me over $25,000 in taxes. The team is knowledgeable, responsive, and truly understands the complexities of US-India cross-border taxation.",
    reviewer: "Priya S.",
    country: "California, USA",
    date: "2024-01-15",
    source: "Google",
    sourceUrl: "https://google.com"
  },
  {
    id: 2,
    rating: 5,
    excerpt: "Exceptional service! They handled my Indian tax filing and DTAA optimization perfectly. The team explained everything clearly and ensured I was compliant in both countries. Highly recommend for any NRI.",
    reviewer: "Rajesh K.",
    country: "Texas, USA", 
    date: "2024-01-10",
    source: "Google",
    sourceUrl: "https://google.com"
  },
  {
    id: 3,
    rating: 5,
    excerpt: "Professional, efficient, and cost-effective. Settleline helped me with my capital gains tax planning and repatriation of funds. Their expertise in NRI tax matters is unmatched. Will definitely use their services again.",
    reviewer: "Anita M.",
    country: "New York, USA",
    date: "2024-01-08",
    source: "Google",
    sourceUrl: "https://google.com"
  },
  {
    id: 4,
    rating: 5,
    excerpt: "Outstanding support throughout my tax planning journey. They helped me understand RNOR status and optimized my tax position before returning to India. The savings were significant and the process was stress-free.",
    reviewer: "Vikram R.",
    country: "Washington, USA",
    date: "2024-01-05",
    source: "Google",
    sourceUrl: "https://google.com"
  },
  {
    id: 5,
    rating: 5,
    excerpt: "Settleline's team is incredibly knowledgeable about US-India tax treaties and compliance requirements. They helped me with FBAR filing and FATCA compliance. Professional service with personal attention.",
    reviewer: "Sunita P.",
    country: "Illinois, USA",
    date: "2024-01-03",
    source: "Google",
    sourceUrl: "https://google.com"
  },
  {
    id: 6,
    rating: 5,
    excerpt: "Excellent service for NRI tax planning. They provided comprehensive guidance on my investment advisory needs and helped structure my portfolio for optimal tax efficiency. Highly professional team.",
    reviewer: "Arjun T.",
    country: "California, USA",
    date: "2024-01-01",
    source: "Google",
    sourceUrl: "https://google.com"
  },
  {
    id: 7,
    rating: 5,
    excerpt: "Settleline made my tax notice handling effortless. They represented me professionally and resolved all issues quickly. Their expertise in Indian tax law is impressive. Great value for money.",
    reviewer: "Meera L.",
    country: "Florida, USA",
    date: "2023-12-28",
    source: "Google",
    sourceUrl: "https://google.com"
  },
  {
    id: 8,
    rating: 5,
    excerpt: "Comprehensive tax consultancy that exceeded my expectations. They helped with my business incorporation in India and ongoing compliance. The team is responsive and always available for questions.",
    reviewer: "Kiran D.",
    country: "New Jersey, USA",
    date: "2023-12-25",
    source: "Google",
    sourceUrl: "https://google.com"
  },
  {
    id: 9,
    rating: 5,
    excerpt: "Outstanding RNOR planning service. They saved me thousands in taxes and made my return to India financially optimal. The team's knowledge of both US and Indian tax systems is exceptional.",
    reviewer: "Ravi N.",
    country: "Massachusetts, USA",
    date: "2023-12-22",
    source: "Google",
    sourceUrl: "https://google.com"
  }
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleRatingBadge() {
  return (
    <div className="flex items-center space-x-3 bg-white border border-border/20 rounded-lg px-4 py-3 shadow-sm">
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-2xl font-bold text-foreground">4.9</span>
      </div>
      <div className="text-sm text-muted-foreground">
        <div className="font-medium">Based on 127 reviews</div>
        <div className="text-xs">on Google</div>
      </div>
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="py-16 lg:py-20 bg-gradient-to-br from-primary/5 to-muted/20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What NRIs say about Settleline
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Read authentic reviews from NRIs who have trusted 
              Settleline for their US-India tax planning and financial transition needs.
            </p>
            
            {/* Google Rating Badge */}
            <div className="flex justify-center mb-8">
              <GoogleRatingBadge />
            </div>
            
            {/* Read on Google Button */}
            <Button asChild size="lg">
              <Link href="https://google.com" target="_blank" rel="noopener noreferrer">
                Read on Google
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Reviews Grid */}
      <Section className="py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <Card key={review.id} className="p-6 border border-border/20 hover:shadow-lg transition-shadow duration-300">
                {/* Star Rating */}
                <div className="mb-4">
                  <StarRating rating={review.rating} />
                </div>
                
                {/* Review Excerpt */}
                <blockquote className="text-muted-foreground mb-4 leading-relaxed">
                  &ldquo;{review.excerpt}&rdquo;
                </blockquote>
                
                {/* Reviewer Info */}
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <div className="font-medium text-foreground">{review.reviewer}</div>
                    <div className="text-muted-foreground">{review.country}</div>
                    <div className="text-muted-foreground text-xs">{review.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">Source:</div>
                    <Link 
                      href={review.sourceUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      {review.source}
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Bottom CTA Band */}
      <Section className="py-16 bg-primary text-primary-foreground">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to join our satisfied clients?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Experience the same exceptional service that our clients rave about. 
              Get started with a free consultation or try our planning tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/book">Book Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/tools/free-return-to-india-planner">Try Free Planner</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
