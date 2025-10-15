import Image from "next/image"
import Section from "@/components/section"

export default function AboutOrganizerPage() {
  return (
    <main className="space-y-10 md:space-y-16">
      <Section title="About Organizer">
        <div className="bg-white/80 rounded-xl shadow-md p-6 md:p-8 space-y-4 border">
          <p className="text-lg leading-relaxed font-medium text-gray-800">
            <span className="font-bold text-primary">Indian Society of Agricultural Statistics (ISAS)</span>, a premier
            professional body in agricultural statistics and allied sciences, is organizing the{" "}
            <span className="font-bold text-primary">76th Annual Conference</span> on{" "}
            <span className="italic text-primary">“Data Driven Decisions Connecting Science with Society towards Viksit Bharat @ 2047”</span>{" "}
            during <span className="font-semibold">29-31 January, 2026</span> at Central University of Rajasthan,
            Kishangarh, Ajmer.
          </p>
          <ul className="list-disc pl-6 text-base text-gray-700">
            <li>Brings together farmers, students, KVKs, academicians, researchers, and policymakers.</li>
            <li>Focus on data-driven decision-making for transforming agricultural research, education, and extension.</li>
            <li>Integrates science with society using innovative statistical and computational methods.</li>
          </ul>
          <p className="text-base text-gray-700">
            <span className="font-semibold text-primary">Conference Themes:</span> Data-driven delivery systems,
            applications in NRM, animal & plant sciences, integrated farming, desert agriculture, public health, big data,
            AI, IoT, and policy frameworks for Vision 2047.
          </p>
          <p className="text-base text-gray-700">
            <span className="font-semibold text-primary">Goal:</span> Provide a global platform for discussing
            contemporary challenges and innovations in agricultural statistics and sustainable development.
          </p>
        </div>
      </Section>

      <Section title="About ISAS">
        <div className="bg-white/80 rounded-xl shadow-md p-6 md:p-8 space-y-4 border">
          <p className="text-lg font-medium text-gray-800">
            <span className="font-bold text-primary">ISAS</span> was founded on{" "}
            <span className="font-semibold">January 3, 1947</span> by Dr. Rajendra Prasad, with a mission to advance
            agricultural statistics in India.
          </p>
          <p className="text-base text-gray-700">
            Publishes the{" "}
            <span className="font-semibold">Journal of the Indian Society of Agricultural Statistics</span> (ISSN
            0019-6363), a unique platform for applied statistical research.
          </p>
          <p className="text-base text-gray-700">
            <span className="font-semibold text-primary">Annual Conference 2026:</span> Organized in collaboration
            with the Department of Statistics, CURAJ, focusing on data-driven decisions for Viksit Bharat @ 2047.
          </p>
          <div className="mt-4">
            <span className="font-semibold text-primary block mb-2">ISAS Committee Members</span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm text-gray-700">
              <div>
                <span className="font-semibold">President:</span> Dr. Mangi Lal Jat
                <br />
                <span className="font-semibold">Executive President:</span> Dr. B.V.S. Sisodia
                <br />
                <span className="font-semibold">Secretary:</span> Dr. Amrit Kumar Paul
                <br />
                <span className="font-semibold">Treasurer:</span> Dr. K.K. Tyagi
              </div>
              <div>
                <span className="font-semibold">Vice Presidents:</span>
                <ul className="list-disc pl-4">
                  <li>Dr. A.R. Rao</li>
                  <li>Dr. Amrit Kumar Paul</li>
                  <li>Dr. Manish Sharma</li>
                  <li>Dr. Rajesh Kumar</li>
                </ul>
              </div>
              <div>
                <span className="font-semibold">Patrons:</span>
                <ul className="list-disc pl-4">
                  <li>Dr. A.K. Srivastav</li>
                  <li>Dr. Padam Singh</li>
                </ul>
                <span className="font-semibold">Joint Secretaries:</span>
                <ul className="list-disc pl-4">
                  <li>Dr. Ranjit Kumar Paul</li>
                  <li>Dr. Kaustav Aditya</li>
                  <li>Dr. Mahesh Kumar</li>
                </ul>
              </div>
              <div className="col-span-3">
                <span className="font-semibold">Members:</span>
                <ul className="flex flex-wrap gap-x-6 gap-y-1 list-disc pl-4">
                  <li>Dr. K.K. Chaturvedi</li>
                  <li>Dr. Shashi Dahiya</li>
                  <li>Dr. M.S. Farooqi</li>
                  <li>Dr. Anu Sharma</li>
                  <li>Dr. Dwijesh Chandra Mishra</li>
                  <li>Dr. Bhim Singh</li>
                  <li>Dr. K.K. Pandey</li>
                  <li>Dr. Manoj Kumar Sharma</li>
                  <li>Dr. S.B. Lal</li>
                  <li>Dr. Sudhir Paswan</li>
                  <li>Dr. Sudhir Srivastava</li>
                  <li>Dr. Sukanta Dash</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="About Central University of Rajasthan (CURAJ)">
        <div className="bg-white/80 rounded-xl shadow-md p-6 md:p-8 space-y-4 border">
          <p className="text-lg font-medium text-gray-800">
            <span className="font-bold text-primary">Central University of Rajasthan (CURaj)</span> was established in{" "}
            <span className="font-semibold">2009</span> by an Act of Parliament, aspiring to be one of India’s most
            dynamic universities.
          </p>
          <ul className="list-disc pl-6 text-base text-gray-700">
            <li>
              Accredited with{" "}
              <span className="font-semibold text-primary">A++ Grade by NAAC</span> and{" "}
              <span className="font-semibold text-primary">Category-I status by UGC</span>.
            </li>
            <li>Offers diverse UG, PG, and doctoral programs across Science, Arts, Commerce, Social Sciences, and Management.</li>
            <li>Modern campus with state-of-the-art classrooms, labs, library, sports amenities, and hostels.</li>
            <li>Strong emphasis on research and global outreach.</li>
          </ul>
          <div className="mt-6 rounded-lg border overflow-hidden">
            <Image
              src="/images/curaj-building.webp"
              alt="CURAJ campus and gardens"
              width={1200}
              height={500}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="text-center text-xs text-muted-foreground mt-2">CURAJ Administration Building & Campus</div>
          </div>
        </div>
      </Section>

      <Section title="Department of Statistics, SMSCS">
        <div className="bg-white/80 rounded-xl shadow-md p-6 md:p-8 space-y-4 border">
          <p className="text-lg font-medium text-gray-800">
            <span className="font-bold text-primary">Department of Statistics</span> is one of the first two departments
            at CURAJ, established in 2009.
          </p>
          <ul className="list-disc pl-6 text-base text-gray-700">
            <li>Focuses on theoretical, computational, and applied statistics.</li>
            <li>Alumni placed in ISS, UPSC, RBI, RPSC, UPSSSC, and top private organizations.</li>
            <li>Active research in Actuarial Science, Bayesian Statistics, Big Data, Operations Research, and more.</li>
            <li>Collaborates with UGC, CSIR, MOSPI, and other organizations for research projects.</li>
          </ul>
          <div className="mt-6 rounded-lg border overflow-hidden">
            <Image
              src="/images/statistics_dep.png"
              alt="Department of Statistics, CURAJ"
              width={1200}
              height={600}
              className="w-full h-60 md:h-90 object-cover"
            />
            <div className="text-center text-xs text-muted-foreground mt-2">Department of Statistics, CURAJ</div>
          </div>
        </div>
      </Section>
    </main>
  )
}
