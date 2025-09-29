import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Stethoscope, CheckCircle, Clock, Star, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Minor Procedures - Specialized Treatments | TIA Clinics",
  description:
    "Professional minor procedures including keloid removal, skin tag removal, and specialized care at TIA Clinics Nairobi.",
}

export default function MinorProceduresPage() {
  const procedures = [
    {
      name: "Keloid Removal",
      description: "Professional treatment for keloid scars with minimal scarring",
      price: "From KES 15,000",
      duration: "30-45 minutes",
    },
    {
      name: "Skin Tag Removal",
      description: "Quick and painless removal of skin tags",
      price: "From KES 8,000",
      duration: "15-30 minutes",
    },
    {
      name: "Mole Removal",
      description: "Safe removal of unwanted moles with aesthetic consideration",
      price: "From KES 12,000",
      duration: "20-40 minutes",
    },
    {
      name: "Scar Treatment",
      description: "Advanced scar revision and treatment options",
      price: "From KES 18,000",
      duration: "30-60 minutes",
    },
  ]

  const benefits = [
    "Performed by licensed medical professionals",
    "Minimal discomfort with local anesthesia",
    "Quick procedures with fast recovery",
    "Aesthetic-focused techniques",
    "Comprehensive aftercare instructions",
    "Follow-up consultations included",
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-accent to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <Badge className="mb-4 bg-primary text-primary-foreground">
                <Stethoscope className="w-3 h-3 mr-1" />
                Specialized Medical Procedures
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                Minor Procedures & Specialized Care
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                Professional minor procedures performed with precision and care by our experienced medical team.
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
                <span className="text-muted-foreground">4.9/5 from 500+ procedures</span>
              </div>
            </div>
            <div className="relative animate-fade-in-up animation-delay-200">
              <img src="/medical-professional-african-doctor-clinic.jpg" alt="Minor Procedures" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Procedures Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Minor Procedures</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Safe, effective treatments for various skin concerns performed in our state-of-the-art facility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {procedures.map((procedure, index) => (
              <Card
                key={procedure.name}
                className="card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-2">{procedure.name}</h3>
                      <p className="text-muted-foreground">{procedure.description}</p>
                    </div>
                    <Stethoscope className="w-8 h-8 text-primary flex-shrink-0" />
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{procedure.duration}</span>
                      </div>
                      <div className="text-lg font-semibold text-primary">{procedure.price}</div>
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
            <h2 className="text-4xl font-bold text-foreground mb-6">Why Choose TIA for Minor Procedures?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg px-6 border">
              <AccordionTrigger className="text-lg font-semibold">Are these procedures painful?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Most minor procedures are performed under local anesthesia, ensuring minimal discomfort. You may feel
                slight pressure during the procedure, but pain is typically minimal.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg px-6 border">
              <AccordionTrigger className="text-lg font-semibold">What is the recovery time?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Recovery varies by procedure but is generally quick. Most clients return to normal activities within
                24-48 hours. We provide detailed aftercare instructions to ensure optimal healing.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg px-6 border">
              <AccordionTrigger className="text-lg font-semibold">Will there be scarring?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Our medical team uses advanced techniques to minimize scarring. While some procedures may leave minimal
                marks, we prioritize aesthetic outcomes and provide scar management recommendations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Professional Care You Can Trust</h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule your consultation to discuss your specific needs with our experienced medical team.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link href="/booking">Book Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
