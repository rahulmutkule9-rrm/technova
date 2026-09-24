import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Highlights } from '@/components/highlights'
import { WhoShouldAttend } from '@/components/who-should-attend'
import { Schedule } from '@/components/schedule'
import { Venue } from '@/components/venue'
import { Registration } from '@/components/registration'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Highlights />
        <WhoShouldAttend />
        <Schedule />
        <Venue />
        <Registration />
      </main>
      <SiteFooter />
    </>
  )
}
