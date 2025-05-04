import { PageHeader } from "@/components/page-header"
import { JobListing } from "@/components/job-listing"
import { getJobs } from "@/lib/jobs"

export default function CareersPage() {
  const jobs = getJobs()

  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader
        title="Careers at DevSphere"
        description="Join our team of innovators and make an impact in the tech world"
      />

      <div className="mt-12 max-w-4xl mx-auto">
        <div className="bg-card p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Work With Us?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Growth Opportunities</h3>
              <p className="text-muted-foreground mb-4">
                We invest in our team's professional development through training, mentorship, and challenging projects
                that expand your skills.
              </p>

              <h3 className="text-lg font-semibold mb-2">Flexible Work Environment</h3>
              <p className="text-muted-foreground">
                Enjoy a hybrid work model that balances remote flexibility with collaborative in-office experiences.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Innovative Projects</h3>
              <p className="text-muted-foreground mb-4">
                Work on cutting-edge technologies and solutions that solve real business challenges across various
                industries.
              </p>

              <h3 className="text-lg font-semibold mb-2">Collaborative Culture</h3>
              <p className="text-muted-foreground">
                Join a supportive team that values diverse perspectives, open communication, and collective success.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">Current Openings</h2>

        {jobs.length > 0 ? (
          <div className="space-y-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="bg-muted p-8 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">No Current Openings</h3>
            <p className="mb-4">
              We don't have any open positions at the moment, but we're always interested in connecting with talented
              individuals.
            </p>
            <p>
              Send your resume to{" "}
              <a href="mailto:careers@devsphere.com" className="text-primary hover:underline">
                careers@devsphere.com
              </a>{" "}
              and we'll keep you in mind for future opportunities.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
