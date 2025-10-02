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
  GraduationCap,
  Users,
  Star,
  MapPin,
  Calendar,
  Phone,
  Mail,
  Heart,
  Sparkles,
  CheckCircle,
  Globe,
} from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Arshni Malde",
    title: "Medical Director & Founder",
    specialties: [
      "Aesthetic Medicine",
      "Injectable Treatments",
      "Non-Surgical Procedures",
    ],
    qualifications: [
      "University of Greifswald – Advanced studies in Medical Cosmetology",
      "Fellowship of Medical Cosmetology (FMC),  – Specialization in cosmetology and aesthetic procedures",
      "Dr. D.Y. Patil Dental College and Hospital  – Bachelor's Degree in Dentistry",
      "Oshwal Academy  – A-Levels",
    ],
    experience: "10+ years",
    languages: ["English", "Swahili", "Hindi"],
    image: "/images/arshni.webp",
    bio: "Dr. Arshni Malde is the Medical Director at Tia Clinics Nairobi, with a strong foundation in dentistry and advanced training in aesthetic medicine. She earned her Bachelor's Degree in Dentistry from Dr. D.Y. Patil Dental College and Hospital and further specialized through the Fellowship of Medical Cosmetology (FMC), alongside advanced studies at the University of Greifswald. Building on her academic background, she has developed expertise in non-surgical aesthetic treatments including facelifts, Botox, dermal fillers, IV therapy, and PRP. With international experience in Kenya, India, and Germany, Dr. Malde combines medical knowledge with artistic precision to deliver safe, innovative, and patient-centered care in aesthetics.",
    achievements: [
      "Pioneering Hair Transplant Services in Nairobi",
      "Introduction of Stem Cell / Regenerative Therapies in Kenya",
      "She leads workshops and CPD (Continuing Professional Development) sessions.",
      "Published researcher in aesthetic medicine journals",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Cecilia Karanja",
    title: "General Manager & Senior Aesthetician",
    specialties: [
      "HydraFacial",
      "Skin Analysis",
      "Client Care",
      "Treatment Coordination",
    ],
    qualifications: [
      "Diploma in Beauty Therapy",
      "HydraFacial Certification",
      "Advanced Skincare Specialist",
      "Client Relations Management",
    ],
    experience: "6+ years",
    languages: ["English", "Swahili"],
    image: "/images/cecilia.jpg",
    bio: "Cecilia brings extensive experience in aesthetic treatments and client care. Her expertise in skin analysis and treatment planning ensures every client receives personalized care tailored to their unique needs and goals.",
    achievements: [
      "Certified HydraFacial specialist with advanced training",
      "Expert in skin analysis and treatment planning",
      "Exceptional client satisfaction ratings",
      "Specialized training in post-treatment care",
    ],
    color: "from-blue-500 to-cyan-500",
  },
];

const clinicStats = [
  { number: "4", label: "Expert Professionals", icon: Users, color: "from-blue-500 to-blue-600" },
  { number: "25+", label: "Years Combined Experience", icon: Calendar, color: "from-green-500 to-green-600" },
  { number: "15+", label: "Certifications", icon: Award, color: "from-purple-500 to-purple-600" },
  { number: "4.9", label: "Average Rating", icon: Star, color: "from-yellow-500 to-orange-500" },
];

const teamValues = [
  {
    icon: GraduationCap,
    title: "Continuous Education",
    description: "Our team regularly attends international conferences and training programs to stay current with the latest techniques and technologies.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Award,
    title: "Certified Expertise",
    description: "All our practitioners hold relevant medical qualifications and specialized certifications in aesthetic medicine from recognized institutions.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Users,
    title: "Patient-Centered Care",
    description: "We prioritize your comfort, safety, and satisfaction, taking time to understand your goals and provide personalized treatment plans.",
    color: "from-purple-500 to-purple-600",
  },
];

