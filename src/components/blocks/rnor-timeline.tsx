"use client";

import { Card, CardContent } from "@/components/ui/card";

interface TimelineItem {
  label: string;
  status: 'NR' | 'ROR';
}

interface TimelineProps {
  items: TimelineItem[];
}

export function RNORTimeline({ items }: TimelineProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'NR':
        return 'bg-blue-500';
      case 'ROR':
        return 'bg-red-500';
      default:
        return 'bg-gray-400';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'NR':
        return 'Safe to sell';
      case 'ROR':
        return 'India taxes apply';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full ${getStatusColor(item.status)}`}></div>
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">{item.label}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                item.status === 'NR' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-red-100 text-red-700'
              }`}>
                {getStatusText(item.status)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
