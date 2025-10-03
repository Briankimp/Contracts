"use client"

import type { Metadata } from "next";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Heart,
  Droplets,
  Zap,
  Scissors,
  Stethoscope,
  Clock,
  Star,
  Play,
  Award,
  Users,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Injectables",
    subtitle: "Botox & Dermal Fillers",
    description:
      "Non-surgical facial rejuvenation with premium Botox and dermal fillers for natural-looking results.",
    treatments: [
      "Botox Injections",
      "Dermal Fillers",
      "Profile Harmonization",
      "Lip Enhancement",
    ],
    duration: "30-60 minutes",
    price: "From KES 25,000",
    rating: 4.9,
    image: "https://unsplash.com/photos/_zmiZwgg7Iw/download?force=true",
    href: "/services/injectables",
    popular: true,
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Heart,
    title: "Skin Treatments",
    subtitle: "Advanced Facial Therapies",
    description:
      "Revolutionary skin treatments including HydraFacial, chemical peels, and acne management.",
    treatments: [
      "HydraFacial",
      "Chemical Peels",
      "Acne Treatment",
      "Skin Brightening",
    ],
    duration: "45-90 minutes",
    price: "From KES 15,000",
    rating: 4.8,
    image: "https://unsplash.com/photos/HXsYayB33a8/download?force=true",
    href: "/services/skin-treatments",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Scissors,
    title: "Hair Restoration",
    subtitle: "PRP & Regenerative Therapy",
    description:
      "Advanced hair restoration treatments using PRP therapy and regenerative medicine.",
    treatments: [
      "PRP Hair Therapy",
      "Hair Transplant",
      "Scalp Treatment",
      "Hair Loss Prevention",
    ],
    duration: "60-120 minutes",
    price: "From KES 35,000",
    rating: 4.9,
    image: "https://unsplash.com/photos/q2ymQc-u5ig/download?force=true",
    href: "/services/hair-restoration",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Droplets,
    title: "IV Therapy",
    subtitle: "Wellness & Nutrition Drips",
    description:
      "Customized IV drips for immunity, energy, and overall wellness enhancement.",
    treatments: [
      "Immunity Boost",
      "Energy Drips",
      "Antioxidant Therapy",
      "Vitamin Infusions",
    ],
    duration: "30-45 minutes",
    price: "From KES 12,000",
    rating: 4.7,
    image: "https://unsplash.com/photos/KK6Nx7VXzYs/download?force=true",
    href: "/services/iv-therapy",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Zap,
    title: "Body Contouring",
    subtitle: "Non-Surgical Body Sculpting",
    description:
      "Advanced body contouring and fat reduction treatments for natural body sculpting.",
    treatments: [
      "Fat Reduction",
      "Body Sculpting",
      "Cellulite Treatment",
      "Skin Tightening",
    ],
    duration: "60-90 minutes",
    price: "From KES 45,000",
    rating: 4.8,
    image: "https://unsplash.com/photos/TEtQXtYpqHk/download?force=true",
    href: "/services/body-contouring",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Stethoscope,
    title: "Minor Procedures",
    subtitle: "Specialized Treatments",
    description:
      "Professional minor procedures including keloid removal, skin tags, and specialized care.",
    treatments: [
      "Keloid Removal",
      "Skin Tag Removal",
      "Mole Removal",
      "Scar Treatment",
    ],
    duration: "15-45 minutes",
    price: "From KES 8,000",
    rating: 4.9,
    image: "https://unsplash.com/photos/a_eATBvqlm8/download?force=true",
    href: "/services/minor-procedures",
    color: "from-teal-500 to-blue-500",
  },
];

const whyChooseFeatures = [
  {
    icon: Stethoscope,
    title: "Medical Excellence",
    description: "Licensed professionals with international training",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Star,
    title: "Proven Results",
    description: "2000+ satisfied clients with outstanding outcomes",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Customized treatment plans for your unique needs",
    color: "from-pink-500 to-red-500",
  },
  {
    icon: Sparkles,
    title: "Premium Products",
    description: "FDA-approved treatments and luxury amenities",
    color: "from-purple-500 to-indigo-500",
  },
];

