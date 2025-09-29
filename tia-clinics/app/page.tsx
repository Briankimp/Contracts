import HeroSection from "@/components/hero-section"
import ServicesPreview from "@/components/services-preview"
import AboutPreview from "@/components/about-preview"
import ResultsPreview from "@/components/results-preview"
import TestimonialsPreview from "@/components/testimonials-preview"
import CTASection from "@/components/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesPreview />
      <AboutPreview />
      <ResultsPreview />
      <TestimonialsPreview />
      <CTASection />
    </div>
  )
}
