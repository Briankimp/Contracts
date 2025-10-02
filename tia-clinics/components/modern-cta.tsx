"use client"

import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Phone, MessageCircle, Heart, Sparkles, Star, Calendar } from "lucide-react"

export default function ModernCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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

  const benefits = [
    {
      icon: Calendar,
      title: "Free Consultation",
      description: "No obligation assessment with our experts"
    },
    {
      icon: Star,
      title: "Expert Care",
      description: "Licensed medical professionals with proven results"
    },
    {
      icon: Heart,
      title: "Personalized Treatment",
      description: "Customized plans tailored to your unique needs"
    }
  ]

  return (
    <motion.section 
      ref={ref}
      className="py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -80, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating Sparkles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          >
            <Sparkles className="w-4 h-4 text-white/30" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Content */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 mb-6 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <Heart className="w-4 h-4" />
            <span className="font-medium text-sm">Start Your Journey</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Ready to Transform
            <span className="block">Your Beauty?</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
            Take the first step towards your aesthetic goals. Book a personalized consultation 
            with our expert medical team and discover the perfect treatment plan for you.
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                <Link href="/booking" className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6" />
                  <span>Book Free Consultation</span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>

            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/50 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-full bg-transparent backdrop-blur-sm"
                >
                  <Link
                    href="tel:+254782777779"
                    className="flex items-center space-x-3"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
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
                  className="border-2 border-white/50 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-full bg-transparent backdrop-blur-sm"
                >
                  <Link
                    href="https://wa.me/254782777779"
                    className="flex items-center space-x-3"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="text-center group"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 h-full relative overflow-hidden">
                {/* Background Glow */}
                <motion.div
                  className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 rounded-3xl"
                  transition={{ duration: 0.3 }}
                />
                
                {/* Icon */}
                <motion.div 
                  className="inline-flex p-4 rounded-2xl bg-white/20 mb-6 shadow-lg backdrop-blur-sm"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1,
                    backgroundColor: "rgba(255,255,255,0.3)"
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20,
                    rotate: { duration: 0.6 }
                  }}
                >
                  <benefit.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                  {benefit.title}
                </h3>
                <p className="opacity-90 leading-relaxed">
                  {benefit.description}
                </p>
                
                {/* Hover Effect Line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-white scale-x-0 group-hover:scale-x-100 origin-left"
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="text-center mt-16"
          variants={itemVariants}
        >
          <div className="flex items-center justify-center space-x-8 opacity-80">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-white text-white" />
                ))}
              </div>
              <span className="text-lg font-medium">2,000+ Happy Clients</span>
            </div>
            
            <div className="hidden md:block w-px h-8 bg-white/30" />
            
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-white" />
              <span className="text-lg font-medium">98% Success Rate</span>
            </div>
            
            <div className="hidden md:block w-px h-8 bg-white/30" />
            
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-lg font-medium">5+ Years Excellence</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
