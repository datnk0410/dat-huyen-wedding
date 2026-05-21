import { strings } from '@/lib/i18n'

import { StoryChapterCard } from './story-chapter-card'
import { getStoryImagesForYear } from './story-images'

const { story: s } = strings

export const StoryChapterList = () => {
  return (
    <div className='flex flex-col gap-16 sm:gap-20 md:gap-24'>
      {s.chapters.map((chapter, index) => {
        const storyChapter = {
          ...chapter,
          paragraphs: chapter.paragraphs as [string, ...string[]],
          images: getStoryImagesForYear(chapter.year),
        }

        return (
          <StoryChapterCard
            key={chapter.year}
            chapter={storyChapter}
            index={index}
          />
        )
      })}
    </div>
  )
}
