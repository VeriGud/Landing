export interface Algorithm {
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