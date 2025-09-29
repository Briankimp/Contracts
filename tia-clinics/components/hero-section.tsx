"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Star } from "lucide-react"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      title: "Transform Your Natural Beauty",
      subtitle: "Premier aesthetic medicine meets personalized care",
      description: "Experience world-class treatments in the heart of Nairobi with our expert medical team.",
      image: "/beautiful-confident-african-kenyan-woman-glowing-r.jpg",
    },
    {
      title: "Advanced Hair Restoration",
      subtitle: "Regain confidence with cutting-edge technology",
      description: "Revolutionary PRP and regenerative therapies for natural, lasting hair restoration results.",
      image: "/elegant-african-kenyan-woman-healthy-beautiful-nat.jpg",
    },
    {
      title: "Rejuvenating Wellness Therapy",
      subtitle: "IV drips and nutrition for optimal health",
      description: "Boost your immunity and vitality with our customized wellness and nutrition programs.",
      image: "/confident-african-kenyan-woman-wellness-spa-iv-the.jpg",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-0">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              quality={95}
              sizes="100vw"
              className="object-cover object-[center_20%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="animate-fade-in-up">
          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
            <span className="ml-2 text-white/90 text-sm">Trusted by 2,000+ clients</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance leading-tight">
            {heroSlides[currentSlide].title}
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-4 font-light text-balance">
            {heroSlides[currentSlide].subtitle}
          </p>

          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
            {heroSlides[currentSlide].description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full"
            >
              <Link href="/booking" className="flex items-center space-x-2">
                <span>Book Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-foreground px-8 py-4 text-lg font-semibold rounded-full bg-transparent"
            >
              <Link href="/services" className="flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Explore Services</span>
              </Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">2000+</div>
              <div className="text-white/80 text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-white/80 text-sm">Expert Treatments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-white/80 text-sm">Years Excellence</div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-primary scale-125" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
