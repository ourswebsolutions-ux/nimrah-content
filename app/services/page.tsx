import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  CheckCircle,
  FileText,
  PenLine,
  Search,
  Newspaper,
  MessageCircle,
} from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "Nimrah Shahzad's Services | SEO Content Writer & Content Strategist",
  description:
    "Explore Nimrah Shahzad's professional content writing services, including SEO content writing, Semantic SEO, website copywriting, content strategy, social media content, and brand writing.",
  keywords: [
    "Nimrah Shahzad",
    "SEO content writer",
    "Semantic SEO writer",
    "SEO content writing",
    "website copywriting",
    "content strategy",
    "social media content",
    "LinkedIn content",
    "brand content writer",
    "SaaS content writer",
    "technology content writer",
    "healthcare content writer",
    "fitness content writer",
    "ecommerce content writer",
    "professional content writer",
  ],
  authors: [{ name: "Nimrah Shahzad" }],
  openGraph: {
    title:
      "Nimrah Shahzad's Services | SEO Content Writer & Content Strategist",
    description:
      "Professional SEO content writing, website copywriting, Semantic SEO, content strategy, social media, and brand writing services by Nimrah Shahzad.",
    type: "website",
    url: "https://storycup.vercel.app/services",
    images: [
      {
        url: "/services-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nimrah Shahzad Content Writing Services",
      },
    ],
    siteName: "Nimrah Shahzad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Nimrah Shahzad's Services | SEO Content Writer & Strategist",
    description:
      "SEO content writing, website copywriting, Semantic SEO, content strategy, and professional brand content services.",
    images: ["/services-og-image.jpg"],
  },
  alternates: {
    canonical: "https://storycup.vercel.app/services",
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
      "@type": "Service",
      serviceType: "Content Writing & SEO",
      provider: {
        "@type": "Person",
        name: "Nimrah Shahzad",
      },
      url: "https://storycup.vercel.app/services",
      description:
        "Professional SEO content writing, Semantic SEO, website copywriting, content strategy, social media content, and brand writing services.",
      areaServed: [
        "Pakistan",
        "United Arab Emirates",
        "Saudi Arabia",
        "United Kingdom",
        "United States",
        "Australia",
      ],
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        description:
          "Professional content writing, SEO, website copywriting, and content strategy services.",
      },
    }),
  },
}

const services = [
  {
    icon: FileText,
    title: "SEO Content Writing",
    description:
      "Research-driven, SEO-focused content designed to satisfy search intent, build topical authority, and provide genuine value to readers.",
    features: [
      "Keyword & Search Intent Research",
      "Semantic SEO",
      "Original & Well-Researched Content",
      "SEO-Friendly Structure",
    ],
    price: "Custom Quote",
  },
  {
    icon: PenLine,
    title: "Website Copywriting",
    description:
      "Clear, engaging website copy for homepages, service pages, landing pages, and brand websites that communicates value effectively.",
    features: [
      "Conversion-Focused Copy",
      "Brand Voice Alignment",
      "SEO Optimized",
      "Clear Calls to Action",
    ],
    price: "Custom Quote",
  },
  {
    icon: Newspaper,
    title: "Business & Brand Content",
    description:
      "Professional content for businesses, startups, SaaS brands, technology companies, and growing organizations looking to strengthen their online presence.",
    features: [
      "Business & SaaS Content",
      "Technology Writing",
      "Brand Messaging",
      "Audience-Focused Research",
    ],
    price: "Custom Quote",
  },
  {
    icon: Search,
    title: "SEO & Content Strategy",
    description:
      "Strategic content planning that connects SEO opportunities with business goals, audience needs, and long-term organic growth.",
    features: [
      "Content Audits",
      "Semantic SEO Planning",
      "Content Calendars",
      "Topic & Keyword Strategy",
    ],
    price: "Custom Quote",
  },
]

