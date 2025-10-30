import Section from "@/components/section"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function RegistrationPage() {
  return (
    <main className="space-y-10">
      {/* --- Fees & Payment Section --- */}
      <Section title="Registration & Accommodation">
        <div className="grid md:grid-cols-2 gap-6">
          {/* --- Fees Chart Card --- */}
          <div className="rounded-2xl border bg-background shadow-sm p-6">
            <h4 className="font-semibold text-lg text-primary mb-4">Registration Fee Details</h4>
            <div className="rounded-lg overflow-hidden border bg-white shadow-sm">
              <Image
                src="/images/fee_chart.png"  // 👈 Make sure this image is placed in /public/images/
                alt="Registration Fee Chart"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              <strong>Note:</strong> Non-NET fellowship students of CURAJ will receive a 50% discount on the conference registration fees.
            </p>
            <div className="mt-5 text-center">
              <Button asChild size="lg">
                <a href="https://forms.gle/yrEAyQaeSr1ygqvk8">Proceed to Register</a>
              </Button>
            </div>
          </div>

          {/* --- Payment Card --- */}
          <div className="rounded-2xl border bg-background shadow-sm p-6 flex flex-col justify-between">
            <div>
              <h4 className="font-semibold text-lg text-primary">Payment (Online/Offline)</h4>
              <ul className="mt-3 text-sm text-muted-foreground space-y-1">
                <li><strong>Account Name:</strong> CENTRAL UNIVERSITY OF RAJASTHAN</li>
                <li><strong>Account No.:</strong> 666710210000001</li>
                <li><strong>IFSC Code:</strong> BKID0006667</li>
                <li><strong>Bank:</strong> BANK OF INDIA</li>
                <li>
                  <strong>Branch:</strong> CURAJ Branch, NH-8, Bandarsindri, Kishangarh, Ajmer, Rajasthan – 305801<br />
                  <span>Tel: 01463-238515</span>
                </li>
              </ul>
            </div>

            {/* --- QR Code --- */}
            <div className="mt-6 text-center">
              <h5 className="font-medium mb-2">Scan & Pay using QR Code</h5>
              <div className="inline-block rounded-lg border bg-white p-3 shadow-md">
                <Image
                  src="/images/QR.png"
                  alt="Bank QR Code"
                  width={200}
                  height={200}
                  className="mx-auto rounded-md"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                UPI ID: <strong>boism-666787850001@boi</strong>
              </p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  )
}
