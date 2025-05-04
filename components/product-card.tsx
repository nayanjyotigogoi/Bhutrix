'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import { useTranslation } from "@/components/language-provider"

interface Product {
  id: string
  title: string
  description: string
  image: string
  price: string
  features: string[]
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { t } = useTranslation()

  return (
    <Card id={product.id} className="overflow-hidden group card-hover-effect h-full flex flex-col" tabIndex={0}>
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <CardHeader>
        <CardTitle className="group-hover:text-primary transition-colors">{product.title}</CardTitle>
        <CardDescription className="font-medium text-primary">{product.price}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="mb-4">{product.description}</p>
        <ul className="space-y-2">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full gap-2 transition-transform hover:translate-y-[-2px] focus-ring"
          aria-label={`${t("products.request_demo")} for ${product.title}`}
        >
          {t("products.request_demo")}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  )
}
