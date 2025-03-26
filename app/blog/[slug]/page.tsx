import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

// This would typically come from a CMS or database
const getBlogPost = (slug) => {
  // Mock data for demonstration
  return {
    title: "5 Signs Your Diesel Engine Needs Immediate Attention",
    date: "March 15, 2025",
    author: "John Nipper",
    category: "Maintenance Tips",
    image: "/placeholder.svg?height=600&width=1200",
    content: `
      <p>Diesel engines are known for their durability and reliability, but like any mechanical system, they can develop problems over time. Recognizing the early warning signs of diesel engine issues can help you address problems before they lead to costly repairs or complete engine failure.</p>
      
      <h2>1. Unusual Exhaust Smoke</h2>
      <p>The color of your exhaust smoke can tell you a lot about what's happening inside your engine:</p>
      <ul>
        <li><strong>Black smoke:</strong> Indicates incomplete combustion, possibly due to a clogged air filter, faulty injectors, or incorrect fuel-to-air ratio.</li>
        <li><strong>Blue smoke:</strong> Suggests oil is being burned in the combustion chamber, which could be due to worn valve seals, piston rings, or cylinder walls.</li>
        <li><strong>White smoke:</strong> May indicate coolant leaking into the combustion chamber, potentially from a cracked cylinder head or blown head gasket.</li>
      </ul>
      
      <h2>2. Decreased Power and Performance</h2>
      <p>If your engine is struggling to maintain power or experiencing a noticeable decrease in performance, it could be due to:</p>
      <ul>
        <li>Clogged fuel filters</li>
        <li>Air in the fuel system</li>
        <li>Faulty fuel injectors</li>
        <li>Turbocharger issues</li>
        <li>Low compression</li>
      </ul>
      
      <h2>3. Unusual Engine Noises</h2>
      <p>Diesel engines typically run louder than gasoline engines, but certain noises can indicate problems:</p>
      <ul>
        <li><strong>Knocking:</strong> Could indicate bearing wear, connecting rod issues, or piston problems.</li>
        <li><strong>Whining:</strong> Often related to bearing wear or issues with the turbocharger.</li>
        <li><strong>Rattling:</strong> May suggest loose components or problems with the timing chain.</li>
      </ul>
      
      <h2>4. Excessive Oil Consumption</h2>
      <p>If you're adding oil more frequently than usual, it could indicate:</p>
      <ul>
        <li>Worn piston rings</li>
        <li>Valve seal issues</li>
        <li>Oil leaks</li>
        <li>Damaged gaskets</li>
      </ul>
      
      <h2>5. Hard Starting or Failure to Start</h2>
      <p>Difficulty starting your diesel engine, especially in cold weather, may be caused by:</p>
      <ul>
        <li>Low compression</li>
        <li>Fuel system issues</li>
        <li>Glow plug problems</li>
        <li>Air in the fuel lines</li>
        <li>Battery or starter motor issues</li>
      </ul>
      
      <h2>When to Seek Professional Help</h2>
      <p>While some minor issues can be addressed with regular maintenance, many diesel engine problems require professional diagnosis and repair. At Nipper Repair Services, our certified technicians have the expertise and equipment to quickly identify and resolve diesel engine issues before they lead to major repairs.</p>
      
      <p>If you notice any of these warning signs, don't wait until your engine fails completely. Contact us today to schedule a diagnostic appointment and keep your equipment running smoothly.</p>
    `,
    relatedPosts: [
      {
        id: 2,
        title: "The Importance of Regular Hydraulic System Maintenance",
        slug: "importance-hydraulic-system-maintenance",
      },
      {
        id: 5,
        title: "The Benefits of Preventative Maintenance Programs",
        slug: "benefits-preventative-maintenance-programs",
      },
    ],
  }
}

export default function BlogPostPage({ params }) {
  const { slug } = params
  const post = getBlogPost(slug)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="max-w-3xl">
            <Button
              asChild
              variant="outline"
              className="mb-8 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
            >
              <Link href="/blog" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
            <div className="flex items-center space-x-2">
              <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
                {post.category}
              </span>
              <span className="text-sm text-gray-300">{post.date}</span>
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{post.title}</h1>
            <p className="mt-4 text-xl">By {post.author}</p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-blue-600">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          {/* Author Bio */}
          <div className="mt-16 rounded-lg bg-gray-50 p-8">
            <div className="flex items-center">
              <div className="relative h-16 w-16 overflow-hidden rounded-full">
                <Image src="/placeholder.svg?height=100&width=100" alt={post.author} fill className="object-cover" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{post.author}</h3>
                <p className="text-gray-600">Founder & Lead Technician</p>
              </div>
            </div>
            <p className="mt-4 text-gray-600">
              John has over 25 years of experience in diesel and heavy equipment repair. He founded Nipper Repair
              Services in 2003 and is passionate about sharing his knowledge to help equipment owners maintain their
              machinery.
            </p>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold">Related Posts</h2>
            <div className="mt-6 grid gap-8 sm:grid-cols-2">
              {post.relatedPosts.map((relatedPost) => (
                <div key={relatedPost.id} className="rounded-lg border p-6 shadow-sm">
                  <h3 className="text-xl font-semibold">
                    <Link href={`/blog/${relatedPost.slug}`} className="text-blue-600 hover:underline">
                      {relatedPost.title}
                    </Link>
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-lg bg-blue-600 p-8 text-white">
            <h2 className="text-2xl font-bold">Need Professional Diesel Engine Service?</h2>
            <p className="mt-4">
              Our team of certified technicians is ready to help with all your diesel engine repair and maintenance
              needs.
            </p>
            <div className="mt-6">
              <Button asChild className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/contact">Contact Us Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

