import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { generateSEO } from "@/lib/seo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = generateSEO({
  title: "Customer Reviews - What Indians Around the Globe Say About Settleline",
  description: "Read authentic Google reviews from Indians around the globe who trust Settleline for their cross-border tax planning, RNOR guidance, and financial transition needs."
});

const reviews = [
  {
    id: 1,
    rating: 5,
    excerpt: "I had RSUs from my US company and was scared of double taxation. Settleline not only helped me file Form 67 but also planned my vesting in a way that saved me lakhs. Couldn't have managed it on my own.",
    reviewer: "Pawan",
    country: "California, USA",
    date: "2024-11-15",
    source: "Google",
    sourceUrl: "https://google.com"
  },
  {
    id: 2,
    rating: 5,
    excerpt: "After talking to 3-4 regular CAs in India, I realized none of them understood NRI tax in depth. Settleline stood out because they actually specialize in US-India cross-border cases. They solved my tax mess in weeks.",
    reviewer: "Kamal",
    country: "London, UK", 
    date: "2024-11-10",
    source: "Google",
    sourceUrl: "https://google.com"
  },
  {
    id: 3,
    rating: 5,
    excerpt: "I was scared about Schedule FA penalties because I had multiple US bank accounts. Settleline guided me through disclosures properly and avoided unnecessary fines. Worth every rupee!",
    reviewer: "Beetu",
    country: "Toronto, Canada",
    date: "2024-11-08",
    source: "Google",
    sourceUrl: "https://google.com"
  },
  {
    id: 4,
    rating: 5,
    excerpt: "I moved money from my US brokerage to India and thought I'd get stuck with huge taxes. Settleline planned it during my RNOR window, and the difference was unbelievable. I highly recommend them to every returning NRI.",
    reviewer: "Ranjit",
    country: "Sydney, Australia",
    date: "2024-11-05",
    source: "Google",
    sourceUrl: "https://google.com"
  },
  {
    id: 5,
    rating: 5,
    excerpt: "What sets them apart is their cross-border expertise. Any CA can file a return, but Settleline understands both US and Indian systems. That's what gave me the confidence to trust them with my finances.",
    reviewer: "Ajit",
    country: "Singapore",
    date: "2024-11-03",
    source: "Google",
    sourceUrl: "https://google.com"
  },
  {
    id: 6,
    rating: 5,
    excerpt: "I've tried big firms before, but none gave me the personal attention that Settleline did. From my first free consultation, I knew they were different. They actually care about solving your problems.",
    reviewer: "Munni",
    country: "Dubai, UAE",
    date: "2024-11-01",
    source: "Google",
    sourceUrl: "https://google.com"
  },
  {
    id: 7,
    rating: 5,
    excerpt: "Settleline's WhatsApp support and quick calls made my life easy. I had a million doubts about NRO/NRE conversion and filing returns, but they explained everything patiently.",
    reviewer: "Kanhaiya",
    country: "New York, USA",
    date: "2024-10-28",
    source: "Google",
    sourceUrl: "https://google.com"
  },
  {
    id: 8,
    rating: 5,
    excerpt: "Super transparent, quick responses and no jargon. They don't scare you with complicated terms - they actually explain how things work.",
    reviewer: "Sanjay",
    country: "Melbourne, Australia",
    date: "2024-10-25",
    source: "Google",
    sourceUrl: "https://google.com"
  },
  {
    id: 9,
    rating: 5,
    excerpt: "I had no clue about RNOR rules or how my US investments would be taxed here. Settleline explained everything with patience and helped me avoid mistakes that could have cost me lakhs.",
    reviewer: "Anshu",
    country: "Vancouver, Canada",
    date: "2024-10-22",
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
        <div className="font-medium">Reviews of Settleline</div>
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
              What Indians around the globe say about Settleline
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Read authentic reviews from Indians around the globe who have trusted 
              Settleline for their cross-border tax planning and financial transition needs.
            </p>
            
            {/* Google Rating Badge */}
            <div className="flex justify-center mb-8">
              <GoogleRatingBadge />
            </div>
            
            {/* Read on Google Button */}
            <Button asChild size="lg">
              <Link href="https://share.google/aqatYAre363d8pImv" target="_blank" rel="noopener noreferrer">
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
