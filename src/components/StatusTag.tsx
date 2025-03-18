import React from 'react';
import { Algorithm } from '../types';

interface StatusTagProps {
  status: Algorithm['status'];
}

export function StatusTag({ status }: StatusTagProps) {
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