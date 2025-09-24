"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const serviceCategories = [
  {
    title: "Tax Filing & Compliance",
    services: [
      {
        title: "Indian Tax Filing",
        href: "/services/indian-tax-filing",
        description: "ITR preparation, DTAA guidance, capital gains optimization"
      },
      {
        title: "Notices Handling",
        href: "/services/notices-handling",
        description: "Tax notice responses and representation services"
      }
    ]
  },
  {
    title: "Tax Planning & Strategy",
    services: [
      {
        title: "Tax Consultancy Services", 
        href: "/services/tax-consultancy",
        description: "Cross-border tax planning and NRI tax strategy"
      },
      {
        title: "NRI Returning India Tax Plan",
        href: "/services/nri-returning-tax-plan",
        description: "Tax residency advisory and wealth structuring"
      }
    ]
  },
  {
    title: "Investment & Financial Services",
    services: [
      {
        title: "Investment Advisory",
        href: "/services/investment-advisory", 
        description: "Portfolio management and tax-efficient investing"
      },
      {
        title: "Repatriation of Funds",
        href: "/services/repatriation-of-funds",
        description: "NRO to NRE transfers and RBI compliance"
      }
    ]
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
        <div className="absolute top-full left-0 mt-2 w-96 bg-white border border-border/20 rounded-lg shadow-lg z-50">
          <div className="p-6">
            <div className="grid grid-cols-3 gap-6">
              {serviceCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-3">
                  <div className="pb-2 border-b border-border/20">
                    <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      {category.title}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <Link
                        key={serviceIndex}
                        href={service.href}
                        className="block p-2 rounded-md hover:bg-muted/30 transition-colors group"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1 leading-relaxed">
                          {service.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-border/20">
              <Link
                href="/services"
                className="block text-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                View All Services →
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
