import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ExternalLink, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Nimrah Shahzad | SEO Content Writer & Social Media Strategist Portfolio",
  description:
    "Explore Nimrah Shahzad's professional portfolio featuring Semantic SEO, SEO content writing, website copywriting, SaaS content, fitness and healthcare content, technology writing, social media strategy, and brand content.",
  keywords: [
    "Nimrah Shahzad portfolio",
    "SEO content writer portfolio",
    "Semantic SEO writer",
    "SEO copywriter",
    "content strategist",
    "website content writer",
    "social media strategist",
    "LinkedIn content writer",
    "copywriter Pakistan",
    "SaaS content writer",
    "technology content writer",
    "fitness content writer",
    "healthcare content writer",
    "professional content writer",
    "freelance content writer",
  ],
  authors: [{ name: "Nimrah Shahzad" }],
  openGraph: {
    title: "Nimrah Shahzad | SEO Content Writer & Social Media Strategist",
    description:
      "Explore selected SEO, website, SaaS, technology, healthcare, fitness, and brand content projects by Nimrah Shahzad.",
    type: "website",
    url: "https://storycup.vercel.app/portfolio",
    images: [
      {
        url: "/worldwideartical.jpg",
        width: 1200,
        height: 630,
        alt: "Nimrah Shahzad Portfolio",
      },
    ],
    siteName: "Nimrah Shahzad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nimrah Shahzad | Content Writing Portfolio",
    description:
      "Selected work in Semantic SEO, SEO content, website copywriting, social media, SaaS, technology, and brand content.",
    images: ["/worldwideartical.jpg"],
  },
  alternates: {
    canonical: "https://storycup.vercel.app/portfolio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: "Nimrah Shahzad's Content Writing Portfolio",
      author: {
        "@type": "Person",
        name: "Nimrah Shahzad",
      },
      url: "https://storycup.vercel.app/portfolio",
      description:
        "Professional portfolio featuring Semantic SEO, SEO content writing, website copywriting, social media strategy, SaaS content, technology writing, and brand content.",
    }),
  },
}

