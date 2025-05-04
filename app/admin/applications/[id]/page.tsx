"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Trash2, Download, ExternalLink } from "lucide-react"
import { getJobApplicationById, deleteJobApplication, type JobApplication } from "@/lib/admin/job-applications"
import { useToast } from "@/hooks/use-toast"

export default function JobApplicationDetailPage({ params }: { params: { id: string } }) {
  const [application, setApplication] = useState<JobApplication | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    // Fetch job application details
    const fetchData = () => {
      const data = getJobApplicationById(params.id)
      if (data) {
        setApplication(data)
      } else {
        // Application not found, redirect to list
        router.push("/admin/applications")
      }
      setIsLoading(false)
    }

    fetchData()
  }, [params.id, router])

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this application?")) {
      const success = deleteJobApplication(params.id)
      if (success) {
        toast({
          title: "Application deleted",
          description: "The job application has been deleted successfully.",
        })
        router.push("/admin/applications")
      } else {
        toast({
          title: "Error",
          description: "Failed to delete the application. Please try again.",
          variant: "destructive",
        })
      }
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString() + " " + date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  if (isLoading) {
    return (
      <div className="flex justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!application) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">Application not found.</p>
        <Button variant="link" onClick={() => router.push("/admin/applications")}>
          Back to all applications
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={() => router.push("/admin/applications")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all applications
        </Button>
        <Button variant="destructive" onClick={handleDelete}>
          <Trash2 className="mr-2 h-4 w-4" />
          Delete Application
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Job Application Details</CardTitle>
          <CardDescription>
            Applied for {application.position} on {formatDate(application.date)}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Full Name</h3>
              <p className="text-lg">{application.fullName}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Email</h3>
              <p className="text-lg">{application.email}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Phone</h3>
              <p className="text-lg">{application.phone}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Position</h3>
              <p className="text-lg">{application.position}</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Cover Letter</h3>
            <div className="bg-muted p-4 rounded-md whitespace-pre-wrap">{application.coverLetter}</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {application.resumeUrl && (
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Resume</h3>
                <div className="flex items-center gap-4">
                  <div className="bg-muted aspect-[3/4] w-24 rounded-md flex items-center justify-center">
                    <img
                      src={application.resumeUrl || "/placeholder.svg"}
                      alt="Resume preview"
                      className="max-w-full max-h-full object-cover rounded-md"
                    />
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </div>
              </div>
            )}

            {application.portfolioUrl && (
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Portfolio</h3>
                <a
                  href={application.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary hover:underline"
                >
                  {application.portfolioUrl}
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => router.push("/admin/applications")}>
            Back
          </Button>
          <Button variant="destructive" onClick={handleDelete}>
            Delete Application
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
