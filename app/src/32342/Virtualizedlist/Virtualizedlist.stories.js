import React, { useState } from 'react';
import Virtualizedlist from './Virtualizedlist';

export default {
  title: 'Lists/Virtualizedlist',
  component: Virtualizedlist,
};

const Template = (args) => {
  const [items, setItems] = useState(args.items);

  const loadMoreItems = () => {
    setTimeout(() => {
      setItems((prevItems) => [...prevItems, ...Array.from({ length: 10 }, (_, i) => `Item ${prevItems.length + i + 1}`)]);
    }, 1000);
  };

  return <Virtualizedlist {...args} items={items} loadMoreItems={loadMoreItems} />;
};

export const Default = Template.bind({});
Default.args = {
  items: Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`),
  hasMore: true,
};

export const LoadingMore = Template.bind({});
LoadingMore.args = {
  items: Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`),
  hasMore: true,
};

export const EndOfList = Template.bind({});
EndOfList.args = {
  items: Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`),
  hasMore: false,
};