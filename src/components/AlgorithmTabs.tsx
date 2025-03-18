import React from 'react';
import { Algorithm } from '../types';
import { StatusTag } from './StatusTag';
import { CategoryTag } from './CategoryTag';

interface AlgorithmTabsProps {
  algorithms: Algorithm[];
  selectedAlgorithm: string;
  setSelectedAlgorithm: (name: string) => void;
}

export function AlgorithmTabs({ algorithms, selectedAlgorithm, setSelectedAlgorithm }: AlgorithmTabsProps) {
  return (
    <div className="bg-white rounded-lg shadow mb-6">
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px">
          {algorithms.map((algo) => (
            <button
              key={algo.name}
              className={`
                whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm
                ${selectedAlgorithm === algo.name
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
              onClick={() => setSelectedAlgorithm(algo.name)}
            >
              {algo.name}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}