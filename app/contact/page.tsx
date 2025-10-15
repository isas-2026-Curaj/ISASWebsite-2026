import ContactForm from "@/components/contact-form"
import Image from "next/image"
import Link from "next/link"

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <h1 className="text-balance text-3xl font-bold">Contact</h1>
      <p className="mt-2 text-muted-foreground">For queries regarding the 76th Annual Conference of ISAS.</p>

      <div className="mt-8 grid items-start gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">Email</h2>
            <a href="mailto:isas@curaj.ac.in" className="text-primary underline-offset-2 hover:underline">
              isas@curaj.ac.in
            </a>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Venue</h2>
            <p className="text-muted-foreground">
              Auditorium, 4A5 Building, School of Mathematics, Statistics and Computational Sciences, Central University
              of Rajasthan, Ajmer, Rajasthan-305817
            </p>
            <Link
              href="https://maps.app.goo.gl/jtjoYtpgn3n4nG566?g_st=aw"
              target="_blank"
              className="text-primary underline-offset-2 hover:underline"
            >
              Open in Google Maps
            </Link>
          </div>
          <div>
            <h2 className="mb-4 text-xl font-semibold">Send us a message</h2>
            <ContactForm />
          </div>
        </div>
        <div className="rounded-lg border">
          <Image
            src="/images/curaj-building.webp"
            alt="Central University of Rajasthan campus"
            width={1200}
            height={900}
            className="h-auto w-full rounded-md"
          />
        </div>
      </div>
    </main>
  )
}
