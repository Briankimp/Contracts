import ModernHero from "@/components/modern-hero"
import DynamicFeatures from "@/components/dynamic-features"
import InteractiveServices from "@/components/interactive-services"
import AboutPreview from "@/components/about-preview"
import ModernTestimonials from "@/components/modern-testimonials"
import ModernCTA from "@/components/modern-cta"

export default function HomePage() {
  return (
    <div className="min-h-screen will-change-transform">
      <ModernHero />
      <DynamicFeatures />
      <InteractiveServices />
      <AboutPreview />
      <ModernTestimonials />
      <ModernCTA />
    </div>
  )
}
