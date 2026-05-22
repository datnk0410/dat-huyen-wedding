'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { SectionWrapper } from '@/components/shared'
import { strings } from '@/lib/i18n'

const { countdown: s, hero } = strings

const TARGET_DATE = new Date('2026-06-08T16:30:00+07:00').getTime()

const getTimeLeft = () => {
  const difference = TARGET_DATE - Date.now()

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
  }
}

export const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    setTimeLeft(getTimeLeft())

    const interval = setInterval(() => {
      const nextTimeLeft = getTimeLeft()
      setTimeLeft(nextTimeLeft)

      if (
        nextTimeLeft.days === 0 &&
        nextTimeLeft.hours === 0 &&
        nextTimeLeft.minutes === 0 &&
        nextTimeLeft.seconds === 0
      ) {
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const timeUnits = [
    { label: s.units.days, value: timeLeft.days },
    { label: s.units.hours, value: timeLeft.hours },
    { label: s.units.minutes, value: timeLeft.minutes },
    { label: s.units.seconds, value: timeLeft.seconds },
  ]

  return (
    <div className='bg-cream'>
      <SectionWrapper className='px-6 py-12 sm:px-8 md:px-12'>
        <motion.div
          className='relative mx-auto max-w-3xl overflow-hidden rounded-4xl border border-gold/30 bg-wine/95 p-6 text-center text-cream shadow-[0_0_40px_rgba(212,175,55,0.15)] backdrop-blur-md sm:p-8'
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}>
          {/* Subtle glowing orb in background */}
          <div className='pointer-events-none absolute top-0 left-1/2 h-32 w-full max-w-md -translate-x-1/2 rounded-full bg-gold/10 blur-[60px]' />

          <h2 className='relative mb-4 text-xs font-semibold tracking-wider text-gold-light uppercase sm:mb-8 sm:text-sm'>
            {s.heading}
          </h2>
          <div className='relative flex justify-center gap-3 sm:gap-8'>
            {timeUnits.map((unit) => (
              <div
                key={unit.label}
                className='flex min-w-12.5 flex-col items-center sm:min-w-20'>
                <span className='font-serif text-4xl font-bold text-gold-light drop-shadow-sm sm:text-5xl lg:text-6xl'>
                  {unit.value.toString().padStart(2, '0')}
                </span>
                <span className='mt-2 text-[10px] tracking-widest text-white uppercase sm:text-sm'>
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
          <div className='relative mt-8 sm:mt-10'>
            <a
              className='inline-flex min-h-10 items-center justify-center rounded-full border border-gold bg-gold-light px-8 py-2 text-sm font-semibold text-wine shadow-lg shadow-black/10 transition-colors hover:bg-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold'
              href='#rsvp'>
              {hero.ctaRsvp} ngay nhé!
            </a>
          </div>
        </motion.div>
      </SectionWrapper>
    </div>
  )
}
