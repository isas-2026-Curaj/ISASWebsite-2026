import Section from "@/components/section"

export default function CommitteePage() {
  return (
    <main>
      <Section title="Organizing Committee (Local)">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-lg border p-5">
            <h4 className="font-semibold">Leadership</h4>
            <ul className="mt-2 text-sm text-muted-foreground space-y-1">
              <li>Patron: Prof. Anand Bhalerao, Hon’ble Vice Chancellor, CURAJ</li>
              <li>Chair, Local Organising Committee: Prof. Mamta Rani, Dean, SMSCS</li>
              <li>Convener: Prof. Jitendra Kumar, Dept. of Statistics</li>
              <li>Co-Convener: Dr. Deepesh Bhati, Dept. of Statistics</li>
              <li>Organising Secretary: Dr. Ravi Raj Choudhary, CS</li>
              <li>Treasurer: Dr. Vipul Kakkar, Dept. of Mathematics</li>
            </ul>
          </div>
          <div className="rounded-lg border p-5">
            <h4 className="font-semibold">Members</h4>
            <p className="mt-2 text-sm text-muted-foreground">
              Dr. Saurabh Kumar · Dr. Suresh Kumar Patra · Dr. Abhay Kumar Rai · Dr. Ajay Indian · Dr. Arvind Pandey ·
              Dr. Satish Kumar · Dr. Mahesh Barale · Dr. Nishtha Kesswani · Dr. Priyanka Bhaskar · Dr. Sanjay Kumar ·
              Dr. Subodh Kumar
            </p>
          </div>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          ISAS Leadership: President – Dr. Mangi Lal Jat · Executive President – Dr. B.V.S. Sisodia · Secretary – Dr.
          Amrit Kumar Paul · Treasurer – Dr. K.K. Tyagi (and others as per ISAS).
        </p>
      </Section>
    </main>
  )
}
