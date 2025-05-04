"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/components/language-provider"
import { ArrowRight, ChevronRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const { t } = useTranslation()
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: t("hero.slide1.title"),
      description: t("hero.slide1.description"),
      image: "hero-slide.jpg",
    },
    {
      title: t("hero.slide2.title"),
      description: t("hero.slide2.description"),
      image: "hero-slide2.jpg",
    },
    {
      title: t("hero.slide3.title"),
      description: t("hero.slide3.description"),
      image: "hero-slide3.jpg"
      
      ,
    }
    
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="relative overflow-hidden rounded-lg mt-8">
      <div className="relative h-[500px] md:h-[600px] w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50 z-10" />
            <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center z-20">
              <div className="container mx-auto px-4">
                <div className="max-w-xl">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">{slide.title}</h1>
                  <p className="text-lg md:text-xl mb-8 animate-fade-in">{slide.description}</p>
                  <div className="flex flex-wrap gap-4 animate-fade-in">
                  <Link href="/contact">
                      <Button size="lg" className="gap-2">
                        {t("hero.get_started")}
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/services">
                      <Button size="lg" variant="outline" className="gap-2">
                        {t("hero.learn_more")}
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-primary" : "bg-primary/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
