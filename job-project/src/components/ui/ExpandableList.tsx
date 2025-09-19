 import React, { useState } from 'react';

interface ExpandableItem {
  id: string;
  question: string;
  answer: string;
}

interface ExpandableListProps {
  items: ExpandableItem[];
  className?: string;
}

const ExpandableList = ({ items, className = "" }: ExpandableListProps) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set([items[0]?.id]));

  const toggleItem = (id: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className={`flex flex-col gap-[30px] w-full ${className}`}>
      {items.map((item) => {
        const isExpanded = expandedItems.has(item.id);
        
        return (
          <div
            key={item.id}
            className="w-full bg-background-black rounded-xl shadow-[0px_10px_30px_#00000019]"
          >
            {/* Header */}
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full flex justify-between items-center p-[30px] text-left focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              <span className="text-xl font-semibold leading-relaxed text-text-white pr-4">
                {item.question}
              </span>
              <img 
                src="/images/img_u_arrow_up_right.svg"
                alt={isExpanded ? "Collapse" : "Expand"}
                className={`w-[32px] h-[32px] transition-transform duration-200 flex-shrink-0 ${
                  isExpanded ? 'rotate-45' : ''
                }`}
              />
            </button>

            {/* Expandable Content */}
            {isExpanded && (
              <div className="px-[30px] pb-[30px]">
                <div className="pt-[18px] border-t border-gray-800">
                  <p className="text-xl font-light leading-loose text-text-muted">
                    {item.answer}
                  </p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ExpandableList;