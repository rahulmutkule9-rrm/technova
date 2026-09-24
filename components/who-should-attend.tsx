import { GraduationCap, Terminal, Lightbulb, Rocket, Briefcase } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const audience = [
  { icon: GraduationCap, label: 'Students' },
  { icon: Terminal, label: 'Software Developers' },
  { icon: Lightbulb, label: 'Technology Enthusiasts' },
  { icon: Rocket, label: 'Entrepreneurs' },
  { icon: Briefcase, label: 'Industry Professionals' },
]

export function WhoShouldAttend() {
  return (
    <section id="attendees" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Who Should Attend"
          title="Built for the curious and the driven"
          description="TechNova 2026 is for anyone interested in Artificial Intelligence and emerging technologies."
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {audience.map((item) => (
            <li
              key={item.label}
              className="flex flex-col items-start gap-4 rounded-2xl border border-border bg-card p-6 lg:items-center lg:text-center"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold leading-snug">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
