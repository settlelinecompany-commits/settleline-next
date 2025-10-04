import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { generateSEO } from "@/lib/seo"
import Image from "next/image"

export const metadata = generateSEO({
  title: "Meet Our Tax Experts",
  description: "Our team of qualified CPAs, tax advisors, and financial specialists with deep expertise in cross-border taxation and RNOR planning.",
})

export default function ExpertsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="py-16 lg:py-20 bg-primary">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Meet Our Tax Experts
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Our team of qualified CPAs, tax advisors, and financial specialists brings decades of combined experience in US-India cross-border taxation, RNOR planning, and financial transition strategies.
            </p>
          </div>
        </Container>
      </Section>

      {/* Experts Section */}
      <Section className="py-16 lg:py-20">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Expert 1 */}
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32 rounded-full overflow-hidden bg-muted/30">
                  <div className="flex items-center justify-center h-full">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  [Expert Name 1]
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    [Expert bio paragraph 1 - experience and qualifications]
                  </p>
                  <p>
                    [Expert bio paragraph 2 - specific expertise and achievements]
                  </p>
                  <p>
                    [Expert bio paragraph 3 - notable accomplishments and client success stories]
                  </p>
                </div>
              </div>
            </div>

            {/* Expert 2 */}
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32 rounded-full overflow-hidden bg-muted/30">
                  <div className="flex items-center justify-center h-full">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  [Expert Name 2]
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    [Expert bio paragraph 1 - experience and qualifications]
                  </p>
                  <p>
                    [Expert bio paragraph 2 - specific expertise and achievements]
                  </p>
                  <p>
                    [Expert bio paragraph 3 - notable accomplishments and client success stories]
                  </p>
                </div>
              </div>
            </div>

            {/* Expert 3 */}
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32 rounded-full overflow-hidden bg-muted/30">
                  <div className="flex items-center justify-center h-full">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  [Expert Name 3]
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    [Expert bio paragraph 1 - experience and qualifications]
                  </p>
                  <p>
                    [Expert bio paragraph 2 - specific expertise and achievements]
                  </p>
                  <p>
                    [Expert bio paragraph 3 - notable accomplishments and client success stories]
                  </p>
                </div>
              </div>
            </div>

            {/* Expert 4 */}
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32 rounded-full overflow-hidden bg-muted/30">
                  <div className="flex items-center justify-center h-full">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  [Expert Name 4]
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    [Expert bio paragraph 1 - experience and qualifications]
                  </p>
                  <p>
                    [Expert bio paragraph 2 - specific expertise and achievements]
                  </p>
                  <p>
                    [Expert bio paragraph 3 - notable accomplishments and client success stories]
                  </p>
                </div>
              </div>
            </div>

            {/* Expert 5 */}
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32 rounded-full overflow-hidden bg-muted/30">
                  <div className="flex items-center justify-center h-full">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  [Expert Name 5]
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    [Expert bio paragraph 1 - experience and qualifications]
                  </p>
                  <p>
                    [Expert bio paragraph 2 - specific expertise and achievements]
                  </p>
                  <p>
                    [Expert bio paragraph 3 - notable accomplishments and client success stories]
                  </p>
                </div>
              </div>
            </div>

            {/* Expert 6 */}
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32 rounded-full overflow-hidden bg-muted/30">
                  <div className="flex items-center justify-center h-full">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  [Expert Name 6]
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    [Expert bio paragraph 1 - experience and qualifications]
                  </p>
                  <p>
                    [Expert bio paragraph 2 - specific expertise and achievements]
                  </p>
                  <p>
                    [Expert bio paragraph 3 - notable accomplishments and client success stories]
                  </p>
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
                <a
                href="/#services"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors"
              >
                Book a Consultation
              </a>
              <a
                href="/tools/free-return-to-india-planner"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-foreground bg-white border border-border hover:bg-muted rounded-lg transition-colors"
              >
                Start Free Assessment
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
