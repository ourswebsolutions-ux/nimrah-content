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
  title: "About MUNEEBA KIRAN | Clinical Psychologist & Neurodevelopmental Content Writer",
  description:
    "Learn about MUNEEBA KIRAN, a PMDCAP-qualified Senior Clinical Psychologist and Neurodevelopmental Content Writer from Karachi, Pakistan with 7+ years of clinical experience in ADHD, ASD, and neurodevelopmental assessment, combined with SEO content writing for UK healthcare platforms.",
  keywords: [
    "MUNEEBA KIRAN",
    "Clinical Psychologist",
    "Neurodevelopmental Content Writer",
    "UK Healthcare SEO",
    "ADHD Content Writer",
    "Autism Content Writer",
    "SEO Content Writer",
    "Mental Health Content Writer",
    "Clinical Psychologist Pakistan",
    "Neurodevelopmental Assessment",
    "ADHD ASD Content",
    "Healthcare SEO Writer",
    "British English Content Writer",
    "Remote Clinical Content Writer",
  ],
  authors: [{ name: "MUNEEBA KIRAN" }],
  openGraph: {
    title: "About MUNEEBA KIRAN | Clinical Psychologist & Neurodevelopmental Content Writer",
    description:
      "Discover MUNEEBA KIRAN's professional experience as a PMDCAP-qualified Clinical Psychologist specialising in neurodevelopmental content writing and UK healthcare SEO.",
    type: "website",
    url: "https://storycup.vercel.app/about",
    images: [
      {
        url: "/about-dp.jpeg",
        width: 1200,
        height: 630,
        alt: "MUNEEBA KIRAN - Clinical Psychologist & Neurodevelopmental Content Writer",
      },
    ],
    siteName: "MUNEEBA KIRAN Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "About MUNEEBA KIRAN | Clinical Psychologist & Neurodevelopmental Content Writer",
    description:
      "Learn about MUNEEBA KIRAN's experience in clinical psychology, neurodevelopmental assessment, and SEO content writing for UK healthcare platforms.",
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
      name: "MUNEEBA KIRAN",
      jobTitle: "Clinical Psychologist & Neurodevelopmental Content Writer",
      url: "https://storycup.vercel.app/about",
      email: "muneeba_kiran126@hotmail.com",
      telephone: "+92 334 3256312",
      description:
        "MUNEEBA KIRAN is a PMDCAP-qualified Senior Clinical Psychologist from Karachi, Pakistan with 7+ years of clinical experience in ADHD, Autism Spectrum Disorder, and neurodevelopmental assessment, combined with professional SEO content writing for UK healthcare platforms.",
      sameAs: [],
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
              alt="MUNEEBA KIRAN"
              fill
              className="rounded-full border-4 border-primary/20 object-cover"
            />
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            About Me
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I’m MUNEEBA KIRAN, a PMDCAP-qualified Senior Clinical Psychologist and Neurodevelopmental Content Writer from Karachi, Pakistan. With 7+ years of hands-on clinical experience in ADHD, Autism Spectrum Disorder (ASD), Cerebral Palsy, and Global Developmental Delay, combined with 2+ years of professional SEO content writing for digital health platforms, I specialise in translating complex neurodevelopmental and psychological concepts into warm, accessible, stigma-free content for UK audiences — without sacrificing clinical accuracy.
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
                    <CardTitle>Mental Health Content Writer</CardTitle>
                    <p className="text-muted-foreground">
                      Techmetixs Solution • Jan 2025 – Sep 2025
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Wrote SEO-optimised blog articles, landing pages, FAQs, and patient guides on mental health, psychology, and behavioural health for a digital health platform. Implemented on-page SEO best practices and consistently produced original, well-researched 800–1,500-word articles to weekly deadlines.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">SEO Content Writing</Badge>
                  <Badge variant="secondary">Mental Health Content</Badge>
                  <Badge variant="secondary">Patient Guides</Badge>
                  <Badge variant="secondary">On-Page SEO</Badge>
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
                    <CardTitle>Remote Psychologist & Clinical Assessor</CardTitle>
                    <p className="text-muted-foreground">
                      Helping Hands Organization • Feb 2024 – Present
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Delivering teletherapy and psychological assessments including neurodevelopmental presentations, ADHD, anxiety, and complex adjustment disorders. Providing clinical supervision to mental health trainees on assessment procedures and report writing.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Teletherapy</Badge>
                  <Badge variant="secondary">Neurodevelopmental Assessment</Badge>
                  <Badge variant="secondary">Clinical Supervision</Badge>
                  <Badge variant="secondary">ADHD & Anxiety</Badge>
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
                    <CardTitle>Senior Clinical Psychologist — Field Team Lead</CardTitle>
                    <p className="text-muted-foreground">
                      Helping Hands Pakistan • Sep 2023 – Mar 2024
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Managed a high-complexity caseload of children with Autism Spectrum Disorder, Cerebral Palsy, ADHD, and Global Developmental Delay. Designed culturally adapted psychoeducational content for families of children with neurodevelopmental conditions.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">ASD & ADHD</Badge>
                  <Badge variant="secondary">Cerebral Palsy</Badge>
                  <Badge variant="secondary">Psychoeducational Content</Badge>
                  <Badge variant="secondary">Team Leadership</Badge>
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
                    <span>Neurodevelopmental Content</span>
                    <span>96%</span>
                  </div>
                  <Progress value={96} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Clinical-to-Accessible Translation</span>
                    <span>94%</span>
                  </div>
                  <Progress value={94} />
                </div>

              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Clinical Expertise
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">

                <div>
                  <div className="flex justify-between mb-2">
                    <span>ADHD & ASD Assessment</span>
                    <span>95%</span>
                  </div>
                  <Progress value={95} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Neurodevelopmental Assessment</span>
                    <span>93%</span>
                  </div>
                  <Progress value={93} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Psychoeducational Resources</span>
                    <span>92%</span>
                  </div>
                  <Progress value={92} />
                </div>

              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  SEO & Tools
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
                    <span>Keyword Research</span>
                    <span>88%</span>
                  </div>
                  <Progress value={88} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>UK Healthcare Terminology</span>
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
                      Post-Magisterial Diploma in Counselling, Psychotherapy & Psychological Assessment (PMDCAP)
                    </CardTitle>
                    <p className="text-muted-foreground">
                      University of Karachi • 2023 – 2024
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Registered clinical qualification with clinical rotations spanning hospitals, orphanages, and schools, including high-volume neurodevelopmental assessment fieldwork.
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
                    <CardTitle>Master of Arts in Psychology</CardTitle>
                    <p className="text-muted-foreground">
                      University of Karachi • 2017
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Specialisation in Industrial Psychology, Career Counselling & Organisational Behaviour. Built a strong foundation in psychological assessment, research, and clinical communication.
                </p>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Awards / Clinical Background Highlights */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Clinical & Content Highlights
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-blue" />
                  </div>

                  <div>
                    <CardTitle>Neurodevelopmental Assessment Expertise</CardTitle>
                    <p className="text-muted-foreground">
                      Clinical Practice
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Experienced in conducting and interpreting standardised neurodevelopmental assessments using internationally validated tools including CAT-A, HTP, HFD, SIT, and the Bender Gestalt.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">CAT-A</Badge>
                  <Badge variant="secondary">Bender Gestalt</Badge>
                  <Badge variant="secondary">Assessment Tools</Badge>
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
                    <CardTitle>Psychoeducational Content Development</CardTitle>
                    <p className="text-muted-foreground">
                      Family-Facing Resources
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Developed empathetic, accessible written resources and parent-facing guides explaining complex diagnostic processes and neurodevelopmental conditions in plain, compassionate language.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Parent Guides</Badge>
                  <Badge variant="secondary">FAQs</Badge>
                  <Badge variant="secondary">Stigma-Free Writing</Badge>
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
                    <CardTitle>School Mental Health Consultancy</CardTitle>
                    <p className="text-muted-foreground">
                      IQRA Secondary School • 2017 – 2023
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Implemented child safeguarding and neurodevelopmental support frameworks across a full school population and facilitated parent workshops on behavioural and developmental challenges.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Safeguarding</Badge>
                  <Badge variant="secondary">Parent Workshops</Badge>
                  <Badge variant="secondary">School Mental Health</Badge>
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
                    <CardTitle>UK Healthcare Content Focus</CardTitle>
                    <p className="text-muted-foreground">
                      British English & NHS Terminology
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Proficient in British English spelling, grammar, and UK healthcare terminology. Available remotely from Pakistan and fully flexible to commit to UK business hours.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">British English</Badge>
                  <Badge variant="secondary">UK Healthcare SEO</Badge>
                  <Badge variant="secondary">Remote Work</Badge>
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
                  "ADHD & Autism Assessment Guides",
                  "Neurodevelopmental Parent Resources",
                  "Mental Health Blog Articles",
                  "Patient FAQs & Landing Pages",
                  "Psychoeducational Content for Families",
                  "Clinical Assessment Reports",
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