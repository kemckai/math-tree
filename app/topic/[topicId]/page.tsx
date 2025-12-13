import { getTopics, findTopicById } from '@/lib/content/topics';
import { getFormulasByTopic } from '@/lib/content/formulas';
import Link from 'next/link';
import { BookOpen, Lightbulb, Image as ImageIcon } from 'lucide-react';
import { notFound } from 'next/navigation';
import { MathRenderer } from '@/components/ui/MathRenderer';

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
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          {topic.name}
        </h1>
        {topic.description && (
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {topic.description}
          </p>
        )}
      </div>

      {/* Examples Section */}
      {topic.examples && topic.examples.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            Examples
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topic.examples.map((example, idx) => (
              <div
                key={idx}
                className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-800"
              >
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {example.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  {example.description}
                </p>
                {example.solution && (
                  <div className="mb-2">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      Solution:{' '}
                    </span>
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {example.solution}
                    </span>
                  </div>
                )}
                {example.steps && example.steps.length > 0 && (
                  <div className="mt-3">
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                      Steps:
                    </div>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      {example.steps.map((step, stepIdx) => (
                        <li key={stepIdx}>{step}</li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Graphics Section */}
      {topic.graphics && topic.graphics.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
            <ImageIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
            Visual Aids
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topic.graphics.map((graphic, idx) => (
              <div
                key={idx}
                className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded">
                    {graphic.type}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  {graphic.description}
                </p>
                {graphic.latex && (
                  <div className="p-3 bg-white dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700">
                    <MathRenderer math={graphic.latex} display={true} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Formulas Section */}
      {formulas.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Formulas in this Topic
          </h2>
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
        </section>
      )}

      {formulas.length === 0 && (
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
