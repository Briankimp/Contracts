import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, Clock, Star, CheckCircle, AlertCircle, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "IV Therapy & Wellness Drips | TIA Clinics Nairobi",
  description:
    "Premium IV therapy and wellness drips at TIA Clinics. Boost immunity, energy, and vitality with customized vitamin infusions in Nairobi.",
}

const treatments = [
  {
    name: "Immunity Boost IV",
    description: "High-dose vitamin C and antioxidants to strengthen your immune system",
    duration: "45-60 minutes",
    price: "From KES 15,000",
    benefits: ["Immune support", "Antioxidant boost", "Cold prevention", "Faster recovery"],
  },
  {
    name: "Energy & Vitality Drip",
    description: "B-complex vitamins and minerals to combat fatigue and boost energy",
    duration: "45-60 minutes",
    price: "From KES 18,000",
    benefits: ["Increased energy", "Mental clarity", "Reduced fatigue", "Enhanced performance"],
  },
  {
    name: "Beauty Glow IV",
    description: "Glutathione and vitamins for radiant skin and anti-aging benefits",
    duration: "45-60 minutes",
    price: "From KES 20,000",
    benefits: ["Skin brightening", "Anti-aging", "Collagen support", "Detoxification"],
  },
  {
    name: "Hydration Therapy",
    description: "Rapid rehydration with electrolytes for optimal wellness",
    duration: "30-45 minutes",
    price: "From KES 12,000",
    benefits: ["Quick rehydration", "Electrolyte balance", "Hangover relief", "Athletic recovery"],
  },
]

const faqs = [
  {
    question: "What is IV therapy and how does it work?",
    answer:
      "IV therapy delivers vitamins, minerals, and nutrients directly into your bloodstream, bypassing the digestive system for 100% absorption. This allows for immediate benefits and higher concentrations than oral supplements.",
  },
  {
    question: "Is IV therapy safe?",
    answer:
      "Yes, when administered by qualified medical professionals. All our IV therapies are performed by trained nurses under medical supervision using sterile equipment and pharmaceutical-grade ingredients.",
  },
  {
    question: "How long does an IV therapy session take?",
    answer:
      "Most IV therapy sessions take 30-60 minutes depending on the specific drip. You can relax in our comfortable treatment rooms during the infusion.",
  },
  {
    question: "How often should I get IV therapy?",
    answer:
      "Frequency depends on your goals and health status. Some clients benefit from weekly sessions, while others prefer monthly maintenance. We'll create a personalized schedule during your consultation.",
  },
  {
    question: "When will I feel the effects?",
    answer:
      "Many clients feel immediate effects during or right after the infusion, including increased energy and mental clarity. Full benefits typically develop over 24-48 hours and can last several days to weeks.",
  },
]

export default function IVTherapyPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-accent to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <Badge className="mb-4 bg-primary text-primary-foreground">Wellness & Vitality</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                IV Therapy & Wellness Drips
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                Revitalize your body from within with our premium IV therapy treatments. Customized vitamin infusions to
                boost immunity, energy, and overall wellness delivered directly to your bloodstream.
              </p>

              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-foreground">30-60 minutes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-primary fill-current" />
                  <span className="text-foreground">4.9/5 rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-foreground">800+ treatments</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/booking">Book Session</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Ask Questions</Link>
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage:
                      "url(/placeholder.svg?height=500&width=600&query=african woman wellness iv therapy relaxation spa treatment)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">IV Therapy Options</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our range of specialized IV drips, each formulated to address specific wellness goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatments.map((treatment) => (
              <Card key={treatment.name} className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">{treatment.name}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{treatment.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Duration</div>
                      <div className="font-medium text-foreground">{treatment.duration}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Starting Price</div>
                      <div className="font-medium text-primary">{treatment.price}</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-sm text-muted-foreground mb-2">Key Benefits:</div>
                    <div className="flex flex-wrap gap-2">
                      {treatment.benefits.map((benefit) => (
                        <Badge key={benefit} variant="secondary" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/booking" className="flex items-center justify-center space-x-2">
                      <span>Book This Treatment</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Your IV Therapy Experience</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A relaxing and rejuvenating wellness experience from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Consultation</h3>
              <p className="text-muted-foreground text-sm">Discuss your wellness goals and health history</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">2</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Customization</h3>
              <p className="text-muted-foreground text-sm">Select the perfect IV drip for your needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Infusion</h3>
              <p className="text-muted-foreground text-sm">Relax while nutrients are delivered</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">4</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Recovery</h3>
              <p className="text-muted-foreground text-sm">Feel the immediate wellness benefits</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Considerations */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Benefits of IV Therapy</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">100% Absorption</h3>
                    <p className="text-muted-foreground text-sm">
                      Direct delivery to bloodstream bypasses digestive system
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Immediate Effects</h3>
                    <p className="text-muted-foreground text-sm">Feel benefits during and right after treatment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Customized Formulas</h3>
                    <p className="text-muted-foreground text-sm">Tailored to your specific wellness needs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Convenient & Quick</h3>
                    <p className="text-muted-foreground text-sm">Sessions take less than an hour</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Important Considerations</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Medical Screening</h3>
                    <p className="text-muted-foreground text-sm">Health assessment required before treatment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Mild Side Effects</h3>
                    <p className="text-muted-foreground text-sm">Temporary bruising or coolness at injection site</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Regular Sessions</h3>
                    <p className="text-muted-foreground text-sm">Best results with consistent treatment schedule</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Not a Substitute</h3>
                    <p className="text-muted-foreground text-sm">Complements, not replaces, healthy lifestyle</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about IV therapy treatments.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border-0 shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Boost Your Wellness?</h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule your IV therapy session today and experience the immediate benefits of optimized nutrition and
            hydration.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/booking">Book Your Session</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              <Link href="tel:+254782777779">Call +254 782 777 779</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
