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
    <div className="bg-oxocarbon-base01 rounded-lg shadow-lg mb-6">
      <div className="border-b border-oxocarbon-base03">
        <nav className="flex -mb-px">
          {algorithms.map((algo) => (
            <button
              key={algo.name}
              className={`
                whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm
                ${selectedAlgorithm === algo.name
                  ? 'border-oxocarbon-base0B text-oxocarbon-base0B bg-oxocarbon-base02'
                  : 'border-transparent text-oxocarbon-base04 hover:text-oxocarbon-base05 hover:border-oxocarbon-base03'
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