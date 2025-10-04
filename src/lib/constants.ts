export const SITE_CONFIG = {
  name: "Settleline",
  description: "Expert tax and financial planning for US-India cross-border professionals",
  url: process.env.NODE_ENV === "production" 
    ? "https://settleline.com" 
    : "https://settleline-staging.vercel.app",
  ogImage: "/og-image.jpg",
  links: {
    twitter: "https://twitter.com/settleline",
    github: "https://github.com/settleline",
  },
}

export const NAVIGATION = [
  { name: "Services", href: "/services" },
  { name: "Resources", href: "/resources" },
]

export const FOOTER_LINKS = {
  // Top row - Main services
  services: [
    { name: "Return to India Planning", href: "/services/return-to-india-financial-planning" },
    { name: "Property & Real Estate Advisory", href: "/services/property-real-estate-advisory" },
    { name: "Repatriation & Money Movement", href: "/services/repatriation-money-movement" },
    { name: "Business & Hiring Structures", href: "/services/business-hiring-structures" },
  ],
  
  // Top row - Resources & tools
  resources: [
    { name: "Blog & Articles", href: "/blog" },
    { name: "Free RNOR Planner", href: "/tools/free-return-to-india-planner" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "FAQ", href: "/qa" },
  ],
  
  // Top row - Support & help
  support: [
    { name: "Contact Support", href: "/contact" },
    { name: "Book Consultation", href: "/#services-grid" },
    { name: "Meet Our Experts", href: "/experts" },
    { name: "Client Reviews", href: "/reviews" },
  ],
  
  // Top row - Company info
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/experts" },
    { name: "Success Stories", href: "/case-studies" },
    { name: "Careers", href: "/careers" },
  ],
  
  // Bottom row - Tax tools & calculators
  tools: [
    { name: "RNOR Calculator", href: "/tools/free-return-to-india-planner" },
    { name: "Tax Planning Guide", href: "/blog" },
    { name: "Property Tax Calculator", href: "/tools/property-tax-calculator" },
    { name: "Repatriation Planner", href: "/tools/repatriation-planner" },
  ],
  
  // Bottom row - Legal & compliance
  legal: [
    { name: "Privacy Policy", href: "/legal/privacy" },
    { name: "Terms of Service", href: "/legal/terms" },
    { name: "Disclaimer", href: "/legal/disclaimer" },
    { name: "Cookie Policy", href: "/legal/cookies" },
  ],
  
  // Bottom row - Quick links
  quickLinks: [
    { name: "Tax Deadlines", href: "/blog/tax-deadlines" },
    { name: "Form 67 Guide", href: "/blog/form-67-guide-nri" },
    { name: "RNOR Rules", href: "/blog/rnor-rules" },
    { name: "DTAA Benefits", href: "/blog/dtaa-benefits" },
  ],
  
  // Bottom row - Social & community
  social: [
    { name: "LinkedIn", href: "https://linkedin.com/company/settleline" },
    { name: "Twitter", href: "https://twitter.com/settleline" },
    { name: "YouTube", href: "https://youtube.com/@settleline" },
    { name: "Newsletter", href: "/newsletter" },
  ],
} as const
