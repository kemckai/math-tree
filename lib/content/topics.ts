import { Topic } from '@/types/formula';
import fs from 'fs';
import path from 'path';

const topicsPath = path.join(process.cwd(), 'content/topics.json');

export function getTopics(): Topic {
  const fileContents = fs.readFileSync(topicsPath, 'utf8');
  return JSON.parse(fileContents) as Topic;
}

export function findTopicById(topics: Topic, id: string): Topic | null {
  if (topics.id === id) {
    return topics;
  }
  
  if (topics.children) {
    for (const child of topics.children) {
      const found = findTopicById(child, id);
      if (found) return found;
    }
  }
  
  return null;
}

export function getAllTopicIds(topics: Topic): string[] {
  const ids: string[] = [topics.id];
  
  if (topics.children) {
    for (const child of topics.children) {
      ids.push(...getAllTopicIds(child));
    }
  }
  
  return ids;
}
