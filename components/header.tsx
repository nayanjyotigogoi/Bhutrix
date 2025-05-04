"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { useTranslation } from "@/components/language-provider"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { t } = useTranslation()

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.products"), href: "/products" },
    { name: t("nav.ai_automation"), href: "/ai-automation" },
    { name: t("nav.portfolio"), href: "/portfolio" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.testimonials"), href: "/testimonials" },
    { name: t("nav.contact"), href: "/contact" },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Handle scroll events to add shadow to header when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`sticky-header transition-shadow duration-300 ${isScrolled ? "shadow-md" : ""}`} role="banner">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
  <Link href="/" className="flex items-center space-x-2 focus-ring rounded-md" aria-label="Bhutrix Home">
    {/* Logo Image */}
    <img
      src="Bhutrix-icon.png"  // Replace with the correct path to your logo
      alt="Bhutrix Logo"
      className="w-10 h-10 rounded-full object-cover"  // Adjust the size and rounding
    />
    {/* Company Name */}
    <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
      Bhutrix
    </span>
  </Link>
</div>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6" role="navigation" aria-label="Main Navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary focus-ring rounded-md px-2 py-1 ${
                  pathname === item.href ? "text-primary" : "text-muted-foreground"
                }`}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <LanguageToggle />

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden focus-ring"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="space-y-1 px-4 pb-3 pt-2">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded-md px-3 py-2 text-base font-medium transition-colors focus-ring ${
                pathname === item.href
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
              onClick={() => setIsMenuOpen(false)}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
