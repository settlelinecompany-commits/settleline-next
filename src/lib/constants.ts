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
  services: [
    { name: "Tax Planning", href: "/services/tax-planning" },
    { name: "RNOR Planning", href: "/services/rnor-planning" },
    { name: "Investment Advisory", href: "/services/investment-advisory" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Free Planner", href: "/tools/free-return-to-india-planner" },
    { name: "FAQ", href: "/faq" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Book Consultation", href: "/book" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/legal/privacy" },
    { name: "Terms of Service", href: "/legal/terms" },
  ],
} as const
