import Section from "@/components/section"

export default function CommitteePage() {
  return (
    <main>
      <Section title="Organising Committee">
        <div className="flex flex-col items-center text-center space-y-10">

          {/* Patron */}
          <div>
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto"></div>
            <h4 className="font-semibold mt-3">Prof. Anand Bhalerao</h4>
            <p className="text-sm text-muted-foreground">
              Hon’ble Vice Chancellor, CURaj
            </p>
          </div>

          {/* Chair Local Organising Committee */}
          <div>
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto"></div>
            <h4 className="font-semibold mt-3">Prof. Mamta Rani</h4>
            <p className="text-sm text-muted-foreground">
              Dean, SMSCS, CURaj
            </p>
          </div>

          {/* Convener */}
          <div>
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto"></div>
            <h4 className="font-semibold mt-3">Prof. Jitendra Kumar</h4>
            <p className="text-sm text-muted-foreground">
              Dept. of Statistics, CURaj
            </p>
          </div>

          {/* Co-Convener */}
          <div>
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto"></div>
            <h4 className="font-semibold mt-3">Dr. Deepesh Bhati</h4>
            <p className="text-sm text-muted-foreground">
              Dept. of Statistics, CURaj
            </p>
          </div>

          {/* Organising Secretary */}
          <div>
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto"></div>
            <h4 className="font-semibold mt-3">Dr. Ravi Raj Choudhary</h4>
            <p className="text-sm text-muted-foreground">
              Dept. of CS, CURaj
            </p>
          </div>

          {/* Joint Organizing Secretary */}
          <div>
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto"></div>
            <h4 className="font-semibold mt-3">Dr. Gaurav Meena</h4>
            <p className="text-sm text-muted-foreground">
              Dept. of CS, CURaj
            </p>
          </div>

          {/* Treasurer */}
          <div>
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto"></div>
            <h4 className="font-semibold mt-3">Dr. Saurabh Kumar</h4>
            <p className="text-sm text-muted-foreground">
              Dept. of Statistics, CURaj
            </p>
          </div>

          {/* Joint Treasurer */}
          <div>
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto"></div>
            <h4 className="font-semibold mt-3">Dr. Suresh Kumar Patra</h4>
            <p className="text-sm text-muted-foreground">
              Dept. of Economics, CURaj
            </p>
          </div>

          {/* Members */}
          <div className="w-full mt-12">
            <h4 className="font-semibold text-lg mb-6 text-center">Members</h4>
            <div className="grid md:grid-cols-2 gap-10 justify-items-center">
              
              {[
                ["Prof. Arvind Pandey", "Dept. of Statistics, CURaj"],
                ["Dr. Nishtha Kesswani", "Dept. of DSA, CURaj"],
                ["Dr. Sanjay Kumar", "Dept. of Statistics, CURaj"],
                ["Dr. Ajay Indian", "Dept. of CS, CURaj"],
                ["Dr. Vipul Kakkar", "Dept. of Mathematics, CURaj"],
                ["Dr. Satish Kumar", "Dept. of Statistics, CURaj"],
                ["Dr. Mahesh Barale", "Dept. of Statistics, CURaj"],
                ["Dr. Priyanka Bhaskar", "Dept. of Commerce, CURaj"],
                ["Dr. Abhay Kumar Rai", "Dept. of CS, CURaj"],
                ["Dr. Subodh Kumar", "Dept. of DSA, CURaj"],
              ].map(([name, dept]) => (
                <div key={name} className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
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
