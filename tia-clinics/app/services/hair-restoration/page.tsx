import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, Clock, Star, CheckCircle, AlertCircle, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Hair Restoration - PRP & Hair Treatments | TIA Clinics Nairobi",
  description:
    "Advanced hair restoration treatments at TIA Clinics. PRP therapy, hair transplants, and regenerative treatments for natural hair regrowth in Nairobi.",
}

const treatments = [
  {
    name: "PRP Hair Therapy",
    description: "Platelet-rich plasma injections to stimulate natural hair growth",
    duration: "60-90 minutes",
    price: "From KES 45,000",
    areas: ["Scalp rejuvenation", "Hair density", "Hair thickness", "Follicle stimulation"],
  },
  {
    name: "Hair Transplant Consultation",
    description: "Expert assessment and planning for surgical hair restoration",
    duration: "45 minutes",
    price: "Free Consultation",
    areas: ["Hairline design", "Donor assessment", "Graft planning", "Technique selection"],
  },
  {
    name: "Scalp Micropigmentation",
    description: "Non-surgical solution for the appearance of fuller hair",
    duration: "2-3 hours",
    price: "From KES 80,000",
    areas: ["Hairline definition", "Density illusion", "Scar camouflage", "Crown coverage"],
  },
  {
    name: "Hair Growth Mesotherapy",
    description: "Nutrient-rich injections to nourish hair follicles",
    duration: "30-45 minutes",
    price: "From KES 25,000",
    areas: ["Scalp health", "Follicle nutrition", "Hair strength", "Growth stimulation"],
  },
]

const faqs = [
  {
    question: "How effective is PRP for hair loss?",
    answer:
      "PRP therapy has shown excellent results for androgenetic alopecia and early-stage hair loss. Most clients see noticeable improvement in hair density and thickness after 3-4 sessions, with optimal results at 6 months.",
  },
  {
    question: "Am I a good candidate for hair restoration?",
    answer:
      "Ideal candidates have sufficient donor hair, realistic expectations, and are in good health. During consultation, we assess your hair loss pattern, scalp condition, and medical history to determine the best treatment approach.",
  },
  {
    question: "How many PRP sessions will I need?",
    answer:
      "Most clients require 3-4 initial sessions spaced 4-6 weeks apart, followed by maintenance sessions every 6-12 months. Your personalized treatment plan will be determined during consultation.",
  },
  {
    question: "Is hair restoration treatment painful?",
    answer:
      "We use local anesthesia and advanced techniques to minimize discomfort. Most clients report minimal pain during PRP treatments, with mild soreness for 1-2 days afterward.",
  },
  {
    question: "When will I see results?",
    answer:
      "Initial improvements may be visible after 2-3 months, with significant results appearing at 6-9 months. Hair growth is a gradual process, and patience is important for optimal outcomes.",
  },
]

export default function HairRestorationPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-accent to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <Badge className="mb-4 bg-primary text-primary-foreground">Advanced Technology</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Hair Restoration Treatments
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                Regain your confidence with our advanced hair restoration solutions. From PRP therapy to surgical
                transplants, we offer comprehensive treatments for natural, lasting hair regrowth.
              </p>

              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-foreground">30-90 minutes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-primary fill-current" />
                  <span className="text-foreground">4.8/5 rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-foreground">500+ treatments</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/booking">Book Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/results">View Results</Link>
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage:
                      "url(https://unsplash.com/photos/q2ymQc-u5ig/download?force=trueestoration treatment)",
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
            <h2 className="text-4xl font-bold text-foreground mb-6">Treatment Options</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive hair restoration solutions tailored to your specific needs and hair loss pattern.
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
                    <div className="text-sm text-muted-foreground mb-2">Treatment Benefits:</div>
                    <div className="flex flex-wrap gap-2">
                      {treatment.areas.map((area) => (
                        <Badge key={area} variant="secondary" className="text-xs">
                          {area}
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
            <h2 className="text-4xl font-bold text-foreground mb-6">Your Hair Restoration Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive approach to restoring your hair and confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Assessment</h3>
              <p className="text-muted-foreground text-sm">Detailed scalp analysis and hair loss pattern evaluation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">2</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Custom Plan</h3>
              <p className="text-muted-foreground text-sm">Personalized treatment strategy for optimal results</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Treatment</h3>
              <p className="text-muted-foreground text-sm">Advanced procedures with minimal discomfort</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">4</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Monitoring</h3>
              <p className="text-muted-foreground text-sm">Regular follow-ups to track progress and results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Considerations */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Benefits of Hair Restoration</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Natural Hair Regrowth</h3>
                    <p className="text-muted-foreground text-sm">
                      Stimulate your own hair follicles for authentic results
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Improved Hair Density</h3>
                    <p className="text-muted-foreground text-sm">Thicker, fuller hair with enhanced coverage</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Boosted Confidence</h3>
                    <p className="text-muted-foreground text-sm">Restore your self-esteem with a fuller head of hair</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Long-Lasting Results</h3>
                    <p className="text-muted-foreground text-sm">Permanent solutions with proper maintenance</p>
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
                    <h3 className="font-semibold text-foreground mb-1">Gradual Process</h3>
                    <p className="text-muted-foreground text-sm">Results take 6-12 months to fully develop</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Multiple Sessions</h3>
                    <p className="text-muted-foreground text-sm">Several treatments may be needed for best results</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Maintenance Required</h3>
                    <p className="text-muted-foreground text-sm">Ongoing care to preserve and enhance results</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Individual Variation</h3>
                    <p className="text-muted-foreground text-sm">
                      Results depend on hair loss extent and health factors
                    </p>
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
              Get answers to common questions about hair restoration treatments.
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
          <h2 className="text-4xl font-bold mb-6">Ready to Restore Your Hair?</h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule your complimentary consultation to discuss your hair restoration options and create a personalized
            treatment plan.
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
              <Link href="tel:+254782777779">Call +254 782 777 779</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
