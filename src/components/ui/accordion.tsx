"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionItemProps {
  value: string
  children: React.ReactNode
}

interface AccordionTriggerProps {
  children: React.ReactNode
  className?: string
}

interface AccordionContentProps {
  children: React.ReactNode
  className?: string
}

const AccordionContext = React.createContext<{
  openItems: Set<string>
  toggleItem: (value: string) => void
}>({
  openItems: new Set(),
  toggleItem: () => {},
})

export function Accordion({ children }: { children: React.ReactNode }) {
  const [openItems, setOpenItems] = React.useState<Set<string>>(new Set())

  const toggleItem = React.useCallback((value: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(value)) {
        newSet.delete(value)
      } else {
        newSet.add(value)
      }
      return newSet
    })
  }, [])

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className="space-y-2">{children}</div>
    </AccordionContext.Provider>
  )
}

export function AccordionItem({ value, children }: AccordionItemProps) {
  return <div className="border rounded-lg">{children}</div>
}

export function AccordionTrigger({ children, className }: AccordionTriggerProps) {
  const { openItems, toggleItem } = React.useContext(AccordionContext)
  const isOpen = openItems.has(React.Children.toArray(children)[0] as string)

  return (
    <button
      className={cn(
        "flex w-full items-center justify-between p-4 text-left font-medium transition-all hover:bg-muted/50 [&[data-state=open]>svg]:rotate-180",
        className
      )}
      onClick={() => toggleItem(React.Children.toArray(children)[0] as string)}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </button>
  )
}

export function AccordionContent({ children, className }: AccordionContentProps) {
  const { openItems } = React.useContext(AccordionContext)
  const isOpen = openItems.has(React.Children.toArray(children)[0] as string)

  return (
    <div
      className={cn(
        "overflow-hidden transition-all",
        isOpen ? "animate-accordion-down" : "animate-accordion-up"
      )}
    >
      <div className={cn("p-4 pt-0", className)}>
        {children}
      </div>
    </div>
  )
}
