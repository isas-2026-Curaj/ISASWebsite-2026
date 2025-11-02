import Section from "@/components/section"

export default function CommitteePage() {
  return (
    <main>
      <Section title="Executive Committee">
        <div className="grid md:grid-cols-2 gap-6">

          <div className="rounded-xl border p-5 shadow-sm">
            <h4 className="font-semibold text-lg">President</h4>
            <ul className="mt-2 text-sm text-muted-foreground space-y-1">
              <li>Dr. Mangi Lal Jat</li>
            </ul>
          </div>

          <div className="rounded-xl border p-5 shadow-sm">
            <h4 className="font-semibold text-lg">Executive President</h4>
            <ul className="mt-2 text-sm text-muted-foreground space-y-1">
              <li>Dr. B.V.S. Sisodia</li>
            </ul>
          </div>

          <div className="rounded-xl border p-5 shadow-sm">
            <h4 className="font-semibold text-lg">Patron</h4>
            <ul className="mt-2 text-sm text-muted-foreground space-y-1">
              <li>Dr. A.K. Srivastava</li>
              <li>Dr. Padam Singh</li>
            </ul>
          </div>

          <div className="rounded-xl border p-5 shadow-sm">
            <h4 className="font-semibold text-lg">Vice President</h4>
            <ul className="mt-2 text-sm text-muted-foreground space-y-1">
              <li>Dr. A.R. Rao</li>
              <li>Dr. Manish Sharma</li>
              <li>Dr. Amrit Kumar Paul</li>
              <li>Dr. Rajesh Kumar</li>
            </ul>
          </div>

          <div className="rounded-xl border p-5 shadow-sm">
            <h4 className="font-semibold text-lg">Secretary</h4>
            <ul className="mt-2 text-sm text-muted-foreground space-y-1">
              <li>Dr. Amrit Kumar Paul</li>
            </ul>
          </div>

          <div className="rounded-xl border p-5 shadow-sm">
            <h4 className="font-semibold text-lg">Joint Secretary</h4>
            <ul className="mt-2 text-sm text-muted-foreground space-y-1">
              <li>Dr. Ranjit Kumar Paul</li>
              <li>Dr. Kaustav Aditya</li>
              <li>Dr. Mahesh Kumara</li>
            </ul>
          </div>

          <div className="rounded-xl border p-5 shadow-sm">
            <h4 className="font-semibold text-lg">Treasurer</h4>
            <ul className="mt-2 text-sm text-muted-foreground space-y-1">
              <li>Dr. K.K. Tyagi</li>
            </ul>
          </div>

          <div className="rounded-xl border p-5 shadow-sm md:col-span-2">
            <h4 className="font-semibold text-lg">Members</h4>
            <ul className="mt-2 text-sm text-muted-foreground grid md:grid-cols-2 gap-x-8 gap-y-1">
              <li>Dr. K.K. Chaturvedi</li>
              <li>Dr. Shashi Dahiya</li>
              <li>Dr. M.S. Farooqi</li>
              <li>Dr. Anu Sharma</li>
              <li>Dr. Dwijesh Chandra Mishra</li>
              <li>Dr. Bhim Singh</li>
              <li>Dr. K.K. Pandey</li>
              <li>Dr. Manoj Kumar Sharma</li>
            </ul>
          </div>

        </div>
      </Section>
    </main>
  )
}
