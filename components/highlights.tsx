import { Brain, Sparkles, Code2, Presentation, Users, Compass } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const highlights = [
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    description:
      'Technical sessions on applied AI and the ideas driving intelligent systems forward.',
  },
  {
    icon: Sparkles,
    title: 'Generative AI',
    description:
      'A closer look at generative models and how they are reshaping how we create and build.',
  },
  {
    icon: Code2,
    title: 'Software Development',
    description:
      'Practical talks on modern development practices, tools, and workflows.',
  },
  {
    icon: Presentation,
    title: 'Live Demonstrations',
    description:
      'Hands-on demos that show emerging technologies working in the real world.',
  },
  {
    icon: Users,
    title: 'Networking',
    description:
      'Connect with developers, students, entrepreneurs, and technology professionals.',
  },
  {
    icon: Compass,
    title: 'Future of Technology',
    description:
      'Open discussions about the direction of emerging technologies and what comes next.',
  },
]

export function Highlights() {
  return (
    <section
      id="highlights"
      className="scroll-mt-20 bg-secondary/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Event Highlights"
          title="What you can expect"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