const projects = [
  {
    id: 1,
    title: "SEO Content & Website Copy for Home Medicare",
    description:
      "Created SEO-focused website content designed to improve search visibility, communicate healthcare services clearly, and guide visitors toward relevant solutions.",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80",
    category: "Healthcare & Fitness",
    originalCategory: "Healthcare SEO",
    technologies: [
      "SEO Content Writing",
      "Website Copy",
      "On-Page SEO",
      "Search Intent",
    ],
    liveUrl: "https://homemedicare.pk/",
    featured: true,
  },

  {
    id: 2,
    title: "Fitness & Wellness Content for Just Your Fitness",
    description:
      "Produced engaging, SEO-focused fitness content covering health, workouts, and wellness topics while keeping the writing clear, useful, and search-friendly.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    category: "Healthcare & Fitness",
    originalCategory: "Fitness Content",
    technologies: [
      "SEO Writing",
      "Fitness Content",
      "Content Strategy",
      "Keyword Research",
    ],
    liveUrl: "https://justyourfitness.com/",
    featured: true,
  },

  {
    id: 3,
    title: "Crypto News & Content for Australian Crypto Convention",
    description:
      "Created SEO-driven crypto content and informative digital publications covering cryptocurrency, blockchain, and industry trends.",
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=1200&q=80",
    category: "Technology & Media",
    originalCategory: "Crypto Content",
    technologies: [
      "Crypto Writing",
      "SEO Content",
      "News Writing",
      "Research",
    ],
    liveUrl: "https://auscryptocon.com/news-aucryptocon/",
    featured: true,
  },

  {
    id: 4,
    title: "SEO Content for Super Asia Sanitary",
    description:
      "Created SEO-friendly blogs and product-focused content for a sanitary and home products brand, combining search intent with clear product communication.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    category: "E-commerce",
    originalCategory: "E-commerce & Product Content",
    technologies: [
      "SEO Blogs",
      "Product Descriptions",
      "On-Page SEO",
      "Content Strategy",
    ],
    liveUrl: "https://superasiasanitary.com/",
    featured: false,
  },

  {
    id: 5,
    title: "Startup & SaaS Content for Reliable Startup",
    description:
      "Developed niche-focused content for startup audiences across SaaS, fintech, business strategy, and emerging technology topics.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    category: "Business & SaaS",
    originalCategory: "SaaS & Startup Content",
    technologies: [
      "SaaS Writing",
      "Fintech Content",
      "SEO Strategy",
      "Business Writing",
    ],
    liveUrl: "https://reliablestartup.com/",
    featured: true,
  },

  {
    id: 6,
    title: "Semantic SEO Content for BrandClickX",
    description:
      "Created search-intent-driven content using semantic SEO strategies to strengthen topical relevance, improve organic visibility, and target valuable search queries.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    category: "SEO & Content Strategy",
    originalCategory: "Semantic SEO",
    technologies: [
      "Semantic SEO",
      "Search Intent",
      "Keyword Research",
      "SEO Content",
    ],
    liveUrl: "https://brandclickx.com/",
    featured: true,
  },

  {
    id: 7,
    title: "SEO & Website Content for Ultimate Pest Solutions",
    description:
      "Developed conversion-focused website content for a Canadian pest control business, combining SEO best practices with clear service messaging.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    category: "Website & Copywriting",
    originalCategory: "Home Services SEO",
    technologies: [
      "Website Copy",
      "Local SEO",
      "Service Pages",
      "Conversion Copy",
    ],
    liveUrl: "https://ultimatepestsolutions.ca/",
    featured: false,
  },

  {
    id: 8,
    title: "SEO Content & Brand Writing for Avoura",
    description:
      "Authored SEO blogs and guest posts focused on increasing organic traffic, strengthening topical authority, and supporting long-term domain growth.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    category: "SEO & Content Strategy",
    originalCategory: "SEO & Guest Posting",
    technologies: [
      "SEO Blogging",
      "Guest Posting",
      "Content Strategy",
      "Organic Growth",
    ],
    liveUrl: "https://avoura.in/",
    featured: false,
  },

  {
    id: 9,
    title: "SEO Content for Odix Technology",
    description:
      "Produced optimized technology content designed to communicate services clearly while improving search visibility through structured, keyword-focused writing.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    category: "Technology & Media",
    originalCategory: "Technology Content",
    technologies: [
      "Tech Writing",
      "SEO Content",
      "Website Content",
      "Keyword Strategy",
    ],
    liveUrl: "https://odixtech.com/",
    featured: false,
  },

  {
    id: 10,
    title: "SEO News Content for Capslock",
    description:
      "Created SEO-optimized news and trending-topic articles using strategic keywords and search-focused content structures.",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80",
    category: "Technology & Media",
    originalCategory: "News & SEO Writing",
    technologies: [
      "News Writing",
      "SEO",
      "Trending Topics",
      "Keyword Research",
    ],
    liveUrl: "https://capslock.pk/",
    featured: false,
  },

  {
    id: 11,
    title: "Content Strategy for LEAP Saudi Arabia",
    description:
      "Researched and developed clear, compelling content around a major technology event, focusing on audience relevance and effective communication.",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80",
    category: "Business & SaaS",
    originalCategory: "Event Content",
    technologies: [
      "Content Research",
      "Event Content",
      "Copywriting",
      "Content Strategy",
    ],
    liveUrl: "https://onegiantleap.com/",
    featured: true,
  },

  {
    id: 12,
    title: "SEO Content for InHeritageX",
    description:
      "Managed SEO blogging and WordPress content while supporting online visibility through strategic content planning and social media-focused ideas.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    category: "SEO & Content Strategy",
    originalCategory: "SEO & WordPress",
    technologies: [
      "SEO Blogging",
      "WordPress",
      "Content Planning",
      "Social Media Strategy",
    ],
    liveUrl: "https://inheritagex.com/",
    featured: false,
  },

  {
    id: 13,
    title: "Web Content for Exolux Services",
    description:
      "Created engaging and SEO-focused website content supporting brand communication, service positioning, and a stronger online presence.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    category: "Website & Copywriting",
    originalCategory: "Website Content",
    technologies: [
      "Web Copywriting",
      "SEO Writing",
      "Brand Messaging",
      "Content Strategy",
    ],
    liveUrl: "https://exoluxservices.com/",
    featured: false,
  },

  {
    id: 14,
    title: "SEO Content for COMET Estimation",
    description:
      "Created SEO-driven content around construction estimating and business services, focusing on useful information, search visibility, and audience intent.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    category: "Business & SaaS",
    originalCategory: "Construction SEO",
    technologies: [
      "SEO Content",
      "Construction Writing",
      "Search Intent",
      "Website Content",
    ],
    liveUrl: "https://cometestimating.com/",
    featured: false,
  },

  {
    id: 15,
    title: "Outsourcing & SEO Content for Go-Globes",
    description:
      "Developed search-focused B2B content around outsourced SEO services, communicating digital marketing concepts through clear and structured copy.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
    category: "SEO & Content Strategy",
    originalCategory: "Digital Marketing Content",
    technologies: [
      "SEO Writing",
      "Digital Marketing",
      "B2B Content",
      "Search Intent",
    ],
    liveUrl: "https://go-globes.com/outsource-seo-services/",
    featured: false,
  },
]

