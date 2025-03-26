import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Download, Check } from "lucide-react"

export const metadata = {
  title: "Diagnostic Software | Nipper Repair Services",
  description:
    "Browse and purchase our professional diagnostic software for diesel and heavy equipment repair and maintenance.",
}

const softwareProducts = [
  {
    id: 1,
    name: "DieselDiag Pro",
    description:
      "Advanced diagnostic software for diesel engines with comprehensive fault code analysis and repair recommendations.",
    price: 299.99,
    discountPrice: null,
    category: "diagnostic",
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "Complete fault code library for all major engine manufacturers",
      "Real-time performance monitoring",
      "Detailed repair recommendations",
      "Maintenance scheduling",
      "Compatible with standard OBD-II interfaces",
      "1 year of free updates",
    ],
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "HydraulicSys Analyzer",
    description: "Specialized software for diagnosing and testing hydraulic systems in heavy equipment.",
    price: 249.99,
    discountPrice: 199.99,
    category: "hydraulic",
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "Pressure and flow analysis",
      "Component testing procedures",
      "System efficiency calculations",
      "Troubleshooting guides",
      "Compatible with major hydraulic test equipment",
      "6 months of free updates",
    ],
    badge: "Sale",
  },
  {
    id: 3,
    name: "TransCheck Pro",
    description: "Diagnostic software for transmission systems with shift pattern analysis and solenoid testing.",
    price: 199.99,
    discountPrice: null,
    category: "transmission",
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "Transmission control module diagnostics",
      "Shift pattern analysis",
      "Solenoid testing procedures",
      "Pressure test guides",
      "Compatible with major transmission diagnostic interfaces",
      "1 year of free updates",
    ],
  },
  {
    id: 4,
    name: "FleetMaintain",
    description:
      "Comprehensive fleet maintenance management software for tracking service history, scheduling, and parts inventory.",
    price: 349.99,
    discountPrice: null,
    category: "management",
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "Equipment service history tracking",
      "Maintenance scheduling",
      "Parts inventory management",
      "Work order generation",
      "Cost tracking and reporting",
      "Multi-user access",
      "Cloud-based with mobile app",
    ],
    badge: "Premium",
  },
  {
    id: 5,
    name: "DieselDiag Lite",
    description: "Entry-level diagnostic software for diesel engines with basic fault code reading and clearing.",
    price: 99.99,
    discountPrice: null,
    category: "diagnostic",
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "Basic fault code reading and clearing",
      "Performance monitoring",
      "Compatible with standard OBD-II interfaces",
      "6 months of free updates",
    ],
  },
  {
    id: 6,
    name: "EquipDocs",
    description:
      "Digital repair documentation system with searchable repair procedures for major equipment manufacturers.",
    price: 149.99,
    discountPrice: null,
    category: "documentation",
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "Searchable repair procedures",
      "Technical specifications",
      "Wiring diagrams",
      "Component locations",
      "Regular content updates",
      "Available offline after initial download",
    ],
  },
]

