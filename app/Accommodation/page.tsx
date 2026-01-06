import ContactForm from "@/components/contact-form"
import Image from "next/image"
import Link from "next/link"

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <h1 className="text-balance text-3xl font-bold">Accommodation</h1>
      <p className="mt-2 text-muted-foreground">
        The University will arrange accommodation in hotels on a shared basis.
        Participants who wish to book single-occupancy rooms may contact the
        hotel directly using the provided contact details. Transportation will
        be arranged by the University from the designated hotels.
      </p>

      <div className="mt-8 grid items-start gap-8 md:grid-cols-2">
        {/* Hotel Details */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Hotel Details</h2>

          <div className="rounded-2xl border p-4 shadow-sm">
            <h3 className="font-semibold">Shree Karni Place Resort</h3>
            <p className="text-sm text-muted-foreground">
              Location: NH-8, Near Toll Plaza, Tolamal, Kishangarh
            </p>
            <p className="text-sm">
              Contact for Booking: <span className="font-medium">9957521627</span>
            </p>
          </div>

          <div className="rounded-2xl border p-4 shadow-sm">
            <h3 className="font-semibold">Radiant Retreat Hotel & Resort</h3>
            <p className="text-sm text-muted-foreground">
              Location: Patoori Mod, Village Dantri, District Dudu, NH-8
              Jaipur–Kishangarh Expressway
            </p>
            <p className="text-sm">Deluxe Room (Double Occupancy): INR 2200 (EPAI Plan)</p>
            <p className="text-sm">
              Contact for Booking: <span className="font-medium">9887088808</span>
            </p>
          </div>
        </div>

        {/* Contact Details */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">University Contact</h2>
          <div>
            <h3 className="font-medium">Email</h3>
            <a
              href="mailto:isas@curaj.ac.in"
              className="text-primary underline-offset-2 hover:underline"
            >
              isas@curaj.ac.in
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