const categories = [
  "All",
  "SEO & Content Strategy",
  "Website & Copywriting",
  "Business & SaaS",
  "Healthcare & Fitness",
  "Technology & Media",
  "E-commerce",
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="container mx-auto px-4 pt-12 sm:pt-16 lg:pt-20 pb-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Selected Work
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
              My Portfolio
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              A selection of SEO content, website copy, brand strategy,
              business content, technology writing, and industry-focused
              projects created for brands across different markets.
            </p>
          </div>
        </section>

        {/* Portfolio */}
        <section className="container mx-auto px-4 py-10 sm:py-14 lg:py-16">
          <Tabs defaultValue="All" className="w-full">
            <div className="flex justify-center mb-10">
              <TabsList className="h-auto flex flex-wrap justify-center gap-1 p-1 max-w-5xl">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="px-4 py-2 text-sm"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => {
              const filteredProjects =
                category === "All"
                  ? projects
                  : projects.filter(
                      (project) => project.category === category
                    )

              return (
                <TabsContent
                  key={category}
                  value={category}
                  className="mt-0"
                >
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {filteredProjects.map((project) => (
                      <Card
                        key={project.id}
                        className="group overflow-hidden border-border/60 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      >
                        {/* Image */}
                        <div className="relative h-52 overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                          {project.featured && (
                            <Badge className="absolute top-4 left-4">
                              Featured
                            </Badge>
                          )}

                          <Badge
                            variant="secondary"
                            className="absolute bottom-4 left-4 backdrop-blur-sm"
                          >
                            {project.originalCategory}
                          </Badge>
                        </div>

                        {/* Content */}
                        <CardHeader className="pb-3">
                          <CardTitle className="text-xl leading-snug group-hover:text-primary transition-colors">
                            {project.title}
                          </CardTitle>
                        </CardHeader>

                        <CardContent>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map((technology) => (
                              <Badge
                                key={technology}
                                variant="outline"
                                className="text-xs font-normal"
                              >
                                {technology}
                              </Badge>
                            ))}
                          </div>

                          <Button
                            size="sm"
                            className="w-full sm:w-auto"
                            asChild
                          >
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Published Work
                              <ExternalLink className="ml-2 h-3.5 w-3.5" />
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {filteredProjects.length === 0 && (
                    <div className="text-center py-16">
                      <p className="text-muted-foreground">
                        No projects available in this category yet.
                      </p>
                    </div>
                  )}
                </TabsContent>
              )
            })}
          </Tabs>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-16 lg:py-20">
          <Card className="max-w-4xl mx-auto overflow-hidden">
            <CardContent className="p-8 sm:p-10 lg:p-12 text-center">
              <Badge variant="secondary" className="mb-4">
                Let's Work Together
              </Badge>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Have a Content Project in Mind?
              </h2>

              <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                Need SEO content, website copy, social media strategy,
                business content, or a complete content strategy? Let's
                create content that gives your brand a stronger digital
                presence.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get In Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">
                    Explore Services
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  )
}