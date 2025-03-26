"use client"

import { Input } from "@/components/ui/input"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Settings,
  Truck,
  Calendar,
  FileText,
  CreditCard,
  Bell,
  PenToolIcon as Tool,
  Clock,
  CheckCircle,
} from "lucide-react"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/client-portal/dashboard" className="flex items-center">
                <Image
                  src="/placeholder.svg?height=40&width=120"
                  alt="Nipper Repair Services Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
                <span className="ml-2 text-lg font-semibold">Client Portal</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-5 w-5 mr-2" />
                <span className="sr-only sm:not-sr-only">Notifications</span>
              </Button>
              <div className="flex items-center space-x-2">
                <div className="relative h-8 w-8 rounded-full bg-gray-200 overflow-hidden">
                  <Image src="/placeholder.svg?height=32&width=32" alt="User avatar" fill className="object-cover" />
                </div>
                <span className="hidden md:inline-block font-medium">John Smith</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-64 flex-shrink-0">
            <nav className="space-y-1">
              {[
                { name: "Overview", href: "#overview", icon: <Settings className="h-5 w-5" />, tab: "overview" },
                { name: "Equipment", href: "#equipment", icon: <Truck className="h-5 w-5" />, tab: "equipment" },
                { name: "Service Requests", href: "#service", icon: <Tool className="h-5 w-5" />, tab: "service" },
                { name: "Schedule", href: "#schedule", icon: <Calendar className="h-5 w-5" />, tab: "schedule" },
                { name: "Invoices", href: "#invoices", icon: <FileText className="h-5 w-5" />, tab: "invoices" },
                {
                  name: "Subscription",
                  href: "#subscription",
                  icon: <CreditCard className="h-5 w-5" />,
                  tab: "subscription",
                },
                { name: "Profile", href: "#profile", icon: <Settings className="h-5 w-5" />, tab: "profile" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    setActiveTab(item.tab)
                  }}
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                    activeTab === item.tab ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.icon}
                  <span className="ml-3">{item.name}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <TabsContent value="overview" className={activeTab === "overview" ? "block" : "hidden"}>
              <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center">
                      <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                        <Truck className="h-6 w-6" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-500">Total Equipment</p>
                        <p className="text-2xl font-bold">12</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center">
                      <div className="p-2 rounded-full bg-yellow-100 text-yellow-600">
                        <Tool className="h-6 w-6" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-500">Active Service Requests</p>
                        <p className="text-2xl font-bold">3</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center">
                      <div className="p-2 rounded-full bg-green-100 text-green-600">
                        <CheckCircle className="h-6 w-6" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-500">Subscription Status</p>
                        <p className="text-lg font-bold">Professional</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Upcoming Maintenance */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Upcoming Maintenance</CardTitle>
                  <CardDescription>Scheduled maintenance for your equipment</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        equipment: "CAT 320 Excavator",
                        type: "Regular Service",
                        date: "May 15, 2025",
                        status: "Scheduled",
                      },
                      {
                        equipment: "John Deere 624K Loader",
                        type: "Oil Change",
                        date: "May 22, 2025",
                        status: "Scheduled",
                      },
                      {
                        equipment: "Cummins QSB6.7 Engine",
                        type: "Inspection",
                        date: "June 3, 2025",
                        status: "Pending Confirmation",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">{item.equipment}</p>
                          <p className="text-sm text-gray-500">
                            {item.type} • {item.date}
                          </p>
                        </div>
                        <Badge variant={item.status === "Scheduled" ? "outline" : "secondary"}>{item.status}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Scheduled Maintenance
                  </Button>
                </CardFooter>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest updates on your equipment and services</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Service Completed",
                        description: "Oil change and filter replacement for CAT 320 Excavator",
                        date: "April 28, 2025",
                        icon: <CheckCircle className="h-5 w-5 text-green-500" />,
                      },
                      {
                        title: "Invoice Paid",
                        description: "Payment received for invoice #INV-2025-042",
                        date: "April 25, 2025",
                        icon: <CreditCard className="h-5 w-5 text-blue-500" />,
                      },
                      {
                        title: "Service Request Created",
                        description: "New service request for John Deere 624K Loader",
                        date: "April 22, 2025",
                        icon: <Tool className="h-5 w-5 text-yellow-500" />,
                      },
                      {
                        title: "Equipment Added",
                        description: "Added Cummins QSB6.7 Engine to your equipment list",
                        date: "April 15, 2025",
                        icon: <Truck className="h-5 w-5 text-purple-500" />,
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex">
                        <div className="mr-4 flex-shrink-0">{item.icon}</div>
                        <div>
                          <p className="font-medium">{item.title}</p>
                          <p className="text-sm text-gray-500">{item.description}</p>
                          <p className="text-xs text-gray-400 mt-1">{item.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="mx-auto">
                    View All Activity
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="equipment" className={activeTab === "equipment" ? "block" : "hidden"}>
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">My Equipment</h1>
                <Button className="bg-blue-600">Add Equipment</Button>
              </div>

              <div className="grid gap-6">
                {[
                  {
                    name: "CAT 320 Excavator",
                    model: "320 GC",
                    serialNumber: "CAT0320GC123456",
                    lastService: "April 28, 2025",
                    nextService: "May 15, 2025",
                    status: "Operational",
                    image: "/placeholder.svg?height=100&width=200",
                  },
                  {
                    name: "John Deere 624K Loader",
                    model: "624K",
                    serialNumber: "JD624K789012",
                    lastService: "March 15, 2025",
                    nextService: "May 22, 2025",
                    status: "Maintenance Due",
                    image: "/placeholder.svg?height=100&width=200",
                  },
                  {
                    name: "Cummins QSB6.7 Engine",
                    model: "QSB6.7",
                    serialNumber: "CUM67345678",
                    lastService: "February 10, 2025",
                    nextService: "June 3, 2025",
                    status: "Operational",
                    image: "/placeholder.svg?height=100&width=200",
                  },
                  {
                    name: "Komatsu PC210 Excavator",
                    model: "PC210LC-11",
                    serialNumber: "KOM210LC987654",
                    lastService: "April 5, 2025",
                    nextService: "July 5, 2025",
                    status: "In Repair",
                    image: "/placeholder.svg?height=100&width=200",
                  },
                ].map((equipment, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="relative h-48 md:h-auto md:w-48 flex-shrink-0">
                        <Image
                          src={equipment.image || "/placeholder.svg"}
                          alt={equipment.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold">{equipment.name}</h3>
                            <p className="text-gray-500">Model: {equipment.model}</p>
                            <p className="text-gray-500">Serial: {equipment.serialNumber}</p>
                          </div>
                          <Badge
                            className={
                              equipment.status === "Operational"
                                ? "bg-green-100 text-green-800"
                                : equipment.status === "Maintenance Due"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-red-100 text-red-800"
                            }
                          >
                            {equipment.status}
                          </Badge>
                        </div>

                        <div className="mt-4 grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-500">Last Service</p>
                            <p className="font-medium">{equipment.lastService}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Next Service</p>
                            <p className="font-medium">{equipment.nextService}</p>
                          </div>
                        </div>

                        <div className="mt-6 flex space-x-3">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          <Button variant="outline" size="sm">
                            Service History
                          </Button>
                          <Button variant="outline" size="sm">
                            Request Service
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="service" className={activeTab === "service" ? "block" : "hidden"}>
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Service Requests</h1>
                <Button className="bg-blue-600">New Service Request</Button>
              </div>

              <Tabs defaultValue="active">
                <TabsList>
                  <TabsTrigger value="active">Active Requests</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>

                <TabsContent value="active" className="mt-6">
                  <div className="space-y-4">
                    {[
                      {
                        id: "SR-2025-042",
                        equipment: "Komatsu PC210 Excavator",
                        issue: "Hydraulic system pressure loss",
                        status: "In Progress",
                        created: "April 20, 2025",
                        scheduled: "April 30, 2025",
                        priority: "High",
                      },
                      {
                        id: "SR-2025-039",
                        equipment: "John Deere 624K Loader",
                        issue: "Regular maintenance - oil change and filter replacement",
                        status: "Scheduled",
                        created: "April 18, 2025",
                        scheduled: "May 22, 2025",
                        priority: "Normal",
                      },
                      {
                        id: "SR-2025-036",
                        equipment: "Cummins QSB6.7 Engine",
                        issue: "Check engine light on - diagnostic needed",
                        status: "Pending Parts",
                        created: "April 15, 2025",
                        scheduled: "TBD",
                        priority: "Medium",
                      },
                    ].map((request, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                              <div className="flex items-center">
                                <h3 className="text-lg font-bold">{request.id}</h3>
                                <Badge
                                  className={`ml-3 ${
                                    request.status === "In Progress"
                                      ? "bg-blue-100 text-blue-800"
                                      : request.status === "Scheduled"
                                        ? "bg-green-100 text-green-800"
                                        : "bg-yellow-100 text-yellow-800"
                                  }`}
                                >
                                  {request.status}
                                </Badge>
                                <Badge
                                  variant="outline"
                                  className={`ml-2 ${
                                    request.priority === "High"
                                      ? "border-red-200 text-red-800"
                                      : request.priority === "Medium"
                                        ? "border-yellow-200 text-yellow-800"
                                        : "border-green-200 text-green-800"
                                  }`}
                                >
                                  {request.priority} Priority
                                </Badge>
                              </div>
                              <p className="mt-2 font-medium">{request.equipment}</p>
                              <p className="mt-1 text-gray-600">{request.issue}</p>
                              <div className="mt-2 flex items-center text-sm text-gray-500">
                                <Calendar className="mr-1 h-4 w-4" />
                                <span>Created: {request.created}</span>
                                <span className="mx-2">•</span>
                                <Clock className="mr-1 h-4 w-4" />
                                <span>Scheduled: {request.scheduled}</span>
                              </div>
                            </div>
                            <div className="mt-4 md:mt-0 flex space-x-3">
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                              <Button variant="outline" size="sm">
                                Update
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="completed" className="mt-6">
                  <div className="space-y-4">
                    {[
                      {
                        id: "SR-2025-035",
                        equipment: "CAT 320 Excavator",
                        issue: "Regular maintenance - oil change and filter replacement",
                        completed: "April 28, 2025",
                        technician: "Mike Johnson",
                      },
                      {
                        id: "SR-2025-028",
                        equipment: "John Deere 624K Loader",
                        issue: "Transmission fluid leak repair",
                        completed: "April 10, 2025",
                        technician: "Robert Smith",
                      },
                    ].map((request, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                              <div className="flex items-center">
                                <h3 className="text-lg font-bold">{request.id}</h3>
                                <Badge className="ml-3 bg-gray-100 text-gray-800">Completed</Badge>
                              </div>
                              <p className="mt-2 font-medium">{request.equipment}</p>
                              <p className="mt-1 text-gray-600">{request.issue}</p>
                              <div className="mt-2 flex items-center text-sm text-gray-500">
                                <Calendar className="mr-1 h-4 w-4" />
                                <span>Completed: {request.completed}</span>
                                <span className="mx-2">•</span>
                                <span>Technician: {request.technician}</span>
                              </div>
                            </div>
                            <div className="mt-4 md:mt-0">
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </TabsContent>

            <TabsContent value="invoices" className={activeTab === "invoices" ? "block" : "hidden"}>
              <h1 className="text-2xl font-bold mb-6">Invoices & Payments</h1>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Payment Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-500">Outstanding Balance</p>
                      <p className="text-2xl font-bold">$1,250.00</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-500">Last Payment</p>
                      <p className="text-2xl font-bold">$750.00</p>
                      <p className="text-xs text-gray-500">April 25, 2025</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-500">Next Payment Due</p>
                      <p className="text-2xl font-bold">$500.00</p>
                      <p className="text-xs text-gray-500">May 15, 2025</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="bg-blue-600">Make a Payment</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Invoices</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="px-4 py-2 text-left font-medium text-gray-500">Invoice #</th>
                          <th className="px-4 py-2 text-left font-medium text-gray-500">Date</th>
                          <th className="px-4 py-2 text-left font-medium text-gray-500">Service</th>
                          <th className="px-4 py-2 text-left font-medium text-gray-500">Amount</th>
                          <th className="px-4 py-2 text-left font-medium text-gray-500">Status</th>
                          <th className="px-4 py-2 text-left font-medium text-gray-500">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            id: "INV-2025-042",
                            date: "April 25, 2025",
                            service: "CAT 320 Excavator - Oil Change & Maintenance",
                            amount: 750.0,
                            status: "Paid",
                          },
                          {
                            id: "INV-2025-039",
                            date: "April 15, 2025",
                            service: "John Deere 624K Loader - Transmission Repair",
                            amount: 1250.0,
                            status: "Partially Paid",
                          },
                          {
                            id: "INV-2025-036",
                            date: "April 5, 2025",
                            service: "Monthly Subscription - Professional Plan",
                            amount: 249.0,
                            status: "Paid",
                          },
                          {
                            id: "INV-2025-032",
                            date: "March 28, 2025",
                            service: "Cummins QSB6.7 Engine - Diagnostic Service",
                            amount: 350.0,
                            status: "Paid",
                          },
                        ].map((invoice, index) => (
                          <tr key={index} className="border-b">
                            <td className="px-4 py-4 font-medium">{invoice.id}</td>
                            <td className="px-4 py-4">{invoice.date}</td>
                            <td className="px-4 py-4">{invoice.service}</td>
                            <td className="px-4 py-4">${invoice.amount.toFixed(2)}</td>
                            <td className="px-4 py-4">
                              <Badge
                                className={
                                  invoice.status === "Paid"
                                    ? "bg-green-100 text-green-800"
                                    : invoice.status === "Partially Paid"
                                      ? "bg-yellow-100 text-yellow-800"
                                      : "bg-red-100 text-red-800"
                                }
                              >
                                {invoice.status}
                              </Badge>
                            </td>
                            <td className="px-4 py-4">
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">
                                  View
                                </Button>
                                <Button variant="outline" size="sm">
                                  Download
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="mx-auto">
                    View All Invoices
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="subscription" className={activeTab === "subscription" ? "block" : "hidden"}>
              <h1 className="text-2xl font-bold mb-6">Subscription Management</h1>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Current Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-blue-700">Professional Plan</h3>
                        <p className="text-blue-600">$249.00/month</p>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800">Active</Badge>
                    </div>

                    <div className="mt-4">
                      <p className="text-sm text-gray-600">Next billing date: May 15, 2025</p>
                      <p className="text-sm text-gray-600">Member since: January 10, 2025</p>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium">Equipment Limit</p>
                        <div className="mt-1 flex items-center">
                          <span className="font-bold">12</span>
                          <span className="text-gray-500 ml-1">/ 15 items</span>
                        </div>
                        <div className="mt-1 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-600 rounded-full" style={{ width: "80%" }}></div>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium">Service Requests</p>
                        <div className="mt-1 flex items-center">
                          <span className="font-bold">3</span>
                          <span className="text-gray-500 ml-1">this month</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-medium mb-2">Plan Features:</h4>
                      <ul className="space-y-1">
                        {[
                          "Up to 15 equipment items",
                          "Monthly maintenance checks",
                          "Advanced diagnostic services",
                          "Priority support",
                          "Fluid analysis",
                          "Discounted emergency service",
                        ].map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Change Plan</Button>
                  <Button variant="outline" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                    Cancel Subscription
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center">
                        <div className="p-2 bg-blue-50 rounded-md mr-4">
                          <CreditCard className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">Visa ending in 4242</p>
                          <p className="text-sm text-gray-500">Expires 05/2027</p>
                        </div>
                      </div>
                      <Badge>Default</Badge>
                    </div>

                    <Button variant="outline">Add Payment Method</Button>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="text-sm text-gray-500">
                    Your subscription will be automatically renewed on the 15th of each month.
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="profile" className={activeTab === "profile" ? "block" : "hidden"}>
              <h1 className="text-2xl font-bold mb-6">Profile Settings</h1>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">First Name</label>
                        <Input defaultValue="John" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Last Name</label>
                        <Input defaultValue="Smith" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Company Name</label>
                      <Input defaultValue="Smith Construction Co." />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <Input defaultValue="john.smith@example.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Phone</label>
                        <Input defaultValue="(555) 123-4567" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Address</label>
                      <Input defaultValue="123 Main St" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">City</label>
                        <Input defaultValue="Anytown" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">State</label>
                        <Input defaultValue="CA" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">ZIP Code</label>
                        <Input defaultValue="90210" />
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button className="bg-blue-600">Save Changes</Button>
                </CardFooter>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Change Password</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Current Password</label>
                      <Input type="password" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">New Password</label>
                      <Input type="password" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Confirm New Password</label>
                      <Input type="password" />
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button className="bg-blue-600">Update Password</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Service Reminders",
                        description: "Receive notifications about upcoming maintenance",
                      },
                      {
                        title: "Service Updates",
                        description: "Get updates when your service status changes",
                      },
                      {
                        title: "Invoice Notifications",
                        description: "Be notified when new invoices are available",
                      },
                      {
                        title: "Payment Reminders",
                        description: "Receive reminders about upcoming payments",
                      },
                      {
                        title: "Newsletter",
                        description: "Monthly newsletter with maintenance tips and company updates",
                      },
                    ].map((notification, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{notification.title}</p>
                          <p className="text-sm text-gray-500">{notification.description}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id={`email-${index}`}
                              className="rounded border-gray-300"
                              defaultChecked
                            />
                            <label htmlFor={`email-${index}`} className="text-sm">
                              Email
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id={`sms-${index}`}
                              className="rounded border-gray-300"
                              defaultChecked={index < 2}
                            />
                            <label htmlFor={`sms-${index}`} className="text-sm">
                              SMS
                            </label>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="bg-blue-600">Save Preferences</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="schedule" className={activeTab === "schedule" ? "block" : "hidden"}>
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Service Schedule</h1>
                <Button className="bg-blue-600">Request Appointment</Button>
              </div>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Upcoming Appointments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        equipment: "CAT 320 Excavator",
                        service: "Regular Maintenance",
                        date: "May 15, 2025",
                        time: "9:00 AM - 12:00 PM",
                        technician: "Mike Johnson",
                        status: "Confirmed",
                      },
                      {
                        equipment: "John Deere 624K Loader",
                        service: "Oil Change",
                        date: "May 22, 2025",
                        time: "1:00 PM - 3:00 PM",
                        technician: "Robert Smith",
                        status: "Confirmed",
                      },
                      {
                        equipment: "Cummins QSB6.7 Engine",
                        service: "Inspection",
                        date: "June 3, 2025",
                        time: "10:00 AM - 11:30 AM",
                        technician: "Pending Assignment",
                        status: "Pending Confirmation",
                      },
                    ].map((appointment, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <div className="flex items-center">
                              <h3 className="font-bold">{appointment.equipment}</h3>
                              <Badge
                                className={`ml-3 ${
                                  appointment.status === "Confirmed"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-yellow-100 text-yellow-800"
                                }`}
                              >
                                {appointment.status}
                              </Badge>
                            </div>
                            <p className="mt-1">{appointment.service}</p>
                            <div className="mt-2 flex items-center text-sm text-gray-500">
                              <Calendar className="mr-1 h-4 w-4" />
                              <span>{appointment.date}</span>
                              <span className="mx-2">•</span>
                              <Clock className="mr-1 h-4 w-4" />
                              <span>{appointment.time}</span>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">Technician: {appointment.technician}</p>
                          </div>
                          <div className="mt-4 md:mt-0 flex space-x-3">
                            {appointment.status === "Confirmed" ? (
                              <>
                                <Button variant="outline" size="sm">
                                  Reschedule
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                >
                                  Cancel
                                </Button>
                              </>
                            ) : (
                              <>
                                <Button variant="outline" size="sm">
                                  Confirm
                                </Button>
                                <Button variant="outline" size="sm">
                                  Reschedule
                                </Button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Service History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        equipment: "CAT 320 Excavator",
                        service: "Oil Change & Filter Replacement",
                        date: "April 28, 2025",
                        technician: "Mike Johnson",
                        notes: "Replaced oil and all filters. Equipment in good condition.",
                      },
                      {
                        equipment: "John Deere 624K Loader",
                        service: "Transmission Fluid Leak Repair",
                        date: "April 10, 2025",
                        technician: "Robert Smith",
                        notes: "Replaced transmission gasket and refilled fluid. Tested operation - working properly.",
                      },
                      {
                        equipment: "Cummins QSB6.7 Engine",
                        service: "Diagnostic Service",
                        date: "March 28, 2025",
                        technician: "David Lee",
                        notes: "Diagnosed check engine light. Replaced faulty sensor. Cleared codes.",
                      },
                    ].map((service, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <h3 className="font-bold">{service.equipment}</h3>
                            <p className="mt-1">{service.service}</p>
                            <div className="mt-2 flex items-center text-sm text-gray-500">
                              <Calendar className="mr-1 h-4 w-4" />
                              <span>{service.date}</span>
                              <span className="mx-2">•</span>
                              <span>Technician: {service.technician}</span>
                            </div>
                            <p className="mt-2 text-sm">{service.notes}</p>
                          </div>
                          <div className="mt-4 md:mt-0">
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="mx-auto">
                    View Full Service History
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </div>
        </div>
      </div>
    </div>
  )
}

