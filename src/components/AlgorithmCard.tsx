import React from 'react';
import { InlineMath } from 'react-katex';
import { Algorithm } from '../types';
import { StatusTag } from './StatusTag';
import { CategoryTag } from './CategoryTag';
import { GitHubLabel } from './GitHubLabel';

interface AlgorithmCardProps {
  algorithm: Algorithm;
}

export function AlgorithmCard({ algorithm }: AlgorithmCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">{algorithm.name}</h2>
            <div className="flex gap-2">
              <StatusTag status={algorithm.status} />
              <CategoryTag category={algorithm.category} />
            </div>
          </div>
          <p className="text-gray-600">{algorithm.description}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Time Complexity</h4>
            <InlineMath math={algorithm.timeComplexity} />
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Space Complexity</h4>
            <InlineMath math={algorithm.spaceComplexity} />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Characteristics</h3>
          <div className="flex flex-wrap gap-2">
            {algorithm.characteristics.map((char, index) => (
              <GitHubLabel 
                key={index} 
                text={char} 
                color="bg-gray-100 text-gray-800"
              />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Implementations</h3>
          <div className="flex flex-wrap gap-2">
            {algorithm.implementations.map((lang) => (
              <GitHubLabel
                key={lang}
                text={lang}
                color="bg-gray-100 text-gray-800"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}