import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Path helper to locate the generated files
const getProfilePath = (slug: string) => 
  path.join(process.cwd(), 'content', 'niches', `${slug}.json`);

// 1. Dynamic Meta-Ingestion for SEO/AEO/GEO Dominance
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const filePath = getProfilePath(slug);

  if (!fs.existsSync(filePath)) return {};

  const fileData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  return {
    title: fileData.title,
    description: fileData.description,
    robots: 'index, follow',
    alternates: {
      canonical: `https://aidietcalculator.com/${slug}`
    }
  };
}

// 2. Compile-Time Ingestion (Generates static paths for Vercel at build-time)
export async function generateStaticParams() {
  const dirPath = path.join(process.cwd(), 'content', 'niches');
  if (!fs.existsSync(dirPath)) return [];

  const files = fs.readdirSync(dirPath);
  return files
    .filter(file => file.endsWith('.json'))
    .map(file => ({
      slug: file.replace('.json', '')
    }));
}

// 3. Modern Dynamic Structural Page Renderer
export default async function ProgrammaticDietPage({ params }: PageProps) {
  const { slug } = await params;
  const filePath = getProfilePath(slug);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const profile = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const trackingLink = `https://aidietcalculator.com/recommend/catalyst?utm_campaign=${slug}`;

  // Structured Data Injection Payload
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    'headline': profile.title,
    'description': profile.description,
    'url': `https://aidietcalculator.com/${slug}`,
    'inLanguage': 'en-US',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://aidietcalculator.com/${slug}`
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'AIDietCalculator',
      'url': 'https://aidietcalculator.com'
    }
  };

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'monospace' }}>
      {/* JSON-LD Schema Injection Layer */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Machine-Readable Content Node */}
      <article>
        <header style={{ marginBottom: '20px', borderBottom: '1px solid #333', paddingBottom: '10px' }}>
          <span style={{ fontSize: '12px', textTransform: 'uppercase', color: '#666' }}>
            Operational Category: {profile.category}
          </span>
          <p style={{ fontSize: '11px', margin: '5px 0 0 0', color: '#999' }}>
            Canonical Node: https://aidietcalculator.com/{slug}
          </p>
        </header>

        {/* High-Converting Floating Direct-Response CTA Bridge */}
        <div style={{ 
          background: '#111', 
          color: '#fff', 
          border: '2px solid #ff4d4d', 
          padding: '20px', 
          margin: '25px 0', 
          borderRadius: '5px' 
        }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#ff4d4d' }}>🚨 CRITICAL METABOLIC BREAKTHROUGH</h3>
          <p style={{ fontSize: '14px', lineHeight: '1.5', margin: '0 0 15px 0' }}>
            Calculators only reveal your raw mathematical caloric limits. If your internal gut microbiome is suffering from a bacterial imbalance, your metabolism remains locked down regardless of macro tracking[cite: 2]. Real-world case studies prove that restoring specific lean bacteria strains is the hidden variable behind accelerated, sustained weight reduction[cite: 2].
          </p>
          <a 
            href={trackingLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              display: 'inline-block',
              background: '#ff4d4d', 
              color: '#fff', 
              textDecoration: 'none', 
              fontWeight: 'bold', 
              padding: '12px 24px', 
              borderRadius: '4px',
              fontSize: '15px'
            }}
          >
            👉 Run Your Metabolic Gut Analysis & Activate Lean Bacteria Now
          </a>
        </div>

        {/* Zero-Bloat Raw Semantic Body Stream */}
        <div style={{ whiteSpace: 'pre-wrap', fontSize: '14px', lineHeight: '1.6', marginTop: '20px' }}>
          {profile.markdownBody}
        </div>
      </article>
    </main>
  );
}
