import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

interface Review {
  id: number;
  title: string;
  text: string;
  reviewer: string;
  location: string;
  product: string;
  rating: number;
}

interface CustomerReviewsProps {
  overallRating?: number;
  totalReviews?: number;
  reviewsLink?: string;
  reviews?: Review[];
}

const defaultReviews: Review[] = [
  {
    id: 1,
    title: "Saved me lakhs with RNOR planning",
    text: "I had RSUs from my US company and was scared of double taxation. Settleline not only helped me file Form 67 but also planned my vesting in a way that saved me lakhs. Couldn't have managed it on my own.",
    reviewer: "Pawan",
    location: "California, USA",
    product: "RNOR Tax Planning",
    rating: 5
  },
  {
    id: 2,
    title: "Cross-border expertise that actually works",
    text: "After talking to 3-4 regular CAs in India, I realized none of them understood NRI tax in depth. Settleline stood out because they actually specialize in cross-border tax cases. They solved my tax mess in weeks.",
    reviewer: "Kamal",
    location: "London, UK",
    product: "Comprehensive Tax Planning",
    rating: 5
  },
  {
    id: 3,
    title: "Avoided Schedule FA penalties completely",
    text: "I was scared about Schedule FA penalties because I had multiple US bank accounts. Settleline guided me through disclosures properly and avoided unnecessary fines. Worth every rupee!",
    reviewer: "Beetu",
    location: "Toronto, Canada",
    product: "Compliance & Filing",
    rating: 5
  }
];

export function CustomerReviews({ 
  overallRating = 4.9, 
  totalReviews = 39, 
  reviewsLink = "/reviews",
  reviews = defaultReviews 
}: CustomerReviewsProps) {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="half-star">
              <stop offset="60%" stopColor="currentColor" />
              <stop offset="60%" stopColor="#E5E7EB" />
            </linearGradient>
          </defs>
          <path fill="url(#half-star)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    return stars;
  };

  return (
    <Section className="py-12 lg:py-16 bg-background">
      <Container>
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Read why our Settleline customers love our services
          </h2>
          
          {/* Overall Rating */}
          <div className="mb-4">
            <p className="text-lg text-muted-foreground mb-2">
              Rated {overallRating} out of 5 stars by our customers.
            </p>
            <div className="flex justify-center items-center gap-1 mb-2">
              {renderStars(overallRating)}
            </div>
            <a 
              href={reviewsLink}
              className="text-primary hover:text-primary/80 underline text-sm"
            >
              Google Reviews of Settleline
            </a>
            <p className="text-xs text-muted-foreground mt-2">
              Star rating is aggregated from ratings across all Settleline services.
            </p>
          </div>
        </div>
        
        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-2xl p-6 shadow-lg border border-border/20">
              <div className="flex items-center gap-1 mb-4">
                {renderStars(5)}
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {review.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                {review.text}
              </p>
              
              <div className="text-sm">
                <p className="font-medium text-foreground">
                  {review.reviewer}, {review.location}
                </p>
                <p className="text-muted-foreground">
                  {review.product}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </Container>
    </Section>
  );
}
