import { PageHeader } from "@/components/page-header"
import { getServiceById } from "@/lib/services"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

interface ServicePageProps {
  params: {
    id: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceById(params.id)

  if (!service) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader title={service.title} description={service.shortDescription} />

      <div className="mt-12 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-card rounded-lg overflow-hidden shadow-md mb-8">
            <img src={service.image || "/placeholder.svg"} alt={service.title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <div className="prose max-w-none">
                <p className="text-lg">{service.fullDescription}</p>
              </div>
            </div>
          </div>

          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="process">Our Process</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
              <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
            </TabsList>

            <TabsContent value="features" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {service.features?.map((feature, index) => (
                      <div key={index} className="flex flex-col">
                        <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    ))}
                  </div>

                  {service.benefits && (
                    <div className="mt-10">
                      <h3 className="text-2xl font-bold mb-6">Benefits</h3>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {service.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="process" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6">Our Process</h3>
                  <div className="space-y-8">
                    {service.process?.map((step) => (
                      <div key={step.step} className="flex">
                        <div className="mr-4">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                            {step.step}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-1">{step.title}</h4>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="faq" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-6">
                    {service.faq?.map((item, index) => (
                      <div key={index}>
                        <h4 className="text-lg font-semibold mb-2">{item.question}</h4>
                        <p className="text-muted-foreground">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="case-studies" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6">Case Studies</h3>
                  <div className="space-y-8">
                    {service.caseStudies?.map((caseStudy) => (
                      <div key={caseStudy.id} className="grid md:grid-cols-3 gap-6 border-b pb-8 last:border-0">
                        <div className="md:col-span-1">
                          <img
                            src={caseStudy.image || "/placeholder.svg"}
                            alt={caseStudy.title}
                            className="w-full rounded-lg object-cover aspect-video"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <h4 className="text-xl font-semibold mb-2">{caseStudy.title}</h4>
                          <p className="text-muted-foreground mb-2">Client: {caseStudy.client}</p>
                          <div className="space-y-2">
                            <div>
                              <h5 className="font-medium">Challenge:</h5>
                              <p className="text-sm text-muted-foreground">{caseStudy.challenge}</p>
                            </div>
                            <div>
                              <h5 className="font-medium">Solution:</h5>
                              <p className="text-sm text-muted-foreground">{caseStudy.solution}</p>
                            </div>
                            <div>
                              <h5 className="font-medium">Result:</h5>
                              <p className="text-sm text-muted-foreground">{caseStudy.result}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-8">
          <div className="bg-card p-6 rounded-lg shadow-md sticky top-24">
            <h3 className="text-xl font-semibold mb-4">Ready to Get Started?</h3>
            <p className="mb-6">
              Contact us today to discuss how our {service.title} services can help your business grow and succeed.
            </p>
            <Link href="/contact" className="w-full block">
              <Button className="w-full gap-2">
                Request a Consultation
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>

            <div className="mt-8 pt-6 border-t">
              <h4 className="font-semibold mb-3">Other Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/web-development" className="text-primary hover:underline">
                    Website Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/crm-solutions" className="text-primary hover:underline">
                    CRM Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/services/sap-consulting" className="text-primary hover:underline">
                    SAP Consulting
                  </Link>
                </li>
                <li>
                  <Link href="/services/ai-automation" className="text-primary hover:underline">
                    AI Business Automation
                  </Link>
                </li>
                <li>
                  <Link href="/services/creative-design" className="text-primary hover:underline">
                    Creative Design
                  </Link>
                </li>
                <li>
                  <Link href="/services/mobile-apps" className="text-primary hover:underline">
                    Mobile App Development
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
