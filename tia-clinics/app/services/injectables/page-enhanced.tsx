"use client"

import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Sparkles,
  Clock,
  Star,
  CheckCircle,
  Heart,
  Shield,
  Award,
  ArrowRight,
  Calendar,
  Phone,
} from "lucide-react";

const treatments = [
  {
    name: "Botox Injections",
    description: "Smooth wrinkles and fine lines with precision Botox treatments for a natural, refreshed appearance.",
    duration: "30-45 minutes",
    price: "From KES 25,000",
    areas: ["Forehead", "Crow's feet", "Frown lines", "Lip lines"],
    results: "3-7 days",
    lasting: "3-6 months",
  },
  {
    name: "Dermal Fillers",
    description: "Restore volume and enhance facial contours with premium hyaluronic acid fillers.",
    duration: "45-60 minutes", 
    price: "From KES 35,000",
    areas: ["Cheeks", "Lips", "Nasolabial folds", "Jawline"],
    results: "Immediate",
    lasting: "12-18 months",
  },
  {
    name: "Profile Harmonization",
    description: "Comprehensive facial balancing using strategic filler placement for optimal proportions.",
    duration: "60-90 minutes",
    price: "From KES 65,000",
    areas: ["Full face", "Chin", "Nose", "Cheeks"],
    results: "Immediate",
    lasting: "12-18 months",
  },
  {
    name: "Lip Enhancement",
    description: "Achieve fuller, more defined lips with expert injection techniques and premium fillers.",
    duration: "30-45 minutes",
    price: "From KES 30,000",
    areas: ["Upper lip", "Lower lip", "Lip border", "Corners"],
    results: "Immediate",
    lasting: "9-12 months",
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Quick Procedures",
    description: "Most treatments completed in 30-60 minutes with minimal downtime.",
  },
  {
    icon: Shield,
    title: "FDA Approved",
    description: "Only premium, FDA-approved products from trusted manufacturers.",
  },
  {
    icon: Award,
    title: "Expert Technique",
    description: "Advanced injection techniques for natural-looking, beautiful results.",
  },
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Customized treatment plans tailored to your unique facial anatomy.",
  },
];

const beforeAfterProcess = [
  {
    step: "1",
    title: "Consultation",
    description: "Comprehensive facial analysis and treatment planning with Dr. Arshni Malde.",
  },
  {
    step: "2", 
    title: "Preparation",
    description: "Skin cleansing, marking injection points, and optional numbing cream application.",
  },
  {
    step: "3",
    title: "Treatment",
    description: "Precise injections using advanced techniques for optimal comfort and results.",
  },
  {
    step: "4",
    title: "Aftercare",
    description: "Post-treatment instructions and follow-up scheduling for best outcomes.",
  },
];

export default function InjectablesPage() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

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
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
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
              <Sparkles className="w-4 h-4 text-primary/40" />
            </motion.div>
          ))}
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
                <span className="text-primary font-medium text-sm">Premium Injectables</span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Botox & Dermal
                <span className="gradient-text block">Fillers</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Achieve natural-looking rejuvenation with our expert injectable
                treatments. From smoothing wrinkles to enhancing facial contours,
                our precision techniques deliver beautiful, lasting results.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { number: "30min", label: "Average Treatment" },
                  { number: "98%", label: "Satisfaction Rate" },
                  { number: "6-18mo", label: "Results Last" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl font-bold text-primary gradient-text mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground btn-magnetic rounded-full px-8 py-4"
                  >
                    <Link href="/booking" className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5" />
                      <span>Book Consultation</span>
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
                    className="rounded-full px-8 py-4"
                  >
                    <Link href="tel:+254782777779" className="flex items-center space-x-2">
                      <Phone className="w-5 h-5" />
                      <span>Call Now</span>
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              variants={itemVariants}
            >
              <motion.div
                className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-110"
                  style={{
                    backgroundImage: "url(https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/50"
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="text-center">
                  <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2 fill-current" />
                  <div className="text-lg font-bold text-primary">4.9/5</div>
                  <div className="text-xs text-muted-foreground">Rating</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Treatments Section */}
      <motion.section
        className="py-24 bg-gradient-to-br from-white via-secondary/20 to-accent/10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Our Injectable
              <span className="gradient-text block">Treatments</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our comprehensive range of injectable treatments, each
              designed to enhance your natural beauty with precision and artistry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatments.map((treatment, index) => (
              <motion.div
                key={treatment.name}
                variants={itemVariants}
                className="group"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="border-0 shadow-xl overflow-hidden bg-white/90 backdrop-blur-sm h-full card-luxury">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {treatment.name}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {treatment.description}
                        </p>
                      </div>
                      <motion.div
                        className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Sparkles className="w-6 h-6 text-white" />
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Duration</div>
                        <div className="font-semibold text-foreground">{treatment.duration}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Price</div>
                        <div className="font-semibold text-primary">{treatment.price}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Results</div>
                        <div className="font-semibold text-foreground">{treatment.results}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Duration</div>
                        <div className="font-semibold text-foreground">{treatment.lasting}</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="text-sm text-muted-foreground mb-3">Treatment Areas:</div>
                      <div className="flex flex-wrap gap-2">
                        {treatment.areas.map((area, areaIndex) => (
                          <Badge
                            key={area}
                            variant="secondary"
                            className="text-xs hover:bg-primary/10 transition-colors"
                          >
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        asChild
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg"
                      >
                        <Link
                          href="/booking"
                          className="flex items-center justify-center space-x-2"
                        >
                          <span>Book {treatment.name}</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        className="py-24 bg-gradient-to-br from-secondary via-white to-accent/20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Why Choose Our
              <span className="gradient-text block">Injectable Treatments?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                className="text-center group"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 h-full">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        className="py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Treatment
              <span className="gradient-text block">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive approach ensures optimal results and your complete comfort throughout the treatment journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beforeAfterProcess.map((step, index) => (
              <motion.div
                key={step.step}
                variants={itemVariants}
                className="relative text-center group"
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-white font-bold text-xl"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {step.step}
                </motion.div>

                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Connection Line */}
                {index < beforeAfterProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent transform -translate-x-8" />
                )}
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
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
              x: [0, 100, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready for Natural-Looking Results?
            </h2>

            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Book your complimentary consultation today and discover how our
              expert injectable treatments can enhance your natural beauty.
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
                    <Calendar className="w-6 h-6" />
                    <span>Book Free Consultation</span>
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
                    <Phone className="w-6 h-6" />
                    <span>Ask Questions</span>
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
