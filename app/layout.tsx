import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import SiteNav from "@/components/site-nav"
import SiteFooter from "@/components/site-footer"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "ISAS 2026 - Central University of Rajasthan",
  description: "International Symposium on Applied Statistics (ISAS) 2026, hosted by the Department of Statistics, School of Mathematical and Statistical Sciences, Central University of Rajasthan, Ajmer from January 29 to 31, 2026.",
  generator: "Next.js",
}

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
