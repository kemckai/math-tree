import { getTopics, findTopicById } from '@/lib/content/topics';
import { getFormulasByTopic } from '@/lib/content/formulas';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ topicId: string }>;
}

export default async function TopicPage({ params }: PageProps) {
  const { topicId } = await params;
  const topics = getTopics();
  const topic = findTopicById(topics, topicId);

  if (!topic) {
    notFound();
  }

  const formulas = getFormulasByTopic(topicId);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          {topic.name}
        </h1>
        {topic.description && (
          <p className="text-gray-600 dark:text-gray-400">{topic.description}</p>
        )}
      </div>

      {formulas.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {formulas.map((formula) => (
            <Link
              key={formula.id}
              href={`/formula/${formula.id}`}
              className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md transition-all group"
            >
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-1">
                    {formula.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {formula.explanation.substring(0, 100)}...
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">
            No formulas available for this topic yet.
          </p>
        </div>
      )}
    </div>
  );
}
