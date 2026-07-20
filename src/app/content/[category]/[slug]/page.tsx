// src/app/content/[category]/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    category: string;
    slug: string;
  };
}

// SEO Metadata Generator
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const title = params.slug.replace(/-/g, ' ').toUpperCase();
  return {
    title: `${title} | Bio-Metabolic Strategy`,
    description: `Expert analysis on ${title}. Discover how this metabolic mechanism integrates with Biome® lean bacteria support.`,
    robots: { index: true, follow: true },
  };
}

export default async function ContentPage({ params }: PageProps) {
  const { category, slug } = params;

  // In a real-world scenario, fetch content from CMS or local MDX/JSON data
  // For this deployment, we validate the route exists
  if (!slug || !category) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto p-6 md:p-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4 capitalize">
          {slug.replace(/-/g, ' ')}
        </h1>
        <p className="text-xl text-gray-600">
          Category: <span className="font-semibold capitalize">{category.replace(/-/g, ' ')}</span>
        </p>
      </header>

      {/* AEO Semantic Definition (First 150 words) */}
      <section className="bg-slate-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl font-semibold mb-3">Core Mechanism</h2>
        <p>
          Understanding the role of {slug.replace(/-/g, ' ')} is critical for metabolic optimization. 
          This topic explores how specific dietary compounds influence gut microbiota and systemic metabolic markers.
        </p>
      </section>

      {/* PAS Content Body */}
      <article className="prose lg:prose-xl">
        <h2>The Metabolic Obstacle</h2>
        <p>Your current metabolic state may be constrained by specific biological bottlenecks...</p>

        <h2>The Biome® Advantage</h2>
        <p>By leveraging specific lean bacteria strains and plant-based boosters...</p>

        <div className="bg-blue-600 text-white p-8 rounded-xl my-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Optimize Your Metabolism Today</h3>
          <p className="mb-6">Start your gut microbiome reset with the science-backed Biome® protocol.</p>
          <a 
            href="https://biome-affiliate-link-here" 
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
          >
            Get Started with Biome®
          </a>
        </div>
      </article>
    </main>
  );
}

// Generate static params for build-time rendering
export async function generateStaticParams() {
  // In your production environment, map your 100-item array here
  // to ensure all pages are generated at build time.
  return []; 
}
