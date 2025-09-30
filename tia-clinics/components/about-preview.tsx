import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, Users, Shield, Heart } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Medical Excellence",
    description: "Licensed medical professionals with international training and certifications.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Highest safety standards with FDA-approved treatments and sterile procedures.",
  },
  {
    icon: Users,
    title: "Personalized Care",
    description: "Customized treatment plans tailored to your unique needs and aesthetic goals.",
  },
  {
    icon: Heart,
    title: "Holistic Approach",
    description: "Combining aesthetic medicine with wellness for comprehensive beauty and health.",
  },
]

export default function AboutPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-up-fast" style={{ animationDelay: '60ms' }}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance animate-fade-in-up-fast" style={{ animationDelay: '100ms' }}>
              Where Science Meets Beauty
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed animate-fade-in-fast" style={{ animationDelay: '140ms' }}>
              At TIA Clinics, we believe that true beauty comes from feeling
              confident in your own skin. Our state-of-the-art facility in
              Muthaiga combines cutting-edge medical technology with
              personalized care to deliver exceptional results.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={feature.title} className="flex items-start space-x-3 animate-fade-in-up-fast" style={{ animationDelay: `${180 + index * 60}ms` }}>
                  <div className="flex-shrink-0 p-2 bg-accent rounded-lg">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up-fast" style={{ animationDelay: '220ms' }}>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link href="/about">Learn Our Story</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/team">Meet Our Team</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '150ms' }}>
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url(/images/arshni.webp)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Stats */}
            {/* <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">2000+</div>
                <div className="text-sm text-muted-foreground">Satisfied Clients</div>
              </div>
            </div>*/}

            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-6 border border-border animate-fade-in-up" style={{ animationDelay: '350ms' }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-muted-foreground">
                  Success Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
