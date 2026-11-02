import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Path helper to locate the generated files
const getProfilePath = (slug: string) => 
  path.join(process.cwd(), 'content', 'niches', `${slug}.json`);

const shortTopic = (title: string) => String(title).split(' | ')[0].trim();

// 1. Dynamic Meta-Ingestion for SEO/AEO/GEO Dominance
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const filePath = getProfilePath(slug);

  if (!fs.existsSync(filePath)) return {};

  const fileData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const topic = shortTopic(fileData.title);
  const title = topic.length <= 38 ? `${topic} | AI Diet Calculator` : topic;
  return {
    title,
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
  const displayTitle = shortTopic(profile.title);
  const body = String(profile.markdownBody).replace(/^\s*#\s+[^\n]*\n+/, '');
  const trackingLink = `https://aidietcalculator.com/recommend/catalyst?utm_campaign=metabolic-compounds-hub${slug}`;

  // Structured Data Injection Payload (E-E-A-T / YMYL Optimized)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    'headline': displayTitle,
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
    },
    'author': {
      '@type': 'Organization',
      'name': 'AIDietCalculator'
    },
    'audience': {
      '@type': 'Patient',
      'audienceType': 'Metabolic Health Consumers'
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
        <header style={{ marginBottom: '20px', borderBottom: '1px solid #333', paddingBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <div>
            <span style={{ fontSize: '12px', textTransform: 'uppercase', color: '#666' }}>
              Operational Category: {profile.category}
            </span>
            <p style={{ fontSize: '11px', margin: '5px 0 0 0', color: '#999' }}>
              Canonical Node: https://aidietcalculator.com/{slug}
            </p>
          </div>
          <a
            href="https://www.google.com/preferences/source?q=aidietcalculator.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '11px', color: '#10b981', textDecoration: 'none', fontWeight: 'bold' }}
          >
            ✦ Add AIDietCalculator to Google AI Answers
          </a>
        </header>

        <h1 style={{ fontSize: '28px', lineHeight: 1.25, margin: '0 0 16px 0' }}>{displayTitle}</h1>

        {/* High-Converting Floating Direct-Response CTA Bridge */}
        <div style={{ 
          background: '#111', 
          color: '#fff', 
          border: '2px solid #ff4d4d', 
          padding: '20px', 
          margin: '25px 0', 
          borderRadius: '5px' 
        }}>
          <p style={{ margin: '0 0 10px 0', color: '#ff4d4d', fontWeight: 700, fontSize: '1.17em' }}>A closer look at Gluco6</p>
          <p style={{ fontSize: '14px', lineHeight: '1.5', margin: '0 0 15px 0' }}>
            Calculators and macro tracking give you numbers, but metabolic health involves more than calories alone. If you would like to explore further, here is a closer look at Gluco6, including its ingredients and product details.
          </p>
          <a 
            href={trackingLink}
            target="_blank"
            rel="sponsored nofollow noopener"
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
            Learn more about Gluco6 →
          </a>
          <p style={{ fontSize: '11px', lineHeight: '1.4', margin: '12px 0 0 0', color: '#aaa' }}>
            Affiliate disclosure: we may earn a commission if you purchase through this link, at no extra cost to you. These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>

        {/* Zero-Bloat Raw Semantic Body Stream */}
        <div style={{ fontSize: '14px', lineHeight: '1.6', marginTop: '20px' }}>
          <ReactMarkdown components={{ h1: ({ node, ...props }) => <h2 {...props} /> }}>{body}</ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
