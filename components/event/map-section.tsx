import { MapPinIcon } from '@/components/shared/icons'
import { strings } from '@/lib/i18n'

const { map: s } = strings

const MAPS = [
  {
    ...s.groom,
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d930.4128674863678!2d105.882478!3d21.126457!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313507000f30a5af%3A0xa03c40fd1fd9a0d1!2zTmjDoCB2xINuIGjDs2EgR2lhIEzGsMahbmc!5e0!3m2!1svi!2s!4v1788429739744!5m2!1svi!2s',
    openUrl: 'https://maps.app.goo.gl/MXZQYyDs5KQZcRbK7',
  },
  {
    ...s.bride,
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3738.193261140107!2d105.957888!3d20.457254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDI3JzI2LjEiTiAxMDXCsDU3JzI4LjQiRQ!5e0!3m2!1svi!2s!4v1788429793393!5m2!1svi!2s',
    openUrl: 'https://maps.app.goo.gl/mQVJXkQtQPsxDMZg7',
  },
] as const

export const MapSection = () => {
  return (
    <div className='relative overflow-hidden bg-cream-dark'>
      <section className='relative z-10 px-6 py-12 sm:px-8 md:px-12 md:py-24'>
        <div className='mx-auto max-w-6xl'>
          <div className='mb-10 text-center'>
            <div className='mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-wine/10'>
              <MapPinIcon className='text-wine' />
            </div>
            <h2 className='mb-4 font-script text-5xl text-wine drop-shadow-sm'>
              {s.heading}
            </h2>
          </div>

          <div className='grid gap-8 md:grid-cols-2'>
            {MAPS.map((map) => (
              <article key={map.title} className='text-center'>
                <h3 className='mb-2 font-serif text-2xl text-wine'>
                  {map.title}
                </h3>
                <p className='mb-5 text-sm text-text-secondary'>
                  {map.address}
                </p>
                <div className='relative h-80 w-full overflow-hidden rounded-3xl border-4 border-white shadow-[0_0_30px_rgba(212,175,55,0.15)] sm:h-96'>
                  <iframe
                    allowFullScreen={true}
                    height='100%'
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                    src={map.embedUrl}
                    style={{ border: 0 }}
                    title={map.iframeTitle}
                    width='100%'
                  />
                </div>
                <a
                  className='mt-6 inline-flex min-h-12 items-center justify-center rounded-full border border-gold bg-wine px-8 py-3 text-sm font-semibold text-cream shadow-lg shadow-wine/20 transition-all hover:bg-gold hover:text-wine focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold'
                  href={map.openUrl}
                  rel='noopener noreferrer'
                  target='_blank'>
                  {s.openMapsLabel}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
