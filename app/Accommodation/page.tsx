import ContactForm from "@/components/contact-form"
import Image from "next/image"
import Link from "next/link"

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <h1 className="text-balance text-3xl font-bold">Accomodation</h1>
      <p className="mt-2 text-muted-foreground">The University will arrange accommodation in hotels on a shared basis. 
        Participants who wish to book single-occupancy rooms may contact the hotel directly using the provided contact details. </p>

      <div className="mt-8 grid items-start gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">Email</h2>
            <a href="mailto:isas@curaj.ac.in" className="text-primary underline-offset-2 hover:underline">
              isas@curaj.ac.in
            </a>
          </div>
        </div>
    </main>
  )
}
