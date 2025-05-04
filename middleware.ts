import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Skip middleware for login page and public routes
  if (path === "/admin/login" || !path.startsWith("/admin")) {
    return NextResponse.next()
  }

  // Check for authentication cookie
  const isAuthenticated = request.cookies.get("admin_authenticated")?.value === "true"

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    const loginUrl = new URL("/admin/login", request.url)
    loginUrl.searchParams.set("redirect", path)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
