"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { LayoutDashboard, FileEdit, MessageSquare, Briefcase, Settings } from "lucide-react"

interface SidebarLinkProps {
  href: string
  icon: React.ElementType
  children: React.ReactNode
  isActive: boolean
}

function SidebarLink({ href, icon: Icon, children, isActive }: SidebarLinkProps) {
  return (
    <Link href={href} className="w-full">
      <Button
        variant={isActive ? "secondary" : "ghost"}
        className={cn("w-full justify-start", isActive ? "bg-secondary" : "hover:bg-secondary/50")}
      >
        <Icon className="mr-2 h-5 w-5" />
        {children}
      </Button>
    </Link>
  )
}

export function AdminSidebar() {
  const pathname = usePathname()

  const navItems = [
    { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/content", label: "Content Management", icon: FileEdit },
    { href: "/admin/contacts", label: "Contact Submissions", icon: MessageSquare },
    { href: "/admin/applications", label: "Job Applications", icon: Briefcase },
    { href: "/admin/settings", label: "Settings", icon: Settings },
  ]

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <h1 className="text-2xl font-bold">Bhutrix Admin</h1>
      </div>
      <div className="flex-1 overflow-auto py-4 px-3 space-y-2">
        {navItems.map((item) => (
          <SidebarLink key={item.href} href={item.href} icon={item.icon} isActive={pathname === item.href}>
            {item.label}
          </SidebarLink>
        ))}
      </div>
    </div>
  )
}
