export interface Testimonial {
  id: string
  name: string
  company: string
  text: string
  avatar: string
  rating: number
}

export function getTestimonials(): Testimonial[] {
  return [
    {
      id: "testimonial1",
      name: "Jatiya Vidyalaya, Sonaichapori",
      company: "Education",
      text: "Working with Bhutrix was a fantastic experience. They helped us modernize our online presence while staying true to our Assamese roots. The new website is seamless, informative, and beautifully represents our institution.",
      avatar: "/placeholder.jpg?height=200&width=200",
      rating: 5,
    },
    {
      id: "testimonial2",
      name: "CKGeotech",
      company: "Construction",
      text: "Bhutrix delivered exactly what we needed—a robust and professional website that showcases our projects and expertise. Their attention to detail and commitment to deadlines impressed us throughout the project.",
      avatar: "/placeholder.jpg?height=200&width=200",
      rating: 5,
    },
    {
      id: "testimonial3",
      name: "Ekodus Trek",
      company: "Tourism",
      text: "Our website has become the go-to place for trekkers to explore and book their next adventure, thanks to Bhutrix. The team captured the spirit of our brand and made it easy for users to navigate and engage.",
      avatar: "/placeholder.jpg?height=200&width=200",
      rating: 5,
    },
    {
      id: "testimonial4",
      name: "Paykarloo",
      company: "Retail Technology",
      text: "The Bhutrix team built us a powerful CRM portal that has completely streamlined our multi-location retail operations. Their understanding of business needs and tech execution is top-notch.",
      avatar: "/placeholder.jpg?height=200&width=200",
      rating: 5,
    },
    {
      id: "testimonial5",
      name: "Priya Patel",
      company: "IndustrialTech",
      text: "Bhutrix's SAP consulting was a game changer for us. Their deep expertise and smooth implementation helped us transform digitally with confidence. We couldn't be happier with the results.",
      avatar: "/placeholder.jpg?height=200&width=200",
      rating: 5,
    },
    {
      id: "testimonial7",
      name: "Raj Sharma",
      company: "StaffPro",
      text: "Implementing Bhutrix's HR management system has been a huge win for our company. The solution has made processes easier and faster, and their team’s responsiveness made the entire experience smooth.",
      avatar: "/placeholder.jpg?height=200&width=200",
      rating: 4,
    },
  ]
}
