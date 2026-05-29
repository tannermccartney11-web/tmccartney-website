import type { Metadata, Viewport } from 'next'
<<<<<<< HEAD
import { Bebas_Neue, Montserrat, DM_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-montserrat',
  display: 'swap',
})

const dmMono = DM_Mono({ 
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-dm-mono',
=======
import { Playfair_Display, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-dm-sans',
>>>>>>> origin/master
  display: 'swap',
})

export const metadata: Metadata = {
<<<<<<< HEAD
  title: 'Tanner McCartney | Creator · Ultrarunner · Filmmaker',
  description: 'Austin-based creator, ultramarathon runner, and filmmaker. Creating content at the intersection of running, filmmaking, and building a business from scratch.',
=======
  title: 'Tanner McCartney | Videographer & Brand Storyteller',
  description: 'Austin-based videographer specializing in brand storytelling, social content strategy, and YouTube growth. Helping brands grow through authentic storytelling.',
>>>>>>> origin/master
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
<<<<<<< HEAD
    <html lang="en" className="dark bg-background">
      <body className={`${bebasNeue.variable} ${montserrat.variable} ${dmMono.variable} font-sans antialiased`}>
=======
    <html lang="en" className="dark">
      <body className={`${playfair.variable} ${dmSans.variable} font-sans antialiased`}>
>>>>>>> origin/master
        {children}
        <Analytics />
      </body>
    </html>
  )
}
