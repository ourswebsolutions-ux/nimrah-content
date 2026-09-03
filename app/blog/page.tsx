"use client"

import Image from "next/image"
import { useMemo, useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

import {
  Calendar,
  Clock,
  Search,
  ArrowRight,
  X,
} from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "SEO Content & Website Copy for Home Medicare",
    excerpt:
      "Created SEO-focused website content designed to improve search visibility, communicate healthcare services clearly, and guide visitors toward relevant solutions.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    category: "Healthcare & Fitness",
    date: "2024-04-10",
    readTime: "6 min read",
    liveUrl: "https://homemedicare.pk/",
    featured: true,
  },
  {
    id: 2,
    title: "Fitness & Wellness Content for Just Your Fitness",
    excerpt:
      "Produced engaging, SEO-focused fitness content covering health, workouts, and wellness topics while keeping the writing clear, useful, and search-friendly.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    category: "Healthcare & Fitness",
    date: "2024-04-05",
    readTime: "7 min read",
    liveUrl: "https://justyourfitness.com/",
    featured: true,
  },
  {
    id: 3,
    title: "Crypto News & Content for Australian Crypto Convention",
    excerpt:
      "Created SEO-driven crypto content and informative digital publications covering cryptocurrency, blockchain, and industry trends.",
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=1200&q=80",
    category: "Technology & Media",
    date: "2024-03-28",
    readTime: "8 min read",
    liveUrl: "https://auscryptocon.com/news-aucryptocon/",
    featured: true,
  },
  {
    id: 4,
    title: "SEO Content for Super Asia Sanitary",
    excerpt:
      "Created SEO-friendly blogs and product-focused content for a sanitary and home products brand, combining search intent with clear product communication.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    category: "E-commerce",
    date: "2024-03-20",
    readTime: "6 min read",
    liveUrl: "https://superasiasanitary.com/",
    featured: false,
  },
  {
    id: 5,
    title: "Startup & SaaS Content for Reliable Startup",
    excerpt:
      "Developed niche-focused content for startup audiences across SaaS, fintech, business strategy, and emerging technology topics.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    category: "Business & SaaS",
    date: "2024-03-15",
    readTime: "7 min read",
    liveUrl: "https://reliablestartup.com/",
    featured: true,
  },
  {
    id: 6,
    title: "Semantic SEO Content for BrandClickX",
    excerpt:
      "Created search-intent-driven content using semantic SEO strategies to strengthen topical relevance, improve organic visibility, and target valuable search queries.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    category: "SEO & Content Strategy",
    date: "2024-03-10",
    readTime: "7 min read",
    liveUrl: "https://brandclickx.com/",
    featured: true,
  },
  {
    id: 7,
    title: "SEO & Website Content for Ultimate Pest Solutions",
    excerpt:
      "Developed conversion-focused website content for a Canadian pest control business, combining SEO best practices with clear service messaging.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    category: "Website & Copywriting",
    date: "2024-03-05",
    readTime: "6 min read",
    liveUrl: "https://ultimatepestsolutions.ca/",
    featured: false,
  },
  {
    id: 8,
    title: "SEO Content & Brand Writing for Avoura",
    excerpt:
      "Authored SEO blogs and guest posts focused on increasing organic traffic, strengthening topical authority, and supporting long-term domain growth.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    category: "SEO & Content Strategy",
    date: "2024-02-28",
    readTime: "6 min read",
    liveUrl: "https://avoura.in/",
    featured: false,
  },
  {
    id: 9,
    title: "SEO Content for Odix Technology",
    excerpt:
      "Produced optimized technology content designed to communicate services clearly while improving search visibility through structured, keyword-focused writing.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    category: "Technology & Media",
    date: "2024-02-20",
    readTime: "6 min read",
    liveUrl: "https://odixtech.com/",
    featured: false,
  },
  {
    id: 10,
    title: "SEO News Content for Capslock",
    excerpt:
      "Created SEO-optimized news and trending-topic articles using strategic keywords and search-focused content structures.",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80",
    category: "Technology & Media",
    date: "2024-02-15",
    readTime: "6 min read",
    liveUrl: "https://capslock.pk/",
    featured: false,
  },
  {
    id: 11,
    title: "Content Strategy for LEAP Saudi Arabia",
    excerpt:
      "Researched and developed clear, compelling content around a major technology event, focusing on audience relevance and effective communication.",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80",
    category: "Business & SaaS",
    date: "2024-02-10",
    readTime: "7 min read",
    liveUrl: "https://onegiantleap.com/",
    featured: true,
  },
  {
    id: 12,
    title: "SEO Content for InHeritageX",
    excerpt:
      "Managed SEO blogging and WordPress content while supporting online visibility through strategic content planning and social media-focused ideas.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    category: "SEO & Content Strategy",
    date: "2024-02-05",
    readTime: "6 min read",
    liveUrl: "https://inheritagex.com/",
    featured: false,
  },
  {
    id: 13,
    title: "Web Content for Exolux Services",
    excerpt:
      "Created engaging and SEO-focused website content supporting brand communication, service positioning, and a stronger online presence.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    category: "Website & Copywriting",
    date: "2024-01-30",
    readTime: "6 min read",
    liveUrl: "https://exoluxservices.com/",
    featured: false,
  },
  {
    id: 14,
    title: "SEO Content for COMET Estimation",
    excerpt:
      "Created SEO-driven content around construction estimating and business services, focusing on useful information, search visibility, and audience intent.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    category: "Business & SaaS",
    date: "2024-01-25",
    readTime: "7 min read",
    liveUrl: "https://cometestimating.com/",
    featured: false,
  },
  {
    id: 15,
    title: "Outsourcing & SEO Content for Go-Globes",
    excerpt:
      "Developed search-focused B2B content around outsourced SEO services, communicating digital marketing concepts through clear and structured copy.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
    category: "SEO & Content Strategy",
    date: "2024-01-20",
    readTime: "7 min read",
    liveUrl: "https://go-globes.com/outsource-seo-services/",
    featured: false,
  },
]