export default function ServicesPage() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8])

  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 })

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
    <div className="min-h-screen pt-20 will-change-transform">
      {/* Enhanced Hero Section */}
      <motion.section 
        ref={heroRef}
        className="py-24 bg-gradient-to-br from-accent via-white to-secondary/30 relative overflow-hidden"
        style={{ y, opacity }}
        initial="hidden"
        animate={isHeroInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/20 rounded-full blur-3xl"
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
          <motion.div
            className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-accent/20 to-primary/10 rounded-full blur-2xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
              x: [0, 80, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Floating Service Icons */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${20 + i * 12}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8
              }}
            >
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary/40" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div variants={itemVariants}>
            <motion.div
              className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">Our Treatments</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Comprehensive
              <span className="gradient-text block">Aesthetic Solutions</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
              From non-surgical facelifts to advanced wellness therapy, discover
              our full range of premium treatments designed to enhance your
              natural beauty and well-being.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg font-bold rounded-full shadow-xl btn-magnetic"
              >
                <Link href="/booking" className="flex items-center space-x-3">
                  <Heart className="w-6 h-6" />
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Modern Services Showcase */}
      <motion.section 
        className="py-24 bg-white relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">Our Services</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Premium
              <span className="gradient-text block">Treatment Options</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of aesthetic treatments designed to enhance your natural beauty.
            </p>
          </motion.div>

          {/* Clean Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-full">
                  {/* Clean Image Header */}
                  <div className="relative h-56 overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${service.image})` }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    
                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                        Popular
                      </div>
                    )}
                    
                    {/* Service Icon */}
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-primary font-medium text-sm mb-3">
                        {service.subtitle}
                      </p>
                      <p className="text-gray-600 leading-relaxed line-clamp-2">
                        {service.description}
                      </p>
                    </div>

                    {/* Key Treatments */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {service.treatments.slice(0, 3).map((treatment, idx) => (
                          <span
                            key={treatment}
                            className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                          >
                            {treatment}
                          </span>
                        ))}
                        {service.treatments.length > 3 && (
                          <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                            +{service.treatments.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Price & Duration */}
                    <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-2xl">
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{service.price}</div>
                        <div className="text-sm text-gray-500">Starting from</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-primary">{service.duration}</div>
                        <div className="text-sm text-gray-500">Duration</div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        asChild
                        className="w-full bg-primary hover:bg-primary/90 text-white rounded-2xl py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Link href={service.href} className="flex items-center justify-center space-x-2">
                          <span>View Details</span>
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div 
            className="text-center mt-16"
            variants={itemVariants}
          >
            <p className="text-lg text-gray-600 mb-8">
              Not sure which treatment is right for you?
            </p>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
              >
                <Link href="/booking" className="flex items-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span>Book Free Consultation</span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Why Choose TIA Section */}
      <motion.section 
        className="py-24 bg-gradient-to-br from-secondary via-white to-accent/20 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-primary/10 to-accent/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, -180, -360]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Award className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">Why Choose Us</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Why Choose
              <span className="gradient-text block">TIA Clinics?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the difference of premium aesthetic medicine with our
              expert team and state-of-the-art facility.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="text-center group"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 h-full relative overflow-hidden">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5`}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                    whileHover={{ 
                      scale: 1.05,
                      y: -3
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 25
                    }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Enhanced CTA Section */}
      <motion.section 
        className="py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Animated Background */}
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
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Floating Sparkles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${15 + i * 10}%`,
                top: `${25 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 3 + i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.6
              }}
            >
              <Sparkles className="w-4 h-4 text-white/40" />
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Begin Your Transformation?
            </h2>
            
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Schedule your complimentary consultation and discover the perfect
              treatment plan for your aesthetic goals.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 px-10 py-6 text-lg font-bold rounded-full shadow-2xl"
                >
                  <Link href="/booking" className="flex items-center space-x-3">
                    <Heart className="w-6 h-6" />
                    <span>Book Free Consultation</span>
                    <ArrowRight className="w-6 h-6" />
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
                  className="border-2 border-white/50 text-white hover:bg-white/10 px-10 py-6 text-lg font-semibold rounded-full bg-transparent backdrop-blur-sm"
                >
                  <Link href="/contact" className="flex items-center space-x-3">
                    <Users className="w-6 h-6" />
                    <span>Contact Us</span>
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
