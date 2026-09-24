import { Cpu } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'Attendees', href: '#attendees' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Venue', href: '#venue' },
  { label: 'Register', href: '#register' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Cpu className="h-4 w-4" aria-hidden="true" />
              </span>
              <span>
                TechNova <span className="text-primary">2026</span>
              </span>
            </a>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              AI &amp; Future Technology Summit — 18 October 2026, Pune, Maharashtra, India.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} TechNova 2026. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
