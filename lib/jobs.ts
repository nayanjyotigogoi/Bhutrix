export interface Job {
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

export function getJobs(): Job[] {
  return [
    {
      id: "frontend-developer",
      title: "Frontend Developer",
      department: "Engineering",
      location: "Guwahati, India (Hybrid)",
      type: "Full-time",
      hours: "40 hours/week",
      salary: "₹6,00,000 - ₹10,00,000/year",
      postedDate: "April 20, 2023",
      startDate: "Immediate",
      description:
        "We are looking for a skilled Frontend Developer to join our engineering team. In this role, you will be responsible for implementing visual elements and user interactions that users see and interact with in our web applications.",
      responsibilities: [
        "Develop new user-facing features using React.js and related technologies",
        "Build reusable components and libraries for future use",
        "Translate designs and wireframes into high-quality code",
        "Optimize components for maximum performance across devices and browsers",
        "Collaborate with back-end developers and designers to improve usability",
        "Participate in code reviews and help maintain code quality",
      ],
      requirements: [
        "2+ years of experience in frontend development",
        "Proficiency in JavaScript, HTML, CSS, and React.js",
        "Experience with responsive design and cross-browser compatibility",
        "Familiarity with RESTful APIs and modern frontend build pipelines",
        "Understanding of UI/UX design principles",
        "Knowledge of testing and debugging processes",
        "Bachelor's degree in Computer Science or related field (or equivalent experience)",
      ],
      benefits: [
        "Competitive salary and performance bonuses",
        "Health insurance coverage",
        "Flexible work arrangements",
        "Professional development opportunities",
        "Casual work environment",
        "Regular team events and activities",
      ],
    },
    {
      id: "ui-ux-designer",
      title: "UI/UX Designer",
      department: "Design",
      location: "Guwahati, India (Remote)",
      type: "Full-time",
      hours: "40 hours/week",
      salary: "₹5,00,000 - ₹8,00,000/year",
      postedDate: "April 18, 2023",
      startDate: "Immediate",
      description:
        "We are seeking a talented UI/UX Designer to create amazing user experiences. You will be responsible for the design and implementation of user interfaces that are both functional and visually appealing, ensuring a seamless user experience across all our digital products.",
      responsibilities: [
        "Create user-centered designs by understanding business requirements and user feedback",
        "Create user flows, wireframes, prototypes and mockups",
        "Design UI elements and tools such as navigation menus, search boxes, tabs, and widgets",
        "Develop UI mockups and prototypes that clearly illustrate how sites function and look",
        "Collaborate with front-end developers to implement the designs",
        "Conduct usability testing and gather feedback",
      ],
      requirements: [
        "2+ years of experience as a UI/UX Designer or similar role",
        "Proficiency in design tools such as Adobe XD, Sketch, Figma, or similar",
        "Strong portfolio of design projects",
        "Solid understanding of UI/UX design principles and best practices",
        "Knowledge of HTML, CSS, and JavaScript is a plus",
        "Excellent communication and collaboration skills",
        "Bachelor's degree in Design, Computer Science, or related field (or equivalent experience)",
      ],
      benefits: [
        "Competitive salary and performance bonuses",
        "Health insurance coverage",
        "Flexible work arrangements",
        "Professional development opportunities",
        "Casual work environment",
        "Regular team events and activities",
      ],
    },
    {
      id: "backend-developer",
      title: "Backend Developer",
      department: "Engineering",
      location: "Guwahati, India (Hybrid)",
      type: "Full-time",
      hours: "40 hours/week",
      salary: "₹7,00,000 - ₹12,00,000/year",
      postedDate: "April 15, 2023",
      startDate: "Immediate",
      description:
        "We are looking for an experienced Backend Developer to join our engineering team. You will be responsible for the server-side logic, definition and maintenance of our central APIs, and integration with front-end development.",
      responsibilities: [
        "Design and implement robust, scalable, and secure server-side applications",
        "Develop and maintain databases, data storage solutions, and APIs",
        "Collaborate with front-end developers to integrate user-facing elements",
        "Optimize applications for maximum speed and scalability",
        "Implement security and data protection measures",
        "Participate in the entire application lifecycle, focusing on coding and debugging",
      ],
      requirements: [
        "3+ years of experience in backend development",
        "Proficiency in Node.js, Python, or similar backend technologies",
        "Experience with database systems like MySQL, MongoDB, or PostgreSQL",
        "Knowledge of server-side frameworks",
        "Understanding of fundamental design principles for building scalable applications",
        "Experience with version control systems (e.g., Git)",
        "Bachelor's degree in Computer Science or related field (or equivalent experience)",
      ],
      benefits: [
        "Competitive salary and performance bonuses",
        "Health insurance coverage",
        "Flexible work arrangements",
        "Professional development opportunities",
        "Casual work environment",
        "Regular team events and activities",
      ],
    },
  ]
}

export function getJobById(id: string): Job | undefined {
  const jobs = getJobs()
  return jobs.find((job) => job.id === id)
}
