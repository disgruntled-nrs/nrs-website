// This file contains mock API functions that would normally connect to a backend
// In a real application, these would make actual API calls

import type { Equipment, ServiceRequest, Invoice, Subscription, User } from "@/types"
import { generateServiceRequestNumber } from "./utils"

// Mock data
const mockEquipment: Equipment[] = [
  {
    id: "1",
    name: "CAT 320 Excavator",
    model: "320 GC",
    serialNumber: "CAT0320GC123456",
    type: "Excavator",
    manufacturer: "Caterpillar",
    purchaseDate: "2022-05-15",
    lastServiceDate: "2025-04-28",
    nextServiceDate: "2025-05-15",
    status: "operational",
    ownerId: "1",
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: "2",
    name: "John Deere 624K Loader",
    model: "624K",
    serialNumber: "JD624K789012",
    type: "Loader",
    manufacturer: "John Deere",
    purchaseDate: "2021-08-10",
    lastServiceDate: "2025-03-15",
    nextServiceDate: "2025-05-22",
    status: "maintenance_due",
    ownerId: "1",
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: "3",
    name: "Cummins QSB6.7 Engine",
    model: "QSB6.7",
    serialNumber: "CUM67345678",
    type: "Engine",
    manufacturer: "Cummins",
    purchaseDate: "2023-01-20",
    lastServiceDate: "2025-02-10",
    nextServiceDate: "2025-06-03",
    status: "operational",
    ownerId: "1",
    image: "/placeholder.svg?height=100&width=200",
  },
]

// API functions
export async function getEquipment(userId: string): Promise<Equipment[]> {
  // In a real app, this would fetch from an API
  return mockEquipment.filter((item) => item.ownerId === userId)
}

export async function getEquipmentById(id: string): Promise<Equipment | null> {
  const equipment = mockEquipment.find((item) => item.id === id)
  return equipment || null
}

export async function createServiceRequest(data: Partial<ServiceRequest>): Promise<ServiceRequest> {
  // In a real app, this would send data to an API
  const newRequest: ServiceRequest = {
    id: generateServiceRequestNumber(),
    equipmentId: data.equipmentId || "",
    customerId: data.customerId || "",
    issue: data.issue || "",
    description: data.description || "",
    status: "pending",
    priority: data.priority || "normal",
    createdAt: new Date().toISOString(),
    ...data,
  }

  return newRequest
}

export async function getInvoices(userId: string): Promise<Invoice[]> {
  // In a real app, this would fetch from an API
  return [
    {
      id: "INV-2025-042",
      customerId: userId,
      amount: 750.0,
      status: "paid",
      dueDate: "2025-05-10",
      issueDate: "2025-04-25",
      items: [
        {
          id: "1",
          description: "CAT 320 Excavator - Oil Change & Maintenance",
          quantity: 1,
          unitPrice: 750.0,
          total: 750.0,
        },
      ],
    },
    {
      id: "INV-2025-039",
      customerId: userId,
      amount: 1250.0,
      status: "partially_paid",
      dueDate: "2025-05-01",
      issueDate: "2025-04-15",
      items: [
        {
          id: "1",
          description: "John Deere 624K Loader - Transmission Repair",
          quantity: 1,
          unitPrice: 1250.0,
          total: 1250.0,
        },
      ],
    },
  ]
}

export async function getSubscription(userId: string): Promise<Subscription | null> {
  // In a real app, this would fetch from an API
  return {
    id: "1",
    customerId: userId,
    plan: "professional",
    status: "active",
    startDate: "2025-01-15",
    renewalDate: "2025-05-15",
    paymentMethod: "visa_4242",
  }
}

export async function updateProfile(userId: string, data: Partial<User>): Promise<User> {
  // In a real app, this would send data to an API
  return {
    id: userId,
    firstName: data.firstName || "John",
    lastName: data.lastName || "Smith",
    email: data.email || "demo@example.com",
    companyName: data.companyName || "Smith Construction Co.",
    phone: data.phone || "(555) 123-4567",
    role: "customer",
  }
}

export async function sendChatMessage(message: string): Promise<{ text: string; containsKeyword: boolean }> {
  // Check for special keyword that would trigger SMS notification
  const containsEmergencyKeyword = message.toLowerCase().includes("urgent help")

  // In a real app, this would send the message to a backend service
  // and potentially trigger an SMS notification

  return {
    text: containsEmergencyKeyword
      ? "I've detected that you need urgent assistance. I'm connecting you with our on-call technician via SMS. A technician will contact you shortly."
      : "Thank you for your message. How else can I assist you?",
    containsKeyword: containsEmergencyKeyword,
  }
}

