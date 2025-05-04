import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface Testimonial {
  id: string
  name: string
  company: string
  text: string
  avatar: string
  rating: number
}

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <img
            src={testimonial.avatar || "/placeholder.svg"}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h3 className="font-semibold">{testimonial.name}</h3>
            <p className="text-sm text-muted-foreground">{testimonial.company}</p>
          </div>
        </div>

        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        <div className="relative">
          <Quote className="absolute top-0 left-0 h-6 w-6 text-primary/20 -translate-x-2 -translate-y-2" />
          <p className="relative z-10 italic">{testimonial.text}</p>
        </div>
      </CardContent>
    </Card>
  )
}
