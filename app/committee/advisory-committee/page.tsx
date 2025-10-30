import Section from "@/components/section"

export default function AdvisoryCommittee() {
  return (
    <main>
      <Section title="Advisory Committee">
        {/* Chief Patron and Patron in two columns */}
        <div className="grid md:grid-cols-2 gap-10 text-center mb-12">
          <div>
            <p className="uppercase text-xs text-muted-foreground tracking-wider">
              Chief Patron
            </p>
            <h4 className="font-semibold mt-1 text-lg">Dr. Mangi Lal Jat</h4>
            <p className="text-sm text-muted-foreground">
              Secretary, DARE & DG, ICAR, New Delhi
            </p>
            <p className="text-sm text-muted-foreground">
              President, ISAS, New Delhi
            </p>
          </div>

          <div>
            <p className="uppercase text-xs text-muted-foreground tracking-wider">
              Patron
            </p>
            <h4 className="font-semibold mt-1 text-lg">Prof. Anand Bhalerao</h4>
            <p className="text-sm text-muted-foreground">
              Vice Chancellor
            </p>
            <p className="text-sm text-muted-foreground">
              Central University of Rajasthan, Kishangarh, Ajmer
            </p>
          </div>
        </div>

        {/* Advisory Members */}
        <div className="w-full">
          <h4 className="font-semibold text-lg mb-6 text-center">
            Advisory Members
          </h4>

          <div className="grid md:grid-cols-3 gap-x-10 gap-y-6 text-center text-sm text-muted-foreground leading-relaxed">
            {[
              ["Dr. B.V.S. Sisodia", "Executive President, ISAS"],
              ["Dr. Padam Singh", "Ex-Executive President, ISAS"],
              ["Dr. Amrit Kumar Paul", "Secretary, ISAS, New Delhi"],
              ["Dr. P.S. Pandey", "Vice Chancellor, RPCAU, Pusa"],
              ["Dr. S.D. Sharma", "Ex-Director, ICAR-IASRI, New Delhi"],
              ["Dr. S.K. Raheja", "Ex-Director, ICAR-IASRI, New Delhi"],
              ["Dr. Kairam Narsaiah", "Director (I/C), ICAR-IASRI, New Delhi"],
              ["Prof. P.K. Dasora", "Ex-VC, MPUAT, Udaipur & Kota University, Kota"],
              ["Dr. R.C. Agrawal", "Ex-DDG, Agricultural Education, ICAR, New Delhi"],
              ["Dr. Girish C. Bhimani", "Ex-VC & HoD, Saurashtra University, Rajkot"],
              ["Dr. Manoj Kr Srivastava", "VC, SM University, Bastar"],
              ["Dr. Anil Kumar", "ADG, ICAR, New Delhi"],
              ["Dr. V.K. Bhatia", "Ex-Director, ICAR-IASRI, New Delhi"],
              ["Dr. A.K. Srivastava", "Ex-Joint Director, ICAR-IASRI, New Delhi"],
              ["Dr. U.C. Sud", "Ex-Director, ICAR-IASRI, New Delhi"],
              ["Dr. Pankaj Mittal", "General Secretary, AIU"],
              ["Dr. Rajender Parsad", "Ex-Director, ICAR-IASRI, New Delhi"],
              ["Dr. Anil Rai", "ADG, ICAR, New Delhi"],
              ["Dr. Seema Jaggi", "ADG, ICAR, New Delhi"],
              ["Dr. A.R. Rao", "Vice President, ISAS"],
              ["Dr. J.P. Singh Joorel", "Dean, Academic Affairs, University of Jammu"],
              ["Dr. Ravi Ratan Saxena", "VC, MGH University, Raipur"],
              ["Dr. Anoop Chaturvedi", "Professor, University of Allahabad"],
              ["Dr. S.C. Malik", "Dean Academic Affairs, M.D. University, Rohtak"],
              ["Dr. Sheela Misra", "Dean, Lucknow University, Lucknow"],
              ["Prof. D.C. Sharma", "Dean Academics, CURaj, Ajmer"],
              ["Dr. Somesh Kumar", "Professor, IIT Kharagpur"],
              ["Dr. Shalabh", "Professor, IIT Kanpur"],
              ["Dr. Narender Kumar", "Dean, Panjab University, Chandigarh"],
              ["Prof. Neeraj Tiwari", "Head, SSJU University, Almora"],
              ["Dr. Padi Tirupati Rao", "Professor & Head, Pondicherry University"],
              ["Dr. J.K. Prajapat", "Professor & Ex-Dean, CURaj, Ajmer"],
              ["Dr. Jayant Singh", "Ex-Dean, Rajasthan University, Jaipur"],
              ["Prof. Gajendra K. Vishvakarma", "IIT-ISM Dhanbad, Dhanbad"],
              ["Dr. K.A. Choubey", "Ex-Director, ICAR-IASRI, New Delhi"],
              ["Dr. Praveen K. Sahu", "Dean, CURaj, Ajmer"],
              ["Dr. Amitabh Srivastava", "Dean, CURaj, Ajmer"],
              ["Dr. Amita Sharma", "Professor, Rajasthan University, Jaipur"],
              ["Dr. K.N. Singh", "HOD, ICAR-IASRI, New Delhi"],
              ["Dr. Tauqueer Ahmad", "HOD, ICAR-IASRI, New Delhi"],
              ["Dr. Ramasubramanian V.", "HOD, ICAR-NAARM, Hyderabad"],
              ["Dr. Girish Kumar Jha", "HOD, ICAR-IASRI, New Delhi"],
              ["Dr. M.R. Verma", "HOD, ICAR-IASRI, New Delhi"],
              ["Dr. Rajesh Kumar", "Vice President, ISAS"],
              ["Dr. Sanjeev Panwar", "Principal Scientist, ICAR"],
              ["Dr. S.P. Singh", "Ex-Dean, RPCAU, Pusa"],
              ["Dr. Anurup Majumder", "BCKV, Nadia"],
              ["Dr. B.K. Hooda", "CCSHAU, Hisar, Haryana"],
              ["Dr. Debasis Bhattacharya", "Professor, Visva Bharati, Shantiniketan"],
              ["Dr. Manish Sharma", "Professor & Head, SKUAST, Jammu & Vice President, ISAS"],
              ["Dr. D.S. Gupta", "Professor, UBKV, Cooch Behar"],
              ["Dr. Abhiram Dash", "HOD, OUAT, Bhubaneswar"],
              ["Dr. Shakeel Ahmad Mir", "Dean, SKUAST-K, Srinagar, J&K"],
              ["Dr. K.V. Asha Latha", "HOD, UAS, Dharwad"],
              ["Dr. A.D. Kalola", "HOD, AAU, Anand"],
              ["Dr. Rajesh Singh", "Professor, BHU, Varanasi"],
              ["Dr. K.K. Tyagi", "Treasurer, ISAS"],
            ].map(([name, role]) => (
              <div key={name}>
                <h5 className="font-medium text-gray-900">{name}</h5>
                <p className="text-sm text-muted-foreground">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  )
}
