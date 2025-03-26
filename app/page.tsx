import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Wrench, Settings, PenToolIcon as Tool, Clock } from "lucide-react"

const services = [
  {
    title: "Engine Repair",
    description: "Complete diesel engine diagnostics, repair, and rebuilding services for all makes and models.",
    icon: <Wrench className="h-10 w-10 text-blue-600" />,
    link: "/services/engine-repair",
  },
  {
    title: "Transmission Services",
    description: "Expert transmission repair and maintenance to keep your equipment running smoothly.",
    icon: <Settings className="h-10 w-10 text-blue-600" />,
    link: "/services/transmission",
  },
  {
    title: "Hydraulic Systems",
    description: "Comprehensive hydraulic system diagnostics, repair, and replacement services.",
    icon: <Tool className="h-10 w-10 text-blue-600" />,
    link: "/services/hydraulic",
  },
  {
    title: "Preventative Maintenance",
    description: "Regular maintenance programs to prevent costly breakdowns and extend equipment life.",
    icon: <Clock className="h-10 w-10 text-blue-600" />,
    link: "/services/maintenance",
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Heavy equipment repair"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Expert Diesel & Heavy Equipment Repair
            </h1>
            <p className="mt-6 text-xl">
              Professional repair and maintenance services for all types of diesel engines and heavy equipment. Trust
              our experienced technicians to keep your machinery running at peak performance.
            </p>
            <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">Get a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white text-gray-900 hover:bg-gray-100">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Comprehensive repair and maintenance services for all your diesel and heavy equipment needs.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="text-blue-600 hover:text-blue-700">
                    <Link href={service.link} className="flex items-center">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Choose Nipper Repair Services?
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                With over 20 years of experience in the industry, we provide reliable, high-quality repair services for
                all types of diesel engines and heavy equipment.
              </p>

              <div className="mt-10 space-y-6">
                {[
                  "Certified technicians with extensive experience",
                  "State-of-the-art diagnostic equipment",
                  "Quality parts and workmanship guarantee",
                  "Fast turnaround times to minimize downtime",
                  "Transparent pricing with no hidden fees",
                  "Emergency repair services available",
                ].map((feature, index) => (
                  <div key={index} className="flex">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 text-green-500" />
                    <p className="ml-3 text-base text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Technician repairing heavy equipment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What Our Clients Say</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Don't just take our word for it. Here's what our satisfied customers have to say.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "Nipper Repair Services saved us thousands in potential downtime. Their quick diagnosis and repair got our equipment back up and running in no time.",
                author: "John Smith",
                company: "Smith Construction Co.",
              },
              {
                quote:
                  "The team at Nipper is professional, knowledgeable, and efficient. They've been maintaining our fleet for years, and we couldn't be happier with their service.",
                author: "Sarah Johnson",
                company: "Johnson Trucking LLC",
              },
              {
                quote:
                  "When our excavator broke down on a critical project, Nipper's emergency repair team was on-site within hours. Exceptional service!",
                author: "Mike Davis",
                company: "Davis Excavation",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <div className="text-lg font-medium text-gray-900">"{testimonial.quote}"</div>
                  <div className="mt-6">
                    <p className="font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-600">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to get your equipment back in top shape?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-blue-100">
              Contact us today for a free consultation and quote.
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

