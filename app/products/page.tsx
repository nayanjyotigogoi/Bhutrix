import React from "react"
import { PageHeader } from "@/components/page-header"
import { ProductCard } from "@/components/product-card"
import { Advertisement } from "@/components/advertisement"
import { getAds } from "@/lib/ads"
import { getProducts } from "@/lib/products"

export default function ProductsPage() {
  const products = getProducts()
  const ads = getAds()
  const inlineAd = ads.find((ad) => ad.location === "inline" && ad.page === "products")

  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader title="Our Products" description="Innovative solutions designed to transform your business" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {products.map((product, index) => (
          <React.Fragment key={product.id}>
            <ProductCard product={product} />
            {index === 2 && inlineAd && (
              <div className="md:col-span-2 lg:col-span-3 my-8">
                <Advertisement ad={inlineAd} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="mt-16 bg-card p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Custom Product Development</h2>
        <p className="mb-6">
          Don't see what you're looking for? We specialize in creating custom software solutions tailored to your
          specific business requirements.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="/contact"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Request a Consultation
          </a>
          <a
            href="/portfolio"
            className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors"
          >
            View Our Portfolio
          </a>
        </div>
      </div>
    </div>
  )
}
