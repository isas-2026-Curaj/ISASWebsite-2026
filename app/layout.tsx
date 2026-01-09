import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import SiteNav from "@/components/site-nav"
import SiteFooter from "@/components/site-footer"
import { Suspense } from "react"

export const metadata = {
  title: "ISAS 2026 | 76th Annual Conference of ISAS at CURAJ, Ajmer",
  description:
    "We are thrilled to host the 76th Annual Conference of ISAS at Central University of Rajasthan, Ajmer. Join leading experts, researchers, and scholars for this prestigious event.",
  keywords: "ISAS 2026, CURAJ, Ajmer Conference, ISAS India, Event, Research",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
      <body className="font-sans">
        <Suspense fallback={null}>
          <SiteNav />
        </Suspense>
        {children}
        <Suspense fallback={null}>
          <SiteFooter />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
