import { PageHeader } from "@/components/page-header"
import { PortfolioGallery } from "@/components/portfolio-gallery"
import { Advertisement } from "@/components/advertisement"
import { getAds } from "@/lib/ads"
import { getPortfolioItems } from "@/lib/portfolio"

export default function PortfolioPage() {
  const portfolioItems = getPortfolioItems()
  const ads = getAds()
  const sidebarAd = ads.find((ad) => ad.location === "sidebar" && ad.page === "portfolio")

  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader title="Our Portfolio" description="Explore our successful projects and creative solutions" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        <div className="lg:col-span-2">
          <PortfolioGallery items={portfolioItems} />
        </div>

        <div className="space-y-8">
          {sidebarAd && (
            <div className="sticky top-24">
              <Advertisement ad={sidebarAd} />
            </div>
          )}

          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Looking for Similar Solutions?</h3>
            <p className="mb-4">
              Impressed by our work? We can create custom solutions tailored to your specific requirements.
            </p>
            <a
              href="/contact"
              className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Start Your Project
            </a>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Our Process</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                  1
                </span>
                <span>Discovery & Requirements</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                  2
                </span>
                <span>Design & Planning</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                  3
                </span>
                <span>Development & Testing</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                  4
                </span>
                <span>Deployment & Support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
