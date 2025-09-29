import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, Clock, Star, CheckCircle, AlertCircle, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Injectables - Botox & Dermal Fillers | TIA Clinics Nairobi",
  description:
    "Premium Botox and dermal filler treatments at TIA Clinics. Expert injections for natural-looking facial rejuvenation and anti-aging results in Nairobi.",
}

const treatments = [
  {
    name: "Botox Injections",
    description: "Smooth wrinkles and fine lines with premium Botox treatments",
    duration: "15-30 minutes",
    price: "From KES 25,000",
    areas: ["Forehead lines", "Crow's feet", "Frown lines", "Bunny lines"],
  },
  {
    name: "Dermal Fillers",
    description: "Restore volume and enhance facial contours with hyaluronic acid fillers",
    duration: "30-45 minutes",
    price: "From KES 35,000",
    areas: ["Cheeks", "Lips", "Nasolabial folds", "Marionette lines"],
  },
  {
    name: "Profile Harmonization",
    description: "Comprehensive facial balancing for optimal aesthetic proportions",
    duration: "45-60 minutes",
    price: "From KES 65,000",
    areas: ["Jawline", "Chin", "Cheeks", "Temples"],
  },
  {
    name: "Lip Enhancement",
    description: "Natural lip augmentation for fuller, more defined lips",
    duration: "20-30 minutes",
    price: "From KES 30,000",
    areas: ["Lip volume", "Lip shape", "Lip lines", "Cupid's bow"],
  },
]

const faqs = [
  {
    question: "How long do Botox results last?",
    answer:
      "Botox results typically last 3-4 months. With regular treatments, the effects may last longer as muscles become trained to relax.",
  },
  {
    question: "Are dermal fillers safe?",
    answer:
      "Yes, when administered by qualified medical professionals using FDA-approved products. We use only premium hyaluronic acid fillers with excellent safety profiles.",
  },
  {
    question: "Is there any downtime after treatment?",
    answer:
      "Most clients can return to normal activities immediately. Some may experience mild swelling or bruising that resolves within a few days.",
  },
  {
    question: "How soon will I see results?",
    answer:
      "Dermal filler results are immediate, while Botox takes 3-7 days to show full effects. Final results are visible within 2 weeks.",
  },
  {
    question: "What should I avoid after treatment?",
    answer:
      "Avoid strenuous exercise, alcohol, and lying down for 4 hours post-Botox. Avoid touching the treated area and extreme temperatures for 24 hours.",
  },
]

export default function InjectablesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-accent to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <Badge className="mb-4 bg-primary text-primary-foreground">Most Popular Treatment</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Botox & Dermal Fillers
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                Achieve natural-looking facial rejuvenation with our expert injectable treatments. Our skilled medical
                team uses premium products to smooth wrinkles, restore volume, and enhance your natural beauty.
              </p>

              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-foreground">15-60 minutes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-primary fill-current" />
                  <span className="text-foreground">4.9/5 rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-foreground">1000+ treatments</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/book">Book Consultation</Link>
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
                      "url(/placeholder.svg?height=500&width=600&query=botox injection treatment professional medical setting before after)",
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
              Choose from our comprehensive range of injectable treatments, each tailored to address specific concerns
              and aesthetic goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatments.map((treatment, index) => (
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
                    <div className="text-sm text-muted-foreground mb-2">Treatment Areas:</div>
                    <div className="flex flex-wrap gap-2">
                      {treatment.areas.map((area) => (
                        <Badge key={area} variant="secondary" className="text-xs">
                          {area}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/book" className="flex items-center justify-center space-x-2">
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
            <h2 className="text-4xl font-bold text-foreground mb-6">Your Treatment Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From consultation to aftercare, we ensure a comfortable and professional experience every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Consultation</h3>
              <p className="text-muted-foreground text-sm">
                Comprehensive assessment of your concerns and aesthetic goals
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">2</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Treatment Plan</h3>
              <p className="text-muted-foreground text-sm">Customized plan with detailed explanation of procedures</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Treatment</h3>
              <p className="text-muted-foreground text-sm">Expert injection technique with premium products</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">4</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Follow-up</h3>
              <p className="text-muted-foreground text-sm">Comprehensive aftercare and progress monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Considerations */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Benefits of Injectable Treatments</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Natural-Looking Results</h3>
                    <p className="text-muted-foreground text-sm">
                      Subtle enhancements that preserve your unique features
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Minimal Downtime</h3>
                    <p className="text-muted-foreground text-sm">
                      Return to daily activities immediately after treatment
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Long-Lasting Effects</h3>
                    <p className="text-muted-foreground text-sm">
                      Results that last 3-18 months depending on treatment
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Preventative Benefits</h3>
                    <p className="text-muted-foreground text-sm">Prevent formation of deeper wrinkles over time</p>
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
                    <h3 className="font-semibold text-foreground mb-1">Temporary Side Effects</h3>
                    <p className="text-muted-foreground text-sm">Mild swelling, bruising, or redness may occur</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Maintenance Required</h3>
                    <p className="text-muted-foreground text-sm">Regular touch-ups needed to maintain results</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Individual Results Vary</h3>
                    <p className="text-muted-foreground text-sm">
                      Results depend on individual factors and skin condition
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Medical History Important</h3>
                    <p className="text-muted-foreground text-sm">Certain conditions may affect treatment suitability</p>
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
              Get answers to common questions about our injectable treatments.
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
          <h2 className="text-4xl font-bold mb-6">Ready for Natural-Looking Results?</h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule your complimentary consultation to discuss your aesthetic goals and create a personalized treatment
            plan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/book">Book Free Consultation</Link>
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