const packages = [
  {
    name: "Starter",
    price: "Custom",
    description: "For individuals, startups, and smaller content needs",
    features: [
      "SEO blog & article content",
      "Keyword integration",
      "Search-intent focused writing",
      "Basic content planning",
      "Professional communication",
    ],
    popular: false,
    discount: "",
  },
  {
    name: "Professional",
    price: "Custom",
    description: "Ideal for growing businesses and agencies",
    features: [
      "Multiple SEO articles",
      "Website & landing page copy",
      "Advanced SEO strategy",
      "Content calendar",
      "Priority communication",
    ],
    popular: true,
    discount: "",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For brands with ongoing content requirements",
    features: [
      "Large-scale content production",
      "Complete SEO content strategy",
      "Website & brand copy",
      "Content planning & management",
      "Long-term content support",
    ],
    popular: false,
    discount: "",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Content Writing Services
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strategic, research-driven content that improves search
            visibility, communicates your brand clearly, and connects with
            your audience.
          </p>
        </section>

        {/* Services Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            What I Offer
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon

              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>

                      <div>
                        <CardTitle className="text-xl">
                          {service.title}
                        </CardTitle>

                        <Badge variant="secondary">
                          {service.price}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.features.map(
                        (feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center gap-2"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500" />

                            <span className="text-sm">
                              {feature}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Pricing Packages
            </h2>

            <p className="text-lg text-muted-foreground">
              Flexible content solutions designed around your goals,
              industry, and project requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative ${
                  pkg.popular
                    ? "border-primary shadow-lg"
                    : ""
                }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    Most Popular
                  </Badge>
                )}

                {/* Discount Badge */}
                {pkg.discount && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded z-10 shadow">
                    {pkg.discount}
                  </div>
                )}

                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">
                    {pkg.name}
                  </CardTitle>

                  <div className="text-3xl font-bold text-primary">
                    {pkg.price}
                  </div>

                  <p className="text-muted-foreground">
                    {pkg.description}
                  </p>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map(
                      (feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />

                          <span className="text-sm">
                            {feature}
                          </span>
                        </li>
                      )
                    )}
                  </ul>

                  <Button
                    className="w-full"
                    variant={
                      pkg.popular ? "default" : "outline"
                    }
                    asChild
                  >
                    <Link href="/contact">
                      Get Started
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            My Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Briefing",
                description:
                  "Understanding your goals, audience, brand voice, and content requirements.",
              },
              {
                step: "02",
                title: "Research",
                description:
                  "Researching keywords, search intent, competitors, topics, and relevant industry information.",
              },
              {
                step: "03",
                title: "Writing",
                description:
                  "Creating original, engaging, well-structured, and SEO-focused content.",
              },
              {
                step: "04",
                title: "Delivery",
                description:
                  "Final review, revisions, formatting, and delivery of polished content.",
              },
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {item.step}
                  </div>

                  <h3 className="font-semibold text-lg mb-2">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question:
                  "What type of content do you specialize in?",
                answer:
                  "I specialize in SEO content writing, Semantic SEO, website copywriting, business and SaaS content, technology writing, healthcare and fitness content, brand content, and content strategy.",
              },
              {
                question:
                  "Do you offer revisions?",
                answer:
                  "Yes. Revisions can be included depending on the scope and requirements of the project. The revision process is discussed before starting the work.",
              },
              {
                question:
                  "How do you approach SEO content?",
                answer:
                  "My approach combines keyword research, search intent, semantic relevance, structured content, topical coverage, and natural optimization to create useful content for both readers and search engines.",
              },
              {
                question:
                  "What is your turnaround time?",
                answer:
                  "Turnaround depends on the content type, word count, research requirements, and project size. A delivery timeline is confirmed before the project begins.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">
                    {faq.question}
                  </h3>

                  <p className="text-muted-foreground">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />

              <h2 className="text-2xl font-bold mb-4">
                Ready to Elevate Your Content?
              </h2>

              <p className="text-muted-foreground mb-6">
                Let's discuss your content needs and create strategic,
                high-quality content that supports your brand and
                business goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get Free Quote
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  asChild
                >
                  <Link href="/portfolio">
                    View Writing Samples
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