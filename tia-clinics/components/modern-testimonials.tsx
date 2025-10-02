"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Star, Quote, ArrowRight, Heart, Users } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Wanjiku",
    treatment: "Botox & Fillers",
    rating: 5,
    text: "Dr. Arshni and her team are absolutely incredible. The results from my Botox treatment exceeded my expectations, and I felt comfortable throughout the entire process. The clinic is beautiful and professional.",
    avatar: "SW",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    name: "Michael Ochieng",
    treatment: "Hair Restoration",
    rating: 5,
    text: "After struggling with hair loss for years, the PRP treatment at TIA Clinics has given me my confidence back. The results are natural and impressive. Highly recommend their expertise.",
    avatar: "MO",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    name: "Grace Muthoni",
    treatment: "HydraFacial",
    rating: 5,
    text: "The HydraFacial treatment left my skin glowing and refreshed. The staff is knowledgeable and caring, making every visit a pleasant experience. TIA Clinics is truly world-class.",
    avatar: "GM",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    name: "David Kimani",
    treatment: "IV Therapy",
    rating: 5,
    text: "The wellness IV drips have boosted my energy levels significantly. The personalized approach and attention to detail at TIA Clinics is unmatched. I feel revitalized after every session.",
    avatar: "DK",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    name: "Amina Hassan",
    treatment: "Skin Treatments",
    rating: 5,
    text: "My skin has never looked better! The chemical peel treatment was gentle yet effective. The team's expertise and care made all the difference in my skincare journey.",
    avatar: "AH",
    color: "from-indigo-500 to-purple-500",
  },
]

export default function ModernTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <motion.section 
      ref={ref}
      className="py-24 bg-gradient-to-br from-white via-accent/10 to-secondary/30 relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-primary/10 to-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 50, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-20 right-20 w-60 h-60 bg-gradient-to-r from-accent/20 to-primary/10 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">Client Stories</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            What Our Clients
            <span className="gradient-text block">Say About Us</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from our satisfied clients who have experienced 
            the TIA Clinics difference in their beauty and wellness journey.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div 
          className="mb-16"
          variants={itemVariants}
        >
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative"
              >
                {/* Quote Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/50 relative overflow-hidden">
                  {/* Background Pattern */}
                  <motion.div
                    className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${testimonials[currentTestimonial].color} opacity-10 rounded-full blur-2xl`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Quote Icon */}
                  <motion.div
                    className="mb-8"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200, 
                      damping: 15,
                      delay: 0.2 
                    }}
                  >
                    <Quote className="w-16 h-16 text-primary/30" />
                  </motion.div>
                  
                  {/* Testimonial Text */}
                  <blockquote className="text-2xl md:text-3xl text-foreground mb-8 leading-relaxed font-light">
                    {testimonials[currentTestimonial].text}
                  </blockquote>
                  
                  {/* Author Info */}
                  <div className="flex items-center space-x-6">
                    <motion.div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonials[currentTestimonial].color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {testimonials[currentTestimonial].avatar}
                    </motion.div>
                    
                    <div>
                      <h4 className="text-xl font-bold text-foreground">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-muted-foreground">
                        {testimonials[currentTestimonial].treatment}
                      </p>
                      <div className="flex items-center space-x-1 mt-2">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0, rotate: -180 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ 
                              delay: 0.4 + i * 0.1,
                              type: "spring",
                              stiffness: 300
                            }}
                          >
                            <Star className="w-5 h-5 fill-primary text-primary" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Testimonial Navigation */}
        <motion.div 
          className="flex justify-center space-x-4 mb-16"
          variants={itemVariants}
        >
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={testimonial.id}
              className={`relative p-4 rounded-2xl transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-white shadow-lg border-2 border-primary/20' 
                  : 'bg-white/50 hover:bg-white/80 border border-white/30'
              }`}
              onClick={() => {
                setCurrentTestimonial(index)
                setIsAutoPlaying(false)
                setTimeout(() => setIsAutoPlaying(true), 10000)
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center space-x-3">
                <motion.div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold shadow-lg`}
                  animate={{ 
                    scale: index === currentTestimonial ? 1.1 : 1,
                    rotate: index === currentTestimonial ? 360 : 0
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {testimonial.avatar}
                </motion.div>
                
                <div className="text-left">
                  <div className={`font-semibold transition-colors ${
                    index === currentTestimonial ? 'text-primary' : 'text-foreground'
                  }`}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.treatment}
                  </div>
                </div>
              </div>
              
              {/* Active Indicator */}
              {index === currentTestimonial && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full"
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <div className="bg-gradient-to-r from-primary/5 via-accent/10 to-primary/5 rounded-3xl p-12 backdrop-blur-sm border border-white/20">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Users className="w-6 h-6 text-primary" />
              <span className="text-primary font-semibold">Join 2,000+ Happy Clients</span>
            </div>
            
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Transformation?
            </h3>
            
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the same exceptional care and results that our clients rave about. 
              Book your consultation today and begin your journey to enhanced confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg font-semibold rounded-full shadow-xl"
                >
                  <Link href="/booking" className="flex items-center space-x-3">
                    <Heart className="w-5 h-5" />
                    <span>Book Consultation</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary/30 text-foreground hover:bg-primary/5 px-10 py-6 text-lg font-semibold rounded-full backdrop-blur-sm bg-white/50"
                >
                  <Link href="/testimonials" className="flex items-center space-x-3">
                    <Star className="w-5 h-5" />
                    <span>Read All Reviews</span>
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
