import Section from "@/components/section"

export default function ObjectivesPage() {
  return (
    <main>
      <Section
        title="Motivation and Objectives"
        subtitle="Empowering farmers, students, and extension ecosystems with data-driven agriculture."
      >
        <ul className="grid md:grid-cols-2 gap-3 list-disc pl-5">
          <li>Expose farmers to innovative, data-driven practices and success stories.</li>
          <li>Create a platform for students to learn, present papers/posters, and engage with experts.</li>
          <li>Strengthen KVKs as knowledge bridges between research and practice.</li>
          <li>Integrate statistics, digital technologies, and sustainable practices.</li>
          <li>Panel discussions on policy, innovation, and global challenges.</li>
          <li>Foster collaborations for knowledge exchange and policy alignment.</li>
          <li>Workshops on advanced statistical tools and applications.</li>
        </ul>
      </Section>
    </main>
  )
}
