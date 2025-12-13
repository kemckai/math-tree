import { FormulaDisplay } from '@/components/formula/FormulaDisplay';
import { getFormulaById } from '@/lib/content/formulas';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const formula = getFormulaById(slug);
  
  if (!formula) {
    return {
      title: 'Formula Not Found',
    };
  }

  return {
    title: `${formula.name} - Math Tree`,
    description: formula.explanation.substring(0, 160),
  };
}

export default async function FormulaPage({ params }: PageProps) {
  const { slug } = await params;
  const formula = getFormulaById(slug);

  if (!formula) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <FormulaDisplay formula={formula} />
    </div>
  );
}
