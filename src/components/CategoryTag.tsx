import React from 'react';
import { Algorithm } from '../types';

interface CategoryTagProps {
  category: Algorithm['category'];
}

export function CategoryTag({ category }: CategoryTagProps) {
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