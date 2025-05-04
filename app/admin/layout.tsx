"use client"

import type React from "react"
import { usePathname } from "next/navigation"
import { AuthProvider } from "@/contexts/auth-context"
import { AdminLayoutContent } from "@/components/admin/admin-layout-content"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  // Don't apply admin layout to login page
  if (pathname === "/admin/login") {
    return <AuthProvider>{children}</AuthProvider>
  }

  return (
    <AuthProvider>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </AuthProvider>
  )
}
