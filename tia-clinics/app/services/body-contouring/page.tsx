import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Zap, CheckCircle, Clock, Star, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Body Contouring - Non-Surgical Body Sculpting | TIA Clinics",
  description:
    "Transform your body with advanced non-surgical body contouring treatments at TIA Clinics. Fat reduction, body sculpting, and skin tightening in Nairobi.",
}

export default function BodyContouringPage() {
  const treatments = [
    {
      name: "Fat Reduction",
      description: "Non-invasive fat reduction targeting stubborn areas",
      price: "From KES 45,000",
      duration: "60-90 minutes",
    },
    {
      name: "Body Sculpting",
      description: "Comprehensive body contouring for defined silhouette",
      price: "From KES 55,000",
      duration: "90 minutes",
    },
    {
      name: "Cellulite Treatment",
      description: "Advanced cellulite reduction for smoother skin",
      price: "From KES 35,000",
      duration: "60 minutes",
    },
    {
      name: "Skin Tightening",
      description: "Non-surgical skin tightening for firmer appearance",
      price: "From KES 40,000",
      duration: "60 minutes",
    },
  ]

  const benefits = [
    "Non-surgical and non-invasive procedures",
    "No downtime or recovery period required",
    "Visible results within weeks of treatment",
    "Safe for all skin types and tones",
    "Customized treatment plans for your goals",
    "Long-lasting results with proper maintenance",
    "FDA-approved technology and methods",
    "Comfortable treatment experience",
  ]

  const process = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Comprehensive assessment of your body goals and medical history",
    },
    {
      step: "2",
      title: "Treatment Planning",
      description: "Customized body contouring plan tailored to your specific needs",
    },
    {
      step: "3",
      title: "Treatment Session",
      description: "Comfortable procedure using advanced body sculpting technology",
    },
    {
      step: "4",
      title: "Follow-up Care",
      description: "Regular monitoring and maintenance recommendations for optimal results",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-accent to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <Badge className="mb-4 bg-primary text-primary-foreground">
                <Zap className="w-3 h-3 mr-1" />
                Non-Surgical Body Sculpting
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                Body Contouring & Sculpting
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                Achieve your ideal body shape with our advanced non-surgical body contouring treatments. Safe,
                effective, and designed for natural-looking results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/booking">Book Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
              <div className="flex items-center space-x-6 mt-8">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-muted-foreground">4.8/5 from 200+ treatments</span>
              </div>
            </div>
            <div className="relative animate-fade-in-up animation-delay-200">
              <img
                src="/confident-african-woman-body-contouring-wellness.jpg"
                alt="Body Contouring Treatment"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Body Contouring Treatments</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our range of advanced body sculpting procedures designed to target specific areas and achieve
              your aesthetic goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {treatments.map((treatment, index) => (
              <Card
                key={treatment.name}
                className="card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-2">{treatment.name}</h3>
                      <p className="text-muted-foreground">{treatment.description}</p>
                    </div>
                    <Zap className="w-8 h-8 text-primary flex-shrink-0" />
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{treatment.duration}</span>
                      </div>
                      <div className="text-lg font-semibold text-primary">{treatment.price}</div>
                    </div>
                    <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Link href="/booking">Book Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Why Choose Body Contouring?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the benefits of non-surgical body sculpting with proven results and minimal downtime.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-6 bg-white rounded-lg shadow-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Your Treatment Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From consultation to results, we guide you through every step of your body transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div
                key={item.step}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">How does body contouring work?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Body contouring uses advanced technology to target and reduce fat cells in specific areas. The
                procedures are non-invasive and work by breaking down fat cells, which are then naturally eliminated by
                your body over time.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Is there any downtime after treatment?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                One of the major benefits of non-surgical body contouring is minimal to no downtime. Most clients return
                to their normal activities immediately after treatment. Some may experience mild redness or tenderness
                that resolves within a few hours.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">When will I see results?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Initial results can be seen within 2-3 weeks, with optimal results appearing after 8-12 weeks as your
                body naturally processes and eliminates the treated fat cells. Multiple sessions may be recommended for
                best results.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">How many sessions will I need?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                The number of sessions varies based on your individual goals and the treatment area. Most clients see
                significant results with 2-4 sessions spaced 4-6 weeks apart. During your consultation, we'll create a
                personalized treatment plan.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">Are the results permanent?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                The fat cells eliminated during treatment are permanently removed. However, maintaining results requires
                a healthy lifestyle with proper diet and exercise. Weight gain can affect remaining fat cells in treated
                and untreated areas.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Body?</h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule your complimentary consultation and discover how body contouring can help you achieve your ideal
            silhouette.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/booking">Book Free Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
