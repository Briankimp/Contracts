"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    }, 3000)
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about our treatments? We're here to help. Reach out to our team and we'll respond within 24
            hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information Cards */}
          <Card className="animate-fade-in-up animation-delay-100 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-muted-foreground">
                Muthaiga North Road
                <br />
                Muthaiga, Nairobi
                <br />
                Kenya
              </p>
              <Button variant="link" className="mt-4 text-primary">
                Get Directions
              </Button>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up animation-delay-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-2">
                <a href="tel:+254722123456" className="hover:text-primary transition-colors">
                  +254 722 123 456
                </a>
              </p>
              <p className="text-muted-foreground">
                <a href="tel:+254733456789" className="hover:text-primary transition-colors">
                  +254 733 456 789
                </a>
              </p>
              <p className="text-sm text-muted-foreground mt-4">Mon - Sat: 9:00 AM - 6:00 PM</p>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up animation-delay-300 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-2">
                <a href="mailto:info@tiaclinics.co.ke" className="hover:text-primary transition-colors">
                  info@tiaclinics.co.ke
                </a>
              </p>
              <p className="text-muted-foreground">
                <a href="mailto:appointments@tiaclinics.co.ke" className="hover:text-primary transition-colors">
                  appointments@tiaclinics.co.ke
                </a>
              </p>
              <p className="text-sm text-muted-foreground mt-4">Response within 24 hours</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in-up animation-delay-400">
            <h2 className="text-3xl font-serif mb-6">Send Us a Message</h2>
            <Card>
              <CardContent className="p-8">
                {submitted ? (
                  <div className="text-center py-8 animate-fade-in">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <Send className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">Thank you for contacting us. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-base mb-2 block">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-12"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email" className="text-base mb-2 block">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="h-12"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-base mb-2 block">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="h-12"
                          placeholder="+254 700 000 000"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-base mb-2 block">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="h-12"
                        placeholder="How can we help you?"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-base mb-2 block">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="min-h-40"
                        placeholder="Tell us more about your inquiry..."
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full h-12">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          <div className="space-y-8 animate-fade-in-up animation-delay-500">
            <div>
              <h2 className="text-3xl font-serif mb-6">Visit Our Clinic</h2>
              <Card>
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                    <img
                      src="/images/gate.webp"
                      alt="TIA Clinics Location"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center 40%' }}
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium mb-1">Address</p>
                        <p className="text-muted-foreground">
                          Muthaiga North Road, Muthaiga
                          <br />
                          Nairobi, Kenya
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium mb-1">Opening Hours</p>
                        <div className="text-muted-foreground space-y-1">
                          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                          <p>Saturday: 9:00 AM - 4:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-serif mb-4">Follow Us</h3>
              <p className="text-muted-foreground mb-6">
                Stay updated with our latest treatments, tips, and special offers on social media.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/tiaclinics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com/tiaclinics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/company/tiaclinics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Emergency Consultations</h3>
                <p className="text-muted-foreground mb-4">
                  For urgent matters or same-day appointments, please call us directly at:
                </p>
                <a href="tel:+254722123456" className="text-2xl font-semibold text-primary hover:underline">
                  +254 722 123 456
                </a>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 animate-fade-in-up animation-delay-600">
          <h2 className="text-3xl font-serif text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Do I need a consultation before treatment?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, we recommend a consultation for first-time clients to assess your needs and create a personalized
                  treatment plan.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-muted-foreground text-sm">
                  We accept cash, M-Pesa, credit/debit cards, and bank transfers for your convenience.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Is parking available?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, we have secure parking facilities available for all our clients at no additional cost.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Can I reschedule my appointment?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, please provide at least 24 hours notice for rescheduling to avoid cancellation fees.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
