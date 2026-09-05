import Image from 'next/image'

import { GuestPersonalization } from '@/components/guest'
import type { GuestData } from '@/lib/guests'
import { strings } from '@/lib/i18n'
import heroPortrait from '@/public/images/hero-portrait.png'

const { hero: s } = strings

type HeroSectionProps = {
  guest: GuestData | null
}

export const HeroSection = ({ guest }: HeroSectionProps) => {
  return (
    <div className='bg-cream'>
      <section
        aria-labelledby='hero-heading'
        className='overflow-hidden bg-linear-to-b from-wine via-wine-dark to-wine px-6 py-16 text-cream sm:px-8 md:px-12 md:py-32'>
        <div className='mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:items-start md:justify-between'>
          <div className='w-full space-y-12 md:max-w-2xl md:pt-10'>
            <div className='space-y-6'>
              <p className='text-sm font-semibold tracking-[0.35em] text-gold-light uppercase'>
                {s.eyebrow}
              </p>
              <div className='space-y-4'>
                <h1
                  className='font-script text-6xl leading-tight font-normal text-balance sm:text-7xl md:text-8xl'
                  id='hero-heading'>
                  {s.groomName}
                  <span className='mr-4 ml-2 inline-block px-3 align-middle text-[0.6em] text-gold-light opacity-80 md:mr-10 md:ml-4'>
                    &
                  </span>
                  {s.brideName}
                </h1>
                <div className='h-px w-24 bg-gold/70' />
                <p className='max-w-2xl text-lg leading-7 text-cream/85 sm:text-lg'>
                  {guest ? (
                    <>
                      {strings.guest.greeting}{' '}
                      <span className='text-lg font-semibold text-gold-light'>
                        {guest.name}
                      </span>{' '}
                    </>
                  ) : (
                    s.intro
                  )}
                </p>
              </div>
            </div>

            {guest ? (
              <div>
                <GuestPersonalization guest={guest} />
              </div>
            ) : null}
          </div>

          <div className='group relative aspect-4/5 w-full max-w-100 overflow-hidden rounded-2xl border border-white/10 bg-[#8b1a2b] shadow-[0_20px_50px_rgba(0,0,0,0.3)] md:w-2/5'>
            <div className='absolute inset-3 overflow-hidden rounded-2xl border border-gold/20'>
              <Image
                fill
                priority
                alt='Đạt & Huyền — Ảnh cưới'
                className='object-cover transition-transform duration-700'
                quality={70}
                sizes='(max-width: 768px) min(100vw - 3rem, 28rem), 45vw'
                src={heroPortrait}
              />
            </div>
            {/* Subtle color-correcting overlay to unify the red tones */}
            <div className='pointer-events-none absolute inset-0 bg-wine/5 mix-blend-multiply' />

            {/* Glossy overlay for a glass-like finish */}
            <div className='pointer-events-none absolute inset-0 bg-linear-to-tr from-white/5 via-transparent to-white/10' />
          </div>
        </div>
      </section>
    </div>
  )
}
