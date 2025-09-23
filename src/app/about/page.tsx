import { Hero } from "@/components/blocks/hero";
import { Container } from "@/components/layout/container";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "About Settleline",
  description: "Learn about our mission to help US-India cross-border professionals navigate complex tax and financial planning challenges.",
});

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Settleline"
        subtitle="Your trusted partner in US-India transitions"
        description="We specialize in helping cross-border professionals navigate the complex world of US-India tax and financial planning."
      />
      
      <Container className="py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-h2 mb-4">Our Mission</h2>
            <p className="text-body-lg text-muted-foreground">
              To simplify the complex process of returning to India for US-based professionals. We provide expert guidance, 
              personalized strategies, and ongoing support to ensure your transition is smooth and financially optimized.
            </p>
          </div>
          
          <div>
            <h2 className="text-h2 mb-4">Our Expertise</h2>
            <p className="text-body-lg text-muted-foreground">
              Our team consists of certified tax professionals and financial advisors with deep expertise in both US and Indian tax laws. 
              We understand the unique challenges faced by cross-border professionals and provide tailored solutions for each client.
            </p>
          </div>
          
          <div>
            <h2 className="text-h2 mb-4">Why We Started Settleline</h2>
            <p className="text-body-lg text-muted-foreground">
              Having experienced the challenges of cross-border tax planning firsthand, we founded Settleline to provide the expert 
              guidance and support that we wished we had during our own transitions. We&apos;re committed to making this process as 
              smooth and beneficial as possible for our clients.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
