import { SectionHeading } from '@/components/section-heading'

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About the Event"
          title="One day at the frontier of technology"
          description="TechNova 2026 is a one-day technology summit focused on Artificial Intelligence, Generative AI, software development, and emerging technologies."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <p className="text-pretty text-base leading-relaxed text-muted-foreground">
            The summit brings together practical demonstrations and technical sessions that
            move beyond theory. Whether you build software today or are just getting started,
            you&apos;ll find sessions designed to be hands-on and relevant.
          </p>
          <p className="text-pretty text-base leading-relaxed text-muted-foreground">
            Alongside the talks, TechNova creates space for networking and open discussion
            about where technology is heading — from Generative AI to the tools and ideas
            defining the next generation of software.
          </p>
        </div>
      </div>
    </section>
  )
}
