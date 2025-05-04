"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Search, Trash2, Eye } from "lucide-react"
import { getContactSubmissions, deleteContactSubmission, type ContactSubmission } from "@/lib/admin/contact-submissions"
import { useToast } from "@/hooks/use-toast"

export default function ContactSubmissionsPage() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([])
  const [filteredSubmissions, setFilteredSubmissions] = useState<ContactSubmission[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const itemsPerPage = 10
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    // Fetch contact submissions
    const fetchData = () => {
      const data = getContactSubmissions()
      setSubmissions(data)
      setFilteredSubmissions(data)
      setIsLoading(false)
    }

    fetchData()
  }, [])

  useEffect(() => {
    // Filter submissions based on search query
    if (searchQuery.trim() === "") {
      setFilteredSubmissions(submissions)
    } else {
      const query = searchQuery.toLowerCase()
      const filtered = submissions.filter(
        (submission) =>
          submission.name.toLowerCase().includes(query) ||
          submission.email.toLowerCase().includes(query) ||
          submission.subject.toLowerCase().includes(query) ||
          submission.message.toLowerCase().includes(query),
      )
      setFilteredSubmissions(filtered)
    }
    setCurrentPage(1)
  }, [searchQuery, submissions])

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this submission?")) {
      const success = deleteContactSubmission(id)
      if (success) {
        setSubmissions((prev) => prev.filter((submission) => submission.id !== id))
        toast({
          title: "Submission deleted",
          description: "The contact submission has been deleted successfully.",
        })
      } else {
        toast({
          title: "Error",
          description: "Failed to delete the submission. Please try again.",
          variant: "destructive",
        })
      }
    }
  }

  const handleView = (id: string) => {
    router.push(`/admin/contacts/${id}`)
  }

  // Pagination logic
  const totalPages = Math.ceil(filteredSubmissions.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentSubmissions = filteredSubmissions.slice(startIndex, endIndex)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString() + " " + date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Contact Submissions</h1>
        <p className="text-muted-foreground">Manage and view all contact form submissions.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Submissions</CardTitle>
          <CardDescription>View and manage contact form submissions from your website.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search submissions..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : currentSubmissions.length > 0 ? (
            <>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {currentSubmissions.map((submission) => (
                      <TableRow key={submission.id}>
                        <TableCell className="font-medium">{submission.name}</TableCell>
                        <TableCell>{submission.email}</TableCell>
                        <TableCell>{submission.subject}</TableCell>
                        <TableCell>{formatDate(submission.date)}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="outline" size="icon" onClick={() => handleView(submission.id)}>
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon" onClick={() => handleDelete(submission.id)}>
                              <Trash2 className="h-4 w-4 text-red-500" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {totalPages > 1 && (
                <div className="mt-4">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                          className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                        />
                      </PaginationItem>

                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <PaginationItem key={page}>
                          <PaginationLink onClick={() => setCurrentPage(page)} isActive={currentPage === page}>
                            {page}
                          </PaginationLink>
                        </PaginationItem>
                      ))}

                      <PaginationItem>
                        <PaginationNext
                          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                          className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No submissions found.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
