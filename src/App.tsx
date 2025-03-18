import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { TechStack } from './components/TechStack';
import { LoadingOverlay } from './components/LoadingOverlay';
import { AlgorithmTabs } from './components/AlgorithmTabs';
import { ComparisonView } from './components/ComparisonView';
import { AlgorithmCard } from './components/AlgorithmCard';
import { algorithms } from './data/algorithms';
import 'katex/dist/katex.min.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(algorithms[0].name);
  const [viewMode, setViewMode] = useState<'card' | 'comparison'>('comparison');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const selectedAlgo = algorithms.find(algo => algo.name === selectedAlgorithm)!;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header viewMode={viewMode} setViewMode={setViewMode} />

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <TechStack />

        <div className="relative mb-8">
          <LoadingOverlay isLoading={isLoading} progress={progress} />
          <div className="bg-white p-1 rounded-xl shadow-sm">
            <canvas
              id="canvas"
              className="w-full aspect-video rounded-lg cursor-crosshair"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>

        {viewMode === 'card' && (
          <AlgorithmTabs
            algorithms={algorithms}
            selectedAlgorithm={selectedAlgorithm}
            setSelectedAlgorithm={setSelectedAlgorithm}
          />
        )}

        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            {viewMode === 'comparison' ? (
              <ComparisonView />
            ) : (
              <AlgorithmCard algorithm={selectedAlgo} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;