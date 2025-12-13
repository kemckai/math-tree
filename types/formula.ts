export interface Example {
  
  problem: string;
  solution: string;
  steps?: string[];
  explanation?: string;
}

export interface Formula {
  id: string;
  name: string;
  latex: string;
  explanation: string;
  examples: Example[];
  prerequisites?: string[];
  related?: string[];
  level: 'basic-math' | 'pre-algebra' | 'algebra-1' | 'geometry' | 'algebra-2' | 'calculus-1' | 'calculus-2' | 'calculus-3';
  tags: string[];
  proof?: string;
  topic: string;
}

export interface TopicExample {
  title: string;
  description: string;
  solution?: string;
  steps?: string[];
}

export interface Topic {
  id: string;
  name: string;
  color: string;
  children?: Topic[];
  formulas?: string[];
  description?: string;
  examples?: TopicExample[];
  graphics?: {
    type: 'diagram' | 'chart' | 'illustration' | 'graph';
    description: string;
    latex?: string;
  }[];
}

export interface FormulaMetadata {
  id: string;
  name: string;
  level: Formula['level'];
  tags: string[];
  topic: string;
  latex: string;
}
