import AboutUs from '@/components/AboutUs'
import { HeroSection } from '@/components/HeroSection'
import { WhyUs } from '@/components/WhyUs'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUs />
      <WhyUs />
    </main>
  )
}
