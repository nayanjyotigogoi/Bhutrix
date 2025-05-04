export interface JobApplication {
  id: string
  jobId: string
  position: string
  fullName: string
  email: string
  phone: string
  coverLetter: string
  resumeUrl?: string
  portfolioUrl?: string
  date: string
}

// In a real application, this would be fetched from a database
export function getJobApplications(): JobApplication[] {
  // Check if we're in a browser environment
  if (typeof window === "undefined") {
    return []
  }

  const storedApplications = localStorage.getItem("job_applications")
  if (!storedApplications) {
    // Initialize with sample data for demo purposes
    const sampleData = [
      {
        id: "1",
        jobId: "frontend-developer",
        position: "Frontend Developer",
        fullName: "Alex Johnson",
        email: "alex@example.com",
        phone: "+1234567890",
        coverLetter: "I am excited to apply for the Frontend Developer position at DevSphere...",
        resumeUrl: "/placeholder.svg?height=400&width=300",
        portfolioUrl: "https://portfolio.example.com",
        date: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
      },
      {
        id: "2",
        jobId: "ui-ux-designer",
        position: "UI/UX Designer",
        fullName: "Sarah Williams",
        email: "sarah@example.com",
        phone: "+1987654321",
        coverLetter: "With 5 years of experience in UI/UX design, I am confident that I would be a great addition...",
        resumeUrl: "/placeholder.svg?height=400&width=300",
        date: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
      },
      {
        id: "3",
        jobId: "backend-developer",
        position: "Backend Developer",
        fullName: "Michael Brown",
        email: "michael@example.com",
        phone: "+1122334455",
        coverLetter: "As a backend developer with expertise in Node.js and database design...",
        resumeUrl: "/placeholder.svg?height=400&width=300",
        portfolioUrl: "https://github.com/michaelbrown",
        date: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
      },
    ]
    localStorage.setItem("job_applications", JSON.stringify(sampleData))
    return sampleData
  }

  return JSON.parse(storedApplications)
}

export function getJobApplicationById(id: string): JobApplication | undefined {
  const applications = getJobApplications()
  return applications.find((application) => application.id === id)
}

export function addJobApplication(application: Omit<JobApplication, "id" | "date">): JobApplication {
  const applications = getJobApplications()

  const newApplication = {
    ...application,
    id: Date.now().toString(),
    date: new Date().toISOString(),
  }

  applications.unshift(newApplication) // Add to beginning of array
  localStorage.setItem("job_applications", JSON.stringify(applications))

  return newApplication
}

export function deleteJobApplication(id: string): boolean {
  const applications = getJobApplications()
  const filteredApplications = applications.filter((application) => application.id !== id)

  if (filteredApplications.length < applications.length) {
    localStorage.setItem("job_applications", JSON.stringify(filteredApplications))
    return true
  }

  return false
}
