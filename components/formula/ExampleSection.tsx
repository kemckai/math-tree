'use client';

import { Example } from '@/types/formula';
import { MathRenderer } from '@/components/ui/MathRenderer';
import { ChevronRight, Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface ExampleSectionProps {
  examples: Example[];
}

export function ExampleSection({ examples }: ExampleSectionProps) {
  const [expandedSteps, setExpandedSteps] = useState<Record<number, boolean>>({});
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const toggleSteps = (index: number) => {
    setExpandedSteps(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const copySolution = async (solution: string, index: number) => {
    try {
      await navigator.clipboard.writeText(solution);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
        Examples
      </h3>
      {examples.map((example, index) => (
        <div
          key={index}
          className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800"
        >
          <div className="mb-3">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <p className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                  Example {index + 1}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {example.problem}
                </p>
              </div>
            </div>
          </div>

          {example.steps && example.steps.length > 0 && (
            <div className="mb-3">
              <button
                onClick={() => toggleSteps(index)}
                className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                <ChevronRight
                  className={`w-4 h-4 transition-transform ${
                    expandedSteps[index] ? 'rotate-90' : ''
                  }`}
                />
                {expandedSteps[index] ? 'Hide' : 'Show'} Steps
              </button>
              
              {expandedSteps[index] && (
                <ol className="mt-2 ml-6 space-y-2 list-decimal">
                  {example.steps.map((step, stepIndex) => (
                    <li
                      key={stepIndex}
                      className="text-gray-600 dark:text-gray-400 text-sm"
                    >
                      {step}
                    </li>
                  ))}
                </ol>
              )}
            </div>
          )}

          <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  Solution:
                </p>
                <div className="text-gray-900 dark:text-gray-100 font-mono">
                  <MathRenderer math={example.solution} />
                </div>
              </div>
              <button
                onClick={() => copySolution(example.solution, index)}
                className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
                title="Copy solution"
              >
                {copiedIndex === index ? (
                  <Check className="w-4 h-4 text-green-600" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-500" />
                )}
              </button>
            </div>
          </div>

          {example.explanation && (
            <div className="mt-3 text-sm text-gray-600 dark:text-gray-400 italic">
              {example.explanation}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
