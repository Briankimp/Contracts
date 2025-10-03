"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Shield, Heart, Star, Stethoscope, GraduationCap } from "lucide-react"

const features = [
  {
    icon: GraduationCap,
    title: "Medical Excellence",
    description: "Licensed professionals with international certifications and advanced training",
    delay: 0
  },
  {
    icon: Shield,
    title: "Safety First", 
    description: "FDA-approved treatments with highest safety standards and protocols",
    delay: 0.1
  },
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Customized treatment plans tailored to your unique aesthetic goals",
    delay: 0.2
  },
  {
    icon: Stethoscope,
    title: "Holistic Approach",
    description: "Combining medical expertise with wellness for comprehensive care",
    delay: 0.3
  }
]

export default function DynamicFeatures() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
      className="py-24 bg-gradient-to-br from-white via-accent/10 to-secondary/50 relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          variants={itemVariants}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Star className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">Why Choose TIA Clinics</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Excellence in Every
            <span className="gradient-text block">Detail</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our commitment to medical excellence, safety, and personalized care sets us apart 
            as Nairobi's premier aesthetic medicine destination.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 h-full overflow-hidden">
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                
                {/* Icon */}
                <motion.div 
                  className="inline-flex p-4 rounded-xl bg-white/90 backdrop-blur-sm border border-white/50 mb-6 shadow-lg"
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
                  <feature.icon className="w-6 h-6 text-primary" />
                </motion.div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Hover Effect */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50 scale-x-0 group-hover:scale-x-100 origin-left"
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  )
}
