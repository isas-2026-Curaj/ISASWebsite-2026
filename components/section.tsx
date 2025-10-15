import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

export default function Section({
  id,
  title,
  subtitle,
  children,
  className,
  align = "left",
}: {
  id?: string
  title: string
  subtitle?: React.ReactNode
  children: ReactNode
  className?: string
  align?: "left" | "center"
}) {
  return (
    <section id={id} className={cn("py-12 md:py-16", className)}>
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className={cn("text-3xl md:text-4xl font-semibold text-pretty", align === "center" && "text-center")}>
          {title}
        </h1>
        {subtitle ? (
          <p
            className={cn(
              "mt-2 text-muted-foreground leading-relaxed text-pretty",
              align === "center" && "text-center",
            )}
          >
            {subtitle}
          </p>
        ) : null}
        <div className={cn("mt-6", align === "center" && "mx-auto")}>{children}</div>
      </div>
    </section>
  )
}
