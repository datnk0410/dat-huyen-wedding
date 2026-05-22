import Image from 'next/image'

import type { GuestData } from '@/lib/guests'
import { strings } from '@/lib/i18n'

const { guest: s } = strings

type GuestPersonalizationProps = {
  guest: GuestData
}

export const GuestPersonalization = ({ guest }: GuestPersonalizationProps) => {
  return (
    <div
      aria-label={s.personalMessageLabel}
      className='grid gap-5 rounded-4xl border border-cream/15 bg-cream/10 p-5 backdrop-blur-sm sm:p-6 md:grid-cols-[minmax(0,1fr)_160px] md:items-start'>
      <div className='space-y-3'>
        <p className='text-sm font-medium tracking-[0.25em] text-gold-light uppercase'>
          {s.personalMessageLabel}
        </p>
        <div className='space-y-2'>
          <p className='text-xl text-cream sm:text-2xl'>
            {strings.hero.invitation.leading}{' '}
            <span className='font-bold text-gold-light'>{guest.name}</span>{' '}
            {strings.hero.invitation.trailing}
          </p>
        </div>
      </div>

      {guest.photo ? (
        <div className='mx-auto w-full max-w-60 overflow-hidden rounded-[1.75rem] border border-cream/20 bg-cream/5'>
          <Image
            alt={`${strings.guestPhotoAlt} - ${guest.name}`}
            className='object-contain'
            height={guest.photo.height}
            sizes='(max-width: 767px) min(100vw - 5rem, 15rem), 160px'
            src={guest.photo.src}
            width={guest.photo.width}
          />
        </div>
      ) : null}
    </div>
  )
}
