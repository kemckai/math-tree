'use client';

import { Topic } from '@/types/formula';
import { ChevronRight, ChevronDown, BookOpen } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

interface TopicNodeProps {
  topic: Topic;
  level?: number;
  path?: string[];
}

const colorClasses: Record<string, string> = {
  blue: 'text-blue-600 dark:text-blue-400',
  cyan: 'text-cyan-600 dark:text-cyan-400',
  green: 'text-green-600 dark:text-green-400',
  purple: 'text-purple-600 dark:text-purple-400',
  yellow: 'text-yellow-600 dark:text-yellow-400',
  orange: 'text-orange-600 dark:text-orange-400',
  red: 'text-red-600 dark:text-red-400',
  pink: 'text-pink-600 dark:text-pink-400',
  emerald: 'text-emerald-600 dark:text-emerald-400',
  indigo: 'text-indigo-600 dark:text-indigo-400',
  rose: 'text-rose-600 dark:text-rose-400',
  teal: 'text-teal-600 dark:text-teal-400',
  amber: 'text-amber-600 dark:text-amber-400',
  violet: 'text-violet-600 dark:text-violet-400',
  slate: 'text-slate-600 dark:text-slate-400',
  sky: 'text-sky-600 dark:text-sky-400',
  fuchsia: 'text-fuchsia-600 dark:text-fuchsia-400',
  gray: 'text-gray-600 dark:text-gray-400',
};

export function TopicNode({ topic, level = 0, path = [] }: TopicNodeProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = topic.children && topic.children.length > 0;
  const hasFormulas = topic.formulas && topic.formulas.length > 0;
  const colorClass = colorClasses[topic.color] || colorClasses.gray;

  return (
    <div className="select-none">
      <div
        className={`flex items-center gap-1 py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer ${
          level > 0 ? 'ml-4' : ''
        }`}
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
      >
        {hasChildren && (
          <span className="w-4 h-4 flex items-center justify-center">
            {isExpanded ? (
              <ChevronDown className="w-3 h-3" />
            ) : (
              <ChevronRight className="w-3 h-3" />
            )}
          </span>
        )}
        {!hasChildren && <span className="w-4" />}
        <BookOpen className={`w-4 h-4 ${colorClass}`} />
        <Link
          href={`/topic/${topic.id}`}
          className={`flex-1 text-sm font-medium ${colorClass} hover:underline`}
          onClick={(e) => e.stopPropagation()}
        >
          {topic.name}
        </Link>
        {hasFormulas && (
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {topic.formulas!.length}
          </span>
        )}
      </div>
      
      {isExpanded && hasChildren && (
        <div className="ml-2">
          {topic.children!.map((child) => (
            <TopicNode
              key={child.id}
              topic={child}
              level={level + 1}
              path={[...path, topic.id]}
            />
          ))}
        </div>
      )}
      
      {isExpanded && hasFormulas && (
        <div className="ml-6">
          {topic.formulas!.map((formulaId) => (
            <Link
              key={formulaId}
              href={`/formula/${formulaId}`}
              className="block py-1 px-2 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 rounded"
            >
              {formulaId.replace(/-/g, ' ')}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
