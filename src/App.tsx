import React, { useState, useEffect } from 'react';
import { Code2, Github, ArrowRight, X, Tag, Sparkles, AlertTriangle } from 'lucide-react';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

interface Algorithm {
  name: string;
  description: string;
  timeComplexity: string;
  spaceComplexity: string;
  status: 'stable' | 'beta' | 'experimental';
  category: 'graph' | 'search' | 'sorting';
  characteristics: string[];
  advantages: Array<{
    point: string;
    details: string[];
  }>;
  limitations: Array<{
    point: string;
    details: string[];
  }>;
  implementations: string[];
}

const algorithms: Algorithm[] = [
  {
    name: "A* (A-Star)",
    description: "A* combines Dijkstra's algorithm with heuristic estimation of distances. It intelligently explores paths that seem most promising, making it highly efficient for pathfinding with obstacles.",
    timeComplexity: "O(b^d)",
    spaceComplexity: "O(b^d)",
    status: "stable",
    category: "graph",
    characteristics: [
      "Complete and optimal with admissible heuristic",
      "Uses priority queue for efficient node selection",
      "Combines path cost and heuristic estimation"
    ],
    advantages: [
      {
        point: "Optimal Path Finding",
        details: [
          "Guarantees shortest path when using admissible heuristic",
          "Efficiently prunes unnecessary paths"
        ]
      },
      {
        point: "Intelligent Exploration",
        details: [
          "Focuses search toward promising directions",
          "Balances actual cost with estimated remaining distance"
        ]
      }
    ],
    limitations: [
      {
        point: "Memory Usage",
        details: [
          "Can consume significant memory in large graphs",
          "Must store all explored nodes"
        ]
      },
      {
        point: "Heuristic Dependency",
        details: [
          "Performance heavily relies on heuristic quality",
          "Poor heuristics can lead to suboptimal behavior"
        ]
      }
    ],
    implementations: ["C++", "Python", "JavaScript", "Java", "Rust"]
  },
  {
    name: "Dijkstra's Algorithm",
    description: "Dijkstra's algorithm finds the shortest path between nodes in a graph by maintaining a set of unvisited nodes and continuously updating distance values as it explores.",
    timeComplexity: "O((V + E)\\log V)",
    spaceComplexity: "O(V)",
    status: "stable",
    category: "graph",
    characteristics: [
      "Guaranteed optimal for non-negative weights",
      "Uses priority queue for efficient selection",
      "Systematic exploration of all paths"
    ],
    advantages: [
      {
        point: "Optimal Path Finding",
        details: [
          "Always finds the shortest path",
          "Works with any non-negative edge weights"
        ]
      },
      {
        point: "Versatility",
        details: [
          "Applicable to many graph problems",
          "Easy to modify for specific requirements"
        ]
      }
    ],
    limitations: [
      {
        point: "Performance",
        details: [
          "Slower than BFS for unweighted graphs",
          "Explores in all directions unnecessarily"
        ]
      },
      {
        point: "Weight Restrictions",
        details: [
          "Cannot handle negative edge weights",
          "May not be suitable for dynamic graphs"
        ]
      }
    ],
    implementations: ["C++", "Python", "JavaScript", "Java", "Go"]
  }
];

function ComparisonView({ algorithm }: { algorithm: Algorithm }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{algorithm.name}</h2>
        <div className="flex gap-2">
          <StatusTag status={algorithm.status} />
          <CategoryTag category={algorithm.category} />
        </div>
      </div>

      {/* Characteristics Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-lg font-bold text-gray-800">
          <Tag className="h-6 w-6" />
          <span>CHARACTERISTICS</span>
        </div>
        <ul className="space-y-2">
          {algorithm.characteristics.map((char, index) => (
            <li 
              key={index}
              className={`flex items-center gap-2 text-base ${
                index % 3 === 0 ? 'text-green-600' :
                index % 3 === 1 ? 'text-blue-600' :
                'text-yellow-600'
              }`}
            >
              • {char}
            </li>
          ))}
        </ul>
      </div>

      {/* Advantages Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-lg font-bold text-gray-800">
          <Sparkles className="h-6 w-6" />
          <span>ADVANTAGES</span>
        </div>
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

      {/* Limitations Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-lg font-bold text-gray-800">
          <AlertTriangle className="h-6 w-6" />
          <span>LIMITATIONS</span>
        </div>
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

      {/* Complexity Section */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Time Complexity</h4>
          <InlineMath math={algorithm.timeComplexity} />
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Space Complexity</h4>
          <InlineMath math={algorithm.spaceComplexity} />
        </div>
      </div>
    </div>
  );
}

function StatusTag({ status }: { status: Algorithm['status'] }) {
  const colors = {
    stable: "bg-green-100 text-green-800",
    beta: "bg-yellow-100 text-yellow-800",
    experimental: "bg-red-100 text-red-800"
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[status]}`}>
      {status}
    </span>
  );
}

function CategoryTag({ category }: { category: Algorithm['category'] }) {
  const colors = {
    graph: "bg-purple-100 text-purple-800",
    search: "bg-blue-100 text-blue-800",
    sorting: "bg-orange-100 text-orange-800"
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[category]}`}>
      {category}
    </span>
  );
}

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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
                  className={`px-4 py-2 text-sm font-medium ${
                    viewMode === 'card'
                      ? 'bg-gray-800 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Card View
                </button>
                <button
                  onClick={() => setViewMode('comparison')}
                  className={`px-4 py-2 text-sm font-medium ${
                    viewMode === 'comparison'
                      ? 'bg-gray-800 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Comparison View
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

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-3 mb-8">
          {['WebAssembly', 'C', 'Raylib'].map((tech) => (
            <div
              key={tech}
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700"
            >
              <Code2 size={16} className="text-gray-500" />
              <span>{tech}</span>
            </div>
          ))}
        </div>

        {/* Canvas Container */}
        <div className="relative mb-8">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl z-10">
              <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin mb-4" />
              <div className="text-lg font-medium mb-2">Loading WebAssembly...</div>
              <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 transition-all duration-200"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          <div className="bg-white p-1 rounded-xl shadow-sm">
            <canvas
              id="canvas"
              className="w-full aspect-video rounded-lg cursor-crosshair"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>

        {/* Algorithm Selection */}
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

        {/* Algorithm Content */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            {viewMode === 'comparison' ? (
              <ComparisonView
                algorithm={algorithms.find(algo => algo.name === selectedAlgorithm)!}
              />
            ) : (
              <AlgorithmTab
                algorithm={algorithms.find(algo => algo.name === selectedAlgorithm)!}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;