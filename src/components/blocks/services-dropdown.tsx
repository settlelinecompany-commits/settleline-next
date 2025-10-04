"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const services = [
  {
    title: "We plan your return to India",
    href: "/services/return-to-india-financial-planning/",
    description: "Get a complete roadmap for your financial transition with tax optimization and retirement planning."
  },
  {
    title: "We protect your Indian property", 
    href: "/services/property-real-estate-advisory/",
    description: "Buy, sell, or manage Indian property with full tax efficiency and compliance."
  },
  {
    title: "We move your money safely",
    href: "/services/repatriation-money-movement/", 
    description: "Repatriate funds across borders legally and efficiently with expert guidance."
  },
  {
    title: "We set up your business and hire",
    href: "/services/business-hiring-structures/",
    description: "Establish your business in India and set up compliant offshore hiring structures to work with global talent."
  }
];

export function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-body-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <span>Services</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-[700px] bg-white border border-border/20 rounded-lg shadow-lg z-50">
          <div className="p-6">
            <div className="grid grid-cols-3 gap-6">
              {/* Left Column - 4 Service Cards (2/3 width) */}
              <div className="col-span-2">
                <h3 className="text-base font-semibold text-foreground mb-4">
                  Expert services for cross-border professionals
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="block p-3 rounded-md hover:bg-muted/20 transition-colors group"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="font-medium text-sm text-foreground group-hover:text-primary transition-colors mb-1">
                        {service.title}
                      </div>
                      <div className="text-xs text-muted-foreground leading-relaxed">
                        {service.description}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Right Column - Case Studies (1/3 width) */}
              <div className="col-span-1">
                <h3 className="text-base font-semibold text-foreground mb-4">Success Stories</h3>
                <div className="space-y-4">
                  <Link
                    href="/case-studies/microsoft-manager-save-lakhs"
                    className="block p-2 rounded-md hover:bg-muted/20 transition-colors group"
                    onClick={() => setIsOpen(false)}
                  >
                    <h4 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors mb-1">Microsoft Manager</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Saved ₹30L+ through strategic RNOR planning and tax optimization.
                    </p>
                  </Link>
                  <Link
                    href="/case-studies/customer-story-business-setup-india-offshore-compliance"
                    className="block p-2 rounded-md hover:bg-muted/20 transition-colors group"
                    onClick={() => setIsOpen(false)}
                  >
                    <h4 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors mb-1">Tech Entrepreneur</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Set up compliant business structure with offshore hiring capabilities.
                    </p>
                  </Link>
                  <Link
                    href="/case-studies/customer-story-buying-property-investing-india"
                    className="block p-2 rounded-md hover:bg-muted/20 transition-colors group"
                    onClick={() => setIsOpen(false)}
                  >
                    <h4 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors mb-1">Property Owner</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Optimized property sale and repatriated funds efficiently.
                    </p>
                  </Link>
                </div>
                <div className="mt-4">
                  <Link
                    href="/case-studies"
                    className="text-xs font-medium text-primary hover:underline inline-flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    See all case studies →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
