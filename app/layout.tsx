import './globals.css'

import type { Metadata } from 'next'
import { Inter, Noto_Serif } from 'next/font/google'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'vietnamese'],
})

const notoSerif = Noto_Serif({
  variable: '--font-noto-serif',
  subsets: ['latin', 'vietnamese'],
})

export const metadata: Metadata = {
  title: 'Xuân Tùng & Vân Anh — Thiệp cưới',
  description:
    'Thiệp cưới Xuân Tùng & Vân Anh. Tiệc đãi khách 08/06/2026, lễ thành hôn 09/06/2026 tại Sân đình thôn Gia Lương, Đông Anh, Hà Nội.',
  openGraph: {
    title: 'Xuân Tùng & Vân Anh — Thiệp cưới',
    description:
      'Thiệp cưới Xuân Tùng & Vân Anh. Tiệc đãi khách 08/06/2026, lễ thành hôn 09/06/2026 tại Sân đình thôn Gia Lương, Đông Anh, Hà Nội.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      className={`${inter.variable} ${notoSerif.variable} h-full antialiased`}
      lang='vi'>
      <body className='flex min-h-full flex-col bg-cream font-sans text-wine'>
        {children}
      </body>
    </html>
  )
}
