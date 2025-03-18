import React from 'react';
import { Algorithm } from '../types';

interface StatusTagProps {
  status: Algorithm['status'];
}

export function StatusTag({ status }: StatusTagProps) {
  const colors = {
    stable: "bg-oxocarbon-base0D text-oxocarbon-base00",
    beta: "bg-oxocarbon-base0A text-oxocarbon-base00",
    experimental: "bg-oxocarbon-base0C text-oxocarbon-base00"
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[status]}`}>
      {status}
    </span>
  );
}