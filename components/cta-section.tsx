'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useTranslation } from "@/components/language-provider"
import Link from "next/link"

export function CTASection() {
  const { t } = useTranslation()

  return (
    <div className="my-16 bg-card rounded-lg overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">{t("cta.title")}</h2>
          <p className="text-muted-foreground mb-6">{t("cta.description")}</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" passHref>
              <Button size="lg" className="gap-2">
                {t("cta.get_started")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services" passHref>
              <Button size="lg" variant="outline">
                {t("cta.learn_more")}
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative h-64 md:h-auto">
  <img
    src="Bhutrix-logo.png"
    alt="Call to Action"
    className="absolute inset-0 w-100% h-full object-cover object-center"
  />
</div>

      </div>
    </div>
  )
}
