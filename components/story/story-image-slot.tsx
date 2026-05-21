'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import type { StoryImage } from './story-types'

type StoryImageSlotProps = {
  image: StoryImage
  onOpen: () => void
}

const STORY_IMAGE_SIZES =
  '(max-width: 639px) 50vw, (max-width: 1024px) 33vw, 290px'

export const StoryImageSlot = ({ image, onOpen }: StoryImageSlotProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const shouldReduceMotion = useReducedMotion()
  const shouldAnimate = mounted && !shouldReduceMotion

  return (
    <motion.button
      aria-label={image.alt}
      className='group relative overflow-hidden rounded-2xl bg-cream-dark text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine'
      initial={shouldAnimate ? { opacity: 0, scale: 1.03 } : false}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      type='button'
      viewport={{ once: true, amount: 0.2 }}
      whileInView={shouldAnimate ? { opacity: 1, scale: 1 } : undefined}
      onClick={onOpen}>
      <div className='relative aspect-square w-full'>
        <Image
          alt=''
          className='h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1'
          height={image.height}
          sizes={STORY_IMAGE_SIZES}
          src={image.src}
          width={image.width}
        />
        <div className='absolute inset-0 bg-linear-to-t from-wine-dark/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
      </div>
    </motion.button>
  )
}
