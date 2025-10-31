import Section from "@/components/section"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <main>
      <Section title="Call for Abstract / Paper / Poster" subtitle="Submit by January 15, 2026">
        <p className="text-muted-foreground">
          The 76th Annual Conference of ISAS welcomes research contributions in the form of contributory papers, posters, and student presentations aligned with the conference theme. 
          Participants are requested to submit their abstracts by December 25, 2025. Abstracts should be written in Times New Roman, 12-point font, with a maximum length of 500 words.
          For registration and abstract submission, please visit https://isas2026.in/registration.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button asChild>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdQL-jBIWCQU23_9ZpDWtSKW0uS-Wt5Xpky3pcWdpr4uPit1A/viewform" target="_blank" rel="noopener noreferrer">
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
