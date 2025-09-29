"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Filter, Eye, Calendar, User } from "lucide-react"

const filters = [
  { id: "all", label: "All Results", count: 48 },
  { id: "injectables", label: "Botox & Fillers", count: 18 },
  { id: "skin", label: "Skin Treatments", count: 12 },
  { id: "hair", label: "Hair Restoration", count: 8 },
  { id: "body", label: "Body Contouring", count: 6 },
  { id: "iv", label: "IV Therapy", count: 4 },
]

const results = [
  {
    id: 1,
    category: "injectables",
    treatment: "Botox & Dermal Fillers",
    timeframe: "3 months post-treatment",
    gender: "Female",
    age: "35-40",
    before: "/placeholder.svg?height=400&width=300",
    after: "/placeholder.svg?height=400&width=300",
    description:
      "Natural-looking facial rejuvenation with Botox for forehead lines and dermal fillers for cheek enhancement.",
    results: ["Smoother forehead", "Enhanced cheek volume", "Natural appearance", "Increased confidence"],
  },
  {
    id: 2,
    category: "skin",
    treatment: "HydraFacial Series",
    timeframe: "After 4 sessions",
    gender: "Female",
    age: "28-32",
    before: "/placeholder.svg?height=400&width=300",
    after: "/placeholder.svg?height=400&width=300",
    description:
      "Comprehensive skin transformation through monthly HydraFacial treatments addressing acne and texture.",
    results: ["Clearer complexion", "Improved texture", "Reduced acne", "Glowing skin"],
  },
  {
    id: 3,
    category: "hair",
    treatment: "PRP Hair Restoration",
    timeframe: "6 months post-treatment",
    gender: "Male",
    age: "40-45",
    before: "/placeholder.svg?height=400&width=300",
    after: "/placeholder.svg?height=400&width=300",
    description: "Significant hair regrowth achieved through PRP therapy sessions targeting male pattern baldness.",
    results: ["Increased hair density", "New hair growth", "Stronger hair", "Restored confidence"],
  },
  {
    id: 4,
    category: "body",
    treatment: "Body Contouring",
    timeframe: "3 months post-treatment",
    gender: "Female",
    age: "30-35",
    before: "/placeholder.svg?height=400&width=300",
    after: "/placeholder.svg?height=400&width=300",
    description: "Non-surgical body sculpting targeting stubborn fat areas with advanced contouring technology.",
    results: ["Reduced fat deposits", "Improved contours", "Tighter skin", "Enhanced silhouette"],
  },
  {
    id: 5,
    category: "injectables",
    treatment: "Lip Enhancement",
    timeframe: "2 weeks post-treatment",
    gender: "Female",
    age: "25-30",
    before: "/placeholder.svg?height=400&width=300",
    after: "/placeholder.svg?height=400&width=300",
    description: "Subtle lip augmentation using hyaluronic acid fillers for natural volume and definition.",
    results: ["Fuller lips", "Better definition", "Natural appearance", "Balanced proportions"],
  },
  {
    id: 6,
    category: "skin",
    treatment: "Chemical Peel Series",
    timeframe: "After 3 treatments",
    gender: "Female",
    age: "45-50",
    before: "/placeholder.svg?height=400&width=300",
    after: "/placeholder.svg?height=400&width=300",
    description: "Progressive improvement in skin tone and texture through professional chemical peel treatments.",
    results: ["Even skin tone", "Reduced pigmentation", "Smoother texture", "Youthful glow"],
  },
  {
    id: 7,
    category: "hair",
    treatment: "Hair PRP Therapy",
    timeframe: "4 months post-treatment",
    gender: "Female",
    age: "38-42",
    before: "/placeholder.svg?height=400&width=300",
    after: "/placeholder.svg?height=400&width=300",
    description: "Female hair loss treatment using PRP therapy to stimulate natural hair growth and thickness.",
    results: ["Thicker hair", "Reduced hair loss", "New growth", "Improved volume"],
  },
  {
    id: 8,
    category: "injectables",
    treatment: "Profile Harmonization",
    timeframe: "1 month post-treatment",
    gender: "Male",
    age: "32-37",
    before: "/placeholder.svg?height=400&width=300",
    after: "/placeholder.svg?height=400&width=300",
    description: "Comprehensive facial balancing using strategic filler placement for masculine enhancement.",
    results: ["Defined jawline", "Balanced features", "Masculine appeal", "Natural enhancement"],
  },
]

