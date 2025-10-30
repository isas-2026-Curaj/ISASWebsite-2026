import Section from "@/components/section"

export default function HighlightsPage() {
  return (
    <main>
      <Section title="Conference Highlights">
        <ul className="grid md:grid-cols-1 gap-3 list-disc pl-5">
          <li>Farmers’ sessions with demonstrations and success stories.</li>
          <li>Student poster and research paper presentations; startup ideas.</li>
          <li>KVK roundtables to strengthen extension using statistics and ICT.</li>
          <li>Technical sessions on big data, ML, econometrics, and sustainability.</li>
          <li>Capacity-building workshops for farmers, KVK personnel, and students.</li>
        </ul>
      </Section>
    </main>
  )
}
