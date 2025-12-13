'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { searchFormulasClient } from '@/lib/content/search-client';
import { Formula } from '@/types/formula';
import { useRouter } from 'next/navigation';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Formula[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [formulas, setFormulas] = useState<Formula[]>([]);
  const [loading, setLoading] = useState(true);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    // Load formulas from API
    fetch('/api/formulas')
      .then(res => res.json())
      .then(data => {
        setFormulas(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load formulas:', err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (query.trim() && formulas.length > 0) {
      const searchResults = searchFormulasClient(formulas, query, 8);
      setResults(searchResults);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query, formulas]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (formulaId: string) => {
    setQuery('');
    setIsOpen(false);
    router.push(`/formula/${formulaId}`);
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.trim() && setIsOpen(true)}
          placeholder="Search formulas..."
          className="w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          disabled={loading}
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setIsOpen(false);
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-h-96 overflow-y-auto">
          {results.map((formula) => (
            <button
              key={formula.id}
              onClick={() => handleSelect(formula.id)}
              className="w-full text-left p-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border-b border-gray-100 dark:border-gray-700 last:border-b-0"
            >
              <div className="font-medium text-gray-900 dark:text-gray-100 mb-1">
                {formula.name}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1">
                {formula.explanation.substring(0, 80)}...
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                {formula.topic} • {formula.level}
              </div>
            </button>
          ))}
        </div>
      )}

      {isOpen && query.trim() && results.length === 0 && !loading && (
        <div className="absolute z-50 w-full mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 text-center text-gray-500 dark:text-gray-400">
          No formulas found matching "{query}"
        </div>
      )}
    </div>
  );
}
