import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Calendar, ChevronRight } from "lucide-react"
import Link from "next/link"

interface Job {
  id: string
  title: string
  department: string
  location: string
  type: string
  hours: string
  salary: string
  postedDate: string
  startDate: string
  description: string
  responsibilities: string[]
  requirements: string[]
  benefits?: string[]
}

interface JobListingProps {
  job: Job
}

export function JobListing({ job }: JobListingProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{job.title}</CardTitle>
            <CardDescription>{job.department}</CardDescription>
          </div>
          <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">{job.type}</div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4 mb-4 text-sm">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
            <span>{job.hours}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
            <span>Posted: {job.postedDate}</span>
          </div>
        </div>
        <p className="line-clamp-3">{job.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="text-lg font-semibold">{job.salary}</div>
        <Link href={`/careers/${job.id}`}>
          <Button className="gap-1">
            View Job <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
