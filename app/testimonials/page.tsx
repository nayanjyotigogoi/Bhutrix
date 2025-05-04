import { PageHeader } from "@/components/page-header"
import { TestimonialCard } from "@/components/testimonial-card"
import { getTestimonials } from "@/lib/testimonials"

export default function TestimonialsPage() {
  const testimonials = getTestimonials()

  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader
        title="Our Clients"
        description="Organizations we've had the privilege to work with and their success stories"
      />

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>

      <div className="mt-16 bg-card p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Share Your Experience</h2>
        <p className="text-center mb-8">
          We value your feedback. If you've worked with us, we'd love to hear about your experience.
        </p>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-1">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Company"
                />
              </div>
            </div>
            <div>
              <label htmlFor="testimonial" className="block text-sm font-medium mb-1">
                Your Testimonial
              </label>
              <textarea
                id="testimonial"
                rows={4}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Share your experience working with us..."
              ></textarea>
            </div>
            <div>
              <label htmlFor="rating" className="block text-sm font-medium mb-1">
                Rating
              </label>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} type="button" className="text-yellow-400 hover:text-yellow-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.539 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Submit Testimonial
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
