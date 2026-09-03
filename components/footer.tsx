import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail, ArrowUpRight } from "lucide-react"

export function Footer() {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/nimrah-shahzad",
    },
    {
      name: "Upwork",
      href: "https://www.upwork.com/freelancers/~0134bf4077991b2bfb",
    },
    {
      name: "Substack",
      href: "https://substack.com/@nimrahshahzad",
    },
    {
      name: "Fiverr",
      href: "https://www.fiverr.com/s/aexqPe8",
    },
    {
      name: "Reddit",
      href: "https://www.reddit.com/user/new-cow-5539",
    },
    {
      name: "X",
      href: "https://x.com/nimrashahzad234",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/nimrah.shahzad.1216",
    },
    {
      name: "Quora",
      href: "https://www.quora.com/profile/Nimra-Shahzad-62",
    },
  ]

  const services = [
    "Blog & Article Writing",
    "Website Copywriting",
    "SEO Content Strategy",
    "Press Releases & PR Writing",
    "Editing & Proofreading",
  ]

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-5">
            <Link href="/" className="inline-flex items-center">
              <img
                src="/logo.png"
                alt="Nimrah Shahzad Logo"
                className="h-auto w-[170px] max-w-full object-contain sm:w-[190px]"
              />
            </Link>

            <p className="max-w-sm text-sm leading-6 text-muted-foreground">
              Professional content writer specializing in SEO content,
              website copywriting, blog articles, research-based writing,
              and content strategy.
            </p>

            <div className="flex flex-wrap gap-2">
              {socialLinks.slice(0, 6).map((social) => (
                <Button
                  key={social.name}
                  size="icon"
                  variant="ghost"
                  asChild
                  className="h-9 w-9"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                  >
                    {social.name === "LinkedIn" ? (
                      <Linkedin className="h-4 w-4" />
                    ) : (
                      <span className="text-xs font-semibold">
                        {social.name === "Upwork"
                          ? "Up"
                          : social.name === "Substack"
                            ? "S"
                            : social.name === "Fiverr"
                              ? "Fi"
                              : social.name === "Reddit"
                                ? "R"
                                : "𝕏"}
                      </span>
                    )}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 font-semibold">Navigation</h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/portfolio"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Portfolio
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 font-semibold">Services</h3>

            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 font-semibold">Contact</h3>

            <div className="space-y-4">
              <a
                href="mailto:nimrashahzad234@gmail.com"
                className="group flex items-start gap-3"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-4 w-4 text-primary" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">
                    Email
                  </p>

                  <p className="break-all text-sm font-medium transition-colors group-hover:text-primary">
                    nimrashahzad234@gmail.com
                  </p>
                </div>
              </a>

              <div>
                <p className="text-xs text-muted-foreground">
                  Phone
                </p>

                <p className="mt-1 text-sm font-medium">
                  +92 309 0801457
                </p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground">
                  Location
                </p>

                <p className="mt-1 text-sm font-medium">
                  Lahore, Pakistan
                </p>
              </div>

              <Link
                href="/contact"
                className="group inline-flex items-center text-sm font-medium text-primary"
              >
                Start a Project
                <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t pt-7 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nimrah Shahzad. All rights reserved.
          </p>

          <div className="flex justify-center gap-5 sm:justify-end">
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
