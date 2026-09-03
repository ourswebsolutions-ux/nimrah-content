
import Image from "next/image";
import type { Metadata } from "next";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DownloadResumeButton } from "@/components/DownloadResumeButton";

import {
  Award,
  Briefcase,
  GraduationCap,
  MapPin,
  PenTool,
  Search,
  Share2,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Nimrah Shahzad | Semantic SEO Writer & Social Media Strategist",
  description:
    "Learn about Nimrah Shahzad, a Semantic SEO Writer, Social Media Strategist and Copywriter with 6 years of experience in content strategy, SEO, LinkedIn management, social media and brand growth.",
  keywords: [
    "Nimrah Shahzad",
    "Semantic SEO Writer",
    "SEO Content Writer",
    "Social Media Strategist",
    "Copywriter",
    "Content Strategist",
    "LinkedIn Strategist",
    "LinkedIn Management",
    "Social Media Management",
    "SEO Writer",
    "Website Copywriter",
    "Content Strategy",
    "Social Media Community Management",
    "Pakistan Content Writer",
    "Remote Content Writer",
  ],
  authors: [{ name: "Nimrah Shahzad" }],
  openGraph: {
    title: "About Nimrah Shahzad | Semantic SEO Writer & Social Media Strategist",
    description:
      "Nimrah Shahzad is a Semantic SEO Writer, Social Media Strategist and Copywriter with 6 years of experience helping brands grow through strategic content, SEO and social media.",
    type: "website",
    url: "https://storycup.vercel.app/about",
    images: [
      {
        url: "/about-dp.jpeg",
        width: 1200,
        height: 630,
        alt: "Nimrah Shahzad - Semantic SEO Writer & Social Media Strategist",
      },
    ],
    siteName: "Nimrah Shahzad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Nimrah Shahzad | Semantic SEO Writer & Social Media Strategist",
    description:
      "Discover Nimrah Shahzad's experience in Semantic SEO, content strategy, copywriting, social media and LinkedIn brand management.",
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
      name: "Nimrah Shahzad",
      jobTitle:
        "Semantic SEO Writer, Social Media Strategist & Copywriter",
      url: "https://storycup.vercel.app/about",
      email: "nimrashahzad234@gmail.com",
      telephone: "+923090801457",
      description:
        "Nimrah Shahzad is a Semantic SEO Writer, Social Media Strategist and Copywriter with 6 years of experience in SEO content, social media strategy, LinkedIn management, copywriting and brand growth.",
      sameAs: [
        "https://www.upwork.com/freelancers/~0134bf4077991b2bfb",
        "https://www.linkedin.com/in/nimrah-shahzad",
        "https://substack.com/@nimrahshahzad",
        "https://www.fiverr.com/s/aexqPe8",
        "https://www.reddit.com/user/new-cow-5539",
        "https://x.com/nimrashahzad234",
        "https://www.facebook.com/nimrah.shahzad.1216",
        "https://www.quora.com/profile/Nimra-Shahzad-62",
      ],
    }),
  },
};

