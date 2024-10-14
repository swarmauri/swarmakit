import React, { useState } from 'react';
import VirtualizedList from './VirtualizedList';

export default {
  title: 'Lists/VirtualizedList',
  component: VirtualizedList,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => {
  const [items, setItems] = useState(args.items);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setItems((prevItems) => [...prevItems, ...Array.from({ length: 20 }, (_, i) => `Item ${prevItems.length + i + 1}`)]);
      setIsLoading(false);
      if (items.length >= 100) {
        setHasMore(false);
      }
    }, 1000);
  };

  return <VirtualizedList {...args} items={items} loadMore={loadMore} isLoading={isLoading} hasMore={hasMore} />;
};

export const Default = Template.bind({});
Default.args = {
  items: Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`),
};

export const LoadingMore = Template.bind({});
LoadingMore.args = {
  items: Array.from({ length: 40 }, (_, i) => `Item ${i + 1}`),
};

export const EndOfList = Template.bind({});
EndOfList.args = {
  items: Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`),
};