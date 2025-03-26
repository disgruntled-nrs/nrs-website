import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Users, Clock, Search, PlusCircle, ArrowUpRight } from "lucide-react"

export const metadata = {
  title: "Support Forums | Nipper Repair Services",
  description:
    "Join our community forums to discuss diesel and heavy equipment repair, share knowledge, and get help from experts and peers.",
}

const forumCategories = [
  {
    id: 1,
    name: "Engine Diagnostics & Repair",
    description: "Discuss diagnostic techniques and troubleshooting for diesel engines",
    topics: 156,
    posts: 1243,
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Transmission Systems",
    description: "Get help with transmission issues and repair techniques",
    topics: 89,
    posts: 742,
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Hydraulic Systems",
    description: "Share and learn about hydraulic system diagnostics and repairs",
    topics: 124,
    posts: 987,
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Electrical & Computer Systems",
    description: "Discuss electrical issues, computer diagnostics, and ECM programming",
    topics: 112,
    posts: 876,
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    name: "Preventative Maintenance",
    description: "Best practices for maintaining diesel engines and heavy equipment",
    topics: 78,
    posts: 654,
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 6,
    name: "Software & Tools",
    description: "Discussions about diagnostic software, tools, and equipment",
    topics: 95,
    posts: 823,
    icon: "/placeholder.svg?height=40&width=40",
  },
]

