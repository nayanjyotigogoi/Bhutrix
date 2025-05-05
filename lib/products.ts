export interface Product {
  id: string
  title: string
  description: string
  image: string
  price: string
  features: string[]
}

export interface Product {
  id: string
  title: string
  description: string
  image: string
  price: string
  features: string[]
}

export function getProducts(): Product[] {
  return [
    {
      id: "crm-suite",
      title: "Bhutrix CRM Suite",
      description: "A comprehensive customer relationship management solution designed for businesses of all sizes.",
      image: "crm-suite.jpg",
      price: "Starting at ₹7,499/month",
      features: [
        "Contact and lead management",
        "Sales pipeline tracking",
        "Email marketing integration",
        "Analytics and reporting",
        "Mobile access",
        "24/7 customer support",
      ],
    },
    {
      id: "analytics-platform",
      title: "Bhutrix Analytics Platform",
      description: "Turn your data into actionable insights with our powerful analytics platform.",
      image: "analytics-platform.jpg",
      price: "Starting at ₹11,999/month",
      features: [
        "Real-time data visualization",
        "Predictive analytics",
        "Custom dashboards",
        "Data integration from multiple sources",
        "Automated reporting",
        "AI-powered insights",
      ],
    },
    {
      id: "ecommerce-solution",
      title: "Bhutrix E-Commerce Solution",
      description: "A complete e-commerce platform to help you sell products and services online.",
      image: "ecommerce-solution.jpg",
      price: "Starting at ₹14,999/month",
      features: [
        "Responsive storefront",
        "Inventory management",
        "Secure payment processing",
        "Order fulfillment",
        "Customer accounts",
        "Marketing tools",
      ],
    },
    {
      id: "project-management",
      title: "Bhutrix Project Management",
      description: "Streamline your project workflows and improve team collaboration.",
      image: "project-management.jpg",
      price: "Starting at ₹5,499/month",
      features: [
        "Task management",
        "Team collaboration",
        "Time tracking",
        "Resource allocation",
        "Gantt charts",
        "File sharing",
      ],
    },
    {
      id: "hr-management",
      title: "Bhutrix HR Management",
      description: "Simplify your human resources processes and employee management.",
      image: "hr-management.jpg",
      price: "Starting at ₹9,499/month",
      features: [
        "Employee records",
        "Attendance tracking",
        "Performance management",
        "Recruitment tools",
        "Payroll integration",
        "Employee self-service portal",
      ],
    },
    {
      id: "ai-chatbot",
      title: "Bhutrix AI Chatbot",
      description: "Enhance customer support and engagement with our intelligent chatbot solution.",
      image: "ai-chatbot.jpg",
      price: "Starting at ₹6,499/month",
      features: [
        "Natural language processing",
        "Multi-channel support",
        "Customizable responses",
        "Integration with existing systems",
        "Analytics and insights",
        "24/7 customer assistance",
      ],
    },
  ];
}



