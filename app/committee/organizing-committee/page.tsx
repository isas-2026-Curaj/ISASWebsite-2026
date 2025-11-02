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
                src="/org-members/HVC.jpg"
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
                src="/org-members/mamta-rani.png"
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
              ["Convener", "Prof. Jitendra Kumar", "Dept. of Statistics, CURaj", "/org-members/Jitendra.jpg"],
              ["Co-Convener", "Dr. Deepesh Bhati", "Dept. of Statistics, CURaj", "/org-members/Deepesh.gif"],
              ["Organising Secretary", "Dr. Ravi Raj Choudhary", "Dept. of CS, CURaj", "/org-members/raviraj.jpg"],
              ["Joint Organising Secretary", "Dr. Gaurav Meena", "Dept. of CS, CURaj", "/org-members/gaurav.jpeg"],
      ["Joint Organising Secretary", "Dr. Ranjit Kumar Paul", "ICAR-IASRI, New Delhi", "/org-members/ranjit-paul.jpg"],
      ["Joint Organising Secretary", "Dr. Kaustav Aditya", "ICAR-IASRI, New Delhi", "/org-members/kaustav.jpeg"],
              ["Treasurer", "Dr. Saurabh Kumar", "Dept. of Statistics, CURaj", "/org-members/saurabh.jpg"],
              ["Joint Treasurer", "Dr. Suresh Kumar Patra", "Dept. of Economics, CURaj", "/org-members/suresh-patra.jpg"],
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
                ["Prof. Arvind Pandey", "Dept. of Statistics, CURaj", "/org-members/arvind.jpg"],
                ["Dr. Nishtha Kesswani", "Dept. of DSA, CURaj", "/org-members/nishtha.jpeg"],
                ["Dr. Sanjay Kumar", "Dept. of Statistics, CURaj", "/org-members/sanjay.jpg"],
                ["Dr. Ajay Indian", "Dept. of CS, CURaj", "/org-members/ajay.jpg"],
                ["Dr. Vipul Kakkar", "Dept. of Mathematics, CURaj", "/org-members/vipul.jpg"],
                ["Dr. Satish Kumar", "Dept. of Statistics, CURaj", "/org-members/satish.jpeg"],
                ["Dr. Mahesh Barale", "Dept. of Statistics, CURaj", "/org-members/mahesh.jpeg"],
                ["Dr. Priyanka Bhaskar", "Dept. of Commerce, CURaj", "/org-members/priyanka.jpeg"],
                ["Dr. Abhay Kumar Rai", "Dept. of CS, CURaj", "/org-members/abhay.jpg"],
                ["Dr. Subodh Kumar", "Dept. of DSA, CURaj", "/org-members/subodh.jpg"],
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
