import React from 'react';
import { InlineMath } from 'react-katex';
import { Algorithm } from '../types';
import { StatusTag } from './StatusTag';
import { CategoryTag } from './CategoryTag';
import { GitHubLabel } from './GitHubLabel';
import { Brain, Clock, Zap, HardDrive, Building, ArrowRight, X } from 'lucide-react';

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

interface AlgorithmCardProps {
  algorithm: Algorithm;
}

export function AlgorithmCard({ algorithm }: AlgorithmCardProps) {
  const getCharacteristicColor = (char: string) => {
    const matchingKey = Object.keys(characteristicColors).find(key => char.includes(key));
    return matchingKey ? characteristicColors[matchingKey] : 'bg-oxocarbon-base02 text-oxocarbon-base05';
  };

  return (
    <div className="bg-oxocarbon-base01 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl border-2 border-oxocarbon-base03">
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-oxocarbon-base05">{algorithm.name}</h2>
            <div className="flex gap-2">
              <StatusTag status={algorithm.status} />
              <CategoryTag category={algorithm.category} />
            </div>
          </div>
          <p className="text-oxocarbon-base04">{algorithm.description}</p>
        </div>

        <div className="bg-oxocarbon-base09 bg-opacity-20 rounded-lg p-4 border-2 border-oxocarbon-base09">
          <div className="flex items-center gap-2 mb-2">
            <Brain className="h-5 w-5 text-oxocarbon-base09" />
            <h3 className="text-lg font-semibold text-oxocarbon-base05">Simple Explanation</h3>
          </div>
          <p className="text-oxocarbon-base04">{algorithm.simpleExplanation}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-oxocarbon-base02 rounded-lg p-4 border border-oxocarbon-base03">
            <h4 className="text-sm font-medium text-oxocarbon-base05 mb-2">Time Complexity</h4>
            <InlineMath math={algorithm.timeComplexity} />
          </div>
          <div className="bg-oxocarbon-base02 rounded-lg p-4 border border-oxocarbon-base03">
            <h4 className="text-sm font-medium text-oxocarbon-base05 mb-2">Space Complexity</h4>
            <InlineMath math={algorithm.spaceComplexity} />
          </div>
        </div>

        <div className="bg-oxocarbon-base0E bg-opacity-20 rounded-lg p-6 border-2 border-oxocarbon-base0E">
          <h3 className="text-lg font-semibold text-oxocarbon-base05 mb-4 flex items-center gap-2">
            <Zap className="h-5 w-5 text-oxocarbon-base0E" />
            Performance Analysis
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div>
                <div className="flex items-center gap-2 text-sm font-medium text-oxocarbon-base0E">
                  <Clock className="h-4 w-4" />
                  Average Case
                </div>
                <p className="text-oxocarbon-base04">{algorithm.performance.averageCase}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-sm font-medium text-oxocarbon-base0B">
                  <Zap className="h-4 w-4" />
                  Best Case
                </div>
                <p className="text-oxocarbon-base04">{algorithm.performance.bestCase}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-sm font-medium text-oxocarbon-base0A">
                  <Clock className="h-4 w-4" />
                  Worst Case
                </div>
                <p className="text-oxocarbon-base04">{algorithm.performance.worstCase}</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex items-center gap-2 text-sm font-medium text-oxocarbon-base09">
                  <HardDrive className="h-4 w-4" />
                  Memory Usage
                </div>
                <p className="text-oxocarbon-base04">{algorithm.performance.spaceUsage}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-sm font-medium text-oxocarbon-base0D">
                  <Building className="h-4 w-4" />
                  Real World Applications
                </div>
                <ul className="list-disc list-inside text-oxocarbon-base04">
                  {algorithm.performance.realWorldUsage.map((use, index) => (
                    <li key={index}>{use}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-oxocarbon-base05">Characteristics</h3>
          <div className="flex flex-wrap gap-2">
            {algorithm.characteristics.map((char, index) => (
              <GitHubLabel 
                key={index} 
                text={char} 
                color={getCharacteristicColor(char)}
              />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-oxocarbon-base05">Advantages</h3>
          <ul className="space-y-4">
            {algorithm.advantages.map((adv, index) => (
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
          <h3 className="text-lg font-semibold text-oxocarbon-base05">Limitations</h3>
          <ul className="space-y-4">
            {algorithm.limitations.map((lim, index) => (
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

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-oxocarbon-base05">Implementations</h3>
          <div className="flex flex-wrap gap-2">
            {algorithm.implementations.map((lang) => (
              <GitHubLabel
                key={lang}
                text={lang}
                color={`bg-oxocarbon-base0${['B', 'E', 'C', 'D', 'A'][Math.floor(Math.random() * 5)]} text-oxocarbon-base00`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}