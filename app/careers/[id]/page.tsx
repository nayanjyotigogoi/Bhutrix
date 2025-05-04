"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { getJobById } from "@/lib/jobs"
import { ArrowLeft, Calendar, MapPin, Briefcase, DollarSign, Clock, Upload, Loader2 } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

export default function JobDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const { toast } = useToast()
  const [job, setJob] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
    resumeFile: null as File | null,
    portfolioUrl: "",
  })
  const [resumeFileName, setResumeFileName] = useState("")

  useEffect(() => {
    if (params.id) {
      const jobData = getJobById(params.id as string)
      setJob(jobData)
      setLoading(false)

      if (!jobData) {
        router.push("/careers")
      }
    }
  }, [params.id, router])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resumeFile: e.target.files![0] }))
      setResumeFileName(e.target.files[0].name)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false)
      toast({
        title: "Application Submitted",
        description: "Thank you for your application. We'll be in touch soon!",
      })

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        coverLetter: "",
        resumeFile: null,
        portfolioUrl: "",
      })
      setResumeFileName("")
    }, 1500)
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center items-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (!job) {
    return (
      <div className="container mx-auto px-4 py-12">
        <PageHeader title="Job Not Found" description="The job you're looking for doesn't exist or has been removed." />
        <div className="mt-8 text-center">
          <Link href="/careers">
            <Button>View All Openings</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/careers" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to all openings
      </Link>

      <PageHeader title={job.title} description={job.department} />

      <div className="mt-8 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Job Description</CardTitle>
              <CardDescription>Posted on {job.postedDate}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-2" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="h-5 w-5 text-primary mr-2" />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-primary mr-2" />
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  <span>{job.hours}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-primary mr-2" />
                  <span>Start: {job.startDate}</span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Overview</h3>
                <p>{job.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {job.responsibilities.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Requirements</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {job.requirements.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {job.benefits && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Benefits</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {job.benefits.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Apply for this position</CardTitle>
              <CardDescription>Fill out the form below to apply</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
                </div>

                <div>
                  <Label htmlFor="coverLetter">Cover Letter *</Label>
                  <Textarea
                    id="coverLetter"
                    name="coverLetter"
                    rows={4}
                    value={formData.coverLetter}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="resumeFile">Resume/CV (PDF) *</Label>
                  <div className="mt-1">
                    <Label
                      htmlFor="resumeFile"
                      className="flex items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-md p-4 cursor-pointer hover:border-primary/50 transition-colors"
                    >
                      <Upload className="h-5 w-5 mr-2 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        {resumeFileName ? resumeFileName : "Upload your resume"}
                      </span>
                      <Input
                        id="resumeFile"
                        name="resumeFile"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        required
                        className="hidden"
                      />
                    </Label>
                  </div>
                </div>

                <div>
                  <Label htmlFor="portfolioUrl">Portfolio URL (optional)</Label>
                  <Input
                    id="portfolioUrl"
                    name="portfolioUrl"
                    type="url"
                    value={formData.portfolioUrl}
                    onChange={handleChange}
                    placeholder="https://your-portfolio.com"
                  />
                </div>

                <Button type="submit" className="w-full" disabled={submitting}>
                  {submitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="text-xs text-muted-foreground">
              By submitting this application, you agree to our privacy policy and terms of service.
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
