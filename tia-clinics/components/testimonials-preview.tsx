"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ArrowRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Wanjiku",
    treatment: "Botox & Fillers",
    rating: 5,
    text: "Dr. Arshni and her team are absolutely incredible. The results from my Botox treatment exceeded my expectations, and I felt comfortable throughout the entire process. The clinic is beautiful and professional.",
    image: "https://unsplash.com/photos/_OykiNSux5g/download?force=true",
  },
  {
    id: 2,
    name: "Michael Ochieng",
    treatment: "Hair Restoration",
    rating: 5,
    text: "After struggling with hair loss for years, the PRP treatment at TIA Clinics has given me my confidence back. The results are natural and impressive. Highly recommend their expertise.",
    image: "https://unsplash.com/photos/_OykiNSux5g/download?force=true",
  },
  {
    id: 3,
    name: "Grace Muthoni",
    treatment: "HydraFacial",
    rating: 5,
    text: "The HydraFacial treatment left my skin glowing and refreshed. The staff is knowledgeable and caring, making every visit a pleasant experience. TIA Clinics is truly world-class.",
    image: "https://unsplash.com/photos/_OykiNSux5g/download?force=true",
  },
  {
    id: 4,
    name: "David Kimani",
    treatment: "IV Therapy",
    rating: 5,
    text: "The wellness IV drips have boosted my energy levels significantly. The personalized approach and attention to detail at TIA Clinics is unmatched. I feel revitalized after every session.",
    image: "https://unsplash.com/photos/_OykiNSux5g/download?force=true",
  },
]

export default function TestimonialsPreview() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Don't just take our word for it. Hear from our satisfied clients who have experienced the TIA Clinics
            difference in their beauty and wellness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Testimonial */}
          <div className="lg:col-span-2">
            <Card className="h-full border-0 shadow-xl bg-gradient-to-br from-accent to-white">
              <CardContent className="p-8 lg:p-12">
                <Quote className="w-12 h-12 text-primary mb-6" />
                <blockquote className="text-xl lg:text-2xl text-foreground mb-8 leading-relaxed font-light">
                  {testimonials[currentTestimonial].text}
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div
                    className="w-16 h-16 rounded-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${testimonials[currentTestimonial].image})` }}
                  />
                  <div>
                    <div className="font-semibold text-foreground text-lg">{testimonials[currentTestimonial].name}</div>
                    <div className="text-muted-foreground">{testimonials[currentTestimonial].treatment}</div>
                    <div className="flex items-center space-x-1 mt-1">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonial List */}
          <div className="space-y-4">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className={`cursor-pointer transition-all duration-300 border-0 shadow-md ${
                  index === currentTestimonial
                    ? "bg-primary text-primary-foreground scale-105"
                    : "bg-white hover:shadow-lg"
                }`}
                onClick={() => setCurrentTestimonial(index)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-12 h-12 rounded-full bg-cover bg-center bg-no-repeat flex-shrink-0"
                      style={{ backgroundImage: `url(${testimonial.image})` }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold truncate">{testimonial.name}</div>
                      <div
                        className={`text-sm truncate ${
                          index === currentTestimonial ? "text-primary-foreground/80" : "text-muted-foreground"
                        }`}
                      >
                        {testimonial.treatment}
                      </div>
                      <div className="flex items-center space-x-1 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              index === currentTestimonial
                                ? "fill-primary-foreground text-primary-foreground"
                                : "fill-primary text-primary"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/testimonials" className="flex items-center space-x-2">
              <span>Read All Reviews</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
