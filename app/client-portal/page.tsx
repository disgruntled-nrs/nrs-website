import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import ClientPortalLogin from "@/components/client-portal-login"

export const metadata = {
  title: "Client Portal | Nipper Repair Services",
  description:
    "Access your client portal to manage equipment, schedule service, update your profile, and handle payments.",
}

export default function ClientPortalPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Client Portal</h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl">
              Manage your equipment, schedule service, and handle payments all in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Login Section */}
      <section className="py-16">
        <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8">
          <ClientPortalLogin />
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Portal Features</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our client portal provides powerful tools to help you manage your equipment and service needs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Equipment Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Track all your equipment in one place",
                    "View maintenance history",
                    "Access equipment documentation",
                    "Set up maintenance reminders",
                    "Track warranty information",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Service Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Request service appointments",
                    "Define scope of work",
                    "Track service status",
                    "View service history",
                    "Approve estimates online",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Billing & Subscriptions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "View and pay invoices",
                    "Manage subscription plans",
                    "Access payment history",
                    "Download financial reports",
                    "Set up automatic payments",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">What Our Clients Say</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <p className="italic mb-4">
                  "The client portal has revolutionized how we manage our equipment maintenance. We can easily schedule
                  service, track repairs, and manage our subscription all in one place."
                </p>
                <div>
                  <p className="font-semibold">Robert Johnson</p>
                  <p className="text-sm text-gray-600">Operations Manager, Industrial Solutions Inc.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p className="italic mb-4">
                  "Being able to see our complete service history and equipment documentation has made our maintenance
                  planning so much more efficient. The portal is intuitive and easy to use."
                </p>
                <div>
                  <p className="font-semibold">Maria Rodriguez</p>
                  <p className="text-sm text-gray-600">Facility Manager, Precision Manufacturing</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Subscription Plans</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the plan that best fits your maintenance needs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Basic</CardTitle>
                <CardDescription>For small operations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-3xl font-bold">$99</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3">
                  {[
                    "Up to 5 equipment items",
                    "Quarterly maintenance checks",
                    "Basic diagnostic services",
                    "Email support",
                    "Portal access",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600">Select Plan</Button>
              </CardFooter>
            </Card>

            <Card className="border-blue-600 shadow-lg">
              <CardHeader className="bg-blue-600 text-white">
                <CardTitle>Professional</CardTitle>
                <CardDescription className="text-blue-100">Most popular</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-3xl font-bold">$249</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3">
                  {[
                    "Up to 15 equipment items",
                    "Monthly maintenance checks",
                    "Advanced diagnostic services",
                    "Priority support",
                    "Portal access",
                    "Fluid analysis",
                    "Discounted emergency service",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600">Select Plan</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>For large fleets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-3xl font-bold">$499</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3">
                  {[
                    "Unlimited equipment items",
                    "Weekly maintenance checks",
                    "Comprehensive diagnostic services",
                    "24/7 priority support",
                    "Portal access",
                    "Fluid analysis",
                    "Free emergency service",
                    "Dedicated technician",
                    "Custom reporting",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600">Select Plan</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to get started?</h2>
          <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
            Create your client portal account today and take control of your equipment management.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="#top">Create Account</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