const experiences = [
  {
    company: "Nytrikx",
    role: "LinkedIn Strategist",
    location: "United Kingdom",
    date: "May 2026 ",
    description:
      "Managing LinkedIn profiles, developing content strategies, supporting lead generation, and driving organic brand growth through consistent and strategic LinkedIn activity.",
    tags: [
      "LinkedIn Strategy",
      "Content Strategy",
      "Lead Generation",
      "Brand Growth",
    ],
    link: "https://www.linkedin.com/company/nytrikx/",
  },

  {
    company: "MMA Technical",
    role: "LinkedIn Management",
    location: "United Kingdom",
    date: "April 2026 ",
    description:
      "Managing the company's LinkedIn presence, creating engaging content, maintaining consistent posting, and supporting audience growth and brand visibility.",
    tags: [
      "LinkedIn Management",
      "Content Creation",
      "Audience Growth",
      "Social Media",
    ],
    link: "https://www.linkedin.com/company/mma-technical/",
  },

  {
    company: "Munzai Solutions",
    role: "Project Management",
    location: "Karachi, Pakistan",
    date: "May 2025",
    description:
      "Managed SEO, WordPress content, and multi-platform social media activities while coordinating content and digital marketing tasks.",
    tags: [
      "Project Management",
      "SEO",
      "WordPress",
      "Social Media",
    ],
    link: "https://munzaisolutions.com/",
  },

  {
    company: "Just Your Fitness",
    role: "Senior Content Writer",
    location: "United Kingdom",
    date: "2025",
    description:
      "Created impactful, SEO-focused content for a fitness-focused brand, producing engaging material designed to improve visibility, audience engagement and website performance.",
    tags: [
      "SEO Writing",
      "Content Writing",
      "Fitness Content",
      "Web Content",
    ],
  },

  {
    company: "InHeritageX",
    role: "SEO Content Writer",
    location: "Kolkata, India",
    date: "Aug 2024 – Dec 2024",
    description:
      "Managed SEO blogging and WordPress content while supporting online visibility through content planning and social media strategy.",
    tags: [
      "SEO Blogging",
      "WordPress",
      "Content Strategy",
      "Social Media",
    ],
    link: "https://inheritagex.com/",
  },

  {
    company: "Exolux Services LLC",
    role: "Web Content Writer",
    location: "United Kingdom",
    date: "2025",
    description:
      "Created engaging and SEO-focused web content supporting brand communication, search visibility and digital marketing objectives.",
    tags: [
      "Web Content",
      "SEO",
      "Copywriting",
      "Brand Communication",
    ],
    link: "https://exoluxservices.com/",
  },

  {
    company: "BrandClickX",
    role: "Web Content Writer",
    location: "Albany, New York",
    date: "Oct 2024 – Mar 2025",
    description:
      "Created SEO content using semantic strategies and search intent to support stronger Google rankings and improve the overall quality of website content.",
    tags: [
      "Semantic SEO",
      "Search Intent",
      "SEO Content",
      "Google Rankings",
    ],
    link: "https://brandclickx.com/",
  },

  {
    company: "Tenorbit",
    role: "Content & Brand Strategist",
    location: "Kingston, England",
    date: "Jul 2025",
    description:
      "Developed brand strategy, created content, managed daily posts, supported audience growth and collaborated with designers to maintain consistent brand communication.",
    tags: [
      "Brand Strategy",
      "Content Strategy",
      "Social Media",
      "Audience Growth",
    ],
    link: "https://tenorbit.com/",
  },

  {
    company: "Reliable Startup",
    role: "Web Content Writer",
    location: "New York",
    date: "Oct 2024 – Mar 2025",
    description:
      "Created niche content for startups across SaaS, FinTech and business strategy topics to support entrepreneurial brands and their online presence.",
    tags: [
      "SaaS Content",
      "FinTech",
      "Business Writing",
      "SEO Content",
    ],
    link: "https://reliablestartup.com/",
  },

  {
    company: "Super Asia Group of Industries",
    role: "Web Content Writer",
    location: "Gujranwala, Pakistan",
    date: "April 2025",
    description:
      "Created SEO-friendly blogs and product descriptions while maintaining quality, consistency and timely delivery of website content.",
    tags: [
      "SEO Blogs",
      "Product Descriptions",
      "Web Content",
      "Copywriting",
    ],
    link: "https://superasiasanitary.com/",
  },

  {
    company: "BrandOut Advertising Researches LLC",
    role: "Content Writer & Ghostwriter",
    location: "Dubai, UAE",
    date: "Jan 2025 – April 2025",
    description:
      "Managed web and social content remotely while strengthening content strategy and project management skills through ongoing client projects.",
    tags: [
      "Ghostwriting",
      "Social Content",
      "Web Content",
      "Project Management",
    ],
    link: "https://brandoutadv.com/",
  },

  {
    company: "Milele",
    role: "LinkedIn Branding Manager",
    location: "Dubai, UAE",
    date: "Jun 2025",
    description:
      "Managed LinkedIn profiles with optimized content, scheduling, keyword research and analytics to strengthen professional brand presence.",
    tags: [
      "LinkedIn Branding",
      "Content Scheduling",
      "Keyword Research",
      "Analytics",
    ],
    link: "https://www.linkedin.com/company/milelecorp/",
  },

  {
    company: "Avoura",
    role: "Senior Content Writer",
    location: "New Delhi, India",
    date: "Jan 2024 – April 2025",
    description:
      "Authored SEO blogs and guest posts designed to increase website traffic, improve content quality and strengthen domain authority.",
    tags: [
      "SEO Blogs",
      "Guest Posting",
      "Content Writing",
      "Domain Authority",
    ],
    link: "https://avoura.in/",
  },

  {
    company: "Pak Tales Luxury",
    role: "Social Media Manager",
    location: "Saudi Arabia / Kuwait",
    date: "May 2025",
    description:
      "Managed social media platforms through content strategy, audience engagement and consistent brand communication designed to support audience growth.",
    tags: [
      "Social Media Management",
      "Content Strategy",
      "Audience Growth",
      "Community Management",
    ],
    link: "https://www.facebook.com/paktalesluxury",
    instagram: "https://www.instagram.com/paktalesluxury_/",
  },

  {
    company: "Odix Technology",
    role: "Web Content Writer",
    location: "Islamabad, Pakistan",
    date: "Feb 2025 – Mar 2025",
    description:
      "Produced SEO-optimized website content while collaborating with teams to meet content goals, deadlines and brand requirements.",
    tags: [
      "SEO Content",
      "Web Writing",
      "Content Strategy",
      "Team Collaboration",
    ],
    link: "https://odixtech.com/",
  },

  {
    company: "Australian Crypto Convention",
    role: "Video Editor & SEO Content Writer",
    location: "Sydney, Australia",
    date: "Feb 2024 – Dec 2024",
    description:
      "Edited crypto-related videos and created SEO content for web and video publications while working under tight deadlines.",
    tags: [
      "Video Editing",
      "SEO Writing",
      "Crypto Content",
      "Digital Content",
    ],
    link: "https://auscryptocon.com/",
  },

  {
    company: "Capslock",
    role: "Web Content Writer",
    location: "Lahore, Pakistan",
    date: "Jul 2024 – Jan 2025",
    description:
      "Created SEO news blogs covering trending topics and strategic keywords to support website traffic and search visibility.",
    tags: [
      "SEO News Writing",
      "Trending Topics",
      "Keyword Strategy",
      "Web Content",
    ],
    link: "https://capslock.pk/",
  },

  {
    company: "LEAP",
    role: "Content Writer Manager",
    location: "Riyadh, Saudi Arabia",
    date: "Jan 2025 – Mar 2025",
    description:
      "Researched the LEAP event and created clear, compelling content designed to communicate the client's vision and engage its target audience.",
    tags: [
      "Content Management",
      "Research",
      "Event Content",
      "Content Strategy",
    ],
    link: "https://onegiantleap.com/",
  },

  {
    company: "Ultimate Pest Solutions LLC",
    role: "Web Copywriter",
    location: "Toronto, Canada",
    date: "Sep 2024 – Dec 2024",
    description:
      "Created SEO-focused website copy designed to improve online visibility, communicate services clearly and support business growth.",
    tags: [
      "Web Copywriting",
      "SEO",
      "Website Content",
      "Conversion Copy",
    ],
    link: "https://ultimatepestsolutions.ca/",
  },

  {
    company: "Cloud Stride",
    role: "LinkedIn Manager",
    location: "Karachi, Pakistan",
    date: "Aug 2024 – Dec 2024",
    description:
      "Managed LinkedIn content strategy and posting to improve brand visibility through consistent, SEO-driven professional content.",
    tags: [
      "LinkedIn Management",
      "Content Strategy",
      "SEO Posts",
      "Brand Visibility",
    ],
  },

  {
    company: "Apela Technologies",
    role: "Freelance Blogger Intern",
    location: "Lahore, Pakistan",
    date: "2024",
    description:
      "Wrote blog and website content aligned with the brand voice while developing stronger SEO writing and content research skills.",
    tags: [
      "Blog Writing",
      "SEO Writing",
      "Brand Voice",
      "Content Research",
    ],
  },

  {
    company: "EFE Glasses",
    role: "Content Writer",
    location: "Amsterdam",
    date: "Jan 2024 – Dec 2024",
    description:
      "Created fashion blogs, press releases, advertising copy and website content aligned with the brand's communication style.",
    tags: [
      "Fashion Writing",
      "Press Releases",
      "Ad Copy",
      "Website Content",
    ],
  },
];

