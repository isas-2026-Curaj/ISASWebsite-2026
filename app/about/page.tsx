import Image from "next/image"
import Section from "@/components/section"

export default function AboutPage() {
  return (
    <main>
      <Section title="Introduction">
        <p className="leading-relaxed">
          The Indian Society of Agricultural Statistics (ISAS), a premier professional body in the field
          of agricultural statistics and allied sciences, is organizing 76th Annual Conference on “Data
          Driven Decisions Connecting Science with Society towards Viksit Bharat @ 2047” during
          29-31 January, 2026 at Central University of Rajasthan, Kishangarh, Ajmer. This conference
          will bring together a diverse group of stakeholders, including farmers, students, Krishi
          Vigyan Kendras (KVKs), academicians, researchers, and policymakers.

          This conference seeks to explore how data-driven decision-making can transform
          agricultural research, education, extension, and allied sciences to align with the national
          vision of Viksit Bharat @ 2047. Emphasis will be placed on integrating science with society
          through innovative statistical and computational methods, ensuring that modern data
          technologies are translated into practical solutions for farmers, communities, and
          policymakers.
          The thematic focus of the conference will span across diverse areas. The role of data-driven
          delivery systems through KVKs (ICAR) will be examined to strengthen grassroots-level
          impact. Applications of data science in natural resource management (NRM), animal
          sciences, and plant biological systems will be highlighted to address emerging challenges in
          agriculture and allied sectors. Special attention will be given to integrated farming systems,
          showcasing how multiple enterprises can be optimized through effective use of data.

          Recognizing the regional challenges of Rajasthan, the conference will also emphasize smart
          data applications for desert agriculture and horticulture, and discuss data-driven approaches
          for public health and nutrition in rural communities. Emerging frontiers such as big data and
          indigenous knowledge systems in sustainable farming, artificial intelligence and IoT in smart
          agriculture, advanced modelling and analytics, and data-driven policy frameworks for Vision
          2047 will form key pillars of the deliberations.

          The conference aims to provide a global platform for academicians, researchers,
          policymakers, and industry professionals to discuss contemporary challenges and
          innovations in agricultural statistics, data science, and sustainable agricultural development.
          The insights generated will not only promote scientifically sound and socially relevant
          practices but also pave the way for sustainable, inclusive, and technology-enabled
          agricultural growth in India. 
        </p>
      </Section>

      <Section title="About ISAS">
        <p className="text-muted-foreground">
          India has a proud legacy of statisticians who have made significant contributions to
national and international welfare, establishing a strong foundation for Agricultural
Statistics. To recognize these contributions, the Indian Society of Agricultural Statistics
(ISAS) was founded on January 3, 1947, with Dr. Rajendra Prasadas its Founder
President, who continued to guide the Society for 16 years even after becoming the
President of India.
The Society’s primary objective has been to disseminate research in Agricultural
Statistics and informatics to address challenges in agriculture. It publishes the “Journal
of the Indian Society of Agricultural Statistics” (ISSN 0019-6363), a unique platform for
applied statistical research aimed at enhancing agricultural research and development
across India.
Continuing its mission, ISAS, in collaboration with the Department of Statistics, Central
University of Rajasthan, Ajmer, is organizing the Annual Conference 2026 on “Data
Driven Decisions for Connecting Science with Society towards Viksit Bharat @ 2047”,
providing a forum for statisticians and researchers to share insights and innovations.
President
Dr. Mangi Lal Jat
Executive President
Dr. B.V.S. Sisodia
Patrons
Dr. A.K. Srivastav Dr. Padam Singh
Vice Presidents
Dr. A.R. Rao
Dr. Amrit Kumar Paul
Dr. Manish Sharma
Dr. Rajesh Kumar
Secretary
Dr. Amrit Kumar Paul
Joint Secretaries
Dr. Ranjit Kumar Paul Dr. Kaustav Aditya Dr. Mahesh Kumar
Treasurer
Dr. K.K. Tyagi
Members
Dr. K.K. Chaturvedi
Dr. Shashi Dahiya
Dr. M.S. Farooqi
Dr. Anu Sharma
Dr. Dwijesh Chandra Mishra
Dr . Bhim Singh
Dr. K.K. Pandey
Dr. Manoj Kumar Sharma
Dr. S.B. Lal
Dr. Sudhir Paswan
Dr. Sudhir Srivastava
Dr. Sukanta Dash
        </p>
      </Section>

      <Section title="About Central University of Rajasthan (CURAJ)">
        <p className="text-muted-foreground">
          The Central University of Rajasthan (CURaj) was established in the year 2009 by
an Act of Parliament (Act No. 25 of 2009). This University was established with
the aspiration to be one of India’s most dynamic and vibrant universities to impart
cutting-edge education to all the learner communities. In this short period, the
University has emerged as one of the top academic institutions by adopting
cutting-edge technology to impart knowledge for global outreach. The University
is one of the fastest-growing and flourishing institutes of higher education in
Rajasthan and Accredited with A++ Grade by NAAC as well as Category-I status
by UGC. CURAJ offers a diverse range of undergraduate, postgraduate, and
doctoral programs across disciplines such as Science, Arts, Commerce, Social
Sciences, and Management etc. . The campus is well-equipped with modern
facilities, including state-of-the-art classrooms, laboratories, a well-stocked
library, sports amenities, and comfortable hostels for students. The University
places a strong emphasis on research, encouraging both faculty and students to
actively engage in scholarly pursuits.
        </p>
         <div className="mt-6 rounded-lg border overflow-hidden">
          <Image
            src="/images/curaj-building.webp"
            alt="CURAJ campus and gardens"
            width={1200}
            height={500}
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>
      </Section>

      <Section title="Department of Statistics, SMSCS">
        <p className="text-muted-foreground">
          The Department of Statistics is one of the first two departments initiated alongwith
Mathematics department by the Central University of Rajasthan, just after its
establishment in the year 2009. The primary objective of the department is to
provide quality education and promote theoretical, computational, and applied
knowledge in the field of Statistics. This empowers students to pursue careers in
academia, government sectors, private sectors, NGOs, etc. The department is actively
involved in teaching and research, addressing significant issues in various areas such
as Actuarial Science, Bayesian Statistics, Distribution Theory, Extreme Value Theory,
Inference, Sampling Theory, Statistical Quality Control, Survival Analysis, Time
Series Analysis, Big Data, Operations Research, and Non-Parametric Inference,
among others. Moreover, the department provides excellent employment
opportunities for its alumni, including positions in government organizations such as
ISS, UPSC, RBI, RPSC, UPSSSC, and prestigious private organizations like SWISS
Re, Edgewise Tokyo, KPMG, Sri Ram Finance, WNS Consultancy, The Rain Man
Consultancy, Max Life Insurance, AON Hewitt Actuarial Consultancy, Nelson Private
Ltd., etc. The faculty members actively engage in executing research projects in
collaboration with organizations like UGC, CSIR, and MOSPI, among others.
        </p>
        <div className="mt-6 rounded-lg border overflow-hidden">
          <Image
            src="/images/statistics_dep.png"
            alt="statistics department"
            width={1200}
            height={600}
            className="w-full h-60 md:h-90 object-cover"
          />
        </div>
      </Section>
    </main>
  )
}
