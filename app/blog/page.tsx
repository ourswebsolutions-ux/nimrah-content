import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, Clock, Search, ArrowRight } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Alina Fatima 's Blog | Content Writing, AI & SEO Insights",
  description:
    "Explore Alina Fatima 's blog for practical insights on content writing, AI tools, paraphrasing, academic writing, copywriting, and SEO content.",
  keywords: [
    "Alina Fatima  blog",
    "content writing",
    "content writing tips",
    "SEO content writing",
    "AI content writing",
    "AI paraphrasing tools",
    "academic writing",
    "copywriting tips",
    "blog writing",
    "SEO copywriting",
    "content writer Pakistan",
    "freelance content writer",
    "professional content writer",
    "AI writing tools",
    "content creation",
  ],
  authors: [{ name: "Alina Fatima " }],
  openGraph: {
    title: "Alina Fatima 's Blog | Content Writing, AI & SEO Insights",
    description:
      "Read Alina Fatima 's latest articles covering content writing, AI-powered writing tools, academic writing, paraphrasing, and copywriting.",
    type: "website",
    url: "https://storycup.vercel.app/blog",
    images: [
      {
        url: "/blog-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alina Fatima  Blog - Content Writing and AI Insights",
      },
    ],
    siteName: "Alina Fatima  Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alina Fatima 's Blog | Content Writing & SEO Insights",
    description:
      "Discover practical content writing, AI writing, SEO, paraphrasing, and copywriting insights from Alina Fatima .",
    images: ["/biography.webp"],
  },
  alternates: {
    canonical: "https://storycup.vercel.app/blog",
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
}

const blogPosts = [
  {
    id: 1,
    title: "The Art of Not Thinking",
    excerpt:
      "An engaging and reflective article exploring overthinking, mindfulness, and the importance of creating mental space in everyday life.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    category: "Lifestyle & Personal Growth",
    date: "2024-04-10",
    readTime: "6 min read",
    liveUrl:
      "https://medium.com/@onecup.oftea/the-art-of-not-thinking-c345efd4fa5c",
    featured: true,
  },

  {
    id: 2,
    title: "5 Daily Habits for Language Fluency",
    excerpt:
      "Discover five practical daily habits that can help language learners improve fluency, build consistency, expand vocabulary, and communicate with greater confidence.",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80",
    category: "Educational Writing",
    date: "2024-04-05",
    readTime: "7 min read",
    liveUrl:
      "https://medium.com/no-time/want-to-speak-any-language-fluently-start-these-5-daily-habits-cd2cec7e9d1f",
    featured: true,
  },

  {
    id: 3,
    title: "I Woke Up at 4:30 AM for 30 Days",
    excerpt:
      "A personal-development article exploring the reality of waking up at 4:30 AM for 30 consecutive days, including challenges, experiences, and lessons learned.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
    category: "Lifestyle Writing",
    date: "2024-03-28",
    readTime: "8 min read",
    liveUrl:
      "https://medium.com/@reshmadudhat29/i-woke-up-at-4-30-am-for-30-days-the-truth-nobody-tells-you-b704f0f86c3b",
    featured: true,
  },

  {
    id: 4,
    title: "Faith, Love & Identity in Adulthood",
    excerpt:
      "An honest and thoughtful piece discussing faith, relationships, identity, and personal growth through the different experiences of adulthood.",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
    category: "Feature Writing",
    date: "2024-03-20",
    readTime: "8 min read",
    liveUrl:
      "https://educationbeing.com/talking-about-the-hard-things-faith-love-and-identity-in-adulthood-honest-review/",
    featured: false,
  },

  {
    id: 5,
    title: "Replacement Diplomas & College Degrees",
    excerpt:
      "An informational article covering replacement diplomas and college degrees, presented in a clear, structured, and reader-friendly format.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    category: "Informational Content",
    date: "2024-03-15",
    readTime: "7 min read",
    liveUrl:
      "https://educationbeing.com/buy-fast-and-realistic-looking-replacement-diplomas-and-college-degrees/",
    featured: false,
  },

  {
    id: 6,
    title: "AI Tools for Better Content Creation",
    excerpt:
      "Explore how modern AI tools can support writers during research, drafting, editing, and content refinement while maintaining quality and originality.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    category: "AI & Content",
    date: "2024-03-10",
    readTime: "6 min read",
    liveUrl:
      "https://www.jornaldobairroalto.com.br/",
    featured: false,
  },

  {
    id: 7,
    title: "Effective SEO Content for Better Online Visibility",
    excerpt:
      "A practical look at creating relevant, useful, and search-friendly content that helps websites communicate their value while improving organic visibility.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    category: "SEO & Content Writing",
    date: "2024-03-05",
    readTime: "7 min read",
    liveUrl:
      "https://jornaldobairroalto.com.br/",
    featured: false,
  },

  {
    id: 8,
    title: "Building Quality Content Through Research & Strategy",
    excerpt:
      "Discover how research, audience understanding, content planning, and SEO principles work together to create valuable and engaging online content.",
    image:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1200&q=80",
    category: "Content Strategy",
    date: "2024-02-28",
    readTime: "6 min read",
    liveUrl:
      "https://www.bankingsupport.info/",
    featured: false,
  },
]

const categories = [
  "All",
  "AI & Education",
  "Academic Writing",
  "Content Writing",
  "AI & Content",
  "AI Writing",
  "Copywriting",
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const recentPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Writing Insights & Tips
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore Alina Fatima 's writing insights, AI content strategies,
            academic writing tips, copywriting techniques, and practical ideas
            for creating better content.
          </p>
        </section>

        {/* Search and Categories */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />

              <Input
                placeholder="Search articles..."
                className="pl-10"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  size="sm"
                  className="hover:bg-primary hover:text-blue-foreground"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            Featured Articles
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />

                  <Badge className="absolute top-4 left-4">
                    Featured
                  </Badge>
                </div>

                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <Badge variant="secondary">
                      {post.category}
                    </Badge>

                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>

                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>

                  <CardTitle className="text-xl hover:text-blue transition-colors">
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
                  <p className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>

                  <Button
                    variant="ghost"
                    className="p-0 h-auto"
                    asChild
                  >
                    <a
                      href={post.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recent Posts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            Recent Articles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <Badge variant="secondary">
                      {post.category}
                    </Badge>

                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>

                  <CardTitle className="text-lg hover:text-blue transition-colors">
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
                  <p className="text-muted-foreground mb-4 text-sm">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>

                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                    >
                      <a
                        href={post.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read More
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}