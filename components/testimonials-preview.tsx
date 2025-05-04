"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Quote } from "lucide-react"
import { useTranslation } from "@/components/language-provider"
import { getTestimonials } from "@/lib/testimonials"
import Link from "next/link"

export function TestimonialsPreview() {
  const { t } = useTranslation()
  const testimonials = getTestimonials()
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="my-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">{t("testimonials.title")}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">{t("testimonials.description")}</p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                <Card className="bg-card shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full object-cover border-4 border-background"
                        />
                        <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground p-1 rounded-full">
                          <Quote className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-center mb-6">
                      <p className="text-lg italic">"{testimonial.text}"</p>
                    </blockquote>
                    <div className="text-center">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-primary/30"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link href="/testimonials" passHref>
          <Button className="gap-2">
            {t("testimonials.view_all")}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
