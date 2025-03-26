import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Wrench, Settings, PenToolIcon as Tool, Clock, Truck, Cpu, Battery, Shield } from "lucide-react"

export const metadata = {
  title: "Services | Nipper Repair Services",
  description:
    "Comprehensive diesel and heavy equipment repair services including engine repair, transmission services, hydraulic systems, and preventative maintenance.",
}

const services = [
  {
    title: "Engine Repair",
    description: "Complete diesel engine diagnostics, repair, and rebuilding services for all makes and models.",
    icon: <Wrench className="h-10 w-10 text-blue-600" />,
    image: "/placeholder.svg?height=300&width=400",
    link: "/services/engine-repair",
    features: [
      "Engine diagnostics and troubleshooting",
      "Complete engine rebuilds",
      "Fuel system repair and maintenance",
      "Cooling system service",
      "Turbocharger repair and replacement",
    ],
  },
  {
    title: "Transmission Services",
    description: "Expert transmission repair and maintenance to keep your equipment running smoothly.",
    icon: <Settings className="h-10 w-10 text-blue-600" />,
    image: "/placeholder.svg?height=300&width=400",
    link: "/services/transmission",
    features: [
      "Transmission diagnostics",
      "Transmission rebuilds and repairs",
      "Clutch replacement",
      "Torque converter service",
      "Transmission fluid change",
    ],
  },
  {
    title: "Hydraulic Systems",
    description: "Comprehensive hydraulic system diagnostics, repair, and replacement services.",
    icon: <Tool className="h-10 w-10 text-blue-600" />,
    image: "/placeholder.svg?height=300&width=400",
    link: "/services/hydraulic",
    features: [
      "Hydraulic pump repair and replacement",
      "Cylinder repair and rebuild",
      "Hose replacement",
      "Valve repair and adjustment",
      "System pressure testing",
    ],
  },
  {
    title: "Preventative Maintenance",
    description: "Regular maintenance programs to prevent costly breakdowns and extend equipment life.",
    icon: <Clock className="h-10 w-10 text-blue-600" />,
    image: "/placeholder.svg?height=300&width=400",
    link: "/services/maintenance",
    features: [
      "Scheduled maintenance programs",
      "Oil and filter changes",
      "Fluid analysis",
      "Comprehensive inspections",
      "Fleet maintenance management",
    ],
  },
  {
    title: "Electrical Systems",
    description: "Diagnosis and repair of electrical issues in heavy equipment and diesel engines.",
    icon: <Battery className="h-10 w-10 text-blue-600" />,
    image: "/placeholder.svg?height=300&width=400",
    link: "/services/electrical",
    features: [
      "Electrical system diagnostics",
      "Starter and alternator repair",
      "Wiring harness repair",
      "Battery service",
      "Computer system diagnostics",
    ],
  },
  {
    title: "Mobile Repair Services",
    description: "On-site repair services to minimize downtime and get you back to work faster.",
    icon: <Truck className="h-10 w-10 text-blue-600" />,
    image: "/placeholder.svg?height=300&width=400",
    link: "/services/mobile",
    features: [
      "Emergency on-site repairs",
      "Scheduled on-site maintenance",
      "Field diagnostics",
      "Remote location service",
      "24/7 emergency response",
    ],
  },
  {
    title: "Computer Diagnostics",
    description: "Advanced computer diagnostics to quickly identify and resolve complex issues.",
    icon: <Cpu className="h-10 w-10 text-blue-600" />,
    image: "/placeholder.svg?height=300&width=400",
    link: "/services/diagnostics",
    features: [
      "OEM diagnostic software",
      "ECM programming",
      "Parameter adjustments",
      "Fault code analysis",
      "Performance optimization",
    ],
  },
  {
    title: "Warranty Services",
    description: "Factory-authorized warranty repairs for major equipment manufacturers.",
    icon: <Shield className="h-10 w-10 text-blue-600" />,
    image: "/placeholder.svg?height=300&width=400",
    link: "/services/warranty",
    features: [
      "Manufacturer warranty repairs",
      "Extended warranty service",
      "Warranty claim processing",
      "OEM parts replacement",
      "Documentation and reporting",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Services</h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl">
              Comprehensive repair and maintenance services for all your diesel and heavy equipment needs. Our
              experienced technicians are equipped to handle any job, big or small.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col rounded-lg border bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h2 className="mb-2 text-2xl font-bold">{service.title}</h2>
                  <p className="mb-6 text-gray-600">{service.description}</p>

                  <h3 className="mb-3 text-lg font-semibold">What we offer:</h3>
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2 text-blue-600">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <Button asChild className="bg-blue-600 hover:bg-blue-700">
                      <Link href={service.link} className="flex items-center">
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
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
              Need a service not listed here?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-blue-100">
              Contact us to discuss your specific requirements. We offer customized solutions for all your equipment
              needs.
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

