import React, { useState } from 'react';

interface LoadMoreButtonInListProps {
  items: string[];
  loadMoreItems: () => Promise<string[]>;
  endOfListText: string;
}

const LoadMoreButtonInList: React.FC<LoadMoreButtonInListProps> = ({ items, loadMoreItems, endOfListText }) => {
  const [displayedItems, setDisplayedItems] = useState<string[]>(items);
  const [loading, setLoading] = useState<boolean>(false);
  const [endOfList, setEndOfList] = useState<boolean>(false);

  const handleLoadMore = async () => {
    setLoading(true);
    const newItems = await loadMoreItems();
    if (newItems.length === 0) {
      setEndOfList(true);
    } else {
      setDisplayedItems(prevItems => [...prevItems, ...newItems]);
    }
    setLoading(false);
  };

  return (
    <div className="load-more-button-in-list">
      <ul>
        {displayedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {endOfList ? (
        <div className="end-of-list">{endOfListText}</div>
      ) : (
        <button onClick={handleLoadMore} disabled={loading} aria-busy={loading}>
          {loading ? 'Loading...' : 'Load More'}
        </button>
      )}
    </div>
  );
};

export default LoadMoreButtonInList;