import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the path starts with /client-portal/dashboard
  if (pathname.startsWith("/client-portal/dashboard")) {
    // This is a simplified check - in a real app, you would verify
    // the user's session/authentication status here

    // For demo purposes, we'll just check if a mock cookie exists
    const isAuthenticated = request.cookies.has("user_session")

    if (!isAuthenticated) {
      // Redirect to the login page if not authenticated
      return NextResponse.redirect(new URL("/client-portal", request.url))
    }
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/client-portal/dashboard/:path*"],
}

