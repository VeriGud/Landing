import React from 'react';
import { Code2 } from 'lucide-react';

const techColors: Record<string, { bg: string; text: string }> = {
  'WebAssembly': { bg: 'bg-[#be95ff]', text: 'text-oxocarbon-base00' },
  'C': { bg: 'bg-[#33b1ff]', text: 'text-oxocarbon-base00' },
  'Raylib': { bg: 'bg-[#42be65]', text: 'text-oxocarbon-base00' },
};

export function TechStack() {
  const technologies = ['WebAssembly', 'C', 'Raylib'];

  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {technologies.map((tech) => (
        <div
          key={tech}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-md ${techColors[tech].bg} ${techColors[tech].text} transition-transform hover:scale-105`}
        >
          <Code2 size={16} className="text-current opacity-80" />
          <span className="font-medium">{tech}</span>
        </div>
      ))}
    </div>
  );
}