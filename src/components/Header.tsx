import React from 'react';
import { Github, LayoutGrid, Table2 } from 'lucide-react';

interface HeaderProps {
  viewMode: 'card' | 'comparison';
  setViewMode: (mode: 'card' | 'comparison') => void;
}

export function Header({ viewMode, setViewMode }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">
            Algorithm Visualizer
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('card')}
                className={`px-4 py-2 text-sm font-medium inline-flex items-center gap-2 ${
                  viewMode === 'card'
                    ? 'bg-gray-800 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                title="Show algorithms in card format"
              >
                <LayoutGrid size={16} />
                Card View
              </button>
              <button
                onClick={() => setViewMode('comparison')}
                className={`px-4 py-2 text-sm font-medium inline-flex items-center gap-2 ${
                  viewMode === 'comparison'
                    ? 'bg-gray-800 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700"
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