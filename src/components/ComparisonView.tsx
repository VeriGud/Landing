import React, { useState } from 'react';
import { ArrowRight, X, Tag, Sparkles, AlertTriangle, RefreshCw } from 'lucide-react';
import { InlineMath } from 'react-katex';
import { Algorithm } from '../types';
import { StatusTag } from './StatusTag';
import { CategoryTag } from './CategoryTag';
import { GitHubLabel } from './GitHubLabel';
import { algorithms } from '../data/algorithms';

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
      return "ring-2 ring-blue-500 bg-blue-50";
    }
    if (algoName === secondSelection) {
      return "ring-2 ring-green-500 bg-green-50";
    }
    if (firstSelection && secondSelection) {
      return "opacity-50 cursor-not-allowed";
    }
    return "hover:bg-gray-50 cursor-pointer";
  };

  const selectedAlgorithms = algorithms.filter(
    algo => algo.name === firstSelection || algo.name === secondSelection
  );

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-700">
              {!firstSelection 
                ? "Select first algorithm for comparison"
                : !secondSelection
                ? "Select second algorithm for comparison"
                : "Comparing selected algorithms"}
            </span>
            {(firstSelection || secondSelection) && (
              <button
                onClick={resetSelection}
                className="inline-flex items-center px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Reset Selection
              </button>
            )}
          </div>
          {error && (
            <div className="text-red-600 text-sm flex items-center gap-2">
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
              p-4 rounded-lg border border-gray-200 transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
              ${getTabStyle(algo.name)}
            `}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-gray-900">{algo.name}</h3>
              <div className="flex gap-2">
                <StatusTag status={algo.status} />
                <CategoryTag category={algo.category} />
              </div>
            </div>
            <p className="text-sm text-gray-600 line-clamp-2">{algo.description}</p>
          </button>
        ))}
      </div>

      {selectedAlgorithms.length > 0 && (
        <div className="grid grid-cols-2 gap-8">
          {selectedAlgorithms.map((algo) => (
            <div key={algo.name} className="bg-white rounded-xl shadow-lg p-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">{algo.name}</h2>
                  <div className="flex gap-2">
                    <StatusTag status={algo.status} />
                    <CategoryTag category={algo.category} />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-lg font-bold text-gray-800">
                    <Tag className="h-6 w-6" />
                    <span>CHARACTERISTICS</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {algo.characteristics.map((char, index) => (
                      <GitHubLabel
                        key={index}
                        text={char}
                        color="bg-gray-100 text-gray-800"
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-lg font-bold text-gray-800">
                    <Sparkles className="h-6 w-6" />
                    <span>ADVANTAGES</span>
                  </div>
                  <ul className="space-y-4">
                    {algo.advantages.map((adv, index) => (
                      <li key={index} className="space-y-2">
                        <div className="flex items-center gap-2 text-green-600 font-medium">
                          <ArrowRight className="h-5 w-5" />
                          {adv.point}
                        </div>
                        <ul className="ml-7 space-y-1">
                          {adv.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center gap-2 text-gray-600">
                              <span className="h-2 w-2 bg-gray-400 rounded-full"></span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-lg font-bold text-gray-800">
                    <AlertTriangle className="h-6 w-6" />
                    <span>LIMITATIONS</span>
                  </div>
                  <ul className="space-y-4">
                    {algo.limitations.map((lim, index) => (
                      <li key={index} className="space-y-2">
                        <div className="flex items-center gap-2 text-red-600 font-medium">
                          <X className="h-5 w-5" />
                          {lim.point}
                        </div>
                        <ul className="ml-7 space-y-1">
                          {lim.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center gap-2 text-gray-600">
                              • {detail}
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Time Complexity</h4>
                    <InlineMath math={algo.timeComplexity} />
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Space Complexity</h4>
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