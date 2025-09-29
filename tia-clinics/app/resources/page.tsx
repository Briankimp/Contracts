"use client"

import { Download, FileText, Video, BookOpen, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const guides = [
  {
    title: "Pre-Treatment Care Guide",
    description: "Essential preparation steps before your aesthetic treatment",
    icon: FileText,
    downloadUrl: "#",
  },
  {
    title: "Post-Treatment Care Instructions",
    description: "How to care for your skin after procedures",
    icon: FileText,
    downloadUrl: "#",
  },
  {
    title: "Skincare Routine Builder",
    description: "Create your personalized daily skincare routine",
    icon: BookOpen,
    downloadUrl: "#",
  },
  {
    title: "Treatment Comparison Chart",
    description: "Compare different treatments and their benefits",
    icon: FileText,
    downloadUrl: "#",
  },
]

const videos = [
  {
    title: "What to Expect: Your First Botox Treatment",
    duration: "5:32",
    thumbnail: "/placeholder.svg?height=300&width=500",
    videoUrl: "#",
  },
  {
    title: "HydraFacial Treatment Walkthrough",
    duration: "4:15",
    thumbnail: "/placeholder.svg?height=300&width=500",
    videoUrl: "#",
  },
  {
    title: "Hair Restoration with PRP: Patient Journey",
    duration: "6:48",
    thumbnail: "/placeholder.svg?height=300&width=500",
    videoUrl: "#",
  },
  {
    title: "IV Therapy Benefits Explained",
    duration: "3:55",
    thumbnail: "/placeholder.svg?height=300&width=500",
    videoUrl: "#",
  },
]

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "How do I prepare for my first appointment?",
        a: "Arrive with a clean face (no makeup for facial treatments), avoid blood-thinning medications 24 hours before injectables, and bring a list of current medications and allergies.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept cash, M-Pesa, credit/debit cards, and bank transfers. Payment is required at the time of service.",
      },
      {
        q: "Do you offer financing options?",
        a: "Yes, we offer flexible payment plans for treatments over a certain amount. Contact us to discuss options.",
      },
    ],
  },
  {
    category: "Treatments",
    questions: [
      {
        q: "How long do Botox results last?",
        a: "Botox results typically last 3-4 months. Regular maintenance treatments help maintain optimal results.",
      },
      {
        q: "Is there downtime after dermal fillers?",
        a: "Most patients experience minimal downtime. Some swelling or bruising may occur but typically resolves within 24-48 hours.",
      },
      {
        q: "How many PRP sessions are needed for hair restoration?",
        a: "Most patients require 3-4 initial sessions spaced 4-6 weeks apart, followed by maintenance treatments every 6-12 months.",
      },
    ],
  },
  {
    category: "Safety",
    questions: [
      {
        q: "Are your treatments safe?",
        a: "All treatments are performed by licensed medical professionals using FDA-approved products and following strict safety protocols.",
      },
      {
        q: "What are the potential side effects?",
        a: "Side effects vary by treatment but are generally minimal. Common effects include temporary redness, swelling, or bruising. We discuss all potential risks during consultation.",
      },
      {
        q: "Who should avoid aesthetic treatments?",
        a: "Pregnant or nursing women, those with certain medical conditions, or active skin infections should avoid treatments. We conduct thorough consultations to ensure safety.",
      },
    ],
  },
]

const externalResources = [
  {
    title: "American Society of Plastic Surgeons",
    description: "Comprehensive information on aesthetic procedures",
    url: "https://www.plasticsurgery.org",
  },
  {
    title: "International Society of Aesthetic Plastic Surgery",
    description: "Global standards and research in aesthetic medicine",
    url: "https://www.isaps.org",
  },
  {
    title: "Dermatology Association",
    description: "Skin health and treatment information",
    url: "#",
  },
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Resources & Education</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about aesthetic treatments, skincare, and wellness
          </p>
        </div>

        <Tabs defaultValue="guides" className="animate-fade-in-up animation-delay-100">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
            <TabsTrigger value="guides">Guides</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="faqs">FAQs</TabsTrigger>
            <TabsTrigger value="links">Links</TabsTrigger>
          </TabsList>

          {/* Downloadable Guides */}
          <TabsContent value="guides" className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-3xl font-serif mb-4">Downloadable Guides</h2>
              <p className="text-muted-foreground mb-8">
                Free resources to help you prepare for treatments and maintain your results
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {guides.map((guide, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <guide.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {guide.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">{guide.description}</p>
                        <Button variant="outline" size="sm" className="group/btn bg-transparent">
                          <Download className="w-4 h-4 mr-2 group-hover/btn:translate-y-0.5 transition-transform" />
                          Download PDF
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Video Library */}
          <TabsContent value="videos" className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-3xl font-serif mb-4">Video Library</h2>
              <p className="text-muted-foreground mb-8">
                Watch treatment demonstrations and learn from our expert team
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {videos.map((video, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button size="lg" className="rounded-full w-16 h-16 p-0">
                          <Video className="w-8 h-8" />
                        </Button>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-sm">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {video.title}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* FAQs */}
          <TabsContent value="faqs" className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-3xl font-serif mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground mb-8">
                Find answers to common questions about our treatments and services
              </p>
            </div>
            <div className="space-y-8">
              {faqs.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${sectionIndex * 100}ms` }}
                >
                  <h3 className="text-2xl font-semibold mb-6 text-primary">{section.category}</h3>
                  <div className="space-y-4">
                    {section.questions.map((faq, faqIndex) => (
                      <Card key={faqIndex} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <h4 className="text-lg font-semibold mb-3">{faq.q}</h4>
                          <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* External Links */}
          <TabsContent value="links" className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-3xl font-serif mb-4">Helpful Resources</h2>
              <p className="text-muted-foreground mb-8">
                Trusted external resources for additional information on aesthetic medicine
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {externalResources.map((resource, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{resource.description}</p>
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="group/btn bg-transparent">
                        Visit Website
                        <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <Card className="mt-16 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 animate-fade-in-up animation-delay-400">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-serif mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our team is here to help. Schedule a consultation to discuss your specific needs and treatment options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => (window.location.href = "/booking")}>
                Book Consultation
              </Button>
              <Button size="lg" variant="outline" onClick={() => (window.location.href = "/contact")}>
                Contact Us
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
