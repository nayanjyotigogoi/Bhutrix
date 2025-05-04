import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Advertisement } from "@/components/advertisement"
import { getAds } from "@/lib/ads"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check, AlertCircle } from "lucide-react"

export default function AIAutomationPage() {
  const ads = getAds()
  const inlineAd = ads.find((ad) => ad.location === "inline" && ad.page === "ai-automation")

  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader
        title="AI Business Automation"
        description="Revolutionize your business processes with our cutting-edge AI solutions"
      />

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Transform Your Business</h2>
          <p className="mb-4">
            Our AI-powered automation solutions help businesses streamline operations, reduce costs, and improve
            efficiency. By leveraging the latest advancements in artificial intelligence, we enable you to focus on
            strategic initiatives while automating repetitive tasks.
          </p>
          <p>
            From intelligent document processing to predictive analytics and chatbots, our solutions are designed to
            address your specific business challenges.
          </p>
        </div>
        <div className="bg-card rounded-lg overflow-hidden shadow-md">
          <img src="/placeholder.svg?height=400&width=600" alt="AI Automation" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Intelligent Automation</h3>
            <p>
              Combine the power of AI with robotic process automation to create end-to-end intelligent automation
              solutions.
            </p>
          </div>
        </div>
      </div>

      {inlineAd && (
        <div className="my-12">
          <Advertisement ad={inlineAd} />
        </div>
      )}

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Our AI Solutions</h2>
        <Tabs defaultValue="process-automation">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
            <TabsTrigger value="process-automation">Process Automation</TabsTrigger>
            <TabsTrigger value="predictive-analytics">Predictive Analytics</TabsTrigger>
            <TabsTrigger value="chatbots">Intelligent Chatbots</TabsTrigger>
            <TabsTrigger value="document-processing">Document Processing</TabsTrigger>
          </TabsList>
          <TabsContent value="process-automation" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Process Automation</CardTitle>
                <CardDescription>Streamline your business processes with AI</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Our process automation solutions leverage AI to identify patterns, make decisions, and execute tasks
                  without human intervention. This results in faster processing times, reduced errors, and significant
                  cost savings.
                </p>
                <div className="mt-6 space-y-3">
                  <h4 className="font-semibold">Key Benefits:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Reduce manual data entry by up to 90%</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Minimize human errors in repetitive tasks</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Accelerate processing times from days to minutes</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Free up employee time for higher-value activities</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="predictive-analytics" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Predictive Analytics</CardTitle>
                <CardDescription>Make data-driven decisions with confidence</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Our predictive analytics solutions analyze historical data to forecast future trends, enabling you to
                  make informed decisions. From demand forecasting to risk assessment, we help you stay ahead of the
                  curve.
                </p>
                <div className="mt-6 space-y-3">
                  <h4 className="font-semibold">Applications:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Sales forecasting and inventory optimization</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Customer churn prediction and prevention</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Maintenance scheduling to prevent equipment failures</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Financial risk assessment and fraud detection</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="chatbots" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Intelligent Chatbots</CardTitle>
                <CardDescription>Enhance customer experience with AI-powered conversations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Our intelligent chatbots provide 24/7 support to your customers, answering queries, resolving issues,
                  and even processing transactions. With natural language processing capabilities, they deliver a
                  seamless conversational experience.
                </p>
                <div className="mt-6 space-y-3">
                  <h4 className="font-semibold">Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Natural language understanding for human-like interactions</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Multi-channel deployment (website, mobile, social media)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Seamless handoff to human agents for complex issues</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Continuous learning from interactions to improve responses</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="document-processing" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Document Processing</CardTitle>
                <CardDescription>Automate document handling and extraction</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Our document processing solutions use AI to extract, classify, and validate information from various
                  document types. This eliminates manual data entry, reduces processing time, and improves accuracy.
                </p>
                <div className="mt-6 space-y-3">
                  <h4 className="font-semibold">Document Types:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Invoices, purchase orders, and receipts</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Contracts, agreements, and legal documents</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Forms, applications, and surveys</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>ID cards, passports, and other identity documents</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-12 bg-card p-6 rounded-lg shadow-md border border-primary/20">
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 p-3 rounded-full">
            <AlertCircle className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">AI Solutions in Development</h3>
            <p className="mb-4">
              As a growing company, we're actively expanding our AI capabilities. While we're in the early stages of
              developing our own proprietary AI solutions, we partner with industry-leading AI providers to deliver
              cutting-edge solutions to our clients.
            </p>
            <p className="mb-4">
              Our team stays up-to-date with the latest AI advancements and best practices to ensure we can provide
              strategic guidance on how AI can benefit your business.
            </p>
            <h4 className="font-semibold mt-4 mb-2">Our AI Approach:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Strategic partnerships with established AI technology providers</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Custom integration of existing AI solutions into your business processes</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Ongoing research and development of our own AI capabilities</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Continuous learning and adaptation to emerging AI technologies</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-card p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Automate Your Business?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Schedule a consultation with our AI experts to discuss how we can help you leverage artificial intelligence to
          transform your business operations.
        </p>
        <Link href="/contact">
          <Button className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
            Book a Consultation
          </Button>
        </Link>
      </div>
    </div>
  )
}
