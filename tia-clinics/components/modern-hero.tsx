"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Heart, Star } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ModernHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const treatments = [
    "Botox & Fillers",
    "HydraFacial",
    "Hair Restoration", 
    "IV Therapy",
    "Body Contouring",
    "Skin Treatments"
  ]

  return (
    <motion.section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-accent/20 to-secondary"
      style={{ y, opacity }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 blur-3xl"
          style={{
            left: `${20 + mousePosition.x * 0.02}%`,
            top: `${30 + mousePosition.y * 0.02}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-accent/30 to-accent/20 blur-3xl"
          style={{
            right: `${10 + mousePosition.x * 0.03}%`,
            bottom: `${20 + mousePosition.y * 0.03}%`,
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Geometric Shapes */}
        <motion.div
          className="absolute w-32 h-32 border border-primary/20 rounded-full"
          style={{
            left: `${60 + mousePosition.x * 0.01}%`,
            top: `${20 + mousePosition.y * 0.01}%`,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.div
          className="absolute w-24 h-24 bg-primary/10 rounded-lg"
          style={{
            right: `${70 + mousePosition.x * 0.015}%`,
            top: `${60 + mousePosition.y * 0.015}%`,
          }}
          animate={{ 
            rotate: [0, 45, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Trust Indicators */}
        <motion.div 
          className="flex items-center justify-center space-x-2 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.4 + i * 0.1,
                  type: "spring",
                  stiffness: 300
                }}
              >
                <Star className="w-5 h-5 fill-primary text-primary" />
              </motion.div>
            ))}
          </div>
          <motion.span 
            className="text-muted-foreground font-medium"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Trusted by 2,000+ clients across Nairobi
          </motion.span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
            <motion.span
              className="inline-block gradient-text"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Transform
            </motion.span>
            <br />
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Your Natural
            </motion.span>
            <br />
            <motion.span
              className="inline-block relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Beauty
              <motion.div
                className="absolute -right-8 top-0"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="w-8 h-8 text-primary" />
              </motion.div>
            </motion.span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          Premier aesthetic medicine meets personalized care in the heart of Nairobi. 
          Experience world-class treatments designed to enhance your confidence and natural beauty.
        </motion.p>

        {/* Treatment Pills */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment}
              className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-primary/20 rounded-full text-sm font-medium text-foreground shadow-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 1.4 + index * 0.1,
                type: "spring",
                stiffness: 300
              }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(233, 30, 99, 0.1)",
                borderColor: "rgba(233, 30, 99, 0.3)"
              }}
            >
              {treatment}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 btn-magnetic"
            >
              <Link href="/booking" className="flex items-center space-x-3">
                <Heart className="w-5 h-5" />
                <span>Start Your Journey</span>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Link>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-primary/30 text-foreground hover:bg-primary/5 px-10 py-6 text-lg font-semibold rounded-full backdrop-blur-sm bg-white/50"
            >
              <Link href="/services" className="flex items-center space-x-3">
                <Sparkles className="w-5 h-5" />
                <span>Explore Treatments</span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="flex flex-col items-center space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <span className="text-sm text-muted-foreground">Discover More</span>
          <motion.div 
            className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center cursor-pointer"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1, borderColor: "rgba(233, 30, 99, 0.6)" }}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <motion.div 
              className="w-1 h-3 bg-primary/60 rounded-full mt-2"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
