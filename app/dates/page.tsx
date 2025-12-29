import Section from "@/components/section"

const items: [string, React.ReactNode][] = [
  ["Abstract Submission Start", "November 01, 2025"],
  [
    "Last Date of Abstract Submission",
    <>
      <del className="text-muted-foreground mr-2">December 25, 2025</del>
      <ins className="no-underline">January 15, 2026</ins>
    </>
  ],
  ["Notification of Acceptance", "January 10, 2026"],
  ["Early Bird Registration", "January 1–15, 2026"],
  ["Late Registration", "January 16–26, 2026"],
  ["Conference Dates", "January 29–31, 2026"],
]


export default function DatesPage() {
  return (
    <main>
      <Section title="Important Dates">
        <div className="grid md:grid-cols-3 gap-4">
          {items.map(([label, date]) => (
            <div key={label} className="rounded-lg border p-4">
              <p className="text-sm text-muted-foreground">{label}</p>
              <p className="text-lg font-medium">{date}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  )
}
