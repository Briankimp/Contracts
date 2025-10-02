"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Star } from "lucide-react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { scrollY } = useScroll()
  // Reduced parallax effect to prevent excessive scrolling
  const y = useTransform(scrollY, [0, 500], [0, -25])
  const opacity = useTransform(scrollY, [0, 400], [1, 0.7])

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
    <motion.section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden z-0"
      style={{ y, opacity }}
    >
      {/* Background Slides */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              fill
              priority
              quality={95}
              sizes="100vw"
              className="object-cover object-[center_20%]" 
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Trust Indicators */}
          <motion.div 
            className="flex items-center justify-center space-x-1 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              >
                <Star className="w-5 h-5 fill-primary text-primary" />
              </motion.div>
            ))}
            <motion.span 
              className="ml-2 text-white/90 text-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Trusted by 2,000+ clients
            </motion.span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.h1 
              key={currentSlide}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance leading-tight"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {heroSlides[currentSlide].title}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p 
              key={`subtitle-${currentSlide}`}
              className="text-xl md:text-2xl text-white/90 mb-4 font-light text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {heroSlides[currentSlide].subtitle}
            </motion.p>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p 
              key={`description-${currentSlide}`}
              className="text-lg text-white/80 mb-8 max-w-2xl mx-auto text-pretty leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {heroSlides[currentSlide].description}
            </motion.p>
          </AnimatePresence>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow"
              >
                <Link href="/booking" className="flex items-center space-x-2">
                  <span>Book Consultation</span>
                  <motion.div
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-foreground px-8 py-4 text-lg font-semibold rounded-full bg-transparent backdrop-blur-sm"
              >
                <Link href="/services" className="flex items-center space-x-2">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Play className="w-5 h-5" />
                  </motion.div>
                  <span>Explore Services</span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div 
            className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {[
              { number: "2000+", label: "Happy Clients" },
              { number: "15+", label: "Expert Treatments" },
              { number: "5+", label: "Years Excellence" }
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-white mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 1 + index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        {heroSlides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-primary" : "bg-white/50 hover:bg-white/70"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            animate={{ scale: index === currentSlide ? 1.25 : 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </motion.div>

      {/* Subtle Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 right-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center cursor-pointer"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.1, borderColor: "rgba(233, 30, 99, 0.8)" }}
          onClick={() => window.scrollTo({ top: window.innerHeight * 0.8, behavior: 'smooth' })}
        >
          <motion.div 
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
