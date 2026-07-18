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
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': 'AI Diet Calculator',
    'description': 'Free nutrition and metabolism calculators using standard formulas (Mifflin-St Jeor, Devine). Calculate BMI, calorie needs, protein intake, and macros instantly.',
    'url': 'https://aidietcalculator.com',
    'applicationCategory': 'HealthApplication',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD',
    },
    'featureList': ['BMI Calculator', 'Calorie Calculator', 'Protein Calculator', 'Macro Calculator', 'BMR Calculator', 'Ideal Weight Calculator', 'Metabolic Diagnostic Tool'],
  }

  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable} bg-background`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
