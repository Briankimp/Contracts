import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image src="/images/tia-logo.jpg" alt="TIA Clinics" width={50} height={50} className="rounded-full" />
              <div>
                <div className="text-xl font-bold">TIA CLINICS</div>
                <div className="text-xs text-muted-foreground tracking-wider">HAIR • SKIN • NUTRITION</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premier aesthetic medicine clinic in Nairobi, offering world-class treatments for hair restoration, skin
              rejuvenation, and wellness therapy.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/injectables"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Botox & Fillers
                </Link>
              </li>
              <li>
                <Link
                  href="/services/skin-treatments"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  HydraFacial
                </Link>
              </li>
              <li>
                <Link
                  href="/services/hair-restoration"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Hair Restoration
                </Link>
              </li>
              <li>
                <Link
                  href="/services/iv-therapy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  IV Therapy
                </Link>
              </li>
              <li>
                <Link
                  href="/services/body-contouring"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Body Contouring
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/results" className="text-muted-foreground hover:text-primary transition-colors">
                  Results Gallery
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <span className="text-muted-foreground">
                  Muthaiga Grove, Muthaiga Road
                  <br />
                  Nairobi, Kenya
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+254 782 777 779</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">info@tiaclinics.co.ke</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium">Newsletter</h4>
              <div className="flex space-x-2">
                <Input placeholder="Your email" className="bg-background text-foreground border-border" />
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">© 2025 TIA Clinics. All rights reserved.</p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/medical-disclaimer" className="text-muted-foreground hover:text-primary transition-colors">
              Medical Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
