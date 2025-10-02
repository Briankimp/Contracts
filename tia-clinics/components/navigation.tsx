"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const navigationItems = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Injectables", href: "/services/injectables" },
      { name: "Skin Treatments", href: "/services/skin-treatments" },
      { name: "Hair Restoration", href: "/services/hair-restoration" },
      { name: "IV Therapy", href: "/services/iv-therapy" },
      { name: "Body Contouring", href: "/services/body-contouring" },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

interface NavigationProps {
  forceSolid?: boolean;
}

// Pages with white/light backgrounds that need solid navbar
const lightBackgroundPages = [
  '/about',
  '/team', 
  '/contact',
  '/blog',
  '/results',
  '/testimonials',
  '/services',
  '/booking',
  '/faq',
  '/resources'
];

export default function Navigation({ forceSolid = false }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  
  // Auto-detect if current page needs solid navbar
  const needsSolidNav = forceSolid || lightBackgroundPages.some(page => pathname?.startsWith(page));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  // Helper functions for better hover management
  const handleMouseEnter = (itemName: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveSubmenu(itemName);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveSubmenu(null);
    }, 150); // 150ms delay before hiding
    setHoverTimeout(timeout);
  };

  const handleSubmenuMouseEnter = (itemName: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveSubmenu(itemName);
  };

  const handleSubmenuMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveSubmenu(null);
    }, 150); // 150ms delay before hiding
    setHoverTimeout(timeout);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
needsSolidNav || scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/tia-logo.jpg"
              alt="TIA Clinics"
              width={65}
              height={65}
              className="rounded-full"
            />
            {/* <div className="hidden sm:block">
              <div className="text-2xl font-bold text-foreground">TIA</div>
              <div className="text-xs text-muted-foreground tracking-wider">CLINICS</div>
            </div> */}
          </Link>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`${
                    needsSolidNav || scrolled
                      ? "text-foreground hover:text-primary"
                      : "text-white hover:text-white/80"
                  } ${
                    pathname === item.href ? "text-primary font-semibold" : ""
                  } transition-all duration-300 font-medium flex items-center space-x-1 hover-underline relative px-2 py-1 rounded-lg hover:bg-primary/5`}
                  onMouseEnter={() =>
                    item.submenu && handleMouseEnter(item.name)
                  }
                  onMouseLeave={item.submenu ? handleMouseLeave : undefined}
                >
                  <span>{item.name}</span>
                  {item.submenu && (
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeSubmenu === item.name ? "rotate-180" : ""
                      }`} 
                    />
                  )}
                </Link>

                {/* Enhanced Submenu */}
                {item.submenu && activeSubmenu === item.name && (
                  <div
                    className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-primary/10 py-3 animate-fade-in-up z-50"
                    onMouseEnter={() => handleSubmenuMouseEnter(item.name)}
                    onMouseLeave={handleSubmenuMouseLeave}
                  >
                    {item.submenu.map((subItem, index) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className={`block px-6 py-3 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-all duration-200 hover:translate-x-1 ${
                          pathname === subItem.href ? "text-primary bg-primary/5 font-medium" : ""
                        } stagger-${index + 1}`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Enhanced CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground btn-magnetic rounded-full px-6 py-2 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/booking">Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              needsSolidNav || scrolled
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-white/80"
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-border shadow-lg animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border">
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Link href="/booking" onClick={() => setIsOpen(false)}>
                    Book Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
