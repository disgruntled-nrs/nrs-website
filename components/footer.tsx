import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Image
              src="/placeholder.svg?height=40&width=120"
              alt="Nipper Repair Services Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <p className="text-sm text-gray-300">
              Professional diesel and heavy equipment repair services with over 20 years of experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/services/engine-repair" className="text-gray-300 hover:text-white">
                  Engine Repair
                </Link>
              </li>
              <li>
                <Link href="/services/transmission" className="text-gray-300 hover:text-white">
                  Transmission Services
                </Link>
              </li>
              <li>
                <Link href="/services/hydraulic" className="text-gray-300 hover:text-white">
                  Hydraulic Systems
                </Link>
              </li>
              <li>
                <Link href="/services/maintenance" className="text-gray-300 hover:text-white">
                  Preventative Maintenance
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-300 hover:text-white">
                  Diagnostic Software
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-white">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/forums" className="text-gray-300 hover:text-white">
                  Support Forums
                </Link>
              </li>
              <li>
                <Link href="/client-portal" className="text-gray-300 hover:text-white">
                  Client Portal
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact Us</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 flex-shrink-0 text-gray-400" />
                <span className="text-gray-300">123 Repair Lane, Mechanicsville, CA 90210</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 flex-shrink-0 text-gray-400" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 flex-shrink-0 text-gray-400" />
                <span className="text-gray-300">info@nipperrepair.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Nipper Repair Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

