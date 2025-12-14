'use client';

import Fuse, { type IFuseOptions } from 'fuse.js';
import { Formula } from '@/types/formula';

export function buildClientSearchIndex(formulas: Formula[]): Fuse<Formula> {
  const options: IFuseOptions<Formula> = {
    keys: [
      { name: 'name', weight: 0.7 },
      { name: 'explanation', weight: 0.3 },
      { name: 'tags', weight: 0.5 },
      { name: 'latex', weight: 0.2 },
    ],
    threshold: 0.3,
    includeScore: true,
  };
  
  return new Fuse(formulas, options);
}

export function searchFormulasClient(formulas: Formula[], query: string, limit: number = 10): Formula[] {
  if (!query.trim()) {
    return [];
  }
  
  const index = buildClientSearchIndex(formulas);
  const results = index.search(query, { limit });
  return results.map(result => result.item);
}
