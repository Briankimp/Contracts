import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, GraduationCap, Users, Star, MapPin, Calendar, Phone, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Team - Expert Medical Professionals | TIA Clinics",
  description:
    "Meet the expert medical team at TIA Clinics. Led by Dr. Arshni Malde, our certified professionals provide world-class aesthetic treatments in Nairobi.",
}

const teamMembers = [
  {
    name: "Dr. Arshni Malde",
    title: "Medical Director & Founder",
    specialties: ["Aesthetic Medicine", "Injectable Treatments", "Non-Surgical Procedures"],
    qualifications: [
      "MBChB - University of Nairobi",
      "Diploma in Aesthetic Medicine",
      "Allergan Medical Institute Certification",
      "International Board Certified",
    ],
    experience: "8+ years",
    languages: ["English", "Swahili", "Hindi"],
    image: "/placeholder.svg?height=400&width=300",
    bio: "Dr. Arshni Malde is a highly skilled aesthetic medicine physician with extensive international training. She founded TIA Clinics with a vision to bring world-class aesthetic treatments to Kenya, combining medical expertise with artistic vision to achieve natural-looking results.",
    achievements: [
      "Trained at leading aesthetic medicine centers in Asia",
      "Certified by the World Medical Association",
      "Regular speaker at international aesthetic medicine conferences",
      "Published researcher in aesthetic medicine journals",
    ],
  },
  {
    name: "Cecilia Karanja",
    title: "General Manager & Senior Aesthetician",
    specialties: ["HydraFacial", "Skin Analysis", "Client Care", "Treatment Coordination"],
    qualifications: [
      "Diploma in Beauty Therapy",
      "HydraFacial Certification",
      "Advanced Skincare Specialist",
      "Client Relations Management",
    ],
    experience: "6+ years",
    languages: ["English", "Swahili"],
    image: "/placeholder.svg?height=400&width=300",
    bio: "Cecilia brings extensive experience in aesthetic treatments and client care. Her expertise in skin analysis and treatment planning ensures every client receives personalized care tailored to their unique needs and goals.",
    achievements: [
      "Certified HydraFacial specialist with advanced training",
      "Expert in skin analysis and treatment planning",
      "Exceptional client satisfaction ratings",
      "Specialized training in post-treatment care",
    ],
  },
  {
    name: "Dr. Sarah Wanjiku",
    title: "Aesthetic Physician",
    specialties: ["Dermal Fillers", "Botox", "Skin Rejuvenation", "Hair Restoration"],
    qualifications: [
      "MBChB - Kenyatta University",
      "Certificate in Aesthetic Medicine",
      "Merz Aesthetics Training",
      "PRP Therapy Certification",
    ],
    experience: "5+ years",
    languages: ["English", "Swahili"],
    image: "/placeholder.svg?height=400&width=300",
    bio: "Dr. Sarah specializes in injectable treatments and non-surgical facial rejuvenation. Her gentle approach and attention to detail have made her a favorite among clients seeking natural-looking enhancements.",
    achievements: [
      "Specialized training in advanced injection techniques",
      "Expert in facial anatomy and proportions",
      "High client satisfaction in injectable treatments",
      "Continuous education in latest aesthetic techniques",
    ],
  },
  {
    name: "Nurse Grace Muthoni",
    title: "Senior Aesthetic Nurse",
    specialties: ["IV Therapy", "Wellness Treatments", "Post-Procedure Care", "Client Education"],
    qualifications: [
      "BSc Nursing - University of Nairobi",
      "IV Therapy Certification",
      "Aesthetic Nursing Diploma",
      "First Aid & CPR Certified",
    ],
    experience: "7+ years",
    languages: ["English", "Swahili"],
    image: "/placeholder.svg?height=400&width=300",
    bio: "Nurse Grace specializes in IV therapy and wellness treatments. Her nursing background ensures the highest standards of safety and care throughout all procedures, making clients feel comfortable and secure.",
    achievements: [
      "Expert in IV therapy and wellness protocols",
      "Specialized training in aesthetic nursing",
      "Excellent patient care and safety record",
      "Advanced certification in emergency procedures",
    ],
  },
]

const clinicStats = [
  { number: "4", label: "Expert Professionals", icon: Users },
  { number: "25+", label: "Years Combined Experience", icon: Calendar },
  { number: "15+", label: "Certifications", icon: Award },
  { number: "4.9", label: "Average Rating", icon: Star },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-accent to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <Badge className="mb-4 bg-primary text-primary-foreground">Expert Team</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Meet Our Medical Experts
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty leading-relaxed">
              Our team of certified medical professionals combines extensive training, artistic vision, and
              compassionate care to deliver exceptional aesthetic results. Each member brings unique expertise and a
              commitment to your safety and satisfaction.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {clinicStats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                    <div
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${member.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Floating Stats */}
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-border">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary mb-1">{member.experience}</div>
                      <div className="text-xs text-muted-foreground">Experience</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`animate-fade-in-up ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="mb-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{member.name}</h2>
                    <p className="text-xl text-primary font-semibold mb-4">{member.title}</p>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">{member.bio}</p>

                  {/* Specialties */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-foreground mb-3">Specialties</h3>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty) => (
                        <Badge key={specialty} variant="secondary" className="text-sm">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Qualifications */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-foreground mb-3">Qualifications</h3>
                    <div className="space-y-2">
                      {member.qualifications.map((qualification) => (
                        <div key={qualification} className="flex items-center space-x-2">
                          <GraduationCap className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{qualification}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-foreground mb-3">Languages</h3>
                    <div className="flex space-x-2">
                      {member.languages.map((language) => (
                        <Badge key={language} variant="outline" className="text-xs">
                          {language}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-8">
                    <h3 className="font-semibold text-foreground mb-3">Key Achievements</h3>
                    <div className="space-y-2">
                      {member.achievements.slice(0, 3).map((achievement) => (
                        <div key={achievement} className="flex items-start space-x-2">
                          <Award className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/book">Book with {member.name.split(" ")[1]}</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Team */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Why Choose Our Team?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to excellence, continuous education, and patient safety sets us apart in the field of
              aesthetic medicine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Continuous Education</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our team regularly attends international conferences and training programs to stay current with the
                  latest techniques and technologies.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Certified Expertise</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All our practitioners hold relevant medical qualifications and specialized certifications in aesthetic
                  medicine from recognized institutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Patient-Centered Care</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We prioritize your comfort, safety, and satisfaction, taking time to understand your goals and provide
                  personalized treatment plans.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Team */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Meet Our Team?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Schedule your consultation today and discover how our expert team can help you achieve your aesthetic goals
            safely and effectively.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/book">Book Consultation</Link>
            </Button>
            <div className="flex items-center space-x-4">
              <Button asChild variant="outline" size="lg">
                <Link href="tel:+254782777779" className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Call Us</span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="mailto:info@tiaclinics.co.ke" className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>Email Us</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <MapPin className="w-5 h-5" />
            <span>Muthaiga Grove, Muthaiga Road, Nairobi</span>
          </div>
        </div>
      </section>
    </div>
  )
}
