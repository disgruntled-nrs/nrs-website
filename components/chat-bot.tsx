"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, X, Send } from "lucide-react"

interface Message {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! I'm the Nipper Repair virtual assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    // Check for special keyword that would trigger SMS notification
    const containsEmergencyKeyword = inputMessage.toLowerCase().includes("urgent help")

    // Simulate bot response after delay
    setTimeout(() => {
      let botResponse = ""

      if (containsEmergencyKeyword) {
        botResponse =
          "I've detected that you need urgent assistance. I'm connecting you with our on-call technician via SMS. A technician will contact you shortly. Please ensure your phone number is up to date in your profile."
      } else if (inputMessage.toLowerCase().includes("diagnostic software")) {
        botResponse =
          "We offer several diagnostic software solutions for diesel and heavy equipment. You can view our full range at our online shop: /shop. Would you like me to tell you about a specific product?"
      } else if (inputMessage.toLowerCase().includes("repair")) {
        botResponse =
          "We provide comprehensive repair services for diesel engines and heavy equipment. Would you like to schedule a service appointment or get a quote?"
      } else if (inputMessage.toLowerCase().includes("hours") || inputMessage.toLowerCase().includes("open")) {
        botResponse =
          "Our business hours are Monday-Friday: 7:00 AM - 6:00 PM, Saturday: 8:00 AM - 2:00 PM, and we're closed on Sundays. We do offer 24/7 emergency repair services."
      } else if (inputMessage.toLowerCase().includes("contact") || inputMessage.toLowerCase().includes("phone")) {
        botResponse =
          "You can reach us at (555) 123-4567 or email us at info@nipperrepair.com. Would you like me to have someone call you back?"
      } else {
        botResponse =
          "Thank you for your message. How else can I assist you with your diesel or heavy equipment needs today?"
      }

      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <>
      {/* Chat Button */}
      <Button
        className="fixed bottom-4 right-4 rounded-full w-14 h-14 shadow-lg z-50 bg-blue-600 hover:bg-blue-700"
        onClick={toggleChat}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-20 right-4 w-80 md:w-96 shadow-xl z-50">
          <CardHeader className="bg-blue-600 text-white py-3">
            <CardTitle className="text-base font-medium flex items-center justify-between">
              <span>Nipper Repair Chat</span>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 text-white hover:bg-blue-700 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-3 h-80 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg px-3 py-2 ${
                      message.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <div>{message.text}</div>
                    <div className="text-xs mt-1 opacity-70">{formatTime(message.timestamp)}</div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 rounded-lg px-3 py-2">
                    <div className="flex space-x-1">
                      <div
                        className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          <CardFooter className="p-3 border-t">
            <div className="flex w-full space-x-2">
              <Input
                placeholder="Type a message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <Button size="icon" className="bg-blue-600 hover:bg-blue-700" onClick={handleSendMessage}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
          <div className="px-3 pb-3 text-xs text-gray-500 text-center">Type "urgent help" for emergency assistance</div>
        </Card>
      )}
    </>
  )
}

