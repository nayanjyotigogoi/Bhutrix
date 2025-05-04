"use client"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Home, Users, Briefcase, Package, FileText, Settings, Edit } from "lucide-react"

export default function ContentManagementPage() {
  const router = useRouter()

  const contentSections = [
    {
      id: "home",
      title: "Home Page",
      description: "Manage the content of your home page",
      icon: Home,
      subsections: [
        { id: "hero", title: "Hero Section" },
        { id: "services", title: "Services Preview" },
        { id: "portfolio", title: "Portfolio Preview" },
        { id: "testimonials", title: "Testimonials Preview" },
        { id: "cta", title: "Call to Action" },
      ],
    },
    {
      id: "about",
      title: "About Us",
      description: "Manage your about us page content",
      icon: Users,
      subsections: [
        { id: "story", title: "Our Story" },
        { id: "mission", title: "Mission & Vision" },
        { id: "values", title: "Core Values" },
        { id: "team", title: "Team Members" },
      ],
    },
    {
      id: "services",
      title: "Services",
      description: "Manage your services and their details",
      icon: Settings,
      subsections: [
        { id: "web-development", title: "Web Development" },
        { id: "crm-solutions", title: "CRM Solutions" },
        { id: "sap-consulting", title: "SAP Consulting" },
        { id: "ai-automation", title: "AI Automation" },
        { id: "creative-design", title: "Creative Design" },
        { id: "mobile-apps", title: "Mobile App Development" },
      ],
    },
    {
      id: "products",
      title: "Products",
      description: "Manage your product listings",
      icon: Package,
      subsections: [
        { id: "crm-suite", title: "CRM Suite" },
        { id: "analytics-platform", title: "Analytics Platform" },
        { id: "ecommerce-solution", title: "E-Commerce Solution" },
        { id: "project-management", title: "Project Management" },
        { id: "hr-management", title: "HR Management" },
        { id: "ai-chatbot", title: "AI Chatbot" },
      ],
    },
    {
      id: "careers",
      title: "Careers",
      description: "Manage job listings and career page content",
      icon: Briefcase,
      subsections: [
        { id: "overview", title: "Careers Overview" },
        { id: "frontend-developer", title: "Frontend Developer" },
        { id: "ui-ux-designer", title: "UI/UX Designer" },
        { id: "backend-developer", title: "Backend Developer" },
      ],
    },
    {
      id: "other",
      title: "Other Pages",
      description: "Manage content for additional pages",
      icon: FileText,
      subsections: [
        { id: "contact", title: "Contact Page" },
        { id: "portfolio", title: "Portfolio Page" },
        { id: "testimonials", title: "Testimonials Page" },
      ],
    },
  ]

  const handleEditContent = (sectionId: string, subsectionId: string) => {
    router.push(`/admin/content/edit?section=${sectionId}&subsection=${subsectionId}`)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Content Management</h1>
        <p className="text-muted-foreground">Manage and update the content of your website.</p>
      </div>

      <Tabs defaultValue="home">
        <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-4">
          {contentSections.map((section) => (
            <TabsTrigger key={section.id} value={section.id} className="flex items-center gap-2">
              <section.icon className="h-4 w-4" />
              <span className="hidden md:inline">{section.title}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {contentSections.map((section) => (
          <TabsContent key={section.id} value={section.id}>
            <Card>
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.subsections.map((subsection) => (
                    <Card key={subsection.id} className="overflow-hidden">
                      <CardHeader className="p-4">
                        <CardTitle className="text-lg">{subsection.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={() => handleEditContent(section.id, subsection.id)}
                        >
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Content
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
