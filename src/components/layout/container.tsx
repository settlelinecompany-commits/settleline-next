import { cn } from "@/lib/utils"

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: "sm" | "md" | "lg" | "xl" | "full"
}

export function Container({ 
  children, 
  className, 
  size = "lg" 
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        {
          "max-w-2xl": size === "sm",
          "max-w-4xl": size === "md", 
          "max-w-6xl": size === "lg",
          "max-w-7xl": size === "xl",
          "max-w-none": size === "full",
        },
        className
      )}
    >
      {children}
    </div>
  )
}
