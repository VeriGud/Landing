import React from 'react';
import { Code2 } from 'lucide-react';

export function TechStack() {
  const technologies = ['WebAssembly', 'C', 'Raylib'];

  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {technologies.map((tech) => (
        <div
          key={tech}
          className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700"
        >
          <Code2 size={16} className="text-gray-500" />
          <span>{tech}</span>
        </div>
      ))}
    </div>
  );
}