export default function ShopPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Diagnostic Software</h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl">
              Professional-grade software solutions to diagnose, track, and manage your diesel and heavy equipment.
            </p>
          </div>
        </div>
      </section>

      {/* Software Products */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="diagnostic">Diagnostic</TabsTrigger>
              <TabsTrigger value="hydraulic">Hydraulic</TabsTrigger>
              <TabsTrigger value="management">Management</TabsTrigger>
            </TabsList>

            <div className="mt-12">
              <TabsContent value="all">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {softwareProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="diagnostic">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {softwareProducts
                    .filter((product) => product.category === "diagnostic")
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="hydraulic">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {softwareProducts
                    .filter((product) => product.category === "hydraulic")
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="management">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {softwareProducts
                    .filter((product) => product.category === "management")
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Support Plans */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Software Support Plans</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our software products come with dedicated support options to ensure you get the most out of your
              investment.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Basic Support</CardTitle>
                <CardDescription>Included with all purchases</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-6">Free</p>
                <ul className="space-y-3">
                  {[
                    "Email support",
                    "Knowledge base access",
                    "Community forum access",
                    "Software updates (6-12 months)",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-gray-500">Response time: Within 48 hours</p>
              </CardFooter>
            </Card>

            <Card className="border-blue-600 shadow-lg">
              <CardHeader className="bg-blue-600 text-white">
                <CardTitle>Premium Support</CardTitle>
                <CardDescription className="text-blue-100">Priority assistance</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-6">
                  $49.99<span className="text-sm font-normal">/month</span>
                </p>
                <ul className="space-y-3">
                  {[
                    "All Basic Support features",
                    "Phone support",
                    "Remote troubleshooting",
                    "Extended software updates",
                    "Priority bug fixes",
                    "Quarterly training webinars",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600">Subscribe Now</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Enterprise Support</CardTitle>
                <CardDescription>For business customers</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-6">Custom</p>
                <ul className="space-y-3">
                  {[
                    "All Premium Support features",
                    "Dedicated support agent",
                    "Custom development options",
                    "On-site training",
                    "Integration assistance",
                    "Service level agreement",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Contact Sales
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our diagnostic software products.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {[
              {
                question: "What hardware do I need to use your diagnostic software?",
                answer:
                  "Our software works with standard OBD-II interfaces for engine diagnostics. For more advanced features, we recommend our Nipper Pro Diagnostic Interface, which is available for purchase separately.",
              },
              {
                question: "Are software updates included with my purchase?",
                answer:
                  "Yes, all software products include 6-12 months of updates depending on the product. After that period, you can purchase additional updates or subscribe to our Premium Support plan for continued updates.",
              },
              {
                question: "Can I install the software on multiple computers?",
                answer:
                  "Standard licenses allow installation on up to 2 computers. For additional installations, please contact our sales team about multi-user licenses.",
              },
              {
                question: "Do you offer refunds if the software doesn't work with my equipment?",
                answer:
                  "We offer a 30-day money-back guarantee if our software doesn't work with your equipment. Please check the compatibility list before purchasing or contact our support team with specific questions.",
              },
              {
                question: "How do I receive the software after purchase?",
                answer:
                  "After purchase, you'll receive an email with download instructions and your license key. The software can be downloaded directly from our secure customer portal.",
              },
              {
                question: "Do you offer training on how to use the software?",
                answer:
                  "Yes, we provide basic training videos with all purchases. Premium Support subscribers also get access to quarterly training webinars. Custom training options are available for Enterprise customers.",
              },
            ].map((faq, index) => (
              <div key={index} className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to enhance your diagnostic capabilities?</h2>
          <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
            Our software solutions help you diagnose problems faster and more accurately, saving you time and money.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="#top">Browse Software</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
              <Link href="/contact">Request Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function ProductCard({ product }) {
  return (
    <Card className="flex flex-col h-full">
      <div className="relative">
        <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
          <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
        </div>
        {product.badge && (
          <Badge
            className={`absolute top-2 right-2 ${
              product.badge === "Sale" ? "bg-red-500" : product.badge === "Best Seller" ? "bg-green-500" : "bg-blue-500"
            }`}
          >
            {product.badge}
          </Badge>
        )}
      </div>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-baseline mb-4">
          {product.discountPrice ? (
            <>
              <span className="text-2xl font-bold">${product.discountPrice.toFixed(2)}</span>
              <span className="ml-2 text-lg text-gray-500 line-through">${product.price.toFixed(2)}</span>
            </>
          ) : (
            <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
          )}
        </div>
        <h4 className="font-semibold mb-2">Key Features:</h4>
        <ul className="space-y-1 text-sm">
          {product.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
          {product.features.length > 3 && (
            <li className="text-sm text-gray-500">+ {product.features.length - 3} more features</li>
          )}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-col space-y-3">
        <Button className="w-full bg-blue-600">
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
        <Button variant="outline" className="w-full">
          <Download className="mr-2 h-4 w-4" /> Download Demo
        </Button>
      </CardFooter>
    </Card>
  )
}

