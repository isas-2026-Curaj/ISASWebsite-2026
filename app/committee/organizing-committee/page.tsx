import Image from "next/image"
import Section from "@/components/section"

export default function CommitteePage() {
  return (
    <main>
      <Section title="Organising Committee">
        {/* Center the section title */}
        

        <div className="flex flex-col items-center text-center space-y-10">

          {/* Patron */}
          <div>
              <div className="w-32 h-32 mx-auto mt-2 overflow-hidden rounded-full bg-gray-200">
              <Image
                src="/images/anand-bhalerao.jpg"
                alt="Prof. Anand Bhalerao"
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="font-semibold mt-3">Patron</h3>
            <h4 className="font-semibold mt-3">Prof. Anand Bhalerao</h4>
            <p className="text-sm text-muted-foreground">
              Hon’ble Vice Chancellor, CURaj
            </p>
          </div>

          {/* Chair Local Organising Committee */}
          <div>
              <div className="w-32 h-32 mx-auto mt-2 overflow-hidden rounded-full bg-gray-200">
              <Image
                src="/images/mamta-rani.jpg"
                alt="Prof. Mamta Rani"
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="font-semibold mt-3">Chair Local Organising Committee</h3>
            <h4 className="font-semibold mt-3">Prof. Mamta Rani</h4>
            <p className="text-sm text-muted-foreground">Dean, SMSCS, CURaj</p>
          </div>

          {/* Middle Section — Two Columns */}
          <div className="grid md:grid-cols-2 gap-10 w-full mt-8">
            {[
              ["Convener", "Prof. Jitendra Kumar", "Dept. of Statistics, CURaj", "/images/jitendra-kumar.jpg"],
              ["Co-Convener", "Dr. Deepesh Bhati", "Dept. of Statistics, CURaj", "/images/deepesh-bhati.jpg"],
              ["Organising Secretary", "Dr. Ravi Raj Choudhary", "Dept. of CS, CURaj", "/images/ravi-raj.jpg"],
              ["Joint Organising Secretary", "Dr. Gaurav Meena", "Dept. of CS, CURaj", "/images/gaurav-meena.jpg"],
              ["Treasurer", "Dr. Saurabh Kumar", "Dept. of Statistics, CURaj", "/images/saurabh-kumar.jpg"],
              ["Joint Treasurer", "Dr. Suresh Kumar Patra", "Dept. of Economics, CURaj", "/images/suresh-patra.jpg"],
            ].map(([role, name, dept, img]) => (
              <div key={name} className="flex flex-col items-center text-center">
                  <div className="w-28 h-28 mt-2 overflow-hidden rounded-full bg-gray-200">
                  <Image
                    src={img}
                    alt={name}
                    width={112}
                    height={112}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-medium mt-3">{role}</h3>
                <h4 className="font-medium mt-3">{name}</h4>
                <p className="text-sm text-muted-foreground">{dept}</p>
              </div>
            ))}
          </div>

          {/* Members Section */}
          <div className="w-full mt-14">
            <h3 className="font-semibold text-lg mb-6 text-center">Members</h3>
            <div className="grid md:grid-cols-2 gap-10 justify-items-center">
              {[
                ["Prof. Arvind Pandey", "Dept. of Statistics, CURaj", "/images/arvind-pandey.jpg"],
                ["Dr. Nishtha Kesswani", "Dept. of DSA, CURaj", "/images/nishtha-kesswani.jpg"],
                ["Dr. Sanjay Kumar", "Dept. of Statistics, CURaj", "/images/sanjay-kumar.jpg"],
                ["Dr. Ajay Indian", "Dept. of CS, CURaj", "/images/ajay-indian.jpg"],
                ["Dr. Vipul Kakkar", "Dept. of Mathematics, CURaj", "/images/vipul-kakkar.jpg"],
                ["Dr. Satish Kumar", "Dept. of Statistics, CURaj", "/images/satish-kumar.jpg"],
                ["Dr. Mahesh Barale", "Dept. of Statistics, CURaj", "/images/mahesh-barale.jpg"],
                ["Dr. Priyanka Bhaskar", "Dept. of Commerce, CURaj", "/images/priyanka-bhaskar.jpg"],
                ["Dr. Abhay Kumar Rai", "Dept. of CS, CURaj", "/images/abhay-rai.jpg"],
                ["Dr. Subodh Kumar", "Dept. of DSA, CURaj", "/images/subodh-kumar.jpg"],
              ].map(([name, dept, img]) => (
                <div key={name} className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 overflow-hidden rounded-full bg-gray-200">
                    <Image
                      src={img}
                      alt={name}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="font-medium mt-3">{name}</h4>
                  <p className="text-sm text-muted-foreground">{dept}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Section>
    </main>
  )
}
