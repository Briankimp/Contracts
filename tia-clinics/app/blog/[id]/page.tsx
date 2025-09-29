import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock, ArrowLeft, ArrowRight, Share2 } from "lucide-react"

// Blog post data
const blogPosts = [
  {
    id: "1",
    title: "The Complete Guide to Botox: What You Need to Know",
    excerpt: "Discover everything about Botox treatments, from how they work to what results you can expect.",
    category: "Injectables",
    author: "Dr. Arshni Malde",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "/botox-treatment-african-woman.jpg",
    content: `
      <h2>Understanding Botox: The Basics</h2>
      <p>Botox has become one of the most popular non-surgical aesthetic treatments worldwide, and for good reason. This FDA-approved treatment offers a safe, effective way to reduce the appearance of fine lines and wrinkles, helping you achieve a more youthful, refreshed appearance.</p>
      
      <h2>How Does Botox Work?</h2>
      <p>Botox works by temporarily relaxing the muscles that cause wrinkles. When injected into specific facial muscles, it blocks nerve signals that tell those muscles to contract. This relaxation smooths out existing wrinkles and prevents new ones from forming.</p>
      
      <h3>Common Treatment Areas</h3>
      <ul>
        <li><strong>Forehead lines:</strong> Horizontal lines across the forehead</li>
        <li><strong>Frown lines:</strong> Vertical lines between the eyebrows</li>
        <li><strong>Crow's feet:</strong> Lines around the outer corners of the eyes</li>
        <li><strong>Bunny lines:</strong> Wrinkles on the nose</li>
      </ul>
      
      <h2>What to Expect During Treatment</h2>
      <p>A typical Botox treatment at TIA Clinics takes only 10-15 minutes. Our experienced medical professionals use ultra-fine needles to inject small amounts of Botox into targeted muscles. Most clients describe the sensation as a slight pinch, and no anesthesia is typically needed.</p>
      
      <h2>Results and Recovery</h2>
      <p>You can return to your normal activities immediately after treatment. Results begin to appear within 3-5 days, with full effects visible after 10-14 days. The results typically last 3-4 months, after which you can schedule a follow-up treatment to maintain your results.</p>
      
      <h2>Is Botox Right for You?</h2>
      <p>Botox is suitable for most adults looking to reduce the appearance of dynamic wrinkles. During your consultation at TIA Clinics, we'll assess your facial anatomy, discuss your aesthetic goals, and create a personalized treatment plan.</p>
      
      <h2>Why Choose TIA Clinics for Botox?</h2>
      <p>At TIA Clinics, all Botox treatments are performed by licensed medical professionals with extensive training in facial anatomy and injection techniques. We use only authentic, FDA-approved Botox and prioritize natural-looking results that enhance your features rather than change them.</p>
    `,
  },
  {
    id: "2",
    title: "HydraFacial vs Traditional Facials: Which is Right for You?",
    excerpt: "Compare the benefits of HydraFacial technology with traditional facial treatments.",
    category: "Skincare",
    author: "Dr. Arshni Malde",
    date: "March 12, 2024",
    readTime: "6 min read",
    image: "/hydrafacial-treatment-african-woman-glowing-skin.jpg",
    content: `
      <h2>The Evolution of Facial Treatments</h2>
      <p>Facial treatments have come a long way, and today's clients have more options than ever. Two popular choices are traditional facials and the innovative HydraFacial treatment. Understanding the differences can help you choose the best option for your skin.</p>
      
      <h2>What is a Traditional Facial?</h2>
      <p>Traditional facials typically involve cleansing, exfoliation, extraction, massage, and mask application. They're customized to your skin type and concerns, offering relaxation and basic skin improvement.</p>
      
      <h2>What is HydraFacial?</h2>
      <p>HydraFacial is a medical-grade facial treatment that uses patented technology to cleanse, extract, and hydrate skin. It combines multiple steps into one treatment using a specialized device that delivers instant, noticeable results.</p>
      
      <h3>Key Differences</h3>
      <ul>
        <li><strong>Technology:</strong> HydraFacial uses advanced vortex technology for deeper cleansing</li>
        <li><strong>Extraction:</strong> HydraFacial's painless suction vs. manual extraction</li>
        <li><strong>Customization:</strong> HydraFacial offers targeted serums for specific concerns</li>
        <li><strong>Results:</strong> HydraFacial provides immediate, visible improvements</li>
        <li><strong>Downtime:</strong> Both have no downtime, but HydraFacial has zero redness</li>
      </ul>
      
      <h2>Benefits of HydraFacial</h2>
      <p>HydraFacial addresses multiple skin concerns in one treatment: fine lines, wrinkles, enlarged pores, oily skin, hyperpigmentation, and dehydration. The treatment is gentle enough for sensitive skin yet powerful enough to deliver dramatic results.</p>
      
      <h2>Who Should Choose HydraFacial?</h2>
      <p>HydraFacial is ideal for anyone looking for immediate results before a special event, those with specific skin concerns like hyperpigmentation or congested pores, or anyone wanting a more advanced treatment than traditional facials offer.</p>
      
      <h2>Experience HydraFacial at TIA Clinics</h2>
      <p>At TIA Clinics, our HydraFacial treatments are customized to your unique skin needs. We offer various boosters and serums to target your specific concerns, ensuring you get the most effective treatment possible.</p>
    `,
  },
  {
    id: "3",
    title: "Hair Restoration with PRP: A Natural Solution",
    excerpt: "Learn how Platelet-Rich Plasma therapy can help restore hair growth naturally.",
    category: "Hair Care",
    author: "Dr. Arshni Malde",
    date: "March 10, 2024",
    readTime: "7 min read",
    image: "/african-woman-beautiful-healthy-hair.jpg",
    content: `
      <h2>Understanding Hair Loss</h2>
      <p>Hair loss affects millions of people worldwide and can significantly impact self-confidence. Whether caused by genetics, hormones, stress, or other factors, hair loss can be distressing. Fortunately, PRP therapy offers a natural, effective solution.</p>
      
      <h2>What is PRP Hair Restoration?</h2>
      <p>PRP (Platelet-Rich Plasma) therapy uses your body's own healing properties to stimulate hair growth. The treatment involves drawing a small amount of your blood, processing it to concentrate the platelets, and injecting this platelet-rich plasma into your scalp.</p>
      
      <h2>The Science Behind PRP</h2>
      <p>Platelets contain growth factors that promote healing and tissue regeneration. When injected into the scalp, these growth factors stimulate dormant hair follicles, increase blood supply to the follicles, and promote new hair growth.</p>
      
      <h3>Benefits of PRP for Hair Restoration</h3>
      <ul>
        <li>Natural treatment using your own blood</li>
        <li>No risk of allergic reactions</li>
        <li>Minimal downtime</li>
        <li>Stimulates natural hair growth</li>
        <li>Improves hair thickness and density</li>
        <li>Safe for all hair types</li>
      </ul>
      
      <h2>The PRP Treatment Process</h2>
      <p>A typical PRP session at TIA Clinics takes about 60-90 minutes. We begin by drawing a small blood sample, which is then processed in a centrifuge to separate and concentrate the platelets. The PRP is then carefully injected into areas of thinning or hair loss on your scalp.</p>
      
      <h2>Expected Results</h2>
      <p>Most clients begin to see improvements within 3-6 months, with optimal results appearing after a series of treatments. We typically recommend 3-4 initial sessions spaced 4-6 weeks apart, followed by maintenance treatments every 6-12 months.</p>
      
      <h2>Is PRP Right for You?</h2>
      <p>PRP therapy is most effective for people in the early stages of hair loss. During your consultation, we'll assess your hair loss pattern, discuss your goals, and determine if PRP is the best option for you.</p>
    `,
  },
  {
    id: "4",
    title: "IV Therapy Benefits: Boost Your Wellness from Within",
    excerpt: "Discover how IV vitamin therapy can enhance your energy, immunity, and overall wellness.",
    category: "Wellness",
    author: "Dr. Arshni Malde",
    date: "March 8, 2024",
    readTime: "5 min read",
    image: "/wellness-iv-therapy-african-woman.jpg",
    content: `
      <h2>What is IV Therapy?</h2>
      <p>IV (intravenous) therapy delivers vitamins, minerals, and other nutrients directly into your bloodstream, bypassing the digestive system for maximum absorption. This allows your body to utilize 100% of the nutrients, compared to only 20-30% absorption from oral supplements.</p>
      
      <h2>Benefits of IV Therapy</h2>
      <p>IV therapy offers numerous benefits for overall health and wellness. From boosting energy and immunity to improving skin health and athletic recovery, IV drips can be customized to address your specific needs.</p>
      
      <h3>Popular IV Therapy Formulations</h3>
      <ul>
        <li><strong>Immunity Boost:</strong> High-dose vitamin C, zinc, and antioxidants</li>
        <li><strong>Energy Drip:</strong> B-complex vitamins and amino acids</li>
        <li><strong>Beauty Drip:</strong> Glutathione, biotin, and vitamin C for glowing skin</li>
        <li><strong>Hydration Therapy:</strong> Electrolytes and fluids for optimal hydration</li>
        <li><strong>Athletic Recovery:</strong> Amino acids and minerals for muscle recovery</li>
      </ul>
      
      <h2>What to Expect During Treatment</h2>
      <p>IV therapy sessions at TIA Clinics typically last 30-45 minutes. You'll relax in a comfortable chair while the IV drip is administered. Most clients find the experience relaxing and use the time to read, work, or simply rest.</p>
      
      <h2>Who Can Benefit from IV Therapy?</h2>
      <p>IV therapy is beneficial for anyone looking to optimize their health, boost energy levels, support immune function, improve athletic performance, or enhance skin health. It's particularly popular among busy professionals, athletes, and those recovering from illness.</p>
      
      <h2>Safety and Effectiveness</h2>
      <p>At TIA Clinics, all IV therapy treatments are administered by trained medical professionals. We use only pharmaceutical-grade ingredients and follow strict safety protocols to ensure your treatment is both safe and effective.</p>
    `,
  },
  {
    id: "5",
    title: "Dermal Fillers: Achieving Natural-Looking Results",
    excerpt: "Understand how dermal fillers work to restore volume and smooth wrinkles.",
    category: "Injectables",
    author: "Dr. Arshni Malde",
    date: "March 5, 2024",
    readTime: "6 min read",
    image: "/dermal-fillers-african-woman-natural-beauty.jpg",
    content: `
      <h2>Understanding Dermal Fillers</h2>
      <p>Dermal fillers are injectable treatments that restore volume, smooth wrinkles, and enhance facial contours. Unlike Botox, which relaxes muscles, fillers add volume to areas that have lost fullness due to aging or other factors.</p>
      
      <h2>Types of Dermal Fillers</h2>
      <p>At TIA Clinics, we use premium hyaluronic acid-based fillers, which are naturally found in your body. These fillers are safe, effective, and provide natural-looking results that can last 6-18 months depending on the product and treatment area.</p>
      
      <h3>Common Treatment Areas</h3>
      <ul>
        <li><strong>Lips:</strong> Add volume and definition</li>
        <li><strong>Cheeks:</strong> Restore youthful fullness</li>
        <li><strong>Nasolabial folds:</strong> Smooth smile lines</li>
        <li><strong>Marionette lines:</strong> Soften lines around the mouth</li>
        <li><strong>Under eyes:</strong> Reduce hollowness and dark circles</li>
        <li><strong>Jawline:</strong> Define and contour</li>
      </ul>
      
      <h2>The Art of Natural Results</h2>
      <p>The key to beautiful filler results is subtlety and expertise. Our medical professionals at TIA Clinics are trained in advanced injection techniques that enhance your natural features rather than changing them. We focus on creating balanced, harmonious results that look natural.</p>
      
      <h2>What to Expect</h2>
      <p>Filler treatments typically take 30-60 minutes. We use ultra-fine needles and may apply numbing cream for your comfort. Results are immediate, though you may experience minor swelling for 24-48 hours. Most clients return to normal activities immediately.</p>
      
      <h2>Maintaining Your Results</h2>
      <p>Dermal fillers are temporary, which allows you to adjust your treatment over time. We recommend follow-up appointments to maintain your results and make any desired adjustments. With proper maintenance, you can enjoy long-lasting, beautiful results.</p>
    `,
  },
  {
    id: "6",
    title: "Chemical Peels: Transform Your Skin Texture",
    excerpt: "Explore the benefits of chemical peels for treating acne, pigmentation, and aging skin.",
    category: "Skincare",
    author: "Dr. Arshni Malde",
    date: "March 3, 2024",
    readTime: "7 min read",
    image: "/chemical-peel-african-woman-smooth-skin.jpg",
    content: `
      <h2>What Are Chemical Peels?</h2>
      <p>Chemical peels are professional skin treatments that use controlled exfoliation to remove damaged outer layers of skin, revealing smoother, more radiant skin underneath. They're highly effective for treating various skin concerns including acne, hyperpigmentation, fine lines, and uneven texture.</p>
      
      <h2>Types of Chemical Peels</h2>
      <p>Chemical peels come in different strengths to address various skin concerns and types. At TIA Clinics, we offer superficial, medium, and deep peels, each designed for specific skin issues and recovery timelines.</p>
      
      <h3>Superficial Peels</h3>
      <p>Gentle peels that target the outermost layer of skin. Ideal for brightening, mild acne, and maintaining healthy skin. No downtime required.</p>
      
      <h3>Medium Peels</h3>
      <p>Penetrate deeper to address moderate sun damage, pigmentation, and fine lines. May require 3-7 days of recovery.</p>
      
      <h3>Deep Peels</h3>
      <p>Most intensive option for significant sun damage, deep wrinkles, and severe pigmentation. Requires longer recovery but provides dramatic results.</p>
      
      <h2>Benefits of Chemical Peels</h2>
      <ul>
        <li>Improves skin texture and tone</li>
        <li>Reduces hyperpigmentation and dark spots</li>
        <li>Minimizes fine lines and wrinkles</li>
        <li>Treats acne and reduces scarring</li>
        <li>Stimulates collagen production</li>
        <li>Creates a more youthful, radiant complexion</li>
      </ul>
      
      <h2>What to Expect</h2>
      <p>During your chemical peel at TIA Clinics, we'll cleanse your skin and apply the peel solution. You may feel a tingling or warm sensation. After the appropriate time, we'll neutralize and remove the peel. Post-treatment care instructions will be provided to ensure optimal results and healing.</p>
      
      <h2>Choosing the Right Peel</h2>
      <p>The best chemical peel for you depends on your skin type, concerns, and desired results. During your consultation, we'll assess your skin and recommend the most appropriate peel strength and formulation for your needs.</p>
    `,
  },
  {
    id: "7",
    title: "Nutrition for Glowing Skin: What to Eat for Beauty",
    excerpt: "Discover the connection between nutrition and skin health.",
    category: "Nutrition",
    author: "Dr. Arshni Malde",
    date: "March 1, 2024",
    readTime: "5 min read",
    image: "/healthy-nutrition-african-woman-glowing-skin.jpg",
    content: `
      <h2>The Skin-Nutrition Connection</h2>
      <p>Beautiful skin starts from within. While topical treatments and professional procedures are important, nutrition plays a crucial role in maintaining healthy, glowing skin. What you eat directly affects your skin's appearance, texture, and overall health.</p>
      
      <h2>Essential Nutrients for Healthy Skin</h2>
      
      <h3>Vitamin C</h3>
      <p>A powerful antioxidant that promotes collagen production and protects against sun damage. Found in citrus fruits, berries, bell peppers, and leafy greens.</p>
      
      <h3>Omega-3 Fatty Acids</h3>
      <p>Reduce inflammation and keep skin moisturized. Sources include fatty fish, walnuts, flaxseeds, and chia seeds.</p>
      
      <h3>Vitamin E</h3>
      <p>Protects skin from oxidative stress and supports skin barrier function. Found in nuts, seeds, and avocados.</p>
      
      <h3>Zinc</h3>
      <p>Supports wound healing and reduces inflammation. Present in oysters, beef, pumpkin seeds, and lentils.</p>
      
      <h2>Foods to Include in Your Diet</h2>
      <ul>
        <li><strong>Berries:</strong> Rich in antioxidants that fight free radicals</li>
        <li><strong>Fatty fish:</strong> Provides omega-3s for supple skin</li>
        <li><strong>Avocados:</strong> Healthy fats for skin moisture</li>
        <li><strong>Sweet potatoes:</strong> Beta-carotene for skin protection</li>
        <li><strong>Green tea:</strong> Antioxidants and anti-inflammatory properties</li>
        <li><strong>Dark chocolate:</strong> Flavonoids for skin hydration</li>
      </ul>
      
      <h2>Foods to Limit</h2>
      <p>Certain foods can negatively impact skin health. Limit refined sugars, processed foods, and excessive dairy, which can trigger inflammation and breakouts in some people.</p>
      
      <h2>Hydration is Key</h2>
      <p>Don't forget about water! Proper hydration is essential for maintaining skin elasticity and promoting a healthy complexion. Aim for 8-10 glasses of water daily.</p>
      
      <h2>Complementing Your Aesthetic Treatments</h2>
      <p>At TIA Clinics, we believe in a holistic approach to beauty. Combining professional treatments with proper nutrition creates the best results for long-term skin health and beauty.</p>
    `,
  },
  {
    id: "8",
    title: "Thread Lift: The Non-Surgical Facelift Alternative",
    excerpt: "Learn about thread lift procedures for facial rejuvenation without surgery.",
    category: "Injectables",
    author: "Dr. Arshni Malde",
    date: "February 28, 2024",
    readTime: "8 min read",
    image: "/thread-lift-african-woman-youthful-face.jpg",
    content: `
      <h2>What is a Thread Lift?</h2>
      <p>A thread lift is a minimally invasive procedure that lifts and tightens sagging skin using medical-grade threads. It's an excellent alternative to traditional facelift surgery, offering natural-looking results with minimal downtime and no general anesthesia.</p>
      
      <h2>How Thread Lifts Work</h2>
      <p>During the procedure, dissolvable threads with tiny cones or barbs are inserted under the skin using fine needles. These threads physically lift the skin while stimulating collagen production for long-term improvement. The threads dissolve naturally over 6-8 months, but results continue as new collagen forms.</p>
      
      <h3>Treatment Areas</h3>
      <ul>
        <li>Sagging cheeks and mid-face</li>
        <li>Jowls and jawline</li>
        <li>Neck and under-chin area</li>
        <li>Eyebrows and forehead</li>
        <li>Nasolabial folds</li>
      </ul>
      
      <h2>Benefits of Thread Lifts</h2>
      <ul>
        <li>Immediate lifting effect</li>
        <li>Minimal downtime (2-3 days)</li>
        <li>Local anesthesia only</li>
        <li>Natural-looking results</li>
        <li>Stimulates collagen production</li>
        <li>Results last 1-2 years</li>
        <li>Can be combined with other treatments</li>
      </ul>
      
      <h2>The Procedure</h2>
      <p>Thread lift procedures at TIA Clinics typically take 45-60 minutes. After applying local anesthesia, we carefully insert the threads through tiny entry points. You may feel slight pressure but minimal discomfort. Most clients return to work within 2-3 days.</p>
      
      <h2>Expected Results</h2>
      <p>Results are visible immediately, with continued improvement over the following weeks as collagen production increases. The lifting effect typically lasts 12-18 months, though individual results vary based on skin quality and lifestyle factors.</p>
      
      <h2>Is a Thread Lift Right for You?</h2>
      <p>Thread lifts are ideal for people with mild to moderate skin laxity who want to avoid surgery. During your consultation, we'll assess your facial structure and skin quality to determine if thread lifting is the best option for your goals.</p>
    `,
  },
  {
    id: "9",
    title: "Skincare Routine for Different Skin Types",
    excerpt: "Create the perfect skincare routine tailored to your skin type.",
    category: "Beauty Tips",
    author: "Dr. Arshni Malde",
    date: "February 25, 2024",
    readTime: "6 min read",
    image: "/skincare-routine-african-woman-beauty.jpg",
    content: `
      <h2>Understanding Your Skin Type</h2>
      <p>The foundation of effective skincare is understanding your skin type. Whether you have oily, dry, combination, or sensitive skin, tailoring your routine to your specific needs is essential for achieving healthy, glowing skin.</p>
      
      <h2>Oily Skin Routine</h2>
      <h3>Morning:</h3>
      <ul>
        <li>Gentle foaming cleanser</li>
        <li>Lightweight, oil-free moisturizer</li>
        <li>Broad-spectrum SPF 30+ sunscreen</li>
      </ul>
      <h3>Evening:</h3>
      <ul>
        <li>Double cleanse (oil cleanser + foaming cleanser)</li>
        <li>Salicylic acid or niacinamide serum</li>
        <li>Lightweight night cream</li>
      </ul>
      
      <h2>Dry Skin Routine</h2>
      <h3>Morning:</h3>
      <ul>
        <li>Creamy, hydrating cleanser</li>
        <li>Hyaluronic acid serum</li>
        <li>Rich moisturizer</li>
        <li>SPF 30+ sunscreen</li>
      </ul>
      <h3>Evening:</h3>
      <ul>
        <li>Gentle cleansing milk</li>
        <li>Hydrating serum</li>
        <li>Rich night cream or facial oil</li>
      </ul>
      
      <h2>Combination Skin Routine</h2>
      <h3>Morning:</h3>
      <ul>
        <li>Gentle gel cleanser</li>
        <li>Balancing toner</li>
        <li>Lightweight moisturizer</li>
        <li>SPF 30+ sunscreen</li>
      </ul>
      <h3>Evening:</h3>
      <ul>
        <li>Gentle cleanser</li>
        <li>Targeted treatments (spot treat oily areas)</li>
        <li>Balanced moisturizer</li>
      </ul>
      
      <h2>Sensitive Skin Routine</h2>
      <h3>Morning:</h3>
      <ul>
        <li>Fragrance-free gentle cleanser</li>
        <li>Soothing serum (centella or aloe)</li>
        <li>Gentle, fragrance-free moisturizer</li>
        <li>Mineral SPF 30+ sunscreen</li>
      </ul>
      <h3>Evening:</h3>
      <ul>
        <li>Gentle cleansing milk</li>
        <li>Calming serum</li>
        <li>Rich, soothing night cream</li>
      </ul>
      
      <h2>Universal Skincare Tips</h2>
      <ul>
        <li>Always remove makeup before bed</li>
        <li>Use sunscreen daily, even on cloudy days</li>
        <li>Introduce new products gradually</li>
        <li>Stay hydrated and get adequate sleep</li>
        <li>Consider professional treatments for enhanced results</li>
      </ul>
      
      <h2>Professional Guidance</h2>
      <p>At TIA Clinics, we offer personalized skincare consultations to help you build the perfect routine for your skin type and concerns. Our medical professionals can recommend professional treatments to complement your at-home care.</p>
    `,
  },
]

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }))
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.id === params.id)

  if (!post) {
    return {
      title: "Post Not Found - TIA Clinics Blog",
    }
  }

  return {
    title: `${post.title} | TIA Clinics Blog`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === params.id)

  if (!post) {
    notFound()
  }

  const currentIndex = blogPosts.findIndex((p) => p.id === params.id)
  const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Image */}
      <div className="relative h-96 mb-12">
        <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary text-primary-foreground">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">{post.title}</h1>
            <div className="flex items-center space-x-6 text-white/90">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <Button asChild variant="ghost">
            <Link href="/blog" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Blog</span>
            </Link>
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>

        <article className="prose prose-lg max-w-none mb-16">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        {/* CTA Card */}
        <Card className="mb-16 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience These Treatments?</h3>
            <p className="text-muted-foreground mb-6">
              Book a consultation with our expert team to discuss your aesthetic goals and create a personalized
              treatment plan.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/booking">Book Free Consultation</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="grid md:grid-cols-2 gap-6">
          {previousPost && (
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-2">Previous Article</div>
                <Link href={`/blog/${previousPost.id}`} className="group">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {previousPost.title}
                  </h3>
                  <div className="flex items-center text-primary">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    <span>Read More</span>
                  </div>
                </Link>
              </CardContent>
            </Card>
          )}
          {nextPost && (
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-2">Next Article</div>
                <Link href={`/blog/${nextPost.id}`} className="group">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {nextPost.title}
                  </h3>
                  <div className="flex items-center text-primary">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