const recentTopics = [
  {
    id: 1,
    title: "Troubleshooting low power issues in Cummins ISX engine",
    category: "Engine Diagnostics & Repair",
    author: {
      name: "DieselTech",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    replies: 12,
    views: 234,
    lastActivity: "2 hours ago",
    solved: true,
  },
  {
    id: 2,
    title: "DieselDiag Pro software not connecting to ECM",
    category: "Software & Tools",
    author: {
      name: "NewMechanic",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    replies: 8,
    views: 156,
    lastActivity: "5 hours ago",
    solved: false,
  },
  {
    id: 3,
    title: "Best practices for rebuilding hydraulic cylinders",
    category: "Hydraulic Systems",
    author: {
      name: "HydraulicsPro",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    replies: 24,
    views: 412,
    lastActivity: "1 day ago",
    solved: true,
  },
  {
    id: 4,
    title: "Allison transmission shifting hard between 2-3 gear",
    category: "Transmission Systems",
    author: {
      name: "TransGuru",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    replies: 15,
    views: 267,
    lastActivity: "2 days ago",
    solved: true,
  },
  {
    id: 5,
    title: "Recommended oil change intervals for CAT equipment",
    category: "Preventative Maintenance",
    author: {
      name: "FleetManager",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    replies: 18,
    views: 345,
    lastActivity: "3 days ago",
    solved: false,
  },
]

const popularTopics = [
  {
    id: 1,
    title: "Complete guide to diagnosing diesel injector problems",
    category: "Engine Diagnostics & Repair",
    replies: 87,
    views: 3452,
  },
  {
    id: 2,
    title: "How to properly flush a hydraulic system",
    category: "Hydraulic Systems",
    replies: 64,
    views: 2876,
  },
  {
    id: 3,
    title: "Comparing diagnostic software: DieselDiag vs competitors",
    category: "Software & Tools",
    replies: 56,
    views: 2345,
  },
]

export default function ForumsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Support Forums</h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl">
              Join our community of diesel and heavy equipment professionals. Ask questions, share knowledge, and
              connect with peers.
            </p>
          </div>
        </div>
      </section>

      {/* Forums Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content */}
            <div className="md:w-3/4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Discussion Forums</h2>
                <div className="flex gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input placeholder="Search forums..." className="pl-10 w-64" />
                  </div>
                  <Button className="bg-blue-600">
                    <PlusCircle className="mr-2 h-4 w-4" /> New Topic
                  </Button>
                </div>
              </div>

              <Tabs defaultValue="categories">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="categories">Categories</TabsTrigger>
                  <TabsTrigger value="recent">Recent Discussions</TabsTrigger>
                  <TabsTrigger value="popular">Popular Topics</TabsTrigger>
                </TabsList>

                <TabsContent value="categories" className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    {forumCategories.map((category) => (
                      <Link href={`/forums/category/${category.id}`} key={category.id}>
                        <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
                          <CardHeader className="flex flex-row items-start space-y-0 pb-2">
                            <div className="mr-4">
                              <Image
                                src={category.icon || "/placeholder.svg"}
                                alt={category.name}
                                width={40}
                                height={40}
                                className="rounded-md"
                              />
                            </div>
                            <div className="flex-1">
                              <CardTitle className="flex items-center">
                                {category.name}
                                <ArrowUpRight className="ml-2 h-4 w-4 text-gray-400" />
                              </CardTitle>
                              <CardDescription>{category.description}</CardDescription>
                            </div>
                          </CardHeader>
                          <CardFooter className="pt-2 text-sm text-gray-500 border-t">
                            <div className="flex items-center gap-4">
                              <span className="flex items-center">
                                <MessageSquare className="h-4 w-4 mr-1" />
                                {category.topics} topics
                              </span>
                              <span className="flex items-center">
                                <Users className="h-4 w-4 mr-1" />
                                {category.posts} posts
                              </span>
                            </div>
                          </CardFooter>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="recent" className="mt-6">
                  <Card>
                    <CardContent className="p-0">
                      <div className="divide-y">
                        {recentTopics.map((topic) => (
                          <Link href={`/forums/topic/${topic.id}`} key={topic.id} className="block hover:bg-gray-50">
                            <div className="p-4">
                              <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center">
                                  <Image
                                    src={topic.author.avatar || "/placeholder.svg"}
                                    alt={topic.author.name}
                                    width={32}
                                    height={32}
                                    className="rounded-full mr-3"
                                  />
                                  <div>
                                    <h3 className="font-medium text-lg">{topic.title}</h3>
                                    <div className="flex items-center text-sm text-gray-500">
                                      <span>by {topic.author.name}</span>
                                      <span className="mx-2">•</span>
                                      <span>{topic.category}</span>
                                    </div>
                                  </div>
                                </div>
                                {topic.solved && (
                                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                    Solved
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center text-sm text-gray-500 mt-2">
                                <span className="flex items-center mr-4">
                                  <MessageSquare className="h-3 w-3 mr-1" />
                                  {topic.replies} replies
                                </span>
                                <span className="flex items-center mr-4">
                                  <Users className="h-3 w-3 mr-1" />
                                  {topic.views} views
                                </span>
                                <span className="flex items-center">
                                  <Clock className="h-3 w-3 mr-1" />
                                  {topic.lastActivity}
                                </span>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-center border-t">
                      <Button variant="link">View All Recent Topics</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="popular" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Most Popular Discussions</CardTitle>
                      <CardDescription>Topics with the most engagement from our community</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {popularTopics.map((topic) => (
                          <Link href={`/forums/topic/${topic.id}`} key={topic.id} className="block">
                            <div className="rounded-lg border p-4 hover:bg-gray-50">
                              <h3 className="font-medium">{topic.title}</h3>
                              <div className="flex items-center text-sm text-gray-500 mt-2">
                                <span>{topic.category}</span>
                                <span className="mx-2">•</span>
                                <span className="flex items-center mr-3">
                                  <MessageSquare className="h-3 w-3 mr-1" />
                                  {topic.replies} replies
                                </span>
                                <span className="flex items-center">
                                  <Users className="h-3 w-3 mr-1" />
                                  {topic.views} views
                                </span>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link" className="mx-auto">
                        View All Popular Topics
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="md:w-1/4">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Forum Statistics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Topics:</span>
                        <span className="font-medium">654</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Posts:</span>
                        <span className="font-medium">5,325</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Members:</span>
                        <span className="font-medium">1,247</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Newest Member:</span>
                        <span className="font-medium">DieselNewbie</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Top Contributors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { name: "DieselTech", posts: 342, avatar: "/placeholder.svg?height=40&width=40" },
                        { name: "HydraulicsPro", posts: 287, avatar: "/placeholder.svg?height=40&width=40" },
                        { name: "TransGuru", posts: 253, avatar: "/placeholder.svg?height=40&width=40" },
                        { name: "MechanicJoe", posts: 198, avatar: "/placeholder.svg?height=40&width=40" },
                      ].map((user, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Image
                              src={user.avatar || "/placeholder.svg"}
                              alt={user.name}
                              width={32}
                              height={32}
                              className="rounded-full mr-3"
                            />
                            <span>{user.name}</span>
                          </div>
                          <Badge variant="outline">{user.posts} posts</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Forum Rules</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>Be respectful to other members</li>
                      <li>Stay on topic in discussions</li>
                      <li>No promotional content without permission</li>
                      <li>Do not share personal information</li>
                      <li>Use the search before posting new topics</li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="p-0">
                      Read Full Rules
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

