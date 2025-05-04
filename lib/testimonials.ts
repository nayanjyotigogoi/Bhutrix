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
      text: "জাতীয় বিদ্যালয়, established in 1982, is a premier Assamese medium institution affiliated with Dibrugarh University. It offers Commerce and Arts streams and is recognized under UGC and Assam government provisions.",
      avatar: "/placeholder.svg?height=200&width=200",
      rating: 5,
    },
    {
      id: "testimonial2",
      name: "CKGeotech",
      company: "Construction",
      text: "A civil construction company specializing in erosion control works, geo bag installations, and large-scale infrastructure projects.",
      avatar: "/placeholder.svg?height=200&width=200",
      rating: 5,
    },
    {
      id: "testimonial3",
      name: "Ekodus Trek",
      company: "Tourism",
      text: "[Awaiting client description]",
      avatar: "/placeholder.svg?height=200&width=200",
      rating: 5,
    },
    {
      id: "testimonial4",
      name: "Paykarloo",
      company: "Retail Technology",
      text: "An online platform that helps shop owners manage their businesses across multiple locations—a complete CRM portal for retail and service businesses.",
      avatar: "/placeholder.svg?height=200&width=200",
      rating: 5,
    },
    {
      id: "testimonial5",
      name: "Priya Patel",
      company: "IndustrialTech",
      text: "Bhutrix's SAP consulting services were instrumental in our digital transformation journey. Their expertise and methodical approach ensured a smooth implementation with minimal disruption to our operations.",
      avatar: "/placeholder.svg?height=200&width=200",
      rating: 4,
    },
    {
      id: "testimonial7",
      name: "Raj Sharma",
      company: "StaffPro",
      text: "Bhutrix's HR management system has significantly reduced our administrative workload and improved employee satisfaction. The team was responsive to our feedback and made adjustments quickly.",
      avatar: "/placeholder.svg?height=200&width=200",
      rating: 4,
    },
  ]
}
