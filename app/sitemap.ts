import type { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://aidietcalculator.com'

  // 1. Core Platform Static Routes & Discovery Indices
  const sitemapEntries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/llms.txt`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/llms-full.txt`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/bmi-calculator`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/calorie-calculator`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/protein-calculator`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/macro-calculator`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/bmr-calculator`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/ideal-weight-calculator`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  // 2. Programmatic Ingestion Layer (Niches)
  const baseDir = path.join(process.cwd(), 'content', 'niches')
  if (fs.existsSync(baseDir)) {
    const files = fs.readdirSync(baseDir)
    files
      .filter((file) => file.endsWith('.json'))
      .forEach((file) => {
        const slug = file.replace('.json', '')
        const filePath = path.join(baseDir, file)
        const stats = fs.statSync(filePath)
        sitemapEntries.push({
          url: `${baseUrl}/${slug}`,
          lastModified: stats.mtime,
          changeFrequency: 'weekly',
          priority: 0.7,
        })
      })
  }

  // 3. Expert Pillar Articles (Ingestion Layer for app/library)
  const libraryDir = path.join(process.cwd(), 'app', 'library')
  if (fs.existsSync(libraryDir)) {
    // Scan directory for folders (each folder is an article slug)
    const folders = fs.readdirSync(libraryDir, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name)

    folders.forEach((slug) => {
      sitemapEntries.push({
        url: `${baseUrl}/library/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      })
    })
  }

  return sitemapEntries
}
