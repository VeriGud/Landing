import React from 'react';
import { InlineMath } from 'react-katex';
import { Algorithm } from '../types';
import { StatusTag } from './StatusTag';
import { CategoryTag } from './CategoryTag';
import { GitHubLabel } from './GitHubLabel';
import { Brain, Clock, Zap, HardDrive, Building, ArrowRight, X } from 'lucide-react';

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

        <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-100">
          <div className="flex items-center gap-2 mb-2">
            <Brain className="h-5 w-5 text-blue-500" />
            <h3 className="text-lg font-semibold text-blue-700">Simple Explanation</h3>
          </div>
          <p className="text-blue-800">{algorithm.simpleExplanation}</p>
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

        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Zap className="h-5 w-5 text-purple-500" />
            Performance Analysis
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div>
                <div className="flex items-center gap-2 text-sm font-medium text-purple-700">
                  <Clock className="h-4 w-4" />
                  Average Case
                </div>
                <p className="text-gray-600">{algorithm.performance.averageCase}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-sm font-medium text-green-700">
                  <Zap className="h-4 w-4" />
                  Best Case
                </div>
                <p className="text-gray-600">{algorithm.performance.bestCase}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-sm font-medium text-red-700">
                  <Clock className="h-4 w-4" />
                  Worst Case
                </div>
                <p className="text-gray-600">{algorithm.performance.worstCase}</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex items-center gap-2 text-sm font-medium text-blue-700">
                  <HardDrive className="h-4 w-4" />
                  Memory Usage
                </div>
                <p className="text-gray-600">{algorithm.performance.spaceUsage}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-sm font-medium text-indigo-700">
                  <Building className="h-4 w-4" />
                  Real World Applications
                </div>
                <ul className="list-disc list-inside text-gray-600">
                  {algorithm.performance.realWorldUsage.map((use, index) => (
                    <li key={index}>{use}</li>
                  ))}
                </ul>
              </div>
            </div>
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
          <h3 className="text-lg font-semibold text-gray-800">Advantages</h3>
          <ul className="space-y-4">
            {algorithm.advantages.map((adv, index) => (
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
          <h3 className="text-lg font-semibold text-gray-800">Limitations</h3>
          <ul className="space-y-4">
            {algorithm.limitations.map((lim, index) => (
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