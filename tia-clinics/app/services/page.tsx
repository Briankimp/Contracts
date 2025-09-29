import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, Heart, Droplets, Zap, Scissors, Stethoscope, Clock, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Services - TIA Clinics | Premium Aesthetic Treatments in Nairobi",
  description:
    "Discover our comprehensive range of aesthetic treatments including Botox, fillers, hair restoration, HydraFacial, IV therapy, and body contouring at TIA Clinics Nairobi.",
}

const services = [
  {
    icon: Sparkles,
    title: "Injectables",
    subtitle: "Botox & Dermal Fillers",
    description: "Non-surgical facial rejuvenation with premium Botox and dermal fillers for natural-looking results.",
    treatments: ["Botox Injections", "Dermal Fillers", "Profile Harmonization", "Lip Enhancement"],
    duration: "30-60 minutes",
    price: "From KES 25,000",
    rating: 4.9,
    image: "/placeholder.svg?height=400&width=600",
    href: "/services/injectables",
    popular: true,
  },
  {
    icon: Heart,
    title: "Skin Treatments",
    subtitle: "Advanced Facial Therapies",
    description: "Revolutionary skin treatments including HydraFacial, chemical peels, and acne management.",
    treatments: ["HydraFacial", "Chemical Peels", "Acne Treatment", "Skin Brightening"],
    duration: "45-90 minutes",
    price: "From KES 15,000",
    rating: 4.8,
    image: "/placeholder.svg?height=400&width=600",
    href: "/services/skin-treatments",
  },
  {
    icon: Scissors,
    title: "Hair Restoration",
    subtitle: "PRP & Regenerative Therapy",
    description: "Advanced hair restoration treatments using PRP therapy and regenerative medicine.",
    treatments: ["PRP Hair Therapy", "Hair Transplant", "Scalp Treatment", "Hair Loss Prevention"],
    duration: "60-120 minutes",
    price: "From KES 35,000",
    rating: 4.9,
    image: "/placeholder.svg?height=400&width=600",
    href: "/services/hair-restoration",
  },
  {
    icon: Droplets,
    title: "IV Therapy",
    subtitle: "Wellness & Nutrition Drips",
    description: "Customized IV drips for immunity, energy, and overall wellness enhancement.",
    treatments: ["Immunity Boost", "Energy Drips", "Antioxidant Therapy", "Vitamin Infusions"],
    duration: "30-45 minutes",
    price: "From KES 12,000",
    rating: 4.7,
    image: "/placeholder.svg?height=400&width=600",
    href: "/services/iv-therapy",
  },
  {
    icon: Zap,
    title: "Body Contouring",
    subtitle: "Non-Surgical Body Sculpting",
    description: "Advanced body contouring and fat reduction treatments for natural body sculpting.",
    treatments: ["Fat Reduction", "Body Sculpting", "Cellulite Treatment", "Skin Tightening"],
    duration: "60-90 minutes",
    price: "From KES 45,000",
    rating: 4.8,
    image: "/placeholder.svg?height=400&width=600",
    href: "/services/body-contouring",
  },
  {
    icon: Stethoscope,
    title: "Minor Procedures",
    subtitle: "Specialized Treatments",
    description: "Professional minor procedures including keloid removal, skin tags, and specialized care.",
    treatments: ["Keloid Removal", "Skin Tag Removal", "Mole Removal", "Scar Treatment"],
    duration: "15-45 minutes",
    price: "From KES 8,000",
    rating: 4.9,
    image: "/placeholder.svg?height=400&width=600",
    href: "/services/minor-procedures",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-accent to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Comprehensive Aesthetic Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty leading-relaxed">
              From non-surgical facelifts to advanced wellness therapy, discover our full range of premium treatments
              designed to enhance your natural beauty and well-being.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/book">Book Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group card-hover border-0 shadow-lg overflow-hidden bg-white relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {service.popular && (
                  <Badge className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground">Most Popular</Badge>
                )}

                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4 p-3 bg-primary/90 rounded-full">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-medium">{service.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{service.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-foreground mb-1">{service.title}</h3>
                    <p className="text-sm text-primary font-medium mb-2">{service.subtitle}</p>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-foreground mb-2">Treatments Include:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.treatments.slice(0, 3).map((treatment) => (
                        <Badge key={treatment} variant="secondary" className="text-xs">
                          {treatment}
                        </Badge>
                      ))}
                      {service.treatments.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{service.treatments.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-lg font-semibold text-primary">{service.price}</div>
                  </div>

                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href={service.href} className="flex items-center justify-center space-x-2">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose TIA Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Why Choose TIA Clinics?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the difference of premium aesthetic medicine with our expert team and state-of-the-art
              facility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Medical Excellence</h3>
              <p className="text-muted-foreground text-sm">Licensed professionals with international training</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Proven Results</h3>
              <p className="text-muted-foreground text-sm">2000+ satisfied clients with outstanding outcomes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Personalized Care</h3>
              <p className="text-muted-foreground text-sm">Customized treatment plans for your unique needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Premium Products</h3>
              <p className="text-muted-foreground text-sm">FDA-approved treatments and luxury amenities</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Transformation?</h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule your complimentary consultation and discover the perfect treatment plan for your aesthetic goals.
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
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
