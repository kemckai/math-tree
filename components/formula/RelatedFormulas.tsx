'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Formula } from '@/types/formula';

interface RelatedFormulasProps {
  relatedIds?: string[];
  allFormulas?: Formula[];
}

export function RelatedFormulas({ relatedIds, allFormulas = [] }: RelatedFormulasProps) {
  if (!relatedIds || relatedIds.length === 0) {
    return null;
  }

  const relatedFormulas = relatedIds
    .map(id => allFormulas.find(f => f.id === id))
    .filter((f): f is Formula => f !== undefined);

  if (relatedFormulas.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Related Formulas
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {relatedFormulas.map((formula) => (
          <Link
            key={formula.id}
            href={`/formula/${formula.id}`}
            className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors group"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {formula.name}
              </span>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