export default function TeamPage() {
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
          
          {/* Floating Professional Icons */}
          {[Users, Award, GraduationCap, Heart].map((Icon, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${25 + i * 15}%`,
                top: `${20 + (i % 2) * 50}%`,
              }}
              animate={{
                y: [0, -25, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 4 + i * 0.7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.9
              }}
            >
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary/40" />
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
              <Users className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">Expert Team</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Meet Our Medical
              <span className="gradient-text block">Experts</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
              Our team of certified medical professionals combines extensive
              training, artistic vision, and compassionate care to deliver
              exceptional aesthetic results. Each member brings unique expertise
              and a commitment to your safety and satisfaction.
            </p>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {clinicStats.map((stat, index) => (
                <motion.div 
                  key={stat.label} 
                  className="text-center group"
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
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
                    <stat.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2 gradient-text">
                    {stat.number}
                  </div>
                  
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Team Members */}
      <motion.section 
        className="py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Enhanced Image */}
                <motion.div
                  className={`relative ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                    <motion.div
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${member.image})` }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Floating Experience Card */}
                  <motion.div 
                    className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/50"
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.8 + index * 0.2, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">
                        {member.experience}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Experience
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Enhanced Content */}
                <motion.div
                  className={`${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  }`}
                  variants={itemVariants}
                >
                  <div className="mb-6">
                    <motion.h2 
                      className="text-4xl md:text-5xl font-bold text-foreground mb-3 leading-tight"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {member.name}
                    </motion.h2>
                    
                    <motion.p 
                      className="text-xl text-primary font-semibold mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {member.title}
                    </motion.p>
                  </div>

                  <motion.p 
                    className="text-muted-foreground mb-8 leading-relaxed text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {member.bio}
                  </motion.p>

                  {/* Enhanced Specialties */}
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h3 className="font-bold text-foreground mb-4 text-lg">
                      Specialties
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {member.specialties.map((specialty, specialtyIndex) => (
                        <motion.div
                          key={specialty}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + specialtyIndex * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge
                            variant="secondary"
                            className={`text-sm px-4 py-2 bg-gradient-to-r ${member.color} text-white shadow-md hover:shadow-lg transition-all`}
                          >
                            {specialty}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Enhanced Qualifications */}
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h3 className="font-bold text-foreground mb-4 text-lg">
                      Qualifications
                    </h3>
                    <div className="space-y-3">
                      {member.qualifications.slice(0, 3).map((qualification, qualIndex) => (
                        <motion.div
                          key={qualification}
                          className="flex items-start space-x-3 p-3 bg-white/50 rounded-xl border border-white/30"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + qualIndex * 0.1 }}
                          whileHover={{ scale: 1.02, x: 5 }}
                        >
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <GraduationCap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          </motion.div>
                          <span className="text-sm text-muted-foreground leading-relaxed">
                            {qualification}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Enhanced Languages */}
                  <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <h3 className="font-bold text-foreground mb-4 text-lg flex items-center space-x-2">
                      <Globe className="w-5 h-5 text-primary" />
                      <span>Languages</span>
                    </h3>
                    <div className="flex space-x-3">
                      {member.languages.map((language, langIndex) => (
                        <motion.div
                          key={language}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.9 + langIndex * 0.1 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          <Badge
                            variant="outline"
                            className="text-sm px-3 py-1 border-primary/30 hover:bg-primary/5 transition-all"
                          >
                            {language}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Enhanced CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      asChild
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full shadow-xl btn-magnetic"
                    >
                      <Link href="/booking" className="flex items-center space-x-2">
                        <Heart className="w-5 h-5" />
                        <span>Book with {member.name.split(" ")[1]}</span>
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Enhanced Why Choose Our Team */}
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
            className="absolute top-10 right-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 10,
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
              <span className="gradient-text block">Our Team?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to excellence, continuous education, and patient
              safety sets us apart in the field of aesthetic medicine.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamValues.map((value, index) => (
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
                    
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
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

      {/* Enhanced Contact Team */}
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
              Ready to Meet Our Team?
            </h2>
            
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Schedule your consultation today and discover how our expert team
              can help you achieve your aesthetic goals safely and effectively.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
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
                    <span>Book Consultation</span>
                  </Link>
                </Button>
              </motion.div>
              
              <div className="flex items-center space-x-4">
                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    asChild 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-white/50 text-white hover:bg-white/10 px-8 py-4 rounded-full bg-transparent backdrop-blur-sm"
                  >
                    <Link
                      href="tel:+254782777779"
                      className="flex items-center space-x-2"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Call Us</span>
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
                    className="border-2 border-white/50 text-white hover:bg-white/10 px-8 py-4 rounded-full bg-transparent backdrop-blur-sm"
                  >
                    <Link
                      href="mailto:info@tiaclinics.co.ke"
                      className="flex items-center space-x-2"
                    >
                      <Mail className="w-5 h-5" />
                      <span>Email Us</span>
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>

            <motion.div 
              className="flex items-center justify-center space-x-2 text-white/80"
              whileHover={{ scale: 1.05 }}
            >
              <MapPin className="w-5 h-5" />
              <span>Muthaiga Grove, Muthaiga Road, Nairobi</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
