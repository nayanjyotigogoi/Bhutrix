export interface Ad {
  id: string
  type: "image" | "video"
  content: string
  link: string
  location: "hero" | "inline" | "sidebar"
  page?: string
  title: string
}

export function getAds(): Ad[] {
  return [
    {
      id: "ad1",
      type: "image",
      content: "/placeholder.svg?height=400&width=800",
      link: "#",
      location: "hero",
      title: "Special Offer: 20% off on all website development services",
    },
    {
      id: "ad2",
      type: "image",
      content: "/placeholder.svg?height=400&width=600",
      link: "#",
      location: "sidebar",
      page: "services",
      title: "Try our CRM solution free for 30 days",
    },
    {
      id: "ad3",
      type: "image",
      content: "/placeholder.svg?height=200&width=800",
      link: "#",
      location: "inline",
      page: "services",
      title: "AI-powered business solutions for your enterprise",
    },
    {
      id: "ad4",
      type: "image",
      content: "/placeholder.svg?height=400&width=600",
      link: "#",
      location: "sidebar",
      page: "portfolio",
      title: "Custom web development starting at $999",
    },
    {
      id: "ad5",
      type: "image",
      content: "/placeholder.svg?height=200&width=800",
      link: "#",
      location: "inline",
      page: "products",
      title: "New: DevSphere Analytics Platform",
    },
    {
      id: "ad6",
      type: "image",
      content: "/placeholder.svg?height=200&width=800",
      link: "#",
      location: "inline",
      page: "ai-automation",
      title: "Automate your business processes with AI",
    },
  ]
}
