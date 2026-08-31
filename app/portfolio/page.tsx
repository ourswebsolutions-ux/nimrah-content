
import Image from "next/image"
import Link from "next/link"
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
import { ExternalLink } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Alina Fatima 's Portfolio | Professional Content Writing",
  description:
    "Explore Alina Fatima 's professional writing portfolio featuring website content, SEO copywriting, YouTube scripts, LinkedIn content, email campaigns, product descriptions, and press releases.",
  keywords: [
    "Alina Fatima  portfolio",
    "content writing portfolio",
    "SEO content writer",
    "professional content writer",
    "website content writer",
    "SEO copywriter",
    "YouTube script writer",
    "LinkedIn content writer",
    "email copywriter",
    "product description writer",
    "press release writer",
    "content writer Pakistan",
    "freelance content writer",
    "copywriting portfolio",
    "digital content writer",
  ],
  authors: [{ name: "Alina Fatima " }],
  openGraph: {
    title: "Alina Fatima 's Portfolio | Professional Content Writing",
    description:
      "A selection of professional content writing projects including website copy, SEO content, scripts, social media campaigns, email marketing, and product content.",
    type: "website",
    url: "https://storycup.vercel.app/portfolio",
    images: [
      {
        url: "/worldwideartical.jpg",
        width: 1200,
        height: 630,
        alt: "Alina Fatima  Content Writing Portfolio",
      },
    ],
    siteName: "Alina Fatima  Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alina Fatima 's Portfolio | Content Writing",
    description:
      "Explore professional content writing, SEO copywriting, scripts, campaigns, product content, and website copy.",
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
      name: "Alina Fatima 's Content Writing Portfolio",
      author: {
        "@type": "Person",
        name: "Alina Fatima ",
      },
      url: "https://storycup.vercel.app/portfolio",
      description:
        "Professional content writing portfolio featuring website copy, SEO copywriting, YouTube scripts, LinkedIn content, email campaigns, product descriptions, and press releases.",
    }),
  },
}

