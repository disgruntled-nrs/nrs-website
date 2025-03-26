"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPageClient() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitSuccess(false)
    setSubmitError(false)

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitSuccess(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })
    } catch (error) {
      setSubmitError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Contact Us</h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl">
              Have a question or need a quote? We're here to help. Reach out to our team using the form below or contact
              information.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Get in Touch</h2>
              <p className="mt-3 text-lg text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" value={formState.name} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formState.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Needed</Label>
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="Engine Repair">Engine Repair</option>
                      <option value="Transmission Services">Transmission Services</option>
                      <option value="Hydraulic Systems">Hydraulic Systems</option>
                      <option value="Preventative Maintenance">Preventative Maintenance</option>
                      <option value="Electrical Systems">Electrical Systems</option>
                      <option value="Mobile Repair">Mobile Repair</option>
                      <option value="Computer Diagnostics">Computer Diagnostics</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {submitSuccess && (
                  <div className="rounded-md bg-green-50 p-4 text-sm text-green-800">
                    Thank you for your message! We'll get back to you shortly.
                  </div>
                )}

                {submitError && (
                  <div className="rounded-md bg-red-50 p-4 text-sm text-red-800">
                    There was an error sending your message. Please try again.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="rounded-lg bg-gray-50 p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Contact Information</h2>

                <div className="mt-8 space-y-6">
                  <div className="flex">
                    <MapPin className="h-6 w-6 flex-shrink-0 text-blue-600" />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Our Location</h3>
                      <p className="mt-1 text-gray-600">
                        123 Repair Lane
                        <br />
                        Mechanicsville, CA 90210
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <Phone className="h-6 w-6 flex-shrink-0 text-blue-600" />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                      <p className="mt-1 text-gray-600">(555) 123-4567</p>
                      <p className="text-sm text-gray-500">For emergency repairs: (555) 987-6543</p>
                    </div>
                  </div>

                  <div className="flex">
                    <Mail className="h-6 w-6 flex-shrink-0 text-blue-600" />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Email</h3>
                      <p className="mt-1 text-gray-600">info@nipperrepair.com</p>
                      <p className="text-sm text-gray-500">For quotes: quotes@nipperrepair.com</p>
                    </div>
                  </div>

                  <div className="flex">
                    <Clock className="h-6 w-6 flex-shrink-0 text-blue-600" />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
                      <div className="mt-1 text-gray-600">
                        <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                        <p>Saturday: 8:00 AM - 2:00 PM</p>
                        <p>Sunday: Closed</p>
                        <p className="mt-2 text-sm text-gray-500">24/7 Emergency Service Available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-[400px] w-full">
                  <Image src="/placeholder.svg?height=400&width=600" alt="Map location" fill className="object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50">
                    <p className="text-center text-gray-800">
                      Interactive map would be embedded here
                      <br />
                      (Google Maps, Mapbox, etc.)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

