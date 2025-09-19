import React from 'react';

interface GridProps {
  children: React.ReactNode;
  columns?: number;
  gap?: string;
  className?: string;
}

const Grid = ({ 
  children, 
  columns = 4, 
  gap = "gap-[12px]", 
  className = "" 
}: GridProps) => {
  const getGridCols = (cols: number) => {
    const colsMap: Record<number, string> = {
      1: 'grid-cols-1',
      2: 'grid-cols-1 sm:grid-cols-2',
      3: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
      4: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4',
      5: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5',
      6: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'
    };
    return colsMap[cols] || 'grid-cols-4';
  };

  return (
    <div className={`grid ${getGridCols(columns)} ${gap} w-full ${className}`}>
      {children}
    </div>
  );
};

export default Grid;