import { Hero } from "@/components/blocks/hero";
import { Container } from "@/components/layout/container";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Privacy Policy",
  description: "Learn how Settleline protects your privacy and handles your personal information.",
  noindex: true,
});

export default function PrivacyPage() {
  return (
    <>
      <Hero
        title="Privacy Policy"
        subtitle="How we protect your information"
        description="Your privacy is important to us. Learn how we collect, use, and protect your personal information."
      />
      
      <Container className="py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-h2 mb-4">Information We Collect</h2>
            <p className="text-body-lg text-muted-foreground">
              We collect information you provide directly to us, such as when you create an account, 
              book a consultation, or contact us for support.
            </p>
          </div>
          
          <div>
            <h2 className="text-h2 mb-4">How We Use Your Information</h2>
            <p className="text-body-lg text-muted-foreground">
              We use the information we collect to provide, maintain, and improve our services, 
              communicate with you, and ensure the security of our platform.
            </p>
          </div>
          
          <div>
            <h2 className="text-h2 mb-4">Information Sharing</h2>
            <p className="text-body-lg text-muted-foreground">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy.
            </p>
          </div>
          
          <div>
            <h2 className="text-h2 mb-4">Data Security</h2>
            <p className="text-body-lg text-muted-foreground">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>
          
          <div>
            <h2 className="text-h2 mb-4">Contact Us</h2>
            <p className="text-body-lg text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at 
              <a href="mailto:privacy@settleline.com" className="text-primary hover:underline">
                privacy@settleline.com
              </a>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
