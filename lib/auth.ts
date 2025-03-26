import { cookies } from "next/headers"

// This is a simplified mock authentication system
// In a real application, you would use a proper authentication system like NextAuth.js

export async function signIn(email: string, password: string) {
  // In a real app, you would validate credentials against a database
  if (email === "demo@example.com" && password === "password") {
    // Set a cookie to simulate authentication
    cookies().set("user_session", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    })

    return {
      success: true,
      user: {
        id: "1",
        firstName: "John",
        lastName: "Smith",
        email: "demo@example.com",
        companyName: "Smith Construction Co.",
        role: "customer",
      },
    }
  }

  return {
    success: false,
    error: "Invalid email or password",
  }
}

export async function signOut() {
  cookies().delete("user_session")
  return { success: true }
}

export async function getUser() {
  const session = cookies().get("user_session")

  if (session?.value === "authenticated") {
    // In a real app, you would fetch the user from a database
    return {
      id: "1",
      firstName: "John",
      lastName: "Smith",
      email: "demo@example.com",
      companyName: "Smith Construction Co.",
      role: "customer",
    }
  }

  return null
}

export async function isAuthenticated() {
  const user = await getUser()
  return user !== null
}

