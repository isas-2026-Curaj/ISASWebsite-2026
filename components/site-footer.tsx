export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-secondary text-secondary-foreground">
      {/* subtle diagonal overlay for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -skew-x-6 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="relative container mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3 text-center md:text-left place-items-center md:place-items-start">
          {/* Organized by section */}
          <div>
            <p className="text-sm opacity-90">Organized by</p>
            <div className="mt-4">
              <p className="text-sm leading-relaxed max-w-xs">
                Department of Statistics, SMSCS
                <br />
                Central University of Rajasthan, Ajmer, Rajasthan-305817
              </p>
              
            </div>
          </div>

          {/* ABOUT links */}
          <div>
            <h3 className="text-lg font-semibold tracking-wide">ABOUT</h3>
            <div className="mt-2 mb-4 h-1 w-16 rounded bg-primary" />
            <ul className="space-y-3 text-sm inline-flex flex-col items-center md:items-start">
              <li>
                <a href="/" className="transition-colors hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="transition-colors hover:text-primary">
                  About
                </a>
              </li>
              <li>
                <a href="/committee" className="transition-colors hover:text-primary">
                  Committee
                </a>
              </li>
              <li>
                <a href="/program" className="transition-colors hover:text-primary">
                  Program
                </a>
              </li>
              <li>
                <a href="/contact" className="transition-colors hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT details */}
          <div>
            <h3 className="text-lg font-semibold tracking-wide">CONTACT</h3>
            <div className="mt-2 mb-4 h-1 w-16 rounded bg-primary" />
            <ul className="space-y-3 text-sm inline-flex flex-col items-center md:items-start">
              <li>
                <span className="opacity-80">Email:</span>{" "}
                <a href="mailto:isas@curaj.ac.in" className="transition-colors hover:text-primary">
                  isas@curaj.ac.in
                </a>
              </li>
              <li>
                <span className="opacity-80">Venue:</span>{" "}
                <a
                  href="https://maps.app.goo.gl/jtjoYtpgn3n4nG566?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  CURAJ, Kishangarh, Ajmer
                </a>
              </li>
              <li>
                <span className="opacity-80">Website:</span>{" "}
                <a
                  href="https://www.curaj.ac.in/location"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  curaj.ac.in/location
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="relative bg-muted/40">
        <div className="container mx-auto max-w-7xl px-4 py-4">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Central University of Rajasthan · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
