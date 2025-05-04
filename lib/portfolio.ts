export interface PortfolioItem {
  id: string
  title: string
  description: string
  image: string
  category: string
  client: string
  date: string
  technologies: string[]
}

export function getPortfolioItems(): PortfolioItem[] {
  return [
    {
      id: "ecommerce-website",
      title: "E-Commerce Website",
      description:
        "A fully responsive e-commerce website with advanced filtering, search functionality, and secure payment processing. The site features a user-friendly interface and optimized checkout process to maximize conversions.",
      image: "ecommerce-website.jpg",
      category: "Web Development",
      client: "FashionHub",
      date: "January 2023",
      technologies: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
    },
    {
      id: "crm-system",
      title: "Custom CRM System",
      description:
        "A comprehensive CRM system tailored to the client's specific business processes. The system includes contact management, sales pipeline tracking, and automated reporting features.",
      image: "crm-system.jpg",
      category: "CRM Solutions",
      client: "TechCorp",
      date: "March 2023",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
    },
    {
      id: "sap-implementation",
      title: "SAP Implementation",
      description:
        "End-to-end SAP implementation for a manufacturing company. The project involved business process analysis, system configuration, data migration, and user training.",
      image: "sap-implementation.png",
      category: "SAP Consulting",
      client: "IndustrialTech",
      date: "May 2023",
      technologies: ["SAP S/4HANA", "SAP Fiori", "ABAP"],
    },
    {
      id: "ai-chatbot",
      title: "AI Customer Support Chatbot",
      description:
        "An intelligent chatbot that handles customer inquiries, provides product recommendations, and escalates complex issues to human agents. The chatbot uses natural language processing to understand and respond to customer queries.",
      image: "AI-Chatbots-portfolio.jpg",
      category: "AI Automation",
      client: "ServicePro",
      date: "July 2023",
      technologies: ["Python", "TensorFlow", "NLP", "AWS Lambda"],
    },
    {
      id: "brand-identity",
      title: "Brand Identity Design",
      description:
        "Complete brand identity design including logo, color palette, typography, and brand guidelines. The design reflects the client's values and resonates with their target audience.",
      image: "brand-identity.jpg",
      category: "Creative Design",
      client: "GreenEco",
      date: "September 2023",
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
    },
    {
      id: "mobile-app",
      title: "Fitness Tracking Mobile App",
      description:
        "A cross-platform mobile application that allows users to track workouts, set goals, and monitor progress. The app features a clean, intuitive interface and integrates with wearable devices.",
      image: "mobile-app-portfolio.png",
      category: "Mobile Development",
      client: "FitLife",
      date: "November 2023",
      technologies: ["React Native", "Firebase", "Redux", "Google Fit API"],
    },
    {
      id: "data-dashboard",
      title: "Real-time Analytics Dashboard",
      description:
        "A real-time analytics dashboard that visualizes key business metrics and provides actionable insights. The dashboard features customizable widgets and automated reporting.",
      image: "data-dashboard.jpg",
      category: "Web Development",
      client: "DataViz",
      date: "December 2023",
      technologies: ["Vue.js", "D3.js", "WebSockets", "ElasticSearch"],
    },
    {
      id: "hr-system",
      title: "HR Management System",
      description:
        "A comprehensive HR management system that streamlines employee onboarding, attendance tracking, performance management, and payroll processing.",
      image: "hr-system.png",
      category: "CRM Solutions",
      client: "StaffPro",
      date: "February 2024",
      technologies: ["Angular", "Spring Boot", "MySQL", "Docker"],
    },
  ]
}
