export interface ContactSubmission {
  id: string
  name: string
  email: string
  subject: string
  message: string
  date: string
}

// In a real application, this would be fetched from a database
export function getContactSubmissions(): ContactSubmission[] {
  // Check if we're in a browser environment
  if (typeof window === "undefined") {
    return []
  }

  const storedSubmissions = localStorage.getItem("contact_submissions")
  if (!storedSubmissions) {
    // Initialize with sample data for demo purposes
    const sampleData = [
      {
        id: "1",
        name: "John Doe",
        email: "john@example.com",
        subject: "Website Inquiry",
        message: "I would like to know more about your web development services.",
        date: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
      },
      {
        id: "2",
        name: "Jane Smith",
        email: "jane@example.com",
        subject: "Quote Request",
        message: "Can you provide a quote for an e-commerce website?",
        date: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
      },
      {
        id: "3",
        name: "Mike Johnson",
        email: "mike@example.com",
        subject: "Partnership Opportunity",
        message: "I would like to discuss a potential partnership with your company.",
        date: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
      },
    ]
    localStorage.setItem("contact_submissions", JSON.stringify(sampleData))
    return sampleData
  }

  return JSON.parse(storedSubmissions)
}

export function getContactSubmissionById(id: string): ContactSubmission | undefined {
  const submissions = getContactSubmissions()
  return submissions.find((submission) => submission.id === id)
}

export function addContactSubmission(submission: Omit<ContactSubmission, "id" | "date">): ContactSubmission {
  const submissions = getContactSubmissions()

  const newSubmission = {
    ...submission,
    id: Date.now().toString(),
    date: new Date().toISOString(),
  }

  submissions.unshift(newSubmission) // Add to beginning of array
  localStorage.setItem("contact_submissions", JSON.stringify(submissions))

  return newSubmission
}

export function deleteContactSubmission(id: string): boolean {
  const submissions = getContactSubmissions()
  const filteredSubmissions = submissions.filter((submission) => submission.id !== id)

  if (filteredSubmissions.length < submissions.length) {
    localStorage.setItem("contact_submissions", JSON.stringify(filteredSubmissions))
    return true
  }

  return false
}
