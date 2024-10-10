import React, { useState } from 'react';
import Virtualizedlist from './Virtualizedlist';

export default {
  title: 'Lists/Virtualizedlist',
  component: Virtualizedlist,
};

const Template = (args) => {
  const [items, setItems] = useState(Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`));
  const [hasMore, setHasMore] = useState(true);

  const loadMore = () => {
    setTimeout(() => {
      if (items.length >= 40) {
        setHasMore(false);
      } else {
        setItems((prevItems) => [
          ...prevItems,
          ...Array.from({ length: 20 }, (_, i) => `Item ${prevItems.length + i + 1}`),
        ]);
      }
    }, 1000);
  };

  return <Virtualizedlist {...args} items={items} loadMore={loadMore} hasMore={hasMore} />;
};

export const Default = Template.bind({});
Default.args = {};

export const LoadingMore = Template.bind({});
LoadingMore.args = {};

export const EndOfList = Template.bind({});
EndOfList.args = {};