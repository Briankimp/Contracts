"use client"

import { useState } from "react"
import { ChevronDown, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const faqCategories = [
  {
    category: "General Information",
    questions: [
      {
        q: "What services does TIA Clinics offer?",
        a: "TIA Clinics specializes in aesthetic medicine including Botox, dermal fillers, thread lifts, HydraFacial, chemical peels, microneedling, hair restoration with PRP, IV therapy, body contouring, and laser treatments. We also offer comprehensive consultations and personalized treatment plans.",
      },
      {
        q: "Are your treatments safe?",
        a: "Yes, all our treatments are performed by licensed medical professionals using FDA-approved products and equipment. We follow strict safety protocols and conduct thorough consultations to ensure each treatment is appropriate for you.",
      },
      {
        q: "How do I book an appointment?",
        a: "You can book an appointment through our online booking system, by calling us at +254 722 123 456, or by emailing appointments@tiaclinics.co.ke. We recommend booking in advance to secure your preferred time slot.",
      },
      {
        q: "What should I bring to my first appointment?",
        a: "Please bring a valid ID, a list of current medications and supplements, information about any allergies, and your medical history. If you have previous treatment records, those are helpful too.",
      },
    ],
  },
  {
    category: "Treatments & Procedures",
    questions: [
      {
        q: "How long do Botox results last?",
        a: "Botox results typically last 3-4 months. The duration can vary based on individual factors such as metabolism, muscle strength, and lifestyle. Regular maintenance treatments help maintain optimal results.",
      },
      {
        q: "Is there downtime after dermal fillers?",
        a: "Most patients experience minimal downtime after dermal fillers. Some swelling, redness, or bruising may occur but typically resolves within 24-48 hours. You can usually return to normal activities immediately.",
      },
      {
        q: "How many sessions are needed for hair restoration?",
        a: "Hair restoration with PRP typically requires 3-4 initial sessions spaced 4-6 weeks apart, followed by maintenance treatments every 6-12 months. Results vary based on individual hair loss patterns and response to treatment.",
      },
      {
        q: "What is the difference between HydraFacial and regular facials?",
        a: "HydraFacial uses patented technology to cleanse, extract, and hydrate skin with medical-grade serums. It provides deeper exfoliation and more dramatic results than traditional facials, with no downtime.",
      },
      {
        q: "Can I combine multiple treatments?",
        a: "Yes, many treatments can be combined for enhanced results. During your consultation, we'll create a personalized treatment plan that may include multiple procedures to address your specific concerns.",
      },
    ],
  },
  {
    category: "Pricing & Payment",
    questions: [
      {
        q: "How much do treatments cost?",
        a: "Treatment costs vary depending on the procedure, area treated, and amount of product needed. We provide detailed pricing during consultations. Please visit our Services page for starting prices.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept cash, M-Pesa, credit/debit cards (Visa, Mastercard), and bank transfers. Payment is required at the time of service unless other arrangements have been made.",
      },
      {
        q: "Do you offer payment plans?",
        a: "Yes, we offer flexible payment plans for treatments over a certain amount. Contact us to discuss financing options that work for your budget.",
      },
      {
        q: "Do you accept insurance?",
        a: "Most aesthetic treatments are considered elective and are not covered by insurance. However, some medical treatments may be covered. Please check with your insurance provider.",
      },
    ],
  },
  {
    category: "Preparation & Aftercare",
    questions: [
      {
        q: "How should I prepare for injectable treatments?",
        a: "Avoid blood-thinning medications (aspirin, ibuprofen) for 24-48 hours before treatment. Avoid alcohol for 24 hours prior. Arrive with a clean face, free of makeup. Inform us of any medications or supplements you're taking.",
      },
      {
        q: "What should I avoid after treatment?",
        a: "After most treatments, avoid strenuous exercise, excessive heat (saunas, hot tubs), alcohol, and direct sun exposure for 24-48 hours. Specific aftercare instructions will be provided based on your treatment.",
      },
      {
        q: "When will I see results?",
        a: "Results vary by treatment. Botox takes 3-7 days to show full effects. Fillers are immediate but may have initial swelling. Skin treatments like HydraFacial show immediate glow with continued improvement. Hair restoration takes 3-6 months.",
      },
      {
        q: "Can I wear makeup after treatment?",
        a: "For most facial treatments, we recommend waiting 24 hours before applying makeup. For injectable treatments, you can typically apply makeup after 4-6 hours. We'll provide specific guidance based on your procedure.",
      },
    ],
  },
  {
    category: "Safety & Side Effects",
    questions: [
      {
        q: "What are the common side effects?",
        a: "Common side effects include temporary redness, swelling, bruising, or tenderness at the treatment site. These typically resolve within a few days. Serious side effects are rare when treatments are performed by qualified professionals.",
      },
      {
        q: "Who should avoid aesthetic treatments?",
        a: "Pregnant or nursing women, individuals with certain medical conditions, active skin infections, or allergies to treatment ingredients should avoid or postpone treatments. We conduct thorough consultations to ensure safety.",
      },
      {
        q: "What if I'm not happy with my results?",
        a: "Your satisfaction is our priority. If you have concerns about your results, contact us immediately. Some treatments can be adjusted or reversed. We offer complimentary follow-up appointments to ensure optimal outcomes.",
      },
      {
        q: "Are there any long-term risks?",
        a: "When performed by qualified professionals using approved products, aesthetic treatments have minimal long-term risks. We use only FDA-approved products and follow best practices to ensure your safety.",
      },
    ],
  },
  {
    category: "Appointments & Policies",
    questions: [
      {
        q: "What is your cancellation policy?",
        a: "We require at least 24 hours notice for cancellations or rescheduling. Late cancellations or no-shows may incur a fee. We understand emergencies happen and will work with you on a case-by-case basis.",
      },
      {
        q: "How long are appointments?",
        a: "Appointment length varies by treatment. Consultations typically take 30-45 minutes. Injectable treatments take 15-30 minutes. Facial treatments range from 45-90 minutes. We'll inform you of the expected duration when booking.",
      },
      {
        q: "Do you offer virtual consultations?",
        a: "Yes, we offer virtual consultations for initial assessments and treatment planning. However, in-person consultations are required before certain procedures to ensure proper evaluation.",
      },
      {
        q: "What are your operating hours?",
        a: "We're open Monday-Friday from 9:00 AM to 6:00 PM and Saturday from 9:00 AM to 4:00 PM. We're closed on Sundays and public holidays. Extended hours may be available by appointment.",
      },
    ],
  },
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const filteredCategories = faqCategories
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.a.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0)

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our treatments, policies, and services
          </p>
        </div>

        {/* Search */}
        <div className="mb-12 animate-fade-in-up animation-delay-100">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-14 pl-12 text-base"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground mb-4">No FAQs found matching your search.</p>
            <Button onClick={() => setSearchQuery("")}>Clear Search</Button>
          </div>
        ) : (
          <div className="space-y-8">
            {filteredCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="animate-fade-in-up"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                <h2 className="text-2xl font-serif mb-6 text-primary">{category.category}</h2>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const itemId = `${categoryIndex}-${faqIndex}`
                    const isOpen = openItems.includes(itemId)

                    return (
                      <Card key={faqIndex} className="overflow-hidden hover:shadow-md transition-shadow">
                        <CardContent className="p-0">
                          <button
                            onClick={() => toggleItem(itemId)}
                            className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-muted/50 transition-colors"
                          >
                            <h3 className="text-lg font-semibold pr-4">{faq.q}</h3>
                            <ChevronDown
                              className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          <div
                            className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}
                          >
                            <div className="px-6 pb-6">
                              <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Contact CTA */}
        <Card className="mt-16 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 animate-fade-in-up">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-serif mb-3">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Our team is here to help answer any questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => (window.location.href = "/contact")}>
                Contact Us
              </Button>
              <Button size="lg" variant="outline" onClick={() => (window.location.href = "/booking")}>
                Book Consultation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
