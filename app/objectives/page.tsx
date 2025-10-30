import Section from "@/components/section"

export default function ObjectivesPage() {
  return (
    <main>
      <Section title="Motivation and Objectives">
         <p className="text-xs text-muted-foreground tracking-wider">
              Agriculture is at the core of India’s socio-economic structure. However, farmers often face challenges due to climate variability, market volatility and limited access to scientific knowledge. 
           Agricultural statistics and data science can bridge these gaps by enabling evidence-based decisions, strengthening extension services and guiding innovations at the grassroots level. 
           Agricultural statistics play a critical role in evidence-based policymaking, resource allocation and technology adoption. With growing emphasis on data-driven solutions, this Conference will foster dialogue on statistical methodologies, big data applications, climate-smart agriculture and the integration of digital technologies in farming systems. 
           The event aligns with India’s vision of promoting sustainable agriculture, rural development and food security. 
         </p>
        <p className="text-xs text-muted-foreground tracking-wider">
The inclusion of farmers, students, and KVK representatives ensures that the knowledge generated during the Conference translates into real-world benefits by empowering the farming community, building capacity in young researchers and enhancing the effectiveness of KVK-led extension services.
            </p>
        <ul className="grid md:grid-cols-1 gap-3 list-disc pl-5">
          <li>To provide farmers with exposure to innovative practices, data-driven solutions and success stories.</li>
          <li>To create a platform for students to learn, present research papers, poster presentations, and engage with experts.</li>
          <li>To strengthen the role of KVKs as knowledge disseminators and connectors between research and practice.</li>
          <li>To deliberate on the integration of agricultural statistics, digital technologies and sustainable practices.</li>
          <li>Panel discussions on policy, innovation and global challenges.</li>
          <li>To foster collaboration for knowledge exchange and policy alignment.</li>
          <li>Special workshops on advanced statistical tools and applications.</li>
        </ul>
      </Section>
    </main>
  )
}
