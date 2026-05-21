'use client'

import { useMemo, useState } from 'react'

import { type ImageItem, ImageModal } from '@/components/shared'

import { StoryImageSlot } from './story-image-slot'
import type { StoryImage } from './story-types'

type StoryChapterGalleryProps = {
  images: StoryImage[]
}

export const StoryChapterGallery = ({ images }: StoryChapterGalleryProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const modalImages: ImageItem[] = useMemo(
    () =>
      images.map((image) => ({
        src: image.src,
        alt: image.alt,
      })),
    [images],
  )

  const openModal = (index: number) => {
    setSelectedIndex(index)
    setIsModalOpen(true)
  }

  return (
    <>
      <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4'>
        {images.map((image, index) => (
          <StoryImageSlot
            key={image.src}
            image={image}
            onOpen={() => openModal(index)}
          />
        ))}
      </div>

      {isModalOpen ? (
        <ImageModal
          images={modalImages}
          initialIndex={selectedIndex}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      ) : null}
    </>
  )
}
