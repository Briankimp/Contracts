"use client"

import { useState, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Heart,
  Sparkles,
  Calendar,
  MessageCircle,
  Navigation,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+254 782 777 779", "+254 782 777 780"],
    href: "tel:+254782777779",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@tiaclinics.co.ke", "appointments@tiaclinics.co.ke"],
    href: "mailto:info@tiaclinics.co.ke",
    color: "from-green-500 to-green-600",
  },
  {
    icon: MapPin,
    title: "Location",
    details: ["Muthaiga Grove", "Muthaiga Road, Nairobi"],
    href: "https://maps.google.com/?q=Muthaiga+Grove+Nairobi",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"],
    href: null,
    color: "from-orange-500 to-red-500",
  },
];

const reasons = [
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Every consultation is tailored to your unique needs and aesthetic goals.",
  },
  {
    icon: CheckCircle,
    title: "Expert Team",
    description: "Licensed medical professionals with international training and certifications.",
  },
  {
    icon: Sparkles,
    title: "Premium Experience",
    description: "Luxury facility with state-of-the-art equipment and serene environment.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  const heroRef = useRef(null);
  const formRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const isFormInView = useInView(formRef, { once: true, amount: 0.3 });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success animation
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      setIsSubmitted(false);
    }, 3000);
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
          <motion.div
            className="absolute bottom-20 left-20 w-60 h-60 bg-gradient-to-r from-accent/20 to-primary/10 rounded-full blur-2xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
              x: [0, 50, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Floating Contact Icons */}
          {[Phone, Mail, MapPin, MessageCircle].map((Icon, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${20 + i * 15}%`,
                top: `${25 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8,
              }}
            >
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <Icon className="w-4 h-4 text-primary/40" />
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
              <MessageCircle className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">Get In Touch</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Contact
              <span className="gradient-text block">TIA Clinics</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Ready to begin your aesthetic journey? Our expert team is here to
              answer your questions and help you achieve your beauty goals with
              personalized care and premium treatments.
            </p>

          </motion.div>
        </div>
      </motion.section>

      {/* Contact Information & Form Section */}
      <motion.section
        className="py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                Get in
                <span className="gradient-text block">Touch</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                We're here to help you every step of the way. Reach out to us
                through any of the channels below, and our friendly team will
                respond promptly to assist you.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    variants={itemVariants}
                    className="group"
                    whileHover={{ x: 8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <motion.div
                            className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}
                            whileHover={{
                              rotate: 360,
                              scale: 1.1,
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 20,
                              rotate: { duration: 0.6 },
                            }}
                          >
                            <info.icon className="w-6 h-6 text-white" />
                          </motion.div>

                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                              {info.title}
                            </h3>
                            <div className="space-y-1">
                              {info.details.map((detail, detailIndex) => (
                                <div key={detailIndex}>
                                  {info.href ? (
                                    <Link
                                      href={info.href}
                                      className="text-muted-foreground hover:text-primary transition-colors link-animated"
                                      target={info.href.startsWith("http") ? "_blank" : undefined}
                                    >
                                      {detail}
                                    </Link>
                                  ) : (
                                    <span className="text-muted-foreground">{detail}</span>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Why Choose Us */}
              <motion.div className="mt-12" variants={itemVariants}>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Why Choose TIA Clinics?
                </h3>
                <div className="space-y-4">
                  {reasons.map((reason, index) => (
                    <motion.div
                      key={reason.title}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                      >
                        <reason.icon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {reason.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {reason.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced Contact Form */}
            <motion.div ref={formRef} variants={itemVariants}>
              <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />

                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Send us a Message
                    </h3>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </div>

                  <AnimatePresence mode="wait">
                    {!isSubmitted ? (
                      <motion.form
                        key="form"
                        onSubmit={handleSubmit}
                        className="space-y-6"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                          >
                            <Label htmlFor="name" className="text-foreground font-medium">
                              Full Name *
                            </Label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="mt-2 border-primary/20 focus:border-primary focus:ring-primary/20 transition-all duration-200"
                              placeholder="Your full name"
                            />
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            <Label htmlFor="email" className="text-foreground font-medium">
                              Email Address *
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="mt-2 border-primary/20 focus:border-primary focus:ring-primary/20 transition-all duration-200"
                              placeholder="your.email@example.com"
                            />
                          </motion.div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            <Label htmlFor="phone" className="text-foreground font-medium">
                              Phone Number
                            </Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="mt-2 border-primary/20 focus:border-primary focus:ring-primary/20 transition-all duration-200"
                              placeholder="+254 XXX XXX XXX"
                            />
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                          >
                            <Label htmlFor="service" className="text-foreground font-medium">
                              Service of Interest
                            </Label>
                            <select
                              id="service"
                              name="service"
                              value={formData.service}
                              onChange={(e) => handleInputChange(e as any)}
                              className="mt-2 w-full px-3 py-2 border border-primary/20 rounded-md focus:border-primary focus:ring-primary/20 transition-all duration-200 bg-white"
                            >
                              <option value="">Select a service</option>
                              <option value="injectables">Injectables</option>
                              <option value="skin-treatments">Skin Treatments</option>
                              <option value="hair-restoration">Hair Restoration</option>
                              <option value="iv-therapy">IV Therapy</option>
                              <option value="body-contouring">Body Contouring</option>
                              <option value="consultation">General Consultation</option>
                            </select>
                          </motion.div>
                        </div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <Label htmlFor="message" className="text-foreground font-medium">
                            Message *
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={4}
                            className="mt-2 border-primary/20 focus:border-primary focus:ring-primary/20 transition-all duration-200 resize-none"
                            placeholder="Tell us about your goals and any questions you have..."
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground btn-magnetic rounded-full py-6 text-lg font-semibold shadow-xl"
                          >
                            {isSubmitting ? (
                              <motion.div
                                className="flex items-center space-x-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                              >
                                <motion.div
                                  className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                />
                                <span>Sending...</span>
                              </motion.div>
                            ) : (
                              <div className="flex items-center space-x-2">
                                <Send className="w-5 h-5" />
                                <span>Send Message</span>
                              </div>
                            )}
                          </Button>
                        </motion.div>
                      </motion.form>
                    ) : (
                      <motion.div
                        key="success"
                        className="text-center py-12"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      >
                        <motion.div
                          className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                        >
                          <CheckCircle className="w-10 h-10 text-white" />
                        </motion.div>

                        <motion.h3
                          className="text-2xl font-bold text-foreground mb-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          Message Sent Successfully!
                        </motion.h3>

                        <motion.p
                          className="text-muted-foreground mb-8"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          Thank you for reaching out. We'll get back to you within 24 hours.
                        </motion.p>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 }}
                        >
                          <Button
                            asChild
                            className="bg-primary hover:bg-primary/90 text-primary-foreground btn-magnetic rounded-full px-8 py-3"
                          >
                            <Link href="/booking">Book Consultation</Link>
                          </Button>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
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
              Ready to Transform Your Look?
            </h2>

            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Take the first step towards your aesthetic goals. Book your
              complimentary consultation today and discover what TIA Clinics can
              do for you.
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
                  <Link href="/services" className="flex items-center space-x-3">
                    <Navigation className="w-6 h-6" />
                    <span>Explore Services</span>
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
