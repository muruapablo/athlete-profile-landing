import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import AthleteProfile from '@/components/AthleteProfile'
import MetricsSection from '@/components/MetricsSection'
import RaceCalendar from '@/components/RaceCalendar'
import SocialFeed from '@/components/SocialFeed'
import SponsorProposal from '@/components/SponsorProposal'
import Timeline from '@/components/Timeline'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AthleteProfile />
      <MetricsSection />
      <RaceCalendar />
      <SocialFeed />
      <SponsorProposal />
      <Timeline />
      <ContactSection />
      <Footer />
    </main>
  )
}
