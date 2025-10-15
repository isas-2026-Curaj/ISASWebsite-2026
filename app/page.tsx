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
          76 Annual Conference of Indian Society of Agricultural Statistics (ISAS)
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
        <div className="grid md:grid-cols-3 gap-4 justify-center">
          <Card className="text-center">
            <CardContent className="p-5">
              <p className="text-sm text-muted-foreground">Theme</p>
              <p className="font-medium">Connecting Science with Society</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-5">
              <p className="text-sm text-muted-foreground">Dates</p>
              <p className="font-medium">Jan 29–31, 2026</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-5">
              <p className="text-sm text-muted-foreground">Venue</p>
              <p className="font-medium">Auditorium, 4A5 Building (SMSCS), CURAJ</p>
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
          {/* Right: Image slider */}
          <div>
            <HeroSlider
              images={[
                
                { src: "/images/slider/objectives.png", alt: "Conference objectives infographic" },
                { src: "/images/slider/dates.png", alt: "Important dates table for the conference" },
              ]}
            />
          </div>
        </div>
      </Section>

      <Section id="quick-links" title="Explore" align="center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 justify-center">
          {[
            { href: "/about", label: "About", desc: "ISAS · CURAJ · Dept. of Statistics" },
            { href: "/objectives", label: "Objectives", desc: "Motivation & goals" },
            { href: "/highlights", label: "Highlights", desc: "Sessions & workshops" },
            { href: "/sub-themes", label: "Sub-Themes", desc: "Tracks & topics" },
            { href: "/dates", label: "Important Dates", desc: "Submissions & registrations" },
            { href: "/registration#register-form", label: "Registration", desc: "Fees · Form · Bank details" },
            { href: "/committee", label: "Committee", desc: "Leadership & members" },
            { href: "/venue", label: "Venue & Contact", desc: "Map & details" },
          ].map((c) => (
            <Link key={c.href} href={c.href} className="group">
              <Card className="transition hover:-translate-y-0.5 hover:shadow-md text-center">
                <CardHeader className="px-4 md:px-5 py-3 md:py-4">
                  <CardTitle className="text-sm md:text-base">{c.label}</CardTitle>
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
