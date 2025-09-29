"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Calendar, User, ArrowRight, Clock } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const categories = ["All", "Skincare", "Injectables", "Hair Care", "Wellness", "Nutrition", "Beauty Tips"]

const blogPosts = [
  {
    id: 1,
    title: "The Complete Guide to Botox: What You Need to Know",
    excerpt:
      "Discover everything about Botox treatments, from how they work to what results you can expect. Learn about the procedure, recovery, and long-term benefits.",
    category: "Injectables",
    author: "Dr. Arshni Malde",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "/botox-treatment-african-woman.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "HydraFacial vs Traditional Facials: Which is Right for You?",
    excerpt:
      "Compare the benefits of HydraFacial technology with traditional facial treatments. Understand the differences and choose the best option for your skin type.",
    category: "Skincare",
    author: "Dr. Arshni Malde",
    date: "March 12, 2024",
    readTime: "6 min read",
    image: "/hydrafacial-treatment-african-woman-glowing-skin.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "Hair Restoration with PRP: A Natural Solution",
    excerpt:
      "Learn how Platelet-Rich Plasma therapy can help restore hair growth naturally. Explore the science behind PRP and real patient results.",
    category: "Hair Care",
    author: "Dr. Arshni Malde",
    date: "March 10, 2024",
    readTime: "7 min read",
    image: "/african-woman-beautiful-healthy-hair.jpg",
    featured: false,
  },
  {
    id: 4,
    title: "IV Therapy Benefits: Boost Your Wellness from Within",
    excerpt:
      "Discover how IV vitamin therapy can enhance your energy, immunity, and overall wellness. Learn about different IV drip formulations and their benefits.",
    category: "Wellness",
    author: "Dr. Arshni Malde",
    date: "March 8, 2024",
    readTime: "5 min read",
    image: "/wellness-iv-therapy-african-woman.jpg",
    featured: false,
  },
  {
    id: 5,
    title: "Dermal Fillers: Achieving Natural-Looking Results",
    excerpt:
      "Understand how dermal fillers work to restore volume and smooth wrinkles. Learn about different filler types and what to expect during treatment.",
    category: "Injectables",
    author: "Dr. Arshni Malde",
    date: "March 5, 2024",
    readTime: "6 min read",
    image: "/dermal-fillers-african-woman-natural-beauty.jpg",
    featured: false,
  },
  {
    id: 6,
    title: "Chemical Peels: Transform Your Skin Texture",
    excerpt:
      "Explore the benefits of chemical peels for treating acne, pigmentation, and aging skin. Learn about different peel strengths and recovery times.",
    category: "Skincare",
    author: "Dr. Arshni Malde",
    date: "March 3, 2024",
    readTime: "7 min read",
    image: "/chemical-peel-african-woman-smooth-skin.jpg",
    featured: false,
  },
  {
    id: 7,
    title: "Nutrition for Glowing Skin: What to Eat for Beauty",
    excerpt:
      "Discover the connection between nutrition and skin health. Learn which foods promote radiant skin and support your aesthetic treatments.",
    category: "Nutrition",
    author: "Dr. Arshni Malde",
    date: "March 1, 2024",
    readTime: "5 min read",
    image: "/healthy-nutrition-african-woman-glowing-skin.jpg",
    featured: false,
  },
  {
    id: 8,
    title: "Thread Lift: The Non-Surgical Facelift Alternative",
    excerpt:
      "Learn about thread lift procedures for facial rejuvenation without surgery. Understand the technique, results, and recovery process.",
    category: "Injectables",
    author: "Dr. Arshni Malde",
    date: "February 28, 2024",
    readTime: "8 min read",
    image: "/thread-lift-african-woman-youthful-face.jpg",
    featured: false,
  },
  {
    id: 9,
    title: "Skincare Routine for Different Skin Types",
    excerpt:
      "Create the perfect skincare routine tailored to your skin type. Get expert recommendations for products and treatments that work best for you.",
    category: "Beauty Tips",
    author: "Dr. Arshni Malde",
    date: "February 25, 2024",
    readTime: "6 min read",
    image: "/skincare-routine-african-woman-beauty.jpg",
    featured: false,
  },
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Beauty & Wellness Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert insights, treatment guides, and beauty tips from our medical professionals
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 animate-fade-in-up animation-delay-100">
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-14 pl-12 text-base"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && selectedCategory === "All" && !searchQuery && (
          <div className="mb-16 animate-fade-in-up animation-delay-200">
            <h2 className="text-3xl font-serif mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <Card
                  key={post.id}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-0">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-sm">
                          <User className="w-4 h-4 text-muted-foreground" />
                          <span>{post.author}</span>
                          <Calendar className="w-4 h-4 text-muted-foreground ml-2" />
                          <span>{post.date}</span>
                        </div>
                        <Link href={`/blog/${post.id}`}>
                          <Button variant="ghost" size="sm" className="group/btn">
                            Read More
                            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="animate-fade-in-up animation-delay-300">
          {regularPosts.length === 0 && featuredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No articles found matching your criteria.</p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("All")
                }}
                className="mt-6"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <>
              {regularPosts.length > 0 && (
                <>
                  <h2 className="text-3xl font-serif mb-8">
                    {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {regularPosts.map((post, index) => (
                      <Card
                        key={post.id}
                        className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <CardContent className="p-0">
                          <div className="aspect-video overflow-hidden">
                            <img
                              src={post.image || "/placeholder.svg"}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div className="p-6">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                                {post.category}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                              </span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                              {post.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                              <Calendar className="w-4 h-4" />
                              <span>{post.date}</span>
                            </div>
                            <Link href={`/blog/${post.id}`}>
                              <Button variant="ghost" size="sm" className="w-full group/btn">
                                Read Article
                                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                              </Button>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>

        {/* Newsletter Signup */}
        <Card className="mt-16 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 animate-fade-in-up animation-delay-400">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-serif mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest beauty tips, treatment updates, and exclusive offers delivered
              to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="h-12 flex-1" />
              <Button type="submit" className="h-12 px-8">
                Subscribe
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
