import React from 'react';

interface ListProps {
  children: React.ReactNode;
  direction?: 'horizontal' | 'vertical';
  gap?: string;
  className?: string;
}

const List = ({ 
  children, 
  direction = 'horizontal', 
  gap = "gap-[30px]", 
  className = "" 
}: ListProps) => {
  const directionClass = direction === 'horizontal' ?'flex flex-col sm:flex-row' :'flex flex-col';

  return (
    <div className={`${directionClass} ${gap} w-full ${className}`}>
      {children}
    </div>
  );
};

export default List;