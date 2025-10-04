import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { generateSEO } from "@/lib/seo"
import Link from "next/link"

export const metadata = generateSEO({
  title: "Meet Our Cross-Border Experts",
  description: "Our team of qualified CAs, CPAs, and financial specialists with deep expertise in cross-border taxation, RNOR planning, and global financial transitions.",
})

export default function ExpertsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="py-16 lg:py-20 bg-primary">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Meet Our Cross-Border Experts
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Our team of qualified CAs, CPAs, and financial specialists with deep expertise in cross-border taxation, RNOR planning, and global financial transitions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#services-grid"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-primary bg-white hover:bg-white/90 rounded-lg transition-colors"
              >
                Book a Consultation
              </Link>
              <Link 
                href="/tools/free-return-to-india-planner"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-transparent border border-white hover:bg-white hover:text-primary rounded-lg transition-colors"
              >
                Start Free Assessment
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services Overview */}
      <Section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Expertise Across 4 Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Each expert specializes in specific areas of cross-border financial planning, ensuring you get the right expertise for your unique situation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-muted/20 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Return to India Planning</h3>
              <p className="text-sm text-muted-foreground">RNOR strategies, tax optimization, and transition planning</p>
            </div>
            <div className="text-center p-6 bg-muted/20 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Property & Real Estate</h3>
              <p className="text-sm text-muted-foreground">Property taxation, capital gains, and compliance</p>
            </div>
            <div className="text-center p-6 bg-muted/20 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Money Movement</h3>
              <p className="text-sm text-muted-foreground">Repatriation, FEMA compliance, and fund transfers</p>
            </div>
            <div className="text-center p-6 bg-muted/20 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Business & Hiring</h3>
              <p className="text-sm text-muted-foreground">Entity setup, compliance, and global structures</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Experts Section */}
      <Section className="py-16 lg:py-20">
        <Container>
          <div className="max-w-6xl mx-auto space-y-16">
            
            {/* Shalu - Return to India Planning */}
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32 rounded-full overflow-hidden bg-muted/30">
                  <div className="flex items-center justify-center h-full">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                    Shalu — Cross-Border Tax Strategist
                  </h2>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                    CA
                  </span>
                </div>
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    Return to India Planning Specialist
                  </span>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Helps you plan your return to India end-to-end. Builds RNOR and DTAA roadmaps, gets your foreign income correctly taxed, and ensures your ITR and Form 67 line up.
                  </p>
                  <p>
                    Also anchors GST and company-law compliance when you set up or repatriate funds.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Core Outcomes:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Clean, penalty-free return-to-India filing</li>
                      <li>• Double-tax avoidance implemented</li>
                      <li>• GST audit ready without chaos</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Monu - Property & Real Estate */}
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32 rounded-full overflow-hidden bg-muted/30">
                  <div className="flex items-center justify-center h-full">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                    Monu — Audit & Direct-Tax Specialist
                  </h2>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                    CA
                  </span>
                </div>
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    Property & Real Estate Specialist
                  </span>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Protects your Indian property and domestic assets. Handles property-sale taxation, capital-gain calculations, and 15CA/CB certifications so that funds move out legally.
                  </p>
                  <p>
                    Also manages audits and scrutiny assessments for resident and returning NRIs.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Core Outcomes:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Sale-to-repatriation handled start to finish</li>
                      <li>• Zero-error TDS and refund recovery</li>
                      <li>• Fully compliant audit trail for property income</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Suneel - Compliance & Books */}
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32 rounded-full overflow-hidden bg-muted/30">
                  <div className="flex items-center justify-center h-full">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                    Suneel — Compliance & Books Advisor
                  </h2>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                    CA
                  </span>
                </div>
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                    Compliance & Audit Specialist
                  </span>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Keeps your filings airtight and books audit-ready. Specializes in TDS, internal audits, and tax reconciliations for individuals and mid-sized firms.
                  </p>
                  <p>
                    Clients go to him when they want every number to match before a major filing or sale.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Core Outcomes:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Smooth ITR filing season</li>
                      <li>• No audit red flags or mismatches</li>
                      <li>• Transparent compliance documentation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Yashbir - Legal & Litigation */}
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32 rounded-full overflow-hidden bg-muted/30">
                  <div className="flex items-center justify-center h-full">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                    Yashbir — Legal & Litigation Counsel
                  </h2>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                    Advocate
                  </span>
                </div>
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                    Legal & Dispute Resolution
                  </span>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Steps in when compliance meets conflict. Handles property and indirect-tax disputes, appeals, and departmental notices.
                  </p>
                  <p>
                    Represents clients before authorities and ensures legal closure on tax or title issues.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Core Outcomes:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Fast-tracked dispute resolution</li>
                      <li>• Peace of mind on complex GST/property cases</li>
                      <li>• Legal coordination with CAs for integrated closure</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Monu K. - Business & Hiring Structures */}
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32 rounded-full overflow-hidden bg-muted/30">
                  <div className="flex items-center justify-center h-full">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                    Monu K. — Structuring & Regulatory Expert
                  </h2>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                    CS
                  </span>
                </div>
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                    Business & Hiring Structures Specialist
                  </span>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Architects your entity setup, trust, or RBI workflow. Builds compliant company, LLP, or trust structures; manages FEMA, repatriation, and RBI approvals.
                  </p>
                  <p>
                    The go-to person when you need paperwork done right across multiple agencies.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Core Outcomes:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Compliant entity registration and maintenance</li>
                      <li>• RBI/FEMA clearances without back-and-forth</li>
                      <li>• Trust and society registrations on schedule</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* US CPA - Global Tax */}
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32 rounded-full overflow-hidden bg-muted/30">
                  <div className="flex items-center justify-center h-full">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                    US CPA — Global Tax & Equity Compensation Advisor
                  </h2>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                    CPA
                  </span>
                </div>
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    Global Tax & Equity Specialist
                  </span>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Manages the global side of your transition. Prepares expat final returns, FBAR, and Form 8938; aligns Form 67 credits with Indian filings.
                  </p>
                  <p>
                    Guides you through RSU, ESPP, and stock-sale taxation so nothing is double-taxed.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Core Outcomes:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Zero overlap between global & India tax</li>
                      <li>• Correct RSU/stock treatment across jurisdictions</li>
                      <li>• FBAR and treaty compliance done once, right</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* CFA - Investment & Repatriation */}
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32 rounded-full overflow-hidden bg-muted/30">
                  <div className="flex items-center justify-center h-full">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                    CFA — Investment & Repatriation Planner
                  </h2>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                    CFA
                  </span>
                </div>
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    Investment & Money Movement Specialist
                  </span>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Makes your money move safely and grow smartly. Plans 401(k) or brokerage liquidations, converts savings for India use, and designs tax-efficient repatriation strategies.
                  </p>
                  <p>
                    Also helps align portfolios for INR exposure post-return.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Core Outcomes:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Optimized 401(k)/brokerage withdrawals</li>
                      <li>• Lowest-tax repatriation route</li>
                      <li>• Balanced India vs global investment mix</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-16 bg-muted/30">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Ready to Work with Our Experts?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get personalized guidance from our qualified team of tax and financial specialists. Book a consultation to discuss your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#services-grid"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors"
              >
                Book a Consultation
              </Link>
              <Link 
                href="/tools/free-return-to-india-planner"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-foreground bg-white border border-border hover:bg-muted rounded-lg transition-colors"
              >
                Start Free Assessment
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}