'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import type { StoryImage, StoryImageHeroMode } from './story-types'

type StoryImageSlotProps = {
  image: StoryImage
  heroMode: StoryImageHeroMode
}

const getStoryImageSizes = (heroMode: StoryImageHeroMode) => {
  if (heroMode === 'mobile') {
    return '(max-width: 639px) 100vw, 33vw'
  }

  if (heroMode === 'desktop') {
    return '(max-width: 639px) 50vw, 66vw'
  }

  return '(max-width: 639px) 50vw, 33vw'
}

export const StoryImageSlot = ({ image, heroMode }: StoryImageSlotProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const shouldReduceMotion = useReducedMotion()
  const shouldAnimate = mounted && !shouldReduceMotion

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl bg-cream-dark ${
        heroMode === 'mobile'
          ? 'col-span-2 sm:col-span-1'
          : heroMode === 'desktop'
            ? 'col-span-1 sm:col-span-2'
            : ''
      }`}
      initial={shouldAnimate ? { opacity: 0, scale: 1.03 } : false}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      whileInView={shouldAnimate ? { opacity: 1, scale: 1 } : undefined}>
      <div className='relative aspect-4/3 w-full'>
        <Image
          fill
          alt={image.alt}
          className={`object-cover transition-transform duration-700 group-hover:scale-[1.03] ${
            image.orientation === 'portrait' ? 'object-top' : 'object-center'
          }`}
          sizes={getStoryImageSizes(heroMode)}
          src={image.src}
        />
      </div>
    </motion.div>
  )
}
