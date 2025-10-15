"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* Hamburger visible only on mobile */}
      <SheetTrigger
        aria-label="Open menu"
        className="md:hidden inline-flex items-center justify-center rounded-sm p-2 text-foreground/80 hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <Menu className="h-6 w-6" />
      </SheetTrigger>

      <SheetContent side="right" className="w-[90vw] sm:w-96">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <nav aria-label="Mobile" className="mt-4 space-y-2">
          <div className="flex flex-col gap-1">
            <SheetClose asChild>
              <Link href="/" className="rounded-sm px-2 py-2 hover:text-primary">
                Home
              </Link>
            </SheetClose>
          </div>

          {/* Use single + collapsible to avoid DOM attribute warnings */}
          <Accordion type="single" collapsible className="w-full space-y-1">
            <AccordionItem value="about">
              <AccordionTrigger className="px-2 py-2 rounded-sm hover:no-underline">About</AccordionTrigger>
              <AccordionContent className="pl-3">
                <ul className="space-y-1">
                  <li>
                    <SheetClose asChild>
                      <Link href="/about/organizer" className="block rounded-sm px-2 py-2 hover:text-primary">
                        About organizer
                      </Link>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <Link href="/about/privacy-policy" className="block rounded-sm px-2 py-2 hover:text-primary">
                        Privacy policy
                      </Link>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <Link
                        href="/about/international-collaboration"
                        className="block rounded-sm px-2 py-2 hover:text-primary"
                      >
                        International collaboration
                      </Link>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <Link href="/about/faq" className="block rounded-sm px-2 py-2 hover:text-primary">
                        FAQ
                      </Link>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <Link href="/about/award" className="block rounded-sm px-2 py-2 hover:text-primary">
                        Award
                      </Link>
                    </SheetClose>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="committee">
              <AccordionTrigger className="px-2 py-2 rounded-sm hover:no-underline">Committee</AccordionTrigger>
              <AccordionContent className="pl-3">
                <ul className="space-y-1">
                  <li>
                    <SheetClose asChild>
                      <Link
                        href="/committee/scientific-committee"
                        className="block rounded-sm px-2 py-2 hover:text-primary"
                      >
                        Scientific committee
                      </Link>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <Link
                        href="/committee/featured-speakers"
                        className="block rounded-sm px-2 py-2 hover:text-primary"
                      >
                        Featured speakers
                      </Link>
                    </SheetClose>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="program">
              <AccordionTrigger className="px-2 py-2 rounded-sm hover:no-underline">Program</AccordionTrigger>
              <AccordionContent className="pl-3">
                <ul className="space-y-1">
                  <li>
                    <SheetClose asChild>
                      <Link
                        href="/program/scientific-sessions"
                        className="block rounded-sm px-2 py-2 hover:text-primary"
                      >
                        Scientific session
                      </Link>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <Link href="/program/event-schedule" className="block rounded-sm px-2 py-2 hover:text-primary">
                        Event schedule
                      </Link>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <Link href="/venue" className="block rounded-sm px-2 py-2 hover:text-primary">
                        Venue
                      </Link>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <Link href="/dates" className="block rounded-sm px-2 py-2 hover:text-primary">
                        Important dates
                      </Link>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <Link href="/registration" className="block rounded-sm px-2 py-2 hover:text-primary">
                        Registration
                      </Link>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <Link
                        href="/program/abstract-submission"
                        className="block rounded-sm px-2 py-2 hover:text-primary"
                      >
                        Abstract submission
                      </Link>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <Link
                        href="/program/terms-and-conditions"
                        className="block rounded-sm px-2 py-2 hover:text-primary"
                      >
                        Terms and conditions
                      </Link>
                    </SheetClose>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="flex flex-col gap-1 pt-2">
            <SheetClose asChild>
              <Link href="/contact" className="rounded-sm px-2 py-2 hover:text-primary">
                Contact
              </Link>
            </SheetClose>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
