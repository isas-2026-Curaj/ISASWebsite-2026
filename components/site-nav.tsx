"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const menu: Array<
  | { type: "link"; href: string; label: string }
  | { type: "group"; label: string; items: { href: string; label: string }[] }
> = [
  { type: "link", href: "/", label: "Home" },
  {
    type: "group",
    label: "About",
    items: [
      //{ href: "/about/organizer", label: "About organizer" },
      { href: "/about/about-isas", label: "Indian Society of Agricultural Statistics" },
      { href: "/about/curaj", label: "Central University of Rajasthan" },
      { href: "/about/department", label: "Dept. of Statistics" },
      //{ href: "/about/award", label: "Award" },
    ],
  },
  {
    type: "group",
    label: "Committee",
    items: [
      { href: "/committee/executive-committee", label: "Executive Committee" },
      { href: "/committee/advisory-committee", label: "Advisory Committee" },
      { href: "/committee/organizing-committee", label: "Organizing Committee" },
    ],
  },
  {
    type: "group",
    label: "For Authors",
    items: [
      //{ href: "/program/scientific-sessions", label: "Scientific session" },
      //{ href: "/program/event-schedule", label: "Event schedule" },
      { href: "/sub-themes", label: "Sub-Themes of the Conference" },
      { href: "/dates", label: "Important dates" },
      { href: "/registration", label: "Registration" },
      { href: "/program/abstract-submission", label: "Abstract submission" },
      { href: "/venue", label: "Venue" },
      //{ href: "/program/terms-and-conditions", label: "Terms and conditions" },
    ],
  },
  

  {
    type: "group",
    label: "Events",
    items: [
      { href: "/Events/Farmer_session", label: "Farmer Session" },
      { href: "/Events/Invited_Talks", label: "Invited Talks" },
      { href: "/Events/KVK_roundtable", label: "KVK Rounds" },
      { href: "/Events/Technical_Session", label: "Technical Session" },
      { href: "/Events/Workshop", label: "Workshop" },
    ],
  },
    { type: "link", href: "/Accommodation", label: "Accommodation" },
  { type: "link", href: "/contact", label: "Contact" },
]

export default function SiteNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (typeof document === "undefined") return
    const body = document.body
    if (open) body.classList.add("overflow-hidden")
    else body.classList.remove("overflow-hidden")
    return () => body.classList.remove("overflow-hidden")
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <div className="w-full flex items-center h-16 md:h-20 px-4">
        {/* University logo + other logos */}
        <div className="flex items-center gap-1">
          <Link href="/" className="flex items-center gap-1 shrink-0" aria-label="Central University of Rajasthan Home">
            <Image
              src="/logos/Image_2.jpg"
              alt="Central University of Rajasthan"
              width={430}
              height={96}
              className="h-14 md:h-20 w-auto max-w-[260px] md:max-w-none"
              priority
            />
            <span className="sr-only">CURAJ</span>
          </Link>
          
          
        </div>
        <div className="ml-auto flex items-center">
          <nav className="hidden md:flex items-center gap-3 md:gap-8">
            <NavigationMenu>
              <NavigationMenuList>
                {menu.map((item) => {
                  if (item.type === "link") {
                    const active = pathname === item.href
                    return (
                      <NavigationMenuItem key={item.href}>
                        <Link
                          href={item.href}
                          aria-current={active ? "page" : undefined}
                          className={[
                            "relative px-1 py-2 text-sm font-medium",
                            "after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-full after:origin-left",
                            "after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100",
                            active ? "text-foreground after:scale-x-100" : "text-foreground/90 hover:text-foreground",
                          ].join(" ")}
                        >
                          {item.label}
                        </Link>
                      </NavigationMenuItem>
                    )
                  }

                  return (
                    <NavigationMenuItem key={item.label}>
                      <NavigationMenuTrigger
                        className="bg-transparent px-1 data-[state=open]:text-foreground relative text-sm font-medium
                                   after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-full after:origin-left
                                   after:scale-x-0 after:bg-primary after:transition-transform after:duration-300
                                   data-[state=open]:after:scale-x-100 hover:after:scale-x-100"
                      >
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="p-4 bg-card text-card-foreground border shadow-xl">
                        <ul className="grid min-w-[280px] gap-2">
                          {item.items.map((sub) => (
                            <li key={sub.href}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={sub.href}
                                  className="block rounded-md px-3 py-2 text-sm hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
                                >
                                  {sub.label}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  )
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>
        <button
          aria-label="Open menu"
          className="md:hidden inline-flex flex-col gap-1.5 h-10 w-10 items-center justify-center rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-primary shrink-0"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
        >
          <span className="sr-only">Toggle menu</span>
          <span aria-hidden className="block h-[2px] w-6 rounded bg-foreground" />
          <span aria-hidden className="block h-[2px] w-6 rounded bg-foreground" />
          <span aria-hidden className="block h-[2px] w-6 rounded bg-foreground" />
        </button>
      </div>

      {open && <div className="fixed inset-0 z-40 bg-black/40 md:hidden" onClick={() => setOpen(false)} />}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden fixed left-0 right-0 top-16 z-50 border-t bg-card text-card-foreground shadow-lg max-h-[80vh] overflow-y-auto"
        >
          <div className="container mx-auto px-4 py-3 grid gap-4">
            <Accordion type="single" collapsible className="w-full">
              {menu.map((item) =>
                item.type === "link" ? (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={[
                        "block py-2 text-base",
                        pathname === item.href
                          ? "font-semibold text-foreground"
                          : "text-foreground/90 hover:text-foreground",
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  </div>
                ) : (
                  <AccordionItem key={item.label} value={item.label}>
                    <AccordionTrigger className="text-base font-semibold text-foreground hover:no-underline">
                      {item.label}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid pl-3">
                        {item.items.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setOpen(false)}
                            className="py-2 text-sm text-foreground/90 hover:text-foreground"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ),
              )}
            </Accordion>
          </div>
        </div>
      )}
    </header>
  )
}
