import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  quote: string
  author: string
  role?: string
  company?: string
  avatar?: string
  className?: string
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatar,
  className
}: TestimonialCardProps) {
  return (
    <Card className={`h-full ${className}`}>
      <CardContent className="p-6">
        <blockquote className="text-body-lg mb-6">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <div className="flex items-center space-x-3">
          {avatar && (
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-sm font-semibold text-primary">
                {author.charAt(0)}
              </span>
            </div>
          )}
          <div>
            <div className="font-semibold text-sm">{author}</div>
            {(role || company) && (
              <div className="text-xs text-muted-foreground">
                {role && company ? `${role} at ${company}` : role || company}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
