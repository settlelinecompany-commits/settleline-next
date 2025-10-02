import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { NAVIGATION } from "@/lib/constants"
import { ServicesDropdown } from "./services-dropdown"
import { UserMenu } from "@/components/auth/user-menu"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/images/logos/settleline-logo.webp" 
                alt="Settleline" 
                width={180} 
                height={80}
                className="h-8 w-auto"
              />
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              {NAVIGATION.map((item) => (
                item.name === "Services" ? (
                  <ServicesDropdown key={item.name} />
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-body-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <UserMenu />
            <Button asChild>
              <Link href="/book">Book Consultation</Link>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}
