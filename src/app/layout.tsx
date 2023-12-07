import type { Metadata } from 'next'
import { Inter, Raleway, Roboto } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

const raleWay = Raleway({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-raleway',
})

export const metadata: Metadata = {
  title: 'Zenon Tech - Construindo interfaces do futuro',
  description: 'Development...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${raleWay.className}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
