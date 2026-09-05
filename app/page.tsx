import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { HomePageContent } from '@/app/_components/home-page-content'
import { getGuestById, normalizeGuestId } from '@/lib/guests'
import { strings } from '@/lib/i18n'

const { meta, hero } = strings

type HomePageProps = {
  searchParams?: Promise<{
    g?: string | string[]
  }>
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://txva.vercel.app'

export async function generateMetadata(): Promise<Metadata> {
  const title = `${hero.groomName} & ${hero.brideName} — Lễ cưới 19-20/9 DL`
  const description = hero.intro

  return {
    title,
    description,
    openGraph: {
      type: 'website',
      title,
      description,
      url: SITE_URL,
      images: [
        {
          url: '/images/og-image-2.jpg?v=2',
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
      images: ['/images/og-image-2.jpg?v=2'],
    },
  }
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const resolvedSearchParams = await searchParams
  const slug = normalizeGuestId(resolvedSearchParams?.g)

  if (slug) {
    redirect(`/g/${slug}`)
  }

  const guest = getGuestById(resolvedSearchParams?.g)

  return <HomePageContent guest={guest} />
}
