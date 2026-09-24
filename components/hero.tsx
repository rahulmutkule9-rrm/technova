import Image from 'next/image'
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,theme(colors.blue.100)_0%,transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(37,99,235,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(37,99,235,0.06) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(70% 60% at 50% 0%, black, transparent 75%)',
          }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-28 sm:px-6 md:pt-36 lg:grid-cols-2 lg:pb-28">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium tracking-wide text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            AI &amp; Future Technology Summit
          </span>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Explore the Future of Technology with{' '}
            <span className="text-primary">AI</span>
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            A one-day summit exploring Artificial Intelligence, Generative AI, software
            development, and the technologies shaping what comes next.
          </p>

          <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-primary" aria-hidden="true" />
              <div>
                <dt className="sr-only">Date</dt>
                <dd className="text-sm font-medium">18 October 2026</dd>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-primary" aria-hidden="true" />
              <div>
                <dt className="sr-only">Time</dt>
                <dd className="text-sm font-medium">10:00 AM – 5:00 PM</dd>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
              <div>
                <dt className="sr-only">Location</dt>
                <dd className="text-sm font-medium">Pune, Maharashtra, India</dd>
              </div>
            </div>
          </dl>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button
            render={<a href="#register" />}
            size="lg"
            className="group h-12 px-7 text-base"
          >
            Register Now
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <Button
            render={<a href="#about" />}
            size="lg"
            variant="outline"
            className="h-12 px-7 text-base"
          >
            Learn More
          </Button>
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:120ms]">
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-primary/10 lg:max-w-none">
            <Image
              src="/images/hero-tech.png"
              alt="Abstract visualization of an AI neural network"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
