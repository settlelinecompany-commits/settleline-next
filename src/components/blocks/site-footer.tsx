import Link from "next/link"
import { Container } from "@/components/layout/container"
import { FOOTER_LINKS } from "@/lib/constants"

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/50">
      <Container>
        <div className="py-12">
          {/* Top Row - Main Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-body font-semibold text-foreground">Services</h4>
              <ul className="space-y-2">
                {FOOTER_LINKS.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Resources */}
            <div className="space-y-4">
              <h4 className="text-body font-semibold text-foreground">Resources</h4>
              <ul className="space-y-2">
                {FOOTER_LINKS.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Support */}
            <div className="space-y-4">
              <h4 className="text-body font-semibold text-foreground">Support</h4>
              <ul className="space-y-2">
                {FOOTER_LINKS.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Company */}
            <div className="space-y-4">
              <h4 className="text-body font-semibold text-foreground">Company</h4>
              <ul className="space-y-2">
                {FOOTER_LINKS.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Separator */}
          <div className="border-t border-border/50 mb-8"></div>

          {/* Bottom Row - Tools, Legal, Quick Links, Social */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Tax Tools */}
            <div className="space-y-4">
              <h4 className="text-body font-semibold text-foreground">Tax Tools</h4>
              <ul className="space-y-2">
                {FOOTER_LINKS.tools.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Legal */}
            <div className="space-y-4">
              <h4 className="text-body font-semibold text-foreground">Legal</h4>
              <ul className="space-y-2">
                {FOOTER_LINKS.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-body font-semibold text-foreground">Quick Links</h4>
              <ul className="space-y-2">
                {FOOTER_LINKS.quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Social */}
            <div className="space-y-4">
              <h4 className="text-body font-semibold text-foreground">Connect</h4>
              <ul className="space-y-2">
                {FOOTER_LINKS.social.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-muted-foreground hover:text-foreground transition-colors"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Final Separator */}
          <div className="border-t border-border/50 mb-8"></div>
          
          {/* Brand & Copyright */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
            {/* Brand Section */}
            <div className="space-y-2">
              <h3 className="text-h4 font-semibold text-foreground">Settleline</h3>
              <p className="text-body-sm text-muted-foreground max-w-md">
                Expert tax and financial planning for cross-border professionals. 
                Your trusted partner for seamless global transitions.
              </p>
            </div>
            
            {/* Copyright & Legal */}
            <div className="text-right space-y-2">
              <p className="text-body-sm text-muted-foreground">
                © 2024 Settleline. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground">
                Settleline is a registered trademark. Terms and conditions, features, 
                support, pricing, and service options subject to change without notice.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}