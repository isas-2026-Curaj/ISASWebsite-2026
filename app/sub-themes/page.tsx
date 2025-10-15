import Section from "@/components/section"

export default function SubThemesPage() {
  return (
    <main>
      <Section title="Sub-Themes of the Conference">
        <ul className="grid md:grid-cols-2 gap-3 list-disc pl-5">
          <li>Data-driven delivery systems through KVKs (ICAR).</li>
          <li>Data science for NRM, animal sciences, and plant biological systems.</li>
          <li>Integrated farming systems powered by data.</li>
          <li>Smart data for desert agriculture and horticulture.</li>
          <li>Public health and nutrition in rural Rajasthan.</li>
          <li>Official statistics for sustainable development.</li>
          <li>Big data and indigenous knowledge systems.</li>
          <li>AI and IoT for smart agriculture.</li>
          <li>Modern modelling and analytics.</li>
          <li>Data-driven policies and Vision 2047.</li>
        </ul>
      </Section>
    </main>
  )
}
