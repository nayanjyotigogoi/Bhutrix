"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Trash2 } from "lucide-react"
import {
  getContactSubmissionById,
  deleteContactSubmission,
  type ContactSubmission,
} from "@/lib/admin/contact-submissions"
import { useToast } from "@/hooks/use-toast"

export default function ContactSubmissionDetailPage({ params }: { params: { id: string } }) {
  const [submission, setSubmission] = useState<ContactSubmission | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    // Fetch contact submission details
    const fetchData = () => {
      const data = getContactSubmissionById(params.id)
      if (data) {
        setSubmission(data)
      } else {
        // Submission not found, redirect to list
        router.push("/admin/contacts")
      }
      setIsLoading(false)
    }

    fetchData()
  }, [params.id, router])

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this submission?")) {
      const success = deleteContactSubmission(params.id)
      if (success) {
        toast({
          title: "Submission deleted",
          description: "The contact submission has been deleted successfully.",
        })
        router.push("/admin/contacts")
      } else {
        toast({
          title: "Error",
          description: "Failed to delete the submission. Please try again.",
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

  if (!submission) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">Submission not found.</p>
        <Button variant="link" onClick={() => router.push("/admin/contacts")}>
          Back to all submissions
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={() => router.push("/admin/contacts")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all submissions
        </Button>
        <Button variant="destructive" onClick={handleDelete}>
          <Trash2 className="mr-2 h-4 w-4" />
          Delete Submission
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Contact Submission Details</CardTitle>
          <CardDescription>Submitted on {formatDate(submission.date)}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Name</h3>
              <p className="text-lg">{submission.name}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Email</h3>
              <p className="text-lg">{submission.email}</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Subject</h3>
            <p className="text-lg">{submission.subject}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Message</h3>
            <div className="bg-muted p-4 rounded-md whitespace-pre-wrap">{submission.message}</div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => router.push("/admin/contacts")}>
            Back
          </Button>
          <Button variant="destructive" onClick={handleDelete}>
            Delete Submission
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
