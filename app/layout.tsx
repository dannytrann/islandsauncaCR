import type { Metadata } from 'next'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pacificsauna.ca'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Pacific Sauna & Ocean Plunge | Floating Sauna Campbell River BC',
    template: '%s | Pacific Sauna & Ocean Plunge',
  },
  description: 'Wood-fired floating sauna at the Coast Marina, Campbell River BC. Social and private sessions available. Pacific Ocean cold plunge. Book your experience today.',
  keywords: [
    'floating sauna Campbell River',
    'sauna Campbell River BC',
    'ocean cold plunge Campbell River',
    'wood fired sauna Vancouver Island',
    'private sauna booking BC',
    'floating sauna Coast Marina',
    'sauna experience British Columbia',
    'Pacific Sauna Ocean Plunge',
  ],
  authors: [{ name: 'Pacific Sauna & Ocean Plunge' }],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: siteUrl,
    siteName: 'Pacific Sauna & Ocean Plunge',
    title: 'Pacific Sauna & Ocean Plunge | Floating Sauna Campbell River BC',
    description: 'Wood-fired floating sauna at the Coast Marina, Campbell River BC. Social and private sessions. Pacific Ocean cold plunge.',
    images: [
      {
        url: '/photos/CR-Sauna_038.jpg',
        width: 1200,
        height: 800,
        alt: 'Interior of the Pacific Sauna floating on the marina at Campbell River BC, glowing wood fire and panoramic ocean windows',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pacific Sauna & Ocean Plunge | Floating Sauna Campbell River BC',
    description: 'Wood-fired floating sauna at the Coast Marina, Campbell River BC. Book a social or private session.',
    images: ['/photos/CR-Sauna_038.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
