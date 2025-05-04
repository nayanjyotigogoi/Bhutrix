export interface TeamMember {
  id: string
  name: string
  position: string
  bio: string
  image: string
  type: "full-time" | "part-time" | "partner"
  social: {
    linkedin?: string
    twitter?: string
    github?: string
  }
}

export function getTeamMembers(): TeamMember[] {
  return [
    {
      id: "member1",
      name: "Nayan Sharma",
      position: "Founder & CEO",
      bio: "With over 15 years of experience in the IT industry, Nayan founded DevSphere with a vision to help businesses leverage technology for growth and innovation.",
      image: "/placeholder.svg?height=400&width=400",
      type: "full-time",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      id: "member2",
      name: "Priya Patel",
      position: "CTO",
      bio: "Priya leads our technical team with her extensive knowledge of software architecture and emerging technologies. She ensures that our solutions are robust, scalable, and future-proof.",
      image: "/placeholder.svg?height=400&width=400",
      type: "full-time",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      id: "member3",
      name: "Rahul Gupta",
      position: "Head of AI & Automation",
      bio: "Rahul specializes in artificial intelligence and machine learning. He leads our AI initiatives and helps clients automate their business processes for maximum efficiency.",
      image: "/placeholder.svg?height=400&width=400",
      type: "part-time",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      id: "member4",
      name: "Ananya Das",
      position: "Creative Director",
      bio: "Ananya brings her artistic vision and design expertise to every project. She leads our creative team in developing visually stunning and user-friendly designs.",
      image: "/placeholder.svg?height=400&width=400",
      type: "part-time",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: "member5",
      name: "Vikram Singh",
      position: "SAP Consultant",
      bio: "Vikram is our SAP expert with certifications in multiple SAP modules. He has successfully led numerous SAP implementation projects across various industries.",
      image: "/placeholder.svg?height=400&width=400",
      type: "partner",
      social: {
        linkedin: "#",
      },
    },
    {
      id: "member6",
      name: "Meera Kapoor",
      position: "Head of Web Development",
      bio: "Meera leads our web development team with her expertise in modern frameworks and best practices. She ensures that our web solutions are responsive, accessible, and performant.",
      image: "/placeholder.svg?height=400&width=400",
      type: "full-time",
      social: {
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: "member7",
      name: "Arjun Reddy",
      position: "Mobile Development Lead",
      bio: "Arjun specializes in cross-platform mobile development. He leads our mobile team in creating intuitive and high-performance applications for iOS and Android.",
      image: "/placeholder.svg?height=400&width=400",
      type: "partner",
      social: {
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: "member8",
      name: "Neha Sharma",
      position: "Customer Success Manager",
      bio: "Neha ensures that our clients receive exceptional support throughout their journey with us. She works closely with clients to understand their needs and ensure their satisfaction.",
      image: "/placeholder.svg?height=400&width=400",
      type: "full-time",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ]
}
