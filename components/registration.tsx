import { ArrowRight, Calendar, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Registration() {
  return (
    <section id="register" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-primary-foreground sm:px-12 sm:py-20">
          {/* decorative grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.25) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              maskImage: 'radial-gradient(80% 80% at 50% 0%, black, transparent 80%)',
            }}
          />
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Secure your spot at TechNova 2026
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/85">
              Registration is online. Sign up through the event registration page to join a
              full day of AI, Generative AI, and emerging technologies.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                render={<a href="#register" />}
                size="lg"
                variant="secondary"
                className="group h-12 px-8 text-base"
              >
                Register Now
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-primary-foreground/85">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                18 October 2026
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Pune, Maharashtra, India
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
