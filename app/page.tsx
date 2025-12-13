import { getTopics } from '@/lib/content/topics';
import { getAllFormulas } from '@/lib/content/formulas';
import Link from 'next/link';
import { BookOpen, TrendingUp, Sparkles } from 'lucide-react';

export default function HomePage() {
  const topics = getTopics();
  const allFormulas = getAllFormulas();
  const featuredFormulas = allFormulas.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
              Math Tree
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Your comprehensive mathematics grimoire
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Quick Links to Major Topics */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6" />
            Explore by Topic
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {topics.children?.slice(0, 8).map((topic) => (
              <Link
                key={topic.id}
                href={`/topic/${topic.id}`}
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md transition-all text-center group"
              >
                <div className="text-2xl mb-2">{getTopicEmoji(topic.id)}</div>
                <div className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {topic.name}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Formulas */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6" />
            Featured Formulas
          </h2>
          {featuredFormulas.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredFormulas.map((formula) => (
                <Link
                  key={formula.id}
                  href={`/formula/${formula.id}`}
                  className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2">
                    {formula.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-2">
                    {formula.explanation.substring(0, 100)}...
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                    <span className="capitalize">{formula.level.replace('-', ' ')}</span>
                    <span>•</span>
                    <span>{formula.topic}</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 dark:text-gray-400 text-center py-8">
              More formulas coming soon!
            </p>
          )}
        </section>

        {/* Stats */}
        <section className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {allFormulas.length}+
              </div>
              <div className="text-gray-600 dark:text-gray-400">Formulas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                {topics.children?.length || 0}
              </div>
              <div className="text-gray-600 dark:text-gray-400">Major Topics</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                8
              </div>
              <div className="text-gray-600 dark:text-gray-400">Math Levels</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function getTopicEmoji(topicId: string): string {
  const emojiMap: Record<string, string> = {
    'basic-math': '🔢',
    'pre-algebra': '📐',
    'algebra-1': '📊',
    'geometry': '📐',
    'algebra-2': '📈',
    'calculus-1': '📉',
    'calculus-2': '🔬',
    'calculus-3': '🌌',
    'tricks': '✨',
    'famous-equations': '🌟',
    'unknowns': '❓',
    'electronics': '⚡',
    'mechanical-engineering': '⚙️',
    'programming': '💻',
    'control-systems': '🎛️',
    'physics': '🔬',
    'astronomy': '🌌',
  };
  return emojiMap[topicId] || '📚';
}
