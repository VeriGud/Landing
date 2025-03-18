import React from 'react';

interface GitHubLabelProps {
  text: string;
  color: string;
}

export function GitHubLabel({ text, color }: GitHubLabelProps) {
  return (
    <span 
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-transform hover:scale-105 cursor-default ${color}`}
      title={text}
    >
      {text}
    </span>
  );
}