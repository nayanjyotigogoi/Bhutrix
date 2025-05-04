import { PageHeader } from "@/components/page-header"
import { ServiceCard } from "@/components/service-card"
import { Advertisement } from "@/components/advertisement"
import { getAds } from "@/lib/ads"
import { getServices } from "@/lib/services"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  const services = getServices()
  const ads = getAds()
  const sidebarAd = ads.find((ad) => ad.location === "sidebar" && ad.page === "services")
  const inlineAd = ads.find((ad) => ad.location === "inline" && ad.page === "services")

  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader title="Our Services" description="Comprehensive IT solutions tailored to your business needs" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        <div className="lg:col-span-2">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={service.id}>
                <ServiceCard service={service} />
                {index === 2 && inlineAd && (
                  <div className="md:col-span-2 my-8">
                    <Advertisement ad={inlineAd} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          {sidebarAd && (
            <div className="sticky top-24 mb-8">
              <Advertisement ad={sidebarAd} />
            </div>
          )}

          <div className="bg-card p-6 rounded-lg shadow-md relative z-10">
            <h3 className="text-xl font-semibold mb-4">Need Custom Solutions?</h3>
            <p className="mb-4">
              We understand that every business has unique requirements. Contact us for tailored solutions that address
              your specific challenges.
            </p>
            <Link href="/contact">
              <Button className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
