"use client"

import React, { useState, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ArrowRight, Sparkles, Heart, Droplets, Zap, Scissors, Stethoscope, Play } from "lucide-react"

const services = [
  {
    id: 1,
    icon: Sparkles,
    title: "Injectables",
    subtitle: "Botox & Dermal Fillers",
    description: "Achieve natural-looking results with our expert injectable treatments. From wrinkle reduction to facial contouring, our precision techniques enhance your features beautifully.",
    features: ["Botox Treatments", "Dermal Fillers", "Profile Harmonization", "Lip Enhancement"],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    href: "/services/injectables",
  },
  {
    id: 2,
    icon: Heart,
    title: "Skin Treatments",
    subtitle: "Advanced Skin Rejuvenation",
    description: "Transform your skin with cutting-edge treatments designed to restore radiance, texture, and youthful vitality through scientifically proven methods.",
    features: ["HydraFacial", "Chemical Peels", "Microneedling", "Skin Resurfacing"],
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    href: "/services/skin-treatments",
  },
  {
    id: 3,
    icon: Scissors,
    title: "Hair Restoration",
    subtitle: "PRP & Regenerative Therapy",
    description: "Regain confidence with our advanced hair restoration treatments using your body's natural healing factors for sustainable, natural-looking results.",
    features: ["PRP Therapy", "Hair Transplant", "Scalp Treatments", "Growth Factors"],
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    href: "/services/hair-restoration",
  },
  {
    id: 4,
    icon: Droplets,
    title: "IV Therapy",
    subtitle: "Wellness & Nutrition",
    description: "Boost your immunity, energy, and overall wellness with our customized IV drip therapies designed for optimal health and vitality.",
    features: ["Immunity Boost", "Energy Enhancement", "Beauty Drips", "Recovery Therapy"],
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    href: "/services/iv-therapy",
  },
  {
    id: 5,
    icon: Zap,
    title: "Body Contouring",
    subtitle: "Non-Surgical Sculpting",
    description: "Achieve your ideal body shape with our non-invasive body contouring treatments that target stubborn fat and enhance your natural curves.",
    features: ["Fat Reduction", "Skin Tightening", "Cellulite Treatment", "Body Sculpting"],
    image: "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    href: "/services/body-contouring",
  },
  {
    id: 6,
    icon: Stethoscope,
    title: "Minor Procedures",
    subtitle: "Specialized Treatments",
    description: "Expert care for specialized dermatological procedures performed with precision and attention to detail in our state-of-the-art facility.",
    features: ["Keloid Removal", "Skin Tags", "Mole Removal", "Scar Treatment"],
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    href: "/services/minor-procedures",
  },
]

export default function InteractiveServices() {
  const [activeService, setActiveService] = useState(0)
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
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
      className="py-24 bg-gradient-to-br from-secondary via-white to-accent/20 relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
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
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">Our Treatments</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Comprehensive
            <span className="gradient-text block">Aesthetic Solutions</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our full range of premium treatments designed to enhance your natural beauty 
            and boost your confidence with scientifically proven results.
          </p>
        </motion.div>

        {/* Horizontal Scrollable Services Cards */}
        <motion.div 
          className="mb-16"
          variants={itemVariants}
        >
          <div className="overflow-x-auto pb-6">
            <div className="flex space-x-6 min-w-max px-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="flex-shrink-0 w-80 group cursor-pointer"
                  onClick={() => setActiveService(index)}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border overflow-hidden h-full transition-all duration-300 ${
                    activeService === index 
                      ? 'border-primary/50 shadow-2xl' 
                      : 'border-white/50 hover:border-primary/30'
                  }`}>
                    {/* Image Section */}
                    <div className="relative h-48 overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${service.image})` }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Service Icon */}
                      <motion.div 
                        className="absolute top-4 left-4 p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-white/50"
                        whileHover={{ 
                          scale: 1.05,
                          rotate: 5,
                          y: -2
                        }}
                        transition={{ 
                          type: "spring",
                          stiffness: 400,
                          damping: 25
                        }}
                      >
                        {React.createElement(service.icon, { className: "w-5 h-5 text-primary" })}
                      </motion.div>

                      {/* Active Indicator */}
                      {activeService === index && (
                        <motion.div
                          className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          Active
                        </motion.div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <h3 className={`text-xl font-bold mb-2 transition-colors ${
                        activeService === index ? 'text-primary' : 'text-foreground group-hover:text-primary'
                      }`}>
                        {service.title}
                      </h3>
                      
                      <p className="text-primary font-medium text-sm mb-3">
                        {service.subtitle}
                      </p>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                        {service.description}
                      </p>

                      {/* Features Preview */}
                      <div className="space-y-2 mb-4">
                        {service.features.slice(0, 2).map((feature, featureIndex) => (
                          <div key={feature} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            <span className="text-xs text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 2 && (
                          <div className="text-xs text-primary font-medium">
                            +{service.features.length - 2} more treatments
                          </div>
                        )}
                      </div>

                      {/* Action Button */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          asChild
                          size="sm"
                          className={`w-full rounded-full transition-all ${
                            activeService === index
                              ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                              : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
                          }`}
                        >
                          <Link href={service.href} className="flex items-center justify-center space-x-2">
                            <span>Learn More</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-4">
            <div className="flex space-x-2">
              {services.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeService === index ? 'bg-primary w-8' : 'bg-primary/30'
                  }`}
                  onClick={() => setActiveService(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground px-10 py-6 text-lg font-semibold rounded-full shadow-xl"
            >
              <Link href="/services" className="flex items-center space-x-3">
                <Sparkles className="w-6 h-6" />
                <span>Explore All Treatments</span>
                <ArrowRight className="w-6 h-6" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
