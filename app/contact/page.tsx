
"use client";

import type React from "react";
import { useState } from "react";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  ArrowUpRight,
  CheckCircle2,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Twitter,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.service || !formData.budget) {
      alert("Please select a content type and budget range.");
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      alert("Your message has been sent successfully!");

      setFormData({
        name: "",
        email: "",
        service: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      short: "in",
      href: "https://www.linkedin.com/in/nimrah-shahzad",
      icon: Linkedin,
    },
    {
      name: "Upwork",
      short: "Up",
      href: "https://www.upwork.com/freelancers/~0134bf4077991b2bfb",
      icon: null,
    },
    {
      name: "Substack",
      short: "S",
      href: "https://substack.com/@nimrahshahzad",
      icon: null,
    },
    {
      name: "Fiverr",
      short: "Fi",
      href: "https://www.fiverr.com/s/aexqPe8",
      icon: null,
    },
    {
      name: "Reddit",
      short: "R",
      href: "https://www.reddit.com/user/new-cow-5539",
      icon: null,
    },
    {
      name: "X",
      short: "𝕏",
      href: "https://x.com/nimrashahzad234",
      icon: Twitter,
    },
    {
      name: "Facebook",
      short: "f",
      href: "https://www.facebook.com/nimrah.shahzad.1216",
      icon: Facebook,
    },
    {
      name: "Quora",
      short: "Q",
      href: "https://www.quora.com/profile/Nimra-Shahzad-62",
      icon: null,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* =========================================================
            HERO
        ========================================================= */}
        <section className="relative overflow-hidden border-b">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-background" />

          <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Available for new projects
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Let&apos;s Create Something
                <span className="block text-primary">
                  Worth Reading
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                Have a project in mind? Whether you need engaging articles,
                SEO-focused content, website copy, or professional editing,
                I&apos;d love to hear about it.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            MAIN CONTENT
        ========================================================= */}
        <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-3 lg:items-start">
            {/* =====================================================
                FORM
            ===================================================== */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden">
                <CardHeader className="border-b bg-muted/20 px-6 py-6 md:px-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl">
                        Tell Me About Your Project
                      </CardTitle>

                      <p className="mt-2 text-sm text-muted-foreground">
                        Share a few details and I&apos;ll get back to you
                        within 24 hours.
                      </p>
                    </div>

                    <div className="hidden rounded-full bg-primary/10 p-3 sm:flex">
                      <MessageCircle className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="px-6 py-7 md:px-8 md:py-8">
                  <form
                    onSubmit={handleSubmitEmail}
                    className="space-y-6"
                  >
                    {/* Name + Email */}
                    <div className="grid gap-5 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          Full Name
                        </Label>

                        <Input
                          id="name"
                          name="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) =>
                            handleChange(
                              "name",
                              e.target.value
                            )
                          }
                          required
                          className="h-11"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Email Address
                        </Label>

                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            handleChange(
                              "email",
                              e.target.value
                            )
                          }
                          required
                          className="h-11"
                        />
                      </div>
                    </div>

                    {/* Service + Budget */}
                    <div className="grid gap-5 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="service">
                          What Do You Need?
                        </Label>

                        <Select
                          value={formData.service}
                          onValueChange={(value) =>
                            handleChange(
                              "service",
                              value
                            )
                          }
                        >
                          <SelectTrigger
                            id="service"
                            className="h-11"
                          >
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>

                          <SelectContent>
                            <SelectItem value="blog-article">
                              Blog & Article Writing
                            </SelectItem>

                            <SelectItem value="web-copy">
                              Website Copywriting
                            </SelectItem>

                            <SelectItem value="press-release">
                              Press Releases
                            </SelectItem>

                            <SelectItem value="seo-strategy">
                              SEO Content Strategy
                            </SelectItem>

                            <SelectItem value="editing-proofreading">
                              Editing & Proofreading
                            </SelectItem>

                            <SelectItem value="other">
                              Other
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="budget">
                          Project Budget
                        </Label>

                        <Select
                          value={formData.budget}
                          onValueChange={(value) =>
                            handleChange(
                              "budget",
                              value
                            )
                          }
                        >
                          <SelectTrigger
                            id="budget"
                            className="h-11"
                          >
                            <SelectValue placeholder="Select your budget" />
                          </SelectTrigger>

                          <SelectContent>
                            <SelectItem value="under-10">
                              Under $10
                            </SelectItem>

                            <SelectItem value="10-20">
                              $10 - $20
                            </SelectItem>

                            <SelectItem value="30-40">
                              $30 - $40
                            </SelectItem>

                            <SelectItem value="50-60">
                              $50 - $60
                            </SelectItem>

                            <SelectItem value="over-60">
                              Over $60
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">
                        Project Details
                      </Label>

                      <Textarea
                        id="message"
                        name="message"
                        rows={7}
                        placeholder="Tell me about your project, target audience, content requirements, preferred tone, deadline, and anything else that may help..."
                        value={formData.message}
                        onChange={(e) =>
                          handleChange(
                            "message",
                            e.target.value
                          )
                        }
                        required
                        className="resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        size="lg"
                        className="h-12 w-full text-base"
                        disabled={isSending}
                      >
                        {isSending ? (
                          <>
                            <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                            Sending Your Inquiry...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Project Inquiry
                          </>
                        )}
                      </Button>
                    </div>

                    <p className="text-center text-xs text-muted-foreground">
                      Your information is only used to respond to
                      your inquiry.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* =====================================================
                SIDEBAR
            ===================================================== */}
            <aside className="space-y-6">
              {/* Email */}
              <Card>
                <CardContent className="p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>

                    <div>
                      <p className="font-semibold">
                        Prefer Email?
                      </p>

                      <p className="text-sm text-muted-foreground">
                        Send me a direct message
                      </p>
                    </div>
                  </div>

                  <a
                    href="mailto:nimrashahzad234@gmail.com?subject=Project%20Inquiry%20-%20Nimrah%20Shahzad"
                    className="group flex items-center justify-between rounded-xl border bg-muted/20 px-4 py-3 transition-colors hover:border-primary hover:bg-primary/5"
                  >
                    <span className="break-all text-sm font-medium">
                      nimrashahzad234@gmail.com
                    </span>

                    <ArrowUpRight className="ml-3 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </a>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">
                    Find Me Online
                  </CardTitle>

                  <p className="text-sm text-muted-foreground">
                    Connect, follow, or explore my work.
                  </p>
                </CardHeader>

                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;

                      return (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.name}
                          className="group flex items-center gap-3 rounded-xl border p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/5 hover:shadow-sm"
                        >
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted text-sm font-bold transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                            {Icon ? (
                              <Icon className="h-4 w-4" />
                            ) : (
                              social.short
                            )}
                          </div>

                          <span className="min-w-0 truncate text-sm font-medium">
                            {social.name}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    </div>

                    <div>
                      <p className="font-semibold">
                        Quick Response
                      </p>

                      <p className="text-sm text-muted-foreground">
                        Usually within 24 hours
                      </p>
                    </div>
                  </div>

                  <p className="text-sm leading-6 text-muted-foreground">
                    I value clear communication and aim to respond
                    to every serious project inquiry as quickly as
                    possible.
                  </p>
                </CardContent>
              </Card>
            </aside>
          </div>
        </section>

        {/* =========================================================
            LOCATION
        ========================================================= */}
        <section className="border-t bg-muted/20">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="mb-8 text-center">
              <div className="mb-3 inline-flex items-center justify-center rounded-full bg-primary/10 p-3">
                <MapPin className="h-5 w-5 text-primary" />
              </div>

              <h2 className="text-2xl font-bold md:text-3xl">
                Based in Lahore, Pakistan
              </h2>

              <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
                Working remotely with clients and businesses
                around the world.
              </p>
            </div>

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps?q=Lahore,+Pakistan&output=embed"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-[320px] w-full md:h-[400px]"
                    title="Lahore, Pakistan location map"
                  />
                </div>

                <div className="flex items-center justify-center gap-2 border-t bg-background px-4 py-4 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  Lahore, Pakistan · Serving clients globally
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================= */}
        <section className="container mx-auto px-4 py-16 md:py-20">
          <Card className="overflow-hidden border-primary/20 bg-primary/5">
            <CardContent className="px-6 py-10 text-center md:px-10 md:py-14">
              <h2 className="text-2xl font-bold md:text-3xl">
                Have a Content Project in Mind?
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                Let&apos;s discuss your goals and turn your ideas
                into clear, engaging, and effective content.
              </p>

              <a
                href="mailto:nimrashahzad234@gmail.com?subject=Project%20Inquiry%20-%20Nimrah%20Shahzad"
                className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </a>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
