import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import Image from "next/image";

export function PlannerShowcase() {
  return (
    <Section className="py-16 lg:py-24 bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Mobile Mockup */}
          <div className="order-2 lg:order-1">
            <div className="relative max-w-sm mx-auto">
              {/* Phone Mockup */}
              <div className="relative bg-white rounded-[2.5rem] p-2 shadow-2xl">
                <div className="bg-gray-900 rounded-[2rem] p-4 h-[600px] flex flex-col">
                  {/* Phone Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="flex gap-2">
                      <div className="w-6 h-4 bg-gray-600 rounded-sm"></div>
                      <div className="w-6 h-4 bg-gray-600 rounded-sm"></div>
                    </div>
                    <div className="w-8 h-4 bg-gray-600 rounded-sm"></div>
                  </div>
                  
                  {/* App Content */}
                  <div className="flex-1 bg-white rounded-2xl p-6">
                    {/* Icons Row */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                      </div>
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Main Text */}
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      Let&apos;s connect to your employer to import your W-2
                    </h3>
                    
                    {/* Form Fields */}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">
                          Box d control number
                        </label>
                        <div className="w-full h-10 bg-gray-100 rounded-lg border border-gray-200"></div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">
                          Box 1 amount
                        </label>
                        <div className="w-full h-10 bg-gray-100 rounded-lg border border-gray-200"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <div className="max-w-lg">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
                Ditch the paperwork. Tax docs and data imported for you.
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Snap a photo, upload your docs, or import them directly from your employer or financial institution. Our free Return to India planner makes tax preparation effortless.
              </p>
              <Button size="lg" className="text-lg px-8 py-4">
                Start my taxes
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
