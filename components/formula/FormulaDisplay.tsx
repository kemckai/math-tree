'use client';

import { Formula } from '@/types/formula';
import { MathRenderer } from '@/components/ui/MathRenderer';
import { ExampleSection } from './ExampleSection';
import { RelatedFormulas } from './RelatedFormulas';
import { BookOpen, Tag } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface FormulaDisplayProps {
  formula: Formula;
}

export function FormulaDisplay({ formula }: FormulaDisplayProps) {
  const [allFormulas, setAllFormulas] = useState<Formula[]>([]);

  useEffect(() => {
    fetch('/api/formulas')
      .then(res => res.json())
      .then(data => setAllFormulas(data))
      .catch(err => console.error('Failed to load formulas:', err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        <Link href="/" className="hover:text-gray-900 dark:hover:text-gray-100">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link
          href={`/topic/${formula.topic}`}
          className="hover:text-gray-900 dark:hover:text-gray-100"
        >
          {formula.topic}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">{formula.name}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          {formula.name}
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span className="capitalize">{formula.level.replace('-', ' ')}</span>
          </div>
          <div className="flex items-center gap-1">
            <Tag className="w-4 h-4" />
            <span>{formula.topic}</span>
          </div>
        </div>
      </div>

      {/* Main Formula */}
      <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <MathRenderer math={formula.latex} display={true} />
      </div>

      {/* Explanation */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Explanation
        </h2>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {formula.explanation}
          </p>
        </div>
      </div>

      {/* Proof (if available) */}
      {formula.proof && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Proof Sketch
          </h2>
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
              {formula.proof}
            </p>
          </div>
        </div>
      )}

      {/* Examples */}
      {formula.examples && formula.examples.length > 0 && (
        <ExampleSection examples={formula.examples} />
      )}

      {/* Prerequisites */}
      {formula.prerequisites && formula.prerequisites.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Prerequisites
          </h3>
          <div className="flex flex-wrap gap-2">
            {formula.prerequisites.map((prereq) => (
              <Link
                key={prereq}
                href={`/formula/${prereq}`}
                className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {prereq.replace(/-/g, ' ')}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Related Formulas */}
      <RelatedFormulas relatedIds={formula.related} allFormulas={allFormulas} />

      {/* Tags */}
      {formula.tags && formula.tags.length > 0 && (
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-2">
            {formula.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