const projects = [
  {
    id: 1,
    title: "The Art of Not Thinking",
    description:
      "A reflective and engaging article exploring the importance of slowing down, reducing overthinking, and developing a healthier relationship with thoughts and everyday life.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    category: "Article Writing",
    technologies: [
      "Content Writing",
      "Research",
      "Storytelling",
      "Medium",
    ],
    liveUrl:
      "https://medium.com/@onecup.oftea/the-art-of-not-thinking-c345efd4fa5c",
    featured: true,
  },

  {
    id: 2,
    title: "5 Daily Habits for Language Fluency",
    description:
      "Created a practical and reader-friendly article sharing five daily habits that can help learners improve language fluency, consistency, vocabulary, and communication skills.",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80",
    category: "Educational Content",
    technologies: [
      "Blog Writing",
      "Educational Writing",
      "Research",
      "SEO Content",
    ],
    liveUrl:
      "https://medium.com/no-time/want-to-speak-any-language-fluently-start-these-5-daily-habits-cd2cec7e9d1f",
    featured: true,
  },

  {
    id: 3,
    title: "30-Day 4:30 AM Experiment",
    description:
      "A long-form personal development article documenting the experience of waking up at 4:30 AM for 30 days, with practical insights, challenges, observations, and lessons learned.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
    category: "Lifestyle Writing",
    technologies: [
      "Long-Form Writing",
      "Storytelling",
      "Research",
      "Medium",
    ],
    liveUrl:
      "https://medium.com/@reshmadudhat29/i-woke-up-at-4-30-am-for-30-days-the-truth-nobody-tells-you-b704f0f86c3b",
    featured: true,
  },

  {
    id: 4,
    title: "Faith, Love & Identity in Adulthood",
    description:
      "An honest and thoughtful piece discussing the complexities of faith, love, identity, and personal growth during adulthood while connecting with readers through relatable storytelling.",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
    category: "Feature Writing",
    technologies: [
      "Article Writing",
      "Storytelling",
      "Research",
      "Editorial Content",
    ],
    liveUrl:
      "https://educationbeing.com/talking-about-the-hard-things-faith-love-and-identity-in-adulthood-honest-review/",
    featured: true,
  },

  {
    id: 5,
    title: "Replacement Diplomas & College Degrees",
    description:
      "Developed detailed informational content covering replacement diplomas and college degrees, structured to provide clear information while maintaining an engaging and easy-to-read format.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    category: "Informational Content",
    technologies: [
      "SEO Writing",
      "Research",
      "Web Content",
      "Informational Writing",
    ],
    liveUrl:
      "https://educationbeing.com/buy-fast-and-realistic-looking-replacement-diplomas-and-college-degrees/",
    featured: false,
  },

  {
    id: 6,
    title: "SEO Website Content",
    description:
      "Created search-engine-friendly website content focused on clear communication, keyword relevance, user engagement, and improving organic search visibility.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    category: "Website Content",
    technologies: [
      "SEO Writing",
      "Keyword Research",
      "Website Copy",
      "On-Page SEO",
    ],
    liveUrl:
      "https://www.bankingsupport.info/",
    featured: false,
  },

  {
    id: 7,
    title: "SEO Article & Guest Posting Content",
    description:
      "Produced quality SEO-focused articles designed for guest posting and off-page SEO campaigns, with an emphasis on relevance, readability, keyword placement, and link-building objectives.",
    image:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1200&q=80",
    category: "Guest Posting",
    technologies: [
      "Guest Posting",
      "SEO Writing",
      "Link Building",
      "Article Writing",
    ],
    liveUrl:
      "https://jornaldobairroalto.com.br/",
    featured: false,
  },

  {
    id: 8,
    title: "Professional SEO Content & Outreach",
    description:
      "Developed optimized written content and supported outreach-focused campaigns with attention to search visibility, content quality, relevance, and authority-building strategies.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    category: "SEO & Outreach",
    technologies: [
      "SEO",
      "Content Writing",
      "Outreach",
      "Link Building",
    ],
    liveUrl:
      "https://jornaljoseensenews.com.br/",
    featured: false,
  },
]
export default function PortfolioPage() {
  const categories = [
    "All",
    "Website Content",
    "Scripts",
    "Social Media",
    "E-Commerce",
    "Email Marketing",
    "Press Releases",
    "Real Estate",
    "Documentation",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            My Portfolio
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of professional writing projects across website
            content, SEO copywriting, scripts, personal branding,
            marketing campaigns, product content, and technical writing.
          </p>
        </section>

        {/* Project Categories */}
        <Tabs defaultValue="All" className="mb-12">

          <TabsList className="flex flex-wrap h-auto gap-1 w-full max-w-5xl mx-auto justify-center">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {projects
                  .filter(
                    (project) =>
                      category === "All" ||
                      project.category === category
                  )
                  .map((project) => (

                    <Card
                      key={project.id}
                      className="overflow-hidden hover:shadow-lg transition-shadow"
                    >

                      {/* Project Image */}
                      <div className="relative h-48">

                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />

                        {project.featured && (
                          <Badge className="absolute top-4 left-4">
                            Featured
                          </Badge>
                        )}

                      </div>

                      <CardHeader>

                        <div className="flex items-center justify-between">
                          <Badge variant="secondary">
                            {project.category}
                          </Badge>
                        </div>

                        <CardTitle className="text-xl">
                          {project.title}
                        </CardTitle>

                      </CardHeader>

                      <CardContent>

                        <p className="text-muted-foreground mb-4">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">

                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}

                        </div>

                        <div className="flex gap-2">

                          <Button size="sm" asChild>
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="mr-2 h-3 w-3" />
                              View Work
                            </a>
                          </Button>

                        </div>

                      </CardContent>

                    </Card>

                  ))}

              </div>

            </TabsContent>
          ))}

        </Tabs>

        {/* Call to Action */}
        <section className="text-center py-16">

          <Card className="max-w-2xl mx-auto">

            <CardContent className="p-8">

              <h2 className="text-2xl font-bold mb-4">
                Have a Writing Project in Mind?
              </h2>

              <p className="text-muted-foreground mb-6">
                Whether you need website content, SEO copywriting,
                scripts, marketing copy, or professional business
                content, let's create something valuable together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">

                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get In Touch
                  </Link>
                </Button>

                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">
                    View Services
                  </Link>
                </Button>

              </div>

            </CardContent>

          </Card>

        </section>

      </div>

      <Footer />
    </div>
  )
}
