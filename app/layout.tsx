import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Instrument_Serif, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-serif',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'AI Diet Planner & Metabolic Diagnostic Tool',
  description:
    'Get personalized AI-driven diet plans and metabolic insights. Stop guessing your nutritional needs and start achieving your health goals today.',
  generator: 'v0.app',
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aidietcalculator.com',
    siteName: 'AI Diet Calculator',
    title: 'AI Diet Planner & Metabolic Diagnostic Tool',
    description: 'Get personalized AI-driven diet plans and metabolic insights. Stop guessing your nutritional needs and start achieving your health goals today.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Diet Planner & Metabolic Diagnostic Tool',
    description: 'Get personalized AI-driven diet plans and metabolic insights. Stop guessing your nutritional needs and start achieving your health goals today.',
  },
  icons: {
    icon: [
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    apple: '/apple-touch-icon.png',
  },
  other: {
    'msapplication-TileColor': '#0E7C7B',
    'msapplication-config': '/browserconfig.xml',
    'google-site-verification': 'RhY8MQoncEED33YHQnoIBVvxJLYtINYFouF8Bcq3Q84',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [{ media: '(prefers-color-scheme: light)', color: '#F7F9FA' }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const webApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'Nutri-Calc Metabolic Diagnostic',
    'url': 'https://aidietcalculator.com/',
    'description': 'Professional metabolic diagnostic tool for calculating BMR, BMI, and nutritional requirements.',
    'applicationCategory': 'HealthApplication',
    'operatingSystem': 'All',
    'browserRequirements': 'Requires JavaScript',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD',
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'AiDietCalculator',
      'url': 'https://aidietcalculator.com',
    },
  }

  const medicalWebPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    'name': 'AI Diet & Metabolic Health Diagnostic',
    'url': 'https://aidietcalculator.com/',
    'description': 'Evidence-based metabolic diagnostic tools for calculating BMR, BMI, and nutritional requirements for personalized health management.',
    'mainEntity': {
      '@type': 'MedicalCondition',
      'name': 'Metabolic Health',
      'alternateName': 'Metabolism and Nutrition',
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'AiDietCalculator',
      'url': 'https://aidietcalculator.com',
    },
    'inLanguage': 'en-US',
  }

  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable} bg-background`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
