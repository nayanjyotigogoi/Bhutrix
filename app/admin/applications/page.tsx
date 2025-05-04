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
import { getJobApplications, deleteJobApplication, type JobApplication } from "@/lib/admin/job-applications"
import { useToast } from "@/hooks/use-toast"

export default function JobApplicationsPage() {
  const [applications, setApplications] = useState<JobApplication[]>([])
  const [filteredApplications, setFilteredApplications] = useState<JobApplication[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const itemsPerPage = 10
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    // Fetch job applications
    const fetchData = () => {
      const data = getJobApplications()
      setApplications(data)
      setFilteredApplications(data)
      setIsLoading(false)
    }

    fetchData()
  }, [])

  useEffect(() => {
    // Filter applications based on search query
    if (searchQuery.trim() === "") {
      setFilteredApplications(applications)
    } else {
      const query = searchQuery.toLowerCase()
      const filtered = applications.filter(
        (application) =>
          application.fullName.toLowerCase().includes(query) ||
          application.email.toLowerCase().includes(query) ||
          application.position.toLowerCase().includes(query),
      )
      setFilteredApplications(filtered)
    }
    setCurrentPage(1)
  }, [searchQuery, applications])

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this application?")) {
      const success = deleteJobApplication(id)
      if (success) {
        setApplications((prev) => prev.filter((application) => application.id !== id))
        toast({
          title: "Application deleted",
          description: "The job application has been deleted successfully.",
        })
      } else {
        toast({
          title: "Error",
          description: "Failed to delete the application. Please try again.",
          variant: "destructive",
        })
      }
    }
  }

  const handleView = (id: string) => {
    router.push(`/admin/applications/${id}`)
  }

  // Pagination logic
  const totalPages = Math.ceil(filteredApplications.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentApplications = filteredApplications.slice(startIndex, endIndex)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString() + " " + date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Job Applications</h1>
        <p className="text-muted-foreground">Manage and view all job applications from your careers page.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Applications</CardTitle>
          <CardDescription>View and manage job applications from candidates.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search applications..."
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
          ) : currentApplications.length > 0 ? (
            <>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Position</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {currentApplications.map((application) => (
                      <TableRow key={application.id}>
                        <TableCell className="font-medium">{application.fullName}</TableCell>
                        <TableCell>{application.position}</TableCell>
                        <TableCell>{application.email}</TableCell>
                        <TableCell>{formatDate(application.date)}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="outline" size="icon" onClick={() => handleView(application.id)}>
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon" onClick={() => handleDelete(application.id)}>
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
              <p className="text-muted-foreground">No applications found.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
