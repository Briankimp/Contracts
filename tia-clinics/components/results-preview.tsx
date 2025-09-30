"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const beautyImages = [
  {
    id: 1,
    image: "/beautiful-confident-african-kenyan-woman-glowing-r.jpg",
    alt: "Confident African woman with glowing skin",
  },
  {
    id: 2,
    image: "/elegant-african-kenyan-woman-healthy-beautiful-nat.jpg",
    alt: "Elegant African woman with healthy beautiful hair",
  },
  {
    id: 3,
    image: "/confident-african-kenyan-woman-wellness-spa-iv-the.jpg",
    alt: "African woman enjoying wellness spa treatment",
  },
  {
    id: 4,
    image: "/confident-african-woman-body-contouring-wellness.jpg",
    alt: "Confident African woman wellness and body confidence",
  },
]

export default function ResultsPreview() {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up-fast" style={{ animationDelay: '60ms' }}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance animate-fade-in-up-fast" style={{ animationDelay: '100ms' }}>
            Celebrate Your Natural Beauty
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed animate-fade-in-fast" style={{ animationDelay: '140ms' }}>
            At TIA Clinics, we enhance your natural beauty and help you feel confident in your own skin. Our treatments
            are designed to bring out the best version of you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {beautyImages.map((item, index) => (
            <div
              key={item.id}
              className="relative h-96 rounded-2xl overflow-hidden shadow-lg group animate-fade-in-fast"
              style={{ animationDelay: `${80 + index * 60}ms` }}
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="animate-fade-in-up">
              <div className="text-4xl font-bold text-primary mb-2">2000+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Excellence</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Expert Treatments</div>
            </div>
          </div>

          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/booking" className="flex items-center space-x-2">
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
