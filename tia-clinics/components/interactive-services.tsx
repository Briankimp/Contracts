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
    color: "from-purple-500 to-pink-500",
    href: "/services/injectables",
  },
  {
    id: 2,
    icon: Heart,
    title: "Skin Treatments",
    subtitle: "Advanced Skin Rejuvenation",
    description: "Transform your skin with cutting-edge treatments designed to restore radiance, texture, and youthful vitality through scientifically proven methods.",
    features: ["HydraFacial", "Chemical Peels", "Microneedling", "Skin Resurfacing"],
    color: "from-blue-500 to-cyan-500",
    href: "/services/skin-treatments",
  },
  {
    id: 3,
    icon: Scissors,
    title: "Hair Restoration",
    subtitle: "PRP & Regenerative Therapy",
    description: "Regain confidence with our advanced hair restoration treatments using your body's natural healing factors for sustainable, natural-looking results.",
    features: ["PRP Therapy", "Hair Transplant", "Scalp Treatments", "Growth Factors"],
    color: "from-green-500 to-emerald-500",
    href: "/services/hair-restoration",
  },
  {
    id: 4,
    icon: Droplets,
    title: "IV Therapy",
    subtitle: "Wellness & Nutrition",
    description: "Boost your immunity, energy, and overall wellness with our customized IV drip therapies designed for optimal health and vitality.",
    features: ["Immunity Boost", "Energy Enhancement", "Beauty Drips", "Recovery Therapy"],
    color: "from-orange-500 to-red-500",
    href: "/services/iv-therapy",
  },
  {
    id: 5,
    icon: Zap,
    title: "Body Contouring",
    subtitle: "Non-Surgical Sculpting",
    description: "Achieve your ideal body shape with our non-invasive body contouring treatments that target stubborn fat and enhance your natural curves.",
    features: ["Fat Reduction", "Skin Tightening", "Cellulite Treatment", "Body Sculpting"],
    color: "from-indigo-500 to-purple-500",
    href: "/services/body-contouring",
  },
  {
    id: 6,
    icon: Stethoscope,
    title: "Minor Procedures",
    subtitle: "Specialized Treatments",
    description: "Expert care for specialized dermatological procedures performed with precision and attention to detail in our state-of-the-art facility.",
    features: ["Keloid Removal", "Skin Tags", "Mole Removal", "Scar Treatment"],
    color: "from-teal-500 to-blue-500",
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

        {/* Interactive Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Services List */}
          <motion.div 
            className="lg:col-span-1 space-y-4"
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeService === index 
                    ? 'bg-white shadow-xl border-2 border-primary/20' 
                    : 'bg-white/50 backdrop-blur-sm hover:bg-white/80 border border-white/30'
                }`}
                onClick={() => setActiveService(index)}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-4">
                  <motion.div 
                    className={`p-3 rounded-xl bg-gradient-to-br ${service.color} shadow-lg`}
                    animate={{ 
                      rotate: hoveredService === index ? 360 : 0,
                      scale: activeService === index ? 1.1 : 1
                    }}
                    transition={{ duration: 0.6 }}
                  >
{React.createElement(service.icon, { className: "w-6 h-6 text-white" })}
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className={`font-bold text-lg transition-colors ${
                      activeService === index ? 'text-primary' : 'text-foreground'
                    }`}>
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {service.subtitle}
                    </p>
                  </div>
                  
                  <motion.div
                    animate={{ 
                      x: activeService === index ? 5 : 0,
                      opacity: activeService === index ? 1 : 0.5
                    }}
                  >
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Service Details */}
          <motion.div 
            className="lg:col-span-2"
            variants={itemVariants}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 h-full"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <motion.div 
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${services[activeService].color} shadow-lg mb-4`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {React.createElement(services[activeService].icon, { className: "w-8 h-8 text-white" })}
                    </motion.div>
                    
                    <h3 className="text-3xl font-bold text-foreground mb-2">
                      {services[activeService].title}
                    </h3>
                    <p className="text-lg text-primary font-medium mb-4">
                      {services[activeService].subtitle}
                    </p>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      asChild
                      size="sm"
                      className="bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-full"
                    >
                      <Link href={services[activeService].href}>
                        <Play className="w-4 h-4" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {services[activeService].description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {services[activeService].features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      className="flex items-center space-x-3 p-3 bg-white/50 rounded-xl border border-white/30"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(233, 30, 99, 0.05)" }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-foreground font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg"
                  >
                    <Link href={services[activeService].href} className="flex items-center space-x-2">
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

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
