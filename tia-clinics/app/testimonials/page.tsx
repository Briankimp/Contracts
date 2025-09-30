"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Quote,
  Play,
  ChevronLeft,
  ChevronRight,
  Filter,
} from "lucide-react";

const testimonialCategories = [
  { id: "all", label: "All Reviews", count: 24 },
  { id: "injectables", label: "Botox & Fillers", count: 8 },
  { id: "skin", label: "Skin Treatments", count: 6 },
  { id: "hair", label: "Hair Restoration", count: 4 },
  { id: "body", label: "Body Contouring", count: 3 },
  { id: "iv", label: "IV Therapy", count: 3 },
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Wanjiku",
    age: 34,
    location: "Nairobi",
    treatment: "Botox & Dermal Fillers",
    category: "injectables",
    rating: 5,
    date: "2 months ago",
    text: "Dr. Arshni and her team are absolutely incredible. The results from my Botox and filler treatment exceeded my expectations, and I felt comfortable throughout the entire process. The clinic is beautiful, professional, and the staff genuinely cares about your comfort and results. I've received so many compliments on how natural and refreshed I look!",
    image: "https://unsplash.com/photos/_OykiNSux5g/download?force=true",
    videoThumbnail:
      "https://unsplash.com/photos/POzx_amnWJw/download?force=true",
    hasVideo: true,
    beforeAfter: true,
  },
  {
    id: 2,
    name: "Michael Ochieng",
    age: 42,
    location: "Westlands",
    treatment: "PRP Hair Restoration",
    category: "hair",
    rating: 5,
    date: "6 months ago",
    text: "After struggling with hair loss for years, the PRP treatment at TIA Clinics has given me my confidence back. The results are natural and impressive. Dr. Arshni explained the entire process thoroughly, and the team made me feel at ease. Six months later, I can see significant improvement in hair density and thickness. Highly recommend their expertise!",
    image: "https://unsplash.com/photos/oTweoxMKdkA/download?force=true",
    videoThumbnail:
      "https://unsplash.com/photos/jpHw8ndwJ_Q/download?force=true",
    hasVideo: true,
    beforeAfter: true,
  },
  {
    id: 3,
    name: "Grace Muthoni",
    age: 29,
    location: "Karen",
    treatment: "HydraFacial Series",
    category: "skin",
    rating: 5,
    date: "1 month ago",
    text: "The HydraFacial treatment left my skin glowing and refreshed. The staff is knowledgeable and caring, making every visit a pleasant experience. TIA Clinics is truly world-class. I've been doing monthly sessions for 6 months now, and my skin has never looked better. The acne scars have faded significantly, and my complexion is so much more even.",
    image: "https://unsplash.com/photos/Ox6SW103KtM/download?force=true",
    videoThumbnail:
      "https://unsplash.com/photos/PI-AQUL78QU/download?force=true",
    hasVideo: false,
    beforeAfter: true,
  },
  {
    id: 4,
    name: "David Kimani",
    age: 38,
    location: "Kilimani",
    treatment: "IV Wellness Therapy",
    category: "iv",
    rating: 5,
    date: "3 weeks ago",
    text: "The wellness IV drips have boosted my energy levels significantly. The personalized approach and attention to detail at TIA Clinics is unmatched. I feel revitalized after every session. As a busy executive, these treatments have become essential for maintaining my energy and focus. The team is professional and the environment is so relaxing.",
    image: "https://unsplash.com/photos/DdPvyjLOeyA/download?force=true",
    videoThumbnail:
      "https://unsplash.com/photos/AYdqXiJ_MBM/download?force=true",
    hasVideo: false,
    beforeAfter: false,
  },
  {
    id: 5,
    name: "Priya Sharma",
    age: 31,
    location: "Muthaiga",
    treatment: "Lip Enhancement",
    category: "injectables",
    rating: 5,
    date: "2 weeks ago",
    text: "I was nervous about getting lip fillers, but Dr. Arshni made me feel so comfortable and explained everything in detail. The results are exactly what I wanted - natural, fuller lips that enhance my features without looking overdone. The healing process was smooth, and the aftercare instructions were very helpful. I couldn't be happier!",
    image: "https://unsplash.com/photos/2lRH54dxa5c/download?force=true",
    videoThumbnail:
      "https://unsplash.com/photos/I10jTwpP5F4/download?force=true",
    hasVideo: true,
    beforeAfter: true,
  },
  {
    id: 6,
    name: "James Mwangi",
    age: 45,
    location: "Runda",
    treatment: "Body Contouring",
    category: "body",
    rating: 5,
    date: "4 months ago",
    text: "The non-surgical body contouring treatment has helped me achieve the results I couldn't get through diet and exercise alone. The team at TIA Clinics is professional, and the technology they use is impressive. I've seen a noticeable reduction in stubborn fat areas, and my clothes fit so much better now. The investment was definitely worth it.",
    image: "https://unsplash.com/photos/SGmgCPxv8OI/download?force=true",
    videoThumbnail:
      "https://unsplash.com/photos/M0Zn_DxGfeI/download?force=true",
    hasVideo: false,
    beforeAfter: true,
  },
  {
    id: 7,
    name: "Amina Hassan",
    age: 27,
    location: "Lavington",
    treatment: "Chemical Peel Series",
    category: "skin",
    rating: 5,
    date: "5 weeks ago",
    text: "My skin transformation through the chemical peel series has been amazing. The dark spots from acne scarring have faded dramatically, and my skin texture is so much smoother. Cecilia guided me through the entire process and made sure I was comfortable with each step. The results speak for themselves - I feel so much more confident now.",
    image: "https://unsplash.com/photos/_aWzq1pDoEU/download?force=true",
    videoThumbnail:
      "https://unsplash.com/photos/0Ik0xzhUTZw/download?force=true",
    hasVideo: false,
    beforeAfter: true,
  },
  {
    id: 8,
    name: "Robert Kiprotich",
    age: 39,
    location: "Gigiri",
    treatment: "Profile Harmonization",
    category: "injectables",
    rating: 5,
    date: "3 months ago",
    text: "The profile harmonization treatment has given me a more defined jawline and balanced facial features. Dr. Arshni has an artistic eye and really understands male aesthetics. The results look completely natural, and I've received many compliments. The entire experience was professional, and I felt well-informed throughout the process.",
    image: "https://unsplash.com/photos/Vc51AwcUq3Y/download?force=true",
    videoThumbnail:
      "https://unsplash.com/photos/Jd59gvlwn_M/download?force=true",
    hasVideo: true,
    beforeAfter: true,
  },
];

