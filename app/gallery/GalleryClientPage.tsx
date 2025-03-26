"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    title: "Engine Rebuild",
    category: "Engine Repair",
    description: "Complete rebuild of a Cummins ISX engine for a commercial truck.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 2,
    title: "Hydraulic Cylinder Repair",
    category: "Hydraulic Systems",
    description: "Repair and rebuild of hydraulic cylinders for an excavator.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 3,
    title: "Transmission Overhaul",
    category: "Transmission Services",
    description: "Complete overhaul of an Allison transmission for a heavy-duty truck.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 4,
    title: "Mobile Repair Service",
    category: "Mobile Repair",
    description: "On-site repair of a bulldozer at a construction site.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 5,
    title: "Preventative Maintenance",
    category: "Maintenance",
    description: "Regular maintenance service for a fleet of construction equipment.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 6,
    title: "Electrical System Repair",
    category: "Electrical Systems",
    description: "Diagnosis and repair of electrical issues in a loader.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 7,
    title: "Fuel System Service",
    category: "Engine Repair",
    description: "Cleaning and repair of a diesel fuel system.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 8,
    title: "Cooling System Repair",
    category: "Engine Repair",
    description: "Replacement of a radiator and cooling system components.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 9,
    title: "Turbocharger Replacement",
    category: "Engine Repair",
    description: "Installation of a new turbocharger on a diesel engine.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 10,
    title: "Hydraulic Pump Repair",
    category: "Hydraulic Systems",
    description: "Repair of a hydraulic pump for an industrial machine.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 11,
    title: "Brake System Service",
    category: "Maintenance",
    description: "Complete brake system overhaul for a heavy-duty truck.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 12,
    title: "Computer Diagnostics",
    category: "Diagnostics",
    description: "Advanced computer diagnostics for a modern diesel engine.",
    image: "/placeholder.svg?height=600&width=800",
  },
]

const categories = [
  "All",
  "Engine Repair",
  "Transmission Services",
  "Hydraulic Systems",
  "Maintenance",
  "Mobile Repair",
  "Electrical Systems",
  "Diagnostics",
]

export default function GalleryClientPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredGallery =
    selectedCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Project Gallery</h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl">
              Browse our gallery of completed projects, equipment repairs, and before-and-after transformations.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-xl"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
                    {item.category}
                  </span>
                  <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image Modal */}
          {selectedImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
              <div className="relative max-h-[90vh] max-w-4xl overflow-auto rounded-lg bg-white">
                <button
                  className="absolute right-4 top-4 rounded-full bg-white p-2 text-gray-800 shadow-md hover:bg-gray-100"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-6 w-6" />
                </button>
                <div className="relative h-[60vh] w-full">
                  <Image
                    src={selectedImage.image || "/placeholder.svg"}
                    alt={selectedImage.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
                    {selectedImage.category}
                  </span>
                  <h3 className="mt-2 text-2xl font-bold">{selectedImage.title}</h3>
                  <p className="mt-2 text-gray-600">{selectedImage.description}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