const skills = [
  {
    title: "Semantic SEO",
    description:
      "Creating search-focused content around entities, topics, search intent and semantic relationships.",
    icon: Search,
  },
  {
    title: "Content Strategy",
    description:
      "Planning content around business goals, audiences, platforms, topics and conversion opportunities.",
    icon: PenTool,
  },
  {
    title: "Social Media Strategy",
    description:
      "Developing engaging social content and strategies that support visibility, audience growth and brand identity.",
    icon: Share2,
  },
  {
    title: "LinkedIn Management",
    description:
      "Managing professional profiles, content calendars, optimized posts, engagement and organic brand growth.",
    icon: Users,
  },
  {
    title: "Copywriting",
    description:
      "Writing clear, persuasive website copy, advertising content, landing pages and brand messaging.",
    icon: Briefcase,
  },
  {
    title: "Project Management",
    description:
      "Coordinating content projects, deadlines, requirements and collaboration across digital teams.",
    icon: Award,
  },
];

const education = [
  {
    title: "BS Computer Science",
    institution: "Virtual University",
    year: "2021 – 2024",
  },
  {
    title: "Diploma in Content Writing",
    institution: "Content Writing",
    year: "2020",
  },
  {
    title: "Diploma in Graphic Design",
    institution: "Graphic Design",
    year: "2020",
  },
  {
    title: "Matriculation",
    institution: "Govt. Girls High School",
    year: "2018 – 2019",
  },
];

