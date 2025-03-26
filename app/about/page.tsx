import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export const metadata = {
  title: "About Us | Nipper Repair Services",
  description:
    "Learn about Nipper Repair Services, our history, mission, values, and meet our team of experienced diesel and heavy equipment repair technicians.",
}

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About Us</h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl">
              With over 20 years of experience, Nipper Repair Services has been the trusted partner for diesel and heavy
              equipment repair in the region.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Story</h2>
              <div className="mt-6 space-y-6 text-lg text-gray-600">
                <p>
                  Founded in 2003 by John Nipper, a veteran diesel mechanic with a passion for quality workmanship,
                  Nipper Repair Services began as a small mobile repair operation serving local construction companies.
                </p>
                <p>
                  As our reputation for reliability and expertise grew, so did our business. In 2008, we opened our
                  first permanent facility, equipped with state-of-the-art diagnostic tools and equipment to handle more
                  complex repairs.
                </p>
                <p>
                  Today, we've grown to a team of 15 certified technicians operating from a 10,000 square foot facility.
                  Despite our growth, we remain committed to the same principles that guided us from day one: honesty,
                  quality, and customer satisfaction.
                </p>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
                <Image src="/placeholder.svg?height=500&width=600" alt="Our facility" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Mission & Values</h2>
          </div>

          <div className="mt-16">
            <div className="rounded-lg bg-white p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              <p className="mt-4 text-lg text-gray-600">
                To provide exceptional diesel and heavy equipment repair services that minimize downtime, extend
                equipment life, and help our clients operate more efficiently and profitably.
              </p>

              <h3 className="mt-12 text-2xl font-bold text-gray-900">Our Values</h3>
              <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Integrity",
                    description:
                      "We believe in honest communication, transparent pricing, and doing what we say we'll do.",
                  },
                  {
                    title: "Excellence",
                    description:
                      "We strive for excellence in every repair, using quality parts and following manufacturer specifications.",
                  },
                  {
                    title: "Customer Focus",
                    description:
                      "We understand that downtime costs money, so we work efficiently to get your equipment back in operation.",
                  },
                  {
                    title: "Continuous Learning",
                    description:
                      "We invest in ongoing training to stay current with the latest technologies and repair techniques.",
                  },
                  {
                    title: "Teamwork",
                    description:
                      "We work together, sharing knowledge and experience to solve even the most challenging problems.",
                  },
                  {
                    title: "Community",
                    description:
                      "We're proud to support the local community that has supported us throughout our growth.",
                  },
                ].map((value, index) => (
                  <div key={index} className="rounded-lg border bg-gray-50 p-6">
                    <h4 className="text-xl font-semibold text-gray-900">{value.title}</h4>
                    <p className="mt-2 text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet Our Team</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Our experienced team of certified technicians is dedicated to providing the highest quality service.
            </p>
          </div>

          <div className="mt-16 grid gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              {
                name: "John Nipper",
                role: "Founder & Lead Technician",
                image: "/placeholder.svg?height=300&width=300",
                bio: "25+ years of experience in diesel repair. ASE Master Certified.",
              },
              {
                name: "Sarah Johnson",
                role: "Service Manager",
                image: "/placeholder.svg?height=300&width=300",
                bio: "15 years of experience in service management and customer relations.",
              },
              {
                name: "Mike Rodriguez",
                role: "Senior Technician",
                image: "/placeholder.svg?height=300&width=300",
                bio: "18 years specializing in hydraulic systems and heavy equipment repair.",
              },
              {
                name: "David Chen",
                role: "Diagnostic Specialist",
                image: "/placeholder.svg?height=300&width=300",
                bio: "12 years of experience in computer diagnostics and electrical systems.",
              },
              {
                name: "Robert Jackson",
                role: "Engine Rebuild Specialist",
                image: "/placeholder.svg?height=300&width=300",
                bio: "20 years of experience in complete engine rebuilds and overhauls.",
              },
              {
                name: "Lisa Martinez",
                role: "Parts Manager",
                image: "/placeholder.svg?height=300&width=300",
                bio: "10 years of experience in parts inventory and supply chain management.",
              },
              {
                name: "James Wilson",
                role: "Mobile Repair Technician",
                image: "/placeholder.svg?height=300&width=300",
                bio: "8 years of experience in field repairs and emergency service.",
              },
              {
                name: "Amanda Lewis",
                role: "Office Manager",
                image: "/placeholder.svg?height=300&width=300",
                bio: "15 years of experience in administrative management and customer service.",
              },
            ].map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative h-64 w-64 overflow-hidden rounded-full">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-blue-600">{member.role}</p>
                <p className="mt-2 text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Certifications</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              We invest in ongoing training and certification to ensure our team has the knowledge and skills to handle
              any repair.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "ASE Certified Master Technicians",
              "Cummins Certified Technicians",
              "Caterpillar Certified Service",
              "Detroit Diesel Authorized Service",
              "John Deere Certified Repair",
              "Allison Transmission Certified",
            ].map((cert, index) => (
              <div key={index} className="flex items-center rounded-lg bg-white p-6 shadow-sm">
                <CheckCircle className="h-8 w-8 flex-shrink-0 text-green-500" />
                <span className="ml-4 text-lg font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to work with our expert team?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-blue-100">
              Contact us today to discuss your repair needs or schedule a service appointment.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/contact">Contact Us Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

