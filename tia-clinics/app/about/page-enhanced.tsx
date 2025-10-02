"use client"

import type { Metadata } from "next";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Award,
  Users,
  Shield,
  Heart,
  MapPin,
  Clock,
  Star,
  CheckCircle,
  Sparkles,
  GraduationCap,
} from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Medical Excellence",
    description:
      "Licensed medical professionals with international training and certifications in aesthetic medicine.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Highest safety standards with FDA-approved treatments, sterile procedures, and comprehensive protocols.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Users,
    title: "Personalized Care",
    description:
      "Customized treatment plans tailored to your unique needs, concerns, and aesthetic goals.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Heart,
    title: "Holistic Approach",
    description:
      "Combining aesthetic medicine with wellness for comprehensive beauty and health enhancement.",
    color: "from-pink-500 to-pink-600",
  },
];

const certifications = [
  "International Board of Aesthetic Medicine",
  "Kenya Medical Practitioners Board",
  "American Academy of Aesthetic Medicine",
  "International Association of Physicians in Aesthetic Medicine",
  "Allergan Medical Institute Certification",
  "Merz Aesthetics Training Certification",
];

export default function AboutPage() {
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
            className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-primary/10 to-accent/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-60 h-60 bg-gradient-to-r from-accent/20 to-primary/10 rounded-full blur-2xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
              x: [0, 50, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants}>
              <motion.div
                className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm">Our Story</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Where Science
                <span className="gradient-text block">Meets Beauty</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                At TIA Clinics, we believe that true beauty comes from feeling
                confident in your own skin. Our state-of-the-art facility in
                Muthaiga combines cutting-edge medical technology with
                personalized care to deliver exceptional results that enhance
                your natural beauty.
              </p>

              <motion.div 
                className="flex items-center space-x-6 mb-8"
                variants={itemVariants}
              >
                {[
                  { icon: MapPin, text: "Muthaiga, Nairobi" },
                  { icon: Clock, text: "Est. 2019" },
                  { icon: Star, text: "4.9/5 Rating" }
                ].map((item, index) => (
                  <motion.div 
                    key={item.text}
                    className="flex items-center space-x-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="text-foreground">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground btn-magnetic"
                  >
                    <Link href="/team">Meet Our Team</Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button asChild variant="outline" size="lg">
                    <Link href="/booking">Book Consultation</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="relative"
              variants={itemVariants}
            >
              <motion.div 
                className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-110"
                  style={{
                    backgroundImage: "url(/images/gate.webp)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>

              <motion.div 
                className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/50"
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">
                    98%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Success Rate
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Story */}
      <motion.section 
        className="py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="relative"
              variants={itemVariants}
            >
              <motion.div 
                className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02, rotateY: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-110"
                  style={{
                    backgroundImage: "url(/images/arshni.webp)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Our Journey to
                <span className="gradient-text block">Excellence</span>
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed mb-8">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Founded in 2019 by Dr. Arshni Malde, TIA Clinics was born from
                  a vision to bring world-class aesthetic medicine to Kenya.
                  With extensive training in international aesthetic techniques
                  and a passion for enhancing natural beauty, Dr. Malde
                  established TIA Clinics as Nairobi's premier destination for
                  non-surgical aesthetic treatments.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Located in the prestigious Muthaiga area, our state-of-the-art
                  facility combines luxury with medical precision. We've
                  carefully curated every aspect of the TIA experience, from our
                  advanced treatment technologies to our serene, spa-like
                  environment that puts clients at ease.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  What sets us apart is our commitment to continuous education
                  and innovation. Our team regularly attends international
                  conferences and training programs to stay at the forefront of
                  aesthetic medicine, ensuring our clients receive the most
                  advanced and effective treatments available.
                </motion.p>
              </div>

              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground btn-magnetic"
                >
                  <Link href="/team">Meet Dr. Arshni Malde</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Values */}
      <motion.section 
        className="py-24 bg-gradient-to-br from-secondary via-white to-accent/10 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-10 left-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 8,
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
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">Our Values</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Our Core
              <span className="gradient-text block">Values</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do at TIA Clinics, ensuring
              exceptional care and outstanding results for every client.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="group"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="border-0 shadow-lg text-center h-full bg-white/80 backdrop-blur-sm relative overflow-hidden">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5`}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <CardContent className="p-8">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
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
                      <value.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Certifications */}
      <motion.section 
        className="py-24 bg-gradient-to-br from-white via-accent/10 to-secondary/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">Credentials</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Certifications &
              <span className="gradient-text block">Accreditations</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to excellence is validated by prestigious
              certifications and ongoing professional development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((certification, index) => (
              <motion.div
                key={certification}
                variants={itemVariants}
                className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-white/50 hover:shadow-md transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                </motion.div>
                <span className="text-foreground font-medium">
                  {certification}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
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
              x: [0, 100, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Experience the TIA Difference
            </h2>
            
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Join thousands of satisfied clients who have trusted us with their
              aesthetic journey. Schedule your complimentary consultation today.
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
                  <Link href="/booking">Book Free Consultation</Link>
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
                  <Link href="/team">Meet Our Team</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
