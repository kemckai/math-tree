import { Formula } from '@/types/formula';
import fs from 'fs';
import path from 'path';

const formulasDirectory = path.join(process.cwd(), 'content/formulas');

export function getAllFormulaIds(): string[] {
  const ids: string[] = [];
  
  function traverseDir(dir: string) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        traverseDir(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.json')) {
        const id = entry.name.replace('.json', '');
        ids.push(id);
      }
    }
  }
  
  traverseDir(formulasDirectory);
  return ids;
}

export function getFormulaById(id: string): Formula | null {
  try {
    function findFormulaFile(dir: string, targetId: string): string | null {
      if (!fs.existsSync(dir)) return null;
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        
        if (entry.isDirectory()) {
          const found = findFormulaFile(fullPath, targetId);
          if (found) return found;
        } else if (entry.isFile() && entry.name === `${targetId}.json`) {
          return fullPath;
        }
      }
      
      return null;
    }
    
    const filePath = findFormulaFile(formulasDirectory, id);
    
    if (!filePath) {
      return null;
    }
    
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents) as Formula;
  } catch (error) {
    console.error(`Error loading formula ${id}:`, error);
    return null;
  }
}

export function getAllFormulas(): Formula[] {
  const ids = getAllFormulaIds();
  const formulas: Formula[] = [];
  
  for (const id of ids) {
    const formula = getFormulaById(id);
    if (formula) {
      formulas.push(formula);
    }
  }
  
  return formulas;
}

export function getFormulasByTopic(topic: string): Formula[] {
  return getAllFormulas().filter(f => f.topic === topic);
}

export function getFormulasByLevel(level: Formula['level']): Formula[] {
  return getAllFormulas().filter(f => f.level === level);
}
