export type StoryImageOrientation = 'portrait' | 'landscape' | 'square'

export type StoryImage = {
  src: string
  width: number
  height: number
  alt: string
  orientation: StoryImageOrientation
}

export type StoryChapter = {
  year: number
  title: string
  paragraphs: [string, ...string[]]
  images: StoryImage[]
}
