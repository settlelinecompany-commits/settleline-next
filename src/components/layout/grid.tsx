import { cn } from "@/lib/utils"

interface GridProps {
  children: React.ReactNode
  className?: string
  cols?: 1 | 2 | 3 | 4 | 5 | 6
  gap?: "none" | "sm" | "md" | "lg" | "xl"
}

export function Grid({ 
  children, 
  className, 
  cols = 3,
  gap = "lg"
}: GridProps) {
  return (
    <div
      className={cn(
        "grid",
        {
          "grid-cols-1": cols === 1,
          "grid-cols-1 md:grid-cols-2": cols === 2,
          "grid-cols-1 md:grid-cols-2 lg:grid-cols-3": cols === 3,
          "grid-cols-1 md:grid-cols-2 lg:grid-cols-4": cols === 4,
          "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5": cols === 5,
          "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6": cols === 6,
        },
        {
          "gap-0": gap === "none",
          "gap-4": gap === "sm",
          "gap-6": gap === "md",
          "gap-8": gap === "lg",
          "gap-12": gap === "xl",
        },
        className
      )}
    >
      {children}
    </div>
  )
}