const categories = [
  "All",
  "Healthcare & Fitness",
  "Technology & Media",
  "E-commerce",
  "Business & SaaS",
  "SEO & Content Strategy",
  "Website & Copywriting",
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory

      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query)

      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const recentPosts = filteredPosts.filter((post) => !post.featured)

  const clearFilters = () => {
    setActiveCategory("All")
    setSearchQuery("")
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="container mx-auto px-4 pt-12 pb-10 sm:pt-16 sm:pb-14 lg:pt-20">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4">
              Content Writing Portfolio
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Writing Insights &{" "}
              <span className="text-primary">Content Work</span>
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Explore selected SEO content, website copy, technology articles,
              business content, healthcare writing, product content, and
              content strategy projects.
            </p>
          </div>
        </section>

        {/* Search + Categories */}
        <section className="container mx-auto px-4 pb-12">
          <div className="rounded-2xl border bg-card p-4 shadow-sm sm:p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              {/* Search */}
              <div className="relative w-full lg:max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles, niches, or services..."
                  className="h-11 pl-10 pr-10"
                />

                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                    aria-label="Clear search"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* Category Tabs */}
              <div className="flex w-full gap-2 overflow-x-auto pb-1 lg:w-auto lg:flex-wrap lg:justify-end">
                {categories.map((category) => {
                  const active = activeCategory === category

                  return (
                    <Button
                      key={category}
                      type="button"
                      size="sm"
                      variant={active ? "default" : "outline"}
                      onClick={() => setActiveCategory(category)}
                      className="shrink-0 whitespace-nowrap"
                    >
                      {category}
                    </Button>
                  )
                })}
              </div>
            </div>

            {/* Active filters */}
            {(activeCategory !== "All" || searchQuery) && (
              <div className="mt-5 flex flex-wrap items-center gap-2 border-t pt-4">
                <span className="text-sm text-muted-foreground">
                  Showing:
                </span>

                {activeCategory !== "All" && (
                  <Badge variant="secondary">{activeCategory}</Badge>
                )}

                {searchQuery && (
                  <Badge variant="secondary">
                    Search: &quot;{searchQuery}&quot;
                  </Badge>
                )}

                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="ml-1"
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Results */}
        {filteredPosts.length === 0 ? (
          <section className="container mx-auto px-4 pb-20">
            <div className="rounded-2xl border border-dashed p-12 text-center">
              <Search className="mx-auto mb-4 h-10 w-10 text-muted-foreground" />

              <h2 className="text-2xl font-semibold">
                No articles found
              </h2>

              <p className="mt-2 text-muted-foreground">
                Try another search term or select a different category.
              </p>

              <Button
                type="button"
                onClick={clearFilters}
                className="mt-5"
              >
                View All Articles
              </Button>
            </div>
          </section>
        ) : (
          <>
            {/* Featured */}
            {featuredPosts.length > 0 && (
              <section className="container mx-auto px-4 pb-16">
                <div className="mb-8 flex items-end justify-between gap-4">
                  <div>
                    <p className="mb-2 text-sm font-medium text-primary">
                      SELECTED WORK
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight">
                      Featured Articles
                    </h2>
                  </div>

                  <span className="hidden text-sm text-muted-foreground sm:block">
                    {featuredPosts.length} featured{" "}
                    {featuredPosts.length === 1 ? "article" : "articles"}
                  </span>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                  {featuredPosts.map((post) => (
                    <Card
                      key={post.id}
                      className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                      <a
                        href={post.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Read ${post.title}`}
                      >
                        <div className="relative h-56 overflow-hidden sm:h-64">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            unoptimized
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                          <Badge className="absolute left-4 top-4">
                            Featured
                          </Badge>
                        </div>
                      </a>

                      <CardHeader>
                        <div className="mb-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <Badge variant="secondary">
                            {post.category}
                          </Badge>

                          <div className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {new Date(post.date).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              }
                            )}
                          </div>

                          <div className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {post.readTime}
                          </div>
                        </div>

                        <CardTitle className="text-xl leading-snug transition-colors group-hover:text-primary sm:text-2xl">
                          <a
                            href={post.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {post.title}
                          </a>
                        </CardTitle>
                      </CardHeader>

                      <CardContent>
                        <p className="mb-5 leading-7 text-muted-foreground">
                          {post.excerpt}
                        </p>

                        <Button
                          variant="ghost"
                          className="group/btn h-auto p-0"
                          asChild
                        >
                          <a
                            href={post.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Read Article
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* Recent */}
            {recentPosts.length > 0 && (
              <section className="container mx-auto px-4 pb-20">
                <div className="mb-8">
                  <p className="mb-2 text-sm font-medium text-primary">
                    MORE PROJECTS
                  </p>

                  <h2 className="text-3xl font-bold tracking-tight">
                    Recent Articles
                  </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {recentPosts.map((post) => (
                    <Card
                      key={post.id}
                      className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                      <a
                        href={post.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Read ${post.title}`}
                      >
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            unoptimized
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>
                      </a>

                      <CardHeader>
                        <div className="mb-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                          <Badge variant="secondary">
                            {post.category}
                          </Badge>

                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(post.date).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              }
                            )}
                          </div>
                        </div>

                        <CardTitle className="text-lg leading-snug transition-colors group-hover:text-primary">
                          <a
                            href={post.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {post.title}
                          </a>
                        </CardTitle>
                      </CardHeader>

                      <CardContent>
                        <p className="mb-5 line-clamp-3 text-sm leading-6 text-muted-foreground">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Clock className="h-3.5 w-3.5" />
                            {post.readTime}
                          </span>

                          <Button
                            variant="ghost"
                            size="sm"
                            className="group/btn"
                            asChild
                          >
                            <a
                              href={post.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Read More
                              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  )
}