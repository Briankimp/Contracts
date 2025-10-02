"use client"

import React, { useRef, useState } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { Award, Shield, Users, Heart, Sparkles, Star, CheckCircle } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Medical Excellence",
    description: "Licensed professionals with international certifications",
    color: "from-blue-500 to-blue-600",
    delay: 0
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "FDA-approved treatments with highest safety standards",
    color: "from-green-500 to-green-600",
    delay: 0.1
  },
  {
    icon: Users,
    title: "Personalized Care",
    description: "Customized treatment plans for your unique needs",
    color: "from-purple-500 to-purple-600",
    delay: 0.2
  },
  {
    icon: Heart,
    title: "Holistic Approach",
    description: "Combining aesthetics with wellness for complete care",
    color: "from-pink-500 to-pink-600",
    delay: 0.3
  }
]

const achievements = [
  { label: "Happy Clients", value: 2000, suffix: "+", icon: Users },
  { label: "Success Rate", value: 98, suffix: "%", icon: CheckCircle },
  { label: "Years Excellence", value: 5, suffix: "+", icon: Award },
  { label: "Expert Treatments", value: 15, suffix: "+", icon: Sparkles }
]

function AnimatedCounter({ value, suffix = "", duration = 2 }: { value: number, suffix?: string, duration?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: duration * 1000 })
  const [displayValue, setDisplayValue] = useState(0)

  React.useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, motionValue, value])

  React.useEffect(() => {
    return springValue.onChange((latest) => {
      setDisplayValue(Math.floor(latest))
    })
  }, [springValue])

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  )
}

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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
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
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5`}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Icon */}
                <motion.div 
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} mb-6 shadow-lg`}
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20,
                    rotate: { duration: 0.6 }
                  }}
                >
                  <feature.icon className="w-6 h-6 text-white" />
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

        {/* Achievement Stats */}
        <motion.div 
          className="relative"
          variants={itemVariants}
        >
          <div className="bg-gradient-to-r from-primary/5 via-accent/10 to-primary/5 rounded-3xl p-12 backdrop-blur-sm border border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.8 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div
                    className="inline-flex p-3 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <achievement.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  
                  <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 gradient-text">
                    <AnimatedCounter value={achievement.value} suffix={achievement.suffix} />
                  </div>
                  
                  <div className="text-muted-foreground font-medium">
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
