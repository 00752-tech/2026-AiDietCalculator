import type { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

// Helper function to recursively find all static page routes inside app/
function getAppRoutes(dir: string, baseDir = dir): string[] {
  let routes: string[] = []
  if (!fs.existsSync(dir)) return routes

  const items = fs.readdirSync(dir, { withFileTypes: true })

  for (const item of items) {
    // Skip hidden folders, API routes, and Next.js private folders
    if (item.name.startsWith('_') || item.name.startsWith('@') || item.name === 'api') continue

    const fullPath = path.join(dir, item.name)

    if (item.isDirectory()) {
      routes = routes.concat(getAppRoutes(fullPath, baseDir))
    } else if (item.name.match(/^page\.(tsx|jsx|ts|js)$/)) {
      let relativePath = path.relative(baseDir, dir).replace(/\\/g, '/')
      
      // Clean up Next.js route groups like (marketing)
      relativePath = relativePath.replace(/\([^)]+\)\/?/g, '')

      // Skip dynamic parameters like [slug] and app/library (handled separately in Section 3)
      if (relativePath.includes('[') || relativePath.startsWith('library')) continue

      routes.push(relativePath ? `/${relativePath}` : '')
    }
  }

  return routes
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://aidietcalculator.com'
  const appDir = path.join(process.cwd(), 'app')

  // 1. Automatically scan all static routes in app/ (finds /start, /tools/bmi-calculator, etc.)
  const staticAppRoutes = getAppRoutes(appDir)
  const sitemapEntries: MetadataRoute.Sitemap = staticAppRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }))

  // Add non-page static text files
  const textFiles = ['/llms.txt', '/llms-full.txt']
  textFiles.forEach((file) => {
    sitemapEntries.push({
      url: `${baseUrl}${file}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    })
  })

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
