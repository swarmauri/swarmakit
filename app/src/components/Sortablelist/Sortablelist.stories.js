import React, { useState } from 'react';
import Sortablelist from './Sortablelist';

export default {
  title: 'Lists/Sortablelist',
  component: Sortablelist,
};

const Template = (args) => {
  const [items, setItems] = useState(args.items);
  return <Sortablelist {...args} items={items} onSort={setItems} />;
};

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: '1', content: 'Item 1' },
    { id: '2', content: 'Item 2' },
    { id: '3', content: 'Item 3' },
  ],
};

export const Dragging = Template.bind({});
Dragging.args = {
  ...Default.args,
};

export const Sorted = Template.bind({});
Sorted.args = {
  items: [
    { id: '3', content: 'Item 3' },
    { id: '1', content: 'Item 1' },
    { id: '2', content: 'Item 2' },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};