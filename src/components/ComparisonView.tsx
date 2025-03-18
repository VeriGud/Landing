import React, { useState } from 'react';
import { ArrowRight, X, Tag, Sparkles, AlertTriangle, RefreshCw } from 'lucide-react';
import { InlineMath } from 'react-katex';
import { Algorithm } from '../types';
import { StatusTag } from './StatusTag';
import { CategoryTag } from './CategoryTag';
import { GitHubLabel } from './GitHubLabel';
import { algorithms } from '../data/algorithms';

const characteristicColors = {
  'Complete and optimal': 'bg-oxocarbon-base0D text-oxocarbon-base00',
  'Uses priority queue': 'bg-oxocarbon-base0E text-oxocarbon-base00',
  'Combines path cost': 'bg-oxocarbon-base0C text-oxocarbon-base00',
  'Uses stack data structure': 'bg-oxocarbon-base09 text-oxocarbon-base00',
  'Explores deep paths': 'bg-oxocarbon-base0A text-oxocarbon-base00',
  'Memory efficient': 'bg-oxocarbon-base0B text-oxocarbon-base00',
  'Uses queue data structure': 'bg-oxocarbon-base08 text-oxocarbon-base00',
  'Explores level by level': 'bg-oxocarbon-base0F text-oxocarbon-base00',
  'Guarantees shortest path': 'bg-oxocarbon-base07 text-oxocarbon-base00',
  'Uses heuristic function': 'bg-oxocarbon-base0E text-oxocarbon-base00',
  'Greedy approach': 'bg-oxocarbon-base0A text-oxocarbon-base00',
  'Faster than A*': 'bg-oxocarbon-base0B text-oxocarbon-base00',
  'Systematic exploration': 'bg-oxocarbon-base09 text-oxocarbon-base00'
};

