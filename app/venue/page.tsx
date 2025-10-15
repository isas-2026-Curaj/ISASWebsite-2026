import Image from "next/image"
import Section from "@/components/section"
import { Button } from "@/components/ui/button"

export default function VenuePage() {
  return (
    <main>
      <Section
        title="Venue & Contact"
        subtitle="Auditorium, 4A5 Building, School of Mathematics, Statistics & Computational Sciences, Central University of Rajasthan, Ajmer – 305817"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-lg border overflow-hidden">
            <Image
              src="/images/curaj-building.webp"
              alt="CURAJ campus auditorium and gardens"
              width={1200}
              height={800}
              className="w-full h-64 object-cover"
            />
            <div className="p-5">
              <p className="text-sm text-muted-foreground">
                Email:{" "}
                <a className="underline" href="mailto:isas@curaj.ac.in">
                  isas@curaj.ac.in
                </a>
              </p>
              <div className="mt-2 flex flex-wrap gap-3">
                <Button variant="secondary" asChild>
                  <a href="https://maps.app.goo.gl/jtjoYtpgn3n4nG566?g_st=aw" target="_blank" rel="noopener noreferrer">
                    Google Map
                  </a>
                </Button>
                <Button variant="secondary" asChild>
                  <a href="https://www.curaj.ac.in/location" target="_blank" rel="noopener noreferrer">
                    How to Reach
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="rounded-lg border p-5 bg-muted/30">
            <h4 className="font-semibold">Quick Facts</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Dates: January 29–31, 2026</li>
              <li>Host: Department of Statistics, SMSCS, CURAJ</li>
              <li>In association with Indian Society of Agricultural Statistics (ISAS)</li>
            </ul>
          </div>
        </div>
      </Section>
    </main>
  )
}
