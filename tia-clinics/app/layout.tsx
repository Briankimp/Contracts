import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "TIA Clinics - Premier Aesthetic Medicine in Nairobi",
  description:
    "Transform your beauty with TIA Clinics' world-class aesthetic treatments. Specializing in Botox, fillers, hair restoration, HydraFacial, and wellness therapy in Muthaiga, Nairobi.",
  keywords:
    "aesthetic medicine, botox, fillers, hair restoration, HydraFacial, IV therapy, Nairobi, Kenya, beauty clinic",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="font-sans">
        <Navigation />
        <main className="min-h-screen page-transition-enter">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
