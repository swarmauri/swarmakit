import React, { useState } from 'react';
import Pinnedlist from './Pinnedlist';

export default {
  title: 'Lists/Pinnedlist',
  component: Pinnedlist,
};

const Template = (args) => {
  const [items, setItems] = useState(args.items);
  const [selectedItem, setSelectedItem] = useState(null);

  const handlePinToggle = (id) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, pinned: !item.pinned } : item
      )
    );
  };

  return (
    <Pinnedlist
      {...args}
      items={items}
      onPinToggle={handlePinToggle}
      selectedItem={selectedItem}
      onSelect={setSelectedItem}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: 1, name: 'Item 1', pinned: false },
    { id: 2, name: 'Item 2', pinned: false },
    { id: 3, name: 'Item 3', pinned: false },
  ],
};

export const Pinned = Template.bind({});
Pinned.args = {
  items: [
    { id: 1, name: 'Item 1', pinned: true },
    { id: 2, name: 'Item 2', pinned: false },
    { id: 3, name: 'Item 3', pinned: false },
  ],
};

export const Unpinned = Template.bind({});
Unpinned.args = {
  items: [
    { id: 1, name: 'Item 1', pinned: false },
    { id: 2, name: 'Item 2', pinned: false },
    { id: 3, name: 'Item 3', pinned: false },
  ],
};

export const Hover = Template.bind({});
Hover.args = {
  items: [
    { id: 1, name: 'Item 1', pinned: false },
    { id: 2, name: 'Item 2', pinned: false },
    { id: 3, name: 'Item 3', pinned: false },
  ],
};

export const Selected = Template.bind({});
Selected.args = {
  items: [
    { id: 1, name: 'Item 1', pinned: false },
    { id: 2, name: 'Item 2', pinned: false },
    { id: 3, name: 'Item 3', pinned: false },
  ],
};