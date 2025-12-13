'use client';

import { Topic } from '@/types/formula';
import { TopicNode } from './TopicNode';
import { Book } from 'lucide-react';

interface MathTreeProps {
  topics: Topic;
}

export function MathTree({ topics }: MathTreeProps) {
  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <Book className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          <h2 className="font-semibold text-gray-900 dark:text-gray-100">
            {topics.name}
          </h2>
        </div>
      </div>
      <div className="p-2">
        {topics.children?.map((child) => (
          <TopicNode key={child.id} topic={child} />
        ))}
      </div>
    </div>
  );
}
