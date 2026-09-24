import Image from 'next/image'
import { MapPin, Calendar, Clock } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

export function Venue() {
  return (
    <section id="venue" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border shadow-xl shadow-primary/5">
              <Image
                src="/images/venue-pune.png"
                alt="Modern conference venue in Pune"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading eyebrow="Venue" title="Pune, Maharashtra, India" />
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              TechNova 2026 takes place in Pune — one of India&apos;s leading technology and
              education hubs. Full venue details are shared with registered attendees.
            </p>

            <dl className="mt-8 space-y-4">
              <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
                <Calendar className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                    Date
                  </dt>
                  <dd className="text-sm font-medium">18 October 2026</dd>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
                <Clock className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                    Time
                  </dt>
                  <dd className="text-sm font-medium">10:00 AM – 5:00 PM</dd>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
                <MapPin className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                    Location
                  </dt>
                  <dd className="text-sm font-medium">Pune, Maharashtra, India</dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
