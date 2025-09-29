import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, Clock, Star, CheckCircle, Droplets, Sparkles, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Skin Treatments - HydraFacial & Advanced Skincare | TIA Clinics",
  description:
    "Transform your skin with HydraFacial, chemical peels, and advanced skincare treatments at TIA Clinics Nairobi. Expert dermatological care for glowing, healthy skin.",
}

const treatments = [
  {
    name: "HydraFacial",
    description: "Revolutionary 3-in-1 treatment that cleanses, extracts, and hydrates for instant glow",
    duration: "45-60 minutes",
    price: "From KES 15,000",
    benefits: ["Deep cleansing", "Instant hydration", "Improved texture", "Reduced pores"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Chemical Peels",
    description: "Professional-grade peels to address acne, pigmentation, and skin texture",
    duration: "30-45 minutes",
    price: "From KES 12,000",
    benefits: ["Acne reduction", "Even skin tone", "Smoother texture", "Reduced scarring"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Acne Treatment",
    description: "Comprehensive acne management with medical-grade treatments",
    duration: "60-90 minutes",
    price: "From KES 18,000",
    benefits: ["Active acne control", "Scar prevention", "Oil regulation", "Pore refinement"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Skin Brightening",
    description: "Advanced treatments to reduce pigmentation and achieve radiant skin",
    duration: "45-75 minutes",
    price: "From KES 20,000",
    benefits: ["Reduced dark spots", "Even complexion", "Brighter skin", "Sun damage repair"],
    image: "/placeholder.svg?height=300&width=400",
  },
]

const faqs = [
  {
    question: "What makes HydraFacial different from regular facials?",
    answer:
      "HydraFacial uses patented Vortex-Fusion technology to simultaneously cleanse, extract, and hydrate skin with medical-grade serums. It provides immediate results with no downtime.",
  },
  {
    question: "How often should I get skin treatments?",
    answer:
      "For optimal results, we recommend HydraFacial monthly, chemical peels every 4-6 weeks, and acne treatments as prescribed by our medical team based on your skin condition.",
  },
  {
    question: "Are chemical peels safe for all skin types?",
    answer:
      "Our medical professionals assess your skin type and condition to recommend the appropriate peel strength. We offer gentle to medium-depth peels suitable for various skin types.",
  },
  {
    question: "Can I combine different skin treatments?",
    answer:
      "Yes, many treatments can be combined for enhanced results. Our team will create a customized treatment plan based on your specific skin concerns and goals.",
  },
  {
    question: "What should I expect after a skin treatment?",
    answer:
      "Most clients experience immediate improvement in skin texture and glow. Some treatments may cause mild redness that subsides within hours. We provide detailed aftercare instructions.",
  },
]

export default function SkinTreatmentsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-accent to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <Badge className="mb-4 bg-primary text-primary-foreground">Advanced Skincare</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Transform Your Skin</h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                Discover radiant, healthy skin with our advanced facial treatments. From HydraFacial to chemical peels,
                our medical-grade skincare solutions address all your skin concerns with immediate, visible results.
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
                  <span className="text-foreground">800+ treatments</span>
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
                      "url(/placeholder.svg?height=500&width=600&query=hydrafacial treatment glowing skin professional spa)",
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
            <h2 className="text-4xl font-bold text-foreground mb-6">Advanced Skin Treatments</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our comprehensive range of medical-grade skincare treatments, each designed to address
              specific skin concerns and deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatments.map((treatment, index) => (
              <Card key={treatment.name} className="border-0 shadow-lg overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${treatment.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4 p-3 bg-primary/90 rounded-full">
                    <Droplets className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

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
                    <div className="grid grid-cols-2 gap-2">
                      {treatment.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-foreground">{benefit}</span>
                        </div>
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

      {/* HydraFacial Spotlight */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage:
                      "url(/placeholder.svg?height=500&width=600&query=hydrafacial machine treatment process professional)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
                <Badge className="bg-primary text-primary-foreground">Featured Treatment</Badge>
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-6">The HydraFacial Difference</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Experience the world's most advanced facial treatment that delivers instant results with no downtime.
                HydraFacial combines cleansing, exfoliation, extraction, hydration, and antioxidant protection in one
                treatment.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Cleanse & Peel</h3>
                    <p className="text-muted-foreground text-sm">Gentle exfoliation reveals fresh, healthy skin</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Extract & Hydrate</h3>
                    <p className="text-muted-foreground text-sm">
                      Painless extraction removes impurities while hydrating
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Fuse & Protect</h3>
                    <p className="text-muted-foreground text-sm">Antioxidants and peptides maximize your glow</p>
                  </div>
                </div>
              </div>

              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/book">Book HydraFacial</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Get answers to common questions about our skin treatments.</p>
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
          <h2 className="text-4xl font-bold mb-6">Ready for Radiant Skin?</h2>
          <p className="text-xl mb-8 opacity-90">
            Transform your skin with our advanced treatments. Book your consultation today and discover the perfect
            skincare solution for you.
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
              <Link href="https://wa.me/254782777779">WhatsApp Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