export default function TestimonialsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const filteredTestimonials =
    activeFilter === "all"
      ? testimonials
      : testimonials.filter(
          (testimonial) => testimonial.category === activeFilter
        );

  const featuredTestimonials = filteredTestimonials.slice(0, 3);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-accent to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <Badge className="mb-4 bg-primary text-primary-foreground">
              Client Stories
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              What Our Clients Say
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty leading-relaxed">
              Don't just take our word for it. Hear from our satisfied clients
              who have experienced the TIA Clinics difference in their beauty
              and wellness journey. Real stories, real results, real
              transformations.
            </p>

            <div className="flex items-center justify-center space-x-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  4.9/5
                </div>
                <div className="flex items-center justify-center space-x-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  Average Rating
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">
                  Happy Clients
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-muted-foreground">
                  Would Recommend
                </div>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link href="/booking">Join Our Happy Clients</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="text-foreground font-medium">
                Filter by Treatment
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              Showing {filteredTestimonials.length} reviews
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {testimonialCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Featured Client Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how our treatments have transformed lives and boosted
              confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Featured Testimonial */}
            <div className="lg:col-span-2">
              <Card className="h-full border-0 shadow-xl bg-gradient-to-br from-accent to-white">
                <CardContent className="p-8 lg:p-12">
                  <div className="flex items-start space-x-4 mb-6">
                    <div
                      className="w-16 h-16 rounded-full bg-cover bg-center bg-no-repeat flex-shrink-0"
                      style={{
                        backgroundImage: `url(${featuredTestimonials[currentTestimonial]?.image})`,
                      }}
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-xl font-semibold text-foreground">
                          {featuredTestimonials[currentTestimonial]?.name}
                        </h3>
                        <Badge variant="secondary" className="text-xs">
                          {featuredTestimonials[currentTestimonial]?.treatment}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                        <span>
                          Age {featuredTestimonials[currentTestimonial]?.age}
                        </span>
                        <span>
                          {featuredTestimonials[currentTestimonial]?.location}
                        </span>
                        <span>
                          {featuredTestimonials[currentTestimonial]?.date}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[
                          ...Array(
                            featuredTestimonials[currentTestimonial]?.rating ||
                              5
                          ),
                        ].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-primary text-primary"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <Quote className="w-12 h-12 text-primary mb-6" />
                  <blockquote className="text-lg lg:text-xl text-foreground mb-8 leading-relaxed font-light">
                    {featuredTestimonials[currentTestimonial]?.text}
                  </blockquote>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      {featuredTestimonials[currentTestimonial]?.hasVideo && (
                        <Badge className="bg-primary/10 text-primary">
                          <Play className="w-3 h-3 mr-1" />
                          Video Review
                        </Badge>
                      )}
                      {featuredTestimonials[currentTestimonial]
                        ?.beforeAfter && (
                        <Badge className="bg-primary/10 text-primary">
                          Before/After Available
                        </Badge>
                      )}
                    </div>

                    <div className="flex space-x-2">
                      <button
                        onClick={() =>
                          setCurrentTestimonial(
                            (prev) =>
                              (prev - 1 + featuredTestimonials.length) %
                              featuredTestimonials.length
                          )
                        }
                        className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                      >
                        <ChevronLeft className="w-5 h-5 text-foreground" />
                      </button>
                      <button
                        onClick={() =>
                          setCurrentTestimonial(
                            (prev) => (prev + 1) % featuredTestimonials.length
                          )
                        }
                        className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                      >
                        <ChevronRight className="w-5 h-5 text-foreground" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Testimonial List */}
            <div className="space-y-4">
              {featuredTestimonials.map((testimonial, index) => (
                <Card
                  key={testimonial.id}
                  className={`cursor-pointer transition-all duration-300 border-0 shadow-md ${
                    index === currentTestimonial
                      ? "bg-primary text-primary-foreground scale-105"
                      : "bg-white hover:shadow-lg"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-12 h-12 rounded-full bg-cover bg-center bg-no-repeat flex-shrink-0"
                        style={{ backgroundImage: `url(${testimonial.image})` }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold truncate">
                          {testimonial.name}
                        </div>
                        <div
                          className={`text-sm truncate ${
                            index === currentTestimonial
                              ? "text-primary-foreground/80"
                              : "text-muted-foreground"
                          }`}
                        >
                          {testimonial.treatment}
                        </div>
                        <div className="flex items-center space-x-1 mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                index === currentTestimonial
                                  ? "fill-primary-foreground text-primary-foreground"
                                  : "fill-primary text-primary"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              All Client Reviews
            </h2>
            <p className="text-xl text-muted-foreground">
              Read more stories from our satisfied clients across all
              treatments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className="border-0 shadow-lg bg-white card-hover"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-full bg-cover bg-center bg-no-repeat flex-shrink-0"
                      style={{ backgroundImage: `url(${testimonial.image})` }}
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-foreground mb-1">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">
                        {testimonial.treatment} • {testimonial.date}
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-primary text-primary"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-4">
                    {testimonial.text}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {testimonial.hasVideo && (
                      <Badge variant="secondary" className="text-xs">
                        <Play className="w-3 h-3 mr-1" />
                        Video
                      </Badge>
                    )}
                    {testimonial.beforeAfter && (
                      <Badge variant="secondary" className="text-xs">
                        Before/After
                      </Badge>
                    )}
                    <Badge variant="outline" className="text-xs">
                      {testimonial.location}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of satisfied clients who have transformed their
            confidence with TIA Clinics. Your journey to enhanced beauty and
            wellness starts with a simple consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              <Link href="/booking">Book Free Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              <Link href="/results">View Results Gallery</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
