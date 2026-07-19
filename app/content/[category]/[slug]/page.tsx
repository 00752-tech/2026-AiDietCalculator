import { notFound } from 'next/navigation';
import { niches } from '@/data/niches';

interface PageProps {
  params: {
    category: string;
    slug: string;
  };
}

export async function generateStaticParams() {
  return niches.map((niche) => ({
    category: niche.category,
    slug: niche.slug,
  }));
}

export default async function ContentPage({ params }: PageProps) {
  const niche = niches.find(
    (n) => n.slug === params.slug && n.category === params.category
  );

  if (!niche) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 capitalize">
        {niche.slug.replace(/-/g, ' ')}
      </h1>
      <p className="text-lg text-gray-500 mb-8">Authored by: {niche.expertRole}</p>
      
      <article className="prose lg:prose-xl">
        <p>This content specifically addresses {niche.slug.replace(/-/g, ' ')} as part of our {niche.category} series.</p>
        <div className="bg-blue-600 text-white p-8 rounded-xl my-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Optimize Your Metabolism Today</h3>
            <p className="mb-6">Start your gut microbiome reset with the science-backed Biome® protocol.</p>
            <a href="#" className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                Get Started with Biome®
            </a>
        </div>
      </article>
    </main>
  );
}
