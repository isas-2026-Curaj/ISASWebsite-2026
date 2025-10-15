import Section from "@/components/section"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <main>
      <Section title="Call for Abstract / Paper / Poster" subtitle="Submit by January 15, 2026">
        <p className="text-muted-foreground">
          We invite contributory papers, posters, and student presentations aligned with the conference theme. Abstracts
          should be written in Times New Roman, 12pt, with a maximum of 250 words.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button asChild>
            <a href="https://DDDSS.curaj.ac.in" target="_blank" rel="noopener noreferrer">
              Submit Abstract (Tentative)
            </a>
          </Button>
          <Button variant="secondary" asChild>
            <a href="/dates">Check Important Dates</a>
          </Button>
        </div>
      </Section>
    </main>
  )
}
