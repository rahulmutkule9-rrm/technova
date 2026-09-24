import { SectionHeading } from '@/components/section-heading'

const schedule = [
  {
    time: '10:00 AM',
    title: 'Registration & Welcome',
    description: 'Check in, settle in, and get ready for the day ahead.',
  },
  {
    time: '10:30 AM',
    title: 'Opening & AI Sessions',
    description:
      'Technical sessions on Artificial Intelligence and Generative AI.',
  },
  {
    time: '12:30 PM',
    title: 'Networking Break',
    description: 'Connect with fellow attendees over a shared break.',
  },
  {
    time: '1:30 PM',
    title: 'Live Demonstrations',
    description:
      'Practical demonstrations of emerging technologies in action.',
  },
  {
    time: '3:00 PM',
    title: 'Software & Future Tech',
    description:
      'Sessions and discussions on software development and what comes next.',
  },
  {
    time: '5:00 PM',
    title: 'Closing',
    description: 'Wrap-up and final networking as the summit concludes.',
  },
]

export function Schedule() {
  return (
    <section
      id="schedule"
      className="scroll-mt-20 bg-secondary/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Event Schedule"
          title="How the day unfolds"
          description="A full day of sessions, demonstrations, and networking — 10:00 AM to 5:00 PM."
        />
        <ol className="mt-12 space-y-0">
          {schedule.map((item, index) => (
            <li
              key={item.time}
              className="group relative grid grid-cols-[auto_1fr] gap-x-6 pb-8 last:pb-0 sm:grid-cols-[8rem_1fr] sm:gap-x-10"
            >
              {/* timeline column */}
              <div className="flex flex-col items-end sm:items-start">
                <span className="font-mono text-sm font-semibold text-primary">
                  {item.time}
                </span>
              </div>

              {/* line + dot */}
              <div className="relative pl-6 sm:pl-8">
                <span className="absolute left-0 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background" />
                {index !== schedule.length - 1 && (
                  <span className="absolute left-0 top-4 h-full w-px -translate-x-1/2 bg-border" />
                )}
                <h3 className="text-lg font-semibold leading-tight">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
