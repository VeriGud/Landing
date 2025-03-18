import React from 'react';
import { Github, LayoutGrid, Table2 } from 'lucide-react';

interface HeaderProps {
  viewMode: 'card' | 'comparison';
  setViewMode: (mode: 'card' | 'comparison') => void;
}

export function Header({ viewMode, setViewMode }: HeaderProps) {
  return (
    <header className="bg-oxocarbon-base01 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-oxocarbon-base05">
            Algorithm Visualizer
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('card')}
                className={`px-4 py-2 text-sm font-medium inline-flex items-center gap-2 transition-colors ${
                  viewMode === 'card'
                    ? 'bg-oxocarbon-base0B text-oxocarbon-base00'
                    : 'bg-oxocarbon-base02 text-oxocarbon-base04 hover:bg-oxocarbon-base01'
                }`}
                title="Show algorithms in card format"
              >
                <LayoutGrid size={16} />
                Card View
              </button>
              <button
                onClick={() => setViewMode('comparison')}
                className={`px-4 py-2 text-sm font-medium inline-flex items-center gap-2 transition-colors ${
                  viewMode === 'comparison'
                    ? 'bg-oxocarbon-base0B text-oxocarbon-base00'
                    : 'bg-oxocarbon-base02 text-oxocarbon-base04 hover:bg-oxocarbon-base01'
                }`}
                title="Compare algorithms side by side"
              >
                <Table2 size={16} />
                Comparison
              </button>
            </div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-oxocarbon-base00 bg-oxocarbon-base0E hover:bg-opacity-90 transition-colors"
            >
              <Github className="h-5 w-5 mr-2" />
              View Source
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}