const interests = [
  "Fitness & Gym Training",
  "Reading & Research",
  "Freelance Writing & Typing",
  "Baking",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="border-b bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 py-16 md:py-20">
            <div className="mx-auto max-w-4xl text-center">

              <div className="relative mx-auto mb-7 h-32 w-32 md:h-36 md:w-36">
                <Image
                  src="/about-dp.jpeg"
                  alt="Nimrah Shahzad"
                  fill
                  priority
                  className="rounded-full border-4 border-primary/20 object-cover shadow-lg"
                />
              </div>

              <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium shadow-sm">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Available for Freelance Projects
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                NIMRAH SHAHZAD
              </h1>

              <p className="mt-4 text-lg font-medium text-primary md:text-xl">
                Building brands with Semantic Content | Funnel-Based
                Social Media Strategy | Engaging Copywriting
              </p>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">
                Hey, I&apos;m Nimra! I&apos;m a Semantic SEO Writer,
                Social Media Strategist, and Copywriter with 6 years
                of experience. I help brands stand out with content
                that gets results on Google, AI, and social media.
                Bring out the best in your brand. Got doubts? Why
                don&apos;t we try it?
              </p>

              <div className="mt-8 flex justify-center">
                <DownloadResumeButton />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            QUICK STATS
        ====================================================== */}
        <section className="container mx-auto px-4 py-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <Card className="text-center">
              <CardContent className="p-6">
                <p className="text-3xl font-bold text-primary">
                  6+
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Years Experience
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <p className="text-3xl font-bold text-primary">
                  120+
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Brands & Projects
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <p className="text-3xl font-bold text-primary">
                  18+
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Countries Served
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <p className="text-3xl font-bold text-primary">
                  SEO
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Content & Strategy
                </p>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* =====================================================
            ABOUT
        ====================================================== */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              About Me
            </h2>

            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              I combine Semantic SEO, content strategy, social media
              marketing and persuasive copywriting to help brands
              communicate clearly and grow online. My experience
              spans international clients across the United Kingdom,
              United States, Canada, UAE, Saudi Arabia, Kuwait,
              Australia, India and Pakistan.
            </p>

            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              From SEO blogs and website copy to LinkedIn branding
              and social media management, I focus on creating
              content that is useful for people, aligned with search
              intent and connected to real business goals.
            </p>
          </div>
        </section>

        {/* =====================================================
            SKILLS
        ====================================================== */}
        <section className="bg-muted/20">
          <div className="container mx-auto px-4 py-14 md:py-20">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold md:text-4xl">
                Skills & Expertise
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                A blend of creative writing, SEO strategy, social
                media and project management skills.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <Card
                    key={skill.title}
                    className="transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                  >
                    <CardContent className="p-6">
                      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>

                      <h3 className="text-lg font-semibold">
                        {skill.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {skill.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            EXPERIENCE
        ====================================================== */}
        <section className="container mx-auto px-4 py-14 md:py-20">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Professional Experience
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Experience across content writing, Semantic SEO,
              social media, LinkedIn branding and digital strategy.
            </p>
          </div>

          <div className="mx-auto max-w-5xl space-y-6">
            {experiences.map((experience, index) => (
              <Card
                key={`${experience.company}-${experience.role}-${index}`}
                className="overflow-hidden transition-shadow hover:shadow-md"
              >
                <CardHeader className="border-b bg-muted/10">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>

                      <div>
                        <CardTitle className="text-xl">
                          {experience.role}
                        </CardTitle>

                        <p className="mt-1 font-medium text-primary">
                          {experience.company}
                        </p>

                        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {experience.location}
                          </span>

                          <span>•</span>

                          <span>{experience.date}</span>
                        </div>
                      </div>
                    </div>

                    {experience.link && (
                      <a
                        href={experience.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-primary hover:underline"
                      >
                        View Company
                      </a>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <p className="leading-7 text-muted-foreground">
                    {experience.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {experience.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {experience.instagram && (
                    <a
                      href={experience.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
                    >
                      Instagram Profile →
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* =====================================================
            EDUCATION
        ====================================================== */}
        <section className="bg-muted/20">
          <div className="container mx-auto px-4 py-14 md:py-20">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold md:text-4xl">
                Education
              </h2>

              <p className="mt-3 text-muted-foreground">
                Academic and professional learning background.
              </p>
            </div>

            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
              {education.map((item) => (
                <Card key={item.title}>
                  <CardContent className="flex gap-4 p-6">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.institution}
                      </p>

                      <p className="mt-1 text-sm font-medium text-primary">
                        {item.year}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            HOBBIES
        ====================================================== */}
        <section className="container mx-auto px-4 py-14 md:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Hobbies & Interests
            </h2>

            <p className="mt-3 text-muted-foreground">
              Things that keep me creative, curious and balanced.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {interests.map((interest) => (
                <Badge
                  key={interest}
                  variant="secondary"
                  className="px-4 py-2 text-sm"
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT CTA
        ====================================================== */}
        <section className="border-t bg-primary/5">
          <div className="container mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Let&apos;s Build Something Great
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Looking for someone who can combine SEO, engaging
              writing and social media strategy? Let&apos;s talk
              about your next project.
            </p>

            <a
              href="mailto:nimrashahzad234@gmail.com?subject=Project%20Inquiry%20-%20Nimrah%20Shahzad"
              className="mt-7 inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
