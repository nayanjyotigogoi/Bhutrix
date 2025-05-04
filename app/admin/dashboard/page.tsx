"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Briefcase, FileEdit, Users, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { getContactSubmissions } from "@/lib/admin/contact-submissions"
import { getJobApplications } from "@/lib/admin/job-applications"
import { getServices } from "@/lib/services"
import { getProducts } from "@/lib/products"

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({
    contactSubmissions: 0,
    jobApplications: 0,
    services: 0,
    products: 0,
  })

  const [recentContacts, setRecentContacts] = useState<any[]>([])
  const [recentApplications, setRecentApplications] = useState<any[]>([])

  useEffect(() => {
    // Fetch data for dashboard
    const contacts = getContactSubmissions()
    const applications = getJobApplications()
    const services = getServices()
    const products = getProducts()

    setStats({
      contactSubmissions: contacts.length,
      jobApplications: applications.length,
      services: services.length,
      products: products.length,
    })

    // Get recent submissions
    setRecentContacts(contacts.slice(0, 5))
    setRecentApplications(applications.slice(0, 5))
  }, [])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your website statistics and recent activities.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contact Submissions</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.contactSubmissions}</div>
            <p className="text-xs text-muted-foreground">Total form submissions</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Job Applications</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.jobApplications}</div>
            <p className="text-xs text-muted-foreground">Total applications received</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Services</CardTitle>
            <FileEdit className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.services}</div>
            <p className="text-xs text-muted-foreground">Active services</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Products</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.products}</div>
            <p className="text-xs text-muted-foreground">Active products</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Recent Contact Submissions */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Contact Submissions</CardTitle>
            <CardDescription>Latest messages from the contact form</CardDescription>
          </CardHeader>
          <CardContent>
            {recentContacts.length > 0 ? (
              <div className="space-y-4">
                {recentContacts.map((contact, index) => (
                  <div key={index} className="flex items-start justify-between">
                    <div>
                      <p className="font-medium">{contact.name}</p>
                      <p className="text-sm text-muted-foreground">{contact.email}</p>
                      <p className="text-xs text-muted-foreground">{new Date(contact.date).toLocaleDateString()}</p>
                    </div>
                    <Link href={`/admin/contacts/${contact.id}`}>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">No recent contact submissions</p>
            )}
            <div className="mt-4 text-right">
              <Link href="/admin/contacts" className="text-sm text-primary hover:underline">
                View all submissions
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Recent Job Applications */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Job Applications</CardTitle>
            <CardDescription>Latest applications from the careers page</CardDescription>
          </CardHeader>
          <CardContent>
            {recentApplications.length > 0 ? (
              <div className="space-y-4">
                {recentApplications.map((application, index) => (
                  <div key={index} className="flex items-start justify-between">
                    <div>
                      <p className="font-medium">{application.fullName}</p>
                      <p className="text-sm text-muted-foreground">{application.position}</p>
                      <p className="text-xs text-muted-foreground">{new Date(application.date).toLocaleDateString()}</p>
                    </div>
                    <Link href={`/admin/applications/${application.id}`}>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">No recent job applications</p>
            )}
            <div className="mt-4 text-right">
              <Link href="/admin/applications" className="text-sm text-primary hover:underline">
                View all applications
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
