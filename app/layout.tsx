import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pacific Sauna & Ocean Plunge',
  description: 'West Coast sauna. Pacific Ocean cold plunge. Gather, reset, or celebrate.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
