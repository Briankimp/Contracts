"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  "Botox & Dysport",
  "Dermal Fillers",
  "Thread Lift",
  "HydraFacial",
  "Chemical Peels",
  "Microneedling",
  "Hair Restoration (PRP)",
  "IV Therapy",
  "Body Contouring",
  "Laser Treatments",
  "Consultation",
]

const timeSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
]

export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (submitted) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 animate-scale-in">
            <CheckCircle2 className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif mb-6 animate-fade-in-up">Booking Confirmed!</h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in-up animation-delay-100">
            Thank you for choosing TIA Clinics. We've received your appointment request.
          </p>
          <Card className="mb-8 animate-fade-in-up animation-delay-200">
            <CardContent className="p-8">
              <div className="space-y-4 text-left">
                <div className="flex justify-between border-b border-border pb-3">
                  <span className="text-muted-foreground">Service:</span>
                  <span className="font-medium">{formData.service}</span>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <span className="text-muted-foreground">Date:</span>
                  <span className="font-medium">{formData.date}</span>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <span className="text-muted-foreground">Time:</span>
                  <span className="font-medium">{formData.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Name:</span>
                  <span className="font-medium">
                    {formData.firstName} {formData.lastName}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          <p className="text-muted-foreground mb-8">
            A confirmation email has been sent to <strong>{formData.email}</strong>. Our team will contact you within 24
            hours to confirm your appointment.
          </p>
          <div className="flex gap-4 justify-center">
            <Button onClick={() => (window.location.href = "/")}>Return Home</Button>
            <Button
              variant="outline"
              onClick={() => {
                setSubmitted(false)
                setStep(1)
                setFormData({
                  service: "",
                  date: "",
                  time: "",
                  firstName: "",
                  lastName: "",
                  email: "",
                  phone: "",
                  message: "",
                })
              }}
            >
              Book Another
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Book Your Appointment</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Schedule your consultation or treatment with our expert team. We'll confirm your appointment within 24
            hours.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12 animate-fade-in-up animation-delay-100">
          <div className="flex items-center justify-center gap-4">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                    step >= num ? "border-primary bg-primary text-white" : "border-border bg-background"
                  }`}
                >
                  {num}
                </div>
                {num < 3 && (
                  <div
                    className={`w-16 h-0.5 transition-all duration-300 ${step > num ? "bg-primary" : "bg-border"}`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between max-w-md mx-auto mt-2">
            <span className="text-sm text-muted-foreground">Service & Date</span>
            <span className="text-sm text-muted-foreground">Your Details</span>
            <span className="text-sm text-muted-foreground">Confirm</span>
          </div>
        </div>

        {/* Booking Form */}
        <Card className="animate-fade-in-up animation-delay-200">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Service & Date */}
              {step === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <Label htmlFor="service" className="text-base mb-2 block">
                      Select Service *
                    </Label>
                    <Select value={formData.service} onValueChange={(value) => updateFormData("service", value)}>
                      <SelectTrigger id="service" className="h-12">
                        <SelectValue placeholder="Choose a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="date" className="text-base mb-2 block">
                      Preferred Date *
                    </Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => updateFormData("date", e.target.value)}
                        className="h-12 pl-10"
                        min={new Date().toISOString().split("T")[0]}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="time" className="text-base mb-2 block">
                      Preferred Time *
                    </Label>
                    <Select value={formData.time} onValueChange={(value) => updateFormData("time", value)}>
                      <SelectTrigger id="time" className="h-12">
                        <Clock className="w-5 h-5 mr-2" />
                        <SelectValue placeholder="Choose a time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={!formData.service || !formData.date || !formData.time}
                    className="w-full h-12"
                  >
                    Continue to Your Details
                  </Button>
                </div>
              )}

              {/* Step 2: Personal Details */}
              {step === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-base mb-2 block">
                        First Name *
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => updateFormData("firstName", e.target.value)}
                          className="h-12 pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-base mb-2 block">
                        Last Name *
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => updateFormData("lastName", e.target.value)}
                          className="h-12 pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-base mb-2 block">
                      Email Address *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        className="h-12 pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-base mb-2 block">
                      Phone Number *
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                        className="h-12 pl-10"
                        placeholder="+254 700 000 000"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-base mb-2 block">
                      Additional Notes (Optional)
                    </Label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => updateFormData("message", e.target.value)}
                        className="min-h-32 pl-10 pt-3"
                        placeholder="Any specific concerns or questions?"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1 h-12">
                      Back
                    </Button>
                    <Button
                      type="button"
                      onClick={() => setStep(3)}
                      disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone}
                      className="flex-1 h-12"
                    >
                      Review Booking
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Confirmation */}
              {step === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                    <h3 className="text-xl font-semibold mb-4">Review Your Booking</h3>

                    <div className="space-y-3">
                      <div className="flex justify-between border-b border-border pb-3">
                        <span className="text-muted-foreground">Service:</span>
                        <span className="font-medium">{formData.service}</span>
                      </div>
                      <div className="flex justify-between border-b border-border pb-3">
                        <span className="text-muted-foreground">Date:</span>
                        <span className="font-medium">{formData.date}</span>
                      </div>
                      <div className="flex justify-between border-b border-border pb-3">
                        <span className="text-muted-foreground">Time:</span>
                        <span className="font-medium">{formData.time}</span>
                      </div>
                      <div className="flex justify-between border-b border-border pb-3">
                        <span className="text-muted-foreground">Name:</span>
                        <span className="font-medium">
                          {formData.firstName} {formData.lastName}
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-border pb-3">
                        <span className="text-muted-foreground">Email:</span>
                        <span className="font-medium">{formData.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Phone:</span>
                        <span className="font-medium">{formData.phone}</span>
                      </div>
                      {formData.message && (
                        <div className="pt-3 border-t border-border">
                          <span className="text-muted-foreground block mb-2">Additional Notes:</span>
                          <p className="text-sm">{formData.message}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="bg-accent/50 rounded-lg p-4 text-sm">
                    <p className="text-muted-foreground">
                      By confirming this booking, you agree to our cancellation policy. Please provide at least 24 hours
                      notice for cancellations or rescheduling.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Button type="button" variant="outline" onClick={() => setStep(2)} className="flex-1 h-12">
                      Back
                    </Button>
                    <Button type="submit" className="flex-1 h-12">
                      Confirm Booking
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="mt-12 text-center animate-fade-in-up animation-delay-300">
          <p className="text-muted-foreground mb-4">Need help with your booking? Contact us directly:</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="tel:+254722123456" className="flex items-center gap-2 text-primary hover:underline">
              <Phone className="w-4 h-4" />
              +254 722 123 456
            </a>
            <a href="mailto:info@tiaclinics.co.ke" className="flex items-center gap-2 text-primary hover:underline">
              <Mail className="w-4 h-4" />
              info@tiaclinics.co.ke
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
