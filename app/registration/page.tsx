import Section from "@/components/section"
import { Button } from "@/components/ui/button"
import RegistrationForm from "@/components/registration-form"

export default function RegistrationPage() {
  return (
    <main>
      <Section title="Registration & Accommodation">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-lg border p-5">
            <h4 className="font-semibold">Fees</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="flex items-center justify-between">
                <span>Life Member (ISAS) – Student</span>
                <span>₹4000 (Early) · ₹4500–5500 (Late)</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Researchers / Scientists etc.</span>
                <span>₹5000 (Early) · ₹5500–7000 (Late)</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Institutional Registration (Group)</span>
                <span>₹25,000 · up to ₹30,000</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Group (Three Members) – Student Presentation</span>
                <span>₹10,000 · up to ₹12,000</span>
              </li>
            </ul>
            <div className="mt-4">
              <Button asChild>
                <a href="#register-form">Proceed to Register</a>
              </Button>
            </div>
          </div>

          <div className="rounded-lg border p-5">
            <h4 className="font-semibold">Payment (Online/Offline)</h4>
            <ul className="mt-2 text-sm text-muted-foreground space-y-1">
              <li>Account Name: CENTRAL UNIVERSITY OF RAJASTHAN</li>
              <li>Account No.: 666710210000001</li>
              <li>IFSC Code: BKID0006667</li>
              <li>Bank: BANK OF INDIA</li>
              <li>
                Branch: CURAJ Branch, NH-8, Bandarsindri, Kishangarh, Ajmer, Rajasthan – 305801 · Tel: 01463-238515
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Kept only the registration form section */}
      <Section id="register-form" title="Register Now" subtitle="Fill the form to complete your registration">
        <div className="rounded-lg border p-5 bg-card">
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-muted-foreground">
                Please provide your details. You will receive a confirmation on the website after submission. For
                payment, use the bank details above (online/offline).
              </p>
            </div>
            <div>
              <div className="rounded-lg border p-4 bg-background">
                <RegistrationForm />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  )
}