export function ComparisonView() {
  const [firstSelection, setFirstSelection] = useState<string | null>(null);
  const [secondSelection, setSecondSelection] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleTabSelect = (algoName: string) => {
    if (firstSelection === null) {
      setFirstSelection(algoName);
      setError(null);
    } else if (secondSelection === null) {
      if (algoName === firstSelection) {
        setError("Please select a different algorithm for comparison");
        return;
      }
      setSecondSelection(algoName);
      setError(null);
    }
  };

  const handleTabDeselect = (algoName: string) => {
    if (algoName === secondSelection) {
      setSecondSelection(null);
    } else if (algoName === firstSelection) {
      setFirstSelection(secondSelection);
      setSecondSelection(null);
    }
    setError(null);
  };

  const resetSelection = () => {
    setFirstSelection(null);
    setSecondSelection(null);
    setError(null);
  };

  const getTabStyle = (algoName: string) => {
    if (algoName === firstSelection) {
      return "ring-2 ring-oxocarbon-base0B bg-oxocarbon-base02";
    }
    if (algoName === secondSelection) {
      return "ring-2 ring-oxocarbon-base0E bg-oxocarbon-base02";
    }
    if (firstSelection && secondSelection) {
      return "opacity-50 cursor-not-allowed";
    }
    return "hover:bg-oxocarbon-base02 cursor-pointer";
  };

  const getCharacteristicColor = (char: string) => {
    const matchingKey = Object.keys(characteristicColors).find(key => char.includes(key));
    return matchingKey ? characteristicColors[matchingKey] : 'bg-oxocarbon-base02 text-oxocarbon-base05';
  };

  const selectedAlgorithms = algorithms.filter(
    algo => algo.name === firstSelection || algo.name === secondSelection
  );

  return (
    <div className="space-y-6">
      <div className="bg-oxocarbon-base02 rounded-lg p-4 shadow-sm border-2 border-oxocarbon-base03">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-oxocarbon-base05">
              {!firstSelection 
                ? "Select first algorithm for comparison"
                : !secondSelection
                ? "Select second algorithm for comparison"
                : "Comparing selected algorithms"}
            </span>
            {(firstSelection || secondSelection) && (
              <button
                onClick={resetSelection}
                className="inline-flex items-center px-3 py-1 text-sm font-medium text-oxocarbon-base05 bg-oxocarbon-base03 rounded-md hover:bg-oxocarbon-base02 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-oxocarbon-base0B"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Reset Selection
              </button>
            )}
          </div>
          {error && (
            <div className="text-oxocarbon-base0A text-sm flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              {error}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {algorithms.map((algo) => (
          <button
            key={algo.name}
            onClick={() => 
              algo.name === firstSelection || algo.name === secondSelection
                ? handleTabDeselect(algo.name)
                : handleTabSelect(algo.name)
            }
            disabled={firstSelection && secondSelection && algo.name !== firstSelection && algo.name !== secondSelection}
            className={`
              p-4 rounded-lg border-2 border-oxocarbon-base03 transition-all duration-200 bg-oxocarbon-base01
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-oxocarbon-base0B
              ${getTabStyle(algo.name)}
            `}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-oxocarbon-base05">{algo.name}</h3>
              <div className="flex gap-2">
                <StatusTag status={algo.status} />
                <CategoryTag category={algo.category} />
              </div>
            </div>
            <p className="text-sm text-oxocarbon-base04 line-clamp-2">{algo.description}</p>
          </button>
        ))}
      </div>

      {selectedAlgorithms.length > 0 && (
        <div className="grid grid-cols-2 gap-8">
          {selectedAlgorithms.map((algo) => (
            <div key={algo.name} className="bg-oxocarbon-base01 rounded-xl shadow-lg p-6 border-2 border-oxocarbon-base03">
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-oxocarbon-base05">{algo.name}</h2>
                  <div className="flex gap-2">
                    <StatusTag status={algo.status} />
                    <CategoryTag category={algo.category} />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-lg font-bold text-oxocarbon-base05">
                    <Tag className="h-6 w-6" />
                    <span>CHARACTERISTICS</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {algo.characteristics.map((char, index) => (
                      <GitHubLabel
                        key={index}
                        text={char}
                        color={getCharacteristicColor(char)}
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-lg font-bold text-oxocarbon-base05">
                    <Sparkles className="h-6 w-6" />
                    <span>ADVANTAGES</span>
                  </div>
                  <ul className="space-y-4">
                    {algo.advantages.map((adv, index) => (
                      <li key={index} className="space-y-2">
                        <div className="flex items-center gap-2 text-oxocarbon-base0B font-medium">
                          <ArrowRight className="h-5 w-5" />
                          {adv.point}
                        </div>
                        <ul className="ml-7 space-y-1">
                          {adv.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center gap-2 text-oxocarbon-base04">
                              <span className="h-2 w-2 bg-oxocarbon-base03 rounded-full"></span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-lg font-bold text-oxocarbon-base05">
                    <AlertTriangle className="h-6 w-6" />
                    <span>LIMITATIONS</span>
                  </div>
                  <ul className="space-y-4">
                    {algo.limitations.map((lim, index) => (
                      <li key={index} className="space-y-2">
                        <div className="flex items-center gap-2 text-oxocarbon-base0A font-medium">
                          <X className="h-5 w-5" />
                          {lim.point}
                        </div>
                        <ul className="ml-7 space-y-1">
                          {lim.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center gap-2 text-oxocarbon-base04">
                              • {detail}
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-oxocarbon-base02 rounded-lg p-4 border border-oxocarbon-base03">
                    <h4 className="text-sm font-medium text-oxocarbon-base05 mb-2">Time Complexity</h4>
                    <InlineMath math={algo.timeComplexity} />
                  </div>
                  <div className="bg-oxocarbon-base02 rounded-lg p-4 border border-oxocarbon-base03">
                    <h4 className="text-sm font-medium text-oxocarbon-base05 mb-2">Space Complexity</h4>
                    <InlineMath math={algo.spaceComplexity} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}