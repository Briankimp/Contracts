"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Sparkles, Heart, Droplets, Zap, Scissors, Stethoscope } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const services = [
  {
    icon: Sparkles,
    title: "Injectables",
    description: "Botox, dermal fillers, and profile harmonization for natural-looking results.",
    image: "https://unsplash.com/photos/_zmiZwgg7Iw/download?force=true",
    href: "/services/injectables",
  },
  {
    icon: Heart,
    title: "Skin Treatments",
    description: "HydraFacial, chemical peels, and advanced skin rejuvenation therapies.",
    image: "https://unsplash.com/photos/HXsYayB33a8/download?force=true",
    href: "/services/skin-treatments",
  },
  {
    icon: Scissors,
    title: "Hair Restoration",
    description: "PRP therapy and regenerative treatments for natural hair growth.",
    image: "https://unsplash.com/photos/q2ymQc-u5ig/download?force=true",
    href: "/services/hair-restoration",
  },
  {
    icon: Droplets,
    title: "IV Therapy",
    description: "Wellness drips, immunity boosters, and customized nutrition therapy.",
    image: "https://unsplash.com/photos/KK6Nx7VXzYs/download?force=true",
    href: "/services/iv-therapy",
  },
  {
    icon: Zap,
    title: "Body Contouring",
    description: "Non-surgical fat reduction and body sculpting treatments.",
    image: "https://unsplash.com/photos/TEtQXtYpqHk/download?force=true",
    href: "/services/body-contouring",
  },
  {
    icon: Stethoscope,
    title: "Minor Procedures",
    description: "Keloid removal, skin tags, and specialized dermatological procedures.",
    image: "https://unsplash.com/photos/a_eATBvqlm8/download?force=true",
    href: "/services/minor-procedures",
  },
]

export default function ServicesPreview() {
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
      className="py-24 bg-secondary relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Background decoration */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
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
            Comprehensive Aesthetic Solutions
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed"
            variants={itemVariants}
          >
            From non-surgical facelifts to advanced wellness therapy, discover our full range of premium treatments
            designed to enhance your natural beauty and well-being.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="group border-0 shadow-lg overflow-hidden bg-white h-full relative">
                <motion.div 
                  className="relative h-48 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${service.image})` }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                    whileHover={{ opacity: 0.8 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute top-4 left-4 p-3 bg-primary/90 rounded-full"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 360,
                      backgroundColor: "var(--color-primary)" 
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 17,
                      rotate: { duration: 0.6 }
                    }}
                  >
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  
                  {/* Hover overlay effect */}
                  <motion.div
                    className="absolute inset-0 bg-primary/20 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                
                <CardContent className="p-6 relative">
                  <motion.h3 
                    className="text-xl font-semibold text-foreground mb-3"
                    whileHover={{ color: "var(--color-primary)" }}
                    transition={{ duration: 0.2 }}
                  >
                    {service.title}
                  </motion.h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button asChild variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 font-semibold group/button">
                      <Link href={service.href} className="flex items-center space-x-2">
                        <span>Learn More</span>
                        <motion.div
                          whileHover={{ x: 3 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </Link>
                    </Button>
                  </motion.div>
                </CardContent>
                
                {/* Subtle glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(45deg, transparent, rgba(233, 30, 99, 0.1), transparent)"
                  }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </Card>
            </motion.div>
          ))}
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
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 shadow-lg hover:shadow-xl transition-shadow">
              <Link href="/services" className="flex items-center space-x-2">
                <span>View All Services</span>
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
