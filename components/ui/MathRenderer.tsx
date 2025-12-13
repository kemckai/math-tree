'use client';

import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface MathRendererProps {
  math: string;
  display?: boolean;
  className?: string;
}

export function MathRenderer({ math, display = false, className = '' }: MathRendererProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(math);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className={`relative group ${className}`}>
      {display ? (
        <div className="flex items-center gap-2">
          <div className="flex-1 overflow-x-auto">
            <BlockMath math={math} />
          </div>
          <button
            onClick={handleCopy}
            className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
            title="Copy formula"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-600" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>
      ) : (
        <span className="inline-flex items-center gap-1">
          <InlineMath math={math} />
        </span>
      )}
    </div>
  );
}
