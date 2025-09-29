import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Shield, Heart, MapPin, Clock, Star, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "About TIA Clinics - Premier Aesthetic Medicine in Nairobi",
  description:
    "Learn about TIA Clinics' mission to provide world-class aesthetic treatments in Nairobi. Discover our story, values, and commitment to excellence in medical aesthetics.",
}

const values = [
  {
    icon: Award,
    title: "Medical Excellence",
    description: "Licensed medical professionals with international training and certifications in aesthetic medicine.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Highest safety standards with FDA-approved treatments, sterile procedures, and comprehensive protocols.",
  },
  {
    icon: Users,
    title: "Personalized Care",
    description: "Customized treatment plans tailored to your unique needs, concerns, and aesthetic goals.",
  },
  {
    icon: Heart,
    title: "Holistic Approach",
    description: "Combining aesthetic medicine with wellness for comprehensive beauty and health enhancement.",
  },
]

const achievements = [
  {
    number: "2000+",
    label: "Satisfied Clients",
    description: "Happy clients who trust us with their aesthetic journey",
  },
  {
    number: "15+",
    label: "Expert Treatments",
    description: "Comprehensive range of advanced aesthetic procedures",
  },
  {
    number: "5+",
    label: "Years Excellence",
    description: "Proven track record of outstanding results and care",
  },
  {
    number: "98%",
    label: "Success Rate",
    description: "Exceptional outcomes and client satisfaction",
  },
]

const certifications = [
  "International Board of Aesthetic Medicine",
  "Kenya Medical Practitioners Board",
  "American Academy of Aesthetic Medicine",
  "International Association of Physicians in Aesthetic Medicine",
  "Allergan Medical Institute Certification",
  "Merz Aesthetics Training Certification",
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-accent to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <Badge className="mb-4 bg-primary text-primary-foreground">Our Story</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Where Science Meets Beauty
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                At TIA Clinics, we believe that true beauty comes from feeling confident in your own skin. Our
                state-of-the-art facility in Muthaiga combines cutting-edge medical technology with personalized care to
                deliver exceptional results that enhance your natural beauty.
              </p>

              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Muthaiga, Nairobi</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Est. 2019</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-primary fill-current" />
                  <span className="text-foreground">4.9/5 Rating</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/team">Meet Our Team</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/book">Book Consultation</Link>
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage:
                      "url(/placeholder.svg?height=500&width=600&query=modern luxury medical spa interior TIA Clinics Muthaiga)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Floating Achievement Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">2000+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-6 border border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">98%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage:
                      "url(/placeholder.svg?height=500&width=600&query=Dr Arshni Malde medical director professional portrait)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>

            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Journey to Excellence</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2019 by Dr. Arshni Malde, TIA Clinics was born from a vision to bring world-class aesthetic
                  medicine to Kenya. With extensive training in international aesthetic techniques and a passion for
                  enhancing natural beauty, Dr. Malde established TIA Clinics as Nairobi's premier destination for
                  non-surgical aesthetic treatments.
                </p>
                <p>
                  Located in the prestigious Muthaiga area, our state-of-the-art facility combines luxury with medical
                  precision. We've carefully curated every aspect of the TIA experience, from our advanced treatment
                  technologies to our serene, spa-like environment that puts clients at ease.
                </p>
                <p>
                  What sets us apart is our commitment to continuous education and innovation. Our team regularly
                  attends international conferences and training programs to stay at the forefront of aesthetic
                  medicine, ensuring our clients receive the most advanced and effective treatments available.
                </p>
              </div>

              <div className="mt-8">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/team">Meet Dr. Arshni Malde</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do at TIA Clinics, ensuring exceptional care and outstanding results
              for every client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className="border-0 shadow-lg text-center card-hover">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Achievements</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and the trust our clients place in us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={achievement.label} className="text-center animate-fade-in-up">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">{achievement.number}</div>
                <div className="text-xl font-semibold text-foreground mb-2">{achievement.label}</div>
                <div className="text-muted-foreground">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Certifications & Accreditations</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to excellence is validated by prestigious certifications and ongoing professional
              development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((certification, index) => (
              <div key={certification} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{certification}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">State-of-the-Art Facility</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Our Muthaiga clinic is designed to provide a luxurious yet clinical environment where you can feel
                comfortable and confident throughout your aesthetic journey.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Advanced Equipment</h3>
                    <p className="text-muted-foreground text-sm">
                      Latest technology including HydraFacial machines, premium injection systems, and medical-grade
                      skincare devices
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Sterile Environment</h3>
                    <p className="text-muted-foreground text-sm">
                      Hospital-grade sterilization protocols and clean room standards for all procedures
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Luxury Amenities</h3>
                    <p className="text-muted-foreground text-sm">
                      Comfortable treatment rooms, relaxation areas, and premium client amenities
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Convenient Location</h3>
                    <p className="text-muted-foreground text-sm">
                      Easily accessible location in Muthaiga with ample parking and security
                    </p>
                  </div>
                </div>
              </div>

              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/contact">Visit Our Clinic</Link>
              </Button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-48 rounded-lg overflow-hidden shadow-lg">
                    <div
                      className="w-full h-full bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage:
                          "url(/placeholder.svg?height=200&width=300&query=luxury medical spa reception area)",
                      }}
                    />
                  </div>
                  <div className="h-32 rounded-lg overflow-hidden shadow-lg">
                    <div
                      className="w-full h-full bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage:
                          "url(/placeholder.svg?height=150&width=300&query=medical treatment room equipment)",
                      }}
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="h-32 rounded-lg overflow-hidden shadow-lg">
                    <div
                      className="w-full h-full bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage:
                          "url(/placeholder.svg?height=150&width=300&query=relaxation area comfortable seating)",
                      }}
                    />
                  </div>
                  <div className="h-48 rounded-lg overflow-hidden shadow-lg">
                    <div
                      className="w-full h-full bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage:
                          "url(/placeholder.svg?height=200&width=300&query=consultation room professional setting)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Experience the TIA Difference</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied clients who have trusted us with their aesthetic journey. Schedule your
            complimentary consultation today.
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
              <Link href="/team">Meet Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
