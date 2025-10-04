import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  spacing?: "none" | "sm" | "md" | "lg" | "xl" | "2xl"
  background?: "default" | "muted" | "primary" | "secondary"
}

export function Section({ 
  children, 
  className, 
  id,
  spacing = "lg",
  background = "default"
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full",
        {
          "py-0": spacing === "none",
          "py-8": spacing === "sm",
          "py-12": spacing === "md",
          "py-16": spacing === "lg", 
          "py-20": spacing === "xl",
          "py-24": spacing === "2xl",
        },
        {
          "bg-background": background === "default",
          "bg-muted": background === "muted",
          "bg-primary text-primary-foreground": background === "primary",
          "bg-secondary text-secondary-foreground": background === "secondary",
        },
        className
      )}
    >
      {children}
    </section>
  )
}
