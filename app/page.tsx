"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Section from "@/components/section"
import CountdownTimer from "@/components/countdown-timer"
import HeroSlider from "@/components/hero-slider"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

// Hero with building photo (agriculture-themed)
function Hero() {
  return (
    <section className="relative w-full h-[60vh] md:h-[75vh]">
      {/* Full university image */}
      <Image
        src="/images/curaj_building_new.png"
        alt="Central University of Rajasthan campus building"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      {/* Text content over image */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-2xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
          76th Annual Conference of Indian Society of Agricultural Statistics (ISAS)
        </h1>
        <p className="text-lg md:text-2xl font-semibold text-white drop-shadow">
          Data Driven Decisions towards Viksit Bharat @ 2047
        </p>
        <p className="mt-4 text-base md:text-lg text-white/90 font-medium drop-shadow">
          Central University of Rajasthan, Ajmer
        </p>
        <p className="text-base md:text-lg text-white/80 font-medium drop-shadow">
          January 29–31, 2026
        </p>
      </div>
    </section>
  )
}

// Simple colorful placeholder icon
function PlaceholderIcon({ color }: { color: string }) {
  return (
    <span
      className="inline-block rounded-full shadow"
      style={{
        width: 36,
        height: 36,
        background: color,
        display: "inline-block",
        border: "2px solid #fff",
      }}
    />
  )
}

export default function Page() {
  return (
    <main>
      {/* Minimal essentials only */}
      <Hero />

      <Section
        id="glance"
        title="At a Glance"
        subtitle={
          <span className="font-semibold text-primary text-lg md:text-xl bg-primary/10 px-2 py-1 rounded">
            Hosted by Department of Statistics, SMSCS in association with ISAS.
          </span>
        }
        align="center"
      >
        <div className="grid md:grid-cols-3 gap-6 justify-center">
          <Card className="text-center shadow-xl border-0 bg-gradient-to-br from-yellow-100 via-pink-100 to-green-100 hover:scale-[1.03] transition">
            <CardContent className="p-6 flex flex-col items-center">
              <PlaceholderIcon color="#F59E42" />
              <p className="text-sm text-muted-foreground mt-2">Theme</p>
              <p className="font-semibold text-primary mt-1">Data Driven Decisions towards Viksit Bharat @ 2047</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-xl border-0 bg-gradient-to-br from-green-100 via-yellow-100 to-pink-100 hover:scale-[1.03] transition">
            <CardContent className="p-6 flex flex-col items-center">
              <PlaceholderIcon color="#10B981" />
              <p className="text-sm text-muted-foreground mt-2">Dates</p>
              <p className="font-semibold text-primary mt-1">Jan 29–31, 2026</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-xl border-0 bg-gradient-to-br from-pink-100 via-green-100 to-yellow-100 hover:scale-[1.03] transition">
            <CardContent className="p-6 flex flex-col items-center">
              <PlaceholderIcon color="#EF4444" />
              <p className="text-sm text-muted-foreground mt-2">Venue</p>
              <p className="font-semibold text-primary mt-1">Auditorium, 4A5 Building (SMSCS), CURAJ</p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-6 flex justify-center">
          <CountdownTimer targetDate={new Date("2026-01-29T00:00:00")} />
        </div>
      </Section>

      <Section id="highlights" title="Highlights" align="center">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Left: Text card */}
          <Card className="shadow-lg border">
            <CardHeader className="bg-primary/10 border-b px-5 py-4 rounded-t">
              <CardTitle className="text-lg md:text-xl font-bold text-primary">About Conference</CardTitle>
            </CardHeader>
            <CardContent className="p-5 md:p-6 overflow-y-auto max-h-[340px]">
              <p>
                We are thrilled to host the{" "}
                <span className="font-semibold text-primary">76th Annual Conference of ISAS</span> at Central University of
                Rajasthan, Ajmer.
                <br />
                <br />
                This event brings together leading experts, researchers, and students in agricultural statistics to discuss{" "}
                <span className="font-semibold">Data Driven Decisions towards Viksit Bharat @ 2047</span>
                .
                <br />
                <br />
                Join us for scientific sessions, workshops, and networking opportunities with distinguished speakers from across
                India.
              </p>
            </CardContent>
          </Card>
          <div>
            <HeroSlider
              images={[
                { src: "/images/slider/objectives.png", alt: "Conference objectives infographic" },
                { src: "/images/slider/dates.png", alt: "Important dates table for the conference" },
                { src: "/images/slider/image-1760528144522.png", alt: "none" },
                { src: "/images/slider/image-1760528171186.png", alt: "none" },
                { src: "/images/slider/image-1760528156385.png", alt: "none" },
                { src: "/images/slider/image-1760528182569.png", alt: "none" },
                { src: "/images/slider/image-1760528194199.png", alt: "none" },
                { src: "/images/slider/image-1760528204918.png", alt: "none" },
                { src: "/images/slider/image-1760528214137.png", alt: "none" },
                { src: "/images/slider/image-1760528225735.png", alt: "none" },
              ]}
            />
          </div>
        </div>
      </Section>

      <Section id="quick-links" title="Explore" align="center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 justify-center">
          {[
            //{ href: "/about", label: "About", desc: "ISAS · CURAJ · Dept. of Statistics", color: "#F59E42" },
            { href: "/objectives", label: "Objectives", desc: "Motivation & goals", color: "#10B981" },
            { href: "/highlights", label: "Highlights", desc: "Sessions & workshops", color: "#EF4444" },
            { href: "/sub-themes", label: "Sub-Themes", desc: "Tracks & topics", color: "#6366F1" },
            { href: "/dates", label: "Important Dates", desc: "Submissions & registrations", color: "#FDE68A" },
            { href: "/registration#register-form", label: "Registration", desc: "Fees · Form · Bank details", color: "#A7F3D0" },
            //{ href: "/committee", label: "Committee", desc: "Leadership & members", color: "#FCA5A5" },
            { href: "/venue", label: "Venue", desc: "Map & details", color: "#F472B6" },
          ].map((c) => (
            <Link key={c.href} href={c.href} className="group">
              <Card className="transition hover:-translate-y-1 hover:shadow-xl text-center shadow-lg border-0 bg-gradient-to-br from-white via-[rgba(0,0,0,0.03)] to-[rgba(0,0,0,0.07)]">
                <CardHeader className="px-4 md:px-5 py-4 flex flex-col items-center">
                  <PlaceholderIcon color={c.color} />
                  <CardTitle className="text-base md:text-lg font-semibold text-primary mt-2">{c.label}</CardTitle>
                  <CardDescription className="text-xs md:text-sm">{c.desc}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </main>
  )
}
