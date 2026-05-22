import type { Metadata } from 'next'

import { HomePageContent } from '@/app/_components/home-page-content'
import { getGuestById, normalizeGuestId } from '@/lib/guests'
import { strings } from '@/lib/i18n'

const { meta, hero } = strings

type GuestPageProps = {
  params: Promise<{
    id: string
  }>
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://txva.vercel.app'

export async function generateMetadata({
  params,
}: GuestPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const slug = normalizeGuestId(resolvedParams.id)
  const title = `${hero.groomName} & ${hero.brideName} — Lễ cưới 8-9/6 DL`
  const description = hero.intro
  const guestUrl = slug ? `${SITE_URL}/g/${slug}` : SITE_URL

  return {
    title,
    description,
    openGraph: {
      type: 'website',
      title,
      description,
      url: guestUrl,
      images: [
        {
          url: '/images/og-image-2.jpg',
          width: 1200,
          height: 630,
          alt: `${meta.home.ogImageAlt}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/og-image-2.jpg'],
    },
  }
}

export default async function GuestPage({ params }: GuestPageProps) {
  const resolvedParams = await params
  const slug = normalizeGuestId(resolvedParams.id) ?? undefined
  const guest = getGuestById(slug)

  return <HomePageContent guest={guest} slug={slug} />
}
