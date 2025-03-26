import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Blog | Nipper Repair Services",
  description:
    "Read our latest articles on diesel and heavy equipment repair, maintenance tips, industry news, and company updates.",
}

const blogPosts = [
  {
    id: 1,
    title: "5 Signs Your Diesel Engine Needs Immediate Attention",
    excerpt:
      "Learn the warning signs that indicate your diesel engine may be developing serious problems that require professional attention.",
    date: "March 15, 2025",
    author: "John Nipper",
    category: "Maintenance Tips",
    image: "/placeholder.svg?height=400&width=600",
    slug: "signs-diesel-engine-needs-attention",
  },
  {
    id: 2,
    title: "The Importance of Regular Hydraulic System Maintenance",
    excerpt:
      "Discover why regular maintenance of your hydraulic systems is crucial for preventing costly breakdowns and ensuring optimal performance.",
    date: "February 28, 2025",
    author: "Mike Rodriguez",
    category: "Hydraulic Systems",
    image: "/placeholder.svg?height=400&width=600",
    slug: "importance-hydraulic-system-maintenance",
  },
  {
    id: 3,
    title: "Understanding Diesel Emissions Systems",
    excerpt:
      "A comprehensive guide to modern diesel emissions systems, how they work, and how to maintain them properly.",
    date: "February 10, 2025",
    author: "David Chen",
    category: "Technical Guides",
    image: "/placeholder.svg?height=400&width=600",
    slug: "understanding-diesel-emissions-systems",
  },
  {
    id: 4,
    title: "Choosing the Right Transmission Fluid for Your Equipment",
    excerpt:
      "Learn how to select the appropriate transmission fluid for your specific equipment to maximize performance and longevity.",
    date: "January 22, 2025",
    author: "Sarah Johnson",
    category: "Maintenance Tips",
    image: "/placeholder.svg?height=400&width=600",
    slug: "choosing-right-transmission-fluid",
  },
  {
    id: 5,
    title: "The Benefits of Preventative Maintenance Programs",
    excerpt:
      "Discover how implementing a preventative maintenance program can save you money and extend the life of your equipment.",
    date: "January 5, 2025",
    author: "John Nipper",
    category: "Maintenance Tips",
    image: "/placeholder.svg?height=400&width=600",
    slug: "benefits-preventative-maintenance-programs",
  },
  {
    id: 6,
    title: "Common Causes of Hydraulic System Failures",
    excerpt:
      "Explore the most common reasons hydraulic systems fail and how to prevent these issues in your equipment.",
    date: "December 18, 2024",
    author: "Mike Rodriguez",
    category: "Hydraulic Systems",
    image: "/placeholder.svg?height=400&width=600",
    slug: "common-causes-hydraulic-system-failures",
  },
]

export default function BlogPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Blog</h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl">
              Stay up-to-date with the latest industry news, maintenance tips, and company updates.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <CardTitle className="mt-2 text-xl">{post.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-500">By {post.author}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-blue-600 p-8 shadow-xl sm:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white">Subscribe to Our Newsletter</h2>
              <p className="mx-auto mt-4 max-w-2xl text-xl text-blue-100">
                Get the latest maintenance tips, industry news, and company updates delivered to your inbox.
              </p>
            </div>

            <form className="mx-auto mt-8 max-w-xl">
              <div className="flex flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <Button className="bg-white text-blue-600 hover:bg-gray-100">Subscribe</Button>
              </div>
              <p className="mt-3 text-center text-sm text-blue-100">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

