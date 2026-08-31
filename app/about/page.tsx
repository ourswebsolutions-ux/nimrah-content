
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Award, GraduationCap, Briefcase } from "lucide-react"
import type { Metadata } from "next"
import { DownloadResumeButton } from "@/components/DownloadResumeButton"

export const metadata: Metadata = {
  title: "About Alina Rajput | SEO & Content Writing Specialist",
  description:
    "Learn about Alina Rajput, an SEO & Content Writing Specialist from Okara, Pakistan with 2-3 years of freelance experience in SEO content writing, guest posting, outreach, and link building.",
  keywords: [
    "Alina Rajput",
    "SEO Content Writer",
    "SEO Specialist",
    "Content Writer",
    "Content Writing Specialist",
    "SEO writer Pakistan",
    "content writer Pakistan",
    "freelance SEO writer",
    "guest posting",
    "link building",
    "SEO content writing",
    "off-page SEO",
    "on-page SEO",
    "blog writer",
    "website content writer",
    "SEO outreach",
  ],
  authors: [{ name: "Alina Rajput" }],
  openGraph: {
    title: "About Alina Rajput | SEO & Content Writing Specialist",
    description:
      "Discover Alina Rajput's professional experience, SEO skills, content writing expertise, education, and published work.",
    type: "website",
    url: "https://storycup.vercel.app/about",
    images: [
      {
        url: "/about-dp.jpeg",
        width: 1200,
        height: 630,
        alt: "Alina Rajput - SEO & Content Writing Specialist",
      },
    ],
    siteName: "Alina Rajput Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Alina Rajput | SEO & Content Writing Specialist",
    description:
      "Learn about Alina Rajput's experience in SEO content writing, guest posting, outreach, and link building.",
    images: ["/about-dp.jpeg"],
  },
  alternates: {
    canonical: "https://storycup.vercel.app/about",
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
      "@type": "Person",
      name: "Alina Rajput",
      jobTitle: "SEO & Content Writing Specialist",
      url: "https://storycup.vercel.app/about",
      email: "alinarajput458@gmail.com",
      telephone: "+92 326 552 5303",
      description:
        "Alina Rajput is an SEO and content professional from Okara, Pakistan with 2-3 years of freelance experience in SEO content writing, guest posting, outreach, and link building.",
      sameAs: [
        "https://www.linkedin.com/in/mahnoor-siddiqui-4725352a4/",
      ],
    }),
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">

        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <Image
              src="/about-dp.jpeg"
              alt="Alina Rajput"
              fill
              className="rounded-full border-4 border-primary/20 object-cover"
            />
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            About Me
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I’m Alina Rajput, an SEO & Content Writing Specialist from Okara,
            Pakistan with 2-3 years of freelance experience. I specialize in
            creating SEO-friendly blogs and website content, guest posting,
            outreach, and quality link building. My goal is to create
            valuable, engaging content while helping businesses improve their
            online visibility, search rankings, and digital presence.
          </p>

          <DownloadResumeButton />
        </section>

        {/* Professional Journey */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Professional Journey
          </h2>

          <div className="space-y-8">

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-blue" />
                  </div>

                  <div>
                    <CardTitle>Freelance SEO & Content Writer</CardTitle>
                    <p className="text-muted-foreground">
                      Freelance • 2-3 Years
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Create SEO-optimized content for websites and blogs across
                  multiple niches. Develop engaging and well-researched
                  articles while maintaining quality, relevance, and
                  search-engine-friendly structure.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">SEO Content Writing</Badge>
                  <Badge variant="secondary">Blog Writing</Badge>
                  <Badge variant="secondary">Website Content</Badge>
                  <Badge variant="secondary">SEO Copywriting</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-blue" />
                  </div>

                  <div>
                    <CardTitle>Guest Posting & Outreach Specialist</CardTitle>
                    <p className="text-muted-foreground">
                      Freelance • 2-3 Years
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Manage guest posting placements and outreach for client
                  websites by identifying relevant publishing opportunities,
                  communicating with website owners, and maintaining quality
                  placements.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Guest Posting</Badge>
                  <Badge variant="secondary">Outreach</Badge>
                  <Badge variant="secondary">Website Research</Badge>
                  <Badge variant="secondary">Client Management</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-blue" />
                  </div>

                  <div>
                    <CardTitle>Link Building Specialist</CardTitle>
                    <p className="text-muted-foreground">
                      Freelance • 2-3 Years
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Plan and execute link building campaigns focused on
                  relevance and authority. Research suitable websites and
                  maintain a portfolio of websites available for guest posting
                  and link placement opportunities.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Link Building</Badge>
                  <Badge variant="secondary">Off-Page SEO</Badge>
                  <Badge variant="secondary">Backlink Research</Badge>
                  <Badge variant="secondary">Website Authority</Badge>
                </div>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Writing & Content
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">

                <div>
                  <div className="flex justify-between mb-2">
                    <span>SEO Content Writing</span>
                    <span>95%</span>
                  </div>
                  <Progress value={95} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Blog & Article Writing</span>
                    <span>94%</span>
                  </div>
                  <Progress value={94} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Website Content</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} />
                </div>

              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  SEO & Strategy
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">

                <div>
                  <div className="flex justify-between mb-2">
                    <span>On-Page SEO</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Off-Page SEO</span>
                    <span>92%</span>
                  </div>
                  <Progress value={92} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>SEO Research</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} />
                </div>

              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Outreach & Link Building
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Guest Posting</span>
                    <span>95%</span>
                  </div>
                  <Progress value={95} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Outreach</span>
                    <span>92%</span>
                  </div>
                  <Progress value={92} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Link Building</span>
                    <span>94%</span>
                  </div>
                  <Progress value={94} />
                </div>

              </CardContent>
            </Card>

          </div>
        </section>

        {/* Education & Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Education & Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-blue" />
                  </div>

                  <div>
                    <CardTitle>
                      Bachelor of Information Technology
                    </CardTitle>
                    <p className="text-muted-foreground">
                      BBIT • In Progress
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Currently pursuing a Bachelor of Information Technology,
                  developing a strong foundation in technology, digital
                  concepts, research, analytical thinking, and communication.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-blue" />
                  </div>

                  <div>
                    <CardTitle>SEO & Content Writing Experience</CardTitle>
                    <p className="text-muted-foreground">
                      Freelance Professional Experience
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Practical experience in SEO content writing, guest posting,
                  outreach, link building, and creating content designed to
                  support online visibility and business growth.
                </p>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Awards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Published Work Samples
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-blue" />
                  </div>

                  <div>
                    <CardTitle>The Art of Not Thinking</CardTitle>
                    <p className="text-muted-foreground">
                      Medium
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Published writing sample demonstrating engaging,
                  reader-focused storytelling and thoughtful content.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Medium</Badge>
                  <Badge variant="secondary">Article Writing</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-blue" />
                  </div>

                  <div>
                    <CardTitle>5 Daily Habits for Language Fluency</CardTitle>
                    <p className="text-muted-foreground">
                      Medium
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Published article focused on practical habits for improving
                  language fluency and maintaining reader engagement.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Medium</Badge>
                  <Badge variant="secondary">Content Writing</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-blue" />
                  </div>

                  <div>
                    <CardTitle>30-Day 4:30 AM Experiment</CardTitle>
                    <p className="text-muted-foreground">
                      Medium
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Published lifestyle and experience-based content written to
                  create curiosity, engagement, and a strong connection with
                  readers.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Medium</Badge>
                  <Badge variant="secondary">Lifestyle Writing</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-blue" />
                  </div>

                  <div>
                    <CardTitle>Faith, Love & Identity in Adulthood</CardTitle>
                    <p className="text-muted-foreground">
                      Education Being
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Published feature exploring personal identity, relationships,
                  faith, and adulthood through an honest and engaging writing
                  style.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Education Being</Badge>
                  <Badge variant="secondary">Feature Writing</Badge>
                </div>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Selected Projects */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Selected Work
          </h2>

          <Card>
            <CardContent className="p-8">

              <div className="flex flex-wrap justify-center gap-3">

                {[
                  "The Art of Not Thinking",
                  "5 Daily Habits for Language Fluency",
                  "30-Day 4:30 AM Experiment",
                  "Faith, Love & Identity in Adulthood",
                  "Replacement Diplomas & College Degrees",
                ].map((project) => (
                  <Badge
                    key={project}
                    variant="secondary"
                    className="text-sm px-4 py-2"
                  >
                    {project}
                  </Badge>
                ))}

              </div>

            </CardContent>
          </Card>
        </section>

      </div>

      <Footer />
    </div>
  )
}
