'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Container } from '@/components/layout/container'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <Container className="py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-h1 mb-4">Something went wrong!</h1>
        <p className="text-body-lg text-muted-foreground mb-8">
          We&apos;re sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset}>
            Try again
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">Go Home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/book">Contact Support</Link>
          </Button>
        </div>
      </div>
    </Container>
  )
}
