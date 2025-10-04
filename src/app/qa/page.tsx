import { Container } from "@/components/layout/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { generateSEO } from "@/lib/seo";
import { getBlogPosts, getServices } from "@/lib/content";
import { ENV } from "@/lib/env";
import Link from "next/link";

export const metadata = generateSEO({
  title: "QA Dashboard",
  description: "Quality assurance dashboard for testing and validation.",
  noindex: true,
});

export default function QAPage() {
  if (ENV.isProduction) {
    return (
      <Container className="py-16">
        <div className="text-center">
          <h1 className="text-h1 mb-4">QA Dashboard Not Available</h1>
          <p className="text-muted-foreground">This page is only available in staging environments.</p>
        </div>
      </Container>
    );
  }

  const blogPosts = getBlogPosts();
  const services = getServices();
  
  const routes = [
    { name: "Home", href: "/", description: "Main landing page" },
    { name: "Services", href: "/services", description: "Services overview" },
    { name: "Blog", href: "/blog", description: "Blog listing" },
    { name: "Planner", href: "/tools/free-return-to-india-planner", description: "RNOR planner tool" },
    { name: "Book", href: "/#services", description: "Consultation booking" },
    { name: "About", href: "/about", description: "About page" },
    { name: "Privacy", href: "/legal/privacy", description: "Privacy policy" },
    { name: "Thanks", href: "/thanks", description: "Thank you page" },
  ];

  return (
    <Container className="py-16">
      <div className="space-y-8">
        <div>
          <h1 className="text-h1 mb-4">QA Dashboard</h1>
          <div className="flex items-center space-x-4 mb-6">
            <Badge variant={ENV.noindex ? "destructive" : "default"}>
              {ENV.noindex ? "Noindex" : "Indexed"}
            </Badge>
            <Badge variant={ENV.analyticsEnabled ? "default" : "secondary"}>
              Analytics: {ENV.analyticsEnabled ? "Enabled" : "Disabled"}
            </Badge>
            <Badge variant="outline">
              Environment: {ENV.isStaging ? "Staging" : "Development"}
            </Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Content Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Blog Posts</h3>
                <p className="text-muted-foreground">
                  {blogPosts.length} published posts
                  {blogPosts.length > 0 && (
                    <span className="ml-2">
                      ({blogPosts.filter(p => p.draft).length} drafts)
                    </span>
                  )}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Services</h3>
                <p className="text-muted-foreground">
                  {services.length} published services
                  {services.length > 0 && (
                    <span className="ml-2">
                      ({services.filter(s => s.draft).length} drafts)
                    </span>
                  )}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Environment Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">SEO</h3>
                <p className="text-muted-foreground">
                  {ENV.noindex ? "Noindex enabled (staging)" : "Indexed (production)"}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Analytics</h3>
                <p className="text-muted-foreground">
                  {ENV.analyticsEnabled ? "Enabled" : "Disabled (staging/preview)"}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Site URL</h3>
                <p className="text-muted-foreground text-sm break-all">
                  {ENV.siteUrl}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Key Routes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {routes.map((route) => (
                <div key={route.href} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <Link 
                      href={route.href}
                      className="font-medium hover:text-primary transition-colors"
                    >
                      {route.name}
                    </Link>
                    <p className="text-sm text-muted-foreground">{route.description}</p>
                  </div>
                  <Badge variant="outline">
                    <Link href={route.href} className="text-xs">
                      Test →
                    </Link>
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Content Links</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Blog Posts</h3>
                {blogPosts.length > 0 ? (
                  <div className="space-y-2">
                    {blogPosts.map((post) => (
                      <div key={post.slug} className="flex items-center justify-between p-2 border rounded">
                        <Link 
                          href={`/blog/${post.slug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {post.title}
                        </Link>
                        <Badge variant="outline" className="text-xs">
                          {post.readTime}
                        </Badge>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">No blog posts found</p>
                )}
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Services</h3>
                {services.length > 0 ? (
                  <div className="space-y-2">
                    {services.map((service) => (
                      <div key={service.slug} className="flex items-center justify-between p-2 border rounded">
                        <Link 
                          href={`/services/${service.slug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {service.title}
                        </Link>
                        {service.priceFrom && (
                          <Badge variant="outline" className="text-xs">
                            From {service.priceFrom}
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">No services found</p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
