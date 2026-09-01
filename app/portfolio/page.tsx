
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
  title: "MUNEEBA KIRAN 's Portfolio | Professional Content Writing",
  description:
    "Explore MUNEEBA KIRAN 's professional writing portfolio featuring website content, SEO copywriting, YouTube scripts, LinkedIn content, email campaigns, product descriptions, and press releases.",
  keywords: [
    "MUNEEBA KIRAN  portfolio",
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
  authors: [{ name: "MUNEEBA KIRAN " }],
  openGraph: {
    title: "MUNEEBA KIRAN 's Portfolio | Professional Content Writing",
    description:
      "A selection of professional content writing projects including website copy, SEO content, scripts, social media campaigns, email marketing, and product content.",
    type: "website",
    url: "https://storycup.vercel.app/portfolio",
    images: [
      {
        url: "/worldwideartical.jpg",
        width: 1200,
        height: 630,
        alt: "MUNEEBA KIRAN  Content Writing Portfolio",
      },
    ],
    siteName: "MUNEEBA KIRAN  Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "MUNEEBA KIRAN 's Portfolio | Content Writing",
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
      name: "MUNEEBA KIRAN 's Content Writing Portfolio",
      author: {
        "@type": "Person",
        name: "MUNEEBA KIRAN ",
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
    title: "Understanding Imposter Syndrome: What Your Mind Is Trying to Tell You",
    description:
      "A compassionate, science-backed explainer on anxiety responses that demystifies the fight-or-flight mechanism for general readers, with practical coping strategies woven throughout.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1cfe4dcfbc2d?auto=format&fit=crop&w=1200&q=80",
    category: "Mental Health Blog",
    technologies: [
      "Mental Health Writing",
      "Clinical Accuracy",
      "Empathetic Storytelling",
      "Science Communication",
    ],
    liveUrl:
      "https://docs.google.com/document/d/1D2vuOiiOg5bgsufwXNs61sU68v907ZyK/edit?usp=drivesdk&ouid=110211900788976801549&rtpof=true&sd=true",
    featured: true,
  },

  {
    id: 2,
    title: "Understanding Withdrawal Symptoms: What Is Happening Inside Your Body",
    description:
      "An SEO-optimised pillar article targeting high-volume wellness keywords. Structured for featured snippets with expert citations, internal linking, and a clear content hierarchy.",
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde9bd1c?auto=format&fit=crop&w=1200&q=80",
    category: "SEO Article",
    technologies: [
      "SEO Writing",
      "Wellness Content",
      "Keyword Research",
      "Pillar Content",
    ],
    liveUrl:
      "https://docs.google.com/document/d/1D2vuOiiOg5bgsufwXNs61sU68v907ZyK/edit?usp=drivesdk&ouid=110211900788976801549&rtpof=true&sd=true",
    featured: true,
  },

  {
    id: 3,
    title: "Brand Voice & Social Media Copy for a Wellness Startup",
    description:
      "Developed a full content suite including Instagram captions, ad copy, and email sequences — maintaining a warm, professional tone aligned with the brand’s audience of young professionals.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e11e67a7?auto=format&fit=crop&w=1200&q=80",
    category: "Copywriting Campaign",
    technologies: [
      "Copywriting",
      "Social Media Copy",
      "Brand Voice",
      "Email Sequences",
    ],
    liveUrl:
      "https://docs.google.com/document/d/1Kg2ATKhtgqGSMAWTzPyed8hA6sCkvglY/edit?usp=drivesdk&ouid=110211900788976801549&rtpof=true&sd=true",
    featured: true,
  },

  {
    id: 4,
    title: "Neurodevelopmental Parent Guides & FAQs",
    description:
      "Empathetic, accessible written resources for parents and caregivers of children with ADHD, Autism Spectrum Disorder, and other neurodevelopmental conditions — explaining complex diagnostic processes in plain, stigma-free language.",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80",
    category: "Psychoeducational Content",
    technologies: [
      "Parent Resources",
      "Clinical Translation",
      "ADHD & ASD Content",
      "Accessible Writing",
    ],
    liveUrl:
      "https://docs.google.com/document/d/1D2vuOiiOg5bgsufwXNs61sU68v907ZyK/edit?usp=drivesdk&ouid=110211900788976801549&rtpof=true&sd=true",
    featured: true,
  },

  {
    id: 5,
    title: "Mental Health & Behavioural Health Blog Series",
    description:
      "SEO-optimised blog articles, landing pages, and patient guides on mental health, psychology, and behavioural health written for digital health platforms serving international and UK audiences.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    category: "SEO Content Writing",
    technologies: [
      "SEO Content",
      "Mental Health Writing",
      "Patient Guides",
      "On-Page SEO",
    ],
    liveUrl:
      "https://docs.google.com/document/d/1Kg2ATKhtgqGSMAWTzPyed8hA6sCkvglY/edit?usp=drivesdk&ouid=110211900788976801549&rtpof=true&sd=true",
    featured: false,
  },

  {
    id: 6,
    title: "UK Healthcare & Neurodevelopmental Landing Pages",
    description:
      "Clear, clinically accurate, and stigma-free website content and FAQs focused on ADHD, Autism assessments, and family support — written in British English with UK healthcare terminology.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999f0?auto=format&fit=crop&w=1200&q=80",
    category: "Website Content",
    technologies: [
      "UK Healthcare Writing",
      "British English",
      "Landing Pages",
      "Clinical Accuracy",
    ],
    liveUrl:
      "https://docs.google.com/document/d/1D2vuOiiOg5bgsufwXNs61sU68v907ZyK/edit?usp=drivesdk&ouid=110211900788976801549&rtpof=true&sd=true",
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