export default function ResultsPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [selectedResult, setSelectedResult] = useState<(typeof results)[0] | null>(null)
  const [sliderPosition, setSliderPosition] = useState(50)

  const filteredResults =
    activeFilter === "all" ? results : results.filter((result) => result.category === activeFilter)

  const openModal = (result: (typeof results)[0]) => {
    setSelectedResult(result)
    setSliderPosition(50)
  }

  const closeModal = () => {
    setSelectedResult(null)
  }

  const nextResult = () => {
    if (!selectedResult) return
    const currentIndex = filteredResults.findIndex((r) => r.id === selectedResult.id)
    const nextIndex = (currentIndex + 1) % filteredResults.length
    setSelectedResult(filteredResults[nextIndex])
    setSliderPosition(50)
  }

  const prevResult = () => {
    if (!selectedResult) return
    const currentIndex = filteredResults.findIndex((r) => r.id === selectedResult.id)
    const prevIndex = (currentIndex - 1 + filteredResults.length) % filteredResults.length
    setSelectedResult(filteredResults[prevIndex])
    setSliderPosition(50)
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-accent to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <Badge className="mb-4 bg-primary text-primary-foreground">Real Transformations</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Exceptional Results Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty leading-relaxed">
              Witness the remarkable transformations achieved by our expert team. Each result represents our commitment
              to excellence and our clients' journey to enhanced confidence and natural beauty.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/book">Start Your Transformation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="text-foreground font-medium">Filter Results</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Showing {filteredResults.length} of {results.length} results
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredResults.map((result, index) => (
              <Card
                key={result.id}
                className="group cursor-pointer border-0 shadow-lg overflow-hidden card-hover"
                onClick={() => openModal(result)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${result.before})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Overlay Info */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <Badge className="bg-primary text-primary-foreground text-xs">{result.treatment}</Badge>
                    <div className="bg-white/90 rounded-full p-2">
                      <Eye className="w-4 h-4 text-foreground" />
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center space-x-4 text-xs">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{result.timeframe}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>
                          {result.gender}, {result.age}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-1">{result.treatment}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{result.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedResult && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-1">{selectedResult.treatment}</h2>
                  <p className="text-muted-foreground">{selectedResult.timeframe}</p>
                </div>
                <button onClick={closeModal} className="p-2 hover:bg-secondary rounded-full transition-colors">
                  <ArrowLeft className="w-6 h-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Before/After Slider */}
                <div className="relative">
                  <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
                    {/* Before Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${selectedResult.before})` }}
                    />

                    {/* After Image with Clip Path */}
                    <div
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300"
                      style={{
                        backgroundImage: `url(${selectedResult.after})`,
                        clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                      }}
                    />

                    {/* Slider Handle */}
                    <div
                      className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize z-10"
                      style={{ left: `${sliderPosition}%` }}
                      onMouseDown={(e) => {
                        const rect = e.currentTarget.parentElement?.getBoundingClientRect()
                        if (!rect) return

                        const handleMouseMove = (e: MouseEvent) => {
                          const newPosition = ((e.clientX - rect.left) / rect.width) * 100
                          setSliderPosition(Math.max(0, Math.min(100, newPosition)))
                        }

                        const handleMouseUp = () => {
                          document.removeEventListener("mousemove", handleMouseMove)
                          document.removeEventListener("mouseup", handleMouseUp)
                        }

                        document.addEventListener("mousemove", handleMouseMove)
                        document.addEventListener("mouseup", handleMouseUp)
                      }}
                    >
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                        <div className="w-4 h-4 border-2 border-primary-foreground rounded-full" />
                      </div>
                    </div>

                    {/* Labels */}
                    <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                      Before
                    </div>
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                      After
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between mt-4">
                    <button
                      onClick={prevResult}
                      className="flex items-center space-x-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Previous</span>
                    </button>
                    <button
                      onClick={nextResult}
                      className="flex items-center space-x-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors"
                    >
                      <span>Next</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Details */}
                <div>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">Treatment Details</h3>
                    <p className="text-muted-foreground leading-relaxed">{selectedResult.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Patient</div>
                      <div className="font-medium text-foreground">
                        {selectedResult.gender}, {selectedResult.age}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Timeline</div>
                      <div className="font-medium text-foreground">{selectedResult.timeframe}</div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-foreground mb-3">Key Results Achieved</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedResult.results.map((result, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Link href="/book">Book Similar Treatment</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <Link href="/services">Learn More About Services</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Your Own Transformation?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our satisfied clients and experience the confidence that comes with looking and feeling your best.
            Schedule your consultation today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/book">Book Free Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              <Link href="/testimonials">Read Client Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
