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
  // Default placeholder logos if none provided
  const defaultLogos = [
    { name: "TechCorp", src: "/api/placeholder/120/60", alt: "TechCorp" },
    { name: "GlobalTech", src: "/api/placeholder/120/60", alt: "GlobalTech" },
    { name: "InnovateLabs", src: "/api/placeholder/120/60", alt: "InnovateLabs" },
    { name: "DataFlow", src: "/api/placeholder/120/60", alt: "DataFlow" },
    { name: "CloudSync", src: "/api/placeholder/120/60", alt: "CloudSync" },
    { name: "NextGen", src: "/api/placeholder/120/60", alt: "NextGen" },
    { name: "FutureSoft", src: "/api/placeholder/120/60", alt: "FutureSoft" },
    { name: "SmartSys", src: "/api/placeholder/120/60", alt: "SmartSys" },
  ];

  const logoList = logos || defaultLogos;

  return (
    <section className="py-8 bg-muted/20 border-y border-border">
      <Container>
        <div className="text-center mb-6">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            Trusted by leading companies
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
                <div className="w-32 h-16 bg-muted rounded-lg flex items-center justify-center border border-border/50">
                  <span className="text-xs font-medium text-muted-foreground">
                    {logo.name}
                  </span>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {logoList.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <div className="w-32 h-16 bg-muted rounded-lg flex items-center justify-center border border-border/50">
                  <span className="text-xs font-medium text-muted-foreground">
                    {logo.name}
                  </span>
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
