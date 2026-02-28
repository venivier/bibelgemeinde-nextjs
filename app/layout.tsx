import type { Metadata } from 'next'
import './globals.css'
import SiteShell from '@/components/SiteShell'

export const metadata: Metadata = {
  title: 'Bibelgemeinde Magdeburg',
  description: 'Die Bibel. maßgebend fürs Leben – Bibelgemeinde Magdeburg',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}
