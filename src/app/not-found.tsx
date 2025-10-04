import Link from 'next/link'
import { Container } from '@/components/layout/container'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <Container className="py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-h1 mb-4">Page Not Found</h1>
        <p className="text-body-lg text-muted-foreground mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        
        <div className="space-y-4">
          <h2 className="text-h3">Quick Links</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/">Go Home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/tools/free-return-to-india-planner">Free Planner</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/services/return-to-india-financial-planning/">Our Services</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/blog">Blog</Link>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}
