export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-secondary text-secondary-foreground">
      {/* subtle diagonal overlay for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -skew-x-6 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content */}
      <div className="relative container mx-auto max-w-8xl px-4 py-12">
        {/* Two-column layout */}
        <div className="grid gap-10 md:grid-cols-2 text-center md:text-left">
          
          {/* Left: Organized By */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold tracking-wide">Organized By</h3>
            <div className="mt-2 mb-4 h-1 w-16 mx-auto md:mx-0 rounded bg-primary" />
            <p className="text-sm leading-relaxed max-w-xs">
              Department of Statistics, <br />
              School of Mathematics, Statistics and Computational Sciences
              <br />
              Central University of Rajasthan, 
              <br /> Ajmer, Rajasthan – 305817
            </p>
          </div>

          {/* Right: Contact */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <h3 className="text-lg font-semibold tracking-wide">Contact</h3>
            <div className="mt-2 mb-4 h-1 w-16 rounded bg-primary" />
            <ul className="space-y-3 text-sm flex flex-col items-center md:items-end">
              <li>
                <span className="opacity-80">Email:</span>{" "}
                <a
                  href="mailto:isas@curaj.ac.in"
                  className="transition-colors hover:text-primary"
                >
                  isas@curaj.ac.in
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
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
