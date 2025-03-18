import { Algorithm } from '../types';

export const algorithms: Algorithm[] = [
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
  },
  {
    name: "Depth First Search",
    description: "DFS explores a graph by going as deep as possible along each branch before backtracking. It uses a stack (or recursion) to keep track of nodes to visit.",
    timeComplexity: "O(V + E)",
    spaceComplexity: "O(V)",
    status: "stable",
    category: "search",
    characteristics: [
      "Uses stack data structure",
      "Explores deep paths first",
      "Memory efficient for deep graphs"
    ],
    advantages: [
      {
        point: "Memory Efficiency",
        details: [
          "Uses less memory than BFS for deep graphs",
          "Excellent for maze solving and puzzle games"
        ]
      },
      {
        point: "Implementation Simplicity",
        details: [
          "Natural recursive implementation",
          "Simple to understand and modify"
        ]
      }
    ],
    limitations: [
      {
        point: "Completeness",
        details: [
          "Can get stuck in infinite paths",
          "Not guaranteed to find shortest path"
        ]
      },
      {
        point: "Search Pattern",
        details: [
          "May explore unnecessary paths",
          "Not ideal for shortest path problems"
        ]
      }
    ],
    implementations: ["Python", "JavaScript", "Java", "C++", "Ruby"]
  },
  {
    name: "Breadth First Search",
    description: "BFS explores a graph level by level, visiting all nodes at the current depth before moving to nodes at the next depth level. It uses a queue to track nodes to visit.",
    timeComplexity: "O(V + E)",
    spaceComplexity: "O(V)",
    status: "stable",
    category: "search",
    characteristics: [
      "Uses queue data structure",
      "Explores level by level",
      "Guarantees shortest path in unweighted graphs"
    ],
    advantages: [
      {
        point: "Shortest Path",
        details: [
          "Finds shortest path in unweighted graphs",
          "Optimal for level-order traversal"
        ]
      },
      {
        point: "Completeness",
        details: [
          "Guaranteed to find solution if it exists",
          "Won't get stuck in infinite paths"
        ]
      }
    ],
    limitations: [
      {
        point: "Memory Usage",
        details: [
          "Requires more memory than DFS",
          "Memory grows exponentially with branching factor"
        ]
      },
      {
        point: "Performance",
        details: [
          "Slower than DFS for deep solutions",
          "Must store all nodes at current level"
        ]
      }
    ],
    implementations: ["Python", "JavaScript", "Java", "C++", "Go"]
  },
  {
    name: "Greedy Best-First Search",
    description: "A heuristic search algorithm that always chooses the path that appears to be closest to the goal. Unlike A*, it only considers the estimated cost to the goal, ignoring the cost of the path so far.",
    timeComplexity: "O(b^d)",
    spaceComplexity: "O(b^d)",
    status: "stable",
    category: "search",
    characteristics: [
      "Uses heuristic function",
      "Greedy approach to path selection",
      "Faster than A* but not optimal"
    ],
    advantages: [
      {
        point: "Speed",
        details: [
          "Generally faster than A*",
          "Requires less computation per step"
        ]
      },
      {
        point: "Implementation",
        details: [
          "Simpler than A*",
          "Easy to modify heuristic function"
        ]
      }
    ],
    limitations: [
      {
        point: "Optimality",
        details: [
          "Not guaranteed to find shortest path",
          "Can get stuck in local minima"
        ]
      },
      {
        point: "Completeness",
        details: [
          "Not complete in infinite spaces",
          "May miss better solutions"
        ]
      }
    ],
    implementations: ["Python", "C++", "Java", "JavaScript", "Go"]
  }
];
