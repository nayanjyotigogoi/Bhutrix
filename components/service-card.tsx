'use client'

import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useTranslation } from "@/components/language-provider"


interface Service {
  id: string
  title: string
  shortDescription: string
  description: string
  image: string
  icon: string
}

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { t } = useTranslation()

  return (
    <Card id={service.id} className="overflow-hidden group card-hover-effect h-full flex flex-col" tabIndex={0}>
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={service.image || "/placeholder.svg"}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <CardHeader>
        <CardTitle className="group-hover:text-primary transition-colors">{service.title}</CardTitle>
        <CardDescription>{service.shortDescription}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p>{service.description}</p>
      </CardContent>
      <CardFooter>
      <Link href={`/services/${service.id}`} className="w-full">
          <Button
            variant="outline"
            className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 focus-ring"
            aria-label={`${t("services.learn_more")} about ${service.title}`}
          >
            {t("services.learn_more")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
