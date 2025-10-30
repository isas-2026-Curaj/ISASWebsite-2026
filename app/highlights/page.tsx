import Section from "@/components/section"

export default function HighlightsPage() {
  return (
    <main>
      <Section title="Conference Highlights">
        <ul className="grid md:grid-cols-1 gap-3 list-disc pl-5">
  <li><strong>Farmers’ Sessions:</strong> Simplified presentations, demonstrations and success stories on the use of data and technology in agriculture.</li>
  <li><strong>Student Participation:</strong> Poster presentations, research paper presentation and agricultural-related startup ideas.</li>
  <li><strong>KVK Roundtables:</strong> Dialogues on strengthening extension services using statistics and ICT tools.</li>
  <li><strong>Technical Sessions:</strong> Advances in agricultural statistics, big data analytics, machine learning, econometrics and sustainability.</li>
  <li><strong>Workshops:</strong> Capacity-building workshops tailored for farmers, KVK personnel and students.</li>
        </ul>
      </Section>
    </main>
  )
}
