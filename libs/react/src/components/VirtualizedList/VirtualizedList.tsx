import React, { useState, useEffect, useRef } from 'react';

interface VirtualizedListProps {
  items: string[];
  loadMoreItems: () => void;
  isLoading: boolean;
  hasMore: boolean;
}

const VirtualizedList: React.FC<VirtualizedListProps> = ({ items, loadMoreItems, isLoading, hasMore }) => {
  const listRef = useRef<HTMLDivElement | null>(null);

  const onScroll = () => {
    if (!listRef.current || isLoading || !hasMore) return;
    const { scrollTop, scrollHeight, clientHeight } = listRef.current;
    if (scrollHeight - scrollTop === clientHeight) {
      loadMoreItems();
    }
  };

  useEffect(() => {
    const currentRef = listRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', onScroll);
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', onScroll);
      }
    };
  }, [isLoading, hasMore]);

  return (
    <div ref={listRef} className="virtualized-list">
      {items.map((item, index) => (
        <div key={index} className="list-item">
          {item}
        </div>
      ))}
      {isLoading && <div className="loading">Loading more items...</div>}
      {!hasMore && <div className="end-of-list">End of List</div>}
    </div>
  );
};

export default VirtualizedList;