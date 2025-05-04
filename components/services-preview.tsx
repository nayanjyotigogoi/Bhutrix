"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useTranslation } from "@/components/language-provider"
import { getServices } from "@/lib/services"
import Link from "next/link"

export function ServicesPreview() {
  const { t } = useTranslation()
  const services = getServices()
  const [visibleServices, setVisibleServices] = useState(3)

  return (
    <div className="my-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">{t("services.title")}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">{t("services.description")}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.slice(0, visibleServices).map((service) => (
          <Card key={service.id} className="overflow-hidden group">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.shortDescription}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-3">{service.description}</p>
            </CardContent>
            <CardFooter>
              <Link href={`/services#${service.id}`} passHref>
                <Button variant="outline" className="w-full gap-2">
                  {t("services.learn_more")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {visibleServices < services.length && (
        <div className="mt-8 text-center">
          <Button onClick={() => setVisibleServices(services.length)} variant="outline" className="gap-2">
            {t("services.view_all")}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}

      {visibleServices === services.length && (
        <div className="mt-8 text-center">
          <Link href="/services" passHref>
            <Button className="gap-2">
              {t("services.explore_all")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}
