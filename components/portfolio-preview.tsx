"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useTranslation } from "@/components/language-provider"
import { getPortfolioItems } from "@/lib/portfolio"
import Link from "next/link"

export function PortfolioPreview() {
  const { t } = useTranslation()
  const portfolioItems = getPortfolioItems()
  const [visibleItems, setVisibleItems] = useState(6)

  return (
    <div className="my-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">{t("portfolio.title")}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">{t("portfolio.description")}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.slice(0, visibleItems).map((item) => (
          <Card key={item.id} className="overflow-hidden group">
            <CardContent className="p-0">
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center p-4">
                    <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/80 mb-4">{item.category}</p>
                    <Link href={`/portfolio#${item.id}`} passHref>
                      <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                        {t("portfolio.view_details")}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link href="/portfolio" passHref>
          <Button className="gap-2">
            {t("portfolio.view_all")}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
