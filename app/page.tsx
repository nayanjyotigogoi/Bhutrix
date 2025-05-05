import { HeroSection } from "@/components/hero-section"
import { ServicesPreview } from "@/components/services-preview"
import { PortfolioPreview } from "@/components/portfolio-preview"
import { TestimonialsPreview } from "@/components/testimonials-preview"
import { CTASection } from "@/components/cta-section"
import { Advertisement } from "@/components/advertisement"
import { getAds } from "@/lib/ads"

export default function Home() {
  const ads = getAds()
  const heroAd = ads.find((ad) => ad.location === "hero")

  return (
    <div className="container mx-auto px-4">
      <HeroSection />

      {heroAd && (
        <div className="my-8">
          <Advertisement ad={heroAd} />
        </div>
      )}

      <ServicesPreview />

      <div className="my-16">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Bhutrix?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Expertise</h3>
            <p>Our team of skilled professionals brings years of experience in delivering cutting-edge IT solutions.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Innovation</h3>
            <p>We stay ahead of the curve by embracing the latest technologies and methodologies.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Customer-Centric</h3>
            <p>Your success is our priority. We work closely with you to understand your unique needs.</p>
          </div>
        </div>
      </div>

      <PortfolioPreview />
      <TestimonialsPreview />
      <CTASection />
    </div>
  )
}
