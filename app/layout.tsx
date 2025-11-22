import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Myrtle & Mist - Where Plants Meet Spirit',
  description: 'Discover the sacred connection between nurturing green life and nurturing your soul.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
