"use client";

import { Container } from "@/components/layout/container";

interface TrustedByTickerProps {
  logos?: Array<{
    name: string;
    src: string;
    alt: string;
  }>;
}

export function TrustedByTicker({ logos }: TrustedByTickerProps) {
  // Default logos - replace with your actual logo files
  const defaultLogos = [
    { name: "Apple", src: "/images/logos/apple.webp", alt: "Apple Inc." },
    { name: "Cognizant", src: "/images/logos/microsoft.webp", alt: "Microsoft Inc." },
    { name: "Amazon", src: "/images/logos/amazon.webp", alt: "Amazon" },
    { name: "JPMorgan Chase", src: "/images/logos/jpmorganchase.webp", alt: "JPMorgan Chase & Co." },
    { name: "Meta", src: "/images/logos/meta.webp", alt: "Meta Platforms" },
    { name: "Oracle", src: "/images/logos/oracle.webp", alt: "Oracle Corporation" },
    { name: "TCS", src: "/images/logos/tcs.webp", alt: "Tata Consultancy Services" },
    { name: "Walmart", src: "/images/logos/walmart.webp", alt: "Walmart Inc." },
  ];

  const logoList = logos || defaultLogos;

  return (
    <section className="py-6 bg-muted/20 border-y border-border">
      <Container>
        <div className="text-center mb-6">
          <p className="text-sm font-bold text-muted-foreground uppercase tracking-wide">
            Trusted by businesses & professionals from top global companies
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Scrolling container */}
          <div className="flex space-x-12 animate-scroll hover:pause-animation">
            {/* First set of logos */}
            {logoList.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <div className="w-32 h-16 bg-white rounded-lg flex items-center justify-center border border-border/50 p-2">
                  <img 
                    src={logo.src} 
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<span class="text-xs font-medium text-muted-foreground">${logo.name}</span>`;
                      }
                    }}
                  />
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {logoList.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <div className="w-32 h-16 bg-white rounded-lg flex items-center justify-center border border-border/50 p-2">
                  <img 
                    src={logo.src} 
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<span class="text-xs font-medium text-muted-foreground">${logo.name}</span>`;
                      }
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
