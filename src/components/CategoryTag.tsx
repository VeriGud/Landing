import React from 'react';
import { Algorithm } from '../types';

interface CategoryTagProps {
  category: Algorithm['category'];
}

export function CategoryTag({ category }: CategoryTagProps) {
  const colors = {
    graph: "bg-oxocarbon-base0E text-oxocarbon-base00",
    search: "bg-oxocarbon-base09 text-oxocarbon-base00",
    sorting: "bg-oxocarbon-base08 text-oxocarbon-base00"
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[category]}`}>
      {category}
    </span>
  );
}