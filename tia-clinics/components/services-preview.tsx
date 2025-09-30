import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Sparkles, Heart, Droplets, Zap, Scissors, Stethoscope } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "Injectables",
    description: "Botox, dermal fillers, and profile harmonization for natural-looking results.",
    image: "https://unsplash.com/photos/_zmiZwgg7Iw/download?force=true",
    href: "/services/injectables",
  },
  {
    icon: Heart,
    title: "Skin Treatments",
    description: "HydraFacial, chemical peels, and advanced skin rejuvenation therapies.",
    image: "https://unsplash.com/photos/HXsYayB33a8/download?force=true",
    href: "/services/skin-treatments",
  },
  {
    icon: Scissors,
    title: "Hair Restoration",
    description: "PRP therapy and regenerative treatments for natural hair growth.",
    image: "https://unsplash.com/photos/q2ymQc-u5ig/download?force=true",
    href: "/services/hair-restoration",
  },
  {
    icon: Droplets,
    title: "IV Therapy",
    description: "Wellness drips, immunity boosters, and customized nutrition therapy.",
    image: "https://unsplash.com/photos/KK6Nx7VXzYs/download?force=true",
    href: "/services/iv-therapy",
  },
  {
    icon: Zap,
    title: "Body Contouring",
    description: "Non-surgical fat reduction and body sculpting treatments.",
    image: "https://unsplash.com/photos/TEtQXtYpqHk/download?force=true",
    href: "/services/body-contouring",
  },
  {
    icon: Stethoscope,
    title: "Minor Procedures",
    description: "Keloid removal, skin tags, and specialized dermatological procedures.",
    image: "https://unsplash.com/photos/a_eATBvqlm8/download?force=true",
    href: "/services/minor-procedures",
  },
]

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up-fast" style={{ animationDelay: '60ms' }}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance animate-fade-in-up-fast" style={{ animationDelay: '100ms' }}>
            Comprehensive Aesthetic Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed animate-fade-in-fast" style={{ animationDelay: '140ms' }}>
            From non-surgical facelifts to advanced wellness therapy, discover our full range of premium treatments
            designed to enhance your natural beauty and well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group card-hover border-0 shadow-lg overflow-hidden bg-white animate-fade-in-up-fast"
              style={{ animationDelay: `${100 + index * 50}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4 p-3 bg-primary/90 rounded-full">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <Button asChild variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 font-semibold">
                  <Link href={service.href} className="flex items-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4">
            <Link href="/services" className="flex items-center space-x-2">
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
