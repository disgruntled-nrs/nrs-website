import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatBot from "@/components/chat-bot"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nipper Repair Services | Diesel & Heavy Equipment Repair",
  description:
    "Professional diesel and heavy equipment repair services. Engine repair, transmission services, hydraulic systems, and preventative maintenance.",
  keywords:
    "diesel repair, heavy equipment repair, engine repair, transmission services, hydraulic systems, maintenance",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <ChatBot />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'