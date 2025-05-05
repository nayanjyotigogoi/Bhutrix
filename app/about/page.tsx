'use client';

import { PageHeader } from "@/components/page-header"
import { TeamMember } from "@/components/team-member"
import { getTeamMembers } from "@/lib/team"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Briefcase, UserPlus } from "lucide-react"

export default function AboutPage() {
  const teamMembers = getTeamMembers()

  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader
        title="About DevSphere"
        description="Learn about our mission, vision, and the team behind our success"
      />

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="mb-4">
            Founded in 2023 in Guwahati, Bhutrix was born out of a passion for technology and a vision to help
            businesses thrive in the digital age. What started as a small team of dedicated professionals has grown into
            a full-service IT company serving clients across various industries.
          </p>
          <p>
            Our journey has been marked by continuous learning, innovation, and a commitment to delivering exceptional
            value to our clients. Today, we pride ourselves on our ability to combine technical expertise with creative
            thinking to solve complex business challenges.
          </p>
        </div>
        <div className="bg-card rounded-lg overflow-hidden shadow-md">
          <img
            src="https://images.unsplash.com/photo-1547043736-b2247cb34b01?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Bhutix Office"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Our Headquarters</h3>
            <p>Located in the heart of Guwahati, our modern office serves as a hub of innovation and collaboration.</p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-4 text-center">Our Mission & Vision</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Mission</h3>
            <p>
              To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive
              advantage. We are committed to delivering high-quality services that exceed client expectations and
              contribute to their success.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Vision</h3>
            <p>
              To be recognized as a leading IT solutions provider known for our technical excellence, innovative
              approach, and client-centric focus. We aspire to be at the forefront of technological advancements and to
              make a positive impact on businesses and communities.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Integrity</h3>
            <p>
              We conduct our business with honesty, transparency, and ethical standards. We build trust through our
              actions and accountability.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p>
              We embrace creativity and continuous improvement. We challenge conventional thinking and explore new ideas
              to deliver innovative solutions.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
            <p>
              We believe in the power of teamwork and partnership. We collaborate with our clients and within our team
              to achieve shared goals.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </div> */}

      <div className="mt-16 bg-card p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          We're always looking for talented individuals who are passionate about technology and innovation. If you're
          interested in joining our team, check out our current openings or send us your resume.
        </p>
        <Link href="/careers">
          <Button className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
            View Openings
          </Button>
        </Link>
      </div>
    </div>
  )
}
