import { CountdownSection } from '@/components/countdown/countdown-section'
import { EventDetailsSection } from '@/components/event/event-details-section'
import { GiftRegistrySection } from '@/components/event/gift-registry-section'
import { MapSection } from '@/components/event/map-section'
import { FamilySection } from '@/components/family/family-section'
import { PhotoGallerySection } from '@/components/gallery/mini-gallery-section'
import { HeroSection } from '@/components/hero'
import { RsvpSection } from '@/components/rsvp/rsvp-section'
import { FloatingCta, Footer } from '@/components/shared'
import type { GuestData } from '@/lib/guests'
import { strings } from '@/lib/i18n'

const { hero } = strings

type HomePageContentProps = {
  guest: GuestData | null
  slug?: string
}

export const HomePageContent = ({ guest, slug }: HomePageContentProps) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    eventType: 'WeddingEvent',
    name: `Wedding of ${hero.groomName} & ${hero.brideName}`,
    description: hero.intro,
    startDate: '2026-06-08',
    endDate: '2026-06-09',
    location: {
      '@type': 'Place',
      name: hero.venue.name,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dong Anh, Hanoi',
        addressCountry: 'VN',
      },
    },
  }

  return (
    <main id='main-content'>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
        type='application/ld+json'
      />
      <HeroSection guest={guest} />
      <CountdownSection />
      <FamilySection />
      <EventDetailsSection />
      <PhotoGallerySection />
      <RsvpSection guestName={guest?.name} slug={slug} />
      <MapSection />
      <GiftRegistrySection />
      <Footer />
      <FloatingCta />
    </main>
  )
}
