"use client"

import Image from "next/image"
import { useEffect, useMemo, useRef, useState } from "react"

type Slide = { src: string; alt: string }

export default function HeroSlider({
  images,
  interval = 5000,
}: {
  images: Slide[]
  interval?: number
}) {
  const [index, setIndex] = useState(0)
  const total = images.length
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const isInteracting = useRef(false)

  const go = (i: number) => setIndex((prev) => (i + total) % total)
  const next = () => go(index + 1)
  const prev = () => go(index - 1)

  // Autoplay with pause-on-hover/focus
  useEffect(() => {
    if (isInteracting.current) return
    timerRef.current = setTimeout(next, interval)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [index, interval]) // re-arm on change

  const slides = useMemo(() => images, [images])

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl border bg-card"
      onMouseEnter={() => (isInteracting.current = true)}
      onMouseLeave={() => (isInteracting.current = false)}
      onFocus={() => (isInteracting.current = true)}
      onBlur={() => (isInteracting.current = false)}
      aria-roledescription="carousel"
    >
      <div className="relative h-[320px] sm:h-[380px] md:h-[460px]" role="group" aria-label="Conference highlights">
        {slides.map((s, i) => (
          <div
            key={s.src}
            className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
            aria-hidden={i !== index}
          >
            <Image
              src={s.src || "/placeholder.svg"}
              alt={s.alt}
              fill
              sizes="100vw"
              className="object-contain bg-background"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 px-3 py-2 text-foreground shadow hover:bg-background"
      >
        {"‹"}
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 px-3 py-2 text-foreground shadow hover:bg-background"
      >
        {"›"}
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => go(i)}
            className={[
              "h-2.5 w-2.5 rounded-full transition",
              i === index ? "bg-primary" : "bg-muted",
              "ring-1 ring-border",
            ].join(" ")}
          />
        ))}
      </div>
    </div>
  )
}
