"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
export function ResourcesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Hardcoded blog posts for now (can be made dynamic later)
  const featuredPosts = [
    {
      title: "Return to India Financial Checklist 2025",
      slug: "return-to-india-financial-checklist-2025",
      excerpt: "Complete guide to planning your financial transition back to India"
    },
    {
      title: "NRI US Home Sale: Eliminate Taxes",
      slug: "nri-us-home-sale-eliminate-taxes", 
      excerpt: "How to sell your US home tax-free as an NRI returning to India"
    }
  ];

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
        <span>Resources</span>
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
        <div className="absolute top-full left-0 mt-2 w-[600px] bg-white border border-border/20 rounded-lg shadow-lg z-50">
          <div className="p-6">
            <div className="grid grid-cols-3 gap-6">
              {/* Column 1: Tools */}
              <div>
                <h3 className="text-base font-semibold text-foreground mb-4">Tools</h3>
                <div className="space-y-3">
                  <Link
                    href="/tools/free-return-to-india-planner"
                    className="block p-3 rounded-md hover:bg-muted/20 transition-colors group"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="font-medium text-sm text-foreground group-hover:text-primary transition-colors mb-1">
                      Free Return to India Financial Planner
                    </div>
                    <div className="text-xs text-muted-foreground leading-relaxed">
                      Get a personalized roadmap for your financial transition to India
                    </div>
                  </Link>
                </div>
              </div>
              
              {/* Column 2: Blog */}
              <div>
                <h3 className="text-base font-semibold text-foreground mb-4">Blog</h3>
                <div className="space-y-3">
                  {featuredPosts.slice(0, 2).map((post, index) => (
                    <Link
                      key={index}
                      href={`/blog/${post.slug}`}
                      className="block p-3 rounded-md hover:bg-muted/20 transition-colors group"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="font-medium text-sm text-foreground group-hover:text-primary transition-colors mb-1">
                        {post.title}
                      </div>
                      <div className="text-xs text-muted-foreground leading-relaxed">
                        {post.excerpt}
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-4">
                  <Link
                    href="/blog"
                    className="text-xs font-medium text-primary hover:underline inline-flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    View all blog posts →
                  </Link>
                </div>
              </div>
              
              {/* Column 3: Case Studies */}
              <div>
                <h3 className="text-base font-semibold text-foreground mb-4">Case Studies</h3>
                <div className="space-y-3">
                  <Link
                    href="/case-studies/microsoft-manager-save-lakhs"
                    className="block p-3 rounded-md hover:bg-muted/20 transition-colors group"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="font-medium text-sm text-foreground group-hover:text-primary transition-colors mb-1">Microsoft Manager</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">
                      Saved ₹30L+ through strategic RNOR planning and tax optimization.
                    </div>
                  </Link>
                  <Link
                    href="/case-studies/customer-story-business-setup-india-offshore-compliance"
                    className="block p-3 rounded-md hover:bg-muted/20 transition-colors group"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="font-medium text-sm text-foreground group-hover:text-primary transition-colors mb-1">Tech Entrepreneur</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">
                      Set up compliant business structure with offshore hiring capabilities.
                    </div>
                  </Link>
                  <Link
                    href="/case-studies/customer-story-buying-property-investing-india"
                    className="block p-3 rounded-md hover:bg-muted/20 transition-colors group"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="font-medium text-sm text-foreground group-hover:text-primary transition-colors mb-1">Property Owner</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">
                      Optimized property sale and repatriated funds efficiently.
                    </div>
                  </Link>
                </div>
                <div className="mt-4">
                  <Link
                    href="/case-studies"
                    className="text-xs font-medium text-primary hover:underline inline-flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    View all case studies →
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
