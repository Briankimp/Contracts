"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ArrowRight } from "lucide-react"
import { motion, AnimatePresence, useInView } from "framer-motion"

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
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

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
      className="py-24 bg-white relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Background decoration */}
      <motion.div 
        className="absolute bottom-0 left-0 w-80 h-80 bg-accent/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
            variants={itemVariants}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed"
            variants={itemVariants}
          >
            Don't just take our word for it. Hear from our satisfied clients who have experienced the TIA Clinics
            difference in their beauty and wellness journey.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
        >
          {/* Featured Testimonial */}
          <motion.div 
            className="lg:col-span-2"
            variants={itemVariants}
          >
            <Card className="h-full border-0 shadow-xl bg-gradient-to-br from-accent to-white relative overflow-hidden">
              <CardContent className="p-8 lg:p-12 relative z-10">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    damping: 15,
                    delay: 0.5 
                  }}
                >
                  <Quote className="w-12 h-12 text-primary mb-6" />
                </motion.div>
                
                <AnimatePresence mode="wait">
                  <motion.blockquote 
                    key={currentTestimonial}
                    className="text-xl lg:text-2xl text-foreground mb-8 leading-relaxed font-light"
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    {testimonials[currentTestimonial].text}
                  </motion.blockquote>
                </AnimatePresence>
                
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={`author-${currentTestimonial}`}
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <motion.div
                      className="w-16 h-16 rounded-full bg-cover bg-center bg-no-repeat border-2 border-primary/20"
                      style={{ backgroundImage: `url(${testimonials[currentTestimonial].image})` }}
                      whileHover={{ scale: 1.1, borderColor: "var(--color-primary)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    />
                    <div>
                      <motion.div 
                        className="font-semibold text-foreground text-lg"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {testimonials[currentTestimonial].name}
                      </motion.div>
                      <motion.div 
                        className="text-muted-foreground"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {testimonials[currentTestimonial].treatment}
                      </motion.div>
                      <motion.div 
                        className="flex items-center space-x-1 mt-1"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, rotate: -180, scale: 0 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            transition={{ 
                              delay: 0.6 + i * 0.1,
                              type: "spring",
                              stiffness: 300
                            }}
                          >
                            <Star className="w-4 h-4 fill-primary text-primary" />
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </CardContent>
              
              {/* Animated background pattern */}
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </Card>
          </motion.div>

          {/* Testimonial List */}
          <motion.div 
            className="space-y-4"
            variants={itemVariants}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Card
                  className={`cursor-pointer border-0 shadow-md relative overflow-hidden ${
                    index === currentTestimonial
                      ? "bg-primary text-primary-foreground"
                      : "bg-white hover:shadow-lg"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                >
                  <CardContent className="p-4 relative z-10">
                    <div className="flex items-center space-x-3">
                      <motion.div
                        className="w-12 h-12 rounded-full bg-cover bg-center bg-no-repeat flex-shrink-0 border-2"
                        style={{ 
                          backgroundImage: `url(${testimonial.image})`,
                          borderColor: index === currentTestimonial ? "rgba(255,255,255,0.3)" : "var(--color-primary)"
                        }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      />
                      <div className="flex-1 min-w-0">
                        <motion.div 
                          className="font-semibold truncate"
                          animate={{ 
                            color: index === currentTestimonial ? "white" : "var(--color-foreground)"
                          }}
                        >
                          {testimonial.name}
                        </motion.div>
                        <div
                          className={`text-sm truncate ${
                            index === currentTestimonial ? "text-primary-foreground/80" : "text-muted-foreground"
                          }`}
                        >
                          {testimonial.treatment}
                        </div>
                        <div className="flex items-center space-x-1 mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <motion.div
                              key={i}
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Star
                                className={`w-3 h-3 ${
                                  index === currentTestimonial
                                    ? "fill-primary-foreground text-primary-foreground"
                                    : "fill-primary text-primary"
                                }`}
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  
                  {/* Active indicator */}
                  <AnimatePresence>
                    {index === currentTestimonial && (
                      <motion.div
                        className="absolute left-0 top-0 bottom-0 w-1 bg-primary-foreground"
                        initial={{ scaleY: 0, opacity: 0 }}
                        animate={{ scaleY: 1, opacity: 1 }}
                        exit={{ scaleY: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ originY: 0.5 }}
                      />
                    )}
                  </AnimatePresence>
                  
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0"
                    whileHover={{ opacity: index === currentTestimonial ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-shadow">
              <Link href="/testimonials" className="flex items-center space-x-2">
                <span>Read All Reviews</span>
                <motion.div
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
