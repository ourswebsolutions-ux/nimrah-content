
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ReviewSidebar from "@/components/reViews"
import { ReviewSidebarProvider } from "@/components/ReviewSidebarContext"

import FloatingWhatsApp from "@/components/floating-whatsapp"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Alina Rajput   - Expert Content Writer & SEO Copywriter",

  description:
    "DiscoverAlina Rajput  's professional content writing portfolio. Expert in SEO content, blog writing, and copywriting to boost engagement and rankings.",

  keywords: [
    "content writer",
    "SEO content",
    "blog writing",
    "copywriting",
    "content strategy",
    "freelance writer",
    "Alina Rajput   portfolio",
    "storycup",
  ],

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  authors: [{ name: "Alina Rajput  " }],

  openGraph: {
    title: "Alina Rajput   - Expert Content Writer & Copywriter",
    description:
      "ExploreAlina Rajput  's portfolio of engaging blog posts, SEO content, and persuasive copywriting for businesses and brands.",
    type: "website",
    url: "https://storycup.vercel.app/",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Alina Rajput   Content Writing Portfolio",
      },
    ],
    siteName: "Alina Rajput   Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Alina Rajput   - Expert Content Writer & Copywriter",
    description:
      "ExploreAlina Rajput  's portfolio of engaging blog posts, SEO content, and persuasive copywriting.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://storycup.vercel.app/",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      <body className={inter.className}>
        <ReviewSidebarProvider>
          <ReviewSidebar />
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children} 
           <FloatingWhatsApp/>
          </ThemeProvider>
        </ReviewSidebarProvider>
      </body>
    </html>
  )
}
