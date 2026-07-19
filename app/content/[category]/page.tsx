import Link from 'next/link';
import { notFound } from 'next/navigation';
import { niches } from '@/data/niches';

interface CategoryProps {
  params: {
    category: string;
  };
}

export async function generateStaticParams() {
  const categories = Array.from(new Set(niches.map((n) => n.category)));
  return categories.map((category) => ({ category }));
}

export default function CategoryPage({ params }: CategoryProps) {
  const categoryNiches = niches.filter((n) => n.category === params.category);

  if (categoryNiches.length === 0) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 capitalize">
        {params.category.replace(/-/g, ' ')}
      </h1>
      
      <div className="grid gap-4">
        {categoryNiches.map((niche) => (
          <Link 
            key={niche.slug} 
            href={`/content/${params.category}/${niche.slug}`}
            className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <h2 className="font-semibold capitalize text-lg">{niche.slug.replace(/-/g, ' ')}</h2>
            <p className="text-sm text-slate-500">Expert: {niche.expertRole}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
