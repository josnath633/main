"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Chambres", href: "/rooms" },
    { name: "Services", href: "/services" },
    { name: "Restaurant", href: "/dining" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 text-2xl font-bold">
            lys d or
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setIsMenuOpen(true)}
          >
            <span className="sr-only">Ouvrir le menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold leading-6 ${
                pathname === item.href ? "text-primary" : "text-foreground"
              } hover:text-primary transition-colors`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/rooms">
            <Button>Réserver</Button>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-background">
          <div className="fixed inset-0 flex">
            <div className="w-full">
              <div className="flex h-16 items-center justify-between px-4">
                <Link href="/" className="-m-1.5 p-1.5 text-2xl font-bold">
                  lys d or
                </Link>
                <button type="button" className="-m-2.5 rounded-md p-2.5" onClick={() => setIsMenuOpen(false)}>
                  <span className="sr-only">Fermer le menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root px-6">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-4 text-base font-semibold leading-7 ${
                        pathname === item.href ? "text-primary" : "text-foreground"
                      } hover:bg-muted`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/rooms"
                    className="-mx-3 block rounded-lg px-3 py-2.5"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button className="w-full">Réserver</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

