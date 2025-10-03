"use client"

import { useState, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Search,
  Calendar,
  User,
  ArrowRight,
  Clock,
  BookOpen,
  Sparkles,
  Heart,
  Star,
  TrendingUp,
} from "lucide-react";

const categories = [
  "All",
  "Skincare",
  "Injectables", 
  "Hair Care",
  "Wellness",
  "Nutrition",
  "Beauty Tips"
];

const blogPosts = [
  {
    id: 1,
    title: "The Complete Guide to Botox: What You Need to Know",
    excerpt:
      "Discover everything about Botox treatments, from how they work to what results you can expect. Learn about the procedure, recovery, and long-term benefits.",
    category: "Injectables",
    author: "Dr. Arshni Malde",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "HydraFacial vs Traditional Facials: Which is Right for You?",
    excerpt:
      "Compare the benefits of HydraFacial technology with traditional facial treatments. Understand the differences and choose the best option for your skin type.",
    category: "Skincare",
    author: "Dr. Arshni Malde",
    date: "March 12, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: 3,
    title: "Hair Restoration with PRP: A Natural Solution",
    excerpt:
      "Learn how Platelet-Rich Plasma therapy can help restore hair growth naturally. Explore the science behind PRP and real patient results.",
    category: "Hair Care",
    author: "Dr. Arshni Malde",
    date: "March 10, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 4,
    title: "IV Therapy Benefits: Boost Your Wellness from Within",
    excerpt:
      "Discover how IV vitamin therapy can enhance your energy, immunity, and overall wellness. Learn about different IV drip formulations and their benefits.",
    category: "Wellness",
    author: "Dr. Arshni Malde",
    date: "March 8, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 5,
    title: "Dermal Fillers: Achieving Natural-Looking Results",
    excerpt:
      "Understand how dermal fillers work to restore volume and smooth wrinkles. Learn about different filler types and what to expect during treatment.",
    category: "Injectables",
    author: "Dr. Arshni Malde",
    date: "March 5, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 6,
    title: "Chemical Peels: Transform Your Skin Texture",
    excerpt:
      "Explore the benefits of chemical peels for treating acne, pigmentation, and aging skin. Learn about different peel strengths and recovery times.",
    category: "Skincare",
    author: "Dr. Arshni Malde",
    date: "March 3, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen pt-20 will-change-transform">
      {/* Enhanced Hero Section */}
      <motion.section
        ref={heroRef}
        className="py-24 bg-gradient-to-br from-accent via-white to-secondary/30 relative overflow-hidden"
        style={{ y, opacity }}
        initial="hidden"
        animate={isHeroInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-primary/10 to-accent/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-60 h-60 bg-gradient-to-r from-accent/20 to-primary/10 rounded-full blur-2xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
              x: [0, 50, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Floating Blog Icons */}
          {[BookOpen, Heart, Star, Sparkles].map((Icon, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${20 + i * 15}%`,
                top: `${25 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3 + i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.6,
              }}
            >
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <Icon className="w-4 h-4 text-primary/40" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div variants={itemVariants}>
            <motion.div
              className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">Expert Insights</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Beauty & Wellness
              <span className="gradient-text block">Blog</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Expert insights, treatment guides, and beauty tips from our medical
              professionals. Stay informed about the latest in aesthetic medicine
              and wellness.
            </p>

          </motion.div>
        </div>
      </motion.section>

      {/* Search and Filter Section */}
      <motion.section
        className="py-12 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-2xl mx-auto mb-8" variants={itemVariants}>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-14 pl-12 text-base border-primary/20 focus:border-primary focus:ring-primary/20 rounded-full"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-3"
            variants={containerVariants}
          >
            {categories.map((category, index) => (
              <motion.div
                key={category}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-6 py-2 transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
                      : "border-primary/30 text-foreground hover:bg-primary/5 hover:border-primary/50"
                  }`}
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && selectedCategory === "All" && !searchQuery && (
        <motion.section
          className="py-16 bg-gradient-to-br from-secondary/20 to-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="mb-12" variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                Featured
                <span className="gradient-text"> Articles</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Our most popular and comprehensive guides
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  variants={itemVariants}
                  className="group"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className="border-0 shadow-xl overflow-hidden bg-white/90 backdrop-blur-sm h-full card-luxury">
                    <CardContent className="p-0">
                      <div className="relative aspect-video overflow-hidden">
                        <motion.div
                          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                          style={{ backgroundImage: `url(${post.image})` }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        
                        {/* Featured Badge */}
                        <motion.div
                          className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
                        >
                          Featured
                        </motion.div>

                      </div>

                      <div className="p-8">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <Badge
                            variant="secondary"
                            className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                          >
                            {post.category}
                          </Badge>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                          {post.title}
                        </h3>

                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 text-sm">
                            <User className="w-4 h-4 text-muted-foreground" />
                            <span className="font-medium">{post.author}</span>
                            <Calendar className="w-4 h-4 text-muted-foreground ml-2" />
                            <span>{post.date}</span>
                          </div>

                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button
                              asChild
                              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
                            >
                              <Link href={`/blog/${post.id}`} className="flex items-center space-x-2">
                                <span>Read More</span>
                                <ArrowRight className="w-4 h-4" />
                              </Link>
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Regular Posts Grid */}
      <motion.section
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {regularPosts.length === 0 && featuredPosts.length === 0 ? (
            <motion.div className="text-center py-16" variants={itemVariants}>
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-primary/40" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">No articles found</h3>
              <p className="text-xl text-muted-foreground mb-8">
                No articles found matching your criteria.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-3"
              >
                Clear Filters
              </Button>
            </motion.div>
          ) : (
            regularPosts.length > 0 && (
              <>
                <motion.div className="mb-12" variants={itemVariants}>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                    {selectedCategory === "All" ? "Latest" : selectedCategory}
                    <span className="gradient-text"> Articles</span>
                  </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regularPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      variants={itemVariants}
                      className="group"
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Card className="border-0 shadow-lg overflow-hidden bg-white/90 backdrop-blur-sm h-full hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-0">
                          <div className="relative aspect-video overflow-hidden">
                            <motion.div
                              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                              style={{ backgroundImage: `url(${post.image})` }}
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.6, ease: "easeOut" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                            
                          </div>

                          <div className="p-6">
                            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                              <Badge
                                variant="secondary"
                                className="bg-primary/10 text-primary text-xs hover:bg-primary/20 transition-colors"
                              >
                                {post.category}
                              </Badge>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {post.readTime}
                              </span>
                            </div>

                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                              {post.title}
                            </h3>

                            <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                              {post.excerpt}
                            </p>

                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                              <Calendar className="w-4 h-4" />
                              <span>{post.date}</span>
                            </div>

                            <motion.div
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Button
                                asChild
                                variant="outline"
                                className="w-full border-primary/30 text-foreground hover:bg-primary/5 hover:border-primary/50 rounded-full"
                              >
                                <Link href={`/blog/${post.id}`} className="flex items-center justify-center space-x-2">
                                  <span>Read Article</span>
                                  <ArrowRight className="w-4 h-4" />
                                </Link>
                              </Button>
                            </motion.div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </>
            )
          )}
        </div>
      </motion.section>

      {/* Newsletter Signup */}
      <motion.section
        className="py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
              x: [0, 100, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Stay Updated with Beauty Tips
            </h2>

            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Subscribe to our newsletter for the latest beauty tips, treatment
              updates, and exclusive offers delivered to your inbox.
            </p>

            <motion.form
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              whileHover={{ scale: 1.02 }}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-12 flex-1 bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20 focus:border-white/50"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  className="h-12 px-8 bg-white text-primary hover:bg-white/90 font-semibold rounded-full shadow-xl"
                >
                  Subscribe
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
