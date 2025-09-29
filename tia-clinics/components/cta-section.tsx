import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, MessageCircle } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Ready to Transform Your Beauty?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-pretty leading-relaxed opacity-90">
            Take the first step towards your aesthetic goals. Book a personalized consultation with our expert medical
            team and discover the perfect treatment plan for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-full"
            >
              <Link href="/book" className="flex items-center space-x-2">
                <span>Book Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>

            <div className="flex items-center space-x-4">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary px-6 py-4 rounded-full bg-transparent"
              >
                <Link href="tel:+254782777779" className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary px-6 py-4 rounded-full bg-transparent"
              >
                <Link href="https://wa.me/254782777779" className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Free Consultation</div>
              <div className="opacity-80">No obligation assessment</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Expert Care</div>
              <div className="opacity-80">Licensed medical professionals</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Proven Results</div>
              <div className="opacity-80">2000+ satisfied clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
