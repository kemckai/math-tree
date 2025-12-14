import Fuse, { type IFuseOptions } from 'fuse.js';
import { Formula } from '@/types/formula';
import { getAllFormulas } from './formulas';

let searchIndex: Fuse<Formula> | null = null;
let formulasCache: Formula[] | null = null;

export function buildSearchIndex(): Fuse<Formula> {
  if (searchIndex) {
    return searchIndex;
  }
  
  if (!formulasCache) {
    formulasCache = getAllFormulas();
  }
  
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
  
  searchIndex = new Fuse(formulasCache, options);
  return searchIndex;
}

export function searchFormulas(query: string, limit: number = 10): Formula[] {
  const index = buildSearchIndex();
  
  if (!query.trim()) {
    return [];
  }
  
  const results = index.search(query, { limit });
  return results.map(result => result.item);
}
