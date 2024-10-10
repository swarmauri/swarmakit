import React, { useState } from 'react';
import Pinnedlist from './Pinnedlist';

export default {
  title: 'Lists/Pinnedlist',
  component: Pinnedlist,
};

const Template = (args) => {
  const [items, setItems] = useState(args.items);
  const [selectedItem, setSelectedItem] = useState(args.selectedItem);

  const handlePinToggle = (index) => {
    const newItems = [...items];
    newItems[index].pinned = !newItems[index].pinned;
    setItems(newItems);
  };

  return (
    <Pinnedlist
      {...args}
      items={items}
      onPinToggle={handlePinToggle}
      selectedItem={selectedItem}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  items: [
    { name: 'Item 1', pinned: false },
    { name: 'Item 2', pinned: true },
    { name: 'Item 3', pinned: false },
  ],
  selectedItem: null,
};

export const Pinned = Template.bind({});
Pinned.args = {
  ...Default.args,
  items: [
    { name: 'Item 1', pinned: true },
    { name: 'Item 2', pinned: true },
    { name: 'Item 3', pinned: true },
  ],
};

export const Unpinned = Template.bind({});
Unpinned.args = {
  ...Default.args,
  items: [
    { name: 'Item 1', pinned: false },
    { name: 'Item 2', pinned: false },
    { name: 'Item 3', pinned: false },
  ],
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};

export const Selected = Template.bind({});
Selected.args = {
  ...Default.args,
  selectedItem: 1,
};
Selected.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const item = await canvas.getByText('Item 2');
  await userEvent.click(item);
};