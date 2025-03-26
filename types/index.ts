// User types
export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  companyName?: string
  phone?: string
  role: "admin" | "customer" | "technician"
}

// Equipment types
export interface Equipment {
  id: string
  name: string
  model: string
  serialNumber: string
  type: string
  manufacturer: string
  purchaseDate?: string
  lastServiceDate?: string
  nextServiceDate?: string
  status: "operational" | "maintenance_due" | "in_repair" | "out_of_service"
  ownerId: string
  notes?: string
  image?: string
}

// Service types
export interface ServiceRequest {
  id: string
  equipmentId: string
  customerId: string
  technicianId?: string
  issue: string
  description?: string
  status: "pending" | "scheduled" | "in_progress" | "pending_parts" | "completed" | "cancelled"
  priority: "low" | "normal" | "medium" | "high" | "emergency"
  createdAt: string
  scheduledDate?: string
  completedDate?: string
  notes?: string
}

// Invoice types
export interface Invoice {
  id: string
  customerId: string
  amount: number
  status: "draft" | "sent" | "paid" | "partially_paid" | "overdue" | "cancelled"
  dueDate: string
  issueDate: string
  items: InvoiceItem[]
  notes?: string
}

export interface InvoiceItem {
  id: string
  description: string
  quantity: number
  unitPrice: number
  total: number
}

// Subscription types
export interface Subscription {
  id: string
  customerId: string
  plan: "basic" | "professional" | "enterprise"
  status: "active" | "cancelled" | "past_due"
  startDate: string
  endDate?: string
  renewalDate: string
  paymentMethod?: string
}

// Software product types
export interface SoftwareProduct {
  id: number
  name: string
  description: string
  price: number
  discountPrice: number | null
  category: string
  image: string
  features: string[]
  badge?: string
}

// Forum types
export interface ForumCategory {
  id: number
  name: string
  description: string
  topics: number
  posts: number
  icon: string
}

export interface ForumTopic {
  id: number
  title: string
  category: string
  author: {
    name: string
    avatar: string
  }
  replies: number
  views: number
  lastActivity: string
  solved: boolean
}

