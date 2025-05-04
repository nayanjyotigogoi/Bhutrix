"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useTranslation } from "@/components/language-provider"
import { Button } from "@/components/ui/button"

interface PortfolioItem {
  id: string
  title: string
  description: string
  image: string
  category: string
  client: string
  date: string
  technologies: string[]
}

interface PortfolioGalleryProps {
  items: PortfolioItem[]
}

export function PortfolioGallery({ items }: PortfolioGalleryProps) {
  const { t } = useTranslation()
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)
  const [filter, setFilter] = useState<string>("all")

  const categories = ["all", ...new Set(items.map((item) => item.category.toLowerCase()))]

  const filteredItems = filter === "all" ? items : items.filter((item) => item.category.toLowerCase() === filter)

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              filter === category ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredItems.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            className="overflow-hidden group cursor-pointer"
            onClick={() => setSelectedItem(item)}
          >
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
                    <Button
                      variant="outline"
                      className="text-white border-white hover:bg-white hover:text-black"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedItem(item)
                      }}
                    >
                      {t("portfolio.view_details")}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        {selectedItem && (
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>{selectedItem.title}</DialogTitle>
              <DialogDescription>{selectedItem.category}</DialogDescription>
            </DialogHeader>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <img
                  src={selectedItem.image || "/placeholder.svg"}
                  alt={selectedItem.title}
                  className="w-full rounded-md"
                />
              </div>
              <div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">{t("portfolio.client")}</h4>
                    <p>{selectedItem.client}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">{t("portfolio.date")}</h4>
                    <p>{selectedItem.date}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">{t("portfolio.technologies")}</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.technologies.map((tech, index) => (
                        <span key={index} className="bg-muted px-2 py-1 rounded-md text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">{t("portfolio.description")}</h4>
                    <p>{selectedItem.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}
